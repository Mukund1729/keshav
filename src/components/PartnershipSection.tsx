import React from 'react';
import { useStore } from '../store/useStore';
import { Stethoscope, Building2, Handshake, ArrowRight, ShieldCheck } from 'lucide-react';

export const PartnershipSection: React.FC = () => {
  const [, store] = useStore();

  const handlePartnerClick = (purpose: string) => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    store.showToast(`Selected "${purpose}". Fill in your details below.`, 'info');
  };

  const partnerCards = [
    {
      title: 'For Doctors & Practitioners',
      tagline: 'Join the Ayunexis Clinical Network',
      desc: 'Expand your reach to thousands of patients across India and globally. Access encrypted telehealth infrastructure, digital e-prescriptions, and corporate wellness consulting opportunities.',
      icon: <Stethoscope size={28} />,
      color: '#2ba483',
      ctaText: 'Apply as a Practitioner',
      purposeValue: 'Doctor Partnership'
    },
    {
      title: 'For Educational & Corporate Institutions',
      tagline: 'Build a Preventive Wellness Program',
      desc: 'Deploy customized health screenings, student wellness curricula, executive ergonomic retreats, and corporate wellness days calibrated to your organization’s unique cultural fabric.',
      icon: <Building2 size={28} />,
      color: '#d4af37',
      ctaText: 'Request Institutional Proposal',
      purposeValue: 'Corporate Wellness'
    },
    {
      title: 'For Strategic & Technology Partners',
      tagline: 'Collaborate With Ayunexis',
      desc: 'Partner on biomedical informatics, diagnostic hardware integration, formulation research, health insurance syndication, or investor strategic alliances.',
      icon: <Handshake size={28} />,
      color: '#38bdf8',
      ctaText: 'Initiate Strategic Dialogue',
      purposeValue: 'Investor / Strategic Partnership'
    }
  ];

  return (
    <section id="partnerships" className="section-padding" style={{ background: 'var(--surface-white)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag gold">Collaborative Horizons</div>
          <h2 className="section-title">Let’s Build the Future of Wellness Together</h2>
          <p className="section-subtitle">
            Ayunexis connects doctors, educational institutions, corporate enterprises, and innovation partners into one unified preventive health ecosystem.
          </p>
        </div>

        {/* 3 Partnership Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: '28px',
          marginBottom: '40px'
        }}>
          {partnerCards.map((card, idx) => (
            <div
              key={idx}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: `4px solid ${card.color}`,
                padding: '36px 30px'
              }}
            >
              <div>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-md)',
                  background: `${card.color}15`,
                  color: card.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px'
                }}>
                  {card.icon}
                </div>

                <div style={{ fontSize: '0.8rem', color: card.color, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '6px' }}>
                  {card.tagline}
                </div>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--emerald-900)', marginBottom: '14px' }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                  {card.desc}
                </p>
              </div>

              <button
                onClick={() => handlePartnerClick(card.purposeValue)}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <span>{card.ctaText}</span>
                <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
