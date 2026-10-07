import React from 'react';
import { Check, Sparkles, Shield, ArrowRight, Calendar, HelpCircle } from 'lucide-react';

const PACKAGES = [
  {
    name: 'Cellular Radiance Reset',
    tier: 'Skin & Regenerative',
    price: '£1,850',
    subtitle: 'Comprehensive 3-Stage Dermal Revitalization',
    description: 'Designed for active professionals seeking radical luminosity, pore shrinkage, and tone evening with minimal downtime.',
    highlight: false,
    inclusions: [
      'Fractional Erbium hybrid laser skin polish',
      'High-potency autologous exosome cellular serum infusion',
      'Medical-grade LED photobiomodulation session',
      'Full 30-day post-procedure restorative home care system',
      'Complimentary 4-week clinical dermoscopy review',
    ],
    idealFor: 'Dullness, solar pigmentation, enlarged pores, and textural roughness.',
  },
  {
    name: 'The Full Facial Harmony Protocol',
    tier: 'Signature Non-Surgical',
    price: '£3,450',
    subtitle: 'Master Injectables & Ultrasound Contouring',
    description: 'Our most sought-after non-surgical program. Delivers complete 360-degree anatomical balance with zero pillow-face risk.',
    highlight: true,
    badge: 'Most Popular Bespoke Program',
    inclusions: [
      'Full 3D Vectra® biometric volumetric facial analysis',
      'Bespoke micro-droplet neuromodulator softening (3 areas)',
      'Up to 3ml premium Juvederm/Restylane structural hyaluronic support',
      'Targeted Morpheus8 Pro jawline & submental radiofrequency contouring',
      'Personalized 12-month facial maintenance blueprint',
    ],
    idealFor: 'Early jowl laxity, tired tear troughs, volume loss, and facial asymmetry.',
  },
  {
    name: 'Architectural Deep Plane Rejuvenation',
    tier: 'Haute Surgical Excellence',
    price: '£12,800',
    subtitle: 'The Gold-Standard Definitive Restoration',
    description: 'Comprehensive surgical suspension of the deep SMAS layer and platysma cervical bands for undetectable, permanent youthful grace.',
    highlight: false,
    inclusions: [
      'Deep plane SMAS facelift + Platysmaplasty neck tightening',
      'Conducted in hospital-grade HEPA sterile private theatre',
      'Specialist consultant anaesthetist twilight sedation care',
      '1 Night private medical recovery suite with 1-on-1 nursing',
      '12 Full months of hyperbaric, lymphatic, and scar remodeling follow-up',
    ],
    idealFor: 'Significant midface descent, neck band laxity, and structural restoration.',
  },
];

