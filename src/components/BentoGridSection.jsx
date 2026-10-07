import React, { useState } from "react";
import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import AnimatedBeamMultipleOutputDemo from "@/registry/example/animated-beam-multiple-outputs";
import AnimatedListDemo from "@/registry/example/animated-list-demo";
import { BentoCard, BentoGrid } from "@/registry/magicui/bento-grid";
import { Marquee } from "@/registry/magicui/marquee";

// 1. Clinical OS Records for the Aesthetic Clinic
const clinicalFiles = [
  {
    name: "smas_deep_plane.dcm",
    tag: "3D Surgical",
    body: "Sub-SMAS ligamentous release and high lateral suspension vector telemetry mapping.",
  },
  {
    name: "vectra_biometrics.v3d",
    tag: "Biometric",
    body: "High-density facial volumetric scan with 0.1mm millimeter surface topography accuracy.",
  },
  {
    name: "exosome_protocol.pdf",
    tag: "Regenerative",
    body: "Autologous cellular regenerative factors concentrated for rapid 72h re-epithelialization.",
  },
  {
    name: "gmc_theatre_audit.cert",
    tag: "Accreditation",
    body: "Class 4 sterile HEPA positive-pressure theatre verification with 0.00% infection rate.",
  },
  {
    name: "anesthetic_log.enc",
    tag: "Patient Safety",
    body: "Continuous BIS monitoring and target-controlled twilight sedation vital analytics.",
  },
];

