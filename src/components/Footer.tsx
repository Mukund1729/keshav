import React from 'react';
import { useStore } from '../store/useStore';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const [, store] = useStore();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      store.showToast(`Displaying policy: ${href}`, 'info');
    }
  };

  return (
    <footer style={{
      background: 'var(--forest-darkest)',
      color: 'rgba(255, 255, 255, 0.8)',
      paddingTop: '80px',
      paddingBottom: '40px',
      borderTop: '1px solid rgba(212, 175, 55, 0.25)',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Main 5-Column Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '40px',
          marginBottom: '56px'
        }}>
          
          {/* Brand Column */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <img
                src="/ayunexis-emblem-white.png"
                alt="Ayunexis Logo"
                style={{
                  width: '38px',
                  height: '38px',
                  objectFit: 'contain',
                  borderRadius: '6px'
                }}
              />
              <div style={{ fontFamily: 'var(--font-editorial)', fontSize: '1.4rem', fontWeight: 700, color: '#ffffff', letterSpacing: '-0.01em' }}>
                Ayunexis
              </div>
            </div>

            <p style={{ fontSize: '0.86rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '16px' }}>
              A modern Ayurveda, preventive healthcare and health-tech ecosystem connecting individuals, doctors, and institutions.
            </p>

            {/* DPIIT Recognition Card */}
            <div style={{
              background: '#ffffff',
              padding: '6px 12px',
              borderRadius: 'var(--radius-sm)',
              display: 'inline-block',
              marginBottom: '14px'
            }}>
              <img
                src="/dpiit.png"
                alt="DPIIT #startupindia Recognition"
                style={{ height: '32px', width: 'auto', objectFit: 'contain' }}
              />
            </div>

            <div style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.6 }}>
              <div style={{ color: 'var(--ayun-gold)', fontWeight: 700, marginBottom: '2px' }}>
                Ayunexis Private Limited
              </div>
              <div><strong>CIN: </strong><span style={{ fontFamily: 'var(--font-mono)' }}>U86900RJ2026PTC146128</span></div>
              <div><strong>DPIIT Recognition: </strong><span style={{ color: '#86efac' }}>DIPPR78967</span></div>
              <div style={{ marginTop: '4px' }}>
                <strong>Office: </strong>Hisar, Haryana, India
              </div>
            </div>
          </div>

          {/* Column 1: Ayunexis */}
          <div>
            <h4 style={{ fontSize: '0.92rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px' }}>
              Ayunexis
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); handleLinkClick('#about'); }} style={{ color: '#cbd5e1' }}>About Us</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); handleLinkClick('#about'); }} style={{ color: '#cbd5e1' }}>Our Mission</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); handleLinkClick('#about'); }} style={{ color: '#cbd5e1' }}>Our Vision</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); handleLinkClick('#about'); }} style={{ color: '#cbd5e1' }}>Leadership & Council</a></li>
            </ul>
          </div>

          {/* Column 2: Services */}
          <div>
            <h4 style={{ fontSize: '0.92rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px' }}>
              Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
              <li><a href="#consultation-discovery" onClick={(e) => { e.preventDefault(); handleLinkClick('#consultation-discovery'); }} style={{ color: '#cbd5e1' }}>Ayurveda Consultation</a></li>
              <li><a href="#yoga" onClick={(e) => { e.preventDefault(); handleLinkClick('#yoga'); }} style={{ color: '#cbd5e1' }}>Yoga Classes</a></li>
              <li><a href="#school-wellness-section" onClick={(e) => { e.preventDefault(); handleLinkClick('#school-wellness-section'); }} style={{ color: '#cbd5e1' }}>School Wellness</a></li>
              <li><a href="#corporate-wellness-section" onClick={(e) => { e.preventDefault(); handleLinkClick('#corporate-wellness-section'); }} style={{ color: '#cbd5e1' }}>Corporate Wellness</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleLinkClick('#services'); }} style={{ color: '#cbd5e1' }}>Sports Wellness</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); handleLinkClick('#services'); }} style={{ color: '#cbd5e1' }}>Health Camps</a></li>
            </ul>
          </div>

          {/* Column 3: For Partners */}
          <div>
            <h4 style={{ fontSize: '0.92rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px' }}>
              For Partners
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
              <li><a href="#for-doctors" onClick={(e) => { e.preventDefault(); handleLinkClick('#for-doctors'); }} style={{ color: '#cbd5e1' }}>Doctors Network</a></li>
              <li><a href="#for-institutions" onClick={(e) => { e.preventDefault(); handleLinkClick('#for-institutions'); }} style={{ color: '#cbd5e1' }}>Schools & Universities</a></li>
              <li><a href="#corporate-wellness-section" onClick={(e) => { e.preventDefault(); handleLinkClick('#corporate-wellness-section'); }} style={{ color: '#cbd5e1' }}>Corporates</a></li>
              <li><a href="#partnerships" onClick={(e) => { e.preventDefault(); handleLinkClick('#partnerships'); }} style={{ color: '#cbd5e1' }}>Strategic Partners</a></li>
            </ul>
          </div>

          {/* Column 4: Resources */}
          <div>
            <h4 style={{ fontSize: '0.92rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px' }}>
              Resources
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
              <li><a href="#resources" onClick={(e) => { e.preventDefault(); handleLinkClick('#resources'); }} style={{ color: '#cbd5e1' }}>Knowledge Hub (Blog)</a></li>
              <li><a href="#events" onClick={(e) => { e.preventDefault(); handleLinkClick('#events'); }} style={{ color: '#cbd5e1' }}>Events & Summits</a></li>
              <li><a href="#careers" onClick={(e) => { e.preventDefault(); handleLinkClick('#careers'); }} style={{ color: '#cbd5e1' }}>Careers & Internships</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); handleLinkClick('#contact'); }} style={{ color: '#cbd5e1' }}>Contact & Support</a></li>
            </ul>
          </div>

          {/* Column 5: Legal */}
          <div>
            <h4 style={{ fontSize: '0.92rem', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '18px' }}>
              Legal & Disclosures
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.85rem' }}>
              <li><a href="#privacy" onClick={(e) => { e.preventDefault(); store.showToast('Displaying Privacy Policy & DPDP Data Protection compliance', 'info'); }} style={{ color: '#cbd5e1' }}>Privacy Policy</a></li>
              <li><a href="#terms" onClick={(e) => { e.preventDefault(); store.showToast('Displaying Terms & Conditions of Telemedicine', 'info'); }} style={{ color: '#cbd5e1' }}>Terms & Conditions</a></li>
              <li><a href="#cookies" onClick={(e) => { e.preventDefault(); store.showToast('Displaying Cookie & Storage Policy', 'info'); }} style={{ color: '#cbd5e1' }}>Cookie Policy</a></li>
              <li><a href="#refund" onClick={(e) => { e.preventDefault(); store.showToast('Displaying Consultation Refund & Rescheduling Policy', 'info'); }} style={{ color: '#cbd5e1' }}>Refund Policy</a></li>
              <li><a href="#disclaimer" onClick={(e) => { e.preventDefault(); store.showToast('Displaying Statutory Medical Disclaimer', 'info'); }} style={{ color: '#cbd5e1' }}>Healthcare Disclaimer</a></li>
            </ul>
          </div>

        </div>

        {/* Statutory Healthcare Disclaimer Notice */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: 'var(--radius-md)',
          padding: '16px 20px',
          fontSize: '0.76rem',
          color: '#94a3b8',
          lineHeight: 1.6,
          marginBottom: '36px'
        }}>
          <strong style={{ color: '#cbd5e1' }}>Statutory Healthcare Disclaimer: </strong>
          Ayunexis Private Limited facilitates tele-consultations between individuals and qualified, independently registered practitioners of Ayurvedic medicine. Telemedicine is not a substitute for physical emergency medical intervention. If you are experiencing acute medical emergencies, please dial your local emergency services immediately. Dietary supplements and formulations discussed on this platform are informed by traditional Ayurvedic treatises; individual responses may vary.
        </div>

        {/* Bottom Tagline & Copyright Bar */}
        <div style={{
          paddingTop: '24px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          fontSize: '0.84rem'
        }}>
          <div>
            <div style={{ fontWeight: 700, color: '#ffffff', letterSpacing: '0.02em', fontSize: '0.96rem' }}>
              Ayunexis — Elevating Your Health at Every Step.
            </div>
            <div style={{ color: '#64748b', fontSize: '0.76rem', marginTop: '3px' }}>
              © {new Date().getFullYear()} Ayunexis Private Limited. All Rights Reserved.
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button
              onClick={scrollToTop}
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.08)',
                color: '#ffffff',
                border: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
              title="Back to Top"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
