import React from "react";
import { cn } from "@/lib/utils";

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  style = {},
  ...props
}) {
  // Check if custom duration or gap is provided in className or style
  let customStyle = { ...style };

  // Parse [--duration:XXs] if passed in className
  if (className) {
    const durationMatch = className.match(/\[--duration:([^\]]+)\]/);
    if (durationMatch) {
      customStyle["--duration"] = durationMatch[1];
    }
    const gapMatch = className.match(/\[--gap:([^\]]+)\]/);
    if (gapMatch) {
      customStyle["--gap"] = gapMatch[1];
    }
  }

  return (
    <div
      {...props}
      style={customStyle}
      className={cn(
        "marquee-root",
        pauseOnHover && "marquee-pause-hover",
        vertical && "marquee-vertical",
        className
      )}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn(
            "marquee-track",
            reverse && "marquee-reverse"
          )}
          aria-hidden={i > 0}
        >
          {children}
        </div>
      ))}
    </div>
  );
}

export default Marquee;
