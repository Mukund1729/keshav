import React, { useState } from 'react';
import { Target, Compass, Award, ShieldAlert, Cpu, HeartHandshake, CheckCircle } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'who' | 'believe' | 'mission_vision' | 'why'>('who');

  return (
    <section id="about" className="section-padding" style={{ background: 'var(--surface-white)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="ref-eyebrow">ABOUT AYUNEXIS</div>
          <div className="title-with-underline center">
            <h2 className="section-title" style={{ margin: 0 }}>
              Reimagining Ayurveda for the Modern World
            </h2>
          </div>
          <p className="section-subtitle">
            Ayunexis Private Limited is building a modern Ayurveda and wellness ecosystem designed to bridge traditional knowledge with contemporary healthcare needs.
          </p>
        </div>

        {/* Overview Narrative Card */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(15, 76, 58, 0.04), rgba(212, 175, 55, 0.05))',
          borderRadius: 'var(--radius-xl)',
          padding: '40px',
          border: '1px solid var(--border-light)',
          marginBottom: '56px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '32px',
            alignItems: 'center'
          }} className="about-hero-grid">
            <div>
              <h3 style={{ fontSize: '1.6rem', color: 'var(--emerald-900)', marginBottom: '16px' }}>
                Bridging Timeless Wisdom with Modern Scalability
              </h3>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '20px' }}>
                Our mission is to make preventive and holistic wellness more accessible through technology, qualified practitioners, institutional programs and evidence-oriented approaches.
              </p>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>
                Rather than treating Ayurveda as a mystical historical artifact or a simplistic herbal substitute, Ayunexis treats it as an intricate, codified science of human chronobiology, metabolic equilibrium, and individualized preventive care.
              </p>
            </div>

            {/* Mission & Vision Twin Pillars */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
              <div style={{
                background: 'var(--surface-white)',
                padding: '24px',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(15, 76, 58, 0.12)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'var(--emerald-50)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--emerald-700)'
                  }}>
                    <Target size={18} />
                  </div>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--emerald-900)' }}>Our Mission</h4>
                </div>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  To make holistic wellness accessible, preventive and technology-enabled.
                </p>
              </div>

              <div style={{
                background: 'var(--surface-white)',
                padding: '24px',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(212, 175, 55, 0.25)',
                boxShadow: 'var(--shadow-sm)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: 'rgba(212, 175, 55, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-600)'
                  }}>
                    <Compass size={18} />
                  </div>
                  <h4 style={{ fontSize: '1.15rem', color: 'var(--emerald-900)' }}>Our Vision</h4>
                </div>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.55 }}>
                  To become a trusted global ecosystem for Ayurveda, preventive healthcare and wellness.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Interactive Architectural Pillars: Who We Are | What We Believe | Our Mission & Vision | Why Ayunexis */}
        <div className="tabs-container">
          <button
            onClick={() => setActiveTab('who')}
            className={`tab-btn ${activeTab === 'who' ? 'active' : ''}`}
          >
            Who We Are
          </button>
          <button
            onClick={() => setActiveTab('believe')}
            className={`tab-btn ${activeTab === 'believe' ? 'active' : ''}`}
          >
            What We Believe
          </button>
          <button
            onClick={() => setActiveTab('mission_vision')}
            className={`tab-btn ${activeTab === 'mission_vision' ? 'active' : ''}`}
          >
            Mission & Vision
          </button>
          <button
            onClick={() => setActiveTab('why')}
            className={`tab-btn ${activeTab === 'why' ? 'active' : ''}`}
          >
            Why Ayunexis
          </button>
        </div>

        {/* Pillar Content Dynamic Displays */}
        <div>
          {activeTab === 'who' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
              gap: '24px'
            }}>
              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--emerald-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--emerald-700)' }}>
                    <HeartHandshake size={22} />
                  </div>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--emerald-900)' }}>Health-Tech Innovators</h4>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Ayunexis is founded by an interdisciplinary consortium of Ayurvedic physicians, digital health engineers, enterprise wellness architects, and preventive health advocates.
                </p>
              </div>

              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(212, 175, 55, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-600)' }}>
                    <Award size={22} />
                  </div>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--emerald-900)' }}>Clinical Rigor First</h4>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  We reject unsubstantiated folklore. Every protocol and doctor onboarded must meet stringent qualifications (BAMS/MD) from state-accredited medical universities with transparent credential verification.
                </p>
              </div>

              <div className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'var(--emerald-50)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--emerald-700)' }}>
                    <Cpu size={22} />
                  </div>
                  <h4 style={{ fontSize: '1.2rem', color: 'var(--emerald-900)' }}>Institutional Infrastructure</h4>
                </div>
                <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  We design modular health programs tailored to corporate headquarters, sports franchises, school networks, and community wellness hubs across India and internationally.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'believe' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '24px'
            }}>
              <div className="card">
                <div style={{ fontSize: '1.6rem', color: 'var(--gold-500)', fontWeight: 800, marginBottom: '10px' }}>01</div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--emerald-900)', marginBottom: '8px' }}>Prevention Trumps Treatment</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  "Swasthyasya Swasthya Rakshanam" — the primary axiom of Ayurveda is safeguarding the wellness of the healthy before disease takes root.
                </p>
              </div>

              <div className="card">
                <div style={{ fontSize: '1.6rem', color: 'var(--emerald-600)', fontWeight: 800, marginBottom: '10px' }}>02</div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--emerald-900)', marginBottom: '8px' }}>Individualized Bio-Typing</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  No two human metabolisms are identical. What restores one person may aggravate another. Precision Prakriti assessment is the foundation of genuine well-being.
                </p>
              </div>

              <div className="card">
                <div style={{ fontSize: '1.6rem', color: 'var(--gold-500)', fontWeight: 800, marginBottom: '10px' }}>03</div>
                <h4 style={{ fontSize: '1.15rem', color: 'var(--emerald-900)', marginBottom: '8px' }}>Technology Amplifies Wisdom</h4>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  Ancient pulse diagnostics, seasonal regimens, and formulation science are enriched—not replaced—by data analytics, spectral algorithms, and tele-consultation infrastructure.
                </p>
              </div>
            </div>
          )}

          {activeTab === 'mission_vision' && (
            <div style={{
              background: 'linear-gradient(145deg, var(--forest-deep), var(--emerald-900))',
              borderRadius: 'var(--radius-xl)',
              padding: '48px 36px',
              color: '#ffffff'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
                gap: '36px'
              }}>
                <div style={{ borderLeft: '3px solid var(--gold-400)', paddingLeft: '24px' }}>
                  <div className="section-tag white" style={{ marginBottom: '12px' }}>Core Mandate</div>
                  <h3 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '14px' }}>Our Mission</h3>
                  <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.88)', lineHeight: 1.65 }}>
                    "To make holistic wellness accessible, preventive and technology-enabled."
                  </p>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '12px', lineHeight: 1.6 }}>
                    Democratizing access to certified Ayurvedic doctors, digital dosha analytics, and tailored workplace/school wellness programs.
                  </p>
                </div>

                <div style={{ borderLeft: '3px solid var(--emerald-400)', paddingLeft: '24px' }}>
                  <div className="section-tag white" style={{ marginBottom: '12px' }}>Strategic Horizon</div>
                  <h3 style={{ fontSize: '1.8rem', color: '#ffffff', marginBottom: '14px' }}>Our Vision</h3>
                  <p style={{ fontSize: '1.1rem', color: 'rgba(255, 255, 255, 0.88)', lineHeight: 1.65 }}>
                    "To become a trusted global ecosystem for Ayurveda, preventive healthcare and wellness."
                  </p>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', marginTop: '12px', lineHeight: 1.6 }}>
                    Connecting millions of individuals with accredited practitioners, standardizing formulation intelligence, and proving clinical outcomes through verifiable digital metrics.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'why' && (
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: '24px'
            }}>
              {[
                { title: 'Evidence-Oriented Framework', desc: 'No pseudoscience. We work with peer-reviewed literature, codified classical texts, and measurable biometric telemetry.' },
                { title: 'Institutional Trust', desc: 'Designed to satisfy the highest due-diligence standards required by schools, multi-nationals, medical bodies, and institutional investors.' },
                { title: 'End-to-End Ecosystem', desc: 'From online doctor consultations and Prakriti diagnostics to employee health camps, student screenings, and research innovation.' },
                { title: 'Enterprise Scalability', desc: 'Cloud-native digital records, encrypted tele-health infrastructure, and real-time administrative intelligence.' }
              ].map((item, idx) => (
                <div key={idx} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--emerald-700)', marginBottom: '12px' }}>
                    <CheckCircle size={20} />
                    <h4 style={{ fontSize: '1.1rem', color: 'var(--emerald-900)' }}>{item.title}</h4>
                  </div>
                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .about-hero-grid {
            grid-template-columns: 1.25fr 0.95fr !important;
          }
        }
      `}</style>
    </section>
  );
};
