import React from 'react';
import { useStore } from './store/useStore';
import { RoleSwitchBar } from './components/RoleSwitchBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { EcosystemCanvas } from './components/EcosystemCanvas';
import { ServicesSection } from './components/ServicesSection';
import { DoctorSection } from './components/DoctorSection';
import { InstitutionSection } from './components/InstitutionSection';
import { SchoolWellnessDeepDive } from './components/SchoolWellnessDeepDive';
import { CorporateWellnessDeepDive } from './components/CorporateWellnessDeepDive';
import { TechnologySection } from './components/TechnologySection';
import { YogaSection } from './components/YogaSection';
import { DoctorDiscovery } from './components/DoctorDiscovery';
import { ImpactStatsSection } from './components/ImpactStatsSection';
import { PartnershipSection } from './components/PartnershipSection';
import { KnowledgeHub } from './components/KnowledgeHub';
import { EventsSection } from './components/EventsSection';
import { CareersSection } from './components/CareersSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { TelehealthRoomModal } from './components/TelehealthRoomModal';
import { PrakritiModal } from './components/PrakritiModal';
import { AdminCmsModal } from './components/AdminCmsModal';
import { CookieConsent } from './components/CookieConsent';
import { MobileBottomDock } from './components/MobileBottomDock';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';

export function App() {
  const [state, store] = useStore();

  return (
    <div className="ayunexis-app">
      {/* Primary Clean Sticky Header */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <AboutSection />
        <EcosystemCanvas />
        <ServicesSection />
        <DoctorSection />
        <InstitutionSection />
        <SchoolWellnessDeepDive />
        <CorporateWellnessDeepDive />
        <TechnologySection />
        <YogaSection />
        <DoctorDiscovery />
        <ImpactStatsSection />
        <PartnershipSection />
        <KnowledgeHub />
        <EventsSection />
        <CareersSection />
        <ContactSection />
      </main>

      {/* Mobile Sticky Navigation Dock */}
      <MobileBottomDock />

      {/* Master Footer */}
      <Footer />

      {/* Dynamic Modals */}
      <BookingModal />
      <TelehealthRoomModal />
      <PrakritiModal />
      <AdminCmsModal />
      <CookieConsent />

      {/* Service Detail Modal */}
      {state.isServiceModalOpen && state.selectedServiceForModal && (
        <div className="modal-overlay" onClick={() => store.setServiceModal(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '20px 24px',
              borderBottom: '1px solid var(--border-light)',
              background: 'var(--surface-light)'
            }}>
              <div>
                <span className="badge badge-emerald" style={{ textTransform: 'capitalize' }}>
                  {state.selectedServiceForModal.category}
                </span>
                <h3 style={{ fontSize: '1.3rem', color: 'var(--emerald-900)', marginTop: '4px' }}>
                  {state.selectedServiceForModal.title}
                </h3>
              </div>

              <button
                onClick={() => store.setServiceModal(null)}
                style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
              >
                <X size={18} />
              </button>
            </div>

            <div style={{ padding: '28px' }}>
              <div style={{ fontSize: '0.86rem', color: 'var(--gold-600)', fontWeight: 600, marginBottom: '14px' }}>
                {state.selectedServiceForModal.tagline}
              </div>

              <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '20px' }}>
                {state.selectedServiceForModal.fullDetails}
              </p>

              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--emerald-900)', textTransform: 'uppercase', marginBottom: '10px' }}>
                  Key Program Deliverables:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {state.selectedServiceForModal.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={15} color="var(--emerald-600)" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button
                  onClick={() => store.setServiceModal(null)}
                  className="btn btn-secondary btn-sm"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const s = state.selectedServiceForModal;
                    store.setServiceModal(null);
                    if (s?.id === 'ayurvedic-consultations') {
                      document.querySelector('#consultation-discovery')?.scrollIntoView({ behavior: 'smooth' });
                    } else if (s?.id === 'prakriti-parikshan') {
                      store.setPrakritiModal(true);
                    } else if (s?.id === 'yoga-wellness') {
                      document.querySelector('#yoga')?.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="btn btn-primary btn-sm"
                >
                  <span>{state.selectedServiceForModal.ctaText}</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Toast Notifications */}
      {state.toastMessage && (
        <div className="toast-container">
          <div className={`toast ${state.toastMessage.type}`}>
            <span>{state.toastMessage.text}</span>
            <button
              onClick={() => store.clearToast()}
              style={{ background: 'none', border: 'none', color: '#94a3b8', cursor: 'pointer', marginLeft: 'auto' }}
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
