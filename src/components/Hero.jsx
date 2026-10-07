import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useClinic } from '@/context/ClinicContext';

export default function Hero({ onOpenBooking }) {
  const imageRef = useRef(null);
  const { clinic, urlFor } = useClinic();
  const hero = clinic?.hero || {};

  // Parallax ref
  useEffect(() => {
    const handleScroll = () => {
      if (imageRef.current) {
        const scroll = window.scrollY;
        imageRef.current.style.transform = `translateY(${scroll * 0.2}px)`;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroImageSrc = hero.heroImage ? urlFor(hero.heroImage) : '/images/hero.jpg';

  const slides = [
    {
      image: heroImageSrc,
      alt: 'Aurelia Clinic – Natural Beauty Refined',
      tag: 'CQC ACCREDITED',
      title: '10,000+ Treatments Performed',
      sub: 'London & Beverly Hills Flagships',
    },
    {
      image: '/images/clinic_interior_luxury.jpg',
      alt: 'Private Aesthetic Sanctuary',
      tag: 'ARCHITECTURAL SUITE',
      title: 'Discreet Private Sanctuaries',
      sub: 'Harley Street & Mayfair Consultations',
    },
    {
      image: '/images/treatment_facial.jpg',
      alt: 'Bespoke Facial Sculpting',
      tag: 'SIGNATURE PROTOCOL',
      title: 'Harmonious Natural Contouring',
      sub: 'Custom-Tailored Physician Protocols',
    },
    {
      image: '/images/patient_testimonial.jpg',
      alt: 'Real Patient Radiance',
      tag: 'PATIENT EXCELLENCE',
      title: '99.4% Verified Satisfaction',
      sub: 'Artistry Guided By Evidence & Care',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Autoplay (4 second timeout)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    if (!touchStart) return;
    const touchEnd = e.targetTouches[0].clientX;
    const diff = touchStart - touchEnd;
    if (diff > 50) {
      nextSlide();
      setTouchStart(null);
    } else if (diff < -50) {
      prevSlide();
      setTouchStart(null);
    }
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        overflow: 'hidden',
        background: 'var(--bg-secondary)',
      }}
    >
      {/* Left: Text Content */}
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: 'clamp(6rem, 10vw, 8rem) clamp(2rem, 5vw, 5rem) clamp(4rem, 6vw, 6rem) clamp(2rem, 6vw, 7rem)',
        position: 'relative',
        zIndex: 2,
      }}>
        {/* Eyebrow */}
        <div className="eyebrow animate-fade-up" style={{ animationDelay: '0.1s', marginBottom: '2rem' }}>
          {hero.eyebrow || 'London · Beverly Hills'}
        </div>

        {/* Headline */}
        <h1
          className="animate-fade-up"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.2rem, 5.5vw, 5.5rem)',
            fontWeight: 300,
            lineHeight: 1.05,
            letterSpacing: '-0.025em',
            color: 'var(--text-primary)',
            animationDelay: '0.2s',
            marginBottom: '1.75rem',
          }}
        >
          {hero.headline || 'Natural Beauty.'}
          <br />
          <em style={{ fontStyle: 'italic', color: 'var(--accent-deep)', fontWeight: 300 }}>
            {hero.italicWord || 'Thoughtfully'}
          </em>
          <br />
          Refined.
        </h1>

        {/* Divider */}
        <div className="animate-fade-up" style={{ animationDelay: '0.3s' }}>
          <div className="divider" />
        </div>

        {/* Subtext */}
        <p
          className="animate-fade-up"
          style={{
            fontSize: 'clamp(0.95rem, 1.4vw, 1.1rem)',
            lineHeight: 1.8,
            color: 'var(--text-muted)',
            maxWidth: '460px',
            fontWeight: 300,
            animationDelay: '0.35s',
            marginBottom: '2.5rem',
          }}
        >
          {hero.subheadline ||
            'Luxury aesthetic medicine designed to enhance your natural features through artistry, expertise, and medical excellence.'}
        </p>

        {/* CTAs */}
        <div
          className="animate-fade-up"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            animationDelay: '0.45s',
            marginBottom: '3.5rem',
          }}
        >
          <button
            onClick={onOpenBooking}
            className="btn-primary"
            id="hero-book-btn"
            style={{ padding: '1.1rem 2.5rem' }}
          >
            {hero.primaryCta || 'Book Consultation'}
          </button>
          <a
            href="#results"
            className="btn-outline"
            style={{ textDecoration: 'none', padding: '1.1rem 2.5rem' }}
          >
            {hero.secondaryCta || 'View Results'}
          </a>
        </div>

        {/* Trust Micro-bar */}
        <div
          className="animate-fade-up"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '2rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border-light)',
            animationDelay: '0.55s',
          }}
        >
          {[
            { label: 'Accredited', value: 'GMC Registered' },
            { label: 'Rating', value: '4.9 / 5' },
            { label: 'Experience', value: '15+ Years' },
          ].map((item) => (
            <div key={item.label} style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.62rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--text-light)',
                fontWeight: 500,
              }}>
                {item.label}
              </span>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.9rem',
                fontWeight: 500,
                color: 'var(--text-primary)',
              }}>
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Right: Interactive Editorial Photography Carousel */}
      <div
        className="hero-image-panel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        style={{
          position: 'relative',
          overflow: 'hidden',
          background: 'var(--accent-soft)',
          userSelect: 'none',
        }}
      >
        {/* Parallax Container */}
        <div
          ref={imageRef}
          style={{
            position: 'absolute',
            inset: '-8%',
            zIndex: 1,
          }}
        >
          {slides.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <div
                key={slide.image + idx}
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'scale(1)' : 'scale(1.06)',
                  transition: 'opacity 0.85s cubic-bezier(0.16, 1, 0.3, 1), transform 1.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  pointerEvents: isActive ? 'auto' : 'none',
                }}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  style={{
                    width: '100%',
                    height: '116%',
                    objectFit: 'cover',
                    objectPosition: 'center 20%',
                  }}
                />
              </div>
            );
          })}
        </div>

        {/* Ambient Gradient Overlays */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to right, rgba(245, 240, 232, 0.2) 0%, transparent 35%)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(20, 20, 20, 0.45) 0%, rgba(20, 20, 20, 0.05) 30%, transparent 60%)',
            zIndex: 3,
            pointerEvents: 'none',
          }}
        />



        {/* Floating credential badge at Bottom-Left */}
        <div
          key={currentSlide}
          className="animate-fade-up"
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            left: '2rem',
            zIndex: 10,
            background: 'rgba(250, 247, 242, 0.95)',
            backdropFilter: 'blur(16px)',
            borderRadius: '16px',
            padding: '1.1rem 1.45rem',
            boxShadow: '0 12px 36px rgba(0,0,0,0.18)',
            border: '1px solid rgba(215, 179, 138, 0.3)',
            maxWidth: '280px',
            animationDuration: '0.4s',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.65rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--accent-deep)',
              marginBottom: '0.35rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--accent-deep)',
                display: 'inline-block',
              }}
            />
            {slides[currentSlide].tag}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.05rem',
              color: 'var(--text-primary)',
              fontWeight: 400,
              lineHeight: 1.25,
              marginBottom: '0.25rem',
            }}
          >
            {slides[currentSlide].title}
          </div>
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              color: 'var(--text-muted)',
              fontWeight: 400,
            }}
          >
            {slides[currentSlide].sub}
          </div>
        </div>

        {/* Navigation Controls at Bottom-Right */}
        <div
          style={{
            position: 'absolute',
            bottom: '2.5rem',
            right: '2rem',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            gap: '0.65rem',
          }}
        >
          {/* Slide counter */}
          <div
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.72rem',
              letterSpacing: '0.16em',
              fontWeight: 600,
              color: 'var(--text-primary)',
              background: 'rgba(250, 247, 242, 0.92)',
              backdropFilter: 'blur(10px)',
              padding: '0.55rem 0.85rem',
              borderRadius: '24px',
              border: '1px solid rgba(215, 179, 138, 0.35)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              textTransform: 'uppercase',
            }}
          >
            0{currentSlide + 1} / 0{slides.length}
          </div>

          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(250, 247, 242, 0.9)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(215, 179, 138, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.08)';
              e.currentTarget.style.background = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.background = 'rgba(250, 247, 242, 0.9)';
            }}
          >
            <ChevronLeft size={18} strokeWidth={2} />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next slide"
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'rgba(250, 247, 242, 0.9)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(215, 179, 138, 0.35)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.08)';
              e.currentTarget.style.background = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.background = 'rgba(250, 247, 242, 0.9)';
            }}
          >
            <ChevronRight size={18} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Mobile: stacked layout */}
      <style>{`
        @media (max-width: 860px) {
          #hero {
            grid-template-columns: 1fr !important;
            min-height: auto !important;
          }
          .hero-image-panel {
            height: 55vw !important;
            min-height: 280px;
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}