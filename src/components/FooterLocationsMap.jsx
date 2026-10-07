import * as React from "react"
import { DottedMap } from "@/registry/magicui/dotted-map"
import { MapPin, Phone, Clock, ArrowUpRight, Sparkles, Building2 } from "lucide-react"

export const clinicLocations = [
  {
    id: "london",
    lat: 51.5074,
    lng: -0.1278,
    size: 2.8,
    pulse: true,
    overlay: {
      countryCode: "gb",
      label: "London",
      flipLeft: true,
    },
    flagship: "London Mayfair Sanctuary",
    suite: "22 Grosvenor Square, Mayfair, London W1K 6LF",
    phone: "+44 (0)20 7946 0912",
    hours: "Mon – Sat: 09:00 – 19:00",
    badge: "Primary Surgical Flagship",
    tagline: "GMC Registered • CQC Inspected",
  },
  {
    id: "beverly-hills",
    lat: 34.0736,
    lng: -118.4004,
    size: 2.8,
    pulse: true,
    overlay: {
      countryCode: "us",
      label: "Beverly Hills",
      flipLeft: false,
    },
    flagship: "Beverly Hills Suite",
    suite: "450 North Rodeo Drive, Penthouse, CA 90210",
    phone: "+1 (310) 555-0198",
    hours: "Mon – Fri: 08:30 – 18:30",
    badge: "Flagship Surgical Suite",
    tagline: "Private Helipad & Chauffeur Transfer",
  },
  {
    id: "nyc",
    lat: 40.7128,
    lng: -74.006,
    size: 2.8,
    pulse: true,
    overlay: {
      countryCode: "us",
      label: "NYC",
      flipLeft: false,
    },
    flagship: "New York Upper East Suite",
    suite: "740 Park Avenue, Upper East Side, NY 10021",
    phone: "+1 (212) 555-0144",
    hours: "By Private Appointment",
    badge: "Consultation & Injectables",
    tagline: "Volumetric 3D Vectra® Diagnostics",
  },
  {
    id: "seoul",
    lat: 37.5665,
    lng: 126.978,
    size: 2.8,
    pulse: true,
    overlay: {
      countryCode: "kr",
      label: "Seoul",
      flipLeft: false,
    },
    flagship: "Seoul Aesthetic Science Hub",
    suite: "Cheongdam-dong, Gangnam-gu, Seoul",
    phone: "+82 2 555 0182",
    hours: "Mon – Sat: 10:00 – 20:00",
    badge: "Cellular & Laser Science",
    tagline: "Exosome & Hybrid Laser Matrix Center",
  },
  {
    id: "dubai",
    lat: 25.2048,
    lng: 55.2708,
    size: 2.8,
    pulse: true,
    overlay: {
      countryCode: "ae",
      label: "Dubai",
      flipLeft: false,
    },
    flagship: "Dubai DIFC Surgical Villa",
    suite: "Gate Village 4, DIFC, Dubai, UAE",
    phone: "+971 4 555 0199",
    hours: "Mon – Sat: 09:30 – 19:30",
    badge: "Private Surgical Pavilion",
    tagline: "VIP Vehicular Entry & Recovery Villa",
  },
  {
    id: "zurich",
    lat: 47.3769,
    lng: 8.5417,
    size: 2.8,
    pulse: true,
    overlay: {
      countryCode: "ch",
      label: "Zurich",
      flipLeft: false,
    },
    flagship: "Zurich Longevity Sanctuary",
    suite: "Bahnhofstrasse 28, 8001 Zurich, Switzerland",
    phone: "+41 44 555 0120",
    hours: "By Referral Only",
    badge: "Cellular Longevity Clinic",
    tagline: "Autologous Stem Cell & Regenerative Care",
  },
]

