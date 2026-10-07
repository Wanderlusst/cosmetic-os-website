import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Scan,
  Activity,
  Microscope,
  Zap,
  Sparkles,
  Layers,
  ShieldAlert,
} from "lucide-react";

export default function AnimatedBeamMultipleOutputDemo({ className }) {
  const containerRef = useRef(null);
  const [beamOffset, setBeamOffset] = useState(0);

  useEffect(() => {
    let animId;
    const startTime = performance.now();

    const animate = (time) => {
      const elapsed = (time - startTime) / 1000;
      // Cycle from 0 to 100% every 3 seconds
      const progress = (elapsed % 3) / 3;
      setBeamOffset(progress);
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, []);

  const inputNodes = [
    { name: "3D Vectra® Biometrics", icon: Scan, color: "#d4af37" },
    { name: "Surgical Telemetry", icon: Activity, color: "#e4a99b" },
    { name: "Cellular Lab Exosomes", icon: Microscope, color: "#f5dfa2" },
  ];

  const outputNodes = [
    { name: "Sciton Joule-X Laser", icon: Zap, color: "#f5dfa2" },
    { name: "Morpheus8 Subdermal RF", icon: Layers, color: "#e4a99b" },
    { name: "HEPA Sterile Theatre", icon: ShieldAlert, color: "#d4af37" },
  ];

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative flex h-[300px] w-full items-center justify-between p-6 select-none overflow-hidden",
        className
      )}
      style={{
        maskImage: "linear-gradient(to top, transparent 10%, #000 100%)",
        WebkitMaskImage: "linear-gradient(to top, transparent 10%, #000 100%)",
      }}
    >
      {/* Dynamic Animated SVG Beams */}
      <svg
        className="absolute inset-0 h-full w-full pointer-events-none"
        viewBox="0 0 400 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          {/* Left-to-Center Beam Gradient */}
          <linearGradient
            id="beam-gradient-left"
            gradientUnits="userSpaceOnUse"
            x1="50"
            y1="0"
            x2="200"
            y2="0"
          >
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.1" />
            <stop
              offset={`${Math.max(0, beamOffset * 100 - 20)}%`}
              stopColor="#d4af37"
              stopOpacity="0.1"
            />
            <stop
              offset={`${beamOffset * 100}%`}
              stopColor="#f5dfa2"
              stopOpacity="1"
            />
            <stop
              offset={`${Math.min(100, beamOffset * 100 + 20)}%`}
              stopColor="#d4af37"
              stopOpacity="0.1"
            />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0.1" />
          </linearGradient>

          {/* Center-to-Right Beam Gradient */}
          <linearGradient
            id="beam-gradient-right"
            gradientUnits="userSpaceOnUse"
            x1="200"
            y1="0"
            x2="350"
            y2="0"
          >
            <stop offset="0%" stopColor="#e4a99b" stopOpacity="0.1" />
            <stop
              offset={`${Math.max(0, beamOffset * 100 - 20)}%`}
              stopColor="#e4a99b"
              stopOpacity="0.1"
            />
            <stop
              offset={`${beamOffset * 100}%`}
              stopColor="#ffffff"
              stopOpacity="1"
            />
            <stop
              offset={`${Math.min(100, beamOffset * 100 + 20)}%`}
              stopColor="#e4a99b"
              stopOpacity="0.1"
            />
            <stop offset="100%" stopColor="#e4a99b" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Input Curved Paths */}
        {/* Top input (y: 60) -> Center (y: 150) */}
        <path
          d="M 60 60 C 130 60, 130 150, 200 150"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
        />
        <path
          d="M 60 60 C 130 60, 130 150, 200 150"
          stroke="url(#beam-gradient-left)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Middle input (y: 150) -> Center (y: 150) */}
        <path
          d="M 60 150 L 200 150"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
        />
        <path
          d="M 60 150 L 200 150"
          stroke="url(#beam-gradient-left)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Bottom input (y: 240) -> Center (y: 150) */}
        <path
          d="M 60 240 C 130 240, 130 150, 200 150"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
        />
        <path
          d="M 60 240 C 130 240, 130 150, 200 150"
          stroke="url(#beam-gradient-left)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Output Curved Paths */}
        {/* Center (y: 150) -> Top Output (y: 60) */}
        <path
          d="M 200 150 C 270 150, 270 60, 340 60"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
        />
        <path
          d="M 200 150 C 270 150, 270 60, 340 60"
          stroke="url(#beam-gradient-right)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Center (y: 150) -> Middle Output (y: 150) */}
        <path
          d="M 200 150 L 340 150"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
        />
        <path
          d="M 200 150 L 340 150"
          stroke="url(#beam-gradient-right)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />

        {/* Center (y: 150) -> Bottom Output (y: 240) */}
        <path
          d="M 200 150 C 270 150, 270 240, 340 240"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
        />
        <path
          d="M 200 150 C 270 150, 270 240, 340 240"
          stroke="url(#beam-gradient-right)"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>

      {/* Left Column: 3 Input Nodes */}
      <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%", gap: "1rem" }}>
        {inputNodes.map((node, i) => {
          const NodeIcon = node.icon;
          return (
            <div
              key={i}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "2.75rem",
                height: "2.75rem",
                borderRadius: "0.85rem",
                background: "rgba(20, 25, 30, 0.95)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
                transition: "all 0.3s ease",
              }}
              title={node.name}
            >
              <NodeIcon size={18} style={{ color: node.color }} />
            </div>
          );
        })}
      </div>

      {/* Center: Aurelia Medical Core Hub */}
      <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "3.75rem",
            height: "3.75rem",
            borderRadius: "1.25rem",
            background: "linear-gradient(135deg, #1c232a, #101418, #0a0c0e)",
            border: "2px solid rgba(212, 175, 55, 0.5)",
            boxShadow: "0 0 35px rgba(212, 175, 55, 0.3)",
          }}
        >
          <Sparkles size={24} style={{ color: "#f5dfa2" }} />
        </div>
        <span style={{ marginTop: "0.5rem", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "#d4af37" }}>
          Aurelia Core
        </span>
      </div>

      {/* Right Column: 3 Output Nodes */}
      <div style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", justifyContent: "space-around", height: "100%", gap: "1rem" }}>
        {outputNodes.map((node, i) => {
          const NodeIcon = node.icon;
          return (
            <div
              key={i}
              style={{
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "2.75rem",
                height: "2.75rem",
                borderRadius: "0.85rem",
                background: "rgba(20, 25, 30, 0.95)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.5)",
                transition: "all 0.3s ease",
              }}
              title={node.name}
            >
              <NodeIcon size={18} style={{ color: node.color }} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
