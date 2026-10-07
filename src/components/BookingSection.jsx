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

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
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
                <h3 style={{ fontWeight: 300, marginBottom: '1rem' }}>Request Received</h3>
                <p style={{ fontSize: '0.95rem', lineHeight: 1.8 }}>
                  Thank you, {form.name}. A member of our concierge team will
                  be in touch within 24 hours to arrange your private consultation.
                </p>
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
                  gap: '1.5rem',
                }}
              >
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.35rem',
                  fontWeight: 300,
                  marginBottom: '0.5rem',
                }}>
                  Request a Consultation
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
                    placeholder="+44 or +1"
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

                <button type="submit" className="btn-primary" style={{ padding: '1.1rem', justifyContent: 'center' }}>
                  Request Your Private Consultation
                </button>

                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.72rem',
                  color: 'var(--text-light)',
                  textAlign: 'center',
                  lineHeight: 1.6,
                }}>
                  By submitting this form you agree to our privacy policy.
                  Your details are never shared with third parties.
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
