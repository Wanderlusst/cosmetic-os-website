'use client';

import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { useClinic } from '@/context/ClinicContext';

const treatments = [
  {
    id: 1,
    num: '01',
    name: 'Ultrasonic Cavitation',
    tagline: 'Sound-wave fat disruption',
    description:
      'Targeted low-frequency ultrasound waves penetrate the dermis to selectively rupture adipocyte membranes in localised areas. The released lipids are then processed through your lymphatic system — no incisions, no downtime.',
    specs: [
      { label: 'Sessions', value: '6–8 Sessions' },
      { label: 'Downtime', value: 'None' },
      { label: 'Results Visible', value: '3–6 Weeks' },
      { label: 'Longevity', value: 'Permanent*' },
    ],
    image: '/images/fatloss_cavitation.jpg',
    tag: 'Non-Invasive',
  },
  {
    id: 2,
    num: '02',
    name: 'Cryolipolysis',
    tagline: 'Controlled fat-cell freezing',
    description:
      'Working on a different principle, Cryolipolysis applies precisely controlled cooling to subcutaneous fat deposits. Fat cells are metabolically active at temperatures that leave overlying skin and tissue completely unharmed — they undergo natural apoptosis over 8–12 weeks.',
    specs: [
      { label: 'Sessions', value: '1–3 Sessions' },
      { label: 'Downtime', value: '24–48 Hours' },
      { label: 'Results Visible', value: '8–12 Weeks' },
      { label: 'Longevity', value: 'Permanent*' },
    ],
    image: '/images/fatloss_cryolipolysis.jpg',
    tag: 'Fat Freezing',
  },
  {
    id: 3,
    num: '03',
    name: 'Radiofrequency Lipolysis',
    tagline: 'Heat-driven fat remodelling',
    description:
      'Monopolar radiofrequency energy heats the subdermal layer to 40–43°C, triggering both adipocyte apoptosis and fibroblast stimulation. The result is simultaneous fat reduction and dermal tightening — an ideal solution for lax skin with volume excess.',
    specs: [
      { label: 'Sessions', value: '4–6 Sessions' },
      { label: 'Downtime', value: 'None' },
      { label: 'Results Visible', value: '4–8 Weeks' },
      { label: 'Longevity', value: '12–18 Months' },
    ],
    image: '/images/fatloss_rf.jpg',
    tag: 'Skin Tightening',
  },
  {
    id: 4,
    num: '04',
    name: 'Injection Lipolysis',
    tagline: 'Precision phosphatidylcholine sculpting',
    description:
      'A refined injectable protocol using phosphatidylcholine (PCDC) compounds to enzymatically dissolve localised fat deposits with high anatomical specificity. Particularly effective for submental fullness, bra rolls, and inner thigh volume.',
    specs: [
      { label: 'Sessions', value: '2–4 Sessions' },
      { label: 'Downtime', value: '2–4 Days' },
      { label: 'Results Visible', value: '4–6 Weeks' },
      { label: 'Longevity', value: 'Permanent*' },
    ],
    image: '/images/fatloss_injection.jpg',
    tag: 'Injectable',
  },
];

