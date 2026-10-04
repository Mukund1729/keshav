import { useState, useEffect } from 'react';
import { Doctor, Appointment, CMSStats, YogaPlan, Article, EventItem, CareerPosition, ServiceItem, PrakritiResult } from '../types';
import { INITIAL_CMS_STATS, INITIAL_DOCTORS, YOGA_PLANS, ARTICLES_DATA, EVENTS_DATA, CAREERS_DATA, SERVICES_DATA } from '../data/initialData';

export interface AppState {
  currentRole: 'visitor' | 'patient' | 'doctor' | 'admin';
  cmsStats: CMSStats;
  doctors: Doctor[];
  yogaPlans: YogaPlan[];
  appointments: Appointment[];
  articles: Article[];
  events: EventItem[];
  careers: CareerPosition[];
  services: ServiceItem[];
  
  // Selected items & modals
  selectedDoctorForBooking: Doctor | null;
  selectedServiceForModal: ServiceItem | null;
  selectedArticleForModal: Article | null;
  selectedEventForModal: EventItem | null;
  selectedJobForModal: CareerPosition | null;
  activeTelehealthAppointment: Appointment | null;
  
  // Modal visibility flags
  isBookingModalOpen: boolean;
  isPrakritiModalOpen: boolean;
  isServiceModalOpen: boolean;
  isArticleModalOpen: boolean;
  isEventModalOpen: boolean;
  isCareerModalOpen: boolean;
  isTelehealthRoomOpen: boolean;
  isAdminModalOpen: boolean;
  
  // Patient Prakriti assessment result
  prakritiResult: PrakritiResult | null;
  
  // Toast notifications
  toastMessage: { text: string; type: 'success' | 'info' | 'warning' } | null;
}

// Initial persistent mock appointments
const INITIAL_APPOINTMENTS: Appointment[] = [
  {
    id: 'apt-101',
    doctorId: 'doc-1',
    doctorName: 'Dr. Aarav Nambiar',
    doctorSpecialty: 'Metabolic & Gut Health',
    patientName: 'Mukund Sharma',
    patientPhone: '+91 98765 43210',
    patientEmail: 'mukund.sharma@example.com',
    date: '2026-10-06',
    timeSlot: '4:30 PM - 5:00 PM',
    mode: 'video',
    status: 'upcoming',
    fee: 799,
    paymentId: 'pay_AYUN_8392104',
    createdAt: '2026-10-04T12:00:00Z'
  }
];

class StoreManager {
  private state: AppState;
  private listeners: Set<() => void> = new Set();

  constructor() {
    // Attempt hydration from localStorage
    const savedRole = localStorage.getItem('ayunexis_role') as AppState['currentRole'] | null;
    const savedStats = localStorage.getItem('ayunexis_cms_stats');
    const savedAppointments = localStorage.getItem('ayunexis_appointments');
    const savedYogaPlans = localStorage.getItem('ayunexis_yoga_plans');

    this.state = {
      currentRole: savedRole || 'visitor',
      cmsStats: savedStats ? JSON.parse(savedStats) : INITIAL_CMS_STATS,
      doctors: INITIAL_DOCTORS,
      yogaPlans: savedYogaPlans ? JSON.parse(savedYogaPlans) : YOGA_PLANS,
      appointments: savedAppointments ? JSON.parse(savedAppointments) : INITIAL_APPOINTMENTS,
      articles: ARTICLES_DATA,
      events: EVENTS_DATA,
      careers: CAREERS_DATA,
      services: SERVICES_DATA,
      selectedDoctorForBooking: null,
      selectedServiceForModal: null,
      selectedArticleForModal: null,
      selectedEventForModal: null,
      selectedJobForModal: null,
      activeTelehealthAppointment: null,
      isBookingModalOpen: false,
      isPrakritiModalOpen: false,
      isServiceModalOpen: false,
      isArticleModalOpen: false,
      isEventModalOpen: false,
      isCareerModalOpen: false,
      isTelehealthRoomOpen: false,
      isAdminModalOpen: false,
      prakritiResult: null,
      toastMessage: null
    };
  }

  public getState(): AppState {
    return this.state;
  }

  public subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  private notify() {
    this.listeners.forEach((listener) => listener());
  }

