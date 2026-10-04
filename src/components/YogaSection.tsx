import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import {
  Sun,
  Moon,
  Clock,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Calendar,
  Edit3
} from 'lucide-react';

export const YogaSection: React.FC = () => {
  const [state, store] = useStore();
  const [selectedBatchTime, setSelectedBatchTime] = useState<'all' | 'morning' | 'evening'>('all');

  const handleJoinClass = (planTitle: string) => {
    const el = document.querySelector('#contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    store.showToast(`Selected "${planTitle}". Please complete registration details below.`, 'info');
  };

  return (
    <section id="yoga" className="section-padding" style={{ background: 'var(--surface-white)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Therapeutic Movement</div>
          <h2 className="section-title">Move Better. Breathe Better. Live Better.</h2>
          <p className="section-subtitle">
            Online yoga programs designed for beginners, busy professionals, and wellness seekers combining classical alignment, conscious Pranayama, and nervous-system down-regulation.
          </p>
        </div>

        {/* Schedule & Batch Highlights Bar */}
        <div style={{
          background: 'var(--surface-light)',
          borderRadius: 'var(--radius-lg)',
          padding: '24px 32px',
          border: '1px solid var(--border-light)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '20px',
          marginBottom: '48px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(212, 175, 55, 0.15)', color: 'var(--gold-600)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Sun size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--emerald-900)' }}>Morning Batches (Agni & Vitality)</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>6:30 AM - 7:30 AM & 7:30 AM - 8:30 AM IST</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'var(--emerald-50)', color: 'var(--emerald-700)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Moon size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--emerald-900)' }}>Evening Batches (Decompression)</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>6:30 PM - 7:30 PM & 7:30 PM - 8:30 PM IST</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="badge badge-emerald">Beginner Friendly</span>
            <span className="badge badge-gold">Guided Live Correction</span>
          </div>
        </div>

        {/* Pricing Cards (Editable in Admin Panel) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '28px',
          marginBottom: '40px'
        }}>
          {state.yogaPlans.map((plan) => (
            <div
              key={plan.id}
              className={`card ${plan.isPopular ? 'card-dark' : ''}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                border: plan.isPopular ? '1.5px solid var(--gold-500)' : '1px solid var(--border-card)',
                boxShadow: plan.isPopular ? 'var(--shadow-glow)' : 'var(--shadow-sm)'
              }}
            >
              {plan.isPopular && (
                <div style={{
                  position: 'absolute',
                  top: '-12px',
                  right: '24px',
                  background: 'linear-gradient(135deg, var(--gold-500), var(--gold-600))',
                  color: 'var(--forest-darkest)',
                  padding: '4px 14px',
                  borderRadius: 'var(--radius-full)',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  letterSpacing: '0.04em'
                }}>
                  MOST POPULAR
                </div>
              )}

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                  <div>
                    <span className="badge" style={{
                      background: plan.isPopular ? 'rgba(212, 175, 55, 0.2)' : 'var(--emerald-50)',
                      color: plan.isPopular ? 'var(--gold-300)' : 'var(--emerald-700)',
                      border: plan.isPopular ? '1px solid rgba(212, 175, 55, 0.3)' : '1px solid var(--emerald-100)',
                      marginBottom: '8px'
                    }}>
                      {plan.tier}
                    </span>
                    <h3 style={{ fontSize: '1.5rem', color: plan.isPopular ? '#ffffff' : 'var(--emerald-900)' }}>
                      {plan.title}
                    </h3>
                  </div>

                  {/* Quick Edit in Admin Trigger (Resume Feature Demonstration) */}
                  <button
                    onClick={() => {
                      const newPrice = prompt(`Enter new monthly price for ${plan.title}:`, String(plan.monthlyFee));
                      if (newPrice && !isNaN(Number(newPrice))) {
                        store.updateYogaPlanFee(plan.id, Number(newPrice));
                      }
                    }}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: plan.isPopular ? 'var(--gold-400)' : 'var(--text-muted)',
                      cursor: 'pointer',
                      padding: '4px'
                    }}
                    title="Edit pricing (CMS feature)"
                  >
                    <Edit3 size={15} />
                  </button>
                </div>

                <p style={{ fontSize: '0.88rem', color: plan.isPopular ? '#cbd5e1' : 'var(--text-secondary)', marginBottom: '20px' }}>
                  {plan.tagline}
                </p>

                {/* Price Display */}
                <div style={{ marginBottom: '24px', paddingBottom: '20px', borderBottom: `1px solid ${plan.isPopular ? 'rgba(255, 255, 255, 0.12)' : 'var(--border-light)'}` }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                    <span style={{ fontSize: '1.1rem', fontWeight: 600, color: plan.isPopular ? 'var(--gold-400)' : 'var(--emerald-800)' }}>₹</span>
                    <span style={{ fontSize: '2.5rem', fontWeight: 800, color: plan.isPopular ? '#ffffff' : 'var(--emerald-900)', fontFamily: 'var(--font-mono)' }}>
                      {plan.monthlyFee.toLocaleString('en-IN')}
                    </span>
                    <span style={{ fontSize: '0.85rem', color: plan.isPopular ? '#94a3b8' : 'var(--text-muted)' }}>/ month</span>
                  </div>
                  <div style={{ fontSize: '0.78rem', color: plan.isPopular ? 'var(--gold-300)' : 'var(--emerald-700)', marginTop: '4px', fontWeight: 600 }}>
                    {plan.timing}
                  </div>
                </div>

                {/* Features List */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                  {plan.features.map((feat, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.86rem', color: plan.isPopular ? 'rgba(255, 255, 255, 0.9)' : 'var(--text-secondary)' }}>
                      <CheckCircle2 size={15} color={plan.isPopular ? 'var(--gold-400)' : 'var(--emerald-600)'} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => handleJoinClass(plan.title)}
                  className={`btn ${plan.isPopular ? 'btn-gold' : 'btn-primary'}`}
                  style={{ width: '100%' }}
                >
                  <span>Join Yoga Classes</span>
                  <ArrowRight size={16} />
                </button>
                <div style={{ textAlign: 'center', marginTop: '10px', fontSize: '0.74rem', color: plan.isPopular ? '#94a3b8' : 'var(--text-muted)' }}>
                  Recommended: {plan.recommendedFor}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer / Notice */}
        <div style={{
          textAlign: 'center',
          fontSize: '0.8rem',
          color: 'var(--text-muted)',
          maxWidth: '680px',
          margin: '0 auto'
        }}>
          * All yoga sessions are led by statutory certified teachers with Ayush / Yoga Alliance credentials. Pricing and seat quotas are synchronized directly with the Ayunexis Admin Engine.
        </div>

      </div>
    </section>
  );
};