export default function Packages({ onOpenBooking }) {
  return (
    <section
      id="packages"
      style={{
        padding: '7rem 1.5rem',
        background: '#0a0c0e',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 4.5rem' }}>
          <span className="badge-gold">
            <Sparkles size={12} /> Transparent Investment
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.2rem, 3.8vw, 3.4rem)',
              color: '#ffffff',
              fontWeight: 650,
              lineHeight: 1.15,
              marginTop: '0.75rem',
              letterSpacing: '-0.025em',
            }}
          >
            Curated Signature <span className="gold-text-gradient">Treatment Protocols</span>
          </h2>
          <p style={{ fontSize: '1rem', color: '#97a3ad', lineHeight: 1.7, marginTop: '1rem' }}>
            We believe luxury medicine requires complete financial transparency. All quoted packages include comprehensive
            pre-procedure mapping, premium medical consumables, and dedicated post-care.
          </p>
        </div>

        {/* 3 Packages Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2.5rem',
            alignItems: 'stretch',
            paddingTop: '1.5rem',
          }}
        >
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.name}
              className="luxury-card"
              style={{
                padding: pkg.badge ? '3.25rem 2.25rem 2.5rem' : '2.75rem 2.25rem 2.5rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: pkg.highlight
                  ? '1px solid rgba(212, 175, 55, 0.55)'
                  : '1px solid rgba(255, 255, 255, 0.08)',
                background: pkg.highlight
                  ? 'linear-gradient(180deg, rgba(28, 34, 40, 0.95) 0%, rgba(18, 22, 26, 0.85) 100%)'
                  : 'rgba(18, 22, 26, 0.65)',
                transform: pkg.highlight ? 'scale(1.02)' : 'none',
                boxShadow: pkg.highlight
                  ? '0 25px 60px rgba(0, 0, 0, 0.6), 0 0 35px rgba(212, 175, 55, 0.16)'
                  : 'none',
                position: 'relative',
                overflow: 'visible',
              }}
            >
              {pkg.badge && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-15px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'var(--gold-gradient)',
                    color: '#0b0d0e',
                    padding: '0.38rem 1.25rem',
                    borderRadius: '100px',
                    fontSize: '0.7rem',
                    fontWeight: 750,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    boxShadow: '0 6px 20px rgba(212, 175, 55, 0.45)',
                    whiteSpace: 'nowrap',
                    zIndex: 10,
                  }}
                >
                  {pkg.badge}
                </div>
              )}

              <div>
                <span style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold-primary)' }}>
                  {pkg.tier}
                </span>

                <h3
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.65rem',
                    color: '#ffffff',
                    fontWeight: 500,
                    marginTop: '0.35rem',
                    lineHeight: 1.25,
                  }}
                >
                  {pkg.name}
                </h3>

                <p style={{ fontSize: '0.82rem', color: '#a0acb5', marginTop: '0.2rem' }}>
                  {pkg.subtitle}
                </p>

                {/* Price Display */}
                <div style={{ margin: '1.75rem 0', display: 'flex', alignItems: 'baseline', gap: '0.4rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '2.8rem',
                      color: '#f5dfa2',
                      fontWeight: 600,
                      lineHeight: 1,
                    }}
                  >
                    {pkg.price}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: '#88949e' }}>/ Complete Protocol</span>
                </div>

                <p style={{ fontSize: '0.88rem', color: '#97a3ad', lineHeight: 1.6, marginBottom: '1.75rem' }}>
                  {pkg.description}
                </p>

                {/* Inclusions List */}
                <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)', paddingTop: '1.5rem', marginBottom: '1.75rem' }}>
                  <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.12em', color: 'var(--gold-primary)' }}>
                    What Is Included:
                  </span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '0.85rem' }}>
                    {pkg.inclusions.map((inc, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                        <div
                          style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            background: 'rgba(212, 175, 55, 0.15)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--gold-primary)',
                            flexShrink: 0,
                            marginTop: '2px',
                          }}
                        >
                          <Check size={11} />
                        </div>
                        <span style={{ fontSize: '0.85rem', color: '#cbd4da', lineHeight: 1.45 }}>{inc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Ideal For */}
                <div
                  style={{
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderRadius: '12px',
                    padding: '0.85rem 1rem',
                    fontSize: '0.78rem',
                    color: '#8d98a0',
                    marginBottom: '2rem',
                  }}
                >
                  <strong style={{ color: 'var(--gold-primary)' }}>Ideal Candidate: </strong>
                  {pkg.idealFor}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenBooking(pkg.name)}
                className={pkg.highlight ? 'btn-gold' : 'btn-outline-gold'}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Calendar size={15} />
                <span>Reserve Package Consultation</span>
              </button>
            </div>
          ))}
        </div>

        {/* Consultation Guarantee Note */}
        <div
          style={{
            marginTop: '4rem',
            textAlign: 'center',
            padding: '1.5rem',
            background: 'rgba(212, 175, 55, 0.05)',
            border: '1px solid rgba(212, 175, 55, 0.2)',
            borderRadius: '16px',
            maxWidth: '800px',
            margin: '4rem auto 0',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', color: 'var(--gold-primary)' }}>
            <Shield size={16} />
            <span style={{ fontSize: '0.84rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              The Aurelia Consultation Guarantee
            </span>
          </div>
          <p style={{ fontSize: '0.84rem', color: '#b0bcc5', marginTop: '0.5rem', lineHeight: 1.6 }}>
            Initial medical consultations are £250 (Mayfair) / $350 (Beverly Hills).
            This fee is <strong>100% redeemable</strong> toward any treatment package undertaken within 90 days.
          </p>
        </div>
      </div>
    </section>
  );
}
