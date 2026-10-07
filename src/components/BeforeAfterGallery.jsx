'use client';

import React, { useState, useRef, useCallback } from 'react';
import { ArrowLeftRight, ArrowRight } from 'lucide-react';
import { useClinic } from '@/context/ClinicContext';

const cases = [
  {
    id: 1,
    label: 'Facial Rejuvenation',
    category: 'Surgical & Injectable Harmonization',
    before: '/images/face_before.jpg',
    after: '/images/face_after.jpg',
    result: 'Natural volumisation and skin renewal',
    doctor: 'Dr. Julian Vance, MD, FRCS',
    patient: 'Patient, Age 42',
    downtime: '24–48 Hours',
    sessions: '1 Session',
    longevity: '18–24 Months',
    details: 'Targeted mid-face structural restoration with micro-droplet dermal matrix renewal. Restores youthful cheek and jawline contours while completely preserving natural dynamic expression.',
    highlights: [
      'Restored mid-face structural contour',
      'Softened nasolabial depth without overfilling',
      'Natural dynamic expressions preserved',
    ],
  },
  {
    id: 2,
    label: 'Lip Enhancement',
    category: 'Architectural Perioral Contouring',
    before: '/images/lips_before.jpg',
    after: '/images/lips_after.jpg',
    result: 'Refined definition with natural proportion',
    doctor: 'Dr. Elena Rostova, MD',
    patient: 'Patient, Age 29',
    downtime: '12–24 Hours',
    sessions: '1 Session',
    longevity: '9–12 Months',
    details: 'Micro-cannula definition of the vermilion border and subtle philtrum column sculpting to enhance proportion and hydration without over-volumising.',
    highlights: [
      'Crisp vermilion border definition',
      'Golden-ratio (1:1.6) anatomical balance',
      'Smooth, hydrated texture with zero migration',
    ],
  },
  {
    id: 3,
    label: 'Skin Resurfacing',
    category: 'Fractional Dermal Remodelling',
    before: '/images/skin_resurface_before.jpg',
    after: '/images/skin_resurface_after.jpg',
    result: 'Improved texture, tone and luminosity',
    doctor: 'Dr. Julian Vance, MD, FRCS',
    patient: 'Patient, Age 38',
    downtime: '2–3 Days',
    sessions: '2 Sessions (4 wks apart)',
    longevity: 'Permanent with maintenance',
    details: 'Advanced fractional laser resurfacing targeting irregular pigment and pore laxity. Triggers deep papillary fibroblast regeneration for smooth texture and even tone.',
    highlights: [
      'Visibly refined dermal pore texture',
      'Even pigment and photodamage clearance',
      'Stimulated natural neocollagenesis',
    ],
  },
  {
    id: 4,
    label: 'Brow Lifting',
    category: 'Periorbital Structural Rejuvenation',
    before: '/images/brow_lift_before.jpg',
    after: '/images/brow_lift_after.jpg',
    result: 'Elevated brow arch with restored youthful openness',
    doctor: 'Dr. Julian Vance, MD, FRCS',
    patient: 'Patient, Age 47',
    downtime: '3–5 Days',
    sessions: '1 Session',
    longevity: '12–18 Months',
    details: 'Precision BTX-mediated brow elevation targeting the corrugator and orbicularis oculi complex to create a natural, rested, open periorbital appearance without surgical intervention.',
    highlights: [
      'Natural brow arch elevation of 3–5mm',
      'Reduced forehead rhytids and frown lines',
      'Refreshed periorbital appearance without surgery',
    ],
  },
  {
    id: 5,
    label: 'Neck Contouring',
    category: 'Submental & Platysmal Rejuvenation',
    before: '/images/neck_contour_before.jpg',
    after: '/images/neck_contour_after.jpg',
    result: 'Defined jawline and sculpted neckline',
    doctor: 'Dr. Elena Rostova, MD',
    patient: 'Patient, Age 51',
    downtime: '24–36 Hours',
    sessions: '2 Sessions (6 wks apart)',
    longevity: '12–24 Months',
    details: 'Targeted submental lipolysis combined with platysmal BTX to reduce submental fullness and tighten the platysmal bands, restoring a clean cervicomental angle.',
    highlights: [
      'Reduced submental fullness without surgery',
      'Sharpened cervicomental angle definition',
      'Platysmal band softening for a smooth neckline',
    ],
  },
];

