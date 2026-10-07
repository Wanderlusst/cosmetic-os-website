import React from 'react';
import { useClinic } from '@/context/ClinicContext';

const footerLinks = {
  Treatments: ['Facial Rejuvenation', 'Skin Treatments', 'Injectables', 'Body Contouring', 'Regenerative Medicine', 'Hair Restoration'],
  Clinic: ['About Aurelia', 'Our Surgeons', 'Patient Stories', 'Philosophy', 'Careers'],
  Information: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'CQC Registration', 'GMC Verification'],
};

export default function Footer() {
  const { clinic } = useClinic();
  const footer = clinic?.footer || {};

  return (
    <footer
      style={{
        background: 'var(--text-primary)',
        color: 'rgba(250, 247, 242, 0.85)',
        padding: '5rem var(--container-padding) 2.5rem',
      }}
    >
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        {/* Top: Brand + Links */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr repeat(3, 1fr)',
          gap: '3rem',
          paddingBottom: '4rem',
          borderBottom: '1px solid rgba(250, 247, 242, 0.08)',
        }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.75rem',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#FAF7F2',
              marginBottom: '0.5rem',
            }}>
              {clinic?.name?.split(' ')[0] || 'Aurelia'}
            </div>
            <div style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.65rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '1.75rem',
              fontWeight: 500,
            }}>
              {clinic?.tagline || 'Aesthetic Medicine'}
            </div>
            <p style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              lineHeight: 1.75,
              color: 'rgba(250, 247, 242, 0.55)',
              maxWidth: '280px',
              fontWeight: 300,
              margin: '0 0 1.75rem',
            }}>
              {footer.about || 'Luxury aesthetic medicine for discerning individuals. Mayfair, London & Beverly Hills.'}
            </p>

            {/* Accreditations */}
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              {['GMC', 'CQC', 'BAAPS'].map((badge) => (
                <div key={badge} style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.65rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  color: 'rgba(250, 247, 242, 0.6)',
                  border: '1px solid rgba(215, 179, 138, 0.25)',
                  borderRadius: '6px',
                  padding: '0.35rem 0.75rem',
                }}>
                  {badge}
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.65rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--accent)',
                marginBottom: '1.5rem',
              }}>
                {section}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.83rem',
                      fontWeight: 300,
                      color: 'rgba(250, 247, 242, 0.55)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#FAF7F2'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(250, 247, 242, 0.55)'; }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingTop: '2.5rem',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            color: 'rgba(250, 247, 242, 0.3)',
            margin: 0,
            fontWeight: 300,
          }}>
            {footer.copyright || `© ${new Date().getFullYear()} Aurelia Aesthetic Medicine Ltd. All rights reserved.`}
          </p>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.75rem',
            color: 'rgba(250, 247, 242, 0.3)',
            margin: 0,
            fontWeight: 300,
          }}>
            {footer.openingHours || 'Registered in England & Wales · CQC No. 1-12345678'}
          </p>
        </div>

        {/* Medical disclaimer */}
        <div style={{
          marginTop: '1.5rem',
          padding: '1.25rem',
          borderRadius: '10px',
          background: 'rgba(250, 247, 242, 0.03)',
          border: '1px solid rgba(250, 247, 242, 0.06)',
        }}>
          <p style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.68rem',
            color: 'rgba(250, 247, 242, 0.25)',
            lineHeight: 1.7,
            margin: 0,
            fontWeight: 300,
          }}>
            <strong style={{ fontWeight: 500, color: 'rgba(250, 247, 242, 0.35)' }}>Medical Disclaimer:</strong>{' '}
            {footer.disclaimer ||
              'All treatments are performed by GMC-registered practitioners. Individual results may vary. This website is for informational purposes only and does not constitute medical advice. Before undergoing any aesthetic treatment, please consult with a qualified medical professional.'}
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 2.5rem !important; }
        }
        @media (max-width: 540px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
