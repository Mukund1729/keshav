import React, { useState } from 'react';
import { User, Stethoscope, Building2, Cpu, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface PillarData {
  id: 'individuals' | 'doctors' | 'institutions' | 'technology';
  title: string;
  badge: string;
  desc: string;
  deliverables: string[];
  metrics: string;
}

export const EcosystemCanvas: React.FC = () => {
  const [activePillar, setActivePillar] = useState<'individuals' | 'doctors' | 'institutions' | 'technology'>('individuals');

  const pillars: Record<'individuals' | 'doctors' | 'institutions' | 'technology', PillarData> = {
    individuals: {
      id: 'individuals',
      title: 'Individuals & Families',
      badge: 'Preventive Care',
      desc: 'Connecting wellness seekers directly with qualified practitioners, constitutional assessments, and therapeutic routines.',
      deliverables: [
        'Personalized Ayurvedic doctor consultations via encrypted video',
        'Prakriti Parikshan (constitutional assessment and dosha profiling)',
        'Circadian lifestyle regimens (Dinacharya and Ritucharya protocols)',
        'Guided therapeutic yoga and stress resilience programs'
      ],
      metrics: '85,000+ Consultations Completed'
    },
    doctors: {
      id: 'doctors',
      title: 'Practitioners & Clinicians',
      badge: 'Physician Network',
      desc: 'Empowering BAMS and MD physicians with accredited digital profiles, institutional consulting, and modern practice tools.',
      deliverables: [
        'Accredited digital profile and verified clinical credentialing',
        'High-definition tele-consultation suite with standardized e-prescriptions',
        'Cross-referral network for specialized panchakarma and rasayana care',
        'Opportunities to lead corporate wellness retreats and school health camps'
      ],
      metrics: '120+ Vetted Specialists Active'
    },
    institutions: {
      id: 'institutions',
      title: 'Schools & Corporates',
      badge: 'Enterprise & Education',
      desc: 'Deploying structured preventive healthcare frameworks, student health screenings, and employee vitality initiatives.',
      deliverables: [
        'School wellness programs with comprehensive 10-point pediatric checkups',
        'Workplace ergonomics, cervical spine resets, and desk-bound mobility',
        'On-premise preventive diagnostic health camps and vitals screening',
        'Executive stress-mitigation workshops and aggregate health reporting'
      ],
      metrics: '48+ Partner Campuses'
    },
    technology: {
      id: 'technology',
      title: 'Technology & Health Informatics',
      badge: 'Digital Architecture',
      desc: 'Building modern computational foundations to digitize classical diagnostics, record keeping, and pre-clinical formulation analysis.',
      deliverables: [
        'Pre-clinical formulation research and computational health analytics',
        'Algorithmic dosha scoring models based on Charaka Samhita parameters',
        'ABDM-ready architectural pipelines for seamless electronic health records',
        'Encrypted, low-latency telehealth rooms with digital prescription pad'
      ],
      metrics: '99.98% Platform Uptime'
    }
  };

  const active = pillars[activePillar];

  return (
    <section id="ecosystem" className="section-padding" style={{ background: 'var(--surface-white)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="ref-eyebrow">INTEGRATED HEALTH PLATFORM</div>
          <div className="title-with-underline center">
            <h2 className="section-title" style={{ margin: 0 }}>
              The Ayunexis Ecosystem
            </h2>
          </div>
          <p className="section-subtitle">
            Ayunexis serves as the central nexus connecting individuals, verified doctors, institutions, and health technology into one unified continuum of care.
          </p>
        </div>

        {/* Ecosystem Network Visual (Clean, Dignified, Editorial Hub — Not Gaming Neon) */}
        <div style={{
          background: 'var(--surface-cream)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-xl)',
          padding: '40px 32px',
          marginBottom: '36px',
          boxShadow: 'var(--shadow-subtle)'
        }}>
          {/* Central Logo Hub & 4 Pillars Connected */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
            alignItems: 'center',
            marginBottom: '32px'
          }}>
            {/* Center Brand Capsule */}
            <div style={{
              gridColumn: '1 / -1',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px 20px',
              background: 'var(--surface-white)',
              border: '1.5px solid var(--ayun-gold)',
              borderRadius: 'var(--radius-lg)',
              maxWidth: '480px',
              margin: '0 auto 20px auto',
              boxShadow: 'var(--shadow-card)',
              textAlign: 'center'
            }}>
              <img
                src="/image.png"
                alt="Ayunexis Core Logo"
                style={{ width: '56px', height: '56px', objectFit: 'contain', marginBottom: '8px' }}
              />
              <div style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.4rem', fontWeight: 700, color: 'var(--ayun-emerald)' }}>
                Ayunexis Core Nexus
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                Ayurveda • Preventive Healthcare • Technology
              </div>
            </div>

            {/* 4 Connected Nodes */}
            {(['individuals', 'doctors', 'institutions', 'technology'] as const).map((id) => (
              <button
                key={id}
                onClick={() => setActivePillar(id)}
                style={{
                  background: activePillar === id ? 'var(--surface-white)' : 'rgba(255, 255, 255, 0.6)',
                  border: activePillar === id ? '2px solid var(--ayun-gold-deep)' : '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '18px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: activePillar === id ? 'var(--shadow-card)' : 'none'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--ayun-gold-deep)', textTransform: 'uppercase' }}>
                    {pillars[id].badge}
                  </span>
                  {activePillar === id && (
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--ayun-emerald)' }} />
                  )}
                </div>
                <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-headline)', marginBottom: '4px' }}>
                  {pillars[id].title}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  {pillars[id].metrics}
                </div>
              </button>
            ))}
          </div>

          {/* Active Pillar Inspector Box (Reference dot-card style) */}
          <div style={{
            background: 'var(--surface-white)',
            borderRadius: 'var(--radius-lg)',
            padding: '32px',
            border: '1px solid var(--border-subtle)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
              <div>
                <span className="badge badge-gold" style={{ marginBottom: '6px' }}>
                  {active.badge} Pillar
                </span>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--text-headline)', margin: 0 }}>
                  {active.title}
                </h3>
              </div>

              <div style={{ fontSize: '0.85rem', color: 'var(--ayun-emerald)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <ShieldCheck size={16} />
                <span>{active.metrics}</span>
              </div>
            </div>

            <p style={{ fontSize: '0.98rem', color: 'var(--text-body)', lineHeight: 1.68, marginBottom: '24px' }}>
              {active.desc}
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '12px',
              marginBottom: '24px'
            }}>
              {active.deliverables.map((item, i) => (
                <div key={i} className="ref-dot-card" style={{ padding: '14px 18px' }}>
                  <div className="ref-dot-icon">
                    <div className="ref-dot-inner" />
                  </div>
                  <div style={{ fontSize: '0.88rem', color: 'var(--text-body)', lineHeight: 1.5 }}>
                    {item}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <a
                href={`#${activePillar === 'doctors' ? 'for-doctors' : activePillar === 'institutions' ? 'for-institutions' : activePillar === 'technology' ? 'innovation' : 'services'}`}
                className="btn btn-primary btn-sm"
              >
                <span>Learn More About {active.title}</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
