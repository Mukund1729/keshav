import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { ServiceItem } from '../types';
import {
  Stethoscope,
  Activity,
  Sun,
  Building2,
  GraduationCap,
  Trophy,
  Users,
  ArrowRight,
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const [state, store] = useStore();
  const [filterCategory, setFilterCategory] = useState<'all' | 'clinical' | 'wellness' | 'institution'>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return <Stethoscope size={24} />;
      case 'Activity': return <Activity size={24} />;
      case 'Sun': return <Sun size={24} />;
      case 'Building2': return <Building2 size={24} />;
      case 'GraduationCap': return <GraduationCap size={24} />;
      case 'Trophy': return <Trophy size={24} />;
      case 'Users': return <Users size={24} />;
      default: return <Sparkles size={24} />;
    }
  };

  const handleCtaClick = (service: ServiceItem) => {
    switch (service.id) {
      case 'ayurvedic-consultations': {
        const el = document.querySelector('#consultation-discovery');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        break;
      }
      case 'prakriti-parikshan':
        store.setPrakritiModal(true);
        break;
      case 'yoga-wellness': {
        const el = document.querySelector('#yoga');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        break;
      }
      case 'corporate-wellness': {
        const el = document.querySelector('#corporate-wellness-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        break;
      }
      case 'school-wellness': {
        const el = document.querySelector('#school-wellness-section');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        break;
      }
      case 'sports-wellness':
      case 'health-camps': {
        const el = document.querySelector('#contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
        store.showToast(`Selected ${service.title}. Please submit your institution enquiry below.`, 'info');
        break;
      }
      default:
        store.setServiceModal(service);
        break;
    }
  };

  const filteredServices = state.services.filter(
    (s) => filterCategory === 'all' || s.category === filterCategory
  );

  return (
    <section id="services" className="section-padding" style={{ background: 'var(--surface-white)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Comprehensive Offerings</div>
          <h2 className="section-title">Evidence-Oriented Wellness Services</h2>
          <p className="section-subtitle">
            Engineered for individuals, educational institutions, enterprise workforces, and athletic organizations.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="tabs-container">
          <button
            onClick={() => setFilterCategory('all')}
            className={`tab-btn ${filterCategory === 'all' ? 'active' : ''}`}
          >
            All Services ({state.services.length})
          </button>
          <button
            onClick={() => setFilterCategory('clinical')}
            className={`tab-btn ${filterCategory === 'clinical' ? 'active' : ''}`}
          >
            Clinical & Consult
          </button>
          <button
            onClick={() => setFilterCategory('wellness')}
            className={`tab-btn ${filterCategory === 'wellness' ? 'active' : ''}`}
          >
            Preventive & Yoga
          </button>
          <button
            onClick={() => setFilterCategory('institution')}
            className={`tab-btn ${filterCategory === 'institution' ? 'active' : ''}`}
          >
            Institutional & Camps
          </button>
        </div>

        {/* Services Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: '28px'
        }}>
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <div>
                {/* Icon & Category Tag */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: 'var(--radius-md)',
                    background: service.category === 'clinical' ? 'var(--emerald-50)' : service.category === 'wellness' ? 'rgba(212, 175, 55, 0.12)' : 'rgba(56, 189, 248, 0.1)',
                    color: service.category === 'clinical' ? 'var(--emerald-700)' : service.category === 'wellness' ? 'var(--gold-600)' : '#0284c7',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    {getIcon(service.icon)}
                  </div>

                  <span className={`badge ${service.category === 'clinical' ? 'badge-emerald' : service.category === 'wellness' ? 'badge-gold' : 'badge-emerald'}`} style={{ textTransform: 'capitalize' }}>
                    {service.category}
                  </span>
                </div>

                {/* Title & Tagline */}
                <h3 style={{ fontSize: '1.35rem', color: 'var(--emerald-900)', marginBottom: '8px' }}>
                  {service.title}
                </h3>
                <div style={{ fontSize: '0.84rem', color: 'var(--gold-600)', fontWeight: 600, marginBottom: '14px' }}>
                  {service.tagline}
                </div>

                <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '20px' }}>
                  {service.description}
                </p>

                {/* Key Highlights list */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                  {service.highlights.slice(0, 3).map((hl, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      <CheckCircle2 size={14} color="var(--emerald-600)" style={{ flexShrink: 0 }} />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{
                paddingTop: '20px',
                borderTop: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <button
                  onClick={() => store.setServiceModal(service)}
                  style={{
                    fontSize: '0.85rem',
                    color: 'var(--text-muted)',
                    fontWeight: 600,
                    textDecoration: 'underline',
                    cursor: 'pointer'
                  }}
                >
                  View Details
                </button>

                <button
                  onClick={() => handleCtaClick(service)}
                  className="btn btn-primary btn-sm"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
