import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import {
  Cpu,
  Brain,
  Activity,
  BarChart3,
  Smartphone,
  Video,
  AlertTriangle,
  Play,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  FileText
} from 'lucide-react';

interface FormulationSample {
  id: string;
  name: string;
  classicalReference: string;
  markerCompounds: string[];
  observedDispersionRate: string;
  doshicProfile: string;
}

const RESEARCH_SAMPLES: FormulationSample[] = [
  {
    id: 'sample-1',
    name: 'Taila Bindu Pariksha — Sample A (Sesamum Indicum Base)',
    classicalReference: 'Yogaratnakara & Sahasrayogam Codification',
    markerCompounds: ['Sesamin', 'Sesamolin', 'Oleic Acid Traces', 'Phenolic Lignans'],
    observedDispersionRate: 'Directional kinetic flow (Vata predominant dispersion)',
    doshicProfile: 'Vata Harmonizing Profile'
  },
  {
    id: 'sample-2',
    name: 'Taila Bindu Pariksha — Sample B (Kshirabala Medicated Matrix)',
    classicalReference: 'Ashtanga Hridaya Chikitsa Sthana',
    markerCompounds: ['Sida cordifolia Phytosterols', 'Fatty acid esters'],
    observedDispersionRate: 'Symmetrical circular expansion (Pitta-Kapha equilibrium)',
    doshicProfile: 'Pitta Pacifying Profile'
  },
  {
    id: 'sample-3',
    name: 'Taila Bindu Pariksha — Sample C (Classical Mahanarayan Extract)',
    classicalReference: 'Bhaishajya Ratnavali (Vatavyadhi Rogadhikara)',
    markerCompounds: ['Withaferin-A', 'Curcuminoids', 'Beta-Sitosterol'],
    observedDispersionRate: 'Dense centrifugal distribution with stable perimeter',
    doshicProfile: 'Tridoshic Stabilizing Profile'
  }
];