export default function FatLoss({ onOpenBooking }) {
  const { fatLoss: clinicFatLoss } = useClinic();
  const treatmentList = clinicFatLoss && clinicFatLoss.length > 0 ? clinicFatLoss : treatments;
  const [active, setActive] = useState(0);
  const current = treatmentList[active] || treatmentList[0] || treatments[0];

  return (
    <section
      id="fat-loss"
      style={{
        background: 'var(--bg-secondary)',
        padding: 'var(--section-padding) var(--container-padding)',
        overflow: 'hidden',
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
            marginBottom: '4rem',
          }}
          className="fatloss-header"
        >
          <div className="reveal">
            <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>Body Sculpting</div>
            <h2 style={{ fontWeight: 300, lineHeight: 1.1 }}>
              Achieve Your Weight
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--accent-deep)' }}>
                Loss Goals.
              </em>
            </h2>
          </div>
          <div className="reveal reveal-delay-2">
            <p style={{ fontSize: '1rem', lineHeight: 1.8, maxWidth: '440px' }}>
              Our proven fat loss solutions combine the latest in non-invasive technology
              with clinical precision — delivering measurable, lasting results without surgery.
            </p>
            <button
              onClick={() => onOpenBooking('Body Sculpting')}
              className="btn-outline"
              style={{ marginTop: '1.5rem' }}
            >
              Start Your Transformation
            </button>
          </div>
        </div>

        {/* Why Choose Strip */}
        <div
          className="reveal fatloss-strip"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '0',
            marginBottom: '4rem',
            borderTop: '1px solid var(--border-light)',
            borderBottom: '1px solid var(--border-light)',
          }}
        >
          {[
            { num: '97%', label: 'Patient Satisfaction Rate' },
            { num: '2–8 cm', label: 'Average Circumference Reduction' },
            { num: '0', label: 'Surgical Downtime Required' },
            { num: '4 +', label: 'Clinically Proven Modalities' },
          ].map((stat, i) => (
            <div
              key={i}
              style={{
                padding: '2rem 1.5rem',
                borderRight: i < 3 ? '1px solid var(--border-light)' : 'none',
                textAlign: 'center',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
                  fontWeight: 300,
                  color: 'var(--accent-deep)',
                  lineHeight: 1,
                  marginBottom: '0.5rem',
                }}
              >
                {stat.num}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Treatment Explorer */}
        <div
          className="fatloss-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.6fr',
            gap: '3.5rem',
            alignItems: 'start',
          }}
        >
          {/* Left: Tab Selector */}
          <div className="reveal" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {treatmentList.map((t, i) => {
              const isActive = active === i;
              return (
                <button
                  key={t.id}
                  onClick={() => setActive(i)}
                  className="fatloss-tab-btn"
                  style={{
                    background: isActive
                      ? 'linear-gradient(135deg, rgba(215, 179, 138, 0.12) 0%, rgba(215, 179, 138, 0.04) 100%)'
                      : 'transparent',
                    border: `1px solid ${isActive ? 'rgba(215, 179, 138, 0.45)' : 'var(--border-light)'}`,
                    borderRadius: '14px',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: '1.25rem 1.4rem',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: isActive ? '0 10px 28px -6px rgba(215, 179, 138, 0.2)' : 'none',
                    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  {/* Left accent bar */}
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '50%',
                      transform: 'translateY(-50%)',
                      width: isActive ? '3.5px' : '0px',
                      height: isActive ? '60%' : '0%',
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
                      gap: '0.75rem',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontSize: '0.82rem',
                          color: isActive ? 'var(--accent)' : 'var(--text-light)',
                          fontWeight: 400,
                          flexShrink: 0,
                          transition: 'color 0.3s',
                        }}
                      >
                        {t.num}
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                          transition: 'color 0.3s',
                        }}
                      >
                        {t.name}
                      </span>
                    </div>

                    <ArrowRight
                      size={14}
                      style={{
                        color: isActive ? 'var(--accent)' : 'transparent',
                        transform: isActive ? 'translateX(0)' : 'translateX(-6px)',
                        opacity: isActive ? 1 : 0,
                        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                        flexShrink: 0,
                      }}
                    />
                  </div>

                  {/* Smooth height accordion for tagline with zero layout jerk */}
                  <div
                    style={{
                      display: 'grid',
                      gridTemplateRows: isActive ? '1fr' : '0fr',
                      opacity: isActive ? 1 : 0,
                      transition: 'grid-template-rows 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease',
                    }}
                  >
                    <div style={{ overflow: 'hidden' }}>
                      <div
                        style={{
                          fontFamily: 'var(--font-serif)',
                          fontStyle: 'italic',
                          fontSize: '0.9rem',
                          color: 'var(--accent-deep)',
                          paddingLeft: '1.6rem',
                          paddingTop: '0.5rem',
                          lineHeight: 1.4,
                        }}
                      >
                        {t.tagline}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Treatment Detail Panel with smooth fluid transition */}
          <div
            key={current.id}
            className="fatloss-panel fatloss-reveal-anim"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2.5rem',
              alignItems: 'start',
            }}
          >
            {/* Image with zoom and smooth fade-in */}
            <div
              className="fatloss-img-wrapper"
              style={{
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '3/4',
                background: 'var(--accent-soft)',
                gridRow: '1 / 3',
                boxShadow: '0 18px 48px rgba(29,29,29,0.1), 0 0 0 1px rgba(215, 179, 138, 0.25)',
                position: 'relative',
              }}
            >
              <img
                src={current.image}
                alt={current.name}
                className="fatloss-anim-img"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block',
                }}
              />
            </div>

            {/* Text block with staggered reveal */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {/* Tag */}
              <span
                className="tag fatloss-stagger-1"
                style={{ marginBottom: '1.25rem', alignSelf: 'flex-start' }}
              >
                {current.tag}
              </span>

              {/* Name */}
              <h3
                className="fatloss-stagger-2"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                  fontWeight: 300,
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  marginBottom: '0.3rem',
                }}
              >
                {current.name}
              </h3>
              <p
                className="fatloss-stagger-2"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '0.95rem',
                  color: 'var(--accent-deep)',
                  marginBottom: '1.5rem',
                }}
              >
                {current.tagline}
              </p>

              <div className="divider fatloss-stagger-3" style={{ marginBottom: '1.5rem' }} />

              {/* Description */}
              <p
                className="fatloss-stagger-3"
                style={{
                  fontSize: '0.875rem',
                  lineHeight: 1.75,
                  color: 'var(--text-secondary)',
                  marginBottom: '1.75rem',
                }}
              >
                {current.description}
              </p>

              {/* Specs grid */}
              <div
                className="fatloss-stagger-4"
                style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '0',
                  marginBottom: '2rem',
                }}
              >
                {current.specs.map((s, idx) => (
                  <div
                    key={s.label}
                    style={{
                      padding: '0.75rem 0',
                      borderBottom: idx < 2 ? '1px solid var(--border-light)' : 'none',
                      borderRight: idx % 2 === 0 ? '1px solid var(--border-light)' : 'none',
                      paddingRight: idx % 2 === 0 ? '1rem' : '0',
                      paddingLeft: idx % 2 !== 0 ? '1rem' : '0',
                    }}
                  >
                    <span
                      style={{
                        display: 'block',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.62rem',
                        fontWeight: 500,
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'var(--text-light)',
                        marginBottom: '0.25rem',
                      }}
                    >
                      {s.label}
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: 'var(--text-primary)',
                      }}
                    >
                      {s.value}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onOpenBooking(current.name)}
                className="btn-outline fatloss-stagger-5"
                style={{ alignSelf: 'flex-start', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                Book {current.name}
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Bottom note */}
            <p
              style={{
                gridColumn: '2 / 3',
                fontSize: '0.72rem',
                color: 'var(--text-light)',
                fontStyle: 'italic',
                lineHeight: 1.5,
              }}
            >
              * Individual results vary. Permanent refers to the treated fat cells — maintaining a stable weight preserves results long-term.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .fatloss-tab-btn:hover {
          background: rgba(215, 179, 138, 0.06) !important;
          border-color: rgba(215, 179, 138, 0.3) !important;
        }

        @keyframes fatlossPanelFade {
          0% {
            opacity: 0;
            transform: translateY(16px);
            filter: blur(6px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes fatlossImgZoom {
          0% {
            opacity: 0.3;
            transform: scale(1.05);
            filter: blur(8px);
          }
          100% {
            opacity: 1;
            transform: scale(1);
            filter: blur(0);
          }
        }

        @keyframes fatlossStaggerFade {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .fatloss-reveal-anim {
          animation: fatlossPanelFade 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .fatloss-anim-img {
          animation: fatlossImgZoom 0.65s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .fatloss-stagger-1 {
          animation: fatlossStaggerFade 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.04s both;
        }
        .fatloss-stagger-2 {
          animation: fatlossStaggerFade 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.09s both;
        }
        .fatloss-stagger-3 {
          animation: fatlossStaggerFade 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.14s both;
        }
        .fatloss-stagger-4 {
          animation: fatlossStaggerFade 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.19s both;
        }
        .fatloss-stagger-5 {
          animation: fatlossStaggerFade 0.45s cubic-bezier(0.16, 1, 0.3, 1) 0.24s both;
        }

        @media (max-width: 900px) {
          .fatloss-header { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .fatloss-strip { grid-template-columns: repeat(2, 1fr) !important; }
          .fatloss-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .fatloss-panel { grid-template-columns: 1fr !important; }
          .fatloss-panel > div:first-child { grid-row: auto !important; aspect-ratio: 16/9 !important; }
        }
        @media (max-width: 540px) {
          .fatloss-strip { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  );
}
