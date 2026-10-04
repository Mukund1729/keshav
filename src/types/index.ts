export type UserRole = 'visitor' | 'patient' | 'doctor' | 'admin';

export interface Doctor {
  id: string;
  name: string;
  qualification: string; // e.g. BAMS, MD (Ayu), PhD
  specialty: string; // e.g. Kayachikitsa (Internal Medicine), Panchakarma, Rasayana, Lifestyle & Gut Health
  experienceYears: number;
  consultationFee: number;
  rating: number;
  reviewCount: number;
  languages: string[];
  nextAvailable: string;
  modes: ('video' | 'in_clinic' | 'audio')[];
  bio: string;
  hospitalOrClinic: string;
  registrationNumber: string;
  avatarSeed: string;
}

export interface Appointment {
  id: string;
  doctorId: string;
  doctorName: string;
  doctorSpecialty: string;
  patientName: string;
  patientPhone: string;
  patientEmail: string;
  date: string;
  timeSlot: string;
  mode: 'video' | 'in_clinic' | 'audio';
  status: 'upcoming' | 'live' | 'completed' | 'cancelled';
  fee: number;
  paymentId: string;
  createdAt: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  ctaText: string;
  category: 'individual' | 'institution' | 'wellness' | 'clinical';
  icon: string;
  highlights: string[];
  fullDetails: string;
}

export interface YogaPlan {
  id: string;
  title: string;
  tier: string;
  tagline: string;
  monthlyFee: number;
  sessionsPerWeek: number;
  timing: string;
  batchType: string;
  features: string[];
  recommendedFor: string;
  isPopular?: boolean;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  category: 'Ayurveda' | 'Yoga' | 'Preventive Health' | 'Nutrition' | 'Student Wellness' | 'Corporate Wellness' | 'Sports Wellness' | 'Health Technology';
  excerpt: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    credentials: string;
  };
  publishedDate: string;
  content: string[];
  tags: string[];
}

export interface EventItem {
  id: string;
  title: string;
  category: 'Ayurveda Webinar' | 'Interactive Workshop' | 'Health Camp' | 'Startup Event' | 'Student Competition';
  date: string;
  time: string;
  location: string;
  isVirtual: boolean;
  description: string;
  targetAudience: string;
  speaker: string;
  seatsLeft: number;
}

export interface CareerPosition {
  id: string;
  title: string;
  department: 'Ayurveda' | 'Technology' | 'Marketing' | 'Content' | 'Business Development' | 'Operations';
  location: string;
  type: 'Full-time' | 'Internship' | 'Contract';
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export interface CMSStats {
  doctorsCount: number;
  doctorsCountSuffix: string;
  programsCount: number;
  programsCountSuffix: string;
  institutionsCount: number;
  institutionsCountSuffix: string;
  techInnovationsCount: number;
  techInnovationsCountSuffix: string;
  livesImpacted: number;
  livesImpactedSuffix: string;
}

export interface EcosystemPillar {
  id: 'individuals' | 'doctors' | 'institutions' | 'technology';
  title: string;
  subtitle: string;
  color: string;
  items: {
    name: string;
    desc: string;
    telemetry: string;
  }[];
}

export interface PrakritiQuestion {
  id: number;
  dimension: string;
  question: string;
  options: {
    dosha: 'vata' | 'pitta' | 'kapha';
    label: string;
    sublabel: string;
  }[];
}

export interface PrakritiResult {
  vata: number;
  pitta: number;
  kapha: number;
  primaryDosha: 'Vata' | 'Pitta' | 'Kapha' | 'Vata-Pitta' | 'Pitta-Vata' | 'Pitta-Kapha' | 'Vata-Kapha' | 'Tridoshic';
  digestiveFire: string;
  circadianCycle: string;
  recommendedHerbs: string[];
  dietaryGuidelines: string[];
  lifestyleRegimen: string[];
  recommendedYoga: string[];
}
