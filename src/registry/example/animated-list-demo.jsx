import React from "react";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/registry/magicui/animated-list";
import { ShieldCheck, CalendarCheck, Sparkles, Activity, FileCheck, Stethoscope } from "lucide-react";

const notifications = [
  {
    name: "3D Vectra® Scan Synced",
    description: "Volumetric contour mapping 0.1mm verified",
    time: "Just now",
    icon: Sparkles,
    color: "rgba(212, 175, 55, 0.2)",
    iconColor: "#f5dfa2",
    tag: "Biometrics",
  },
  {
    name: "VIP Suite 4 Prepared",
    description: "Private reception & discretion protocol active",
    time: "2m ago",
    icon: ShieldCheck,
    color: "rgba(59, 130, 246, 0.2)",
    iconColor: "#93c5fd",
    tag: "Concierge",
  },
  {
    name: "Surgical Consultation Confirmed",
    description: "Dr. Julian Vance · Deep Plane SMAS Evaluation",
    time: "5m ago",
    icon: CalendarCheck,
    color: "rgba(16, 185, 129, 0.2)",
    iconColor: "#6ee7b7",
    tag: "Theatre",
  },
  {
    name: "HEPA Laminar Flow Certified",
    description: "Hospital sterile pressure chamber telemetry 100%",
    time: "9m ago",
    icon: Activity,
    color: "rgba(168, 85, 247, 0.2)",
    iconColor: "#d8b4fe",
    tag: "Clinical",
  },
  {
    name: "Cellular Exosome Serum Ready",
    description: "Autologous regenerative compound formulated",
    time: "14m ago",
    icon: Stethoscope,
    color: "rgba(228, 169, 155, 0.25)",
    iconColor: "#fbcfe8",
    tag: "Laboratory",
  },
  {
    name: "GMC Discretion Protocol Signed",
    description: "Encrypted patient biometric records locked",
    time: "18m ago",
    icon: FileCheck,
    color: "rgba(212, 175, 55, 0.2)",
    iconColor: "#f5dfa2",
    tag: "Compliance",
  },
];

const NotificationCard = ({ name, description, icon: Icon, color, iconColor, time }) => {
  return (
    <figure
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "420px",
        margin: "0 auto",
        padding: "0.65rem 0.9rem",
        borderRadius: "0.75rem",
        background: "rgba(18, 24, 30, 0.92)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: "0 8px 24px rgba(0, 0, 0, 0.5)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        boxSizing: "border-box",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          width: "2.3rem",
          height: "2.3rem",
          flexShrink: 0,
          borderRadius: "0.65rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: color || "rgba(212, 175, 55, 0.15)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          color: iconColor || "#f5dfa2",
        }}
      >
        <Icon size={17} />
      </div>
      <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column" }}>
        <figcaption style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "0.5rem" }}>
          <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#f5f3ef", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
            {name}
          </span>
          <span style={{ fontSize: "0.65rem", color: "#d4af37", fontFamily: "monospace", flexShrink: 0 }}>
            {time}
          </span>
        </figcaption>
        <p style={{ fontSize: "0.7rem", color: "#8d98a0", margin: "0.15rem 0 0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {description}
        </p>
      </div>
    </figure>
  );
};

export default function AnimatedListDemo({ className, style = {} }) {
  return (
    <div
      className={cn("w-full select-none", className)}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "210px",
        width: "100%",
        overflow: "hidden",
        padding: "0.5rem",
        maskImage: "linear-gradient(to bottom, #000 60%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, #000 60%, transparent 100%)",
        ...style,
      }}
    >
      <AnimatedList delay={2400}>
        {notifications.map((item, idx) => (
          <NotificationCard {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
}
