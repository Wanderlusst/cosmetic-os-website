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

export default function BookingModal({ isOpen, onClose, preselectedTreatment }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    treatment: preselectedTreatment || '',
    location: 'London',
  });
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
              <h4 style={{ fontWeight: 300, marginBottom: '0.75rem' }}>Request Received</h4>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>
                Thank you, {form.name}. Our concierge team will contact you
                within 24 hours to arrange your private consultation.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <ModalField label="Full Name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="Your name" required />
              <ModalField label="Email Address" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" required />
              <ModalField label="Phone Number" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+44 or +1" />

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

              <button type="submit" className="btn-primary" style={{ padding: '1rem', justifyContent: 'center', marginTop: '0.25rem' }}>
                Request Consultation
              </button>

              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', color: 'var(--text-light)', textAlign: 'center', lineHeight: 1.6 }}>
                Fully confidential · No obligation · GMC-registered surgeons
              </p>
            </form>
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
