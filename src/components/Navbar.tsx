import React, { useState, useEffect } from 'react';
import { useStore } from '../store/useStore';
import { AyunexisLogo } from './AyunexisLogo';
import { Menu, X, ArrowUpRight, Activity } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [, store] = useStore();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'For Doctors', href: '#for-doctors' },
    { label: 'For Institutions', href: '#for-institutions' },
    { label: 'Innovation', href: '#innovation' },
    { label: 'Resources', href: '#resources' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`header-sticky ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 'var(--header-height)', gap: '16px' }}>
        
        {/* Brand Logo */}
        <a
          href="#home"
          style={{ display: 'flex', alignItems: 'center', flexShrink: 0, textDecoration: 'none' }}
          onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
        >
          <AyunexisLogo size={36} textColor="#0d4a38" subtextColor="#64748b" />
        </a>

        {/* Desktop Navigation */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '22px', marginLeft: '24px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              style={{
                fontSize: '0.9rem',
                fontWeight: 600,
                color: 'var(--text-body)',
                transition: 'color var(--transition-smooth)',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--ayun-emerald)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-body)')}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Group */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
          
          {/* Prakriti Quick Test */}
          <button
            onClick={() => store.setPrakritiModal(true)}
            className="btn btn-secondary btn-sm"
            style={{
              display: 'none',
              padding: '7px 14px',
              fontSize: '0.82rem',
              borderColor: 'var(--ayun-gold-border)',
              color: 'var(--ayun-gold-deep)'
            }}
            id="nav-prakriti-btn"
          >
            <Activity size={14} />
            <span>Prakriti Test</span>
          </button>

          {/* Join as Doctor */}
          <button
            onClick={() => {
              const el = document.querySelector('#for-doctors');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else store.showToast('Navigating to Doctor onboarding section', 'info');
            }}
            className="btn btn-secondary btn-sm"
            style={{ display: 'none' }}
            id="nav-join-doctor-btn"
          >
            <span>Join as Doctor</span>
          </button>

          {/* Book Consultation */}
          <button
            onClick={() => {
              const el = document.querySelector('#consultation-discovery');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
              else store.showToast('Please select a doctor to begin booking', 'info');
            }}
            className="btn btn-primary btn-sm"
            id="nav-book-consult-btn"
          >
            <span>Book Consultation</span>
            <ArrowUpRight size={15} />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '40px',
              height: '40px',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--ayun-emerald)',
              background: 'var(--surface-warm-gray)'
            }}
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: 'var(--surface-white)',
          borderBottom: '1px solid var(--border-subtle)',
          padding: '20px 24px',
          boxShadow: 'var(--shadow-card)'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                style={{
                  fontSize: '0.98rem',
                  fontWeight: 600,
                  color: 'var(--text-headline)',
                  padding: '8px 0',
                  borderBottom: '1px solid var(--border-subtle)'
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                store.setPrakritiModal(true);
              }}
              className="btn btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <Activity size={16} />
              <span>Take Prakriti Assessment</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('#for-doctors');
              }}
              className="btn btn-secondary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Join as Doctor</span>
            </button>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('#consultation-discovery');
              }}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center' }}
            >
              <span>Book Doctor Consultation</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 992px) {
          .desktop-nav {
            display: flex !important;
          }
          #nav-join-doctor-btn {
            display: inline-flex !important;
          }
          #nav-prakriti-btn {
            display: inline-flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
