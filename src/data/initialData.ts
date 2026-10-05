import { Doctor, ServiceItem, YogaPlan, Article, EventItem, CareerPosition, CMSStats, PrakritiQuestion } from '../types';

export const INITIAL_CMS_STATS: CMSStats = {
  doctorsCount: 120,
  doctorsCountSuffix: '+',
  programsCount: 35,
  programsCountSuffix: '+',
  institutionsCount: 48,
  institutionsCountSuffix: '+',
  techInnovationsCount: 6,
  techInnovationsCountSuffix: '+',
  livesImpacted: 85000,
  livesImpactedSuffix: '+'
};

export const INITIAL_DOCTORS: Doctor[] = [
  {
    id: 'doc-1',
    name: 'Dr. Aarav Nambiar',
    qualification: 'BAMS, MD (Ayurveda - Kayachikitsa), BHU',
    specialty: 'Metabolic & Gut Health',
    experienceYears: 14,
    consultationFee: 799,
    rating: 4.95,
    reviewCount: 340,
    languages: ['English', 'Hindi', 'Malayalam'],
    nextAvailable: 'Today, 4:30 PM',
    modes: ['video', 'in_clinic', 'audio'],
    bio: 'Specialist in metabolic re-tuning, lifestyle disorder reversal, and evidence-oriented gut microbiome harmony using classical Kayachikitsa.',
    hospitalOrClinic: 'Ayunexis Centre of Integrative Health',
    registrationNumber: 'AYU-MED-84920',
    avatarSeed: 'aarav'
  },
  {
    id: 'doc-2',
    name: 'Dr. Meera Vaidyanathan',
    qualification: 'BAMS, MS (Ayurveda - Shalakya), IPGTRA Jamnagar',
    specialty: 'Preventive & Neuro-Sensory Wellness',
    experienceYears: 11,
    consultationFee: 899,
    rating: 4.92,
    reviewCount: 285,
    languages: ['English', 'Hindi', 'Tamil'],
    nextAvailable: 'Tomorrow, 10:00 AM',
    modes: ['video', 'in_clinic'],
    bio: 'Pioneer in computer-vision eye fatigue reversal and sensory organ rehabilitation integrating traditional Shalakya protocols with digital ergonomic therapy.',
    hospitalOrClinic: 'Ayunexis Clinical Research Guild',
    registrationNumber: 'AYU-MED-92813',
    avatarSeed: 'meera'
  },
  {
    id: 'doc-3',
    name: 'Dr. Vikramaditya Sharma',
    qualification: 'BAMS, MD (Panchakarma), National Institute of Ayurveda (NIA)',
    specialty: 'Panchakarma & Cellular Detox',
    experienceYears: 18,
    consultationFee: 999,
    rating: 4.98,
    reviewCount: 512,
    languages: ['English', 'Hindi'],
    nextAvailable: 'Today, 6:00 PM',
    modes: ['video', 'in_clinic', 'audio'],
    bio: 'Senior consultant focusing on authentic bio-purification, chronic inflammation mitigation, and seasonal Dinacharya optimization.',
    hospitalOrClinic: 'Charaka Ayurvedic Research Sanatorium',
    registrationNumber: 'AYU-MED-62180',
    avatarSeed: 'vikram'
  },
  {
    id: 'doc-4',
    name: 'Dr. Ananya Deshmukh',
    qualification: 'BAMS, PGD (Sports Ayurveda & Marma Science)',
    specialty: 'Sports & Musculoskeletal Recovery',
    experienceYears: 9,
    consultationFee: 749,
    rating: 4.88,
    reviewCount: 198,
    languages: ['English', 'Hindi', 'Marathi'],
    nextAvailable: 'Tomorrow, 2:15 PM',
    modes: ['video', 'audio'],
    bio: 'Specialist in sports injury prevention, Marma point therapeutic stimulation, and kinetic recovery for competitive athletes and corporate professionals.',
    hospitalOrClinic: 'Ayunexis Kinetic Wellness Pod',
    registrationNumber: 'AYU-MED-10492',
    avatarSeed: 'ananya'
  },
  {
    id: 'doc-5',
    name: 'Dr. Rajeshwari Joshi',
    qualification: 'BAMS, MD (Prasuti & Stree Roga), Gujarat Ayurved University',
    specialty: 'Hormonal & Women’s Health',
    experienceYears: 15,
    consultationFee: 850,
    rating: 4.96,
    reviewCount: 420,
    languages: ['English', 'Hindi', 'Gujarati'],
    nextAvailable: 'Today, 7:15 PM',
    modes: ['video', 'in_clinic'],
    bio: 'Leading practitioner in rhythmic endocrine balance, PCOS/PCOD holistic management, and post-natal rejuvenation through classical Stree Roga.',
    hospitalOrClinic: 'Sushruta Wellness Pavilion',
    registrationNumber: 'AYU-MED-77149',
    avatarSeed: 'rajeshwari'
  },
  {
    id: 'doc-6',
    name: 'Dr. Kshitij Sengupta',
    qualification: 'BAMS, Fellow in Rasayana & Preventive Gerontology',
    specialty: 'Longevity & Rasayana Protocols',
    experienceYears: 12,
    consultationFee: 799,
    rating: 4.91,
    reviewCount: 260,
    languages: ['English', 'Hindi', 'Bengali'],
    nextAvailable: 'Wednesday, 11:30 AM',
    modes: ['video', 'audio'],
    bio: 'Focuses on cellular rejuvenation, circadian adaptation, immuno-modulation, and preventive mental wellness for high-stress executives.',
    hospitalOrClinic: 'Ayunexis Longevity Lab',
    registrationNumber: 'AYU-MED-91042',
    avatarSeed: 'kshitij'
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ayurvedic-consultations',
    title: 'Ayurvedic Consultations',
    tagline: 'Personalized Clinical Guidance by Verified BAMS/MD Experts',
    description: 'Connect with qualified Ayurveda practitioners for personalized, evidence-informed consultations tailored to your unique bio-constitution.',
    ctaText: 'Find a Doctor',
    category: 'clinical',
    icon: 'Stethoscope',
    highlights: [
      'Verified BAMS & MD Ayurveda Specialists',
      'High-definition encrypted video tele-consults',
      'Standardized digital Ayurvedic prescriptions',
      'Follow-up wellness tracking and diet plans'
    ],
    fullDetails: 'Ayunexis connects individuals with elite Ayurvedic practitioners vetted through rigorous credential validation. Consultations encompass detailed history taking, Darshana (observation), Sparshana (palpation), and Prashna (interrogation), culminating in individualized lifestyle, herbal, and dietary protocols.'
  },
  {
    id: 'prakriti-parikshan',
    title: 'Prakriti Parikshan',
    tagline: 'Technology-Enabled Constitution & Dosha Assessment',
    description: 'Technology-enabled assessment of individual constitution (Vata, Pitta, Kapha) and personalized wellness requirements.',
    ctaText: 'Explore Prakriti Assessment',
    category: 'wellness',
    icon: 'Activity',
    highlights: [
      'Multi-dimensional phenotypic & metabolic markers',
      'Algorithmic doshic equilibrium scoring',
      'Personalized circadian rhythm (Dinacharya) map',
      'Actionable nutritional & lifestyle guidelines'
    ],
    fullDetails: 'Prakriti Parikshan is Ayurveda’s foundational blueprint. By combining classical Sushruta & Charaka diagnostic paradigms with digital multi-factor questionnaires, Ayunexis provides an intuitive, measurable report on your inherent psycho-somatic disposition.'
  },
  {
    id: 'yoga-wellness',
    title: 'Yoga & Wellness',
    tagline: 'Therapeutic, Breath-Centric & Modern Regimens',
    description: 'Online yoga programs designed for beginners, busy professionals, and wellness seekers looking for structured mind-body harmony.',
    ctaText: 'Join Yoga',
    category: 'wellness',
    icon: 'Sun',
    highlights: [
      'Certified Hatha & Vinyasa instructors',
      'Morning (energy) and evening (decompression) batches',
      'Pranayama & mindfulness integration',
      'Posture correction and mobility focus'
    ],
    fullDetails: 'Designed to complement Ayurvedic lifestyle guidance, our live interactive yoga sessions are tailored for modern schedules. Whether tackling sedentary posture or stress reduction, each batch blends classical asana alignment with breathing techniques.'
  },
  {
    id: 'corporate-wellness',
    title: 'Corporate Wellness',
    tagline: 'High-Impact Health Architecture for Modern Organizations',
    description: 'Customized Ayurveda and preventive wellness programs engineered to reduce burnout, elevate executive endurance, and curb absenteeism.',
    ctaText: 'Corporate Wellness',
    category: 'institution',
    icon: 'Building2',
    highlights: [
      'Desk posture & ergonomic alignment workshops',
      'Stress resilience & circadian nutrition sessions',
      'On-site executive pulse diagnosis camps',
      'Measurable corporate wellness analytics'
    ],
    fullDetails: 'Ayunexis partners with forward-thinking enterprises to institute holistic employee health frameworks. We replace superficial perks with structured preventive protocols, mental wellness masterclasses, and on-premise biometric/Ayurvedic screenings.'
  },
  {
    id: 'school-wellness',
    title: 'School Wellness',
    tagline: 'Preventive Health & Holistic Foundations for Students',
    description: 'Preventive health and wellness programs for schools and educational institutions focusing on early detection and lifelong healthy habits.',
    ctaText: 'School Wellness Program',
    category: 'institution',
    icon: 'GraduationCap',
    highlights: [
      'Comprehensive pediatric health screening',
      'Vision, dental, and spinal posture evaluation',
      'Age-appropriate yoga & attention-focus techniques',
      'Parental nutrition & Dinacharya counseling'
    ],
    fullDetails: 'Ayunexis transforms school health from reactive sick-bays to proactive wellness ecosystems. We assess students across 10 vital parameters, delivering confidential health cards to parents and structured wellness curricula to educators.'
  },
  {
    id: 'sports-wellness',
    title: 'Sports & Athlete Wellness',
    tagline: 'Kinetic Endurance, Musculoskeletal Recovery & Marma Therapy',
    description: 'Wellness programs designed for athletes, training academies, and sports communities seeking natural recovery and longevity.',
    ctaText: 'Explore Sports Wellness',
    category: 'wellness',
    icon: 'Trophy',
    highlights: [
      'Marma point musculoskeletal rehabilitation',
      'Natural adaptogen and endurance profiling',
      'Recovery cycle optimization and sleep hygiene',
      'Joint integrity & flexibility conditioning'
    ],
    fullDetails: 'Bridging ancient Marma therapy with sports kinesiology, our athletic programs optimize muscle recovery, reduce soft-tissue inflammation, and provide natural, clean adaptogenic nutrition guidelines.'
  },
  {
    id: 'health-camps',
    title: 'Health Camps',
    tagline: 'High-Touch On-Ground Preventive Diagnostics',
    description: 'On-ground preventive health camps for institutions, organizations, residential hubs, and local communities.',
    ctaText: 'Organize a Camp',
    category: 'institution',
    icon: 'Users',
    highlights: [
      'Multi-doctor on-site consultation stations',
      'Basic non-invasive diagnostic vitals testing',
      'Prakriti assessment kiosks',
      'Herbal formulation guidance & educational sessions'
    ],
    fullDetails: 'We deploy certified medical teams and digital intake systems directly to institutional campuses. Attendees receive instant consultation, vital screening, and digital follow-up access through the Ayunexis platform.'
  }
];

