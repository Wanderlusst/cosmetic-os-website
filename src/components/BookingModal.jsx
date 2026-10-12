'use client';

import React, { useState, useEffect } from 'react';

const treatments = [
  'Facial Rejuvenation',
  'Skin Treatments',
  'Injectables',
  'Body Contouring',
  'Regenerative Medicine',
  'Hair Restoration',
  'Not Sure – Please Advise',
];

const WHATSAPP_NUMBER = '916282689327';
const WHATSAPP_DISPLAY = '+91 6282689327';
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi`;

export default function BookingModal({ isOpen, onClose, preselectedTreatment }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: preselectedTreatment || '',
    location: 'London',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (preselectedTreatment) {
      setForm((f) => ({ ...f, treatment: preselectedTreatment }));
    }
  }, [preselectedTreatment]);

  // Reset on close
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setSubmitted(false), 400);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Submit to internal Next.js API route
      await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      // 2. Client-side backup to FormSubmit to ensure email delivery to vakuzakash9@gmail.com
      fetch('https://formsubmit.co/ajax/vakuzakash9@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Consultation Booking Request: ${form.name || 'Prospective Patient'}`,
          Name: form.name,
          Email: form.email,
          Phone: form.phone,
          Treatment: form.treatment,
          Location: form.location,
          _template: 'table',
          _captcha: 'false',
        }),
      }).catch(console.error);
    } catch (err) {
      console.error('Booking submission error:', err);
    } finally {
      setLoading(false);
      setSubmitted(true);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 600,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.25rem',
        background: 'rgba(29, 29, 29, 0.55)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        animation: 'modalBackdropFade 0.25s ease forwards',
      }}
    >
      {/* Modal Card */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '560px',
          maxHeight: '90vh',
          overflowY: 'auto',
          background: 'var(--bg-card)',
          borderRadius: '24px',
          boxShadow: '0 32px 80px rgba(29, 29, 29, 0.25), 0 0 0 1px rgba(215, 179, 138, 0.2)',
          animation: 'modalPopCenter 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          transformOrigin: 'center center',
        }}
      >
        {/* Header */}
        <div style={{
          padding: '2.5rem 2.5rem 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
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
              Private Consultation
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 300, lineHeight: 1.2, fontSize: '1.5rem' }}>
              Book Your Consultation
            </h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            style={{
              background: 'var(--bg-secondary)',
              border: 'none',
              borderRadius: '50%',
              width: '36px', height: '36px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1rem',
              color: 'var(--text-muted)',
              flexShrink: 0,
              marginLeft: '1rem',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-soft)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--bg-secondary)'; }}
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: '1.5rem 2.5rem 2.5rem' }}>
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{
                width: '56px', height: '56px',
                borderRadius: '50%',
                background: 'var(--accent-soft)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.5rem',
                fontSize: '1.25rem',
                color: 'var(--accent-deep)',
              }}>
                ✓
              </div>
              <h4 style={{ fontWeight: 300, marginBottom: '0.75rem', fontSize: '1.35rem' }}>Request Received</h4>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
                Thank you, {form.name || 'there'}. We have dispatched your request to{' '}
                <strong style={{ color: 'var(--text-primary)' }}>vakuzakash9@gmail.com</strong>.
                Our concierge will get back to you shortly.
              </p>

              {/* Direct WhatsApp button after submit */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.65rem',
                  background: '#25D366',
                  color: '#ffffff',
                  padding: '0.9rem 1.6rem',
                  borderRadius: '12px',
                  fontWeight: 500,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(37, 211, 102, 0.3)',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 211, 102, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.3)';
                }}
              >
                <WhatsAppIcon size={20} />
                <span>Chat on WhatsApp ({WHATSAPP_DISPLAY})</span>
              </a>
            </div>
          ) : (
            <div>
              {/* WhatsApp Quick Banner */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.9rem 1.1rem',
                background: 'rgba(37, 211, 102, 0.08)',
                border: '1px solid rgba(37, 211, 102, 0.25)',
                borderRadius: '12px',
                marginBottom: '1.5rem',
                gap: '0.75rem',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: '#25D366',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <WhatsAppIcon size={18} />
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{ fontSize: '0.78rem', fontWeight: 600, color: '#0f5132' }}>
                      Fast-track on WhatsApp
                    </div>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>
                      Say "Hi" to our concierge directly
                    </div>
                  </div>
                </div>

                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    background: '#25D366',
                    color: '#ffffff',
                    padding: '0.45rem 0.9rem',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
                >
                  Message "Hi"
                </a>
              </div>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                margin: '1.25rem 0',
                opacity: 0.6,
              }}>
                <div style={{ flex: 1, height: '1px', background: 'var(--border-neutral)' }} />
                <span style={{ fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-muted)' }}>
                  Or Book via Form
                </span>
                <div style={{ flex: 1, height: '1px', background: 'var(--border-neutral)' }} />
              </div>

              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem' }}>
                <ModalField label="Full Name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your name" required />
                <ModalField label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
                <ModalField label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+91 or +44" />

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label style={labelStyle}>Area of Interest</label>
                  <select name="treatment" value={form.treatment} onChange={handleChange} style={inputStyle}>
                    <option value="">Please select…</option>
                    {treatments.map((t) => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                  <label style={labelStyle}>Preferred Location</label>
                  <select name="location" value={form.location} onChange={handleChange} style={inputStyle}>
                    <option value="London">London – Harley Street</option>
                    <option value="Beverly Hills">Beverly Hills</option>
                    <option value="Virtual">Virtual Consultation</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{
                    padding: '1rem',
                    justifyContent: 'center',
                    marginTop: '0.25rem',
                    opacity: loading ? 0.7 : 1,
                    cursor: loading ? 'wait' : 'pointer',
                  }}
                >
                  {loading ? 'Submitting…' : 'Request Consultation'}
                </button>

                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--text-light)', textAlign: 'center', lineHeight: 1.6 }}>
                  Submissions are sent to concierge · Fully confidential · GMC-registered surgeons
                </p>
              </form>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes modalBackdropFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalPopCenter {
          0% {
            opacity: 0;
            transform: scale(0.93) translateY(12px);
            filter: blur(4px);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
            filter: blur(0);
          }
        }
      `}</style>
    </div>
  );
}

function WhatsAppIcon({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M20.52 3.48A11.91 11.91 0 0012.06 0C5.46 0 .09 5.37.09 11.97c0 2.11.55 4.17 1.6 5.99L0 24l6.23-1.63a11.9 11.9 0 005.83 1.51h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-.1.25-1.24-5.35-3.52-8.43z"
        fill="#25D366"
      />
      <path
        d="M12.06 21.88a9.9 9.9 0 01-5.05-1.38l-.36-.21-3.75.98 1-3.65-.23-.38a9.92 9.92 0 01-1.52-5.27c0-5.48 4.46-9.94 9.94-9.94 2.65 0 5.15 1.03 7.02 2.9 1.88 1.88 2.91 4.37 2.91 7.03 0 5.48-4.46 9.94-9.96 9.94zm5.46-7.44c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.52-.08-.15-.68-1.65-.94-2.25-.25-.6-.5-.52-.68-.52h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.13 4.55.72.31 1.28.5 1.71.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35z"
        fill="#ffffff"
      />
    </svg>
  );
}

const labelStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.68rem',
  fontWeight: 500,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--text-muted)',
};

const inputStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: '0.9rem',
  fontWeight: 300,
  color: 'var(--text-primary)',
  background: 'var(--bg-primary)',
  border: '1px solid var(--border-neutral)',
  borderRadius: '10px',
  padding: '0.85rem 1rem',
  outline: 'none',
  width: '100%',
  appearance: 'none',
  WebkitAppearance: 'none',
  transition: 'border-color 0.3s ease',
};

function ModalField({ label, name, type, value, onChange, placeholder, required }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
      <label style={labelStyle}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        style={inputStyle}
        onFocus={(e) => { e.target.style.borderColor = 'var(--accent)'; }}
        onBlur={(e) => { e.target.style.borderColor = 'rgba(29,29,29,0.08)'; }}
      />
    </div>
  );
}
