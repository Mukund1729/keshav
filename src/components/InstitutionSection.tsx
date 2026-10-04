import React from 'react';
import { useStore } from '../store/useStore';
import { GraduationCap, Building2, Trophy, Sun, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const InstitutionSection: React.FC = () => {
  const [, store] = useStore();

  const institutionalCards = [
    {
      id: 'schools',
      title: 'Schools & Educational Institutions',
      category: 'K-12 & Higher Ed',
      tagline: 'Preventive health + wellness programs for students and faculty.',
      icon: <GraduationCap size={28} />,
      color: '#2ba483',
      deliverables: [
        '10-point student biometric, vision & posture screening',
        'Confidential developmental health report for parents',
        'Age-appropriate mindfulness and Dinacharya sessions',
        'Teacher & staff burnout mitigation workshops'
      ],
      deepDiveAnchor: '#school-wellness-section',
      actionText: 'Explore School Journey'
    },
    {
      id: 'corporates',
      title: 'Corporates & Enterprises',
      category: 'Workplace Wellness',
      tagline: 'Employee wellness, stress mitigation, and on-premise health camps.',
      icon: <Building2 size={28} />,
      color: '#d4af37',
      deliverables: [
        'Desk posture and tech-neck ergonomic masterclasses',
        'Ayurvedic circadian nutrition and sleep optimization',
        'On-site doctor consultation stations & pulse diagnosis',
        'Executive wellness dashboard & aggregate health indices'
      ],
      deepDiveAnchor: '#corporate-wellness-section',
      actionText: 'View Corporate Models'
    },
    {
      id: 'sports',
      title: 'Sports Organizations & Academies',
      category: 'Athletic High Performance',
      tagline: 'Athlete wellness and natural recovery-oriented programs.',
      icon: <Trophy size={28} />,
      color: '#38bdf8',
      deliverables: [
        'Marma-point musculoskeletal recovery therapies',
        'Natural adaptogenic profiling without prohibited substances',
        'Joint conditioning and connective tissue longevity',
        'Post-tournament mental decompression protocols'
      ],
      deepDiveAnchor: '#contact',
      actionText: 'Inquire for Athletes'
    },
    {
      id: 'centers',
      title: 'Yoga & Wellness Centers',
      category: 'Affiliated Hubs',
      tagline: 'Technology and practitioner ecosystem integration.',
      icon: <Sun size={28} />,
      color: '#a78bfa',
      deliverables: [
        'Integration with Ayunexis telehealth & doctor network',
        'Prakriti assessment kiosk deployment at local studio',
        'Curated herbal product verification & dispensary support',
        'Hybrid in-studio and virtual batch streaming platform'
      ],
      deepDiveAnchor: '#contact',
      actionText: 'Become Affiliated Center'
    }
  ];

  const handleInstitutionalPartnerCta = () => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    store.showToast('Please specify your institution type in the enquiry form.', 'info');
  };

  return (
    <section id="for-institutions" className="section-padding" style={{ background: 'var(--surface-white)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Institutional Solutions</div>
          <h2 className="section-title">Wellness Programs Built for Institutions</h2>
          <p className="section-subtitle">
            Scalable, structured, and auditable preventive healthcare architecture for schools, multinational companies, athletic fraternities, and wellness centers.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '28px',
          marginBottom: '48px'
        }}>
          {institutionalCards.map((card) => (
            <div
              key={card.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: `4px solid ${card.color}`
              }}
            >
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '18px'
                }}>
                  <div style={{
                    width: '54px',
                    height: '54px',
                    borderRadius: 'var(--radius-md)',
                    background: `${card.color}15`,
                    color: card.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {card.icon}
                  </div>
                  <span className="badge" style={{ background: 'var(--surface-light)', color: 'var(--text-muted)' }}>
                    {card.category}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: 'var(--emerald-900)', marginBottom: '8px' }}>
                  {card.title}
                </h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '20px', lineHeight: 1.55 }}>
                  {card.tagline}
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  {card.deliverables.map((del, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      <CheckCircle2 size={13} color="var(--emerald-600)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-light)' }}>
                <a
                  href={card.deepDiveAnchor}
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.querySelector(card.deepDiveAnchor);
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    else handleInstitutionalPartnerCta();
                  }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.88rem',
                    fontWeight: 700,
                    color: 'var(--emerald-700)',
                    cursor: 'pointer'
                  }}
                >
                  <span>{card.actionText}</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Global Institutional CTA Banner */}
        <div style={{
          background: 'linear-gradient(135deg, var(--forest-deep), var(--emerald-900))',
          borderRadius: 'var(--radius-xl)',
          padding: '36px 40px',
          color: '#ffffff',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          border: '1px solid rgba(212, 175, 55, 0.25)'
        }}>
          <div style={{ maxWidth: '680px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gold-400)', fontSize: '0.84rem', fontWeight: 700, marginBottom: '8px' }}>
              <ShieldCheck size={16} />
              ACCREDITED INSTITUTIONAL ONBOARDING
            </div>
            <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '8px' }}>
              Bring Ayunexis Preventive Healthcare to Your Campus
            </h3>
            <p style={{ color: 'rgba(255, 255, 255, 0.82)', fontSize: '0.95rem', lineHeight: 1.55 }}>
              From pilot health screenings to year-round wellness curricula, we partner with management teams to design customized, budget-conscious packages.
            </p>
          </div>

          <button
            onClick={handleInstitutionalPartnerCta}
            className="btn btn-gold btn-lg"
          >
            <span>Become an Institutional Partner</span>
            <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
};
