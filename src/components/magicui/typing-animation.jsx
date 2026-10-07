"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * MagicUI TypingAnimation Component with Zero Layout Shift (CLS = 0)
 *
 * Uses CSS Grid overlays + position: absolute active layer with invisible ghost sizers
 * to lock the exact line height and width of all words.
 *
 * Ensures text styling and gradients (like gold-text-gradient) are applied directly to the
 * text span so text is always 100% visible and glowing.
 */
export function TypingAnimation({
  children,
  words,
  className = "",
  style = {},
  duration = 75,
  typeSpeed,
  deleteSpeed,
  delay = 0,
  pauseDelay = 1800,
  loop = false,
  as: Component = "span",
  startOnView = true,
  showCursor = true,
  blinkCursor = true,
  cursorStyle = "line",
  cursorClassName = "",
  align = "auto", // "auto" | "left" | "center" | "right"
  reserveSpace = true,
  ...props
}) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [phase, setPhase] = useState("typing"); // "typing" | "pause" | "deleting"
  const [isInView, setIsInView] = useState(() => !startOnView);
  const elementRef = useRef(null);

  // InView intersection observer with immediate viewport bounding check
  useEffect(() => {
    if (!startOnView) {
      setIsInView(true);
      return;
    }

    const element = elementRef.current;
    if (!element) {
      setIsInView(true);
      return;
    }

    // Immediately check if already in viewport (e.g. Hero section at top of page)
    if (typeof window !== "undefined") {
      const rect = element.getBoundingClientRect();
      if (rect.top <= (window.innerHeight || document.documentElement.clientHeight) + 100 && rect.bottom >= -50) {
        setIsInView(true);
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.01, rootMargin: "100px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [startOnView]);

  const wordsToAnimate = useMemo(() => {
    if (words && words.length > 0) return words;
    if (typeof children === "string") return [children];
    return [];
  }, [words, children]);

  const hasMultipleWords = wordsToAnimate.length > 1;
  const isLooping = loop || hasMultipleWords;

  const typingSpeed = typeSpeed ?? duration;
  const deletingSpeed = deleteSpeed ?? Math.max(30, Math.floor(typingSpeed / 2));

  const shouldStart = startOnView ? isInView : true;

  const animationSourceKey = useMemo(
    () => (words ? words.join("\u0000") : (typeof children === "string" ? children : "")),
    [words, children]
  );

  const prevKeyRef = useRef(animationSourceKey);
  useEffect(() => {
    if (prevKeyRef.current !== animationSourceKey) {
      prevKeyRef.current = animationSourceKey;
      setDisplayedText("");
      setCurrentWordIndex(0);
      setCurrentCharIndex(0);
      setPhase("typing");
    }
  }, [animationSourceKey]);

  useEffect(() => {
    let timeout = null;

    if (shouldStart && wordsToAnimate.length > 0) {
      const currentWord = wordsToAnimate[currentWordIndex] || "";
      const graphemes = Array.from(currentWord);

      const timeoutDelay =
        delay > 0 && displayedText === "" && currentCharIndex === 0
          ? delay
          : phase === "typing"
          ? typingSpeed
          : phase === "deleting"
          ? deletingSpeed
          : pauseDelay;

      timeout = setTimeout(() => {
        switch (phase) {
          case "typing": {
            if (currentCharIndex < graphemes.length) {
              setDisplayedText(graphemes.slice(0, currentCharIndex + 1).join(""));
              setCurrentCharIndex((prev) => prev + 1);
            } else {
              if (isLooping) {
                setPhase("pause");
              }
            }
            break;
          }

          case "pause": {
            setPhase("deleting");
            break;
          }

          case "deleting": {
            if (currentCharIndex > 0) {
              setDisplayedText(graphemes.slice(0, currentCharIndex - 1).join(""));
              setCurrentCharIndex((prev) => prev - 1);
            } else {
              const nextIndex = (currentWordIndex + 1) % wordsToAnimate.length;
              setCurrentWordIndex(nextIndex);
              setPhase("typing");
            }
            break;
          }

          default:
            break;
        }
      }, timeoutDelay);
    }

    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [
    shouldStart,
    phase,
    currentCharIndex,
    currentWordIndex,
    displayedText,
    wordsToAnimate,
    isLooping,
    typingSpeed,
    deletingSpeed,
    pauseDelay,
    delay,
  ]);

  const currentWordGraphemes = Array.from(wordsToAnimate[currentWordIndex] || "");
  const isComplete =
    !isLooping &&
    currentWordIndex === wordsToAnimate.length - 1 &&
    currentCharIndex >= currentWordGraphemes.length &&
    phase !== "deleting";

  const shouldShowCursor =
    showCursor &&
    (!isComplete || loop);

  const getCursorChar = () => {
    switch (cursorStyle) {
      case "block":
        return "▌";
      case "underscore":
        return "_";
      case "line":
      default:
        return "|";
    }
  };

  const isCenter =
    align === "center" ||
    (align === "auto" && (style?.textAlign === "center" || className?.includes("text-center") || className?.includes("mx-auto")));
  const isRight =
    align === "right" ||
    (align === "auto" && (style?.textAlign === "right" || className?.includes("text-right")));

  if (!reserveSpace) {
    return (
      <Component
        ref={elementRef}
        className="typing-animation-root"
        style={style}
        {...props}
      >
        <span className={cn(className)}>{displayedText}</span>
        {shouldShowCursor && (
          <span
            className={cn(
              "typing-cursor",
              blinkCursor && "animate-blink-cursor",
              cursorClassName
            )}
            aria-hidden="true"
          >
            {getCursorChar()}
          </span>
        )}
      </Component>
    );
  }

  return (
    <Component
      ref={elementRef}
      className="typing-animation-container"
      style={{
        position: "relative",
        display: "inline-grid",
        gridTemplateAreas: '"typing-layer"',
        verticalAlign: "baseline",
        maxWidth: "100%",
        ...style,
      }}
      {...props}
    >
      {/* Invisible ghost sizers reserving exact width & height of all words to prevent layout shift */}
      {wordsToAnimate.length > 0 ? (
        wordsToAnimate.map((word, idx) => (
          <span
            key={idx}
            className={cn(className)}
            aria-hidden="true"
            style={{
              gridArea: "typing-layer",
              visibility: "hidden",
              pointerEvents: "none",
              userSelect: "none",
              whiteSpace: "nowrap",
              opacity: 0,
              overflow: "hidden",
              lineHeight: "inherit",
              maxWidth: "100%",
            }}
          >
            {word}
            {showCursor && (
              <span style={{ visibility: "hidden" }}>{getCursorChar()}</span>
            )}
          </span>
        ))
      ) : (
        <span
          className={cn(className)}
          aria-hidden="true"
          style={{
            gridArea: "typing-layer",
            visibility: "hidden",
            pointerEvents: "none",
            userSelect: "none",
            whiteSpace: "nowrap",
            maxWidth: "100%",
          }}
        >
          &nbsp;
        </span>
      )}

      {/* Active typing layer positioned absolutely over the reserved space */}
      <span
        style={{
          gridArea: "typing-layer",
          position: "absolute",
          top: 0,
          bottom: 0,
          left: isCenter ? "50%" : isRight ? "auto" : 0,
          right: isRight ? 0 : "auto",
          transform: isCenter ? "translateX(-50%)" : "none",
          display: "inline-flex",
          alignItems: "center",
          whiteSpace: "nowrap",
          lineHeight: "inherit",
          maxWidth: "100%",
        }}
      >
        <span className={cn(className)}>{displayedText}</span>
        {shouldShowCursor && (
          <span
            className={cn(
              "typing-cursor",
              blinkCursor && "animate-blink-cursor",
              cursorClassName
            )}
            aria-hidden="true"
          >
            {getCursorChar()}
          </span>
        )}
      </span>
    </Component>
  );
}

export default TypingAnimation;
