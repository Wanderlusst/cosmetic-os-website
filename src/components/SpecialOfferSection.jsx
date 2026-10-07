import React, { useState, useEffect } from "react";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/registry/magicui/scroll-based-velocity";
import {
  Sparkles,
  Clock,
  Tag,
  Copy,
  Check,
  ShieldCheck,
  ArrowRight,
  MessageCircle,
  Gem,
  Award,
  Zap,
} from "lucide-react";
import confetti from "canvas-confetti";

const SPECIAL_OFFERS = [
  {
    id: "harmony",
    title: "Facial Harmony Protocol",
    tagline: "Comprehensive 360° Volumetric Balance",
    savings: "Save £690 (20% Off)",
    originalPrice: "£3,450",
    offerPrice: "£2,760",
    code: "AURELIA-SPRING20",
    allotmentRemaining: 4,
    allotmentTotal: 15,
    bookingTitle: "Curated Signature Treatment Package (Spring Privilege: AURELIA-SPRING20)",
    row1Text: "✦ EXCLUSIVE PRIVATE PRIVILEGE • 20% SAVINGS ON FULL FACIAL HARMONIZATION PROTOCOL • BESPOKE VECTRA® 3D SCAN INCLUDED ✦",
    row2Text: "✦ COMPLIMENTARY EXOSOME CELLULAR INFUSION (£650 VALUE) • MAYFAIR CHAUFFEUR TRANSFER • VOUCHER: AURELIA-SPRING20 ✦",
    perks: [
      {
        icon: Gem,
        title: "20% Direct Courtesy Benefit",
        desc: "Special concession on full facial architectural contouring with Juvederm/Restylane structural support.",
      },
      {
        icon: Sparkles,
        title: "Vectra® 3D Biometric Scan (£450 Value)",
        desc: "Sub-surface anatomical skin and volumetric tissue imaging included at zero cost.",
      },
      {
        icon: Zap,
        title: "Autologous Exosome Serum (£650 Value)",
        desc: "Cellular regenerative growth factors to accelerate dermal glow and shorten recovery.",
      },
      {
        icon: ShieldCheck,
        title: "Mayfair Private Chauffeur Transfer",
        desc: "Door-to-door luxury transport for private clinic consultations within Greater London.",
      },
    ],
  },
  {
    id: "smas",
    title: "Deep SMAS Surgical Allotment",
    tagline: "Gold-Standard Architectural Suspension",
    savings: "Complimentary £1,200 Luxury Suite Upgrade",
    originalPrice: "£12,800",
    offerPrice: "£11,600",
    code: "AURELIA-SMASVIP",
    allotmentRemaining: 2,
    allotmentTotal: 6,
    bookingTitle: "Deep Plane SMAS Facial Harmonization (Surgical Privilege: AURELIA-SMASVIP)",
    row1Text: "✦ DEEP PLANE SMAS SURGICAL PRIVILEGE • COMPLIMENTARY OVERNIGHT PRIVATE SUITE • 1-ON-1 NURSING ✦",
    row2Text: "✦ 12-MONTH HYPERBARIC & SCAR REMODELING PROTOCOL INCLUDED • CODE: AURELIA-SMASVIP ✦",
    perks: [
      {
        icon: Award,
        title: "Overnight Private Suite Upgrade",
        desc: "Dedicated medical recovery room with round-the-clock private nurse and curated menu.",
      },
      {
        icon: Sparkles,
        title: "Complimentary Exosome Healing Boost",
        desc: "Accelerated cellular repair protocol for faster scar maturation and minimal swelling.",
      },
      {
        icon: Gem,
        title: "Twilight Sedation Included",
        desc: "Care provided by our senior consultant specialist anaesthetist.",
      },
      {
        icon: ShieldCheck,
        title: "12-Month Post-Op Concierge",
        desc: "Includes hyperbaric oxygen recovery sessions and precision lymphatic drainage.",
      },
    ],
  },
  {
    id: "laser",
    title: "Cellular Radiance Reset",
    tagline: "Hybrid Laser & Exosome Polish",
    savings: "Save £370 (20% Off)",
    originalPrice: "£1,850",
    offerPrice: "£1,480",
    code: "AURELIA-GLOW20",
    allotmentRemaining: 5,
    allotmentTotal: 20,
    bookingTitle: "Fractional Hybrid Laser Epidermal Reset (Spring Privilege: AURELIA-GLOW20)",
    row1Text: "✦ CELLULAR RADIANCE RESET • 20% OFF HYBRID LASER & EXOSOME POLISH • ZERO SOCIAL DOWNTIME ✦",
    row2Text: "✦ COMPLIMENTARY 30-DAY MEDICAL HOMECARE REGIMEN • CODE: AURELIA-GLOW20 ✦",
    perks: [
      {
        icon: Zap,
        title: "Fractional Erbium Hybrid Laser",
        desc: "Radical epidermal smoothing, pore reduction, and sun damage clearance.",
      },
      {
        icon: Gem,
        title: "Medical LED Phototherapy Session",
        desc: "Stimulates deep mitochondrial ATP production for instant radiance.",
      },
      {
        icon: Sparkles,
        title: "30-Day Restorative Home Kit",
        desc: "Clinically formulated Swiss active serums supplied for prolonged results.",
      },
      {
        icon: ShieldCheck,
        title: "4-Week Dermoscopy Review",
        desc: "Follow-up digital magnification review with your senior aesthetic dermatologist.",
      },
    ],
  },
];

