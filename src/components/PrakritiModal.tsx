import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { PRAKRITI_QUESTIONS } from '../data/initialData';
import { PrakritiResult } from '../types';
import {
  X,
  Activity,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
  PieChart,
  Calendar,
  RotateCcw
} from 'lucide-react';

export const PrakritiModal: React.FC = () => {
  const [state, store] = useStore();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, 'vata' | 'pitta' | 'kapha'>>({});
  const [result, setResult] = useState<PrakritiResult | null>(null);

  if (!state.isPrakritiModalOpen) return null;

  const currentQ = PRAKRITI_QUESTIONS[currentIdx];

  const handleSelectOption = (dosha: 'vata' | 'pitta' | 'kapha') => {
    const updated = { ...answers, [currentQ.id]: dosha };
    setAnswers(updated);

    if (currentIdx < PRAKRITI_QUESTIONS.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      // Calculate scores
      calculatePrakriti(updated);
    }
  };

  const calculatePrakriti = (finalAnswers: Record<number, 'vata' | 'pitta' | 'kapha'>) => {
    let vataCount = 0;
    let pittaCount = 0;
    let kaphaCount = 0;

    Object.values(finalAnswers).forEach((d) => {
      if (d === 'vata') vataCount++;
      if (d === 'pitta') pittaCount++;
      if (d === 'kapha') kaphaCount++;
    });

    const total = Object.values(finalAnswers).length;
    const vataPct = Math.round((vataCount / total) * 100);
    const pittaPct = Math.round((pittaCount / total) * 100);
    const kaphaPct = 100 - vataPct - pittaPct;

    let primary: PrakritiResult['primaryDosha'] = 'Pitta-Vata';
    if (vataPct > 50) primary = 'Vata';
    else if (pittaPct > 50) primary = 'Pitta';
    else if (kaphaPct > 50) primary = 'Kapha';
    else if (pittaPct >= vataPct && pittaPct >= kaphaPct) primary = 'Pitta-Vata';
    else if (vataPct >= pittaPct && vataPct >= kaphaPct) primary = 'Vata-Pitta';
    else primary = 'Tridoshic';

    const calcResult: PrakritiResult = {
      vata: vataPct,
      pitta: pittaPct,
      kapha: kaphaPct,
      primaryDosha: primary,
      digestiveFire: primary.includes('Pitta') ? 'Tikshnagni (Sharp/Intense)' : primary.includes('Vata') ? 'Vishamagni (Irregular)' : 'Mandagni (Slow)',
      circadianCycle: 'Solar-aligned metabolism, sensitive to midday heat and evening cooling',
      recommendedHerbs: ['Ashwagandha (Withania somnifera)', 'Amalaki (Phyllanthus emblica)', 'Brahmi (Bacopa monnieri)', 'Shatavari (Asparagus racemosus)'],
      dietaryGuidelines: [
        'Warm, freshly cooked meals with healthy fats (ghee, cold-pressed sesame)',
        'Favor sweet, bitter, and astringent tastes; minimize pungent foods',
        'Avoid iced beverages during peak digestion hours (12 PM - 2 PM)'
      ],
      lifestyleRegimen: [
        'Abhyanga: Self-massage with warm herbalized oil 3x weekly',
        'Circadian sleep window: In bed by 10:30 PM, awake by 6:00 AM',
        'Daily 15 minutes of cooling Pranayama (Shitali & Nadi Shodhana)'
      ],
      recommendedYoga: [
        'Grounding standing postures (Tadasana, Virabhadrasana)',
        'Gentle seated forward bends with prolonged exhale',
        'Restorative Savasana with warm eye pillow'
      ]
    };

    setResult(calcResult);
    store.setPrakritiResult(calcResult);
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentIdx(0);
    setResult(null);
  };

  return (
    <div className="modal-overlay" onClick={() => store.setPrakritiModal(false)}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '680px' }}>
        
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 28px',
          borderBottom: '1px solid var(--border-light)',
          background: 'var(--surface-light)'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span className="badge badge-gold">Algorithmic Dosha Profiler</span>
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--emerald-900)', marginTop: '2px' }}>
              Prakriti Parikshan™ Constitutional Assessment
            </h3>
          </div>

          <button
            onClick={() => store.setPrakritiModal(false)}
            style={{
              width: '36px',
              height: '36px',
              borderRadius: '50%',
              background: 'var(--surface-white)',
              border: '1px solid var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'var(--text-muted)',
              cursor: 'pointer'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '28px' }}>
          
          {/* QUESTIONNAIRE STATE */}
          {!result && (
            <div>
              {/* Progress Indicator */}
              <div style={{ marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '8px' }}>
                  <span>Question {currentIdx + 1} of {PRAKRITI_QUESTIONS.length}: <strong>{currentQ.dimension}</strong></span>
                  <span>{Math.round(((currentIdx + 1) / PRAKRITI_QUESTIONS.length) * 100)}% Complete</span>
                </div>
                <div style={{ height: '6px', background: 'var(--surface-subtle)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{
                    width: `${((currentIdx + 1) / PRAKRITI_QUESTIONS.length) * 100}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg, var(--emerald-600), var(--gold-500))',
                    transition: 'width 0.3s ease'
                  }} />
                </div>
              </div>

              {/* Question Title */}
              <h4 style={{ fontSize: '1.25rem', color: 'var(--emerald-900)', marginBottom: '20px', lineHeight: 1.4 }}>
                {currentQ.question}
              </h4>

              {/* 3 Options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                {currentQ.options.map((opt) => (
                  <button
                    key={opt.dosha}
                    onClick={() => handleSelectOption(opt.dosha)}
                    style={{
                      padding: '16px 20px',
                      borderRadius: 'var(--radius-md)',
                      border: answers[currentQ.id] === opt.dosha ? '2px solid var(--emerald-700)' : '1px solid var(--border-light)',
                      background: answers[currentQ.id] === opt.dosha ? 'var(--emerald-50)' : 'var(--surface-white)',
                      textAlign: 'left',
                      cursor: 'pointer',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <span style={{ fontWeight: 700, fontSize: '0.96rem', color: 'var(--emerald-900)' }}>
                        {opt.label}
                      </span>
                      <span style={{
                        fontSize: '0.72rem',
                        fontWeight: 700,
                        textTransform: 'uppercase',
                        padding: '2px 8px',
                        borderRadius: 'var(--radius-full)',
                        background: opt.dosha === 'vata' ? 'rgba(43, 164, 131, 0.15)' : opt.dosha === 'pitta' ? 'rgba(212, 175, 55, 0.2)' : 'rgba(56, 189, 248, 0.15)',
                        color: opt.dosha === 'vata' ? 'var(--emerald-700)' : opt.dosha === 'pitta' ? 'var(--gold-600)' : '#0284c7'
                      }}>
                        {opt.dosha} trait
                      </span>
                    </div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                      {opt.sublabel}
                    </div>
                  </button>
                ))}
              </div>

              {/* Navigation Back */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {currentIdx > 0 ? (
                  <button
                    onClick={() => setCurrentIdx(currentIdx - 1)}
                    className="btn btn-secondary btn-sm"
                  >
                    <ArrowLeft size={14} />
                    <span>Previous Question</span>
                  </button>
                ) : <div />}

                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                  Codified from Charaka Samhita Vimanasthana
                </span>
              </div>
            </div>
          )}

          {/* RESULTS STATE */}
          {result && (
            <div>
              {/* Constitutional Summary Card */}
              <div style={{
                background: 'linear-gradient(145deg, #05241b, #031710)',
                color: '#ffffff',
                borderRadius: 'var(--radius-lg)',
                padding: '24px',
                marginBottom: '24px',
                border: '1px solid rgba(212, 175, 55, 0.3)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gold-400)', fontFamily: 'var(--font-mono)' }}>
                    PHENOTYPIC DOSHA SPECTRUM
                  </span>
                  <span className="badge" style={{ background: 'rgba(212, 175, 55, 0.2)', color: 'var(--gold-300)' }}>
                    Primary Constitution: {result.primaryDosha}
                  </span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '16px' }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Vata (Kinetic)</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#2ba483', fontFamily: 'var(--font-mono)' }}>{result.vata}%</div>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Pitta (Transform)</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--gold-400)', fontFamily: 'var(--font-mono)' }}>{result.pitta}%</div>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '12px', borderRadius: '8px', textAlign: 'center' }}>
                    <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>Kapha (Structure)</div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>{result.kapha}%</div>
                  </div>
                </div>

                <div style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>
                  <strong>Metabolic Agni: </strong> {result.digestiveFire}
                </div>
              </div>

              {/* Protocol Recommendations */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
                <div style={{ background: 'var(--surface-light)', padding: '14px 18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.86rem', color: 'var(--emerald-900)', marginBottom: '6px' }}>
                    Recommended Botanicals & Adaptogens:
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {result.recommendedHerbs.map((h, i) => (
                      <span key={i} className="badge badge-emerald" style={{ fontSize: '0.76rem' }}>
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ background: 'var(--surface-light)', padding: '14px 18px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                  <div style={{ fontWeight: 700, fontSize: '0.86rem', color: 'var(--emerald-900)', marginBottom: '6px' }}>
                    Personalized Dinacharya Directives:
                  </div>
                  <ul style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    {result.lifestyleRegimen.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={handleReset}
                  className="btn btn-secondary"
                  style={{ flex: 1 }}
                >
                  <RotateCcw size={15} />
                  <span>Retake Test</span>
                </button>

                <button
                  onClick={() => {
                    store.setPrakritiModal(false);
                    const el = document.querySelector('#consultation-discovery');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                    store.showToast('Book a doctor to discuss your Prakriti analysis report in detail.', 'info');
                  }}
                  className="btn btn-primary"
                  style={{ flex: 2 }}
                >
                  <span>Consult Doctor on My Prakriti</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