function BeforeAfterSlider({ before, after, label }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef(null);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.min(Math.max(0, clientX - rect.left), rect.width);
    setPosition((x / rect.width) * 100);
  }, []);

  const handlePointerDown = (e) => {
    isDragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e) => {
    if (!isDragging.current) return;
    updatePosition(e.clientX);
  };

  const handlePointerUp = (e) => {
    isDragging.current = false;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {}
  };

  return (
    <div
      ref={containerRef}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '4/5',
        maxHeight: '620px',
        borderRadius: '20px',
        overflow: 'hidden',
        cursor: 'ew-resize',
        userSelect: 'none',
        touchAction: 'none',
        boxShadow: '0 16px 48px rgba(29,29,29,0.12), 0 0 0 1px rgba(215, 179, 138, 0.25)',
        background: '#0E1114',
      }}
    >
      {/* After image (full background) */}
      <img
        src={after}
        alt={`${label} After`}
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          pointerEvents: 'none',
        }}
        draggable={false}
      />

      {/* Before image (clipped overlay) */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          clipPath: `inset(0 ${100 - position}% 0 0)`,
          pointerEvents: 'none',
        }}
      >
        <img
          src={before}
          alt={`${label} Before`}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            pointerEvents: 'none',
          }}
          draggable={false}
        />
      </div>

      {/* Slider divider line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: `${position}%`,
          width: '2px',
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.7), #ffffff, var(--accent))',
          boxShadow: '0 0 10px rgba(0,0,0,0.3)',
          transform: 'translateX(-50%)',
          pointerEvents: 'none',
          zIndex: 20,
        }}
      >
        {/* Luxury drag knob */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '42px',
            height: '42px',
            borderRadius: '50%',
            background: '#ffffff',
            boxShadow: '0 4px 20px rgba(0,0,0,0.25), 0 0 0 2px var(--accent)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#1D1D1D',
          }}
        >
          <ArrowLeftRight size={18} strokeWidth={2.2} />
        </div>
      </div>

      {/* Before pill badge */}
      <div style={{ position: 'absolute', top: '1.25rem', left: '1.25rem', zIndex: 10, pointerEvents: 'none' }}>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.68rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#ffffff',
            background: 'rgba(29, 29, 29, 0.7)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            padding: '0.35rem 0.8rem',
            borderRadius: '100px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
          }}
        >
          Before
        </span>
      </div>

      {/* After pill badge */}
      <div style={{ position: 'absolute', top: '1.25rem', right: '1.25rem', zIndex: 10, pointerEvents: 'none' }}>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.68rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#ffffff',
            background: 'rgba(184, 147, 106, 0.85)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            padding: '0.35rem 0.8rem',
            borderRadius: '100px',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.3rem',
          }}
        >
          ✦ After
        </span>
      </div>

      {/* Drag instruction helper */}
      <div
        style={{
          position: 'absolute',
          bottom: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10,
          background: 'rgba(29, 29, 29, 0.72)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          borderRadius: '100px',
          padding: '0.3rem 0.85rem',
          fontSize: '0.68rem',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          color: 'rgba(255,255,255,0.85)',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        ‹ Slide to Compare ›
      </div>
    </div>
  );
}

