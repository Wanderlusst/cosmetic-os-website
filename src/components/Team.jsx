import React from 'react';

const surgeons = [
  {
    id: 1,
    name: 'Dr. Sophia Laurent',
    title: 'Consultant Aesthetic Surgeon',
    credentials: 'FRCS (Plast), GMC Registered',
    experience: '18 years · Mayfair',
    specialties: ['Facial Rejuvenation', 'Non-Surgical Lifting', 'Skin Renewal'],
    awards: 'British Association of Aesthetic Plastic Surgeons',
    image: '/images/surgeon_sophia.jpg',
    quote: 'My philosophy is to work with your natural features — never against them.',
  },
  {
    id: 2,
    name: 'Dr. Julian Hargreaves',
    title: 'Medical Director & Surgeon',
    credentials: 'MD, MRCS, GMC Registered',
    experience: '20 years · Beverly Hills',
    specialties: ['Body Contouring', 'Regenerative Medicine', 'Injectables'],
    awards: 'International Society of Aesthetic Plastic Surgery',
    image: '/images/surgeon_julian.jpg',
    quote: 'True artistry lies in understanding the unique character of each patient.',
  },
];

export default function Team({ onOpenBooking }) {
  return (
    <section
      id="surgeons"
      style={{
        background: 'var(--bg-secondary)',
        padding: 'var(--section-padding) var(--container-padding)',
      }}
    >
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        {/* Header */}
        <div
          style={{ textAlign: 'center', marginBottom: '5rem' }}
          className="reveal"
        >
          <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
            Our Surgeons
          </div>
          <h2 style={{ fontWeight: 300, maxWidth: '540px', margin: '0 auto', lineHeight: 1.1 }}>
            Expertise You Can
            <em style={{ fontStyle: 'italic', color: 'var(--accent-deep)' }}> Trust</em>
          </h2>
          <div className="divider-center" style={{ marginTop: '1.5rem' }} />
        </div>

        {/* Surgeons Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
        }} className="surgeons-grid">
          {surgeons.map((surgeon, i) => (
            <div
              key={surgeon.id}
              className={`reveal${i > 0 ? ` reveal-delay-${i * 2}` : ''}`}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              {/* Portrait */}
              <div className="img-zoom" style={{
                borderRadius: '16px',
                overflow: 'hidden',
                marginBottom: '2rem',
                aspectRatio: '3/4',
                background: 'var(--accent-soft)',
              }}>
                <img
                  src={surgeon.image}
                  alt={surgeon.name}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
                />
              </div>

              {/* Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                    fontWeight: 300,
                    marginBottom: '0.3rem',
                  }}>
                    {surgeon.name}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--accent-deep)',
                    margin: 0,
                  }}>
                    {surgeon.title}
                  </p>
                </div>

                <div className="divider" style={{ margin: '0.5rem 0' }} />

                {/* Quote */}
                <blockquote style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: '1.05rem',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                  margin: 0,
                  paddingLeft: 0,
                }}>
                  "{surgeon.quote}"
                </blockquote>

                {/* Credentials */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginTop: '0.5rem' }}>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                  }}>
                    {surgeon.credentials}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                  }}>
                    {surgeon.experience}
                  </span>
                </div>

                {/* Specialties */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                  {surgeon.specialties.map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>

                <button
                  onClick={() => onOpenBooking('')}
                  className="btn-outline"
                  style={{ alignSelf: 'flex-start', marginTop: '1rem' }}
                >
                  Book with {surgeon.name.split(' ')[1]}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .surgeons-grid { grid-template-columns: 1fr !important; gap: 4rem !important; }
        }
      `}</style>
    </section>
  );
}