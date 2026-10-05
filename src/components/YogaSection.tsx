import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import {
  Sun,
  Moon,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Edit3,
  Calendar,
  Heart,
  Users,
  Video
} from 'lucide-react';

export const YogaSection: React.FC = () => {
  const [state, store] = useStore();
  const defaultGoogleForm = import.meta.env.VITE_YOGA_GOOGLE_FORM_URL || 'https://forms.gle/AyunexisYogaRegistration';
  const [googleFormUrl, setGoogleFormUrl] = useState<string>(() => {
    return localStorage.getItem('ayunexis_yoga_gform') || defaultGoogleForm;
  });

  const handleOpenGoogleForm = (planTitle?: string) => {
    store.showToast(`Opening Yoga Registration Form for ${planTitle || 'Ayunexis Yoga Batch'}...`, 'success');
    window.open(googleFormUrl, '_blank', 'noopener,noreferrer');
  };

  const handleEditGoogleFormUrl = () => {
    const current = googleFormUrl;
    const updated = prompt('Paste your Yoga Class Google Form URL here:', current);
    if (updated && updated.trim().startsWith('http')) {
      const cleanUrl = updated.trim();
      setGoogleFormUrl(cleanUrl);
      localStorage.setItem('ayunexis_yoga_gform', cleanUrl);
      store.showToast('Google Form link updated successfully!', 'success');
    }
  };

  return (
    <section id="yoga" className="section-padding" style={{ background: 'var(--surface-white)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="ref-eyebrow">THERAPEUTIC MOVEMENT & PRANAYAMA</div>
          <div className="title-with-underline center">
            <h2 className="section-title" style={{ margin: 0 }}>
              Move Better. Breathe Better. Live Better.
            </h2>
          </div>
          <p className="section-subtitle">
            Online daily yoga sessions designed for beginners, busy professionals, and wellness seekers combining classical alignment, conscious Pranayama, and nervous-system down-regulation.
          </p>
        </div>

        {/* FEATURED YOGA CLASS HERO SHOWCASE: IMAGE + REGISTRATION BANNER */}
        <div style={{
          background: 'linear-gradient(145deg, #072a20, #0d4a38)',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          color: '#ffffff',
          boxShadow: 'var(--shadow-card)',
          marginBottom: '48px',
          border: '1.5px solid rgba(197, 155, 88, 0.4)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            alignItems: 'center'
          }} className="yoga-hero-grid">
            
            {/* Left: Yoga Class Picture */}
            <div style={{ position: 'relative', height: '100%', minHeight: '320px', overflow: 'hidden' }}>
              <img
                src="/yoga-class.jpg"
                alt="Ayunexis Live Morning Yoga Class"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '16px',
                left: '16px',
                background: 'rgba(9, 44, 33, 0.88)',
                backdropFilter: 'blur(8px)',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.76rem',
                fontWeight: 700,
                color: '#ffffff',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                border: '1px solid rgba(255, 255, 255, 0.2)'
              }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 8px #4ade80' }} />
                <span>Live Interactive Online Batches</span>
              </div>

              <div style={{
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                background: 'rgba(0, 0, 0, 0.72)',
                backdropFilter: 'blur(6px)',
                padding: '5px 12px',
                borderRadius: 'var(--radius-sm)',
                fontSize: '0.74rem',
                color: '#fef08a',
                fontWeight: 600
              }}>
                Certified Ayush & Yoga Alliance Instructors
              </div>
            </div>

            {/* Right: Class Benefits & Direct Google Form Registration */}
            <div style={{ padding: '36px 32px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(212, 175, 55, 0.2)',
                color: 'var(--ayun-gold-light)',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.74rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                marginBottom: '14px',
                border: '1px solid rgba(212, 175, 55, 0.4)'
              }}>
                <Sparkles size={13} />
                <span>Registrations Now Open</span>
              </div>

              <h3 style={{
                fontSize: 'clamp(1.5rem, 2.6vw, 2.1rem)',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '12px',
                fontFamily: 'var(--font-heading)',
                lineHeight: 1.25
              }}>
                Awaken Your Body & Mind with Ayunexis Daily Yoga
              </h3>

              <p style={{ color: '#cbd5e1', fontSize: '0.92rem', lineHeight: 1.62, marginBottom: '22px' }}>
                Join our small-group therapeutic yoga sessions designed around Ayurvedic circadian principles (Dinacharya). Each class includes mindful joint warm-ups, classical asanas, guided pranayama, and soothing savasana relaxation.
              </p>

              {/* Quick Feature Badges */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '10px', marginBottom: '26px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#e2e8f0' }}>
                  <CheckCircle2 size={16} color="var(--ayun-gold)" style={{ flexShrink: 0 }} />
                  <span>Beginner & Intermediate Batches</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#e2e8f0' }}>
                  <CheckCircle2 size={16} color="var(--ayun-gold)" style={{ flexShrink: 0 }} />
                  <span>Real-time Posture Correction</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#e2e8f0' }}>
                  <CheckCircle2 size={16} color="var(--ayun-gold)" style={{ flexShrink: 0 }} />
                  <span>Stress Alleviation & Sleep Focus</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: '#e2e8f0' }}>
                  <CheckCircle2 size={16} color="var(--ayun-gold)" style={{ flexShrink: 0 }} />
                  <span>Weekend Masterclasses Included</span>
                </div>
              </div>

              {/* GOOGLE FORM REGISTRATION ACTION BUTTONS */}
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleOpenGoogleForm('General Yoga Enrollment');
                  }}
                  className="btn btn-gold btn-lg"
                  style={{
                    background: '#c59b58',
                    color: '#ffffff',
                    fontWeight: 700,
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    boxShadow: '0 6px 20px rgba(197, 155, 88, 0.4)'
                  }}
                  id="yoga-google-form-btn"
                >
                  {/* Google Forms Iconic Form Symbol */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="3" fill="#ffffff" fillOpacity="0.2" stroke="#ffffff" strokeWidth="2" />
                    <line x1="7" y1="8" x2="17" y2="8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                    <line x1="7" y1="12" x2="17" y2="12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                    <line x1="7" y1="16" x2="13" y2="16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                  <span>Register via Google Form</span>
                  <ExternalLink size={16} />
                </a>

                {/* Edit Form Link (convenient for user to paste their own exact form link) */}
                <button
                  onClick={handleEditGoogleFormUrl}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    color: '#cbd5e1',
                    padding: '11px 16px',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    cursor: 'pointer'
                  }}
                  title="Configure Google Form URL"
                >
                  <Edit3 size={14} />
                  <span>Change Form Link</span>
                </button>
              </div>

              <div style={{ fontSize: '0.74rem', color: '#94a3b8', marginTop: '12px' }}>
                Instant confirmation • Slot allocated upon submission of Google Form
              </div>
            </div>

          </div>
        </div>

        {/* Schedule & Batch Highlights Bar */}
        <div style={{
          background: 'var(--surface-cream)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px 32px',
          border: '1px solid var(--border-subtle)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          marginBottom: '48px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--ayun-gold-tint)', color: 'var(--ayun-gold-deep)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sun size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--ayun-emerald-dark)' }}>Morning Batches (Agni & Vitality)</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>6:30 AM - 7:30 AM & 7:30 AM - 8:30 AM IST</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--ayun-emerald-light)', color: 'var(--ayun-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Moon size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--ayun-emerald-dark)' }}>Evening Batches (Decompression)</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>6:30 PM - 7:30 PM & 7:30 PM - 8:30 PM IST</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="badge badge-emerald">Beginner Friendly</span>
            <span className="badge badge-gold">Guided Live Correction</span>
          </div>
        </div>

        {/* Pricing & Tier Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px',
          marginBottom: '40px'
        }}>
          {state.yogaPlans.map((plan) => (
            <div
              key={plan.id}
              className={`card ${plan.isPopular ? 'card-dark' : ''}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                border: plan.isPopular ? '1.5px solid var(--ayun-gold)' : '1px solid var(--border-card)',
                boxShadow: plan.isPopular ? '0 10px 30px rgba(13, 74, 56, 0.16)' : 'var(--shadow-card)',
                background: plan.isPopular ? 'linear-gradient(160deg, #062b20, #0c3e30)' : '#ffffff',
                color: plan.isPopular ? '#ffffff' : 'inherit'
              }}
            >
              {plan.isPopular && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '24px',
                  background: 'var(--ayun-gold-deep)',
                  color: '#ffffff',
                  padding: '4px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em'
                }}>
                  MOST POPULAR
                </div>
              )}

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div>
                    <span className="badge" style={{
                      background: plan.isPopular ? 'rgba(212, 175, 55, 0.2)' : 'var(--ayun-emerald-light)',
                      color: plan.isPopular ? 'var(--ayun-gold-light)' : 'var(--ayun-emerald-dark)',
                      border: plan.isPopular ? '1px solid rgba(212, 175, 55, 0.3)' : '1px solid rgba(13, 74, 56, 0.2)',
                      marginBottom: '8px'
                    }}>
                      {plan.tier}
                    </span>
                    <h3 style={{ fontSize: '1.5rem', color: plan.isPopular ? '#ffffff' : 'var(--ayun-emerald-dark)' }}>
                      {plan.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => {
                      const newPrice = prompt(`Enter new monthly price for ${plan.title}:`, String(plan.monthlyFee));
                      if (newPrice && !isNaN(Number(newPrice))) {
                        store.updateYogaPlanFee(plan.id, Number(newPrice));
                      }
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: plan.isPopular ? 'var(--ayun-gold-light)' : 'var(--text-muted)',
                      cursor: 'pointer',
                      padding: '4px'
                    }}
                    title="Edit pricing (CMS feature)"
                  >
                    <Edit3 size={15} />
                  </button>
                </div>

                <p style={{ fontSize: '0.88rem', color: plan.isPopular ? '#cbd5e1' : 'var(--text-muted)', marginBottom: '20px' }}>
                  {plan.tagline}
                </p>

                {/* Price Display */}
                <div style={{ marginBottom: '24px', paddingBottom: '20px', borderBottom: `1px solid ${plan.isPopular ? 'rgba(255, 255, 255, 0.12)' : 'var(--border-subtle)'}` }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span style={{ fontSize: '1.1rem', fontWeight: 600, color: plan.isPopular ? 'var(--ayun-gold-light)' : 'var(--ayun-emerald)' }}>₹</span>
                    <span style={{ fontSize: '2.5rem', fontWeight: 800, color: plan.isPopular ? '#ffffff' : 'var(--ayun-emerald-dark)', fontFamily: 'var(--font-mono)' }}>
                      {plan.monthlyFee.toLocaleString('en-IN')}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: plan.isPopular ? '#94a3b8' : 'var(--text-muted)' }}>/ month</span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: plan.isPopular ? 'var(--ayun-gold-light)' : 'var(--ayun-emerald)', marginTop: '4px', fontWeight: 600 }}>
                    {plan.timing}
                  </div>
                </div>

                {/* Features List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.86rem', color: plan.isPopular ? 'rgba(255, 255, 255, 0.9)' : 'var(--text-body)' }}>
                      <CheckCircle2 size={15} color={plan.isPopular ? 'var(--ayun-gold)' : 'var(--ayun-emerald)'} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <a
                  href={googleFormUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault();
                    handleOpenGoogleForm(plan.title);
                  }}
                  className={`btn ${plan.isPopular ? 'btn-gold' : 'btn-primary'}`}
                  style={{ width: '100%', textDecoration: 'none', display: 'flex', justifyContent: 'center', gap: '8px' }}
                >
                  <span>Enroll via Google Form</span>
                  <ExternalLink size={15} />
                </a>
                <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '0.74rem', color: plan.isPopular ? '#94a3b8' : 'var(--text-muted)' }}>
                  Recommended: {plan.recommendedFor}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer / Notice */}
        <div style={{
          textAlign: 'center',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          maxWidth: '680px',
          margin: '0 auto'
        }}>
          * All yoga sessions are led by statutory certified teachers with Ayush / Yoga Alliance credentials. Batch allocation and welcome onboarding kits are dispatched upon Google Form submission.
        </div>

      </div>

      <style>{`
        @media (min-width: 900px) {
          .yoga-hero-grid {
            grid-template-columns: 1fr 1.15fr !important;
          }
        }
      `}</style>
    </section>
  );
};
