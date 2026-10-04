import React, { useState, useEffect } from 'react';
import { ShieldCheck, Cookie, Check, X } from 'lucide-react';

export const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('ayunexis_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1400);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('ayunexis_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('ayunexis_cookie_consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '24px',
      left: '24px',
      right: '24px',
      maxWidth: '520px',
      zIndex: 1500,
      background: 'rgba(2, 14, 10, 0.94)',
      backdropFilter: 'blur(16px)',
      border: '1px solid rgba(212, 175, 55, 0.3)',
      borderRadius: 'var(--radius-lg)',
      padding: '20px 24px',
      color: '#ffffff',
      boxShadow: '0 20px 50px rgba(0, 0, 0, 0.45)',
      animation: 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', marginBottom: '14px' }}>
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '8px',
          background: 'rgba(212, 175, 55, 0.15)',
          color: 'var(--gold-400)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}>
          <Cookie size={20} />
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#ffffff', marginBottom: '4px' }}>
            Privacy & Health Data Governance
          </div>
          <p style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.5 }}>
            Ayunexis utilizes strictly necessary cookies and encrypted local state to deliver HIPAA & DPDP-compliant telehealth sessions, Prakriti diagnostics, and appointment telemetry.
          </p>
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
        <button
          onClick={handleDecline}
          style={{
            padding: '7px 14px',
            borderRadius: 'var(--radius-full)',
            background: 'transparent',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            color: '#cbd5e1',
            fontSize: '0.78rem',
            fontWeight: 600,
            cursor: 'pointer'
          }}
        >
          Essential Only
        </button>

        <button
          onClick={handleAccept}
          style={{
            padding: '7px 18px',
            borderRadius: 'var(--radius-full)',
            background: 'var(--gold-500)',
            color: 'var(--forest-darkest)',
            fontSize: '0.78rem',
            fontWeight: 700,
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}
        >
          <Check size={14} />
          <span>Accept & Continue</span>
        </button>
      </div>
    </div>
  );
};
