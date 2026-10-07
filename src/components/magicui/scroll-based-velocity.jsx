import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * ScrollVelocityContainer
 * Container wrapper for one or multiple ScrollVelocityRow components
 */
export function ScrollVelocityContainer({
  children,
  className,
  style,
  ...props
}) {
  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center justify-center overflow-hidden",
        className
      )}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * ScrollVelocityRow
 * High-performance, hardware-accelerated kinetic row that accelerates dynamically with scroll velocity.
 * Seamlessly integrates with Lenis smooth scrolling and standard browser scrolling.
 */
export function ScrollVelocityRow({
  children,
  baseVelocity = 20,
  direction = 1,
  numCopies = 6,
  className,
  style,
  pauseOnHover = false,
  ...props
}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const chunkRef = useRef(null);

  const [chunkWidth, setChunkWidth] = useState(0);
  const isHoveredRef = useRef(false);

  // Measure single copy width for mathematically seamless wrapping
  useEffect(() => {
    const measure = () => {
      if (chunkRef.current) {
        const width = chunkRef.current.getBoundingClientRect().width;
        if (width > 0) {
          setChunkWidth(width);
        }
      }
    };

    measure();

    const resizeObserver = new ResizeObserver(() => {
      measure();
    });

    if (chunkRef.current) {
      resizeObserver.observe(chunkRef.current);
    }

    window.addEventListener("resize", measure);

    // Re-measure after fonts or images might finish loading
    const timer = setTimeout(measure, 300);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measure);
      clearTimeout(timer);
    };
  }, [children]);

  // High-performance RAF animation loop with scroll velocity tracking
  useEffect(() => {
    let animId;
    let lastTime = performance.now();
    let lastScrollY = window.scrollY || window.pageYOffset || 0;
    let scrollVelocity = 0;
    let smoothedScrollVelocity = 0;
    let currentX = 0;

    const onScroll = () => {
      const currentScroll = window.scrollY || window.pageYOffset || 0;
      const delta = currentScroll - lastScrollY;
      lastScrollY = currentScroll;
      // Scroll velocity proportional to scroll distance
      scrollVelocity = delta * 4;
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    // Also support Lenis scroll listener if available
    let lenisUnsub = null;
    if (window.lenis && typeof window.lenis.on === "function") {
      lenisUnsub = window.lenis.on("scroll", ({ velocity }) => {
        if (typeof velocity === "number") {
          scrollVelocity = velocity * 12;
        }
      });
    }

    const frame = (time) => {
      animId = requestAnimationFrame(frame);

      const deltaTime = Math.min((time - lastTime) / 1000, 0.1); // clamp delta to avoid jumps
      lastTime = time;

      // Decay raw scroll velocity
      scrollVelocity *= 0.92;

      // Exponential smoothing for buttery scroll reaction
      smoothedScrollVelocity += (scrollVelocity - smoothedScrollVelocity) * 0.15;

      if (pauseOnHover && isHoveredRef.current) {
        return;
      }

      // Base translation speed (px per second)
      // Normalizing baseVelocity: baseVelocity 20 ≈ 50px/sec at rest
      const calibratedBaseSpeed = (baseVelocity || 20) * 3;

      // Scroll speed modifier: when scrolling down, increases momentum; up reverses or speeds up
      // With direction: direction = 1 moves left, direction = -1 moves right
      const dirSign = direction >= 0 ? 1 : -1;
      const totalSpeed =
        calibratedBaseSpeed * dirSign +
        smoothedScrollVelocity * dirSign * 2.2;

      currentX += totalSpeed * deltaTime;

      if (trackRef.current && chunkWidth > 0) {
        // Mathematically wrap position between 0 and chunkWidth
        const wrappedOffset = ((currentX % chunkWidth) + chunkWidth) % chunkWidth;
        const translateX = -wrappedOffset;

        trackRef.current.style.transform = `translate3d(${translateX}px, 0, 0)`;
      }
    };

    animId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", onScroll);
      if (typeof lenisUnsub === "function") {
        lenisUnsub();
      }
    };
  }, [baseVelocity, direction, chunkWidth, pauseOnHover]);

  return (
    <div
      ref={containerRef}
      className={cn("scroll-velocity-row-wrapper", className)}
      style={{
        display: "flex",
        whiteSpace: "nowrap",
        overflow: "hidden",
        width: "100%",
        userSelect: "none",
        ...style,
      }}
      onMouseEnter={() => {
        isHoveredRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveredRef.current = false;
      }}
      {...props}
    >
      <div
        ref={trackRef}
        className="scroll-velocity-track"
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          willChange: "transform",
        }}
      >
        {Array.from({ length: numCopies }).map((_, index) => (
          <span
            key={index}
            ref={index === 0 ? chunkRef : null}
            className="scroll-velocity-chunk"
            style={{
              display: "inline-flex",
              alignItems: "center",
              flexShrink: 0,
            }}
            aria-hidden={index > 0}
          >
            {children}
          </span>
        ))}
      </div>
    </div>
  );
}

const ScrollBasedVelocity = {
  ScrollVelocityContainer,
  ScrollVelocityRow,
};

export default ScrollBasedVelocity;

