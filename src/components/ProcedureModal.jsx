import React from 'react';
import { X, Clock, AlertCircle, Sparkles, Shield, Check, Calendar, ArrowRight } from 'lucide-react';

export default function ProcedureModal({ procedure, onClose, onBook }) {
  if (!procedure) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        background: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: '#0e1114',
          border: '1px solid rgba(212, 175, 55, 0.3)',
          borderRadius: '24px',
          maxWidth: '800px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.8), 0 0 40px rgba(212, 175, 55, 0.15)',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image with Gradient */}
        <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
          <img
            src={procedure.image}
            alt={procedure.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, #0e1114 0%, rgba(14, 17, 20, 0.5) 60%, transparent 100%)',
            }}
          />
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              background: 'rgba(10, 12, 14, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#ffffff',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
          >
            <X size={18} />
          </button>
          <div
            style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '2rem',
              right: '2rem',
            }}
          >
            <span className="badge-gold">{procedure.category}</span>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.85rem',
                color: '#ffffff',
                fontWeight: 500,
                marginTop: '0.4rem',
              }}
            >
              {procedure.name}
            </h2>
          </div>
        </div>

        {/* Content Body */}
        <div style={{ padding: '2rem 2.25rem', display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
          <p style={{ fontSize: '1rem', color: '#b2bcc4', lineHeight: 1.7 }}>
            {procedure.fullDescription || procedure.description}
          </p>

          {/* Quick Clinical Metrics Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '1rem',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.07)',
              borderRadius: '16px',
              padding: '1.25rem',
            }}
          >
            <div>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.12em', color: '#8d98a0', textTransform: 'uppercase' }}>
                Duration
              </span>
              <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f5dfa2', marginTop: '0.2rem' }}>
                {procedure.duration}
              </p>
            </div>
            <div>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.12em', color: '#8d98a0', textTransform: 'uppercase' }}>
                Downtime
              </span>
              <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f5dfa2', marginTop: '0.2rem' }}>
                {procedure.downtime}
              </p>
            </div>
            <div>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.12em', color: '#8d98a0', textTransform: 'uppercase' }}>
                Anesthesia
              </span>
              <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f5dfa2', marginTop: '0.2rem' }}>
                {procedure.anesthesia}
              </p>
            </div>
            <div>
              <span style={{ fontSize: '0.68rem', letterSpacing: '0.12em', color: '#8d98a0', textTransform: 'uppercase' }}>
                Longevity
              </span>
              <p style={{ fontSize: '0.95rem', fontWeight: 600, color: '#f5dfa2', marginTop: '0.2rem' }}>
                {procedure.longevity}
              </p>
            </div>
          </div>

          {/* Key Clinical Benefits */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.2rem',
                color: '#ffffff',
                marginBottom: '0.85rem',
              }}
            >
              Clinical Protocol & Key Benefits
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
              {(procedure.benefits || [
                'Precise anatomical structural support tailored to facial bone architecture',
                'Ultra-conservative preservation of organic facial expressions',
                'Performed in our certified sterile surgical and laser theatre',
                'Comprehensive 12-month post-procedure photographic monitoring',
              ]).map((benefit, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: 'rgba(212, 175, 55, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--gold-primary)',
                      flexShrink: 0,
                      marginTop: '2px',
                    }}
                  >
                    <Check size={12} />
                  </div>
                  <span style={{ fontSize: '0.92rem', color: '#cbd4da', lineHeight: 1.5 }}>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              paddingTop: '1.25rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div>
              <span style={{ fontSize: '0.7rem', color: '#8d98a0', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Investment Range
              </span>
              <p style={{ fontSize: '1.35rem', fontFamily: 'var(--font-serif)', color: 'var(--gold-primary)', fontWeight: 600 }}>
                {procedure.pricing || 'From £1,850 / $2,400'}
              </p>
            </div>

            <div style={{ display: 'flex', gap: '0.85rem' }}>
              <button
                onClick={onClose}
                className="btn-outline-gold"
                style={{ padding: '0.8rem 1.4rem' }}
              >
                Close
              </button>
              <button
                onClick={() => {
                  onClose();
                  onBook(procedure.name);
                }}
                className="btn-gold"
                style={{ padding: '0.8rem 1.6rem' }}
              >
                <Calendar size={14} />
                <span>Book This Procedure</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
