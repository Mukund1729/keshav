import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { CareerPosition } from '../types';
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  X,
  Send,
  Upload,
  Sparkles
} from 'lucide-react';

export const CareersSection: React.FC = () => {
  const [state, store] = useStore();
  const [selectedDept, setSelectedDept] = useState<string>('All');
  const [applyingJob, setApplyingJob] = useState<CareerPosition | null>(null);

  const [applicantName, setApplicantName] = useState('Mukund Sharma');
  const [applicantEmail, setApplicantEmail] = useState('mukund.sharma@example.com');
  const [applicantPhone, setApplicantPhone] = useState('+91 9876543210');
  const [applicantNotes, setApplicantNotes] = useState('Passionate about combining scalable health-tech architectures with evidence-based Ayurveda.');

  const departments = ['All', 'Ayurveda', 'Technology', 'Marketing', 'Content', 'Business Development', 'Operations'];

  const filteredJobs = state.careers.filter((job) => {
    return selectedDept === 'All' || job.department === selectedDept;
  });

  const handleApplicationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applyingJob) return;
    store.showToast(`Application submitted for "${applyingJob.title}". Our talent team will reach out within 48 hours.`, 'success');
    setApplyingJob(null);
  };

  return (
    <section id="careers" className="section-padding" style={{ background: 'var(--surface-white)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">Talent & Culture</div>
          <h2 className="section-title">Build the Future of Ayurveda With Us</h2>
          <p className="section-subtitle">
            Join an interdisciplinary collective of clinicians, engineers, researchers, and operators transforming preventive healthcare.
          </p>
        </div>

        {/* Department Filters */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '8px',
          marginBottom: '40px'
        }}>
          {departments.map((dept) => (
            <button
              key={dept}
              onClick={() => setSelectedDept(dept)}
              style={{
                padding: '8px 18px',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.84rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all var(--transition-snappy)',
                background: selectedDept === dept ? 'var(--emerald-800)' : 'var(--surface-light)',
                color: selectedDept === dept ? '#ffffff' : 'var(--text-secondary)',
                border: selectedDept === dept ? '1px solid var(--emerald-800)' : '1px solid var(--border-light)'
              }}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Job Listings Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '24px',
          marginBottom: '40px'
        }}>
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '28px'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span className="badge badge-emerald">
                    {job.department}
                  </span>
                  <span style={{ fontSize: '0.76rem', color: 'var(--text-muted)', background: 'var(--surface-light)', padding: '2px 8px', borderRadius: '4px' }}>
                    {job.type}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.25rem', color: 'var(--emerald-900)', lineHeight: 1.35, marginBottom: '10px' }}>
                  {job.title}
                </h3>

                <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '20px' }}>
                  {job.description}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  marginBottom: '20px'
                }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin size={13} color="var(--emerald-700)" />
                    {job.location}
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <Briefcase size={13} color="var(--gold-600)" />
                    {job.experience}
                  </span>
                </div>
              </div>

              <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-light)', display: 'flex', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setApplyingJob(job)}
                  className="btn btn-primary btn-sm"
                >
                  <span>Apply for Role</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* APPLICATION MODAL */}
        {applyingJob && (
          <div className="modal-overlay" onClick={() => setApplyingJob(null)}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px 24px',
                borderBottom: '1px solid var(--border-light)',
                background: 'var(--surface-light)'
              }}>
                <div>
                  <span className="badge badge-emerald" style={{ marginBottom: '4px' }}>Career Application</span>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--emerald-900)' }}>{applyingJob.title}</h3>
                </div>

                <button
                  onClick={() => setApplyingJob(null)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleApplicationSubmit} style={{ padding: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-light)' }}
                    />
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                    <div>
                      <label style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                        Email
                      </label>
                      <input
                        type="email"
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-light)' }}
                      />
                    </div>

                    <div>
                      <label style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                        Phone
                      </label>
                      <input
                        type="tel"
                        required
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-light)' }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                      Why are you excited about Ayunexis?
                    </label>
                    <textarea
                      rows={3}
                      value={applicantNotes}
                      onChange={(e) => setApplicantNotes(e.target.value)}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-light)', fontFamily: 'inherit', resize: 'vertical' }}
                    />
                  </div>

                  {/* Resume Upload Simulation */}
                  <div style={{
                    border: '1.5px dashed var(--border-light)',
                    borderRadius: 'var(--radius-md)',
                    padding: '16px',
                    textAlign: 'center',
                    background: 'var(--surface-light)',
                    cursor: 'pointer'
                  }}>
                    <Upload size={22} color="var(--emerald-700)" style={{ margin: '0 auto 6px auto' }} />
                    <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--emerald-900)' }}>
                      Upload Resume / CV (PDF, DOCX)
                    </div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      Simulated: Resume attached (Mukund_Sharma_Resume.pdf)
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  <Send size={15} />
                  <span>Submit Application</span>
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