export const SCHOOL_COMPONENTS = [
  {
    title: 'Basic Health Screening',
    desc: 'Systematic pediatric vital assessment including pulse, blood pressure, temperature, and general systemic examination.',
    icon: 'HeartPulse'
  },
  {
    title: 'BMI & Growth Assessment',
    desc: 'Age-standardized height, weight, and anthropometric index tracking to monitor developmental milestones.',
    icon: 'TrendingUp'
  },
  {
    title: 'Vision Screening',
    desc: 'Snellen visual acuity checks and early detection of screen-induced refractive errors and digital eye strain.',
    icon: 'Eye'
  },
  {
    title: 'Dental Screening',
    desc: 'Oral cavity hygiene examination, caries detection, and preventative brushing/diet guidance.',
    icon: 'Smile'
  },
  {
    title: 'Nutrition Awareness',
    desc: 'Interactive modules teaching children seasonal foods, wholesome breakfast habits, and avoiding ultra-processed foods.',
    icon: 'Apple'
  },
  {
    title: 'Posture Assessment',
    desc: 'Detection of heavy backpack-induced kyphosis, tech-neck, scoliosis indicators, and desk ergonomics.',
    icon: 'Compass'
  },
  {
    title: 'Yoga & Breathwork Sessions',
    desc: 'Fun, engaging asana flows and Pranayama to boost lung capacity, flexibility, and physical poise.',
    icon: 'Wind'
  },
  {
    title: 'Mental Wellness & Focus',
    desc: 'Gentle mindfulness exercises, exam-anxiety alleviation techniques, and emotional resilience building.',
    icon: 'Brain'
  },
  {
    title: 'Ayurveda Awareness',
    desc: 'Introducing foundational concepts of Dinacharya (daily biological clock) and seasonal lifestyle harmonization.',
    icon: 'BookOpen'
  },
  {
    title: 'Prakriti Assessment',
    desc: 'Age-appropriate constitutional profiling to help educators and parents nurture each child’s unique biological strengths.',
    icon: 'Sparkles'
  }
];

