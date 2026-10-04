import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Building2,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Globe
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [, store] = useStore();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    purpose: 'Doctor Partnership',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const purposeOptions = [
    'Doctor Partnership',
    'School Program',
    'Corporate Wellness',
    'Sports Wellness',
    'Yoga',
    'Health Camp',
    'Technology Partnership',
    'Investor / Strategic Partnership',
    'Other'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      store.showToast(`Thank you, ${formData.name || 'Partner'}. Your enquiry for "${formData.purpose}" has been recorded.`, 'success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        purpose: 'Doctor Partnership',
        message: ''
      });
    }, 1200);
  };

  return (
    <section id="contact" className="section-padding" style={{ background: 'var(--surface-light)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag gold">Connect & Collaborate</div>
          <h2 className="section-title">Initiate Institutional Dialogue</h2>
          <p className="section-subtitle">
            Whether onboarding as a doctor, commissioning a corporate/school wellness program, or discussing health-tech partnerships, we welcome your inquiry.
          </p>
        </div>

        {/* 2-Column: Form & Official Corporate Information */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '40px',
          alignItems: 'flex-start'
        }} className="contact-grid">
          
          {/* Left Column: Comprehensive Enquiry Form */}
          <div style={{
            background: 'var(--surface-white)',
            borderRadius: 'var(--radius-xl)',
            padding: '36px',
            border: '1px solid var(--border-card)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--emerald-900)', marginBottom: '8px' }}>
              Submit Official Enquiry
            </h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
              Our executive partnerships director will review and respond within 1 business day.
            </p>

            {submitted && (
              <div style={{
                background: 'var(--emerald-50)',
                border: '1px solid var(--emerald-200)',
                padding: '16px',
                borderRadius: 'var(--radius-md)',
                color: 'var(--emerald-900)',
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}>
                <CheckCircle2 size={20} color="var(--emerald-700)" />
                <span style={{ fontSize: '0.9rem' }}>
                  Enquiry recorded! An Ayunexis institutional coordinator has received your brief.
                </span>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px', marginBottom: '24px' }} className="contact-form-grid">
                
                {/* Name */}
                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Rajesh Mehra / Sunita Roy"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                {/* Email & Phone */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                      Official Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '11px 14px',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--border-light)',
                        fontSize: '0.9rem',
                        outline: 'none',
                        fontFamily: 'inherit'
                      }}
                    />
                  </div>
                </div>

                {/* Organization */}
                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                    Organization / Clinic / School Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Modern Public School / Infosys / Apollo Clinic / Independent"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      fontFamily: 'inherit'
                    }}
                  />
                </div>

                {/* Purpose Dropdown (All required options from prompt) */}
                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                    Nature of Inquiry / Partnership *
                  </label>
                  <select
                    value={formData.purpose}
                    onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '11px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      background: 'var(--surface-white)',
                      cursor: 'pointer'
                    }}
                  >
                    {purposeOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)', display: 'block', marginBottom: '6px' }}>
                    Message & Specific Objectives
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Briefly describe your objectives, student/employee strength, timeline or requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--border-light)',
                      fontSize: '0.9rem',
                      outline: 'none',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary btn-lg"
                style={{ width: '100%' }}
                id="submit-enquiry-btn"
              >
                <Send size={18} />
                <span>{isSubmitting ? 'Transmitting Request...' : 'Submit Enquiry'}</span>
              </button>
            </form>
          </div>

          {/* Right Column: Official Corporate Entity Card */}
          <div>
            <div style={{
              background: 'linear-gradient(145deg, #05241b, #031610)',
              borderRadius: 'var(--radius-xl)',
              padding: '36px',
              color: '#ffffff',
              boxShadow: 'var(--shadow-lg), 0 0 0 1px rgba(212, 175, 55, 0.25)',
              marginBottom: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gold-400)', fontSize: '0.8rem', fontWeight: 700, marginBottom: '6px' }}>
                <ShieldCheck size={16} />
                STATUTORY REGISTERED ENTITY
              </div>

              <h3 style={{ fontSize: '1.6rem', color: '#ffffff', marginBottom: '4px' }}>
                AYUNEXIS PRIVATE LIMITED
              </h3>
              <p style={{ fontSize: '0.86rem', color: 'var(--gold-300)', marginBottom: '24px' }}>
                Elevating Your Health at Every Step
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.88rem', color: '#cbd5e1' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <MapPin size={18} color="var(--gold-400)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <div>
                    <strong>Corporate Headquarters:</strong>
                    <div>Ayunexis Health & Wellness Pavilion, Sector 44, Cyber City Corridor, Gurugram, NCR, India - 122003</div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Mail size={18} color="var(--gold-400)" style={{ flexShrink: 0 }} />
                  <div>
                    <strong>Corporate & Partnerships: </strong>
                    <a href="mailto:partnerships@ayunexis.com" style={{ color: '#ffffff', textDecoration: 'underline' }}>
                      partnerships@ayunexis.com
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Phone size={18} color="var(--gold-400)" style={{ flexShrink: 0 }} />
                  <div>
                    <strong>Institutional Desk: </strong>
                    <span>+91 (0124) 4920-AYU (298)</span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <Clock size={18} color="var(--gold-400)" style={{ flexShrink: 0 }} />
                  <div>
                    <strong>Operational Hours: </strong>
                    <span>Mon - Sat: 8:00 AM - 8:00 PM IST (Telehealth 24x7 Emergency Queue)</span>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div style={{
                marginTop: '28px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
              }}>
                <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Connect:</span>
                <a href="https://linkedin.com/company/ayunexis" target="_blank" rel="noreferrer" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }} title="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.59 1.59 0 1 0 0-3.18 1.59 1.59 0 0 0 0 3.18m1.4 9.74v-8.37H5.06v8.37z"/></svg>
                </a>
                <a href="https://twitter.com/ayunexis" target="_blank" rel="noreferrer" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }} title="Twitter / X">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
                <a href="https://instagram.com/ayunexis" target="_blank" rel="noreferrer" style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255, 255, 255, 0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#ffffff' }} title="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                </a>
              </div>
            </div>

            {/* Credibility Guarantee Notice */}
            <div style={{
              background: 'var(--surface-white)',
              borderRadius: 'var(--radius-lg)',
              padding: '22px',
              border: '1px solid var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px'
            }}>
              <ShieldCheck size={24} color="var(--emerald-600)" style={{ flexShrink: 0 }} />
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                Ayunexis complies with statutory Ministry of Ayush Telemedicine guidelines, Digital Personal Data Protection (DPDP) Act, and ISO-27001 data encryption standards.
              </div>
            </div>
          </div>

        </div>

      </div>

      <style>{`
        @media (min-width: 992px) {
          .contact-grid {
            grid-template-columns: 1.2fr 0.9fr !important;
          }
        }
      `}</style>
    </section>
  );
};
