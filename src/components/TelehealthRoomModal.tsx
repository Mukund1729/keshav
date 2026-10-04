import React, { useState, useEffect } from 'react';
import { useStore } from '../store/useStore';
import {
  Mic,
  MicOff,
  Video as VideoIcon,
  VideoOff,
  PhoneOff,
  MessageSquare,
  FileText,
  ShieldCheck,
  Send,
  Download,
  Clock,
  Sparkles,
  CheckCircle2,
  X
} from 'lucide-react';

export const TelehealthRoomModal: React.FC = () => {
  const [state, store] = useStore();
  const appointment = state.activeTelehealthAppointment;

  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOff, setIsVideoOff] = useState(false);
  const [callDuration, setCallDuration] = useState(145); // seconds
  const [activeTab, setActiveTab] = useState<'rx' | 'chat'>('rx');
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<{ sender: string; text: string; time: string }[]>([
    { sender: 'Dr. Aarav Nambiar', text: 'Namaste Mukund. I can see you clearly. How has your digestion been over the last week?', time: '4:31 PM' },
    { sender: 'You', text: 'Namaste Doctor. Experiencing sluggish digestion and occasional fatigue in the afternoon.', time: '4:32 PM' }
  ]);

  // Live call timer
  useEffect(() => {
    if (!state.isTelehealthRoomOpen) return;
    const timer = setInterval(() => {
      setCallDuration((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [state.isTelehealthRoomOpen]);

  if (!state.isTelehealthRoomOpen || !appointment) return null;

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const newMsg = { sender: 'You', text: chatInput, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) };
    setChatMessages([...chatMessages, newMsg]);
    setChatInput('');

    // Simulated doctor response
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: appointment.doctorName,
          text: 'Understood. I am adding a customized herbal formulation and timing adjustments to your prescription pad right now.',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 1200);
  };

  const handleDownloadPrescription = () => {
    store.showToast('Digital Ayurvedic Prescription downloaded successfully', 'success');
  };

  return (
    <div className="modal-overlay" style={{ padding: '10px' }}>
      <div className="modal-card" style={{ maxWidth: '1040px', height: '90vh', display: 'flex', flexDirection: 'column' }}>
        
        {/* Telehealth Top Control Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '14px 24px',
          background: 'var(--forest-darkest)',
          color: '#ffffff',
          borderBottom: '1px solid rgba(212, 175, 55, 0.3)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(239, 68, 68, 0.2)',
              color: '#f87171',
              padding: '3px 10px',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.74rem',
              fontWeight: 700
            }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ef4444' }} />
              ENCRYPTED WEBRTC SESSION
            </span>
            <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>
              {appointment.doctorName} <span style={{ color: '#94a3b8', fontSize: '0.78rem' }}>({appointment.doctorSpecialty})</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--gold-300)' }}>
              <Clock size={16} />
              <span>{formatTimer(callDuration)}</span>
            </div>

            <button
              onClick={() => store.closeTelehealthRoom()}
              style={{ background: 'none', border: 'none', color: '#cbd5e1', cursor: 'pointer' }}
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Video Area + Sidebar Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.45fr 1fr', flex: 1, overflow: 'hidden' }} className="telehealth-grid">
          
          {/* Main Video Arena */}
          <div style={{
            background: '#041711',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '20px',
            position: 'relative'
          }}>
            
            {/* Simulated Doctor Video Canvas */}
            <div style={{
              flex: 1,
              background: 'radial-gradient(circle at 50% 40%, #0d3b2c 0%, #02120b 100%)',
              borderRadius: 'var(--radius-lg)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(20, 99, 77, 0.4)'
            }}>
              {/* Doctor Avatar Placeholder */}
              <div style={{
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'var(--emerald-800)',
                border: '3px solid var(--gold-400)',
                color: 'var(--gold-300)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '2rem',
                fontWeight: 800,
                boxShadow: '0 0 30px rgba(212, 175, 55, 0.3)',
                marginBottom: '14px'
              }}>
                {appointment.doctorName.split(' ').slice(1, 3).map(n => n[0]).join('')}
              </div>

              <div style={{ color: '#ffffff', fontWeight: 700, fontSize: '1.1rem' }}>
                {appointment.doctorName}
              </div>
              <div style={{ color: '#4ade80', fontSize: '0.78rem', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80' }} />
                HD Audio & Video Connected (30 fps)
              </div>

              {/* Patient Self-View in Bottom Right Corner */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                right: '16px',
                width: '120px',
                height: '90px',
                background: isVideoOff ? '#1e293b' : '#0f291e',
                borderRadius: 'var(--radius-sm)',
                border: '1.5px solid rgba(255, 255, 255, 0.3)',
                boxShadow: 'var(--shadow-md)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                {isVideoOff ? (
                  <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Camera Off</span>
                ) : (
                  <div style={{ textAlign: 'center', color: '#e2f4ed', fontSize: '0.72rem' }}>
                    <div style={{ fontWeight: 700 }}>You</div>
                    <div style={{ fontSize: '0.65rem', color: '#94a3b8' }}>(Mukund)</div>
                  </div>
                )}
              </div>
            </div>

            {/* In-Call Controls Bottom Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '14px',
              paddingTop: '16px'
            }}>
              <button
                onClick={() => setIsMuted(!isMuted)}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: isMuted ? '#ef4444' : 'rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                title={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <MicOff size={18} /> : <Mic size={18} />}
              </button>

              <button
                onClick={() => setIsVideoOff(!isVideoOff)}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: isVideoOff ? '#ef4444' : 'rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
                title={isVideoOff ? 'Turn Video On' : 'Turn Video Off'}
              >
                {isVideoOff ? <VideoOff size={18} /> : <VideoIcon size={18} />}
              </button>

              <button
                onClick={() => store.closeTelehealthRoom()}
                style={{
                  padding: '0 20px',
                  height: '44px',
                  borderRadius: 'var(--radius-full)',
                  background: '#ef4444',
                  color: '#ffffff',
                  fontWeight: 700,
                  fontSize: '0.86rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer'
                }}
              >
                <PhoneOff size={18} />
                <span>Leave Session</span>
              </button>
            </div>

          </div>

          {/* Right Sidebar: Prescription Pad & Live Chat */}
          <div style={{
            background: 'var(--surface-white)',
            borderLeft: '1px solid var(--border-light)',
            display: 'flex',
            flexDirection: 'column'
          }}>
            {/* Sidebar Tab Header */}
            <div style={{ display: 'flex', borderBottom: '1px solid var(--border-light)' }}>
              <button
                onClick={() => setActiveTab('rx')}
                style={{
                  flex: 1,
                  padding: '14px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  borderBottom: activeTab === 'rx' ? '2px solid var(--emerald-700)' : 'none',
                  color: activeTab === 'rx' ? 'var(--emerald-900)' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  background: activeTab === 'rx' ? 'var(--surface-light)' : 'transparent',
                  cursor: 'pointer'
                }}
              >
                <FileText size={15} />
                <span>E-Prescription Pad</span>
              </button>

              <button
                onClick={() => setActiveTab('chat')}
                style={{
                  flex: 1,
                  padding: '14px',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  borderBottom: activeTab === 'chat' ? '2px solid var(--emerald-700)' : 'none',
                  color: activeTab === 'chat' ? 'var(--emerald-900)' : 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  background: activeTab === 'chat' ? 'var(--surface-light)' : 'transparent',
                  cursor: 'pointer'
                }}
              >
                <MessageSquare size={15} />
                <span>Clinical Chat</span>
              </button>
            </div>

            {/* TAB CONTENT: E-Prescription */}
            {activeTab === 'rx' && (
              <div style={{ flex: 1, overflowY: 'auto', padding: '20px' }}>
                <div style={{
                  background: 'var(--surface-light)',
                  padding: '16px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  marginBottom: '16px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.74rem', color: 'var(--emerald-700)', fontWeight: 800 }}>AYUNEXIS CLINICAL RX</span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>Date: 2026-10-04</span>
                  </div>
                  <div style={{ fontSize: '0.86rem', fontWeight: 700, color: 'var(--emerald-900)' }}>
                    Diagnosis: Mandāgni with Mild Vāta-Kaphaja Imbalance
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '2px' }}>
                    Patient: Mukund S. (32y) • Vitals: BP 120/78, Pulse 72 bpm
                  </div>
                </div>

                {/* Formulations Prescribed */}
                <div style={{ marginBottom: '18px' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '10px' }}>
                    Prescribed Ayurvedic Formulations:
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {[
                      { name: 'Panchamrit Parpati / Agnitundi Vati', dose: '1 tab twice daily', instructions: 'Before meals with lukewarm ginger water' },
                      { name: 'Triphala Kwath (Classical Decoction)', dose: '30 ml at bedtime', instructions: 'With lukewarm water for bowel regulation' },
                      { name: 'Ashwagandha Rasayana', dose: '1 tsp morning', instructions: 'With warm cow milk for stress & vitality' }
                    ].map((med, i) => (
                      <div key={i} style={{ padding: '10px', background: 'var(--surface-white)', border: '1px solid var(--border-light)', borderRadius: '6px' }}>
                        <div style={{ fontWeight: 700, fontSize: '0.84rem', color: 'var(--emerald-900)' }}>{med.name}</div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--emerald-700)', fontWeight: 600 }}>Dose: {med.dose}</div>
                        <div style={{ fontSize: '0.74rem', color: 'var(--text-muted)' }}>Anupana: {med.instructions}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dinacharya Lifestyle Protocol */}
                <div style={{ marginBottom: '20px' }}>
                  <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '8px' }}>
                    Dinacharya Lifestyle Directives:
                  </div>
                  <ul style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', paddingLeft: '18px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <li>Ushapan: 1 glass warm water at 6:30 AM before screen time</li>
                    <li>Avoid refrigerated water, raw salads at dinner, and daytime naps</li>
                    <li>Perform 10 minutes of Anulom Vilom Pranayama daily</li>
                  </ul>
                </div>

                <button
                  onClick={handleDownloadPrescription}
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <Download size={15} />
                  <span>Download Signed E-Prescription (PDF)</span>
                </button>
              </div>
            )}

            {/* TAB CONTENT: Chat */}
            {activeTab === 'chat' && (
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '16px' }}>
                <div style={{ flex: 1, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '14px' }}>
                  {chatMessages.map((msg, i) => (
                    <div
                      key={i}
                      style={{
                        alignSelf: msg.sender === 'You' ? 'flex-end' : 'flex-start',
                        maxWidth: '85%',
                        background: msg.sender === 'You' ? 'var(--emerald-700)' : 'var(--surface-light)',
                        color: msg.sender === 'You' ? '#ffffff' : 'var(--text-primary)',
                        padding: '10px 14px',
                        borderRadius: '12px',
                        border: msg.sender === 'You' ? 'none' : '1px solid var(--border-light)',
                        fontSize: '0.82rem'
                      }}
                    >
                      <div style={{ fontSize: '0.68rem', opacity: 0.8, marginBottom: '2px' }}>
                        {msg.sender} • {msg.time}
                      </div>
                      <div>{msg.text}</div>
                    </div>
                  ))}
                </div>

                <form onSubmit={handleSendMessage} style={{ display: 'flex', gap: '8px' }}>
                  <input
                    type="text"
                    placeholder="Type clinical question to doctor..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    style={{ flex: 1, padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '0.82rem' }}
                  />
                  <button type="submit" className="btn btn-primary btn-sm" style={{ padding: '0 14px' }}>
                    <Send size={15} />
                  </button>
                </form>
              </div>
            )}

          </div>

        </div>

      </div>

      <style>{`
        @media (max-width: 860px) {
          .telehealth-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};