export const YOGA_PLANS: YogaPlan[] = [
  {
    id: 'yoga-starter',
    title: 'Mindful Foundations',
    tier: 'Beginner / Reset',
    tagline: 'Ideal for beginners and professionals combating sedentary fatigue',
    monthlyFee: 1499,
    sessionsPerWeek: 3,
    timing: 'Morning (6:30 AM - 7:30 AM IST) or Evening (6:30 PM - 7:30 PM IST)',
    batchType: 'Live Interactive Virtual Sessions',
    features: [
      '3 live sessions per week (12/month)',
      'Classical Hatha & Gentle Vinyasa flows',
      'Pranayama & guided 10-min meditation',
      'Posture alignment feedback from lead trainers',
      'Access to session recordings for 7 days'
    ],
    recommendedFor: 'Sedentary workers, beginners, stress relief'
  },
  {
    id: 'yoga-pro',
    title: 'Dynamic Vitality',
    tier: 'Core & Therapeutic',
    tagline: 'Our most comprehensive regimen for stamina, flexibility, and metabolic tune-up',
    monthlyFee: 2499,
    sessionsPerWeek: 5,
    timing: 'Daily Mon-Fri (7:00 AM - 8:00 AM IST) & Evening (7:00 PM - 8:00 PM IST)',
    batchType: 'Small Batch Live Studio',
    isPopular: true,
    features: [
      '5 live sessions per week (20/month)',
      'Ashtanga-inspired flows & mobility conditioning',
      'Deep breathwork (Anulom Vilom, Bhastrika, Kapalbhati)',
      'Monthly 1-on-1 Ayurvedic Dinacharya consultation',
      'Desk-break mini routines & mobility audio guides',
      'Unlimited recorded archive access'
    ],
    recommendedFor: 'Regular practitioners, executives, weight management'
  },
  {
    id: 'yoga-elite',
    title: 'Institutional & Corporate',
    tier: 'Custom Enterprise Pod',
    tagline: 'Customized wellness pods for companies, schools, and private groups',
    monthlyFee: 14999,
    sessionsPerWeek: 4,
    timing: 'Custom Scheduled Slot for Your Organization',
    batchType: 'Dedicated Hybrid / On-Premise / Zoom',
    features: [
      'Dedicated certified master instructor',
      'Customized curriculum (Ergonomics, Stress, Deep Rest)',
      'Bi-weekly wellness webinars & posture audits',
      'Attendance & employee engagement analytics dashboard',
      'Complementary quarterly doctor health camp on-site'
    ],
    recommendedFor: 'Corporate teams, sports clubs, educational institutes'
  }
];

