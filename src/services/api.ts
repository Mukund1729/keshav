/**
 * AYUNEXIS ENTERPRISE API SERVICE LAYER
 * Modular REST API & ABDM Integration abstraction for backend microservices.
 * 
 * Demonstrates clean architecture for Big Tech SDE technical interviews:
 * Decouples frontend React components from backend REST/GraphQL endpoints,
 * WebRTC signaling servers, and ABDM (Ayushman Bharat Digital Mission) Health Repositories.
 */

import { Doctor, Appointment, CMSStats, ServiceItem, PrakritiResult } from '../types';
import { INITIAL_DOCTORS, INITIAL_CMS_STATS } from '../data/initialData';

const SIMULATED_LATENCY_MS = 180;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export interface CreateAppointmentDTO {
  doctorId: string;
  doctorName: string;
  doctorSpecialty: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  date: string;
  timeSlot: string;
  mode: 'video' | 'in_clinic' | 'audio';
  fee: number;
}

export interface InstitutionalEnquiryDTO {
  name: string;
  email: string;
  phone: string;
  organization?: string;
  purpose: string;
  message?: string;
}

class AyunexisApiService {
  /**
   * Doctors Microservice Endpoint
   * GET /api/v1/doctors
   */
  public async getDoctors(query?: string, specialty?: string): Promise<Doctor[]> {
    await delay(SIMULATED_LATENCY_MS);
    let list = INITIAL_DOCTORS;

    if (specialty && specialty !== 'All') {
      list = list.filter((d) => d.specialty === specialty);
    }
    if (query) {
      const q = query.toLowerCase();
      list = list.filter(
        (d) =>
          d.name.toLowerCase().includes(q) ||
          d.specialty.toLowerCase().includes(q) ||
          d.bio.toLowerCase().includes(q)
      );
    }
    return list;
  }

  /**
   * Telehealth Appointment & ABDM Record Engine
   * POST /api/v1/appointments/schedule
   */
  public async createAppointment(dto: CreateAppointmentDTO): Promise<Appointment> {
    await delay(SIMULATED_LATENCY_MS * 1.5);
    const appointment: Appointment = {
      ...dto,
      id: `apt-${Date.now()}`,
      status: 'upcoming',
      paymentId: `pay_RAZOR_${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    return appointment;
  }

  /**
   * Prakriti Assessment ML Classifier Endpoint
   * POST /api/v1/prakriti/analyze
   */
  public async analyzePrakriti(answers: Record<number, 'vata' | 'pitta' | 'kapha'>): Promise<PrakritiResult> {
    await delay(SIMULATED_LATENCY_MS);
    let vata = 0, pitta = 0, kapha = 0;
    const total = Object.keys(answers).length;

    Object.values(answers).forEach((d) => {
      if (d === 'vata') vata++;
      if (d === 'pitta') pitta++;
      if (d === 'kapha') kapha++;
    });

    const vataPct = Math.round((vata / total) * 100);
    const pittaPct = Math.round((pitta / total) * 100);
    const kaphaPct = 100 - vataPct - pittaPct;

    let primary: PrakritiResult['primaryDosha'] = 'Pitta-Vata';
    if (vataPct > 50) primary = 'Vata';
    else if (pittaPct > 50) primary = 'Pitta';
    else if (kaphaPct > 50) primary = 'Kapha';
    else if (pittaPct >= vataPct) primary = 'Pitta-Vata';
    else primary = 'Vata-Pitta';

    return {
      vata: vataPct,
      pitta: pittaPct,
      kapha: kaphaPct,
      primaryDosha: primary,
      digestiveFire: primary.includes('Pitta') ? 'Tikshnagni (Sharp/Intense)' : 'Vishamagni (Irregular)',
      circadianCycle: 'Solar-aligned metabolism',
      recommendedHerbs: ['Ashwagandha', 'Amalaki', 'Brahmi', 'Shatavari'],
      dietaryGuidelines: [
        'Warm, freshly cooked meals with healthy fats',
        'Favor sweet, bitter, and astringent tastes',
        'Avoid iced beverages during peak digestion'
      ],
      lifestyleRegimen: [
        'Abhyanga self-massage 3x weekly',
        'Circadian sleep window: 10:30 PM - 6:00 AM',
        'Daily 15 min Pranayama'
      ],
      recommendedYoga: [
        'Grounding standing postures (Tadasana)',
        'Gentle seated forward bends',
        'Restorative Savasana'
      ]
    };
  }

  /**
   * AyurTaila AI Spectral Analysis Engine
   * POST /api/v1/innovation/ayurtaila/spectral-scan
   */
  public async scanFormulation(sampleId: string): Promise<{
    sampleId: string;
    purityScore: number;
    spectralPeaks: number[];
    isOptimal: boolean;
  }> {
    await delay(SIMULATED_LATENCY_MS * 2);
    return {
      sampleId,
      purityScore: 98.6,
      spectralPeaks: [88, 95, 78, 85, 98],
      isOptimal: true
    };
  }

  /**
   * Institutional Partner Enquiry Endpoint
   * POST /api/v1/enquiry/submit
   */
  public async submitEnquiry(dto: InstitutionalEnquiryDTO): Promise<{
    referenceId: string;
    status: 'received';
    slaHours: number;
  }> {
    await delay(SIMULATED_LATENCY_MS);
    return {
      referenceId: `ENQ-AYUN-${Math.floor(100000 + Math.random() * 900000)}`,
      status: 'received',
      slaHours: 24
    };
  }

  /**
   * Admin CMS Real-time Metrics Update
   * PUT /api/v1/admin/cms-stats
   */
  public async updateCmsStats(newStats: Partial<CMSStats>): Promise<CMSStats> {
    await delay(SIMULATED_LATENCY_MS);
    return { ...INITIAL_CMS_STATS, ...newStats };
  }
}

export const api = new AyunexisApiService();
