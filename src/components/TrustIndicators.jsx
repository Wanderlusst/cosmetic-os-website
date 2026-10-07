import React from 'react';

const indicators = [
  { label: 'GMC Registered', sub: 'Medical Regulation' },
  { label: 'CQC Accredited', sub: 'Care Quality Commission' },
  { label: '15+ Years', sub: 'Clinical Excellence' },
  { label: '4.9 Rating', sub: 'Patient Satisfaction' },
  { label: '10,000+', sub: 'Treatments Performed' },
];

export default function TrustIndicators() {
  return (
    <section
      id="trust"
      style={{
        background: 'var(--bg-card)',
        borderTop: '1px solid var(--border-light)',
        borderBottom: '1px solid var(--border-light)',
        padding: '2.5rem var(--container-padding)',
      }}
    >
      <div
        style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        {indicators.map((item, i) => (
          <React.Fragment key={item.label}>
            <div
              className="reveal"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                textAlign: 'center',
                flex: '1 1 auto',
              }}
            >
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.35rem, 2vw, 1.65rem)',
                fontWeight: 300,
                color: 'var(--text-primary)',
                letterSpacing: '-0.01em',
              }}>
                {item.label}
              </span>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.68rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                fontWeight: 400,
              }}>
                {item.sub}
              </span>
            </div>
            {i < indicators.length - 1 && (
              <div style={{
                width: '1px',
                height: '36px',
                background: 'var(--border-light)',
                flexShrink: 0,
              }} className="trust-divider" />
            )}
          </React.Fragment>
        ))}
      </div>

      <style>{`
        @media (max-width: 640px) {
          .trust-divider { display: none; }
        }
      `}</style>
    </section>
  );
}
