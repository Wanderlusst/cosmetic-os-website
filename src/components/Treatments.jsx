import React, { useState } from 'react';
import { useClinic } from '@/context/ClinicContext';

const categories = [
  {
    id: 1,
    name: 'Facial Rejuvenation',
    description: 'Restore youthful contours and luminosity through precise, artful techniques.',
    treatments: ['Dermal Fillers', 'Thread Lifts', 'PRP Therapy', 'Fat Transfer'],
    image: '/images/treatment_facelift.jpg',
  },
  {
    id: 2,
    name: 'Skin Treatments',
    description: 'Transform texture, tone and radiance with our advanced skin protocols.',
    treatments: ['Laser Resurfacing', 'Chemical Peels', 'Micneedleing', 'HydraFacial'],
    image: '/images/treatment_laser.jpg',
  },
  {
    id: 3,
    name: 'Injectables',
    description: 'Subtle, sophisticated results through expertly placed aesthetic injectables.',
    treatments: ['Botulinum Toxin', 'Hyaluronic Fillers', 'Profhilo', 'Sculptra'],
    image: '/images/treatment_inject.jpg',
  },
  {
    id: 4,
    name: 'Body Contouring',
    description: 'Refine and sculpt your silhouette with our precision body treatments.',
    treatments: ['CoolSculpting', 'Lipolysis', 'Morpheus8', 'Radiofrequency'],
    image: '/images/clinic_interior.jpg',
  },
  {
    id: 5,
    name: 'Regenerative Medicine',
    description: "Harness your body's natural healing to restore and rejuvenate from within.",
    treatments: ['PRP / PRF', 'Stem Cell Therapy', 'Exosomes', 'Growth Factors'],
    image: '/images/treatment_facial.jpg',
  },
  {
    id: 6,
    name: 'Hair Restoration',
    description: 'Clinically proven solutions for hair loss and scalp rejuvenation.',
    treatments: ['PRP Hair', 'Exosome Scalp', 'Mesotherapy', 'Hair Analysis'],
    image: '/images/clinic_interior_luxury.jpg',
  },
];

export default function Treatments({ onOpenBooking }) {
  const [hovered, setHovered] = useState(null);
  const { treatments: clinicTreatments } = useClinic();
  const treatmentList = clinicTreatments && clinicTreatments.length > 0 ? clinicTreatments : categories;

  return (
    <section
      id="treatments"
      style={{
        background: 'var(--bg-primary)',
        padding: 'var(--section-padding) var(--container-padding)',
      }}
    >
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          marginBottom: '4rem',
          flexWrap: 'wrap',
          gap: '2rem',
        }}>
          <div className="reveal">
            <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>Treatments</div>
            <h2 style={{ fontWeight: 300, lineHeight: 1.1, maxWidth: '460px' }}>
              A Complete Spectrum
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--accent-deep)' }}>
                of Aesthetic Care
              </em>
            </h2>
          </div>
          <div className="reveal reveal-delay-2">
            <p style={{ maxWidth: '320px', fontSize: '0.95rem' }}>
              Each treatment is personalised to your unique anatomy,
              goals and lifestyle — never template-driven.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1.5rem',
        }} className="treatments-grid">
          {treatmentList.map((cat, i) => (
            <div
              key={cat.id}
              className={`reveal reveal-delay-${(i % 3) + 1}`}
              onMouseEnter={() => setHovered(cat.id)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => onOpenBooking(cat.name)}
              style={{
                position: 'relative',
                borderRadius: '16px',
                overflow: 'hidden',
                aspectRatio: '3/4',
                cursor: 'pointer',
                background: 'var(--bg-secondary)',
                boxShadow: hovered === cat.id ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
                transition: 'box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.16,1,0.3,1)',
                transform: hovered === cat.id ? 'translateY(-6px)' : 'translateY(0)',
              }}
            >
              {/* Background Image */}
              <div style={{
                position: 'absolute', inset: 0,
                overflow: 'hidden',
              }}>
                <img
                  src={cat.image}
                  alt={cat.name}
                  style={{
                    width: '100%', height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)',
                    transform: hovered === cat.id ? 'scale(1.06)' : 'scale(1)',
                  }}
                />
              </div>

              {/* Gradient */}
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(29,29,29,0.75) 0%, rgba(29,29,29,0.1) 50%, transparent 100%)',
              }} />

              {/* Content */}
              <div style={{
                position: 'absolute',
                bottom: 0, left: 0, right: 0,
                padding: '1.75rem 1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
              }}>
                <h4 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                  fontWeight: 300,
                  color: '#fff',
                  lineHeight: 1.2,
                }}>
                  {cat.name}
                </h4>

                <div style={{
                  overflow: 'hidden',
                  maxHeight: hovered === cat.id ? '200px' : '0',
                  transition: 'max-height 0.5s cubic-bezier(0.16,1,0.3,1)',
                }}>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.8)',
                    marginBottom: '0.75rem',
                    fontWeight: 300,
                    lineHeight: 1.6,
                  }}>
                    {cat.description}
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {(cat.treatmentsList || cat.treatments || []).map((t) => (
                      <span key={t} style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.62rem',
                        fontWeight: 500,
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        color: '#fff',
                        background: 'rgba(215, 179, 138, 0.5)',
                        backdropFilter: 'blur(4px)',
                        padding: '0.25rem 0.65rem',
                        borderRadius: '20px',
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <button
            onClick={() => onOpenBooking('')}
            className="btn-primary"
            style={{ padding: '1.1rem 3rem' }}
          >
            Explore All Treatments
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .treatments-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 540px) {
          .treatments-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}