export const ARTICLES_DATA: Article[] = [
  {
    id: 'art-1',
    title: 'Circadian Biology Meets Dinacharya: Why Biological Timing Dictates Metabolic Health',
    slug: 'circadian-biology-dinacharya-metabolism',
    category: 'Ayurveda',
    excerpt: 'How contemporary Nobel-prize-winning chronobiology mirrors the 5,000-year-old Ayurvedic Dinacharya framework for insulin sensitivity and sustained vitality.',
    readTime: '6 min read',
    publishedDate: 'Sep 28, 2026',
    author: {
      name: 'Dr. Aarav Nambiar',
      role: 'Head of Clinical Medicine',
      credentials: 'BAMS, MD (Kayachikitsa)'
    },
    tags: ['Dinacharya', 'Chronobiology', 'Gut Health', 'Metabolism'],
    content: [
      'In 2017, the Nobel Prize in Physiology or Medicine was awarded for discoveries on molecular mechanisms controlling circadian rhythms. What Western science recently pinpointed at the cellular level was systematically codified millennia ago in Charaka Samhita under the doctrine of Dinacharya.',
      'Ayurveda divides the 24-hour cycle into distinct doshic phases: 6 AM to 10 AM (Kapha - heavy, grounding), 10 AM to 2 PM (Pitta - peak digestive fire or Agni), and 2 PM to 6 PM (Vata - neurological alertness and kinetic movement).',
      'Aligning our caloric intake with solar peak (Pitta window) significantly improves postprandial glucose regulation, reduces cellular inflammatory markers, and enhances nocturnal melatonin secretion. At Ayunexis, our algorithmic health trackers quantify this very harmony.'
    ]
  },
  {
    id: 'art-2',
    title: 'Digitizing Prakriti: Using Multi-Factor Phenotypic Scoring to Personalize Preventive Care',
    slug: 'digitizing-prakriti-phenotypic-scoring-preventive-care',
    category: 'Health Technology',
    excerpt: 'An exploratory look into how software architectures, machine learning classifiers, and validated classical questionnaires translate ancient bio-types into clinical precision.',
    readTime: '8 min read',
    publishedDate: 'Sep 20, 2026',
    author: {
      name: 'Kavya S. Iyer',
      role: 'VP of Health Informatics',
      credentials: 'MTech Biomedical Data Science'
    },
    tags: ['HealthTech', 'Prakriti', 'AI Diagnostics', 'Precision Medicine'],
    content: [
      'Ayurveda has always been precision medicine. Unlike the one-size-fits-all model of modern pharmaceutical intervention, Ayurvedic therapeutics begin with the patient’s constitutional matrix: Prakriti.',
      'The engineering challenge lies in converting qualitative Ayurvedic markers—such as Agni state, skin lipid characteristics, and metabolic recovery rates—into reproducible, verifiable quantitative datasets.',
      'Through Ayunexis Informatics, we utilize high-dimensional vector spaces where individual clinical parameters map to dosha coordinates, generating personalized lifestyle and nutritional recommendations backed by computational heuristics.'
    ]
  },
  {
    id: 'art-3',
    title: 'The Silent Epidemic of Tech Neck: Ergonomic Restoration for Corporate Knowledge Workers',
    slug: 'tech-neck-ergonomics-corporate-wellness',
    category: 'Corporate Wellness',
    excerpt: 'Practical musculoskeletal resets and Marma point stimulation techniques to alleviate chronic cervical strain in high-screen-time professionals.',
    readTime: '5 min read',
    publishedDate: 'Sep 15, 2026',
    author: {
      name: 'Dr. Ananya Deshmukh',
      role: 'Consultant Sports & Ergonomics',
      credentials: 'BAMS, PGD Sports Ayurveda'
    },
    tags: ['Ergonomics', 'Corporate Health', 'Marma Therapy', 'Posture'],
    content: [
      'When your head leans forward by just 45 degrees to look at a laptop or mobile phone, the gravitational load experienced by your cervical spine escalates from approximately 5 kg to upwards of 22 kg.',
      'Over weeks and months, this causes sub-occipital muscular shortening, shoulder protraction, and chronic tension headaches. Ayunexis Corporate Wellness protocols emphasize micro-movements every 45 minutes.',
      'By stimulating the Krikāṭikā and Aṁsaphalaka marma points paired with cervical retraction flows, employees report an average 43% reduction in end-of-day shoulder fatigue within three weeks.'
    ]
  },
  {
    id: 'art-4',
    title: 'Reimagining School Healthcare: Why Periodic Screening Must Replace the Passive Sick Bay',
    slug: 'reimagining-school-healthcare-preventive-screening',
    category: 'Student Wellness',
    excerpt: 'Why proactive biometric, visual, and postural surveillance in primary education lays the foundation for generational wellness and academic excellence.',
    readTime: '7 min read',
    publishedDate: 'Sep 08, 2026',
    author: {
      name: 'Dr. Meera Vaidyanathan',
      role: 'Director of Institutional Health',
      credentials: 'BAMS, MS (Ayurveda)'
    },
    tags: ['Pediatric Health', 'Schools', 'Preventive Screening', 'Vision Health'],
    content: [
      'Historically, school medical facilities operated as reactive emergency rooms—administering paracetamol for fevers or bandaging scraped knees. However, 80% of adolescent learning is processed visually, and over 35% of undiagnosed visual strain is misinterpreted as attention-deficit behavior.',
      'The Ayunexis School Wellness Program introduces systematic, 10-point preventive screenings directly into campus schedules. From detecting early spinal curvatures to screening dental caries and teaching mindfulness.',
      'When schools proactively monitor health metrics and deliver actionable insights to parents, academic engagement and overall student vitality rise measurably.'
    ]
  }
];