  public setRole(role: AppState['currentRole']) {
    this.state = { ...this.state, currentRole: role };
    localStorage.setItem('ayunexis_role', role);
    this.showToast(`Switched active workspace view to: ${role.toUpperCase()}`, 'info');
    this.notify();
  }

  public updateCmsStats(newStats: Partial<CMSStats>) {
    const updated = { ...this.state.cmsStats, ...newStats };
    this.state = { ...this.state, cmsStats: updated };
    localStorage.setItem('ayunexis_cms_stats', JSON.stringify(updated));
    this.showToast('Impact metrics updated in live CMS repository', 'success');
    this.notify();
  }

  public updateYogaPlanFee(planId: string, newFee: number) {
    const updatedPlans = this.state.yogaPlans.map((p) => (p.id === planId ? { ...p, monthlyFee: newFee } : p));
    this.state = { ...this.state, yogaPlans: updatedPlans };
    localStorage.setItem('ayunexis_yoga_plans', JSON.stringify(updatedPlans));
    this.showToast(`Updated pricing for ${planId} to ₹${newFee}`, 'success');
    this.notify();
  }

  public openBookingModal(doctor: Doctor) {
    this.state = {
      ...this.state,
      selectedDoctorForBooking: doctor,
      isBookingModalOpen: true
    };
    this.notify();
  }

  public closeBookingModal() {
    this.state = {
      ...this.state,
      isBookingModalOpen: false,
      selectedDoctorForBooking: null
    };
    this.notify();
  }

  public addAppointment(appointmentData: Omit<Appointment, 'id' | 'createdAt'>): Appointment {
    const newAppointment: Appointment = {
      ...appointmentData,
      id: `apt-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    const updated = [newAppointment, ...this.state.appointments];
    this.state = {
      ...this.state,
      appointments: updated,
      isBookingModalOpen: false,
      selectedDoctorForBooking: null
    };
    localStorage.setItem('ayunexis_appointments', JSON.stringify(updated));
    this.showToast(`Consultation confirmed with ${newAppointment.doctorName}!`, 'success');
    this.notify();
    return newAppointment;
  }

  public openTelehealthRoom(appointment: Appointment) {
    this.state = {
      ...this.state,
      activeTelehealthAppointment: appointment,
      isTelehealthRoomOpen: true
    };
    this.notify();
  }

  public closeTelehealthRoom() {
    this.state = {
      ...this.state,
      isTelehealthRoomOpen: false,
      activeTelehealthAppointment: null
    };
    this.notify();
  }

  public setPrakritiModal(open: boolean) {
    this.state = { ...this.state, isPrakritiModalOpen: open };
    this.notify();
  }

  public setPrakritiResult(result: PrakritiResult) {
    this.state = { ...this.state, prakritiResult: result };
    this.notify();
  }

  public setServiceModal(service: ServiceItem | null) {
    this.state = {
      ...this.state,
      selectedServiceForModal: service,
      isServiceModalOpen: !!service
    };
    this.notify();
  }

  public setArticleModal(article: Article | null) {
    this.state = {
      ...this.state,
      selectedArticleForModal: article,
      isArticleModalOpen: !!article
    };
    this.notify();
  }

  public setEventModal(event: EventItem | null) {
    this.state = {
      ...this.state,
      selectedEventForModal: event,
      isEventModalOpen: !!event
    };
    this.notify();
  }

  public setCareerModal(job: CareerPosition | null) {
    this.state = {
      ...this.state,
      selectedJobForModal: job,
      isCareerModalOpen: !!job
    };
    this.notify();
  }

  public setAdminModal(open: boolean) {
    this.state = { ...this.state, isAdminModalOpen: open };
    this.notify();
  }

  public showToast(text: string, type: 'success' | 'info' | 'warning' = 'info') {
    this.state = { ...this.state, toastMessage: { text, type } };
    this.notify();
    setTimeout(() => {
      if (this.state.toastMessage?.text === text) {
        this.state = { ...this.state, toastMessage: null };
        this.notify();
      }
    }, 4500);
  }

  public clearToast() {
    this.state = { ...this.state, toastMessage: null };
    this.notify();
  }
}

export const store = new StoreManager();

export function useStore(): [AppState, StoreManager] {
  const [state, setState] = useState<AppState>(store.getState());

  useEffect(() => {
    return store.subscribe(() => {
      setState(store.getState());
    });
  }, []);

  return [state, store];
}
