import React from 'react';
import { Building2 } from 'lucide-react';

export default function AboutClinic({ onOpenBooking }) {
  const pillars = [
    {
      title: 'Natural Enhancement',
      description: 'Refined proportions. Never artificial outcomes. We enhance what is already beautiful, never alter what makes you distinctly you.',
    },
    {
      title: 'Medical Precision',
      description: 'Every treatment begins with anatomy, science, and experience. Our surgical protocols are grounded in peer-reviewed methodology and decades of clinical expertise.',
    },
    {
      title: 'Private Care',
      description: 'Confidential luxury care at every stage of your journey. From your first consultation to long-term follow-up, your privacy and comfort are paramount.',
    },
  ];

  return (
    <section
      id="philosophy"
      style={{
        padding: 'clamp(4rem, 10vw, 7rem) 1.5rem',
        position: 'relative',
        background: 'var(--bg-primary)',
        borderBottom: '1px solid var(--border-tertiary)',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        {/* Editorial Section Header */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '720px',
            margin: '0 auto',
            paddingBottom: 'clamp(2.5rem, 6vw, 4rem)',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1rem',
              borderRadius: '60px',
              background: 'rgba(196, 166, 106, 0.06)',
              border: '1px solid var(--border-primary)',
              marginBottom: '2rem',
            }}
          >
            <Building2 size={14} color="var(--gold-primary)" />
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.15em', color: 'var(--gold-primary)', textTransform: 'uppercase' }}>
              The Aurelia Method
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
              color: '#ffffff',
              fontWeight: 400,
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}
          >
            Our guiding principles are built upon three<br />foundations of<br />
            <span style={{ color: 'var(--gold-primary)' }}>timeless aesthetic excellence.</span>
          </h2>
        </div>

        {/* Three Editorial Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '4rem',
          }}
        >
          {pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                padding: '2rem',
                border: '1px solid var(--border-tertiary)',
                borderRadius: '24px',
                background: 'var(--bg-card)',
                transition: 'var(--transition-luxury)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-primary)';
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.boxShadow = 'var(--shadow-elevated)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border-tertiary)';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Pillar Number */}
              <span style={{ fontSize: '2rem', fontWeight: 300, color: 'var(--gold-primary)', fontFamily: 'var(--font-display)' }}>
                0{idx + 1}
              </span>

              {/* Title */}
              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  color: '#ffffff',
                  fontWeight: 400,
                  lineHeight: 1.2,
                  letterSpacing: '-0.01em',
                }}
              >
                {pillar.title}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '1rem',
                  lineHeight: 1.7,
                  color: 'var(--text-secondary)',
                  fontWeight: 300,
                }}
              >
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          style={{
            textAlign: 'center',
            marginTop: '4rem',
          }}
        >
          <button
            onClick={onOpenBooking}
            className="btn-gold"
            style={{
              padding: '1rem 2.5rem',
              fontSize: '0.8rem',
            }}
          >
            Begin Your Transformation
          </button>
        </div>
      </div>
    </section>
  );
}