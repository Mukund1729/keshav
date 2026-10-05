import React from 'react';
import {
  Cpu,
  Brain,
  Activity,
  BarChart3,
  Smartphone,
  Video,
  ShieldCheck,
  CheckCircle2,
  Lock,
  Layers
} from 'lucide-react';

export const TechnologySection: React.FC = () => {
  const innovationAreas = [
    {
      title: 'AI-Assisted Ayurvedic Health Informatics',
      desc: 'Computational modeling and computer vision exploration bridging classical Ayurvedic diagnostic parameters with modern biomedical indicators.',
      icon: <Brain size={22} />
    },
    {
      title: 'Digital Ayurvedic Knowledge Ontologies',
      desc: 'Structured graph databases codifying classical Charaka, Sushruta and Vagbhata treatises into clean, interoperable clinical decision frameworks.',
      icon: <Cpu size={22} />
    },
    {
      title: 'Prakriti Assessment Algorithms',
      desc: 'Multi-factor quantitative models analyzing phenotypic traits, seasonal variations, and metabolic markers for objective dosha balance scoring.',
      icon: <Activity size={22} />
    },
    {
      title: 'Longitudinal Wellness Analytics',
      desc: 'Secure cloud health analytics tracking preventive biomarkers, school student growth milestones, and corporate vitality indicators over time.',
      icon: <BarChart3 size={22} />
    },
    {
      title: 'Smart Biometric Synchronization',
      desc: 'Cross-referencing consumer wearable biometric streams (sleep stages, HRV, recovery) with Ayurvedic circadian Dinacharya timing.',
      icon: <Smartphone size={22} />
    },
    {
      title: 'Encrypted Telehealth Infrastructure',
      desc: 'Low-latency WebRTC clinical rooms with end-to-end encryption, digital prescription pads, and integrated follow-up care pathways.',
      icon: <Video size={22} />
    }
  ];

  return (
    <section id="innovation" className="section-padding" style={{ background: 'var(--surface-cream)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="ref-eyebrow">RESEARCH & INFORMATICS</div>
          <div className="title-with-underline center">
            <h2 className="section-title" style={{ margin: 0 }}>
              Where Ayurveda Meets Technology
            </h2>
          </div>
          <p className="section-subtitle">
            Ayunexis operates at the intersection of classical health treatises and modern data engineering—transforming qualitative Ayurvedic observations into verifiable, structured intelligence.
          </p>
        </div>

        {/* 6 Technology Focus Areas Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '20px',
          marginBottom: '40px'
        }}>
          {innovationAreas.map((area, idx) => (
            <div key={idx} className="card" style={{ display: 'flex', gap: '16px', padding: '24px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--ayun-emerald-light)',
                color: 'var(--ayun-emerald)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {area.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-headline)', marginBottom: '6px' }}>
                  {area.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.58 }}>
                  {area.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Architectural Standards & ABDM Compliance Banner */}
        <div style={{
          background: 'var(--surface-white)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-xl)',
          padding: '36px',
          boxShadow: 'var(--shadow-card)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          gap: '28px',
          alignItems: 'center'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--ayun-emerald)', fontWeight: 700, fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
              <ShieldCheck size={18} />
              <span>Digital Health Standards & Compliance</span>
            </div>
            <h3 style={{ fontSize: '1.5rem', color: 'var(--text-headline)', marginBottom: '10px' }}>
              Enterprise-Grade Security & Ayurvedic Data Governance
            </h3>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-body)', lineHeight: 1.65 }}>
              All digital workflows on the Ayunexis platform are engineered to comply with statutory Ministry of Ayush Telemedicine guidelines, Digital Personal Data Protection (DPDP) Act, and ISO-27001 healthcare data governance principles.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--surface-cream)', padding: '12px 18px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
              <Lock size={18} color="var(--ayun-emerald)" />
              <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-headline)' }}>256-Bit TLS End-to-End Encrypted Teleconsultation</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--surface-cream)', padding: '12px 18px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
              <CheckCircle2 size={18} color="var(--ayun-emerald)" />
              <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-headline)' }}>DPDP Act 2023 Compliant Patient Consent Architecture</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'var(--surface-cream)', padding: '12px 18px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
              <Layers size={18} color="var(--ayun-emerald)" />
              <span style={{ fontSize: '0.88rem', fontWeight: 600, color: 'var(--text-headline)' }}>ABDM-Ready FHIR Clinical Data Model Integration</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
