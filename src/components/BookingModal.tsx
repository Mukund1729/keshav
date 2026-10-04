import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { Doctor, Appointment } from '../types';
import confetti from 'canvas-confetti';
import {
  X,
  Calendar,
  Clock,
  Video,
  ShieldCheck,
  CheckCircle2,
  Lock,
  CreditCard,
  QrCode,
  ArrowRight,
  Phone,
  Mail,
  User,
  Sparkles
} from 'lucide-react';

export const BookingModal: React.FC = () => {
  const [state, store] = useStore();
  const doctor = state.selectedDoctorForBooking;

  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [selectedDate, setSelectedDate] = useState('2026-10-06');
  const [selectedSlot, setSelectedSlot] = useState('4:30 PM - 5:00 PM');
  const [selectedMode, setSelectedMode] = useState<'video' | 'in_clinic' | 'audio'>('video');

  // Patient Auth & Details
  const [patientName, setPatientName] = useState('Mukund Sharma');
  const [patientPhone, setPatientPhone] = useState('9876543210');
  const [patientEmail, setPatientEmail] = useState('mukund.sharma@example.com');
  const [otpCode, setOtpCode] = useState(['5', '8', '2', '4', '1', '9']);
  const [isOtpVerified, setIsOtpVerified] = useState(true);

  // Payment method
  const [paymentMethod, setPaymentMethod] = useState<'upi' | 'card' | 'netbanking'>('upi');
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const [confirmedAppointment, setConfirmedAppointment] = useState<Appointment | null>(null);

  if (!state.isBookingModalOpen || !doctor) return null;

  const handleVerifyOtp = () => {
    setIsOtpVerified(true);
    store.showToast('Phone number verified via OTP successfully', 'success');
    setStep(3);
  };

  const handleSimulateGoogleLogin = () => {
    setPatientName('Mukund Sharma');
    setPatientEmail('mukund.sharma@gmail.com');
    setIsOtpVerified(true);
    store.showToast('Authenticated via Google Single Sign-On', 'success');
    setStep(3);
  };

  const handleProceedToPayment = () => {
    setIsProcessingPayment(true);
    setTimeout(() => {
      setIsProcessingPayment(false);
      const newApt = store.addAppointment({
        doctorId: doctor.id,
        doctorName: doctor.name,
        doctorSpecialty: doctor.specialty,
        patientName,
        patientPhone: `+91 ${patientPhone}`,
        patientEmail,
        date: selectedDate,
        timeSlot: selectedSlot,
        mode: selectedMode,
        status: 'upcoming',
        fee: doctor.consultationFee,
        paymentId: `pay_RAZOR_${Date.now()}`
      });

      setConfirmedAppointment(newApt);
      setStep(4);

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Fallback gracefully
      }
    }, 1500);
  };

  return (
    <div className="modal-overlay" onClick={() => store.closeBookingModal()}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '640px' }}>
        
        {/* Modal Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '20px 28px',
          borderBottom: '1px solid var(--border-light)',
          background: 'var(--surface-light)'
        }}>
          <div>
            <div style={{ fontSize: '0.78rem', color: 'var(--gold-600)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Telehealth Consultation Scheduler
            </div>
            <h3 style={{ fontSize: '1.25rem', color: 'var(--emerald-900)', marginTop: '2px' }}>
              Consultation with {doctor.name}
            </h3>
          </div>

          <button
            onClick={() => store.closeBookingModal()}
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

        {/* Step Indicator */}
        <div style={{ display: 'flex', padding: '16px 28px', background: 'var(--surface-white)', borderBottom: '1px solid var(--border-light)' }}>
          {[
            { num: 1, label: 'Slot & Mode' },
            { num: 2, label: 'Patient Auth' },
            { num: 3, label: 'Payment' },
            { num: 4, label: 'Confirmation' }
          ].map((s) => (
            <div key={s.num} style={{ flex: 1, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                background: step >= s.num ? 'var(--emerald-700)' : 'var(--border-light)',
                color: step >= s.num ? '#ffffff' : 'var(--text-muted)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.74rem',
                fontWeight: 700
              }}>
                {s.num}
              </div>
              <span style={{ fontSize: '0.78rem', color: step === s.num ? 'var(--emerald-900)' : 'var(--text-muted)', fontWeight: step === s.num ? 700 : 500 }}>
                {s.label}
              </span>
            </div>
          ))}
        </div>

        {/* Modal Body: Dynamic Step Content */}
        <div style={{ padding: '28px' }}>
          
          {/* STEP 1: Date, Slot & Modality */}
          {step === 1 && (
            <div>
              {/* Doctor Quick Snapshot */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                background: 'var(--emerald-50)',
                padding: '14px 18px',
                borderRadius: 'var(--radius-md)',
                marginBottom: '24px',
                border: '1px solid var(--emerald-100)'
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'var(--emerald-800)',
                  color: 'var(--gold-400)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800
                }}>
                  {doctor.name.split(' ').slice(1, 3).map(n => n[0]).join('')}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--emerald-900)', fontSize: '0.96rem' }}>
                    {doctor.specialty}
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    Fee: ₹{doctor.consultationFee} • Experience: {doctor.experienceYears} Years
                  </div>
                </div>
              </div>

              {/* Consultation Mode */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px', display: 'block' }}>
                  Select Consultation Type
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {[
                    { id: 'video', label: 'Video Call', icon: <Video size={16} /> },
                    { id: 'in_clinic', label: 'In-Clinic', icon: <Calendar size={16} /> },
                    { id: 'audio', label: 'Voice Audio', icon: <Phone size={16} /> }
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setSelectedMode(m.id as any)}
                      style={{
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-md)',
                        border: selectedMode === m.id ? '2px solid var(--emerald-700)' : '1px solid var(--border-light)',
                        background: selectedMode === m.id ? 'var(--emerald-50)' : 'var(--surface-white)',
                        color: selectedMode === m.id ? 'var(--emerald-900)' : 'var(--text-secondary)',
                        fontWeight: 600,
                        fontSize: '0.84rem',
                        cursor: 'pointer',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        gap: '6px'
                      }}
                    >
                      {m.icon}
                      <span>{m.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Date */}
              <div style={{ marginBottom: '20px' }}>
                <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px', display: 'block' }}>
                  Select Date
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px' }}>
                  {[
                    { label: 'Today', date: '2026-10-04' },
                    { label: 'Tomorrow', date: '2026-10-05' },
                    { label: 'Wed, Oct 6', date: '2026-10-06' },
                    { label: 'Thu, Oct 7', date: '2026-10-07' }
                  ].map((d) => (
                    <button
                      key={d.date}
                      onClick={() => setSelectedDate(d.date)}
                      style={{
                        padding: '10px 8px',
                        borderRadius: 'var(--radius-md)',
                        border: selectedDate === d.date ? '2px solid var(--emerald-700)' : '1px solid var(--border-light)',
                        background: selectedDate === d.date ? 'var(--emerald-50)' : 'var(--surface-white)',
                        fontSize: '0.82rem',
                        fontWeight: selectedDate === d.date ? 700 : 500,
                        cursor: 'pointer'
                      }}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Select Time Slot */}
              <div style={{ marginBottom: '28px' }}>
                <label style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '8px', display: 'block' }}>
                  Available Time Slots
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                  {['10:00 AM - 10:30 AM', '11:30 AM - 12:00 PM', '4:30 PM - 5:00 PM', '5:30 PM - 6:00 PM', '6:30 PM - 7:00 PM', '7:30 PM - 8:00 PM'].map((slot) => (
                    <button
                      key={slot}
                      onClick={() => setSelectedSlot(slot)}
                      style={{
                        padding: '8px',
                        borderRadius: 'var(--radius-sm)',
                        border: selectedSlot === slot ? '2px solid var(--emerald-700)' : '1px solid var(--border-light)',
                        background: selectedSlot === slot ? 'var(--emerald-50)' : 'var(--surface-white)',
                        fontSize: '0.78rem',
                        fontWeight: selectedSlot === slot ? 700 : 500,
                        cursor: 'pointer'
                      }}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => setStep(2)}
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                <span>Continue to Patient Details</span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}

          {/* STEP 2: Patient Authentication & OTP */}
          {step === 2 && (
            <div>
              {/* Google 1-Click Login Option */}
              <button
                onClick={handleSimulateGoogleLogin}
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--border-light)',
                  background: 'var(--surface-white)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  marginBottom: '20px',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                </svg>
                <span>Continue with Google</span>
              </button>

              <div style={{ textAlign: 'center', position: 'relative', margin: '16px 0' }}>
                <span style={{ background: 'var(--surface-white)', padding: '0 10px', color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                  or verify via phone & OTP
                </span>
              </div>

              {/* Patient Fields */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>
                    Full Patient Name
                  </label>
                  <input
                    type="text"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '0.9rem' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>
                      Mobile Phone
                    </label>
                    <input
                      type="text"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '0.9rem' }}
                    />
                  </div>

                  <div>
                    <label style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '4px' }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={patientEmail}
                      onChange={(e) => setPatientEmail(e.target.value)}
                      style={{ width: '100%', padding: '10px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', fontSize: '0.9rem' }}
                    />
                  </div>
                </div>

                {/* 6-Digit Simulated OTP code */}
                <div style={{ background: 'var(--surface-light)', padding: '14px', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-light)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>Enter 6-digit SMS OTP:</span>
                    <span style={{ fontSize: '0.74rem', color: 'var(--emerald-700)', fontWeight: 600 }}>Auto-filled Mock: 582419</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                    {otpCode.map((digit, i) => (
                      <input
                        key={i}
                        type="text"
                        maxLength={1}
                        value={digit}
                        readOnly
                        style={{
                          width: '38px',
                          height: '42px',
                          textAlign: 'center',
                          borderRadius: '6px',
                          border: '1.5px solid var(--emerald-600)',
                          fontSize: '1.1rem',
                          fontWeight: 700,
                          background: 'var(--surface-white)'
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => setStep(1)}
                  className="btn btn-secondary"
                  style={{ flex: 1 }}
                >
                  Back
                </button>
                <button
                  onClick={handleVerifyOtp}
                  className="btn btn-primary"
                  style={{ flex: 2 }}
                >
                  <span>Verify OTP & Proceed</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: Razorpay Test Payment Gateway Simulation */}
          {step === 3 && (
            <div>
              <div style={{
                background: 'linear-gradient(135deg, #062319, #0a3d2c)',
                color: '#ffffff',
                padding: '20px',
                borderRadius: 'var(--radius-md)',
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <div>
                  <div style={{ fontSize: '0.74rem', color: 'var(--gold-400)', fontFamily: 'var(--font-mono)' }}>
                    RAZORPAY SECURE PAYMENT GATEWAY (SANDBOX)
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 700, marginTop: '2px' }}>
                    Total Payable Amount:
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>
                    Includes encrypted tele-consultation + follow-up notes
                  </div>
                </div>

                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--gold-300)', fontFamily: 'var(--font-mono)' }}>
                  ₹{doctor.consultationFee}
                </div>
              </div>

              {/* Payment Methods */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
                {[
                  { id: 'upi', label: 'Instant UPI (Google Pay, PhonePe, Paytm)', icon: <QrCode size={18} /> },
                  { id: 'card', label: 'Credit / Debit Card (Visa, Mastercard, RuPay)', icon: <CreditCard size={18} /> },
                  { id: 'netbanking', label: 'NetBanking (HDFC, ICICI, SBI)', icon: <Lock size={18} /> }
                ].map((pm) => (
                  <button
                    key={pm.id}
                    onClick={() => setPaymentMethod(pm.id as any)}
                    style={{
                      padding: '14px 16px',
                      borderRadius: 'var(--radius-md)',
                      border: paymentMethod === pm.id ? '2px solid var(--emerald-700)' : '1px solid var(--border-light)',
                      background: paymentMethod === pm.id ? 'var(--emerald-50)' : 'var(--surface-white)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      cursor: 'pointer',
                      fontSize: '0.88rem',
                      fontWeight: 600,
                      color: 'var(--text-primary)'
                    }}
                  >
                    {pm.icon}
                    <span>{pm.label}</span>
                  </button>
                ))}
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => setStep(2)}
                  className="btn btn-secondary"
                  style={{ flex: 1 }}
                >
                  Back
                </button>

                <button
                  onClick={handleProceedToPayment}
                  disabled={isProcessingPayment}
                  className="btn btn-gold btn-lg"
                  style={{ flex: 2 }}
                >
                  <Lock size={16} />
                  <span>{isProcessingPayment ? 'Processing Test Payment...' : `Pay ₹${doctor.consultationFee} & Confirm`}</span>
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: Confirmation & Instant Video Room Access */}
          {step === 4 && confirmedAppointment && (
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'var(--emerald-50)',
                color: 'var(--emerald-700)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px auto',
                border: '2px solid var(--emerald-200)'
              }}>
                <CheckCircle2 size={36} />
              </div>

              <h4 style={{ fontSize: '1.5rem', color: 'var(--emerald-900)', marginBottom: '8px' }}>
                Consultation Confirmed!
              </h4>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                Your appointment with <strong>{confirmedAppointment.doctorName}</strong> is locked in our clinical calendar.
              </p>

              {/* Receipt Summary Card */}
              <div style={{
                background: 'var(--surface-light)',
                borderRadius: 'var(--radius-md)',
                padding: '20px',
                textAlign: 'left',
                border: '1px solid var(--border-light)',
                marginBottom: '24px',
                fontSize: '0.86rem'
              }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div>
                    <span style={{ color: 'var(--text-muted)' }}>Date & Slot:</span>
                    <div style={{ fontWeight: 700, color: 'var(--emerald-900)' }}>
                      {confirmedAppointment.date} • {confirmedAppointment.timeSlot}
                    </div>
                  </div>

                  <div>
                    <span style={{ color: 'var(--text-muted)' }}>Modality:</span>
                    <div style={{ fontWeight: 700, color: 'var(--emerald-900)', textTransform: 'capitalize' }}>
                      {confirmedAppointment.mode} Consultation
                    </div>
                  </div>

                  <div>
                    <span style={{ color: 'var(--text-muted)' }}>Patient:</span>
                    <div style={{ fontWeight: 700, color: 'var(--emerald-900)' }}>
                      {confirmedAppointment.patientName}
                    </div>
                  </div>

                  <div>
                    <span style={{ color: 'var(--text-muted)' }}>Payment Ref:</span>
                    <div style={{ fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--gold-600)' }}>
                      {confirmedAppointment.paymentId.slice(0, 16)}...
                    </div>
                  </div>
                </div>
              </div>

              {/* Live WebRTC Room Simulation CTA */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <button
                  onClick={() => {
                    store.closeBookingModal();
                    store.openTelehealthRoom(confirmedAppointment);
                  }}
                  className="btn btn-primary btn-lg"
                  style={{ width: '100%' }}
                >
                  <Video size={18} />
                  <span>Launch Live Telehealth Video Room (Demo)</span>
                </button>

                <button
                  onClick={() => store.closeBookingModal()}
                  className="btn btn-secondary"
                  style={{ width: '100%' }}
                >
                  <span>Done / Back to Website</span>
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
