import React from "react";
import { cn } from "@/lib/utils";
import { AnimatedList } from "@/registry/magicui/animated-list";
import { Star, CheckCircle2 } from "lucide-react";

export const patientReviews = [
  {
    name: "Lady Victoria C.",
    description: "Deep Plane SMAS Facelift: Three months post-op, people comment that I look 20 years rested. Unbelievable discretion.",
    time: "2m ago",
    icon: "💎",
    color: "#D4AF37",
    procedure: "Facial Harmonization",
    doctor: "Dr. Julian Vance",
    rating: 5,
  },
  {
    name: "Alexandra Montgomery",
    description: "Micro-Droplet Tear-Trough: Painless micro-cannula technique. Dark hollows vanished immediately without bruising.",
    time: "8m ago",
    icon: "👁️",
    color: "#E4A99B",
    procedure: "Injectables",
    doctor: "Dr. Sophia Sterling",
    rating: 5,
  },
  {
    name: "Charlotte Kensington",
    description: "Hybrid Fractional Laser & Exosomes: Melasma cleared in 4 days. The smoothest porcelain skin I've had in decades.",
    time: "15m ago",
    icon: "✨",
    color: "#00C9A7",
    procedure: "Regenerative Laser",
    doctor: "Dr. Camille Laurent",
    rating: 5,
  },
  {
    name: "Jonathan Sterling",
    description: "Structural Blepharoplasty: Back in the boardroom in 10 days. Clean, razor-sharp jawline without looking surgical.",
    time: "24m ago",
    icon: "🏛️",
    color: "#1E86FF",
    procedure: "Facial Harmonization",
    doctor: "Dr. Julian Vance",
    rating: 5,
  },
  {
    name: "Elena Rostova",
    description: "Non-Surgical Rhinoplasty: Subtle 2mm lateral lift balanced my entire profile. Pure mathematical artistry.",
    time: "38m ago",
    icon: "🌟",
    color: "#FFB800",
    procedure: "Injectables",
    doctor: "Dr. Sophia Sterling",
    rating: 5,
  },
  {
    name: "Countess Beatrice V.",
    description: "Morpheus8 Burst & Polynucleotides: Tightened jowls and collagen density restored. World-class Mayfair suite care.",
    time: "52m ago",
    icon: "🌸",
    color: "#FF3D71",
    procedure: "Regenerative Laser",
    doctor: "Dr. Camille Laurent",
    rating: 5,
  },
  {
    name: "Marcus Vance-Holloway",
    description: "Submental High-Def Sculpt: Zero visible incisions along the ear crease. Restored my collegiate jaw contour.",
    time: "1h ago",
    icon: "⚡",
    color: "#D4AF37",
    procedure: "Facial Harmonization",
    doctor: "Dr. Julian Vance",
    rating: 5,
  },
  {
    name: "Sienna Valenti",
    description: "Bespoke Lip Architecture (0.6ml): Never overfilled, perfectly contoured to my lip symmetry. Would trust no one else.",
    time: "2h ago",
    icon: "💋",
    color: "#9B51E0",
    procedure: "Injectables",
    doctor: "Dr. Sophia Sterling",
    rating: 5,
  },
];

export const Notification = ({
  name,
  description,
  icon,
  color,
  time,
  procedure,
  doctor,
  rating = 5,
  onClick,
}) => {
  return (
    <figure
      onClick={onClick}
      className={cn(
        "review-notification-card",
        "relative mx-auto min-h-fit w-full cursor-pointer overflow-hidden rounded-2xl p-4",
        "transition-all duration-300 ease-in-out hover:scale-[102%]"
      )}
      style={{
        background: "rgba(18, 22, 26, 0.85)",
        backdropFilter: "blur(16px)",
        border: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <div className="flex flex-row items-start gap-3.5" style={{ display: "flex", gap: "0.85rem", alignItems: "flex-start" }}>
        {/* Glowing Procedural Icon */}
        <div
          style={{
            minWidth: "42px",
            height: "42px",
            borderRadius: "14px",
            backgroundColor: `${color}18`,
            border: `1px solid ${color}45`,
            boxShadow: `0 0 15px ${color}22`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.2rem",
            flexShrink: 0,
          }}
        >
          <span>{icon}</span>
        </div>

        {/* Details & Review Quote */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "0.4rem",
              marginBottom: "0.25rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "#ffffff" }}>
                {name}
              </span>
              <CheckCircle2 size={13} color="#25D366" title="Verified Patient" />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <div style={{ display: "flex", gap: "1.5px" }}>
                {[...Array(rating)].map((_, i) => (
                  <Star key={i} size={11} fill="#d4af37" color="#d4af37" />
                ))}
              </div>
              <span style={{ fontSize: "0.72rem", color: "#88949e" }}>{time}</span>
            </div>
          </div>

          {/* Procedure & Doctor Attribution */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem", flexWrap: "wrap" }}>
            {procedure && (
              <span
                style={{
                  fontSize: "0.68rem",
                  padding: "0.15rem 0.55rem",
                  borderRadius: "100px",
                  background: "rgba(212, 175, 55, 0.1)",
                  border: "1px solid rgba(212, 175, 55, 0.25)",
                  color: "var(--gold-light)",
                  fontWeight: 500,
                }}
              >
                {procedure}
              </span>
            )}
            {doctor && (
              <span style={{ fontSize: "0.7rem", color: "#7a8793" }}>
                {doctor}
              </span>
            )}
          </div>

          {/* Review Text */}
          <p
            style={{
              fontSize: "0.84rem",
              lineHeight: 1.5,
              color: "#c9d1d9",
              margin: 0,
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            "{description}"
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({
  className,
  items = patientReviews,
  onSelectReview,
}) {
  return (
    <div
      className={cn(
        "relative flex h-[520px] w-full flex-col overflow-hidden p-2",
        className
      )}
      style={{
        position: "relative",
        height: "520px",
        width: "100%",
        overflow: "hidden",
        padding: "0.5rem",
      }}
    >
      <AnimatedList delay={2400} maxItems={8} pauseOnHover={true}>
        {items.map((item, idx) => (
          <Notification
            {...item}
            key={`${item.name}-${idx}`}
            onClick={() => onSelectReview && onSelectReview(item)}
          />
        ))}
      </AnimatedList>

      {/* Top & Bottom Soft Fading Masks */}
      <div className="animated-list-mask-top" />
      <div className="animated-list-mask-bottom" />
    </div>
  );
}

export default AnimatedListDemo;