export default function BeforeAfterGallery({ onOpenBooking }) {
  const { caseStudies } = useClinic();
  const caseList = caseStudies && caseStudies.length > 0 ? caseStudies : cases;
  const [active, setActive] = useState(0);
  const currentCase = caseList[active] || caseList[0] || cases[0];

  return (
    <section
      id="results"
      style={{
        background: 'var(--bg-primary)',
        padding: 'var(--section-padding) var(--container-padding)',
      }}
    >
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'end',
            marginBottom: '3.5rem',
          }}
          className="results-header"
        >
          <div className="reveal">
            <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>Patient Results</div>
            <h2 style={{ fontWeight: 300, lineHeight: 1.1, marginBottom: '1rem' }}>
              Real Transformations.
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--accent-deep)' }}>
                Natural Results.
              </em>
            </h2>
          </div>
          <div className="reveal reveal-delay-2">
            <p style={{ fontSize: '1rem', lineHeight: 1.8, maxWidth: '460px' }}>
              Every treatment at Aurelia is designed to enhance your natural beauty
              — results that look refined, never overdone.
            </p>
            <button
              onClick={() => onOpenBooking('')}
              className="btn-outline"
              style={{ marginTop: '1.5rem' }}
            >
              Discuss Your Goals
            </button>
          </div>
        </div>

        {/* Gallery 3-Column Balanced Layout */}
        <div
          className="results-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '260px minmax(420px, 1.2fr) minmax(320px, 380px)',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Column 1: Procedure Tab Selector */}
          <div className="reveal results-tabs" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {caseList.map((c, i) => {
              const isSelected = active === i;
              return (
                <button
                  key={c.id}
                  onClick={() => setActive(i)}
                  className="results-tab-btn"
                  style={{
                    background: isSelected
                      ? 'linear-gradient(135deg, rgba(215, 179, 138, 0.12) 0%, rgba(215, 179, 138, 0.04) 100%)'
                      : 'transparent',
                    border: `1px solid ${isSelected ? 'rgba(215, 179, 138, 0.45)' : 'var(--border-light)'}`,
                    borderRadius: '14px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: '1.2rem 1.25rem',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: isSelected ? '0 10px 24px -6px rgba(215, 179, 138, 0.2)' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  {/* Left accent bar indicator */}
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: isSelected ? '3.5px' : '0px',
                      height: isSelected ? '60%' : '0%',
                      borderRadius: '0 4px 4px 0',
                      background: 'var(--accent)',
                      transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    }}
                  />

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '0.5rem',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                        transition: 'color 0.3s',
                      }}
                    >
                      {c.label}
                    </div>

                    <ArrowRight
                      size={13}
                      style={{
                        color: isSelected ? 'var(--accent)' : 'transparent',
                        transform: isSelected ? 'translateX(0)' : 'translateX(-5px)',
                        opacity: isSelected ? 1 : 0,
                        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                        flexShrink: 0,
                      }}
                    />
                  </div>

                  {/* Liquid accordion for result text */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateRows: isSelected ? '1fr' : '0fr',
                      opacity: isSelected ? 1 : 0,
                      transition: 'grid-template-rows 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease',
                    }}
                  >
                    <div style={{ overflow: 'hidden' }}>
                      <div
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontStyle: 'italic',
                          fontSize: '0.86rem',
                          color: 'var(--accent-deep)',
                          paddingTop: '0.35rem',
                          lineHeight: 1.4,
                        }}
                      >
                        {c.result}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Quality Assurances */}
            <div
              style={{
                marginTop: '1.5rem',
                padding: '1.25rem 0',
                borderTop: '1px solid var(--border-light)',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.6rem',
              }}
            >
              {['100% Unretouched Records', 'Standardised Clinical Lighting'].map((txt) => (
                <div key={txt} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.72rem', fontFamily: 'var(--font-body)', color: 'var(--text-muted)', letterSpacing: '0.04em' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                  {txt}
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Interactive Before/After Visual with smooth fade & scale */}
          <div key={`slider-${active}`} className="results-slider-col gallery-slider-anim" style={{ width: '100%' }}>
            <BeforeAfterSlider
              before={currentCase.before}
              after={currentCase.after}
              label={currentCase.label}
            />
            <p
              style={{
                marginTop: '1.25rem',
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1.1rem',
                color: 'var(--text-secondary)',
                textAlign: 'center',
                lineHeight: 1.5,
              }}
            >
              "{currentCase.result}"
            </p>
          </div>

          {/* Column 3: Editorial Treatment Profile */}
          <div
            key={`dossier-${active}`}
            className="results-dossier gallery-dossier-anim"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0',
              paddingLeft: '2rem',
              borderLeft: '1px solid var(--border-light)',
            }}
          >
            {/* Eyebrow */}
            <div className="eyebrow gallery-stagger-1" style={{ marginBottom: '1.5rem' }}>
              Case Study 0{currentCase.id}
            </div>

            {/* Treatment title */}
            <h3
              className="gallery-stagger-2"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3vw, 2.6rem)',
                fontWeight: 300,
                color: 'var(--text-primary)',
                lineHeight: 1.05,
                letterSpacing: '-0.02em',
                marginBottom: '0.4rem',
              }}
            >
              {currentCase.label}
            </h3>
            <p
              className="gallery-stagger-2"
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: '1rem',
                color: 'var(--accent-deep)',
                marginBottom: '2rem',
                fontWeight: 300,
              }}
            >
              {currentCase.category}
            </p>

            {/* Thin divider */}
            <div className="divider gallery-stagger-3" style={{ marginBottom: '2rem' }} />

            {/* Treatment specs — numbered rows like Philosophy pillars */}
            <div className="gallery-stagger-3" style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {[
                { num: '01', label: 'Practitioner', value: currentCase.doctor.split(',')[0] },
                { num: '02', label: 'Sessions', value: currentCase.sessions },
                { num: '03', label: 'Downtime', value: currentCase.downtime },
                { num: '04', label: 'Longevity', value: currentCase.longevity },
              ].map((row) => (
                <div
                  key={row.num}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '32px 1fr 1fr',
                    gap: '1rem',
                    padding: '1rem 0',
                    borderBottom: '1px solid var(--border-light)',
                    alignItems: 'center',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '0.82rem',
                      color: 'var(--accent)',
                      fontWeight: 300,
                    }}
                  >
                    {row.num}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.68rem',
                      fontWeight: 500,
                      letterSpacing: '0.14em',
                      textTransform: 'uppercase',
                      color: 'var(--text-light)',
                    }}
                  >
                    {row.label}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.85rem',
                      fontWeight: 500,
                      color: 'var(--text-primary)',
                    }}
                  >
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Italic serif summary */}
            <div
              className="gallery-stagger-4"
              style={{
                margin: '2rem 0',
                paddingLeft: '1.25rem',
                borderLeft: '2px solid var(--accent-soft)',
              }}
            >
              <p
                className="serif-quote"
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.65,
                  color: 'var(--text-secondary)',
                  fontStyle: 'italic',
                  fontWeight: 300,
                }}
              >
                {currentCase.details}
              </p>
            </div>

            {/* Outcome list — minimal, no icons, just dot leaders */}
            <div className="gallery-stagger-4" style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '2rem' }}>
              {currentCase.highlights.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    fontSize: '0.82rem',
                    fontFamily: 'var(--font-body)',
                    color: 'var(--text-primary)',
                    fontWeight: 400,
                  }}
                >
                  <span
                    style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      background: 'var(--accent)',
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </div>
              ))}
            </div>

            {/* CTA — btn-outline matches the header button style */}
            <button
              onClick={() => onOpenBooking(currentCase.label)}
              className="btn-outline gallery-stagger-5"
              style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
            >
              Consult for {currentCase.label}
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .results-tab-btn:hover {
          background: rgba(215, 179, 138, 0.06) !important;
          border-color: rgba(215, 179, 138, 0.3) !important;
        }

        @keyframes gallerySliderFadeIn {
          0% {
            opacity: 0.2;
            transform: scale(0.985);
            filter: blur(6px);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
        }

        @keyframes galleryDossierFadeIn {
          0% {
            opacity: 0;
            transform: translateY(14px);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes galleryStaggerItem {
          0% {
            opacity: 0;
            transform: translateY(8px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .gallery-slider-anim {
          animation: gallerySliderFadeIn 0.55s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .gallery-dossier-anim {
          animation: galleryDossierFadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .gallery-stagger-1 {
          animation: galleryStaggerItem 0.35s cubic-bezier(0.16, 1, 0.3, 1) 0.03s both;
        }
        .gallery-stagger-2 {
          animation: galleryStaggerItem 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.08s both;
        }
        .gallery-stagger-3 {
          animation: galleryStaggerItem 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.13s both;
        }
        .gallery-stagger-4 {
          animation: galleryStaggerItem 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.18s both;
        }
        .gallery-stagger-5 {
          animation: galleryStaggerItem 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.23s both;
        }

        @media (max-width: 1140px) {
          .results-grid {
            grid-template-columns: 240px 1fr !important;
            gap: 2rem !important;
          }
          .results-dossier {
            grid-column: 1 / -1;
            margin-top: 1rem;
          }
        }
        @media (max-width: 820px) {
          .results-header {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .results-grid {
            grid-template-columns: 1fr !important;
            gap: 2rem !important;
          }
          .results-tabs {
            flex-direction: row !important;
            overflow-x: auto;
            border-bottom: 1px solid var(--border-neutral);
            padding-bottom: 0.5rem;
          }
          .results-tabs button {
            border-left: none !important;
            border-bottom: 2px solid transparent !important;
            white-space: nowrap;
            padding: 0.75rem 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