export default function FooterLocationsMap() {
  const id = React.useId()
  const [selectedLoc, setSelectedLoc] = React.useState(clinicLocations[0])

  return (
    <div style={{ width: "100%", marginBottom: "4rem" }}>
      {/* Section Header */}
      <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            padding: "0.35rem 1rem",
            borderRadius: "9999px",
            background: "rgba(212, 175, 55, 0.08)",
            border: "1px solid rgba(212, 175, 55, 0.25)",
            color: "#d4af37",
            fontSize: "0.72rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            marginBottom: "0.85rem",
          }}
        >
          <Sparkles size={13} color="#d4af37" />
          <span>Worldwide Clinical Presence</span>
        </div>

        <h3
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(1.5rem, 3.2vw, 2.25rem)",
            fontWeight: 600,
            color: "#ffffff",
            letterSpacing: "-0.02em",
            margin: "0 0 0.5rem",
          }}
        >
          Global Sanctuaries & Private Surgical Suites
        </h3>

        <p
          style={{
            color: "#8d98a0",
            fontSize: "0.88rem",
            maxWidth: "680px",
            margin: "0 auto",
            lineHeight: 1.6,
          }}
        >
          Experience discrete aesthetic medicine, twilight surgical artistry, and personalized concierge care across premier international metropolitan hubs.
        </p>
      </div>

      {/* Dotted Map Visual Container */}
      <div
        className="relative h-[480px] w-full overflow-hidden rounded-2xl border"
        style={{
          position: "relative",
          height: "480px",
          width: "100%",
          overflow: "hidden",
          borderRadius: "18px",
          border: "1px solid rgba(212, 175, 55, 0.22)",
          background: "radial-gradient(ellipse at 50% 45%, #10161d 0%, #080a0c 75%, #050608 100%)",
          boxShadow: "0 25px 60px -12px rgba(0, 0, 0, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.08)",
        }}
      >
        {/* Subtle grid pattern for radar aesthetic */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(212, 175, 55, 0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.035) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
            pointerEvents: "none",
          }}
        />

        {/* Ambient Radial Vignette */}
        <div
          className="to-background absolute inset-0 bg-radial from-transparent to-200%"
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(circle at 50% 50%, transparent 20%, rgba(5, 6, 8, 0.8) 100%)",
            pointerEvents: "none",
            zIndex: 1,
          }}
        />

        {/* Live Network Status Indicator Badge */}
        <div
          style={{
            position: "absolute",
            top: "1.25rem",
            right: "1.25rem",
            zIndex: 3,
            background: "rgba(10, 14, 18, 0.8)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(212, 175, 55, 0.25)",
            borderRadius: "100px",
            padding: "0.45rem 1rem",
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            fontSize: "0.74rem",
            color: "#f5dfa2",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.4)",
          }}
        >
          <span
            style={{
              width: "7px",
              height: "7px",
              borderRadius: "50%",
              background: "#10b981",
              boxShadow: "0 0 10px #10b981",
              display: "inline-block",
            }}
          />
          <span style={{ fontWeight: 500, letterSpacing: "0.06em", textTransform: "uppercase" }}>
            6 Flagship Suites Operating
          </span>
        </div>

        {/* The Dotted Map Component */}
        <div style={{ width: "100%", height: "100%", position: "relative", zIndex: 2 }}>
          <DottedMap
            width={150}
            height={75}
            mapSamples={6000}
            dotRadius={0.22}
            dotColor="rgba(212, 175, 55, 0.22)"
            markerColor="#d4af37"
            pulse={true}
            markers={clinicLocations}
            renderMarkerOverlay={({ marker, x, y, r, index }) => {
              const { countryCode, label, flipLeft } = marker.overlay
              const href = `https://flagcdn.com/w80/${countryCode}.webp`

              const clipId = `${id}-flag-clip-${index}`.replace(/:/g, "-")
              const imgR = r * 0.75

              const fontSize = r * 0.88
              const pillH = r * 1.55
              const pillW = label.length * (fontSize * 0.64) + r * 1.5
              const pillX = flipLeft ? x - r - r * 0.6 - pillW : x + r + r * 0.6
              const pillY = y - pillH / 2

              return (
                <g style={{ pointerEvents: "none" }}>
                  <defs>
                    <clipPath id={clipId}>
                      <circle cx={x} cy={y} r={imgR} />
                    </clipPath>
                  </defs>

                  {/* Flag Image Masked into Circle */}
                  <image
                    href={href}
                    x={x - imgR}
                    y={y - imgR}
                    width={imgR * 2}
                    height={imgR * 2}
                    preserveAspectRatio="xMidYMid slice"
                    clipPath={`url(#${clipId})`}
                  />

                  {/* Gold Border Ring around Flag Circle */}
                  <circle
                    cx={x}
                    cy={y}
                    r={imgR + 0.12}
                    fill="none"
                    stroke="#d4af37"
                    strokeWidth={0.24}
                  />

                  {/* Frosted Glass Pill Tag for Location Label */}
                  <rect
                    x={pillX}
                    y={pillY}
                    width={pillW}
                    height={pillH}
                    rx={pillH / 2}
                    fill="rgba(8, 11, 14, 0.85)"
                    stroke="rgba(212, 175, 55, 0.4)"
                    strokeWidth={0.22}
                  />

                  {/* Location Label Text */}
                  <text
                    x={pillX + r * 0.7}
                    y={y + fontSize * 0.35}
                    fontSize={fontSize}
                    fill="#f5dfa2"
                    fontWeight="600"
                    fontFamily="Inter, system-ui, sans-serif"
                    letterSpacing="0.02em"
                  >
                    {label}
                  </text>
                </g>
              )
            }}
          />
        </div>
      </div>

      {/* Interactive Location Selector Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.25rem",
          marginTop: "1.75rem",
        }}
      >
        {clinicLocations.map((loc) => {
          const isSelected = selectedLoc.id === loc.id
          return (
            <div
              key={loc.id}
              onClick={() => setSelectedLoc(loc)}
              style={{
                background: isSelected ? "rgba(26, 33, 41, 0.85)" : "rgba(14, 18, 22, 0.6)",
                border: isSelected
                  ? "1px solid rgba(212, 175, 55, 0.6)"
                  : "1px solid rgba(255, 255, 255, 0.07)",
                borderRadius: "12px",
                padding: "1.25rem",
                cursor: "pointer",
                transition: "all 0.25s ease",
                boxShadow: isSelected ? "0 8px 30px rgba(212, 175, 55, 0.12)" : "none",
                display: "flex",
                flexDirection: "column",
                gap: "0.6rem",
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = "rgba(212, 175, 55, 0.35)"
                  e.currentTarget.style.background = "rgba(20, 26, 32, 0.75)"
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.07)"
                  e.currentTarget.style.background = "rgba(14, 18, 22, 0.6)"
                }
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <img
                    src={`https://flagcdn.com/w80/${loc.overlay.countryCode}.webp`}
                    alt={loc.overlay.label}
                    style={{
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "1px solid rgba(212, 175, 55, 0.5)",
                    }}
                  />
                  <div>
                    <h4
                      style={{
                        color: isSelected ? "#f5dfa2" : "#ffffff",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        margin: 0,
                      }}
                    >
                      {loc.flagship}
                    </h4>
                    <span
                      style={{
                        fontSize: "0.68rem",
                        color: "#d4af37",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                      }}
                    >
                      {loc.badge}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    color: isSelected ? "#d4af37" : "#6c7780",
                    transition: "color 0.2s",
                  }}
                >
                  <ArrowUpRight size={16} />
                </div>
              </div>

              <p style={{ color: "#929fa8", fontSize: "0.8rem", lineHeight: 1.5, margin: 0 }}>
                {loc.suite}
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.5rem",
                  paddingTop: "0.5rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.05)",
                  marginTop: "0.25rem",
                  fontSize: "0.76rem",
                }}
              >
                <a
                  href={`tel:${loc.phone.replace(/[^0-9+]/g, "")}`}
                  style={{
                    color: "#f5dfa2",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.35rem",
                  }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Phone size={12} color="#d4af37" />
                  <span>{loc.phone}</span>
                </a>

                <div style={{ color: "#7a8791", display: "flex", alignItems: "center", gap: "0.35rem" }}>
                  <Clock size={12} />
                  <span>{loc.hours}</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
