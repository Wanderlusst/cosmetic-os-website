import React, { useState, useEffect } from 'react';
import { useClinic } from '@/context/ClinicContext';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { clinic } = useClinic();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const defaultLinks = [
    { name: 'Treatments', href: '#treatments' },
    { name: 'Results', href: '#results' },
    { name: 'Surgeons', href: '#surgeons' },
    { name: 'Philosophy', href: '#philosophy' },
    { name: 'Stories', href: '#stories' },
  ];

  const links = clinic?.header?.navLinks && clinic.header.navLinks.length > 0
    ? clinic.header.navLinks.map((l) => ({ name: l.label, href: l.href }))
    : defaultLinks;

  const announcement = clinic?.header?.announcement;

  return (
    <>
      {/* Dynamic Announcement Banner if enabled in Sanity */}
      {announcement?.enabled && announcement?.text && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 210,
            background: 'var(--accent-deep)',
            color: '#ffffff',
            textAlign: 'center',
            padding: '0.45rem 1rem',
            fontSize: '0.72rem',
            fontFamily: 'var(--font-body)',
            letterSpacing: '0.06em',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
          }}
        >
          <span>{announcement.text}</span>
          {announcement.linkUrl && (
            <a
              href={announcement.linkUrl}
              style={{ color: '#ffffff', textDecoration: 'underline', fontWeight: 600 }}
            >
              Learn More →
            </a>
          )}
        </div>
      )}

      <header
        style={{
          position: 'fixed',
          top: announcement?.enabled ? '32px' : 0,
          left: 0,
          right: 0,
          zIndex: 200,
          transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
          background: scrolled ? 'rgba(250, 247, 242, 0.96)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(215, 179, 138, 0.18)' : '1px solid transparent',
          boxShadow: scrolled ? '0 2px 24px rgba(29,29,29,0.04)' : 'none',
        }}
      >
        <div style={{
          maxWidth: 'var(--container-max)',
          margin: '0 auto',
          padding: '0 var(--container-padding)',
          height: '88px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <a href="#" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '2px' }}>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.5rem',
              fontWeight: 300,
              letterSpacing: '0.22em',
              color: 'var(--text-primary)',
              textTransform: 'uppercase',
              lineHeight: 1,
            }}>
              {clinic?.header?.logoText || 'Aurelia'}
            </span>
            <span style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.58rem',
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'var(--accent-deep)',
              fontWeight: 500,
            }}>
              {clinic?.header?.logoSubtext || 'Aesthetic Medicine'}
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--text-primary)',
                  position: 'relative',
                  padding: '0.5rem 0',
                  opacity: 0.8,
                  transition: 'opacity 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.opacity = '1';
                  e.currentTarget.querySelector('.nav-line').style.width = '100%';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.opacity = '0.8';
                  e.currentTarget.querySelector('.nav-line').style.width = '0%';
                }}
              >
                {l.name}
                <span className="nav-line" style={{
                  position: 'absolute',
                  bottom: 0, left: 0,
                  width: '0%', height: '1px',
                  background: 'var(--accent)',
                  transition: 'width 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                }} />
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button
              onClick={onOpenBooking}
              className="btn-primary nav-cta"
              id="nav-book-consultation"
              style={{ padding: '0.75rem 1.75rem', fontSize: '0.72rem' }}
            >
              {clinic?.header?.ctaLabel || 'Book Consultation'}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Open menu"
              className="hamburger-btn"
              style={{
                background: 'transparent',
                border: '1px solid var(--border-medium)',
                borderRadius: '10px',
                padding: '0.55rem 0.75rem',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
              }}
            >
              <span style={{ display: 'block', width: '20px', height: '1.5px', background: 'var(--text-primary)', transition: 'all 0.3s ease', transform: mobileOpen ? 'rotate(45deg) translate(4px, 4px)' : 'none' }} />
              <span style={{ display: 'block', width: '20px', height: '1.5px', background: 'var(--text-primary)', transition: 'all 0.3s ease', opacity: mobileOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: '20px', height: '1.5px', background: 'var(--text-primary)', transition: 'all 0.3s ease', transform: mobileOpen ? 'rotate(-45deg) translate(4px, -4px)' : 'none' }} />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div style={{
            background: 'rgba(250, 247, 242, 0.98)',
            backdropFilter: 'blur(20px)',
            borderTop: '1px solid var(--border-light)',
            padding: '2rem var(--container-padding)',
            display: 'flex',
            flexDirection: 'column',
            gap: '0',
          }}>
            {links.map((l) => (
              <a
                key={l.name}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1rem',
                  fontWeight: 400,
                  color: 'var(--text-primary)',
                  padding: '1rem 0',
                  borderBottom: '1px solid var(--border-neutral)',
                  letterSpacing: '0.05em',
                }}
              >
                {l.name}
              </a>
            ))}
            <button
              onClick={() => { setMobileOpen(false); onOpenBooking(); }}
              className="btn-primary"
              style={{ marginTop: '1.5rem', justifyContent: 'center', padding: '1rem 2rem' }}
            >
              Book Consultation
            </button>
          </div>
        )}
      </header>

      <style>{`
        @media (min-width: 900px) {
          .desktop-nav { display: flex !important; }
          .hamburger-btn { display: none !important; }
          .nav-cta { display: inline-flex !important; }
        }
        @media (max-width: 899px) {
          .desktop-nav { display: none !important; }
          .nav-cta { display: none !important; }
        }
      `}</style>
    </>
  );
}