// 2. Original Magic UI Files
const originalFiles = [
  {
    name: "bitcoin.pdf",
    tag: "Crypto",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "finances.xlsx",
    tag: "Spreadsheet",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "logo.svg",
    tag: "Vector",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "keys.gpg",
    tag: "Security",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "seed.txt",
    tag: "Recovery",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

export default function BentoGridSection({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState("clinical"); // "clinical" | "original"

  const files = activeTab === "clinical" ? clinicalFiles : originalFiles;

  const features = [
    {
      Icon: FileTextIcon,
      name: activeTab === "clinical" ? "Encrypted Clinical Archives" : "Save your files",
      description:
        activeTab === "clinical"
          ? "Bank-grade biometric records, 3D Vectra scans, and surgical logs automatically synced with GMC encryption."
          : "We automatically save your files as you type.",
      href: "#booking",
      cta: activeTab === "clinical" ? "Review Case Studies" : "Learn more",
      className: "col-span-3 lg:col-span-1",
      background: (
        <div
          style={{
            position: "absolute",
            top: "1.25rem",
            left: 0,
            right: 0,
            overflow: "hidden",
            maskImage: "linear-gradient(to bottom, #000 65%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, #000 65%, transparent 100%)",
          }}
        >
          <Marquee pauseOnHover className="[--duration:22s]">
            {files.map((f, idx) => (
              <figure
                key={idx}
                style={{
                  position: "relative",
                  width: "155px",
                  cursor: "pointer",
                  overflow: "hidden",
                  borderRadius: "0.85rem",
                  padding: "0.85rem",
                  margin: "0 0.4rem",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  background: "rgba(22, 28, 34, 0.92)",
                  boxShadow: "0 4px 16px rgba(0, 0, 0, 0.4)",
                  transition: "all 0.3s ease",
                  boxSizing: "border-box",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "4px", marginBottom: "6px" }}>
                  <figcaption style={{ fontSize: "0.75rem", fontWeight: 600, color: "#ffffff", fontFamily: "monospace", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {f.name}
                  </figcaption>
                  <span style={{ fontSize: "0.55rem", padding: "2px 5px", borderRadius: "4px", background: "rgba(212, 175, 55, 0.15)", color: "#f5dfa2", fontWeight: 600, flexShrink: 0 }}>
                    {f.tag}
                  </span>
                </div>
                <blockquote style={{ fontSize: "0.7rem", color: "#8d98a0", lineHeight: 1.4, margin: 0, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {f.body}
                </blockquote>
              </figure>
            ))}
          </Marquee>
        </div>
      ),
    },
    {
      Icon: BellIcon,
      name: activeTab === "clinical" ? "Live Telemetry & Concierge" : "Notifications",
      description:
        activeTab === "clinical"
          ? "Real-time updates on operating suite readiness, surgeon availability, and post-procedure recovery metrics."
          : "Get notified when something happens.",
      href: "#booking",
      cta: activeTab === "clinical" ? "Activate VIP Concierge" : "Learn more",
      className: "col-span-3 lg:col-span-2",
      background: (
        <div
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            right: "1rem",
            overflow: "hidden",
            pointerEvents: "none",
          }}
        >
          <AnimatedListDemo />
        </div>
      ),
    },
    {
      Icon: Share2Icon,
      name: activeTab === "clinical" ? "Multidisciplinary Surgical Suite" : "Integrations",
      description:
        activeTab === "clinical"
          ? "Seamless hardware orchestration linking Vectra 3D scanners, Sciton lasers, and Morpheus8 RF with the Aurelia Core OS."
          : "Supports 100+ integrations and counting.",
      href: "#booking",
      cta: activeTab === "clinical" ? "Explore Technology" : "Learn more",
      className: "col-span-3 lg:col-span-2",
      background: (
        <div
          style={{
            position: "absolute",
            top: "0.5rem",
            left: 0,
            right: 0,
            height: "230px",
            overflow: "hidden",
            pointerEvents: "none",
            maskImage: "linear-gradient(to bottom, #000 70%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, #000 70%, transparent 100%)",
          }}
        >
          <AnimatedBeamMultipleOutputDemo />
        </div>
      ),
    },
    {
      Icon: CalendarIcon,
      name: activeTab === "clinical" ? "VIP Private Consultation Suite" : "Calendar",
      description:
        activeTab === "clinical"
          ? "Reserve a discreet consultation at our Mayfair penthouse suite or Harley Street surgical theatre."
          : "Use the calendar to filter your files by date.",
      className: "col-span-3 lg:col-span-1",
      href: "#booking",
      cta: activeTab === "clinical" ? "Reserve Private Slot" : "Learn more",
      background: (
        <div
          style={{
            position: "absolute",
            top: "0.75rem",
            right: "0.75rem",
            transform: "scale(0.82)",
            transformOrigin: "top right",
            pointerEvents: "auto",
            maskImage: "linear-gradient(to bottom, #000 75%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, #000 75%, transparent 100%)",
          }}
        >
          <Calendar
            mode="single"
            selected={new Date(2026, 4, 14, 0, 0, 0)}
            onSelect={() => {
              if (onOpenBooking) onOpenBooking("VIP Aesthetic Consultation");
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <section
      id="bento-grid"
      style={{
        position: "relative",
        padding: "6rem 1.5rem",
        background: "#0a0c0e",
        overflow: "hidden",
        borderTop: "1px solid rgba(212, 175, 55, 0.15)",
        borderBottom: "1px solid rgba(212, 175, 55, 0.15)",
      }}
    >
      {/* Ambient background glow highlights */}
      <div
        style={{
          position: "absolute",
          top: "-10rem",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "400px",
          borderRadius: "50%",
          opacity: 0.2,
          filter: "blur(120px)",
          background: "radial-gradient(circle, var(--gold-primary) 0%, #e4a99b 50%, transparent 80%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 10 }}>
        {/* Section Header */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", maxWidth: "48rem", margin: "0 auto 3.5rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.4rem 1rem", borderRadius: "9999px", background: "rgba(212,175,55,0.12)", border: "1px solid rgba(212,175,55,0.35)", color: "#f5dfa2", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "1rem" }}>
            <Sparkles size={13} style={{ color: "var(--gold-primary)" }} />
            Magic UI · Bento Grid Architecture
          </div>

          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem, 3.5vw, 3rem)", fontWeight: 400, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.2 }}>
            The Aurelia <span className="gold-text-gradient font-serif">Clinical OS</span>
          </h2>

          <p style={{ marginTop: "1rem", fontSize: "1rem", color: "#8d98a0", lineHeight: 1.6, maxWidth: "42rem" }}>
            A high-performance aesthetic medicine operating system uniting biometric mapping,
            live theatre telemetry, and confidential surgical scheduling into one seamless bento architecture.
          </p>

          {/* Mode Switcher */}
          <div style={{ marginTop: "1.5rem", padding: "0.25rem", borderRadius: "9999px", background: "rgba(255, 255, 255, 0.05)", border: "1px solid rgba(255, 255, 255, 0.1)", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
            <button
              type="button"
              onClick={() => setActiveTab("clinical")}
              style={{
                padding: "0.45rem 1.2rem",
                borderRadius: "9999px",
                fontSize: "0.75rem",
                fontWeight: activeTab === "clinical" ? 700 : 500,
                cursor: "pointer",
                border: "none",
                transition: "all 0.2s ease",
                background: activeTab === "clinical" ? "linear-gradient(135deg, var(--gold-primary), #a18128)" : "transparent",
                color: activeTab === "clinical" ? "#0a0c0e" : "#8d98a0",
                boxShadow: activeTab === "clinical" ? "0 2px 8px rgba(212, 175, 55, 0.3)" : "none",
              }}
            >
              Aurelia Clinical Mode
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("original")}
              style={{
                padding: "0.45rem 1.2rem",
                borderRadius: "9999px",
                fontSize: "0.75rem",
                fontWeight: activeTab === "original" ? 700 : 500,
                cursor: "pointer",
                border: "none",
                transition: "all 0.2s ease",
                background: activeTab === "original" ? "linear-gradient(135deg, var(--gold-primary), #a18128)" : "transparent",
                color: activeTab === "original" ? "#0a0c0e" : "#8d98a0",
                boxShadow: activeTab === "original" ? "0 2px 8px rgba(212, 175, 55, 0.3)" : "none",
              }}
            >
              Classic Magic UI Demo
            </button>
          </div>
        </div>

        {/* The Magic UI Bento Grid */}
        <BentoGrid>
          {features.map((feature, idx) => (
            <BentoCard
              key={idx}
              {...feature}
              onClick={() => {
                if (onOpenBooking) onOpenBooking("VIP Consultation & Telemetry");
              }}
            />
          ))}
        </BentoGrid>

        {/* Live System Telemetry Status Bar */}
        <div
          style={{
            marginTop: "2.5rem",
            padding: "1rem 1.5rem",
            borderRadius: "1rem",
            background: "rgba(17, 21, 25, 0.7)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            fontSize: "0.75rem",
            color: "#8d98a0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <span style={{ position: "relative", display: "flex", width: "10px", height: "10px" }}>
              <span style={{ position: "absolute", width: "100%", height: "100%", borderRadius: "50%", background: "#10b981", opacity: 0.75, animation: "livePulse 2s infinite" }} />
              <span style={{ width: "10px", height: "10px", borderRadius: "50%", background: "#10b981" }} />
            </span>
            <span style={{ color: "#ffffff", fontWeight: 600 }}>System Telemetry Online:</span>
            <span style={{ color: "#f5dfa2" }}>3 Operative Suites Active</span>
            <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>
            <span>Vectra® 3D Calibrated</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <span style={{ fontFamily: "monospace", color: "#5c666e" }}>ENCRYPTION: AES-256 GMC COMPLIANT</span>
            <button
              type="button"
              onClick={() => {
                if (onOpenBooking) onOpenBooking("VIP Consultation");
              }}
              style={{
                color: "var(--gold-primary)",
                fontWeight: 600,
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                cursor: "pointer",
                background: "transparent",
                border: "none",
                fontSize: "0.75rem",
              }}
            >
              Request Access →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
