import React from 'react';
import { useStore } from '../store/useStore';
import { ArrowRight, ShieldCheck, Activity, CheckCircle2, Stethoscope, Building2, Sparkles, Video, Clock } from 'lucide-react';

export const Hero: React.FC = () => {
  const [state, store] = useStore();

  const handleExploreWellness = () => {
    const el = document.querySelector('#services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handlePartnerWithUs = () => {
    const el = document.querySelector('#partnerships');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" style={{ paddingTop: '48px', paddingBottom: '72px', background: 'var(--surface-cream)', position: 'relative' }}>
      <div className="container">
        
        {/* Main 2-Column Responsive Hero */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '48px',
          alignItems: 'center',
          marginBottom: '56px'
        }} className="hero-split-grid">
          
          {/* Left Column: Headline, Narrative & CTAs */}
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              background: 'var(--ayun-gold-tint)',
              border: '1px solid var(--ayun-gold-border)',
              color: 'var(--ayun-gold-deep)',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              marginBottom: '20px'
            }}>
              <Sparkles size={13} />
              <span>Elevating Your Health at Every Step</span>
            </div>

            <h1 style={{
              fontSize: 'clamp(2.4rem, 4.6vw, 3.8rem)',
              color: 'var(--ayun-emerald-dark)',
              fontWeight: 800,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              marginBottom: '20px',
              fontFamily: 'var(--font-heading)'
            }}>
              Modern Wellness.<br />
              <span style={{ color: 'var(--ayun-emerald)' }}>
                Rooted in Ayurveda.
              </span>
            </h1>

            <p style={{
              fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
              color: 'var(--text-body)',
              lineHeight: 1.68,
              maxWidth: '580px',
              marginBottom: '32px'
            }}>
              Ayunexis combines Ayurvedic wisdom, qualified practitioners, preventive healthcare and technology to make holistic wellness accessible, measurable and scalable.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', marginBottom: '40px' }}>
              <button
                onClick={handleExploreWellness}
                className="btn btn-primary btn-lg"
                id="hero-explore-btn"
              >
                <span>Explore Wellness</span>
                <ArrowRight size={17} />
              </button>

              <button
                onClick={handlePartnerWithUs}
                className="btn btn-secondary btn-lg"
                id="hero-partner-btn"
              >
                <span>Partner With Us</span>
              </button>

              <button
                onClick={() => store.setPrakritiModal(true)}
                className="btn btn-gold btn-lg"
              >
                <Activity size={16} />
                <span>Prakriti Assessment</span>
              </button>
            </div>

            {/* Trust Indicators Bar */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '16px',
              paddingTop: '24px',
              borderTop: '1px solid var(--border-subtle)'
            }}>
              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--ayun-emerald-dark)', fontFamily: 'var(--font-mono)' }}>
                  {state.cmsStats.doctorsCount}{state.cmsStats.doctorsCountSuffix}
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Qualified Doctors
                </div>
              </div>

              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--ayun-emerald-dark)', fontFamily: 'var(--font-mono)' }}>
                  Preventive
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Evidence-Guided Care
                </div>
              </div>

              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--ayun-emerald-dark)', fontFamily: 'var(--font-mono)' }}>
                  Institutional
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Schools & Corporates
                </div>
              </div>

              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--ayun-emerald-dark)', fontFamily: 'var(--font-mono)' }}>
                  Technology
                </div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                  ABDM & Telehealth
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Editorial Clinical Showcase Card (Human, Prestigious, Zero Gaming Neon) */}
          <div>
            <div style={{
              background: 'var(--surface-white)',
              border: '1.5px solid var(--border-subtle)',
              borderRadius: 'var(--radius-xl)',
              padding: '36px',
              boxShadow: 'var(--shadow-card)',
              position: 'relative'
            }}>
              
              {/* Card Header with real emblem & clinical badge */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: '20px',
                borderBottom: '1px solid var(--border-subtle)',
                marginBottom: '24px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img
                    src="/ayunexis-emblem.png"
                    alt="Ayunexis Symbol"
                    style={{ width: '42px', height: '42px', objectFit: 'contain' }}
                  />
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '1.05rem', color: 'var(--ayun-emerald-dark)' }}>
                      Ayunexis Clinical Suite
                    </div>
                    <div style={{ fontSize: '0.74rem', color: 'var(--ayun-gold-deep)', fontWeight: 600 }}>
                      Integrated Care Continuum
                    </div>
                  </div>
                </div>

                <span className="badge badge-emerald">
                  <ShieldCheck size={13} />
                  <span>Statutory Verified</span>
                </span>
              </div>

              {/* 3 Core Constitutional Dimensions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                <div style={{
                  background: 'var(--surface-cream)',
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <div className="ref-dot-icon" style={{ marginTop: '2px' }}>
                    <div className="ref-dot-inner" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-headline)' }}>
                      Prakriti Parikshan & Bio-Typing
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      Technology-assisted assessment of individual dosha balance (Vata, Pitta, Kapha) and digestive Agni.
                    </div>
                  </div>
                </div>

                <div style={{
                  background: 'var(--surface-cream)',
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <div className="ref-dot-icon" style={{ marginTop: '2px' }}>
                    <div className="ref-dot-inner" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-headline)' }}>
                      Circadian Dinacharya & Preventive Care
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      Structured biological timing for nutrition, deep restorative sleep, and chronic burnout alleviation.
                    </div>
                  </div>
                </div>

                <div style={{
                  background: 'var(--surface-cream)',
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-subtle)',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px'
                }}>
                  <div className="ref-dot-icon" style={{ marginTop: '2px' }}>
                    <div className="ref-dot-inner" />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-headline)' }}>
                      School & Enterprise Health Frameworks
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      Pediatric screenings, corporate ergonomics, and on-premise multi-specialty diagnostic camps.
                    </div>
                  </div>
                </div>
              </div>

              {/* Verified Physician Card Preview */}
              <div style={{
                background: 'linear-gradient(145deg, #092c21, #0d4a38)',
                color: '#ffffff',
                padding: '16px 20px',
                borderRadius: 'var(--radius-md)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--ayun-gold-light)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    On-Duty Clinical Consultant
                  </div>
                  <div style={{ fontWeight: 700, fontSize: '0.94rem', color: '#ffffff' }}>
                    Dr. Aarav Nambiar, MD (Ayu)
                  </div>
                  <div style={{ fontSize: '0.74rem', color: '#cbd5e1' }}>
                    Reg: AYU-84920 • Metabolic & Gut Health
                  </div>
                </div>

                <button
                  onClick={() => {
                    const el = document.querySelector('#consultation-discovery');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  style={{
                    background: 'var(--ayun-gold-deep)',
                    color: '#ffffff',
                    padding: '8px 14px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    cursor: 'pointer'
                  }}
                >
                  <Video size={13} />
                  <span>Consult</span>
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .hero-split-grid {
            grid-template-columns: 1.15fr 0.95fr !important;
          }
        }
      `}</style>
    </section>
  );
};
