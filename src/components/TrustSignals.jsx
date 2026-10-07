import React from 'react';
import { Award, Shield, GraduationCap } from 'lucide-react';

export default function TrustSignals() {
  const accreditations = [
    {
      icon: Award,
      label: 'GMC Registered',
      description: 'General Medical Council',
    },
    {
      icon: Shield,
      label: 'CQC Accredited',
      description: 'Care Quality Commission',
    },
    {
      icon: GraduationCap,
      label: 'FRCS (Plast)',
      description: 'Royal College of Surgeons',
    },
    {
      icon: Award,
      label: 'International Recognition',
      description: 'Board Certified Surgeons',
    },
  ];

  return (
    <section
      id="trust"
      style={{
        padding: 'clamp(4rem, 10vw, 6rem) 1.5rem',
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
        {/* Editorial Header */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '720px',
            margin: '0 auto',
            marginBottom: 'clamp(2.5rem, 6vw, 4rem)',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: '#ffffff',
              letterSpacing: '-0.02em',
            }}
          >
            The credentials that<br />
            define <span style={{ color: 'var(--gold-primary)' }}>medical excellence.</span>
          </h2>
          <p
            style={{
              marginTop: '1.5rem',
              fontSize: '1.05rem',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
              fontWeight: 300,
            }}
          >
            Recognized by international medical bodies and trusted by those who
            demand the highest standard of aesthetic care.
          </p>
        </div>

        {/* Accreditation Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
            marginBottom: 'clamp(3rem, 6vw, 5rem)',
          }}
        >
          {accreditations.map((accred, idx) => {
            const Icon = accred.icon;
            return (
              <div
                key={accred.label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                  padding: '1.75rem',
                  border: '1px solid var(--border-tertiary)',
                  borderRadius: '20px',
                  background: 'var(--bg-card)',
                  transition: 'var(--transition-luxury)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-primary)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = 'var(--shadow-elevated)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-tertiary)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '16px',
                    background: 'rgba(196, 166, 106, 0.08)',
                    border: '1px solid var(--border-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-primary)',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={26} />
                </div>
                <div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.15em',
                      color: 'var(--text-tertiary)',
                      display: 'block',
                      marginBottom: '0.3rem',
                    }}
                  >
                    Accreditation {idx + 1}
                  </span>
                  <p
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.15rem',
                      fontWeight: 400,
                      color: '#ffffff',
                    }}
                  >
                    {accred.label}
                  </p>
                  <p
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--text-tertiary)',
                      marginTop: '0.2rem',
                    }}
                  >
                    {accred.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Key Metrics */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2rem',
            padding: 'clamp(2rem, 5vw, 3rem) 0',
            borderTop: '1px solid var(--border-tertiary)',
            borderBottom: '1px solid var(--border-tertiary)',
          }}
        >
          <div style={{ textAlign: 'center' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.2rem',
                color: 'var(--gold-primary)',
                fontWeight: 300,
              }}
            >
              4.9★
            </span>
            <p
              style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--text-tertiary)',
                marginTop: '0.3rem',
              }}
            >
              Patient Rating
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.2rem',
                color: 'var(--gold-primary)',
                fontWeight: 300,
              }}
            >
              15+
            </span>
            <p
              style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--text-tertiary)',
                marginTop: '0.3rem',
              }}
            >
              Years Experience
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.2rem',
                color: 'var(--gold-primary)',
                fontWeight: 300,
              }}
            >
              12K+
            </span>
            <p
              style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--text-tertiary)',
                marginTop: '0.3rem',
              }}
            >
              Procedures
            </p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.2rem',
                color: 'var(--gold-primary)',
                fontWeight: 300,
              }}
            >
              100%
            </span>
            <p
              style={{
                fontSize: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.12em',
                color: 'var(--text-tertiary)',
                marginTop: '0.3rem',
              }}
            >
              Board Certified
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