export const TechnologySection: React.FC = () => {
  const [, store] = useStore();
  const [selectedSample, setSelectedSample] = useState<FormulationSample>(RESEARCH_SAMPLES[0]);
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationComplete, setSimulationComplete] = useState(true);

  const innovationAreas = [
    { title: 'AI-Assisted Diagnostic Research', desc: 'Pre-clinical exploration of Taila Bindu Pariksha (oil drop dispersion metrics) using computer vision classifiers.', icon: <Brain size={22} /> },
    { title: 'Digital Ayurveda Knowledge Repositories', desc: 'Ontological databases converting classical Charaka and Sushruta Samhita treatises into structured clinical APIs.', icon: <Cpu size={22} /> },
    { title: 'Prakriti Assessment Algorithms', desc: 'Multi-factor algorithmic models analyzing phenotypic and metabolic markers for objective dosha equilibrium scoring.', icon: <Activity size={22} /> },
    { title: 'Longitudinal Health Analytics', desc: 'Secure cloud health repositories tracking preventive health markers, student biometric growth, and corporate vitality.', icon: <BarChart3 size={22} /> },
    { title: 'Smart Wearable Integration', desc: 'Cross-referencing consumer wearable biometric streams (sleep stages, HRV) with Ayurvedic circadian Dinacharya timing.', icon: <Smartphone size={22} /> },
    { title: 'Encrypted Telehealth Infrastructure', desc: 'Low-latency WebRTC clinical rooms with integrated Ayurvedic digital prescriptions and follow-up tracking.', icon: <Video size={22} /> }
  ];

  const handleSimulate = () => {
    setIsSimulating(true);
    setSimulationComplete(false);
    setTimeout(() => {
      setIsSimulating(false);
      setSimulationComplete(true);
      store.showToast(`Computer vision dispersion completed for: ${selectedSample.name}`, 'success');
    }, 1200);
  };

  return (
    <section id="innovation" className="section-padding" style={{ background: 'var(--surface-cream)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="ref-eyebrow">RESEARCH & INFORMATICS</div>
          <div className="title-with-underline center">
            <h2 className="section-title" style={{ margin: 0 }}>
              Where Ayurveda Meets Technology
            </h2>
          </div>
          <p className="section-subtitle">
            Ayunexis operates at the intersection of classical health treatises and modern data engineering—transforming qualitative Ayurvedic observations into verifiable, structured intelligence.
          </p>
        </div>

        {/* 6 Technology Focus Areas Grid (Clean Editorial Cards) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '20px',
          marginBottom: '56px'
        }}>
          {innovationAreas.map((area, idx) => (
            <div key={idx} className="card" style={{ display: 'flex', gap: '16px', padding: '24px' }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: 'var(--radius-sm)',
                background: 'var(--ayun-emerald-light)',
                color: 'var(--ayun-emerald)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                {area.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.1rem', color: 'var(--text-headline)', marginBottom: '6px' }}>
                  {area.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.58 }}>
                  {area.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* FEATURED RESEARCH INITIATIVE: AyurTaila Analyzer™ (Styled exactly like the User's Screenshot) */}
        <div style={{
          background: 'var(--surface-white)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-xl)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow-card)'
        }}>
          
          {/* Header Banner matching user's reference */}
          <div style={{
            background: 'linear-gradient(180deg, var(--ref-dark-navy) 0%, var(--ref-dark-slate) 100%)',
            color: '#ffffff',
            padding: '44px 36px',
            textAlign: 'center'
          }}>
            <div className="ref-eyebrow light">
              AYURVEDIC DIAGNOSTICS & RESEARCH INFORMATICS
            </div>

            <h3 style={{
              fontSize: 'clamp(2rem, 3.8vw, 2.8rem)',
              color: '#ffffff',
              fontWeight: 600,
              fontFamily: 'var(--font-editorial)',
              marginBottom: '10px'
            }}>
              AyurTaila Analyzer™ Research Initiative
            </h3>

            <p style={{ color: '#cbd5e1', fontSize: '1rem', maxWidth: '680px', margin: '0 auto 16px auto', lineHeight: 1.6 }}>
              An AI-assisted research and innovation concept exploring the digitization and computer vision analysis of traditional Ayurvedic diagnostic approaches.
            </p>

            {/* Statutory Disclaimer Pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(239, 68, 68, 0.14)',
              border: '1px solid rgba(239, 68, 68, 0.35)',
              padding: '6px 14px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.76rem',
              color: '#fca5a5'
            }}>
              <AlertTriangle size={14} />
              <span>Pre-Clinical Research Exploration • Not a Clinically Validated Diagnostic Device</span>
            </div>
          </div>

          {/* Body Sections formatted directly like the reference image */}
          <div style={{ padding: '36px 32px' }}>
            
            {/* 1. Introduction */}
            <div style={{ marginBottom: '36px' }}>
              <div className="title-with-underline">
                <h4 style={{ fontSize: '1.45rem', color: 'var(--text-headline)', margin: 0 }}>
                  Introduction
                </h4>
              </div>
              <p style={{ fontSize: '1rem', color: 'var(--text-body)', lineHeight: 1.72 }}>
                Welcome to AyurTaila AI — where centuries of Ayurvedic clinical wisdom meet modern computational intelligence. Our platform analyzes the ancient diagnostic technique of <em>Taila Bindu Pariksha</em> (oil drop dispersion analysis codified in medieval treatises) using high-resolution computer vision and surface tension metrics.
              </p>
            </div>

            {/* 2. Purpose (Reference-style Dot Cards) */}
            <div style={{ marginBottom: '36px' }}>
              <div className="title-with-underline">
                <h4 style={{ fontSize: '1.45rem', color: 'var(--text-headline)', margin: 0 }}>
                  Purpose
                </h4>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '14px'
              }}>
                <div className="ref-dot-card">
                  <div className="ref-dot-icon">
                    <div className="ref-dot-inner" />
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.5 }}>
                    Analyze oil drop dispersion patterns for constitutional profiling
                  </div>
                </div>

                <div className="ref-dot-card">
                  <div className="ref-dot-icon">
                    <div className="ref-dot-inner" />
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.5 }}>
                    Determine physiological doshic tendencies (Vata, Pitta, or Kapha)
                  </div>
                </div>

                <div className="ref-dot-card">
                  <div className="ref-dot-icon">
                    <div className="ref-dot-inner" />
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.5 }}>
                    Deliver personalized Ayurvedic lifestyle and Dinacharya guidance
                  </div>
                </div>

                <div className="ref-dot-card">
                  <div className="ref-dot-icon">
                    <div className="ref-dot-inner" />
                  </div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-body)', lineHeight: 1.5 }}>
                    Advance peer-reviewed research in AI-assisted traditional medicine
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Data Collection Framework (Exact Reference Attributes Grid) */}
            <div style={{ marginBottom: '36px' }}>
              <div className="title-with-underline">
                <h4 style={{ fontSize: '1.45rem', color: 'var(--text-headline)', margin: 0 }}>
                  Data Collection
                </h4>
              </div>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
                We collect only what is essential for an accurate, non-invasive assessment:
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '16px',
                background: 'var(--surface-cream)',
                padding: '24px',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)'
              }}>
                <div>
                  <span className="ref-attr-label">Personal:</span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-body)' }}>Name, age, gender, contact</span>
                </div>

                <div>
                  <span className="ref-attr-label">Medical:</span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-body)' }}>Conditions, medications, allergies</span>
                </div>

                <div>
                  <span className="ref-attr-label">Lifestyle:</span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-body)' }}>Diet, exercise, sleep, stress</span>
                </div>

                <div>
                  <span className="ref-attr-label">Visual:</span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-body)' }}>Oil drop dispersion test images</span>
                </div>

                <div>
                  <span className="ref-attr-label">Symptoms:</span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-body)' }}>Current health concerns & Agni state</span>
                </div>

                <div>
                  <span className="ref-attr-label">Results:</span>
                  <span style={{ fontSize: '0.9rem', color: 'var(--text-body)' }}>AI-generated predictions & doctor validation</span>
                </div>
              </div>
            </div>

            {/* 4. Pre-Clinical Simulation Demonstrator */}
            <div style={{
              background: 'var(--surface-white)',
              border: '1.5px solid var(--ayun-gold-border)',
              borderRadius: 'var(--radius-md)',
              padding: '24px',
              marginBottom: '28px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <span className="badge badge-gold">Pre-Clinical Laboratory Assay</span>
                  <div style={{ fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-headline)', marginTop: '4px' }}>
                    Select Botanical Assay Sample:
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {RESEARCH_SAMPLES.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => {
                        setSelectedSample(s);
                        setIsSimulating(false);
                      }}
                      style={{
                        padding: '6px 14px',
                        borderRadius: 'var(--radius-sm)',
                        fontSize: '0.78rem',
                        fontWeight: 600,
                        background: selectedSample.id === s.id ? 'var(--ayun-gold-deep)' : 'var(--surface-cream)',
                        color: selectedSample.id === s.id ? '#ffffff' : 'var(--text-body)',
                        border: '1px solid var(--border-subtle)',
                        cursor: 'pointer'
                      }}
                    >
                      {s.id.replace('sample-', 'Sample ')}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sample Details */}
              <div style={{
                background: 'var(--surface-cream)',
                padding: '16px 20px',
                borderRadius: 'var(--radius-sm)',
                marginBottom: '16px',
                fontSize: '0.86rem'
              }}>
                <div style={{ fontWeight: 700, color: 'var(--ayun-emerald)', marginBottom: '4px' }}>
                  {selectedSample.name}
                </div>
                <div style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>
                  Reference: {selectedSample.classicalReference}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {selectedSample.markerCompounds.map((m, i) => (
                    <span key={i} className="badge badge-emerald" style={{ fontSize: '0.74rem' }}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
                <div style={{ fontSize: '0.84rem', color: 'var(--text-body)' }}>
                  Observed Pattern: <strong>{selectedSample.observedDispersionRate}</strong>
                </div>

                <button
                  onClick={handleSimulate}
                  disabled={isSimulating}
                  className="btn btn-gold btn-sm"
                >
                  <Play size={14} />
                  <span>{isSimulating ? 'Analyzing Dispersion...' : 'Execute Vision Analysis'}</span>
                </button>
              </div>
            </div>

            {/* Mandatory Regulatory Statement */}
            <div style={{
              background: 'var(--ayun-gold-tint)',
              border: '1px solid var(--ayun-gold-border)',
              borderRadius: 'var(--radius-md)',
              padding: '18px 22px',
              fontSize: '0.82rem',
              color: '#7c581e',
              lineHeight: 1.6
            }}>
              <strong>Regulatory & Clinical Disclaimer: </strong>
              The AyurTaila Analyzer is presented strictly as a proprietary technological research concept and academic inquiry. It is not offered, marketed, or advertised as a clinically validated diagnostic device or medical device until statutory regulatory certifications and peer-reviewed clinical trials are explicitly completed.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
