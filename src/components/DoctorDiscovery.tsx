import React, { useState, useMemo } from 'react';
import { useStore } from '../store/useStore';
import { Doctor } from '../types';
import {
  Search,
  Filter,
  Star,
  Video,
  Clock,
  CheckCircle2,
  Calendar,
  Languages,
  ShieldCheck,
  ChevronDown
} from 'lucide-react';

export const DoctorDiscovery: React.FC = () => {
  const [state, store] = useStore();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [selectedMode, setSelectedMode] = useState<'all' | 'video' | 'in_clinic' | 'audio'>('all');
  const [selectedLanguage, setSelectedLanguage] = useState('All');
  const [minExp, setMinExp] = useState(0);

  const specialties = ['All', 'Metabolic & Gut Health', 'Preventive & Neuro-Sensory Wellness', 'Panchakarma & Cellular Detox', 'Sports & Musculoskeletal Recovery', 'Hormonal & Women’s Health', 'Longevity & Rasayana Protocols'];
  const languages = ['All', 'English', 'Hindi', 'Malayalam', 'Tamil', 'Marathi', 'Gujarati', 'Bengali'];

  const filteredDoctors = useMemo(() => {
    return state.doctors.filter((doc) => {
      const matchesSearch =
        doc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
        doc.bio.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesSpecialty = selectedSpecialty === 'All' || doc.specialty === selectedSpecialty;
      const matchesMode = selectedMode === 'all' || doc.modes.includes(selectedMode);
      const matchesLanguage = selectedLanguage === 'All' || doc.languages.includes(selectedLanguage);
      const matchesExp = doc.experienceYears >= minExp;

      return matchesSearch && matchesSpecialty && matchesMode && matchesLanguage && matchesExp;
    });
  }, [state.doctors, searchQuery, selectedSpecialty, selectedMode, selectedLanguage, minExp]);

  const handleBookDoctor = (doc: Doctor) => {
    store.openBookingModal(doc);
  };

  return (
    <section id="consultation-discovery" className="section-padding" style={{ background: 'var(--surface-light)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Clinical Telehealth</div>
          <h2 className="section-title">Verified Ayurvedic Doctor Discovery</h2>
          <p className="section-subtitle">
            Filter certified BAMS and MD physicians by clinical specialty, years of experience, languages, and consultation modality.
          </p>
        </div>

        {/* Search & Multi-Criteria Filter Bar */}
        <div style={{
          background: 'var(--surface-white)',
          padding: '24px',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid var(--border-card)',
          boxShadow: 'var(--shadow-sm)',
          marginBottom: '36px'
        }}>
          {/* Top Search Input */}
          <div style={{
            position: 'relative',
            marginBottom: '20px'
          }}>
            <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            <input
              type="text"
              placeholder="Search by doctor name, specialty, clinical condition (e.g. Gut, Insomnia, Panchakarma)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '14px 16px 14px 44px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-light)',
                background: 'var(--surface-light)',
                fontSize: '0.94rem',
                outline: 'none',
                fontFamily: 'inherit'
              }}
              id="doctor-search-input"
            />
          </div>

          {/* Filter Pills / Dropdowns */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '14px',
            alignItems: 'center'
          }}>
            {/* Specialty Filter */}
            <div>
              <label style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px', display: 'block' }}>
                Specialty
              </label>
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  background: 'var(--surface-white)',
                  fontSize: '0.86rem',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                {specialties.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            {/* Mode Filter */}
            <div>
              <label style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px', display: 'block' }}>
                Consultation Type
              </label>
              <select
                value={selectedMode}
                onChange={(e) => setSelectedMode(e.target.value as any)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  background: 'var(--surface-white)',
                  fontSize: '0.86rem',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                <option value="all">All Modalities</option>
                <option value="video">HD Video Tele-Consult</option>
                <option value="in_clinic">In-Clinic Visit</option>
                <option value="audio">Voice Audio Consult</option>
              </select>
            </div>

            {/* Language Filter */}
            <div>
              <label style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px', display: 'block' }}>
                Language
              </label>
              <select
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px 14px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  background: 'var(--surface-white)',
                  fontSize: '0.86rem',
                  color: 'var(--text-primary)',
                  outline: 'none',
                  cursor: 'pointer'
                }}
              >
                {languages.map((l) => (
                  <option key={l} value={l}>{l}</option>
                ))}
              </select>
            </div>

            {/* Min Experience Filter */}
            <div>
              <label style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '6px', display: 'block' }}>
                Min Experience: {minExp > 0 ? `${minExp}+ Yrs` : 'Any'}
              </label>
              <input
                type="range"
                min="0"
                max="15"
                step="3"
                value={minExp}
                onChange={(e) => setMinExp(Number(e.target.value))}
                style={{
                  width: '100%',
                  accentColor: 'var(--emerald-600)',
                  cursor: 'pointer'
                }}
              />
            </div>
          </div>
        </div>

        {/* Results Counter */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
            Showing <strong>{filteredDoctors.length}</strong> accredited Ayurvedic physicians
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--gold-600)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
            <ShieldCheck size={16} />
            Central / State Ayush Council Verified
          </div>
        </div>

        {/* Doctors Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))',
          gap: '28px'
        }}>
          {filteredDoctors.map((doc) => (
            <div
              key={doc.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '28px'
              }}
            >
              <div>
                {/* Doctor Header: Avatar, Name, Rating */}
                <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                  {/* Generated Initials Avatar with Emerald & Gold theme */}
                  <div style={{
                    width: '68px',
                    height: '68px',
                    borderRadius: 'var(--radius-md)',
                    background: 'linear-gradient(135deg, var(--emerald-800), var(--emerald-950, #041f16))',
                    border: '2px solid var(--gold-500)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--gold-400)',
                    fontWeight: 800,
                    fontSize: '1.25rem',
                    flexShrink: 0,
                    boxShadow: 'var(--shadow-sm)'
                  }}>
                    {doc.name.split(' ').map(n => n[0]).slice(1, 3).join('') || 'DR'}
                  </div>

                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <h3 style={{ fontSize: '1.2rem', color: 'var(--emerald-900)' }}>
                        {doc.name}
                      </h3>
                      <CheckCircle2 size={16} color="var(--emerald-600)" />
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                      {doc.qualification}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '6px' }}>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '3px',
                        fontSize: '0.78rem',
                        fontWeight: 700,
                        color: 'var(--emerald-800)',
                        background: 'var(--emerald-50)',
                        padding: '2px 8px',
                        borderRadius: 'var(--radius-full)'
                      }}>
                        <Star size={12} fill="var(--gold-500)" stroke="none" />
                        {doc.rating} ({doc.reviewCount})
                      </span>
                      <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        • {doc.experienceYears} Years Exp.
                      </span>
                    </div>
                  </div>
                </div>

                {/* Specialty Pill */}
                <div style={{ marginBottom: '12px' }}>
                  <span className="badge badge-emerald" style={{ fontSize: '0.78rem', padding: '4px 12px' }}>
                    Specialty: {doc.specialty}
                  </span>
                </div>

                {/* Bio Snippet */}
                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '16px' }}>
                  {doc.bio}
                </p>

                {/* Doctor Meta Information */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '8px',
                  background: 'var(--surface-light)',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-md)',
                  marginBottom: '20px',
                  fontSize: '0.78rem'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}>
                    <Clock size={13} color="var(--emerald-700)" />
                    <span>Next: <strong>{doc.nextAvailable}</strong></span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}>
                    <Languages size={13} color="var(--gold-600)" />
                    <span>{doc.languages.slice(0, 2).join(', ')}</span>
                  </div>
                </div>
              </div>

              {/* Fee & Action Button */}
              <div style={{
                paddingTop: '18px',
                borderTop: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Consultation Fee
                  </div>
                  <div style={{ fontSize: '1.35rem', fontWeight: 800, color: 'var(--emerald-900)', fontFamily: 'var(--font-mono)' }}>
                    ₹{doc.consultationFee}
                  </div>
                </div>

                <button
                  onClick={() => handleBookDoctor(doc)}
                  className="btn btn-primary"
                  id={`book-doctor-${doc.id}`}
                >
                  <Video size={15} />
                  <span>Book Consultation</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
