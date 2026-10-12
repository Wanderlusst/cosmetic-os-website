'use client';

import React, { useState } from 'react';

const WHATSAPP_URL = 'https://wa.me/916282689327?text=Hi';

export default function WhatsAppFloatButton() {
  const [hovered, setHovered] = useState(false);

  return (
    <aside
      aria-label="WhatsApp Concierge"
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 500,
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
      }}
    >
      {/* Tooltip / Label */}
      <span
        style={{
          background: 'rgba(29, 29, 29, 0.92)',
          color: '#ffffff',
          padding: '0.45rem 0.85rem',
          borderRadius: '20px',
          fontSize: '0.75rem',
          fontWeight: 400,
          fontFamily: 'var(--font-body)',
          boxShadow: '0 4px 16px rgba(0,0,0,0.18)',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          opacity: hovered ? 1 : 0.88,
          transform: hovered ? 'translateX(0)' : 'translateX(4px)',
          transition: 'all 0.25s ease',
          backdropFilter: 'blur(6px)',
        }}
      >
        Chat on WhatsApp
      </span>

      {/* Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message on WhatsApp: +91 6282689327"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          width: '54px',
          height: '54px',
          borderRadius: '50%',
          background: '#25D366',
          boxShadow: '0 6px 24px rgba(37, 211, 102, 0.45)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ffffff',
          textDecoration: 'none',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.25s ease',
        }}
      >
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20.52 3.48A11.91 11.91 0 0012.06 0C5.46 0 .09 5.37.09 11.97c0 2.11.55 4.17 1.6 5.99L0 24l6.23-1.63a11.9 11.9 0 005.83 1.51h.01c6.6 0 11.97-5.37 11.97-11.97 0-3.2-.1.25-1.24-5.35-3.52-8.43z"
            fill="#25D366"
          />
          <path
            d="M12.06 21.88a9.9 9.9 0 01-5.05-1.38l-.36-.21-3.75.98 1-3.65-.23-.38a9.92 9.92 0 01-1.52-5.27c0-5.48 4.46-9.94 9.94-9.94 2.65 0 5.15 1.03 7.02 2.9 1.88 1.88 2.91 4.37 2.91 7.03 0 5.48-4.46 9.94-9.96 9.94zm5.46-7.44c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.23-.65.08-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.52-.08-.15-.68-1.65-.94-2.25-.25-.6-.5-.52-.68-.52h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.03-1.05 2.5 0 1.48 1.08 2.9 1.23 3.1.15.2 2.12 3.24 5.13 4.55.72.31 1.28.5 1.71.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.08-.12-.28-.2-.58-.35z"
            fill="#ffffff"
          />
        </svg>
      </a>
    </aside>
  );
}
