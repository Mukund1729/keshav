import React from 'react';
import { Award, MapPin, CheckCircle2, Building, Sparkles } from 'lucide-react';

interface CampSlide {
  id: string;
  img: string;
  title: string;
  subtitle: string;
  tag: string;
  location: string;
}

const CAMP_SLIDES: CampSlide[] = [
  {
    id: 'camp-1',
    img: '/1.png',
    title: 'Individual Pediatric Consultation & Prakriti Screening',
    subtitle: 'Direct one-on-one Ayurvedic physician assessment for school students, focusing on Agni, sleep & cognitive vitality.',
    tag: 'School Health Drive',
    location: 'Hisar, Haryana'
  },
  {
    id: 'camp-2',
    img: '/2.png',
    title: 'Comprehensive Vital Signs & Biometric Diagnostics',
    subtitle: 'Multi-parameter physical examination including digital BP, pulse oximetry, dental hygiene & systemic baseline charting.',
    tag: 'Clinical Screening Fleet',
    location: 'Institutional Camp'
  },
  {
    id: 'camp-3',
    img: '/3.png',
    title: 'Multi-Specialty Physician Council & Pulse Diagnostics',
    subtitle: 'Senior Ayurvedic practitioners and pediatric physicians conducting joint constitutional profiling and health advisory.',
    tag: 'Doctor Consultation Deck',
    location: 'School Wellness Camp'
  },
  {
    id: 'camp-4',
    img: '/4.png',
    title: 'Digital Health Records & Student Prescription Pad',
    subtitle: 'Integrating on-ground clinical findings with Ayunexis digital preventive health analytics and follow-up care pathways.',
    tag: 'Digital Health Continuum',
    location: 'On-Ground Initiative'
  }
];

