import React from 'react';

const pillars = [
  {
    number: '01',
    title: 'Artistry',
    body: 'We approach every face as a canvas — analysing proportion, harmony and character before recommending any treatment.',
  },
  {
    number: '02',
    title: 'Medicine',
    body: 'Our surgeons are fully GMC-registered, carrying the highest level of clinical training in aesthetic medicine.',
  },
  {
    number: '03',
    title: 'Subtlety',
    body: 'The best results are the ones nobody notices — except that you look more rested, radiant, and like yourself.',
  },
  {
    number: '04',
    title: 'Longevity',
    body: 'We create personalised care plans that evolve with you — because your relationship with your appearance is lifelong.',
  },
];

export default function Philosophy({ onOpenBooking }) {
  return (
    <section
      id="philosophy"
      style={{
        background: 'var(--bg-secondary)',
        padding: 'var(--section-padding) var(--container-padding)',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        {/* Two-column split */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'center',
        }} className="philosophy-grid">
          {/* Left: Image + floating quote */}
          <div className="reveal" style={{ position: 'relative' }}>
            <div className="img-zoom" style={{
              borderRadius: '20px',
              overflow: 'hidden',
              aspectRatio: '4/5',
              background: 'var(--accent-soft)',
            }}>
              <img
                src="/images/clinic_interior_luxury.jpg"
                alt="Aurelia Clinic interior"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Floating editorial card */}
            <div style={{
              position: 'absolute',
              bottom: '-2rem',
              right: '-2rem',
              background: 'var(--bg-card)',
              borderRadius: '16px',
              padding: '1.75rem 2rem',
              boxShadow: 'var(--shadow-lg)',
              maxWidth: '260px',
              border: '1px solid var(--border-light)',
            }}>
              <div className="serif-quote" style={{ fontSize: '1.1rem', marginBottom: '1rem' }}>
                "Medicine is a science. Aesthetics is an art. We practice both."
              </div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--accent-deep)',
                fontWeight: 500,
              }}>
                — Dr. Sophia Laurent, Medical Director
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            <div className="reveal" style={{ marginBottom: '2rem' }}>
              <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>The Aurelia Philosophy</div>
              <h2 style={{ fontWeight: 300, lineHeight: 1.1, marginBottom: '1.25rem' }}>
                Beauty That
                <br />
                <em style={{ fontStyle: 'italic', color: 'var(--accent-deep)' }}>
                  Speaks For Itself
                </em>
              </h2>
              <p style={{ maxWidth: '420px', lineHeight: 1.8 }}>
                At Aurelia, we believe the most powerful transformation is the kind
                that amplifies who you already are — never masking it.
              </p>
            </div>

            <div className="divider" style={{ marginBottom: '2.5rem' }} />

            {/* Pillars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {pillars.map((p, i) => (
                <div
                  key={p.number}
                  className={`reveal reveal-delay-${i + 1}`}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '48px 1fr',
                    gap: '1.25rem',
                    padding: '1.5rem 0',
                    borderBottom: '1px solid var(--border-light)',
                    alignItems: 'start',
                  }}
                >
                  <span style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '0.9rem',
                    color: 'var(--accent)',
                    fontWeight: 300,
                    lineHeight: 1,
                    paddingTop: '0.2rem',
                  }}>
                    {p.number}
                  </span>
                  <div>
                    <div style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.15rem',
                      fontWeight: 300,
                      color: 'var(--text-primary)',
                      marginBottom: '0.4rem',
                    }}>
                      {p.title}
                    </div>
                    <p style={{ fontSize: '0.875rem', lineHeight: 1.7, margin: 0 }}>
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ marginTop: '2.5rem' }}>
              <button onClick={onOpenBooking} className="btn-primary">
                Begin Your Journey
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .philosophy-grid { grid-template-columns: 1fr !important; gap: 4rem !important; }
        }
      `}</style>
    </section>
  );
}
