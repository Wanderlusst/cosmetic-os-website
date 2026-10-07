import React, { useState } from 'react';

const stories = [
  {
    id: 1,
    name: 'Catherine M.',
    age: 52,
    treatment: 'Facial Rejuvenation',
    quote: 'I didn\'t want to look younger — I wanted to look like the best version of myself. Aurelia understood that completely. Six months on, I feel genuinely radiant.',
    outcome: 'Natural volumisation & skin renewal',
    image: '/images/patient_testimonial.jpg',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah L.',
    age: 44,
    treatment: 'Skin Resurfacing',
    quote: 'The team took so much time to understand my skin\'s history. The results were gradual, natural, and honestly better than anything I\'d imagined.',
    outcome: 'Texture refinement & tone evening',
    image: '/images/doctor_sophia.jpg',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emma R.',
    age: 38,
    treatment: 'Injectables',
    quote: 'I was nervous about looking frozen or overdone. Dr. Laurent was so reassuring — and the results are so natural my husband didn\'t notice anything except that I seemed more rested.',
    outcome: 'Subtle brow lift & softening',
    image: '/images/doctor_camille.jpg',
    rating: 5,
  },
];

const stars = (count) => '★'.repeat(count) + '☆'.repeat(5 - count);

export default function Testimonials({ onOpenBooking }) {
  const [active, setActive] = useState(0);

  return (
    <section
      id="stories"
      style={{
        background: 'var(--bg-primary)',
        padding: 'var(--section-padding) var(--container-padding)',
      }}
    >
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4.5rem' }} className="reveal">
          <div className="eyebrow" style={{ justifyContent: 'center', marginBottom: '1.5rem' }}>
            Patient Stories
          </div>
          <h2 style={{ fontWeight: 300, lineHeight: 1.1 }}>
            Confidence, Restored.
            <br />
            <em style={{ fontStyle: 'italic', color: 'var(--accent-deep)' }}>
              In Their Own Words.
            </em>
          </h2>
        </div>

        {/* Main testimonial */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '4rem',
          alignItems: 'center',
          marginBottom: '4rem',
        }} className="testimonial-main">
          {/* Portrait */}
          <div className="reveal img-zoom" style={{
            borderRadius: '16px',
            overflow: 'hidden',
            aspectRatio: '3/4',
            background: 'var(--accent-soft)',
          }}>
            <img
              src={stories[active].image}
              alt={stories[active].name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>

          {/* Story */}
          <div className="reveal reveal-delay-2">
            <div style={{
              color: 'var(--accent)',
              fontSize: '1.3rem',
              letterSpacing: '0.08em',
              marginBottom: '1.5rem',
            }}>
              {stars(stories[active].rating)}
            </div>

            <blockquote style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)',
              fontWeight: 300,
              lineHeight: 1.55,
              color: 'var(--text-primary)',
              marginBottom: '2rem',
              position: 'relative',
            }}>
              <span style={{
                position: 'absolute',
                top: '-1.5rem',
                left: 0,
                fontFamily: 'Georgia, serif',
                fontSize: '5rem',
                lineHeight: 1,
                color: 'var(--accent-soft)',
                userSelect: 'none',
              }}>"</span>
              <span style={{ position: 'relative', zIndex: 1 }}>
                {stories[active].quote}
              </span>
            </blockquote>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.9rem',
                color: 'var(--text-primary)',
              }}>
                {stories[active].name}, {stories[active].age}
              </div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                color: 'var(--accent-deep)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                fontWeight: 500,
              }}>
                {stories[active].treatment}
              </div>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
              }}>
                Result: {stories[active].outcome}
              </div>
            </div>
          </div>
        </div>

        {/* Selector dots */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '3.5rem' }}>
          {stories.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              style={{
                width: active === i ? '28px' : '8px',
                height: '8px',
                borderRadius: '4px',
                background: active === i ? 'var(--accent)' : 'var(--accent-soft)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.4s ease',
                padding: 0,
              }}
              aria-label={`Story ${i + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="reveal" style={{
          textAlign: 'center',
          padding: '3rem',
          background: 'var(--bg-secondary)',
          borderRadius: '20px',
          border: '1px solid var(--border-light)',
        }}>
          <div style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.72rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--accent-deep)',
            marginBottom: '1rem',
            fontWeight: 500,
          }}>
            Join 10,000+ Patients
          </div>
          <h3 style={{ fontWeight: 300, marginBottom: '0.75rem', lineHeight: 1.2 }}>
            Your Story Begins With a Conversation
          </h3>
          <p style={{ maxWidth: '420px', margin: '0 auto 2rem', fontSize: '0.95rem' }}>
            Every journey at Aurelia starts with a private, no-pressure consultation.
          </p>
          <button onClick={() => onOpenBooking('')} className="btn-primary" style={{ padding: '1.1rem 3rem' }}>
            Share Your Story
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonial-main { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
