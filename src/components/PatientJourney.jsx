import React, { useState } from 'react';
import { Calendar, FileText, Stethoscope, HeartPulse, ArrowRight } from 'lucide-react';

const STEPS = [
  {
    step: '01',
    title: 'Private Consultation',
    subtitle: '60-Minute Session with Your Surgeon',
    description:
      'We begin with an intimate one-on-one consultation in the privacy of our Mayfair or Beverly Hills sanctuary. Your senior surgeon listens intently to your vision, examining anatomy with precision and care.',
    icon: Calendar,
    details: [
      'One-on-one session with your assigned senior surgeon',
      'Comprehensive facial analysis and medical history review',
      'Transparent discussion of treatment options and expectations',
      'No-obligation conversation with ample time for questions',
    ],
  },
  {
    step: '02',
    title: 'Facial Analysis & Planning',
    subtitle: 'Personalized Treatment Blueprint',
    description:
      'Using advanced imaging and anatomical mapping, we craft a bespoke treatment plan tailored exclusively to your unique features and desired outcomes.',
    icon: FileText,
    details: [
      'Advanced 3D imaging and facial proportion analysis',
      'Personalized treatment blueprint with realistic expectations',
      'Transparent investment documentation with no hidden costs',
      'Direct communication channel with your surgical team',
    ],
  },
  {
    step: '03',
    title: 'Personalized Treatment',
    subtitle: 'Master Surgeon Precision',
    description:
      'On treatment day, experience serene discretion in our private clinical suites. Every procedure is performed with meticulous attention to detail and uncompromising safety standards.',
    icon: Stethoscope,
    details: [
      'Ultra-sterile private clinical environment',
      'Master-level surgeon performs every procedure',
      'Minimal downtime, maximum comfort protocols',
      'Dedicated private recovery with discreet access',
    ],
  },
  {
    step: '04',
    title: 'Procedure & Recovery',
    subtitle: '12-Month Comprehensive Care',
    description:
      'Your journey does not end with treatment. We provide year-round support, from immediate post-care to long-term follow-up, ensuring optimal and lasting results.',
    icon: HeartPulse,
    details: [
      'Comprehensive recovery protocol with medical support',
      '24/7 emergency contact with your surgical team',
      'Structured follow-up appointments at key intervals',
      'Annual longevity review and complimentary adjustments',
    ],
  },
];

export default function PatientJourney({ onOpenBooking }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="journey"
      style={{
        padding: 'clamp(5rem, 12vw, 8rem) 1.5rem',
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
            marginBottom: 'clamp(3rem, 8vw, 5rem)',
          }}
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.9rem, 3.5vw, 2.5rem)',
              fontWeight: 400,
              lineHeight: 1.1,
              color: '#ffffff',
              letterSpacing: '-0.02em',
            }}
          >
            The Aurelia Method.
            <br />
            <span style={{ color: 'var(--gold-primary)' }}>A refined pathway.</span>
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
            From your initial consultation through year-long follow-up care,
            every step is designed for your comfort, safety, and confidence.
          </p>
        </div>

        {/* Journey Timeline */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '3rem',
            alignItems: 'center',
          }}
          className="journey-grid"
        >
          {/* Left Column: Step Navigation */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
            }}
          >
            {STEPS.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeStep === index;
              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStep(index)}
                  style={{
                    padding: '1.5rem',
                    cursor: 'pointer',
                    border: isActive
                      ? '1px solid var(--border-primary)'
                      : '1px solid var(--border-tertiary)',
                    borderRadius: '20px',
                    background: 'var(--bg-card)',
                    transition: 'var(--transition-luxury)',
                    transform: isActive ? 'translateX(8px)' : 'none',
                    boxShadow: isActive ? 'var(--shadow-elevated)' : 'none',
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.transform = 'translateX(6px)';
                      e.currentTarget.style.borderColor = 'var(--border-primary)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.transform = 'translateX(0)';
                      e.currentTarget.style.borderColor = 'var(--border-tertiary)';
                    }
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1.25rem',
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '48px',
                          height: '48px',
                          borderRadius: '16px',
                          background: isActive
                            ? 'rgba(196, 166, 106, 0.1)'
                            : 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid',
                          borderColor: isActive
                            ? 'var(--border-primary)'
                            : 'var(--border-tertiary)',
                          color: isActive
                            ? 'var(--gold-primary)'
                            : 'var(--text-tertiary)',
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={20} />
                      </div>
                      <div>
                        <span
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '0.75rem',
                            textTransform: 'uppercase',
                            letterSpacing: '0.15em',
                            color: 'var(--text-tertiary)',
                            display: 'block',
                            marginBottom: '0.25rem',
                          }}
                        >
                          Step {step.step}
                        </span>
                        <h4
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.1rem',
                            color: isActive ? '#ffffff' : 'var(--text-secondary)',
                            fontWeight: isActive ? 400 : 300,
                            transition: 'var(--transition-smooth)',
                          }}
                        >
                          {step.title}
                        </h4>
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        color: 'var(--text-tertiary)',
                      }}
                    >
                      {step.subtitle}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Step Details */}
          <div
            style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-tertiary)',
              borderRadius: '24px',
              padding: '2.5rem',
              transition: 'var(--transition-smooth)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '1.5rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: 'var(--gold-primary)',
                }}
              >
                Step {STEPS[activeStep].step}
              </span>
              <div
                style={{
                  flex: 1,
                  height: '1px',
                  background: 'var(--border-tertiary)',
                }}
              />
            </div>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.4rem, 2.5vw, 1.85rem)',
                color: '#ffffff',
                fontWeight: 400,
                lineHeight: 1.2,
                marginBottom: '1.25rem',
              }}
            >
              {STEPS[activeStep].title}
            </h3>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
                fontWeight: 300,
                marginBottom: '2rem',
              }}
            >
              {STEPS[activeStep].description}
            </p>

            <div
              style={{
                marginBottom: '2rem',
              }}
            >
              <ul
                style={{
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.9rem',
                }}
              >
                {STEPS[activeStep].details.map((detail, i) => (
                  <li
                    key={i}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.75rem',
                    }}
                  >
                    <div
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        background: 'var(--gold-primary)',
                        marginTop: '0.3rem',
                        flexShrink: 0,
                      }}
                    />
                    <span
                      style={{
                        fontSize: '0.95rem',
                        color: 'var(--text-secondary)',
                        lineHeight: 1.6,
                      }}
                    >
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={onOpenBooking}
              className="btn-gold"
              style={{
                padding: '0.85rem 2rem',
                fontSize: '0.8rem',
                width: '100%',
                justifyContent: 'center',
              }}
            >
              <span>Begin Your Journey</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .journey-grid {
            grid-template-columns: 1fr 1.2fr !important;
          }
        }
      `}</style>
    </section>
  );
}