export const EVENTS_DATA: EventItem[] = [
  {
    id: 'ev-1',
    title: 'National Symposium: Evidence-Based Ayurveda & Digital Health Integration',
    category: 'Ayurveda Webinar',
    date: 'October 24, 2026',
    time: '10:00 AM - 1:00 PM IST',
    location: 'Virtual Broadcast & Hybrid Hub (New Delhi)',
    isVirtual: true,
    description: 'Leading Ayurvedic academicians, health-tech engineers, and clinical researchers discuss standardized outcomes, digital records, and clinical trial architectures.',
    targetAudience: 'Doctors, Researchers, Health-tech Founders, Regulators',
    speaker: 'Dr. Aarav Nambiar & Panel of Renowned Vaidyas',
    seatsLeft: 84
  },
  {
    id: 'ev-2',
    title: 'Corporate Ergonomics & Circadian Performance Masterclass',
    category: 'Interactive Workshop',
    date: 'November 05, 2026',
    time: '4:00 PM - 5:30 PM IST',
    location: 'Live Interactive Zoom Pod',
    isVirtual: true,
    description: 'A hands-on tactical session for HR leaders, team managers, and knowledge workers to eliminate afternoon brain fog and chronic desk-related stiffness.',
    targetAudience: 'HR Directors, Founders, Tech Executives, Wellness Leads',
    speaker: 'Dr. Ananya Deshmukh & Ergonomic Ergonomics Team',
    seatsLeft: 42
  },
  {
    id: 'ev-3',
    title: 'Ayunexis Mega Preventive Health & Prakriti Screening Camp',
    category: 'Health Camp',
    date: 'November 14, 2026',
    time: '8:30 AM - 4:00 PM IST',
    location: 'Ayunexis Health & Wellness Hub, Hisar, Haryana',
    isVirtual: false,
    description: 'On-ground comprehensive health camp featuring free Prakriti diagnostics, BMI, dental, vision, and pulse examinations by our certified medical team.',
    targetAudience: 'Families, Students, Senior Citizens, Community Members',
    speaker: 'Ayunexis Clinical Medical Fleet',
    seatsLeft: 110
  }
];

