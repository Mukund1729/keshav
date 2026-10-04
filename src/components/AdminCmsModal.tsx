import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import {
  X,
  Settings,
  BarChart3,
  Users,
  Stethoscope,
  Calendar,
  CreditCard,
  Save,
  RotateCcw,
  CheckCircle2,
  Building2,
  FileText
} from 'lucide-react';

export const AdminCmsModal: React.FC = () => {
  const [state, store] = useStore();

  const [activeTab, setActiveTab] = useState<'metrics' | 'appointments' | 'doctors'>('metrics');

  // Local state for editable metrics
  const [doctorsCount, setDoctorsCount] = useState(state.cmsStats.doctorsCount);
  const [programsCount, setProgramsCount] = useState(state.cmsStats.programsCount);
  const [institutionsCount, setInstitutionsCount] = useState(state.cmsStats.institutionsCount);
  const [techInnovationsCount, setTechInnovationsCount] = useState(state.cmsStats.techInnovationsCount);
  const [livesImpacted, setLivesImpacted] = useState(state.cmsStats.livesImpacted);

  if (!state.isAdminModalOpen) return null;

  const handleSaveStats = (e: React.FormEvent) => {
    e.preventDefault();
    store.updateCmsStats({
      doctorsCount: Number(doctorsCount),
      programsCount: Number(programsCount),
      institutionsCount: Number(institutionsCount),
      techInnovationsCount: Number(techInnovationsCount),
      livesImpacted: Number(livesImpacted)
    });
  };

  return (
    <div className="modal-overlay" onClick={() => store.setAdminModal(false)}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '820px', height: '85vh', display: 'flex', flexDirection: 'column' }}>
        
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 28px',
          background: 'var(--forest-darkest)',
          color: '#ffffff',
          borderBottom: '1px solid rgba(212, 175, 55, 0.3)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: 'var(--gold-500)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Settings size={18} />
            </div>
            <div>
              <div style={{ fontSize: '0.74rem', color: 'var(--gold-300)', fontFamily: 'var(--font-mono)' }}>
                AYUNEXIS ENTERPRISE CMS & ANALYTICS STUDIO
              </div>
              <h3 style={{ fontSize: '1.2rem', color: '#ffffff' }}>Administrative Control Console</h3>
            </div>
          </div>

          <button
            onClick={() => store.setAdminModal(false)}
            style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer' }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Tab switcher */}
        <div style={{ display: 'flex', background: 'var(--surface-light)', borderBottom: '1px solid var(--border-light)' }}>
          {[
            { id: 'metrics', label: 'Live Impact Metrics & Content', icon: <BarChart3 size={15} /> },
            { id: 'appointments', label: `Telehealth Appointments (${state.appointments.length})`, icon: <Calendar size={15} /> },
            { id: 'doctors', label: `Doctor Roster (${state.doctors.length})`, icon: <Stethoscope size={15} /> }
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id as any)}
              style={{
                flex: 1,
                padding: '14px',
                fontSize: '0.84rem',
                fontWeight: 600,
                border: 'none',
                borderBottom: activeTab === t.id ? '2px solid var(--emerald-700)' : 'none',
                color: activeTab === t.id ? 'var(--emerald-900)' : 'var(--text-muted)',
                background: activeTab === t.id ? 'var(--surface-white)' : 'transparent',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px'
              }}
            >
              {t.icon}
              <span>{t.label}</span>
            </button>
          ))}
        </div>

        {/* Modal Body */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '28px' }}>
          
          {/* TAB 1: Live Editable Metrics */}
          {activeTab === 'metrics' && (
            <form onSubmit={handleSaveStats}>
              <div style={{
                background: 'var(--emerald-50)',
                padding: '14px 18px',
                borderRadius: 'var(--radius-md)',
                marginBottom: '24px',
                border: '1px solid var(--emerald-100)',
                fontSize: '0.86rem',
                color: 'var(--emerald-900)'
              }}>
                <strong>Dynamic CMS Sync: </strong> All statistics rendered across the home page and impact counters are linked directly to this state. Edit values below and click "Save & Sync Live Site" to test real-time re-rendering!
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px', marginBottom: '28px' }}>
                <div style={{ background: 'var(--surface-light)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                  <label style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                    Verified Doctors Count
                  </label>
                  <input
                    type="number"
                    value={doctorsCount}
                    onChange={(e) => setDoctorsCount(Number(e.target.value))}
                    style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--border-light)', fontSize: '1.1rem', fontWeight: 700 }}
                  />
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>Display: {doctorsCount}+</span>
                </div>

                <div style={{ background: 'var(--surface-light)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                  <label style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                    Active Wellness Programs
                  </label>
                  <input
                    type="number"
                    value={programsCount}
                    onChange={(e) => setProgramsCount(Number(e.target.value))}
                    style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--border-light)', fontSize: '1.1rem', fontWeight: 700 }}
                  />
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>Display: {programsCount}+</span>
                </div>

                <div style={{ background: 'var(--surface-light)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                  <label style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                    Partner Institutions & Schools
                  </label>
                  <input
                    type="number"
                    value={institutionsCount}
                    onChange={(e) => setInstitutionsCount(Number(e.target.value))}
                    style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--border-light)', fontSize: '1.1rem', fontWeight: 700 }}
                  />
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>Display: {institutionsCount}+</span>
                </div>

                <div style={{ background: 'var(--surface-light)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                  <label style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                    Research & Tech Innovations
                  </label>
                  <input
                    type="number"
                    value={techInnovationsCount}
                    onChange={(e) => setTechInnovationsCount(Number(e.target.value))}
                    style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid var(--border-light)', fontSize: '1.1rem', fontWeight: 700 }}
                  />
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>Display: {techInnovationsCount}+</span>
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
                <button
                  type="submit"
                  className="btn btn-primary btn-lg"
                >
                  <Save size={16} />
                  <span>Save & Sync Live Site</span>
                </button>
              </div>
            </form>
          )}

          {/* TAB 2: Appointments Management */}
          {activeTab === 'appointments' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                <h4 style={{ fontSize: '1.1rem', color: 'var(--emerald-900)' }}>
                  Active Consultation Records
                </h4>
                <span className="badge badge-emerald">Real-time DB</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {state.appointments.map((apt) => (
                  <div
                    key={apt.id}
                    style={{
                      background: 'var(--surface-light)',
                      padding: '16px 20px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '12px'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.94rem', color: 'var(--emerald-900)' }}>
                        {apt.patientName} ↔ {apt.doctorName}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '3px' }}>
                        {apt.date} • {apt.timeSlot} • Mode: <span style={{ textTransform: 'capitalize', fontWeight: 600 }}>{apt.mode}</span>
                      </div>
                      <div style={{ fontSize: '0.74rem', fontFamily: 'var(--font-mono)', color: 'var(--gold-600)', marginTop: '2px' }}>
                        ID: {apt.id} • Txn: {apt.paymentId}
                      </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span className="badge badge-emerald" style={{ textTransform: 'uppercase' }}>
                        ₹{apt.fee} (Paid)
                      </span>
                      <button
                        onClick={() => {
                          store.setAdminModal(false);
                          store.openTelehealthRoom(apt);
                        }}
                        className="btn btn-primary btn-sm"
                      >
                        Enter Room
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: Doctor Roster */}
          {activeTab === 'doctors' && (
            <div>
              <h4 style={{ fontSize: '1.1rem', color: 'var(--emerald-900)', marginBottom: '16px' }}>
                Accredited Practitioner Fleet ({state.doctors.length})
              </h4>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {state.doctors.map((d) => (
                  <div
                    key={d.id}
                    style={{
                      background: 'var(--surface-light)',
                      padding: '14px 18px',
                      borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--border-light)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--emerald-900)' }}>
                        {d.name}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        {d.qualification} • {d.specialty}
                      </div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--gold-600)', fontFamily: 'var(--font-mono)' }}>
                        Reg: {d.registrationNumber}
                      </div>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--emerald-800)' }}>
                        ₹{d.consultationFee}
                      </div>
                      <span className="badge badge-emerald" style={{ fontSize: '0.7rem' }}>
                        Active / Verified
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
