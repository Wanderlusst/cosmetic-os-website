import React, { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";

export function AnimatedListItem({ children, isEntering = false }) {
  return (
    <div
      style={{
        width: "100%",
        margin: "0 auto",
        transform: isEntering ? "translateY(-14px) scale(0.96)" : "translateY(0) scale(1)",
        opacity: isEntering ? 0 : 1,
        transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      {children}
    </div>
  );
}

export const AnimatedList = React.memo(
  ({ children, className, delay = 2200, maxItems, pauseOnHover, style = {}, ...props }) => {
    const childrenArray = useMemo(
      () => React.Children.toArray(children),
      [children]
    );

    const [index, setIndex] = useState(2); // start with 2 items visible
    const [latestKey, setLatestKey] = useState(null);

    useEffect(() => {
      if (childrenArray.length === 0) return;

      const interval = setInterval(() => {
        setIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % childrenArray.length;
          setLatestKey(nextIndex);
          return nextIndex;
        });
      }, delay);

      return () => clearInterval(interval);
    }, [delay, childrenArray.length]);

    // Show latest items in reverse order (newest at top)
    const itemsToShow = useMemo(() => {
      const count = Math.min(childrenArray.length, 3);
      const items = [];
      for (let i = 0; i < count; i++) {
        const itemIdx = (index - i + childrenArray.length) % childrenArray.length;
        items.push({
          element: childrenArray[itemIdx],
          key: `anim-item-${itemIdx}-${i}`,
          isEntering: i === 0 && latestKey !== null,
        });
      }
      return items;
    }, [index, childrenArray, latestKey]);

    return (
      <div
        className={cn("flex flex-col items-center w-full", className)}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.6rem",
          width: "100%",
          ...style,
        }}
        {...props}
      >
        {itemsToShow.map(({ element, key, isEntering }) => (
          <AnimatedListItem key={key} isEntering={isEntering}>
            {element}
          </AnimatedListItem>
        ))}
      </div>
    );
  }
);

AnimatedList.displayName = "AnimatedList";
export default AnimatedList;