export default function SpecialOfferSection({ onOpenBooking }) {
  const [selectedOfferIndex, setSelectedOfferIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  // Live countdown timer state (hours, minutes, seconds)
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 38,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const activeOffer = SPECIAL_OFFERS[selectedOfferIndex];

  const handleCopyCode = () => {
    if (navigator?.clipboard?.writeText) {
      navigator.clipboard.writeText(activeOffer.code);
    }
    setCopied(true);

    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.75 },
        colors: ["var(--gold-primary)", "#f5dfa2", "#e4a99b", "#ffffff"],
      });
    } catch {
      // silent fallback
    }

    setTimeout(() => {
      setCopied(false);
    }, 2400);
  };

  const handleClaimOffer = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["var(--gold-primary)", "#f5dfa2", "#e4a99b", "#ffffff"],
      });
    } catch {
      // silent fallback
    }

    if (onOpenBooking) {
      onOpenBooking(activeOffer.bookingTitle);
    }
  };

  return (
    <section id="special-offer" className="special-offer-section">
      <div className="container" style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(212, 175, 55, 0.12)",
              border: "1px solid rgba(212, 175, 55, 0.35)",
              padding: "0.45rem 1.25rem",
              borderRadius: "9999px",
              color: "#f5dfa2",
              fontSize: "0.82rem",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            <Sparkles size={15} color="var(--gold-primary)" />
            <span>Limited Allotment • Private Client Privilege</span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              fontFamily: "var(--font-heading)",
              letterSpacing: "-0.03em",
              color: "#ffffff",
              marginBottom: "1rem",
              fontWeight: 700,
            }}
          >
            Spring Aesthetic <span className="velocity-highlight">Privilege Allotment</span>
          </h2>

          <p
            style={{
              color: "var(--text-muted)",
              fontSize: "1.05rem",
              lineHeight: 1.65,
              maxWidth: "680px",
              margin: "0 auto",
            }}
          >
            Reserved exclusively for new consultations this month. Experience our highest-tier
            facial harmonization protocols with complimentary exosome cellular therapy and private Mayfair concierge care.
          </p>
        </div>
      </div>

      {/* Kinetic Scroll-Based Velocity Marquee Rows */}
      <div className="velocity-banner-shell">
        <ScrollVelocityContainer className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em]">
          <ScrollVelocityRow baseVelocity={20} direction={1}>
            <span className="velocity-row-item">
              <span className="velocity-star">✦</span>
              <span className="velocity-highlight">{activeOffer.title.toUpperCase()}</span>
              <span className="velocity-dot">•</span>
              <span>{activeOffer.savings.toUpperCase()}</span>
              <span className="velocity-dot">•</span>
              <span className="velocity-badge">CODE: {activeOffer.code}</span>
              <span className="velocity-dot">•</span>
              <span>ONLY {activeOffer.allotmentRemaining} SUITES REMAINING</span>
              <span className="velocity-dot">•</span>
            </span>
          </ScrollVelocityRow>
          <ScrollVelocityRow baseVelocity={20} direction={-1}>
            <span className="velocity-row-item">
              <span className="velocity-star">✦</span>
              <span>COMPLIMENTARY VECTRA 3D SCAN (£450 VALUE)</span>
              <span className="velocity-dot">•</span>
              <span className="velocity-highlight">AUTOLOGOUS EXOSOMES INCLUDED</span>
              <span className="velocity-dot">•</span>
              <span className="velocity-badge">VIP CHAUFFEUR SERVICE</span>
              <span className="velocity-dot">•</span>
              <span>MAYFAIR PRIVATE CLINICAL THEATRE</span>
              <span className="velocity-dot">•</span>
            </span>
          </ScrollVelocityRow>
        </ScrollVelocityContainer>

        {/* Soft edge gradient fades */}
        <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r" />
        <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l" />
      </div>

      <div className="container" style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 1.5rem" }}>
        {/* Interactive Privilege Offer Card */}
        <div className="special-offer-card">
          {/* Offer Selection Tabs */}
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "0.75rem",
              flexWrap: "wrap",
              marginBottom: "2.5rem",
            }}
          >
            {SPECIAL_OFFERS.map((offer, idx) => {
              const isActive = idx === selectedOfferIndex;
              return (
                <button
                  key={offer.id}
                  onClick={() => setSelectedOfferIndex(idx)}
                  style={{
                    background: isActive
                      ? "linear-gradient(135deg, rgba(212, 175, 55, 0.25) 0%, rgba(212, 175, 55, 0.1) 100%)"
                      : "rgba(255, 255, 255, 0.03)",
                    border: isActive
                      ? "1px solid rgba(212, 175, 55, 0.6)"
                      : "1px solid rgba(255, 255, 255, 0.1)",
                    color: isActive ? "#f5dfa2" : "#a0acb5",
                    padding: "0.75rem 1.35rem",
                    borderRadius: "14px",
                    fontWeight: 600,
                    fontSize: "0.9rem",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    transition: "all 0.3s ease",
                    boxShadow: isActive ? "0 4px 20px rgba(212, 175, 55, 0.2)" : "none",
                  }}
                >
                  <Tag size={15} color={isActive ? "var(--gold-primary)" : "#7d8b96"} />
                  <span>{offer.title}</span>
                  {isActive && (
                    <span
                      style={{
                        background: "var(--gold-primary)",
                        color: "#0a0c0e",
                        fontSize: "0.68rem",
                        padding: "0.15rem 0.5rem",
                        borderRadius: "999px",
                        fontWeight: 700,
                      }}
                    >
                      Active
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
              gap: "2.5rem",
              alignItems: "center",
            }}
          >
            {/* Left Column: Offer Overview & Countdown */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "0.75rem" }}>
                <span className="badge-gold">{activeOffer.tagline}</span>
                <span
                  style={{
                    color: "#4ade80",
                    fontSize: "0.82rem",
                    fontWeight: 600,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.3rem",
                  }}
                >
                  ● Active Allotment
                </span>
              </div>

              <h3
                style={{
                  fontSize: "clamp(1.75rem, 2.5vw, 2.35rem)",
                  color: "#ffffff",
                  fontFamily: "var(--font-heading)",
                  marginBottom: "0.75rem",
                  lineHeight: 1.2,
                }}
              >
                {activeOffer.title}
              </h3>

              {/* Pricing & Concession */}
              <div style={{ display: "flex", alignItems: "baseline", gap: "1rem", marginBottom: "1.25rem" }}>
                <span
                  style={{
                    fontSize: "2.4rem",
                    fontWeight: 700,
                    color: "#f5dfa2",
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {activeOffer.offerPrice}
                </span>
                <span
                  style={{
                    fontSize: "1.3rem",
                    color: "#6b7782",
                    textDecoration: "line-through",
                  }}
                >
                  {activeOffer.originalPrice}
                </span>
                <span
                  style={{
                    background: "rgba(74, 222, 128, 0.15)",
                    border: "1px solid rgba(74, 222, 128, 0.4)",
                    color: "#4ade80",
                    fontSize: "0.82rem",
                    padding: "0.25rem 0.65rem",
                    borderRadius: "8px",
                    fontWeight: 600,
                  }}
                >
                  {activeOffer.savings}
                </span>
              </div>

              {/* Allotment Scarcity Meter */}
              <div
                style={{
                  background: "rgba(10, 12, 14, 0.6)",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  borderRadius: "14px",
                  padding: "1rem 1.25rem",
                  marginBottom: "1.75rem",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.82rem", marginBottom: "0.5rem" }}>
                  <span style={{ color: "#a0acb5" }}>Mayfair Private Suite Availability</span>
                  <span style={{ color: "#f5dfa2", fontWeight: 700 }}>
                    {activeOffer.allotmentRemaining} of {activeOffer.allotmentTotal} Suites Left
                  </span>
                </div>
                <div
                  style={{
                    width: "100%",
                    height: "6px",
                    borderRadius: "4px",
                    background: "rgba(255, 255, 255, 0.1)",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${((activeOffer.allotmentTotal - activeOffer.allotmentRemaining) / activeOffer.allotmentTotal) * 100}%`,
                      height: "100%",
                      background: "linear-gradient(90deg, var(--gold-primary), #f5dfa2)",
                      borderRadius: "4px",
                      transition: "width 0.6s ease",
                    }}
                  />
                </div>
              </div>

              {/* Voucher Code Box */}
              <div style={{ marginBottom: "1.75rem" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.75rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#8d98a0",
                    marginBottom: "0.5rem",
                  }}
                >
                  Privilege Allocation Code
                </label>
                <div
                  className="code-copy-pill"
                  onClick={handleCopyCode}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && handleCopyCode()}
                >
                  <span
                    style={{
                      fontFamily: "monospace",
                      fontSize: "1.1rem",
                      fontWeight: 700,
                      color: "#f5dfa2",
                      letterSpacing: "0.12em",
                    }}
                  >
                    {activeOffer.code}
                  </span>
                  <button
                    type="button"
                    style={{
                      background: copied ? "rgba(74, 222, 128, 0.2)" : "rgba(212, 175, 55, 0.2)",
                      border: "none",
                      color: copied ? "#4ade80" : "var(--gold-primary)",
                      borderRadius: "8px",
                      padding: "0.35rem 0.65rem",
                      fontSize: "0.78rem",
                      fontWeight: 600,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.3rem",
                    }}
                  >
                    {copied ? (
                      <>
                        <Check size={14} />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={14} />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Live Countdown Clock */}
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    color: "#a0acb5",
                    fontSize: "0.8rem",
                    marginBottom: "0.6rem",
                  }}
                >
                  <Clock size={14} color="var(--gold-primary)" />
                  <span>Privilege Allotment Closes In:</span>
                </div>
                <div className="countdown-box">
                  <div className="countdown-unit">
                    <div className="countdown-value">{String(timeLeft.days).padStart(2, "0")}</div>
                    <div className="countdown-label">Days</div>
                  </div>
                  <span className="countdown-sep">:</span>
                  <div className="countdown-unit">
                    <div className="countdown-value">{String(timeLeft.hours).padStart(2, "0")}</div>
                    <div className="countdown-label">Hours</div>
                  </div>
                  <span className="countdown-sep">:</span>
                  <div className="countdown-unit">
                    <div className="countdown-value">{String(timeLeft.minutes).padStart(2, "0")}</div>
                    <div className="countdown-label">Mins</div>
                  </div>
                  <span className="countdown-sep">:</span>
                  <div className="countdown-unit">
                    <div className="countdown-value">{String(timeLeft.seconds).padStart(2, "0")}</div>
                    <div className="countdown-label">Secs</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Perks Bento Grid & Actions */}
            <div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                  marginBottom: "2rem",
                }}
              >
                {activeOffer.perks.map((perk, i) => {
                  const Icon = perk.icon;
                  return (
                    <div key={i} className="offer-feature-card">
                      <div
                        style={{
                          width: "38px",
                          height: "38px",
                          borderRadius: "10px",
                          background: "rgba(212, 175, 55, 0.12)",
                          border: "1px solid rgba(212, 175, 55, 0.25)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#f5dfa2",
                          marginBottom: "0.8rem",
                        }}
                      >
                        <Icon size={18} />
                      </div>
                      <h4
                        style={{
                          fontSize: "0.92rem",
                          fontWeight: 600,
                          color: "#ffffff",
                          marginBottom: "0.35rem",
                          lineHeight: 1.3,
                        }}
                      >
                        {perk.title}
                      </h4>
                      <p
                        style={{
                          fontSize: "0.78rem",
                          color: "#8d98a0",
                          lineHeight: 1.5,
                        }}
                      >
                        {perk.desc}
                      </p>
                    </div>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem" }}>
                <button
                  onClick={handleClaimOffer}
                  className="btn-gold"
                  style={{
                    width: "100%",
                    padding: "1.1rem 1.75rem",
                    fontSize: "0.95rem",
                    justifyContent: "center",
                    boxShadow: "0 10px 30px rgba(212, 175, 55, 0.3)",
                  }}
                >
                  <Sparkles size={18} />
                  <span>Claim Privilege & Reserve Private Suite</span>
                  <ArrowRight size={18} />
                </button>

                <a
                  href={`https://wa.me/442079460912?text=Hello%20Aurelia%20Concierge,%20I%20would%20like%20to%20claim%20the%20${encodeURIComponent(
                    activeOffer.title
                  )}%20with%20privilege%20code%20${activeOffer.code}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline-gold"
                  style={{
                    width: "100%",
                    padding: "0.85rem 1.5rem",
                    fontSize: "0.86rem",
                    justifyContent: "center",
                    textDecoration: "none",
                  }}
                >
                  <MessageCircle size={16} />
                  <span>Inquire via WhatsApp Concierge</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
