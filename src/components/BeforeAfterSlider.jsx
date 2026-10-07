import React, { useState, useRef, useCallback, useEffect } from 'react';
import { ArrowLeftRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Pre-Treatment Baseline',
  afterLabel = 'Post-Treatment Result (3 Mos)',
  title = 'Case Study: Comprehensive Facial Harmonization',
  description = 'Subtle deep-plane SMAS restructuring combined with peri-orbital tear trough restoration and fractional laser resurfacing.',
  doctor = 'Dr. Julian Vance, MD, FRCS (Plast)',
  patientAge = 'Patient, Age 38',
  aspectRatio = '4/3',
  compact = false,
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef(null);

  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(2, Math.min(98, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: compact ? '100%' : '1100px',
        margin: '0 auto',
      }}
    >
      {/* Visual Frame */}
      <div
        ref={containerRef}
        onMouseDown={(e) => {
          setIsDragging(true);
          handleMove(e.clientX);
        }}
        onTouchStart={(e) => {
          setIsDragging(true);
          handleMove(e.touches[0].clientX);
        }}
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: aspectRatio,
          borderRadius: compact ? '16px' : '24px',
          overflow: 'hidden',
          cursor: 'ew-resize',
          userSelect: 'none',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 35px rgba(212, 175, 55, 0.12)',
          border: '1px solid rgba(212, 175, 55, 0.25)',
          background: '#0e1114',
        }}
      >
        {/* AFTER Image (Base Layer) */}
        <img
          src={afterImage}
          alt={afterLabel}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            pointerEvents: 'none',
          }}
          loading="lazy"
        />

        {/* AFTER Badge Tag */}
        <div
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            zIndex: 10,
            background: 'rgba(10, 12, 14, 0.85)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(212, 175, 55, 0.4)',
            color: '#f5dfa2',
            padding: '0.35rem 0.85rem',
            borderRadius: '100px',
            fontSize: '0.72rem',
            fontWeight: 600,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '0.35rem',
            boxShadow: '0 4px 15px rgba(0,0,0,0.4)',
          }}
        >
          <Sparkles size={12} color="var(--gold-primary)" />
          <span>{afterLabel}</span>
        </div>

        {/* BEFORE Image (Clipped Layer) */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
          }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              pointerEvents: 'none',
            }}
            loading="lazy"
          />

          {/* BEFORE Badge Tag */}
          <div
            style={{
              position: 'absolute',
              top: '1rem',
              left: '1rem',
              zIndex: 10,
              background: 'rgba(10, 12, 14, 0.85)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: '#d0d7dc',
              padding: '0.35rem 0.85rem',
              borderRadius: '100px',
              fontSize: '0.72rem',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
            }}
          >
            <span>{beforeLabel}</span>
          </div>
        </div>

        {/* Draggable Divider Line & Knob */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: `${sliderPosition}%`,
            width: '2px',
            background: 'linear-gradient(to bottom, var(--gold-primary), #ffffff, var(--gold-primary))',
            boxShadow: '0 0 15px rgba(255, 255, 255, 0.9), 0 0 25px rgba(212, 175, 55, 0.6)',
            transform: 'translateX(-50%)',
            zIndex: 30,
            pointerEvents: 'none',
          }}
        >
          {/* Circular Luxury Knob */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: compact ? '36px' : '44px',
              height: compact ? '36px' : '44px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #ffffff 0%, #f4e8cf 100%)',
              border: '2px solid var(--gold-primary)',
              boxShadow: '0 0 20px rgba(0, 0, 0, 0.6), 0 0 16px rgba(212, 175, 55, 0.5)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0b0d0e',
            }}
          >
            <ArrowLeftRight size={compact ? 16 : 20} strokeWidth={2.5} />
          </div>
        </div>

        {/* Bottom Helper Hint */}
        <div
          style={{
            position: 'absolute',
            bottom: '0.85rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            background: 'rgba(10, 12, 14, 0.75)',
            backdropFilter: 'blur(10px)',
            borderRadius: '100px',
            padding: '0.25rem 0.85rem',
            fontSize: '0.68rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#a0acb5',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <ArrowLeftRight size={12} color="var(--gold-primary)" />
          <span>Drag or Slide to Reveal</span>
        </div>
      </div>

      {/* Case Details Bar (if not compact) */}
      {!compact && (
        <div
          style={{
            marginTop: '1.25rem',
            background: 'rgba(18, 22, 26, 0.65)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(212, 175, 55, 0.15)',
            borderRadius: '16px',
            padding: '1.2rem 1.75rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '0.5rem',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '1.25rem',
                color: '#ffffff',
                fontWeight: 500,
              }}
            >
              {title}
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.8rem', color: 'var(--gold-primary)' }}>
              <span>{patientAge}</span>
              <span style={{ opacity: 0.3 }}>•</span>
              <span style={{ color: '#a0acb5' }}>{doctor}</span>
            </div>
          </div>
          <p style={{ fontSize: '0.88rem', color: '#9ba7b0', lineHeight: 1.6 }}>
            {description}
          </p>
          <div style={{ display: 'flex', gap: '0.6rem', marginTop: '0.3rem', flexWrap: 'wrap' }}>
            <span className="badge-clinical">
              <CheckCircle2 size={12} color="#25D366" /> Natural Tissue Preservation
            </span>
            <span className="badge-clinical">
              <ShieldCheck size={12} color="var(--gold-primary)" /> 100% Unretouched Clinical Record
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
