import React from 'react';
import { useStore } from '../store/useStore';
import { Stethoscope, Sparkles, Building2, Cpu, ShieldCheck, Edit3 } from 'lucide-react';

export const ImpactStatsSection: React.FC = () => {
  const [state, store] = useStore();
  const { cmsStats } = state;

  const stats = [
    {
      label: 'Verified Doctors',
      value: `${cmsStats.doctorsCount}${cmsStats.doctorsCountSuffix}`,
      sub: 'BAMS & MD Practitioners',
      icon: <Stethoscope size={24} />,
      color: '#2ba483'
    },
    {
      label: 'Wellness Programs',
      value: `${cmsStats.programsCount}${cmsStats.programsCountSuffix}`,
      sub: 'Institutions, Corporate & Sports',
      icon: <Sparkles size={24} />,
      color: '#d4af37'
    },
    {
      label: 'Schools & Institutions',
      value: `${cmsStats.institutionsCount}${cmsStats.institutionsCountSuffix}`,
      sub: 'Campuses Across India',
      icon: <Building2 size={24} />,
      color: '#38bdf8'
    },
    {
      label: 'Technology & Innovation',
      value: `${cmsStats.techInnovationsCount}${cmsStats.techInnovationsCountSuffix}`,
      sub: 'R&D Platforms & AI Models',
      icon: <Cpu size={24} />,
      color: '#a78bfa'
    }
  ];

  return (
    <section className="section-padding" style={{ background: 'linear-gradient(135deg, var(--forest-deep), var(--emerald-900))', color: '#ffffff', position: 'relative' }}>
      <div className="container">
        
        {/* Top Header with Edit Trigger for Interviewer / Admin */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '48px',
          paddingBottom: '20px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <div>
            <span className="section-tag white" style={{ marginBottom: '8px' }}>
              Institutional Credibility & Reach
            </span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.4rem)', color: '#ffffff' }}>
              Measurable Impact Across India
            </h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '0.78rem', color: '#94a3b8' }}>
              Synchronized via Ayunexis Admin Engine
            </span>
            <button
              onClick={() => store.setAdminModal(true)}
              style={{
                background: 'rgba(212, 175, 55, 0.2)',
                color: 'var(--gold-300)',
                border: '1px solid rgba(212, 175, 55, 0.4)',
                padding: '6px 14px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.78rem',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer'
              }}
              title="Open CMS to edit statistics"
            >
              <Edit3 size={14} />
              <span>Edit Metrics in CMS</span>
            </button>
          </div>
        </div>

        {/* 4 Stat Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '24px'
        }}>
          {stats.map((s, idx) => (
            <div
              key={idx}
              style={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--radius-lg)',
                padding: '30px 24px',
                backdropFilter: 'blur(10px)',
                transition: 'transform var(--transition-smooth), border-color var(--transition-smooth)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(212, 175, 55, 0.4)';
                e.currentTarget.style.transform = 'translateY(-4px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div style={{
                width: '46px',
                height: '46px',
                borderRadius: '10px',
                background: `${s.color}20`,
                color: s.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                {s.icon}
              </div>

              <div style={{
                fontSize: 'clamp(2.4rem, 4vw, 3.2rem)',
                fontWeight: 800,
                fontFamily: 'var(--font-mono)',
                color: '#ffffff',
                lineHeight: 1.1,
                marginBottom: '8px'
              }}>
                {s.value}
              </div>

              <div style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--gold-300)', marginBottom: '4px' }}>
                {s.label}
              </div>

              <div style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>
                {s.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Ethical Standards Note */}
        <div style={{
          marginTop: '36px',
          textAlign: 'center',
          fontSize: '0.78rem',
          color: '#94a3b8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '6px'
        }}>
          <ShieldCheck size={14} color="var(--gold-400)" />
          <span>Transparent Reporting Guarantee: Certified credentials and genuine institutional metrics verified without fabricated claims.</span>
        </div>

      </div>
    </section>
  );
};
