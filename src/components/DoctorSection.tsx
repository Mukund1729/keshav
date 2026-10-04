import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import {
  Stethoscope,
  Video,
  Users,
  TrendingUp,
  Award,
  Globe,
  CheckCircle2,
  Calendar,
  Clock,
  ArrowRight,
  ShieldCheck,
  FileText
} from 'lucide-react';

export const DoctorSection: React.FC = () => {
  const [, store] = useStore();
  const [teleconsultOnline, setTeleconsultOnline] = useState(true);

  const features = [
    { title: 'Verified Doctor Profile', desc: 'Accredited public profile showcasing credentials, specialization, and clinical experience.', icon: <Award size={20} /> },
    { title: 'HD Online Tele-Consultation', desc: 'HIPAA-compliant, high-definition encrypted video suite with built-in prescription pad.', icon: <Video size={20} /> },
    { title: 'Pan-India Patient Discovery', desc: 'Reach patients across geographies seeking authentic Ayurvedic specialists without clinic boundaries.', icon: <Globe size={20} /> },
    { title: 'Digital Health Records & Prescriptions', desc: 'Issue standardized digital Ayurvedic formulas, lifestyle charts, and follow-up schedules.', icon: <FileText size={20} /> },
    { title: 'Institutional Opportunities', desc: 'Lead corporate wellness workshops, school screening camps, and athletic recovery programs.', icon: <Users size={20} /> },
    { title: 'Practice Growth & Earnings', desc: 'Automated weekly settlements, transparent analytics, and zero administrative friction.', icon: <TrendingUp size={20} /> }
  ];

  return (
    <section id="for-doctors" className="section-padding" style={{ background: 'var(--surface-light)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag gold">Practitioner Ecosystem</div>
          <h2 className="section-title">Grow Your Practice. Expand Your Reach.</h2>
          <p className="section-subtitle">
            Ayunexis empowers certified Ayurveda physicians (BAMS & MD) to build their digital presence, streamline consultations, and connect with institutional wellness opportunities.
          </p>
        </div>

        {/* Main Content Layout: Features on Left, Interactive Dashboard Mockup on Right */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '44px',
          alignItems: 'center'
        }} className="doctor-section-grid">
          
          {/* Left: Practitioner Benefits */}
          <div>
            <div style={{
              background: 'var(--emerald-50)',
              border: '1px solid var(--emerald-100)',
              padding: '14px 20px',
              borderRadius: 'var(--radius-md)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '24px'
            }}>
              <ShieldCheck size={18} color="var(--emerald-700)" />
              <span style={{ fontSize: '0.86rem', color: 'var(--emerald-900)', fontWeight: 600 }}>
                Only for Qualified BAMS / MD (Ayurveda) Practitioners
              </span>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px',
              marginBottom: '36px'
            }}>
              {features.map((f, i) => (
                <div key={i} style={{ display: 'flex', gap: '14px' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'var(--surface-white)',
                    border: '1px solid var(--border-light)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--emerald-700)',
                    flexShrink: 0,
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    {f.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.98rem', color: 'var(--emerald-900)', marginBottom: '4px' }}>{f.title}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '14px' }}>
              <button
                onClick={() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                  store.showToast('Please submit your credentials in the form below.', 'info');
                }}
                className="btn btn-primary btn-lg"
              >
                <span>Join as a Doctor</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => {
                  store.setRole('doctor');
                  store.showToast('Switched to Doctor workspace view', 'success');
                }}
                className="btn btn-secondary btn-lg"
              >
                <Stethoscope size={18} />
                <span>Simulate Doctor Portal</span>
              </button>
            </div>
          </div>

          {/* Right: Interactive Doctor Dashboard Preview / Mockup */}
          <div>
            <div style={{
              background: 'linear-gradient(145deg, #05241b, #02140e)',
              borderRadius: 'var(--radius-xl)',
              padding: '30px',
              color: '#ffffff',
              boxShadow: '0 24px 60px rgba(2, 14, 10, 0.3), 0 0 0 1px rgba(212, 175, 55, 0.25)',
              position: 'relative'
            }}>
              
              {/* Mockup Top Navigation Bar */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingBottom: '20px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                marginBottom: '20px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '50%',
                    background: 'var(--gold-500)',
                    color: '#020e0a',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1rem'
                  }}>
                    DR
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.98rem' }}>Dr. Aarav Nambiar, MD</div>
                    <div style={{ fontSize: '0.74rem', color: '#94a3b8' }}>BAMS, MD (Kayachikitsa) • Reg #AYU-84920</div>
                  </div>
                </div>

                {/* Online Availability Toggle */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>
                    {teleconsultOnline ? 'Accepting Video Consults' : 'Busy / Away'}
                  </span>
                  <button
                    onClick={() => setTeleconsultOnline(!teleconsultOnline)}
                    style={{
                      width: '44px',
                      height: '24px',
                      borderRadius: '12px',
                      background: teleconsultOnline ? '#2ba483' : '#64748b',
                      padding: '2px',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      transition: 'background 0.2s ease'
                    }}
                    title="Toggle tele-consultation availability"
                  >
                    <div style={{
                      width: '20px',
                      height: '20px',
                      borderRadius: '50%',
                      background: '#ffffff',
                      transform: teleconsultOnline ? 'translateX(20px)' : 'translateX(0)',
                      transition: 'transform 0.2s ease'
                    }} />
                  </button>
                </div>
              </div>

              {/* Real-time Practice Telemetry stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                marginBottom: '20px'
              }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '14px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase' }}>Today's Consults</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--gold-400)', marginTop: '4px' }}>8 / 10</div>
                  <div style={{ fontSize: '0.7rem', color: '#4ade80' }}>2 Upcoming</div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '14px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase' }}>Patient Rating</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#38bdf8', marginTop: '4px' }}>4.95 ★</div>
                  <div style={{ fontSize: '0.7rem', color: '#cbd5e1' }}>340 Reviews</div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '14px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', textTransform: 'uppercase' }}>Disbursed Payout</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#4ade80', marginTop: '4px' }}>₹62,400</div>
                  <div style={{ fontSize: '0.7rem', color: '#cbd5e1' }}>Direct Bank Sync</div>
                </div>
              </div>

              {/* Active Patient Queue */}
              <div style={{
                background: 'rgba(0, 0, 0, 0.3)',
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(20, 99, 77, 0.3)',
                marginBottom: '16px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--gold-300)' }}>
                    CURRENT PATIENT QUEUE (TELEHEALTH)
                  </div>
                  <span style={{ fontSize: '0.72rem', color: '#4ade80', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80' }} />
                    WAITING IN LOBBY
                  </span>
                </div>

                <div style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  padding: '12px',
                  borderRadius: 'var(--radius-sm)',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Mukund S. (32y, Male)</div>
                    <div style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '3px' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}><Clock size={12} /> 4:30 PM Slot</span>
                      <span>•</span>
                      <span>Chief Complaint: Gut Dysbiosis & Chronic Fatigue</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      if (store.getState().appointments.length > 0) {
                        store.openTelehealthRoom(store.getState().appointments[0]);
                      } else {
                        store.showToast('Please book an appointment first to launch video room', 'info');
                      }
                    }}
                    style={{
                      background: 'var(--emerald-500)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: 'var(--radius-full)',
                      padding: '8px 14px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '5px'
                    }}
                  >
                    <Video size={13} />
                    <span>Join Room</span>
                  </button>
                </div>
              </div>

              {/* Bottom Clinical Tools Bar */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                fontSize: '0.75rem',
                color: '#94a3b8',
                paddingTop: '8px'
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={13} color="#4ade80" />
                  E-Prescription Pad Ready
                </span>
                <span>ABDM / EHR Compliant Vault</span>
              </div>

            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .doctor-section-grid {
            grid-template-columns: 1.05fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
