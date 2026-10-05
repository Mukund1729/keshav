import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { EventItem } from '../types';
import {
  Calendar,
  Clock,
  MapPin,
  Users,
  Video,
  ArrowRight,
  CheckCircle2,
  X,
  Ticket
} from 'lucide-react';

export const EventsSection: React.FC = () => {
  const [state, store] = useStore();
  const [registeringEvent, setRegisteringEvent] = useState<EventItem | null>(null);
  const [regName, setRegName] = useState('Mukund Sharma');
  const [regEmail, setRegEmail] = useState('mukund.sharma@example.com');
  const [regOrg, setRegOrg] = useState('Individual / Student');

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!registeringEvent) return;
    store.showToast(`Successfully registered for "${registeringEvent.title}"! Entry pass sent to ${regEmail}.`, 'success');
    setRegisteringEvent(null);
  };

  return (
    <section id="events" className="section-padding" style={{ background: 'var(--surface-light)', position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag gold">Academic & Community Calendar</div>
          <h2 className="section-title">Upcoming Events & Summits</h2>
          <p className="section-subtitle">
            Participate in evidence-oriented clinical webinars, ergonomic workshops, health camps, and health-tech symposiums.
          </p>
        </div>

        {/* Events Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
          gap: '28px'
        }}>
          {state.events.map((event) => (
            <div
              key={event.id}
              className="card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: '30px'
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span className="badge badge-emerald">
                    {event.category}
                  </span>
                  {event.isVirtual ? (
                    <span style={{ fontSize: '0.74rem', color: '#0284c7', background: 'rgba(56, 189, 248, 0.1)', padding: '2px 8px', borderRadius: 'var(--radius-full)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <Video size={11} /> Virtual Pod
                    </span>
                  ) : (
                    <span style={{ fontSize: '0.74rem', color: '#8c6a0c', background: 'rgba(212, 175, 55, 0.15)', padding: '2px 8px', borderRadius: 'var(--radius-full)', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                      <MapPin size={11} /> On-Premise
                    </span>
                  )}
                </div>

                <h3 style={{ fontSize: '1.3rem', color: 'var(--emerald-900)', lineHeight: 1.35, marginBottom: '12px' }}>
                  {event.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.55, marginBottom: '20px' }}>
                  {event.description}
                </p>

                {/* Event Metadata details */}
                <div style={{
                  background: 'var(--surface-light)',
                  padding: '14px 16px',
                  borderRadius: 'var(--radius-md)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  fontSize: '0.8rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '20px',
                  border: '1px solid var(--border-light)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Calendar size={14} color="var(--emerald-700)" />
                    <span><strong>Date:</strong> {event.date} • {event.time}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={14} color="var(--gold-600)" />
                    <span><strong>Location:</strong> {event.location}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Users size={14} color="var(--emerald-700)" />
                    <span><strong>Keynote:</strong> {event.speaker}</span>
                  </div>
                </div>
              </div>

              {/* Seats left & Registration Button */}
              <div style={{
                paddingTop: '16px',
                borderTop: '1px solid var(--border-light)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  Seats Left: <strong style={{ color: 'var(--emerald-800)' }}>{event.seatsLeft}</strong>
                </span>

                <button
                  onClick={() => setRegisteringEvent(event)}
                  className="btn btn-primary btn-sm"
                >
                  <Ticket size={14} />
                  <span>Register Free</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* REGISTRATION MODAL */}
        {registeringEvent && (
          <div className="modal-overlay" onClick={() => setRegisteringEvent(null)}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '560px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px 24px',
                borderBottom: '1px solid var(--border-light)',
                background: 'var(--surface-light)'
              }}>
                <div>
                  <span className="badge badge-emerald" style={{ marginBottom: '4px' }}>Event Registration</span>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--emerald-900)' }}>{registeringEvent.title}</h3>
                </div>

                <button
                  onClick={() => setRegisteringEvent(null)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}
                >
                  <X size={18} />
                </button>
              </div>

              <form onSubmit={handleRegisterSubmit} style={{ padding: '24px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                      Attendee Name
                    </label>
                    <input
                      type="text"
                      required
                      value={regName}
                      onChange={(e) => setRegName(e.target.value)}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-light)' }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                      Email Address (for ticket & webinar link)
                    </label>
                    <input
                      type="email"
                      required
                      value={regEmail}
                      onChange={(e) => setRegEmail(e.target.value)}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-light)' }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>
                      Organization / Affiliation
                    </label>
                    <input
                      type="text"
                      value={regOrg}
                      onChange={(e) => setRegOrg(e.target.value)}
                      placeholder="e.g. DPS School, TCS, Self-employed"
                      style={{ width: '100%', padding: '10px 14px', borderRadius: '6px', border: '1px solid var(--border-light)' }}
                    />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  <span>Confirm Registration</span>
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