export const CAREERS_DATA: CareerPosition[] = [
  {
    id: 'car-1',
    title: 'Senior Clinical Ayurveda Consultant (Kayachikitsa / Panchakarma)',
    department: 'Ayurveda',
    location: 'Remote / Bengaluru / New Delhi',
    type: 'Full-time',
    experience: '5+ years clinical practice',
    description: 'Lead digital telehealth consultations, design clinical outcome protocols, and collaborate with our health-tech engineers on algorithmic wellness pathways.',
    responsibilities: [
      'Conduct video & clinical consultations through the Ayunexis platform',
      'Validate clinical guidelines for AI-assisted Prakriti and formulation modules',
      'Mentor junior practitioners and curate institutional educational materials',
      'Participate in clinical evidence documentation and peer-reviewed studies'
    ],
    requirements: [
      'BAMS and MD/MS in Ayurveda from a recognized statutory university',
      'Valid state or central council registration',
      'Excellent verbal communication and digital tool proficiency',
      'Demonstrated passion for evidence-oriented holistic medicine'
    ]
  },
  {
    id: 'car-2',
    title: 'Full Stack Staff Engineer (React, TypeScript, Node.js & Distributed Systems)',
    department: 'Technology',
    location: 'Bengaluru / Hybrid / Remote',
    type: 'Full-time',
    experience: '4+ years in high-growth software engineering',
    description: 'Architect and scale our core health platform, doctor consultation engine, WebRTC telehealth pipelines, and HIPAA/ABDM-compliant health record storage.',
    responsibilities: [
      'Design modular, performant, and resilient microservices and frontend architectures',
      'Build real-time telehealth video consultation modules and appointment scheduling engines',
      'Ensure 99.99% uptime, end-to-end data encryption, and sub-100ms API response latency',
      'Collaborate with clinical teams on health informatics and diagnostic algorithms'
    ],
    requirements: [
      'Deep fluency in React 18/19, TypeScript, modern CSS architecture, and Node/Go',
      'Experience building consumer-facing portals with high security and privacy',
      'Knowledge of WebRTC, WebSocket protocols, and cloud infrastructures (AWS/GCP)',
      'Strong computer science fundamentals and algorithmic problem-solving'
    ]
  },
  {
    id: 'car-3',
    title: 'Institutional Partnerships Lead (Schools & Corporates)',
    department: 'Business Development',
    location: 'Mumbai / New Delhi / Bengaluru',
    type: 'Full-time',
    experience: '3-6 years B2B enterprise or education sales',
    description: 'Drive strategic partnerships with tier-1 schools, universities, multinational corporations, and sports academies for institutional wellness programs.',
    responsibilities: [
      'Establish relationships with CXOs, HR leaders, and school management boards',
      'Pitch, negotiate, and close end-to-end institutional health contracts',
      'Work alongside operations to deliver seamless on-premise health camps',
      'Track institutional renewal rates and customer satisfaction metrics'
    ],
    requirements: [
      'Proven track record in enterprise B2B sales or institutional education partnerships',
      'Outstanding consultative presentation and deal negotiation acumen',
      'Comfort with fast-paced startup velocity and cross-functional leadership'
    ]
  },
  {
    id: 'car-4',
    title: 'Medical Content & Health Informatics Specialist',
    department: 'Content',
    location: 'Remote',
    type: 'Full-time',
    experience: '2+ years health communication or medical writing',
    description: 'Translate intricate classical Ayurvedic texts and modern preventive biomedical literature into captivating, authoritative, and SEO-optimized knowledge assets.',
    responsibilities: [
      'Research and author evidence-backed long-form articles, whitepapers, and guides',
      'Draft patient education brochures and school wellness curriculum booklets',
      'Ensure zero medical misinformation and maintain scientific credibility across all platforms'
    ],
    requirements: [
      'Degree in Life Sciences, BAMS, Pharmacy, or Medical Journalism',
      'Exceptional editorial rigor and ability to write engaging prose without pseudoscience',
      'Understanding of health SEO, keyword intent, and digital content distribution'
    ]
  }
];

