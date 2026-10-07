import React, { useState } from 'react';

const steps = [
  {
    number: '01',
    title: 'Private Consultation',
    description: 'A relaxed, confidential conversation with your surgeon. No pressure. No sales. Just a genuine discussion about your goals.',
    duration: '60 minutes',
    icon: '◎',
  },
  {
    number: '02',
    title: 'Personal Assessment',
    description: 'Using advanced imaging and clinical analysis, we assess your anatomy, skin quality, and suitability for various treatments.',
    duration: '30 minutes',
    icon: '◈',
  },
  {
    number: '03',
    title: 'Personalised Plan',
    description: 'A bespoke treatment roadmap, curated exclusively for you — combining the right treatments in the right sequence.',
    duration: 'Your blueprint',
    icon: '◇',
  },
  {
    number: '04',
    title: 'Treatment',
    description: 'Delivered in our beautifully appointed private treatment suites, with the highest standards of clinical precision.',
    duration: 'In our care',
    icon: '◉',
  },
  {
    number: '05',
    title: 'Aftercare',
    description: 'Ongoing support with dedicated follow-up appointments and a personal care guide to maintain your results.',
    duration: 'Ongoing',
    icon: '◍',
  },
];

export default function ConsultationJourney({ onOpenBooking }) {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section
      id="journey"
      style={{
        background: 'var(--bg-secondary)',
        padding: 'var(--section-padding) var(--container-padding)',
      }}
    >
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '5rem' }} className="reveal">
          <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
            The Aurelia Experience
          </div>
          <h2 style={{ fontWeight: 300, lineHeight: 1.1, maxWidth: '520px', margin: '0 auto' }}>
            Your Journey to
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--accent-deep)' }}>
              Natural Confidence
            </em>
          </h2>
          <p style={{ maxWidth: '440px', margin: '1.5rem auto 0', fontSize: '0.95rem' }}>
            A thoughtful, unhurried experience from your first conversation to your final review.
          </p>
        </div>

        {/* Journey Timeline */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '4rem',
          alignItems: 'start',
        }} className="journey-grid">
          {/* Step list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {steps.map((step, i) => (
              <button
                key={step.number}
                onClick={() => setActiveStep(i)}
                className={`reveal reveal-delay-${i + 1}`}
                style={{
                  background: 'transparent',
                  border: 'none',
                  borderLeft: `2px solid ${activeStep === i ? 'var(--accent)' : 'var(--border-light)'}`,
                  cursor: 'pointer',
                  textAlign: 'left',
                  padding: '1.5rem 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  transition: 'all 0.3s ease',
                  background: activeStep === i ? 'var(--bg-card)' : 'transparent',
                  borderRadius: activeStep === i ? '0 12px 12px 0' : '0',
                  boxShadow: activeStep === i ? 'var(--shadow-xs)' : 'none',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '1.5rem',
                  color: activeStep === i ? 'var(--accent)' : 'var(--accent-soft)',
                  transition: 'color 0.3s',
                  lineHeight: 1,
                  minWidth: '28px',
                }}>
                  {step.icon}
                </span>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.72rem',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--text-light)',
                    marginBottom: '0.25rem',
                  }}>
                    Step {step.number}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    fontWeight: 300,
                    color: activeStep === i ? 'var(--text-primary)' : 'var(--text-secondary)',
                    transition: 'color 0.3s',
                  }}>
                    {step.title}
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Detail panel */}
          <div className="reveal reveal-delay-2" style={{
            background: 'var(--bg-card)',
            borderRadius: '20px',
            padding: '3rem',
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--border-light)',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            minHeight: '360px',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
            }}>
              <div>
                <div style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.65rem',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-deep)',
                  marginBottom: '0.5rem',
                }}>
                  Step {steps[activeStep].number}
                </div>
                <h3 style={{ fontWeight: 300, lineHeight: 1.2 }}>
                  {steps[activeStep].title}
                </h3>
              </div>
              <div className="tag">
                {steps[activeStep].duration}
              </div>
            </div>

            <div className="divider" />

            <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--text-secondary)' }}>
              {steps[activeStep].description}
            </p>

            {/* Progress */}
            <div style={{ marginTop: 'auto' }}>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem',
                color: 'var(--text-light)',
                marginBottom: '0.5rem',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                Your Progress
              </div>
              <div style={{
                height: '4px',
                background: 'var(--bg-secondary)',
                borderRadius: '2px',
                overflow: 'hidden',
              }}>
                <div style={{
                  height: '100%',
                  width: `${((activeStep + 1) / steps.length) * 100}%`,
                  background: 'linear-gradient(to right, var(--accent-soft), var(--accent))',
                  borderRadius: '2px',
                  transition: 'width 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }} />
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="reveal" style={{ textAlign: 'center', marginTop: '4rem' }}>
          <button onClick={onOpenBooking} className="btn-accent" style={{ padding: '1.1rem 3rem' }}>
            Begin Your Consultation
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .journey-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
