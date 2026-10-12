'use client';

import React, { useState } from 'react';

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

export default function BookingSection({ initialTreatment }) {
  const [form, setForm] = useState({
    name: initialTreatment ? '' : '',
    email: '',
    phone: '',
    treatment: initialTreatment || '',
    message: '',
    location: 'London',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // 1. Submit to Next.js API route to forward email to vakuzakash9@gmail.com
      await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      // 2. Client-side backup to FormSubmit to guarantee delivery to vakuzakash9@gmail.com
      fetch('https://formsubmit.co/ajax/vakuzakash9@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          _subject: `New Private Consultation Request: ${form.name || 'Prospective Patient'}`,
          Name: form.name,
          Email: form.email,
          Phone: form.phone,
          Treatment: form.treatment,
          Location: form.location,
          Message: form.message || 'N/A',
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

  return (
    <section
      id="contact"
      style={{
        background: 'var(--bg-primary)',
        padding: 'var(--section-padding) var(--container-padding)',
      }}
    >
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '5rem',
          alignItems: 'start',
        }} className="booking-grid">
          {/* Left: Concierge info */}
          <div className="reveal">
            <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>Private Consultation</div>
            <h2 style={{ fontWeight: 300, lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Begin Your
              <br />
              <em style={{ fontStyle: 'italic', color: 'var(--accent-deep)' }}>
                Transformation
              </em>
            </h2>
            <div className="divider" />
            <p style={{ marginTop: '1.5rem', lineHeight: 1.8, fontSize: '0.95rem', marginBottom: '2.5rem' }}>
              Your consultation is a private, unhurried conversation.
              No pressure. No commitment. Simply a chance to explore
              what's possible for you.
            </p>

            {/* Direct WhatsApp Concierge Card */}
            <div style={{
              marginBottom: '2.5rem',
              padding: '1.25rem 1.5rem',
              borderRadius: '16px',
              background: 'rgba(37, 211, 102, 0.08)',
              border: '1px solid rgba(37, 211, 102, 0.25)',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#25D366',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <WhatsAppIcon size={20} />
                </div>
                <div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#0f5132',
                  }}>
                    Direct WhatsApp Concierge
                  </div>
                  <div style={{
                    fontSize: '0.95rem',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    marginTop: '0.1rem',
                  }}>
                    {WHATSAPP_DISPLAY}
                  </div>
                </div>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0, lineHeight: 1.5 }}>
                Click below to send "Hi" on WhatsApp and chat with our aesthetic concierge instantly.
              </p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  background: '#25D366',
                  color: '#ffffff',
                  padding: '0.75rem 1.25rem',
                  borderRadius: '10px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  textDecoration: 'none',
                  boxShadow: '0 4px 14px rgba(37, 211, 102, 0.25)',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9'; }}
                onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; }}
              >
                <WhatsAppIcon size={18} />
                <span>Message "Hi" on WhatsApp</span>
              </a>
            </div>

            {/* Location tabs */}
            <div style={{ marginBottom: '2.5rem' }}>
              <div style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.65rem',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginBottom: '1rem',
              }}>
                Our Locations
              </div>
              {[
                { city: 'London', address: '22 Harley Street, Marylebone, W1G 9PP' },
                { city: 'Beverly Hills', address: '436 N. Bedford Drive, CA 90210' },
              ].map((loc) => (
                <div key={loc.city} style={{
                  padding: '1rem 0',
                  borderBottom: '1px solid var(--border-light)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.25rem',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1rem',
                    color: 'var(--text-primary)',
                    fontWeight: 300,
                  }}>
                    {loc.city}
                  </div>
                  <div style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8rem',
                    color: 'var(--text-muted)',
                  }}>
                    {loc.address}
                  </div>
                </div>
              ))}
            </div>

            {/* Assurances */}
            {['No obligation', 'Fully confidential', 'GMC-registered surgeons', 'Response within 24 hours'].map((item) => (
              <div key={item} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                marginBottom: '0.75rem',
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                color: 'var(--text-muted)',
              }}>
                <span style={{
                  width: '16px',
                  height: '16px',
                  borderRadius: '50%',
                  background: 'var(--accent-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.55rem',
                  color: 'var(--accent-deep)',
                  flexShrink: 0,
                  fontWeight: 600,
                }}>
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>

          {/* Right: Form */}
          <div className="reveal reveal-delay-2">
            {submitted ? (
              <div style={{
                background: 'var(--bg-card)',
                borderRadius: '20px',
                padding: '4rem 3rem',
                textAlign: 'center',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-md)',
              }}>
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '50%',
                  background: 'var(--accent-soft)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 2rem',
                  fontSize: '1.5rem',
                }}>
                  ✓
                </div>
                <h3 style={{ fontWeight: 300, marginBottom: '1rem', fontSize: '1.6rem' }}>Request Received</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.8, color: 'var(--text-muted)', marginBottom: '2rem' }}>
                  Thank you, {form.name || 'there'}. We have received your consultation details and sent confirmation to{' '}
                  <strong style={{ color: 'var(--text-primary)' }}>vakuzakash9@gmail.com</strong>.
                  Our concierge will contact you within 24 hours.
                </p>

                {/* Direct WhatsApp Follow-up */}
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.65rem',
                    background: '#25D366',
                    color: '#ffffff',
                    padding: '0.9rem 1.8rem',
                    borderRadius: '12px',
                    fontWeight: 500,
                    fontSize: '0.92rem',
                    textDecoration: 'none',
                    boxShadow: '0 6px 20px rgba(37, 211, 102, 0.3)',
                  }}
                >
                  <WhatsAppIcon size={20} />
                  <span>Chat on WhatsApp ({WHATSAPP_DISPLAY})</span>
                </a>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: '20px',
                  padding: '3rem',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.35rem',
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  fontWeight: 300,
                  marginBottom: '0.25rem',
                }}>
                  Request a Consultation
                </div>

                {/* Quick WhatsApp option pill */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.75rem 1rem',
                  background: 'rgba(37, 211, 102, 0.08)',
                  border: '1px solid rgba(37, 211, 102, 0.2)',
                  borderRadius: '10px',
                  gap: '0.5rem',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <WhatsAppIcon size={18} />
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                      Prefer WhatsApp?
                    </span>
                  </div>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      color: '#0f5132',
                      textDecoration: 'underline',
                    }}
                  >
                    Click to say "Hi" ({WHATSAPP_DISPLAY})
                  </a>
                </div>

                {/* Name + Email */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                  <FormField
                    label="Full Name"
                    name="name"
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                  <FormField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>

                {/* Phone + Location */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                  <FormField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 or +44"
                  />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <label style={labelStyle}>Preferred Location</label>
                    <select
                      name="location"
                      value={form.location}
                      onChange={handleChange}
                      style={inputStyle}
                    >
                      <option value="London">London – Harley Street</option>
                      <option value="Beverly Hills">Beverly Hills</option>
                      <option value="Virtual">Virtual Consultation</option>
                    </select>
                  </div>
                </div>

                {/* Treatment */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={labelStyle}>Area of Interest</label>
                  <select
                    name="treatment"
                    value={form.treatment}
                    onChange={handleChange}
                    style={inputStyle}
                  >
                    <option value="">Please select…</option>
                    {treatments.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  <label style={labelStyle}>Tell us a little about your goals (optional)</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Share anything you'd like us to know before your consultation…"
                    style={{ ...inputStyle, resize: 'vertical', minHeight: '100px' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{
                    padding: '1.1rem',
                    justifyContent: 'center',
                    opacity: loading ? 0.7 : 1,
                    cursor: loading ? 'wait' : 'pointer',
                  }}
                >
                  {loading ? 'Submitting…' : 'Request Your Private Consultation'}
                </button>

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.72rem',
                  color: 'var(--text-light)',
                  textAlign: 'center',
                  lineHeight: 1.6,
                }}>
                  Notification will be sent to concierge · Fully confidential · GMC-registered surgeons
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .booking-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
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
  fontSize: '0.7rem',
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
  transition: 'border-color 0.3s ease',
  width: '100%',
  appearance: 'none',
  WebkitAppearance: 'none',
};

function FormField({ label, name, type, value, onChange, placeholder, required }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
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