export const CampTrainMarquee: React.FC = () => {
  // Duplicate array 3 times for a seamless infinite train effect
  const trainItems = [...CAMP_SLIDES, ...CAMP_SLIDES, ...CAMP_SLIDES];

  return (
    <section
      id="government-recognition-and-camps"
      style={{
        background: '#ffffff',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        paddingTop: '36px',
        paddingBottom: '48px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        {/* STATUTORY & DPIIT RECOGNITION CREDIBILITY BANNER AT FRONT */}
        <div
          className="dpiit-recognition-banner"
          style={{
            background: 'linear-gradient(135deg, #062b20 0%, #0d4a38 55%, #145e48 100%)',
            borderRadius: 'var(--radius-xl)',
            padding: '24px 28px',
            color: '#ffffff',
            boxShadow: '0 8px 30px rgba(13, 74, 56, 0.16)',
            marginBottom: '44px',
            position: 'relative',
            border: '1.5px solid rgba(197, 155, 88, 0.45)'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '20px'
            }}
          >
            {/* Left: DPIIT & Startup India Logo Badge */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', flex: '1 1 300px' }}>
              <div
                style={{
                  background: '#ffffff',
                  padding: '8px 14px',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.12)',
                  flexShrink: 0
                }}
              >
                <img
                  src="/dpiit.png"
                  alt="DPIIT #startupindia Recognition"
                  style={{
                    height: '46px',
                    width: 'auto',
                    objectFit: 'contain',
                    display: 'block'
                  }}
                />
              </div>

              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                  <span
                    style={{
                      background: 'rgba(212, 175, 55, 0.22)',
                      border: '1px solid rgba(212, 175, 55, 0.5)',
                      color: 'var(--ayun-gold-light)',
                      padding: '3px 10px',
                      borderRadius: 'var(--radius-full)',
                      fontSize: '0.74rem',
                      fontWeight: 700,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '4px'
                    }}
                  >
                    <Award size={12} />
                    <span>Government of India Recognized Startup</span>
                  </span>
                </div>

                <div
                  style={{
                    fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.01em',
                    color: '#ffffff',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  DPIIT Recognition: <span style={{ color: '#fed7aa', letterSpacing: '0.04em' }}>DIPPR78967</span>
                </div>

                <div style={{ fontSize: '0.82rem', color: '#e2e8f0', marginTop: '2px' }}>
                  Department for Promotion of Industry and Internal Trade • Ministry of Commerce & Industry
                </div>
              </div>
            </div>

            {/* Right: Corporate CIN & Registered Office in Hisar, Haryana */}
            <div
              className="dpiit-cin-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.08)',
                padding: '14px 18px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                flex: '1 1 auto',
                maxWidth: '100%'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Building size={16} color="var(--ayun-gold)" style={{ flexShrink: 0 }} />
                <div style={{ fontSize: '0.82rem', color: '#e2e8f0' }}>
                  <strong style={{ color: '#ffffff' }}>CIN: </strong>
                  <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: '#fef08a', letterSpacing: '0.03em' }}>
                    U86900RJ2026PTC146128
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <MapPin size={16} color="var(--ayun-gold)" style={{ flexShrink: 0 }} />
                <div style={{ fontSize: '0.82rem', color: '#e2e8f0' }}>
                  <strong style={{ color: '#ffffff' }}>Registered Office: </strong>
                  <span>Hisar, Haryana, India</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.74rem', color: '#86efac', marginTop: '2px' }}>
                <CheckCircle2 size={13} />
                <span>Statutory Incorporated Private Limited Company</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION HEADER: ON-GROUND CLINICAL CAMPS FLEET */}
        <div style={{ textAlign: 'center', marginBottom: '28px' }}>
          <div className="ref-eyebrow" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            <Sparkles size={14} />
            <span>REAL CLINICAL EVIDENCE & ON-GROUND IMPACT</span>
          </div>
          <h2
            style={{
              fontSize: 'clamp(1.75rem, 3.2vw, 2.4rem)',
              color: 'var(--ayun-emerald-dark)',
              fontWeight: 800,
              margin: '4px 0 10px 0',
              fontFamily: 'var(--font-heading)'
            }}
          >
            Ayunexis Health & Wellness Camps in Action
          </h2>
          <p
            style={{
              fontSize: '0.98rem',
              color: 'var(--text-muted)',
              maxWidth: '680px',
              margin: '0 auto'
            }}
          >
            Live snapshots from our pediatric health screenings, school checkups, and doctor-led clinical consultation drives across Haryana.
          </p>
        </div>
      </div>

      {/* CONTINUOUS TRAIN-LIKE MOVING PHOTO STRIP (INFINITE MARQUEE) */}
      <div className="train-marquee-container" aria-label="Ayunexis Health Camps Gallery">
        <div className="train-track">
          {trainItems.map((slide, index) => (
            <div key={`${slide.id}-${index}`} className="train-carriage">
              <div className="train-card">
                {/* Photo */}
                <div className="train-img-wrap">
                  <img
                    src={slide.img}
                    alt={slide.title}
                    className="train-img"
                    loading="lazy"
                  />
                  <div className="train-tag-badge">
                    <span className="dot-live" />
                    <span>{slide.tag}</span>
                  </div>
                  <div className="train-location-badge">
                    <MapPin size={12} />
                    <span>{slide.location}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="train-content">
                  <h4 className="train-title">{slide.title}</h4>
                  <p className="train-sub">{slide.subtitle}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER TICKER LABEL */}
      <div className="container" style={{ marginTop: '20px', textAlign: 'center' }}>
        <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>
          ← Hover or touch cards to inspect camp photographs • Continuous live field deployment stream →
        </span>
      </div>

      <style>{`
        .train-marquee-container {
          width: 100%;
          overflow: hidden;
          position: relative;
          padding: 12px 0 16px 0;
          cursor: grab;
          mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%);
        }

        .train-track {
          display: flex;
          gap: 22px;
          width: max-content;
          animation: trainRun 38s linear infinite;
        }

        .train-marquee-container:hover .train-track {
          animation-play-state: paused;
        }

        @keyframes trainRun {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Scroll through one full duplicate set of 4 cards */
            transform: translateX(calc(-1 * (340px + 22px) * 4));
          }
        }

        @media (max-width: 640px) {
          @keyframes trainRun {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-1 * (290px + 16px) * 4));
            }
          }
          .train-track {
            gap: 16px;
            animation-duration: 26s;
          }
        }

        .train-carriage {
          flex: 0 0 340px;
        }

        @media (max-width: 640px) {
          .train-carriage {
            flex: 0 0 290px;
          }
        }

        .train-card {
          background: #ffffff;
          border: 1px solid var(--border-subtle);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 4px 18px rgba(17, 26, 36, 0.06);
          transition: transform 0.28s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.28s cubic-bezier(0.16, 1, 0.3, 1);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .train-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 14px 34px rgba(13, 74, 56, 0.14);
          border-color: var(--ayun-gold);
        }

        .train-img-wrap {
          position: relative;
          height: 220px;
          overflow: hidden;
          background: #061c14;
        }

        @media (max-width: 640px) {
          .train-img-wrap {
            height: 190px;
          }
        }

        .train-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }

        .train-card:hover .train-img {
          transform: scale(1.05);
        }

        .train-tag-badge {
          position: absolute;
          top: 12px;
          left: 12px;
          background: rgba(9, 44, 33, 0.88);
          backdrop-filter: blur(8px);
          color: #ffffff;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 4px 10px;
          border-radius: var(--radius-full);
          display: flex;
          align-items: center;
          gap: 6px;
          border: 1px solid rgba(255, 255, 255, 0.2);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
        }

        .dot-live {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #4ade80;
          box-shadow: 0 0 6px #4ade80;
          display: inline-block;
        }

        .train-location-badge {
          position: absolute;
          bottom: 10px;
          right: 12px;
          background: rgba(0, 0, 0, 0.75);
          backdrop-filter: blur(6px);
          color: #fef08a;
          font-size: 0.7rem;
          font-weight: 600;
          padding: 3px 8px;
          border-radius: var(--radius-sm);
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .train-content {
          padding: 18px 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .train-title {
          font-size: 1.02rem;
          font-weight: 700;
          color: var(--text-headline);
          line-height: 1.35;
          margin-bottom: 8px;
          font-family: var(--font-heading);
        }

        .train-sub {
          font-size: 0.84rem;
          color: var(--text-muted);
          line-height: 1.55;
          margin-top: auto;
        }
      `}</style>
    </section>
  );
};
