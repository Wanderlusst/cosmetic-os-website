import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Marquee } from "@/registry/magicui/marquee";
import { Star, CheckCircle2, ShieldCheck, Sparkles, X, ArrowUpRight } from "lucide-react";
import { useClinic } from "@/context/ClinicContext";

export const reviews = [
  {
    id: 1,
    name: "Lady Victoria C.",
    username: "@victoria.c",
    location: "Kensington, London",
    procedure: "Deep Plane SMAS Facelift",
    category: "surgical",
    doctor: "Dr. Julian Vance",
    rating: 5,
    date: "February 2026",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=180&q=80",
    initials: "VC",
    body: "My greatest fear was looking 'done'. Three months post-op, people simply comment that I look as rested as I did twenty years ago. Discretion was exemplary.",
    detailedQuote: "My greatest fear was looking 'done' or unrecognizable to my family. Dr. Vance has an artist’s eye combined with formidable surgical discipline. Three months post-op, people simply comment that I look as rested as I did twenty years ago. The discretion of the private Mayfair suite was exemplary.",
    verified: true,
  },
  {
    id: 2,
    name: "Alexandra M.",
    username: "@alexandra.m",
    location: "Beverly Hills, CA",
    procedure: "Micro-Droplet Tear Trough",
    category: "injectables",
    doctor: "Dr. Sophia Sterling",
    rating: 5,
    date: "January 2026",
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=180&q=80",
    initials: "AM",
    body: "Dr. Sterling is a true perfectionist. My dark undereye shadows vanished immediately with her micro-cannula technique. Zero bruising, completely undetectable.",
    detailedQuote: "Dr. Sterling is a true perfectionist. I had awful undereye hollowness from long flight schedules that three other clinics failed to fix properly. Her micro-cannula technique was completely painless, zero bruising, and my dark shadows vanished immediately.",
    verified: true,
  },
  {
    id: 3,
    name: "Jonathan S.",
    username: "@jonathan.s",
    location: "Mayfair, London",
    procedure: "Structural Blepharoplasty & Neck",
    category: "surgical",
    doctor: "Dr. Julian Vance",
    rating: 5,
    date: "November 2025",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=180&q=80",
    initials: "JS",
    body: "Surgical brilliance. Back in the boardroom within 10 days with a sharp, natural jawline. Not a single person suspected a medical intervention.",
    detailedQuote: "As a corporate executive, I needed a refreshed, sharp jawline without looking frozen or synthetic. Dr. Vance executed the procedure with surgical brilliance. I was back in the boardroom within 10 days without a single person suspecting a cosmetic intervention.",
    verified: true,
  },
  {
    id: 4,
    name: "Charlotte H.",
    username: "@charlotte.h",
    location: "Chelsea, London",
    procedure: "Fractional Hybrid Laser & Exosomes",
    category: "skin",
    doctor: "Dr. Camille Laurent",
    rating: 5,
    date: "March 2026",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=180&q=80",
    initials: "CH",
    body: "Dr. Laurent cleared stubborn melasma in 4 days with her hybrid laser & exosome protocol. Glass-like radiance I haven't seen in two decades.",
    detailedQuote: "After battling stubborn melasma and sun damage across my forehead, Dr. Laurent designed a multi-step laser and cellular exosome cycle. The bronzing cleared in just four days, revealing the smoothest glass-like skin I’ve had in decades.",
    verified: true,
  },
  {
    id: 5,
    name: "Seraphina Lin",
    username: "@seraphina.l",
    location: "Singapore",
    procedure: "Full Facial Harmonization",
    category: "injectables",
    doctor: "Dr. Sophia Sterling",
    rating: 5,
    date: "February 2026",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=180&q=80",
    initials: "SL",
    body: "She refused to overfill and sculpted my cheekbones with anatomical geometry. I flew in from Singapore specifically for her artistry.",
    detailedQuote: "Dr. Sophia Sterling refused to overfill and instead balanced my cheekbone contour with micro-droplet precision. A masterclass in facial geometry, restraint, and anatomical artistry. I flew in from Singapore specifically for her touch.",
    verified: true,
  },
  {
    id: 6,
    name: "Elena Rostova",
    username: "@elena.r",
    location: "Zurich, Switzerland",
    procedure: "Bespoke Structural Rhinoplasty",
    category: "surgical",
    doctor: "Dr. Julian Vance",
    rating: 5,
    date: "January 2026",
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=180&q=80",
    initials: "ER",
    body: "Preserved my unique character while perfecting the dorsal profile. Breathing improved dramatically and swelling cleared in days.",
    detailedQuote: "Preserved my unique character while refining the dorsal aesthetic. Dr. Vance took 3D CT reconstructions to sculpt the cartilage with millimeter precision. Breathing improved immediately and the subtle refinement is breathtaking.",
    verified: true,
  },
  {
    id: 7,
    name: "Dr. Harrison Reed",
    username: "@harrison.md",
    location: "Harley Street, London",
    procedure: "Radiofrequency Microneedling & PRP",
    category: "skin",
    doctor: "Dr. Camille Laurent",
    rating: 5,
    date: "December 2025",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=180&q=80",
    initials: "HR",
    body: "As a fellow physician, I scrutinize safety beyond all else. Aurelia's clinical theatre and sterility protocols match world-class hospitals.",
    detailedQuote: "As a fellow physician on Harley Street, I scrutinize safety and sterility beyond all else. Aurelia's clinical theatre and sterility protocols match world-class tertiary hospitals. Dr. Laurent's depth of tissue biology is extraordinary.",
    verified: true,
  },
  {
    id: 8,
    name: "Camilla Van Der B.",
    username: "@camilla.vdb",
    location: "Geneva, Switzerland",
    procedure: "Endoscopic Temporal Brow Lift",
    category: "surgical",
    doctor: "Dr. Julian Vance",
    rating: 5,
    date: "March 2026",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=180&q=80",
    initials: "CV",
    body: "Opened up my eyes without looking startled. Scars are invisibly nestled in my hairline. The concierge private recovery suite was sublime.",
    detailedQuote: "Opened up my eyes without any trace of being startled. Scars are invisibly nestled behind my hairline. The post-operative hyperbaric chamber and private recovery concierge in Mayfair made recovery effortless.",
    verified: true,
  },
  {
    id: 9,
    name: "Lord Alistair P.",
    username: "@alistair.p",
    location: "Knightsbridge, London",
    procedure: "Submental Liposculpture & Platysma",
    category: "surgical",
    doctor: "Dr. Julian Vance",
    rating: 5,
    date: "February 2026",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=180&q=80",
    initials: "AP",
    body: "Restored a sharp, masculine jawline with zero visible incisions. Total discretion maintained throughout. World-class surgical craftsmanship.",
    detailedQuote: "Restored a sharp, masculine jawline with zero visible incisions. Total discretion was maintained throughout with private basement valet entrance. The surgical craftsmanship Dr. Vance possesses is unmatched in Europe.",
    verified: true,
  },
  {
    id: 10,
    name: "H.R.H. Princess Sophie",
    username: "@sophie.royale",
    location: "Monaco / London",
    procedure: "Bespoke Autologous Cellular Glow",
    category: "skin",
    doctor: "Dr. Camille Laurent",
    rating: 5,
    date: "March 2026",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=180&q=80",
    initials: "PS",
    body: "An oasis of tranquility and supreme medical expertise. The custom exosome serums created for my skin brought back an undeniable luminescence.",
    detailedQuote: "An oasis of tranquility and supreme medical expertise. The custom exosome and autologous cellular cocktail Dr. Laurent synthesized brought back an undeniable youthful radiance without a single minute of downtime.",
    verified: true,
  },
];

