import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { SCHOOL_COMPONENTS } from '../data/initialData';
import {
  GraduationCap,
  HeartPulse,
  TrendingUp,
  Eye,
  Smile,
  Apple,
  Compass,
  Wind,
  Brain,
  BookOpen,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ClipboardCheck,
  FileSpreadsheet
} from 'lucide-react';

export const SchoolWellnessDeepDive: React.FC = () => {
  const [, store] = useStore();
  const [activeStep, setActiveStep] = useState(0);

  const journeySteps = [
    {
      stage: '01. Screen',
      title: 'Pediatric Health Screening',
      desc: 'Certified medical doctors screen every student on-premise across 10 vital physiological, ocular, dental, and postural dimensions.',
      deliverable: 'Baseline Student Health Record'
    },
    {
      stage: '02. Assess',
      title: 'Clinical Data Analytics',
      desc: 'Our health informatics engine identifies developmental trends, nutritional gaps, posture irregularities, and visual strain patterns.',
      deliverable: 'Confidential Parent Report & School Health Matrix'
    },
    {
      stage: '03. Educate',
      title: 'Interactive Wellness Workshops',
      desc: 'Engaging, fun student sessions teaching Dinacharya (biological clock), balanced nutrition, mindfulness, and desk ergonomics.',
      deliverable: 'Student Wellness Handbooks & Teacher Guides'
    },
    {
      stage: '04. Improve',
      title: 'Yoga & Targeted Interventions',
      desc: 'Age-calibrated asanas, breathwork for exam anxiety, and guided parent counseling for students needing corrective care.',
      deliverable: 'Weekly Micro-Yoga Flows & Corrective Exercises'
    },
    {
      stage: '05. Track',
      title: 'Longitudinal Growth Telemetry',
      desc: 'Year-over-year biometric tracking allowing educators and parents to quantify physical stamina, visual stability, and focus.',
      deliverable: 'Annual Institutional Health Audit'
    }
  ];

  const getComponentIcon = (iconName: string) => {
    switch (iconName) {
      case 'HeartPulse': return <HeartPulse size={20} />;
      case 'TrendingUp': return <TrendingUp size={20} />;
      case 'Eye': return <Eye size={20} />;
      case 'Smile': return <Smile size={20} />;
      case 'Apple': return <Apple size={20} />;
      case 'Compass': return <Compass size={20} />;
      case 'Wind': return <Wind size={20} />;
      case 'Brain': return <Brain size={20} />;
      case 'BookOpen': return <BookOpen size={20} />;
      case 'Sparkles': return <Sparkles size={20} />;
      default: return <GraduationCap size={20} />;
    }
  };

  const handleRequestSchool = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    store.showToast('Please specify student strength and campus location in the form below.', 'info');
  };

  return (
    <section id="school-wellness-section" className="section-padding" style={{ background: 'var(--surface-light)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Dedicated K-12 Program</div>
          <h2 className="section-title">Building Healthier Schools, One Student at a Time</h2>
          <p className="section-subtitle">
            A comprehensive, technology-enabled preventive wellness architecture engineered specifically for primary and secondary educational institutions.
          </p>
        </div>

        {/* The 5-Stage Program Journey Stepper */}
        <div style={{
          background: 'var(--surface-white)',
          borderRadius: 'var(--radius-xl)',
          padding: '36px',
          border: '1px solid var(--border-card)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '56px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
            <div>
              <div style={{ fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--gold-600)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                Systematic Institutional Workflow
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--emerald-900)', marginTop: '4px' }}>
                The 5-Stage School Wellness Journey
              </h3>
            </div>

            <div style={{ display: 'flex', gap: '8px' }}>
              {journeySteps.map((step, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  style={{
                    padding: '6px 12px',
                    borderRadius: 'var(--radius-full)',
                    fontSize: '0.78rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    background: activeStep === idx ? 'var(--emerald-700)' : 'var(--surface-subtle)',
                    color: activeStep === idx ? '#ffffff' : 'var(--text-muted)',
                    border: 'none',
                    transition: 'all var(--transition-snappy)'
                  }}
                >
                  {step.stage.split(' ')[1]}
                </button>
              ))}
            </div>
          </div>

          {/* Active Journey Stage Card */}
          <div style={{
            background: 'linear-gradient(135deg, var(--emerald-50), rgba(212, 175, 55, 0.08))',
            borderRadius: 'var(--radius-lg)',
            padding: '28px',
            border: '1px solid rgba(15, 76, 58, 0.15)',
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '24px',
            alignItems: 'center'
          }} className="journey-stage-grid">
            <div>
              <span className="badge badge-emerald" style={{ marginBottom: '10px' }}>
                Stage {journeySteps[activeStep].stage}
              </span>
              <h4 style={{ fontSize: '1.4rem', color: 'var(--emerald-900)', marginBottom: '8px' }}>
                {journeySteps[activeStep].title}
              </h4>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '16px' }}>
                {journeySteps[activeStep].desc}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--emerald-800)', fontWeight: 600 }}>
                <ClipboardCheck size={16} />
                <span>Primary Deliverable: {journeySteps[activeStep].deliverable}</span>
              </div>
            </div>

            <div style={{
              background: 'var(--surface-white)',
              borderRadius: 'var(--radius-md)',
              padding: '20px',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
                Journey Progression
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '4px', marginBottom: '12px' }}>
                {journeySteps.map((s, i) => (
                  <div key={i} style={{ flex: 1, textAlign: 'center' }}>
                    <div style={{
                      height: '6px',
                      borderRadius: '3px',
                      background: i <= activeStep ? 'var(--emerald-600)' : 'var(--border-light)',
                      marginBottom: '6px'
                    }} />
                    <span style={{ fontSize: '0.68rem', color: i === activeStep ? 'var(--emerald-800)' : 'var(--text-muted)', fontWeight: i === activeStep ? 800 : 500 }}>
                      {s.stage.split(' ')[1]}
                    </span>
                  </div>
                ))}
              </div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Audited by certified BAMS physicians and pediatric allied healthcare consultants.
              </p>
            </div>
          </div>
        </div>

        {/* 10 Program Components Grid */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--emerald-900)', marginBottom: '8px' }}>
              10 Fundamental Program Components
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
              A full-spectrum health curriculum covering physical, ocular, dental, and psychological vitality.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '18px'
          }}>
            {SCHOOL_COMPONENTS.map((comp, idx) => (
              <div
                key={idx}
                className="card"
                style={{
                  padding: '20px',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '8px',
                    background: 'var(--emerald-50)',
                    color: 'var(--emerald-700)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '14px'
                  }}>
                    {getComponentIcon(comp.icon)}
                  </div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--emerald-900)', marginBottom: '6px' }}>
                    {comp.title}
                  </h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: 1.55 }}>
                    {comp.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Request Program CTA Bar */}
        <div style={{
          textAlign: 'center',
          background: 'var(--surface-white)',
          padding: '36px',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--border-card)',
          boxShadow: 'var(--shadow-sm)'
        }}>
          <h3 style={{ fontSize: '1.45rem', color: 'var(--emerald-900)', marginBottom: '10px' }}>
            Empower Your School with Ayunexis Preventive Wellness
          </h3>
          <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', maxWidth: '620px', margin: '0 auto 24px auto' }}>
            We work with CBSE, ICSE, and International Baccalaureate schools. Contact our institutional health directors for a campus assessment proposal.
          </p>
          <button
            onClick={handleRequestSchool}
            className="btn btn-primary btn-lg"
            id="request-school-program-btn"
          >
            <span>Request School Program</span>
            <ArrowRight size={18} />
          </button>
        </div>

      </div>

      <style>{`
        @media (min-width: 860px) {
          .journey-stage-grid {
            grid-template-columns: 1.4fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
};