export const PRAKRITI_QUESTIONS: PrakritiQuestion[] = [
  {
    id: 1,
    dimension: 'Physical Frame & Metabolism',
    question: 'How would you characterize your natural physical build and body frame?',
    options: [
      {
        dosha: 'vata',
        label: 'Slender, Lean & Light',
        sublabel: 'Prominent joints, veins easily visible, difficulty gaining weight, fast metabolism'
      },
      {
        dosha: 'pitta',
        label: 'Moderate, Symmetrical & Athletic',
        sublabel: 'Medium muscle definition, stable weight, prone to body heat and thirst'
      },
      {
        dosha: 'kapha',
        label: 'Solid, Broad & Sturdy',
        sublabel: 'Dense bone structure, easily gains weight, strong endurance, slower metabolic pace'
      }
    ]
  },
  {
    id: 2,
    dimension: 'Digestive Capacity & Appetite',
    question: 'What best describes your regular appetite and digestion (Agni)?',
    options: [
      {
        dosha: 'vata',
        label: 'Variable & Irregular',
        sublabel: 'Sometimes voracious, sometimes forget to eat; prone to gas, bloating or dryness'
      },
      {
        dosha: 'pitta',
        label: 'Sharp, Intense & Punctual',
        sublabel: 'Must eat on time or become irritable; can digest large meals; prone to hyperacidity'
      },
      {
        dosha: 'kapha',
        label: 'Slow, Steady & Moderate',
        sublabel: 'Can comfortably skip meals without irritation; heavy digestion after oily foods'
      }
    ]
  },
  {
    id: 3,
    dimension: 'Mental Temperament & Stress Response',
    question: 'Under acute pressure or unexpected change, how do your thoughts react?',
    options: [
      {
        dosha: 'vata',
        label: 'Quick, Restless & Anxious',
        sublabel: 'Fast ideation, easily distracted, worries or overthinks when overwhelmed'
      },
      {
        dosha: 'pitta',
        label: 'Focussed, Direct & Impatient',
        sublabel: 'Action-oriented, analytical, critical of inefficiency, can flare with irritation'
      },
      {
        dosha: 'kapha',
        label: 'Calm, Deliberate & Protective',
        sublabel: 'Rarely flustered, methodical, dislikes sudden disruption, steady emotional reserve'
      }
    ]
  },
  {
    id: 4,
    dimension: 'Sleep Patterns & Energy Cycle',
    question: 'How do you describe your typical sleep quality and wakefulness?',
    options: [
      {
        dosha: 'vata',
        label: 'Light, Interrupted & Restless',
        sublabel: 'Tends to wake up easily at odd hours; dreams of flying, falling, or high motion'
      },
      {
        dosha: 'pitta',
        label: 'Sound & Moderate Duration',
        sublabel: 'Falls asleep quickly, wakes up alert; dreams are colorful, intense, or problem-solving'
      },
      {
        dosha: 'kapha',
        label: 'Deep, Heavy & Prolonged',
        sublabel: 'Rarely disturbed once asleep; groggy in mornings, takes time to fully awaken'
      }
    ]
  },
  {
    id: 5,
    dimension: 'Environmental & Climatic Sensitivity',
    question: 'Which weather or climate condition causes you the greatest discomfort?',
    options: [
      {
        dosha: 'vata',
        label: 'Cold, Dry & Windy Conditions',
        sublabel: 'Dislikes drafts and cold weather; loves warmth, humidity, oil massage, and hot tea'
      },
      {
        dosha: 'pitta',
        label: 'Hot, Humid & Blazing Sun',
        sublabel: 'Excessively uncomfortable in hot summers; easily flushed or sunburned; loves cool breezes'
      },
      {
        dosha: 'kapha',
        label: 'Damp, Chilly & Overcast Days',
        sublabel: 'Feels congested, sluggish, or lethargic during rainy, damp, cold spells'
      }
    ]
  }
];