export const ReviewCard = ({
  img,
  name,
  username,
  body,
  location,
  procedure,
  doctor,
  initials,
  date,
  onClick,
  active = false,
}) => {
  const [imgError, setImgError] = useState(false);

  return (
    <figure
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          if (onClick) onClick();
        }
      }}
      className={cn(
        "luxury-marquee-card",
        active && "border-gold-bright"
      )}

      style={{
        outline: "none",
      }}
    >
      {/* Top Header: Avatar, Name, Handle, Verified */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.85rem" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <div
            style={{
              position: "relative",
              width: "42px",
              height: "42px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "1.5px solid rgba(212, 175, 55, 0.4)",
              background: "linear-gradient(135deg, #1b2229 0%, #0d1013 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.5)",
            }}
          >
            {!imgError && img ? (
              <img
                src={img}
                alt={name}
                onError={() => setImgError(true)}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                loading="lazy"
              />
            ) : (
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "var(--gold-light)",
                  letterSpacing: "0.05em",
                }}
              >
                {initials || name.substring(0, 2).toUpperCase()}
              </span>
            )}
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <figcaption
              style={{
                fontSize: "0.92rem",
                fontWeight: 600,
                color: "#ffffff",
                display: "flex",
                alignItems: "center",
                gap: "0.35rem",
              }}
            >
              {name}
              <CheckCircle2 size={13} color="#25D366" style={{ flexShrink: 0 }} />
            </figcaption>
            <p style={{ fontSize: "0.75rem", color: "#8d98a0" }}>
              {username} • {location?.split(",")[0]}
            </p>
          </div>
        </div>

        {/* 5-star rating */}
        <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={13} fill="var(--gold-primary)" color="var(--gold-primary)" />
          ))}
        </div>
      </div>

      {/* Procedure Pill */}
      {procedure && (
        <div style={{ marginBottom: "0.75rem" }}>
          <span
            style={{
              fontSize: "0.7rem",
              letterSpacing: "0.04em",
              padding: "0.2rem 0.55rem",
              borderRadius: "4px",
              background: "rgba(212, 175, 55, 0.08)",
              border: "1px solid rgba(212, 175, 55, 0.2)",
              color: "#f5dfa2",
              display: "inline-block",
            }}
          >
            {procedure}
          </span>
        </div>
      )}

      {/* Quote snippet */}
      <blockquote
        style={{
          fontSize: "0.85rem",
          lineHeight: 1.55,
          color: "#e2e8f0",
          fontStyle: "italic",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          marginBottom: "0.85rem",
        }}
      >
        "{body}"
      </blockquote>

      {/* Doctor & Tap prompt Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          paddingTop: "0.65rem",
          borderTop: "1px solid rgba(255, 255, 255, 0.06)",
          fontSize: "0.72rem",
          color: "#7e8b95",
        }}
      >
        <span>{doctor} {date ? `• ${date}` : ""}</span>
        <span
          style={{
            color: "var(--gold-light)",
            display: "inline-flex",
            alignItems: "center",
            gap: "2px",
            fontWeight: 500,
          }}
        >
          Details <ArrowUpRight size={12} />
        </span>
      </div>

    </figure>
  );
};

export function MarqueeDemo({ onOpenBooking }) {
  const [selectedReview, setSelectedReview] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const { reviews: dynamicReviews } = useClinic();

  const activeReviews = dynamicReviews && dynamicReviews.length > 0 ? dynamicReviews : reviews;
  const dynFirstRow = activeReviews.slice(0, Math.ceil(activeReviews.length / 2));
  const dynSecondRow = activeReviews.slice(Math.ceil(activeReviews.length / 2));

  const filteredFirstRow = activeFilter === "all" 
    ? dynFirstRow 
    : dynFirstRow.filter(r => r.category === activeFilter);

  const filteredSecondRow = activeFilter === "all" 
    ? dynSecondRow 
    : dynSecondRow.filter(r => r.category === activeFilter);

  const displayFirst = filteredFirstRow.length > 0 ? filteredFirstRow : dynFirstRow;
  const displaySecond = filteredSecondRow.length > 0 ? filteredSecondRow : dynSecondRow;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        paddingTop: "1.5rem",
        paddingBottom: "1.5rem",
      }}
    >
      {/* Category Filter Pills */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "0.5rem",
          marginBottom: "2.5rem",
          position: "relative",
          zIndex: 5,
        }}
      >
        {[
          { id: "all", label: "All Experiences" },
          { id: "surgical", label: "Surgical Mastery" },
          { id: "injectables", label: "Injectables & Artistry" },
          { id: "skin", label: "Laser & Cellular" },
        ].map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              style={{
                background: isActive ? "rgba(212, 175, 55, 0.18)" : "rgba(255, 255, 255, 0.04)",
                border: isActive ? "1px solid rgba(212, 175, 55, 0.5)" : "1px solid rgba(255, 255, 255, 0.1)",
                color: isActive ? "#ffffff" : "#8d98a0",
                padding: "0.45rem 1.1rem",
                borderRadius: "100px",
                fontSize: "0.78rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
                cursor: "pointer",
                transition: "all 0.25s ease",
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Dual Row Marquee Container with pause on hover */}
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "1.25rem",
        }}
      >
        {/* Row 1: Leftward Scroll */}
        <Marquee pauseOnHover className="[--duration:36s]">
          {displayFirst.map((review) => (
            <ReviewCard
              key={review.username}
              {...review}
              onClick={() => setSelectedReview(review)}
            />
          ))}
        </Marquee>

        {/* Row 2: Reverse Rightward Scroll */}
        <Marquee reverse pauseOnHover className="[--duration:40s]">
          {displaySecond.map((review) => (
            <ReviewCard
              key={review.username}
              {...review}
              onClick={() => setSelectedReview(review)}
            />
          ))}
        </Marquee>

        {/* Edge Gradients - Smooth Fade into obsidian background */}
        <div className="marquee-edge-left" aria-hidden="true" />
        <div className="marquee-edge-right" aria-hidden="true" />
      </div>

      {/* Subtle Hint */}
      <p
        style={{
          fontSize: "0.76rem",
          color: "#6b7782",
          marginTop: "1.75rem",
          letterSpacing: "0.04em",
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
        }}
      >
        <Sparkles size={12} color="var(--gold-primary)" />
        Hover any card to pause scroll • Click card to view procedure case study
      </p>

      {/* Case Study Review Detail Modal */}
      {selectedReview && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1.5rem",
            background: "rgba(5, 7, 9, 0.85)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
          }}
          onClick={() => setSelectedReview(null)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              maxWidth: "600px",
              width: "100%",
              background: "#12161a",
              border: "1px solid rgba(212, 175, 55, 0.35)",
              borderRadius: "20px",
              padding: "2.5rem 2.2rem",
              boxShadow: "0 30px 80px rgba(0, 0, 0, 0.9), 0 0 40px rgba(212, 175, 55, 0.15)",
              color: "#f5f3ef",
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedReview(null)}
              style={{
                position: "absolute",
                top: "1.25rem",
                right: "1.25rem",
                background: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#ffffff",
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              aria-label="Close review"
            >
              <X size={18} />
            </button>

            {/* Patient Header */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "2px solid var(--gold-primary)",
                  flexShrink: 0,
                }}
              >
                <img
                  src={selectedReview.img}
                  alt={selectedReview.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <div>
                <h3 style={{ fontSize: "1.25rem", fontWeight: 600, color: "#ffffff", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  {selectedReview.name}
                  <span className="badge-clinical" style={{ fontSize: "0.68rem" }}>
                    <ShieldCheck size={11} color="#25D366" /> Verified Patient
                  </span>
                </h3>
                <p style={{ fontSize: "0.82rem", color: "#8d98a0" }}>
                  {selectedReview.username} • {selectedReview.location}
                </p>
              </div>
            </div>

            {/* Procedure Meta Tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.6rem",
                padding: "0.85rem 1rem",
                background: "rgba(255, 255, 255, 0.03)",
                borderRadius: "10px",
                border: "1px solid rgba(255, 255, 255, 0.07)",
                marginBottom: "1.5rem",
              }}
            >
              <div>
                <span style={{ fontSize: "0.72rem", color: "#8d98a0" }}>Procedure: </span>
                <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "var(--gold-light)" }}>
                  {selectedReview.procedure}
                </span>
              </div>
              <div style={{ marginLeft: "auto" }}>
                <span style={{ fontSize: "0.72rem", color: "#8d98a0" }}>Surgeon: </span>
                <span style={{ fontSize: "0.82rem", fontWeight: 600, color: "#ffffff" }}>
                  {selectedReview.doctor}
                </span>
              </div>
            </div>

            {/* Stars */}
            <div style={{ display: "flex", gap: "4px", marginBottom: "1rem" }}>
              {[...Array(selectedReview.rating)].map((_, i) => (
                <Star key={i} size={18} fill="var(--gold-primary)" color="var(--gold-primary)" />
              ))}
            </div>

            {/* Detailed Body */}
            <blockquote
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "1.15rem",
                lineHeight: 1.6,
                color: "#f5f3ef",
                fontStyle: "italic",
                marginBottom: "2rem",
              }}
            >
              "{selectedReview.detailedQuote || selectedReview.body}"
            </blockquote>

            {/* Action buttons */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: "1rem",
                paddingTop: "1.2rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
              }}
            >
              <span style={{ fontSize: "0.78rem", color: "#8d98a0" }}>
                Treatment date: {selectedReview.date}
              </span>

              <button
                className="btn-gold"
                style={{ padding: "0.7rem 1.4rem", fontSize: "0.78rem" }}
                onClick={() => {
                  setSelectedReview(null);
                  if (onOpenBooking) {
                    onOpenBooking(selectedReview.procedure);
                  }
                }}
              >
                Inquire on this Procedure
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MarqueeDemo;
