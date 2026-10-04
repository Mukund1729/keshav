import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import {
  Building2,
  Users,
  CheckCircle2,
  TrendingDown,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Activity,
  HeartPulse,
  Brain,
  Coffee,
  Sun
} from 'lucide-react';

export const CorporateWellnessDeepDive: React.FC = () => {
  const [, store] = useStore();
  const [employeeCount, setEmployeeCount] = useState<number>(250);

  // Dynamic ROI calculation
  const calculatedSickDaysSaved = Math.round(employeeCount * 2.4);
  const estimatedProductivityHours = Math.round(employeeCount * 36);

  const corporateModules = [
    { title: 'Ayurveda Wellness Sessions', desc: 'Interactive keynotes on circadian metabolism, Agni balance, and herbal adaptogens for cognitive stamina.', icon: <Sparkles size={20} /> },
    { title: 'Corporate Yoga & Movement', desc: 'Desk-friendly micro-stretches, cervical spine alignment, and posture restoration flows.', icon: <Sun size={20} /> },
    { title: 'Stress-Management & Burnout Resets', desc: 'Pranayama breathing techniques, mental resilience masterclasses, and digital detox protocols.', icon: <Brain size={20} /> },
    { title: 'Preventive Health Camps', desc: 'On-site biometric vitals check, non-invasive pulse diagnosis, and private doctor consultations.', icon: <HeartPulse size={20} /> },
    { title: 'Nutrition & Gut Health Awareness', desc: 'Cafeteria nutrition audits, healthy snacking guidance, and gut-microbiome dietary principles.', icon: <Coffee size={20} /> },
    { title: 'Health Screening & Analytics', desc: 'Confidential employee health surveys yielding aggregated anonymized health risk reports for HR leaders.', icon: <Activity size={20} /> },
    { title: 'Customized Corporate Wellness Programs', desc: 'Hybrid quarterly roadmaps designed around enterprise shift timings, remote workers, and executive pods.', icon: <Building2 size={20} /> }
  ];

  const handleBookCorporate = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    store.showToast(`Selected Corporate Wellness for ~${employeeCount} employees. Fill details below.`, 'info');
  };

  return (
    <section id="corporate-wellness-section" className="section-padding" style={{ background: 'var(--surface-white)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag gold">Enterprise Healthcare</div>
          <h2 className="section-title">Healthy Employees. Stronger Organizations.</h2>
          <p className="section-subtitle">
            Combating chronic burnout, musculoskeletal strain, and lifestyle fatigue through measurable, evidence-guided Ayurvedic and preventive workplace programs.
          </p>
        </div>

        {/* 2-Column: Modules & Interactive ROI Estimator */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          alignItems: 'flex-start',
          marginBottom: '48px'
        }} className="corporate-grid">
          
          {/* Left Column: 7 Modules List */}
          <div>
            <h3 style={{ fontSize: '1.45rem', color: 'var(--emerald-900)', marginBottom: '20px' }}>
              Core Enterprise Modules
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '14px' }}>
              {corporateModules.map((mod, i) => (
                <div
                  key={i}
                  style={{
                    background: 'var(--surface-light)',
                    padding: '16px 20px',
                    borderRadius: 'var(--radius-md)',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px'
                  }}
                >
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'var(--emerald-50)',
                    color: 'var(--emerald-700)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    {mod.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', color: 'var(--emerald-900)', marginBottom: '3px' }}>
                      {mod.title}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {mod.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Impact & ROI Estimator */}
          <div>
            <div style={{
              background: 'linear-gradient(145deg, var(--forest-deep), var(--emerald-900))',
              borderRadius: 'var(--radius-xl)',
              padding: '36px',
              color: '#ffffff',
              boxShadow: 'var(--shadow-lg), 0 0 0 1px rgba(212, 175, 55, 0.25)',
              position: 'sticky',
              top: '100px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gold-400)', fontSize: '0.82rem', fontWeight: 700, marginBottom: '6px' }}>
                <ShieldCheck size={16} />
                ENTERPRISE HEALTH IMPACT CALCULATOR
              </div>
              <h3 style={{ fontSize: '1.4rem', color: '#ffffff', marginBottom: '8px' }}>
                Quantify Your Workforce Wellness ROI
              </h3>
              <p style={{ fontSize: '0.88rem', color: '#cbd5e1', marginBottom: '24px' }}>
                Move the slider to estimate preventive wellness outcomes for your team strength.
              </p>

              {/* Slider Component */}
              <div style={{ marginBottom: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontSize: '0.85rem', color: '#94a3b8' }}>Workforce Size:</span>
                  <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--gold-300)', fontFamily: 'var(--font-mono)' }}>
                    {employeeCount} Employees
                  </span>
                </div>
                <input
                  type="range"
                  min="25"
                  max="2000"
                  step="25"
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(Number(e.target.value))}
                  style={{
                    width: '100%',
                    height: '6px',
                    borderRadius: '3px',
                    background: 'rgba(255, 255, 255, 0.2)',
                    outline: 'none',
                    accentColor: 'var(--gold-400)',
                    cursor: 'pointer'
                  }}
                  id="corporate-employee-slider"
                />
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.72rem', color: '#94a3b8', marginTop: '6px' }}>
                  <span>25 (Startups)</span>
                  <span>500 (Mid-Market)</span>
                  <span>2,000+ (Enterprises)</span>
                </div>
              </div>

              {/* Calculated Outputs */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '14px',
                marginBottom: '26px'
              }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.06)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase' }}>Est. Sick Days Saved / Yr</div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#4ade80', marginTop: '4px', fontFamily: 'var(--font-mono)' }}>
                    ~{calculatedSickDaysSaved} days
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#cbd5e1', marginTop: '2px' }}>via preventive screening</div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.06)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase' }}>Focus Hours Reclaimed</div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--gold-300)', marginTop: '4px', fontFamily: 'var(--font-mono)' }}>
                    +{estimatedProductivityHours} hrs
                  </div>
                  <div style={{ fontSize: '0.72rem', color: '#cbd5e1', marginTop: '2px' }}>reduced afternoon brain-fog</div>
                </div>
              </div>

              {/* Package Recommendation */}
              <div style={{
                background: 'rgba(0, 0, 0, 0.25)',
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                marginBottom: '24px',
                border: '1px solid rgba(212, 175, 55, 0.2)'
              }}>
                <div style={{ fontSize: '0.76rem', color: 'var(--gold-300)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px' }}>
                  Recommended Blueprint:
                </div>
                <div style={{ fontWeight: 600, fontSize: '0.92rem' }}>
                  {employeeCount < 100
                    ? 'Growth Pod: Monthly ergonomics + virtual yoga + quarterly health camp'
                    : employeeCount < 500
                    ? 'Enterprise Tier: Bi-weekly yoga + on-site doctor stations + digital Prakriti audit'
                    : 'Global Enterprise: Dedicated Ayurvedic physician pods + full executive screening & analytics'}
                </div>
              </div>

              <button
                onClick={handleBookCorporate}
                className="btn btn-gold btn-lg"
                style={{ width: '100%' }}
                id="book-corporate-wellness-btn"
              >
                <span>Book a Corporate Wellness Program</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .corporate-grid {
            grid-template-columns: 1.15fr 0.95fr !important;
          }
        }
      `}</style>
    </section>
  );
};
