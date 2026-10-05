import doctorPortrait from '../assets/images/DSC_6190.jpg';
import clinicBright from '../assets/images/bright_minimal_clinic_suite_1791065532629.jpg';
import skinRadiance from '../assets/images/bright_white_skin_radiance_1791065552181.jpg';
import clinicInterior from '../assets/images/clinic_minimalist_interior_1791064469162.jpg';
import treatmentRoom from '../assets/images/treatment_room_minimal_1791064479876.jpg';
import heroMrsFrench from '../assets/images/mrs_french_style_hero_1791069518193.jpg';
import doctorArchPortrait from '../assets/images/DSC_6377.jpg';
import clinicReception from '../assets/images/dermalase_reception_desk_1791069560209.jpg';

export const BRAND_IMAGES = {
  doctorPortrait,
  clinicBright,
  skinRadiance,
  clinicInterior,
  treatmentRoom,
  heroMrsFrench,
  doctorArchPortrait,
  clinicReception,
  skinCare: skinRadiance,
  facialContour: clinicBright,
  laserTreatment: treatmentRoom,
  hairCare: clinicInterior,
  cosmeticAesthetics: doctorPortrait,
  medicalAesthetic: clinicReception,
};

export interface StatItem {
  id: string;
  value: string;
  label: string;
  sublabel: string;
  detail: string;
}

export const STATS_DATA: StatItem[] = [
  {
    id: "experience",
    value: "15+",
    label: "Years Experience",
    sublabel: "Specialist Dermatology & Aesthetics",
    detail: "Post Graduate qualification from Cardiff University, Wales (UK) with dedicated clinical practice in Islamabad."
  },
  {
    id: "patients",
    value: "400+",
    label: "Happy Patients",
    sublabel: "Documented Clinical Outcomes",
    detail: "Discreet care provided to high-profile residents, diplomats, and international patients from Dubai and London."
  },
  {
    id: "treatments",
    value: "30+",
    label: "Treatments Offered",
    sublabel: "Non-Surgical & Regenerative Modalities",
    detail: "Bespoke facial rejuvenation, body contouring, medical dermatology, and hair restoration therapies."
  },
  {
    id: "rating",
    value: "4.9",
    label: "Google Rating",
    sublabel: "Highest-Rated Aesthetic Clinic in Islamabad",
    detail: "Consistent exceptional patient reviews on Google, Marham, and Oladoc for clinical precision and natural results."
  }
];

export const DOCTOR_INFO = {
  name: "Dr. Shumaila Khan",
  title: "Aesthetic Physician & Skin Specialist in Islamabad",
  subtitle: "Founder & Chief Medical Director — Dermalase",
  philosophy: "Aesthetic medicine in its purest form is an act of restoration, never distortion. Our goal is to refine structural harmony and restore skin health with absolute subtlety.",
  qualifications: [
    {
      badge: "UK QUALIFICATIONS",
      title: "Post Graduate Diploma in Dermatology (PGDip)",
      institution: "Cardiff University, Wales (UK)",
      summary: "Rigorous British university training in medical dermatology, diagnostic skin pathology, and clinical management."
    },
    {
      badge: "CARDIFF WALES CREDENTIALS",
      title: "Mastery in Clinical Dermatology",
      institution: "School of Medicine, Cardiff University",
      summary: "Specialized focus on pigmentary disorders, phototypes III–V, melasma, and scar tissue remodeling."
    },
    {
      badge: "AAAM CERTIFICATION",
      title: "Board-Certified Diplomat in Aesthetic Medicine",
      institution: "American Academy of Aesthetic Medicine (USA)",
      summary: "International credentialing in advanced botulinum toxins, anatomical dermal fillers, chemical peels, and laser surgery."
    },
    {
      badge: "DERMALASE LEADERSHIP",
      title: "Founder & Clinical Director",
      institution: "Dermalase Clinic, F-10/1 Islamabad",
      summary: "Guiding an ethical, physician-led aesthetic practice with original FDA-approved medical platforms."
    },
    {
      badge: "SPECIALIST INFORMATION",
      title: "International Fellow & Member",
      institution: "A4M, Dermamed & MMI",
      summary: "Continual international mastery in Endolift laser fiber surgery, exosome cellular biology, and facial rejuvenation."
    }
  ],
  bioNarrative: [
    "Dr. Shumaila Khan is one of Pakistan's most distinguished aesthetic physicians, widely respected for her meticulous clinical standards and natural aesthetic eye.",
    "Trained in the United Kingdom at Cardiff University, Wales, she blends hospital-grade diagnostic rigor with advanced non-surgical techniques acquired through the American Academy of Aesthetic Medicine.",
    "At Dermalase in Sector F-10/1, Islamabad, Dr. Khan conducts each consultation personally, crafting bespoke treatment journeys for patients seeking lasting skin vitality without unnecessary procedures."
  ]
};

export interface WhyChooseItem {
  id: string;
  number: string;
  title: string;
  headline: string;
  description: string;
  points: string[];
}

export const WHY_CHOOSE_DATA: WhyChooseItem[] = [
  {
    id: "expert-care",
    number: "01",
    title: "Expert Care",
    headline: "UK-Trained Physician-Led Practice",
    description: "Every treatment protocol is personally planned and overseen by Dr. Shumaila Khan. Patients receive direct diagnostic attention rather than commercial sales packages.",
    points: [
      "Consultation led directly by Dr. Shumaila Khan",
      "Cardiff University Wales (UK) dermatology background",
      "Anatomical precision and conservative aesthetic philosophy"
    ]
  },
  {
    id: "fda-tech",
    number: "02",
    title: "FDA-Approved Technology",
    headline: "Authentic Global Medical Standards",
    description: "We invest strictly in authentic, FDA-cleared and CE-certified medical devices. Every wavelength and pulse is calibrated for complete safety on South Asian skin tones.",
    points: [
      "Alma Soprano Titanium, SylfirmX, Oligio, and Cynosure platforms",
      "Zero unverified imitation devices or uncalibrated machinery",
      "Continuous sapphire contact cooling for pain-free treatments"
    ]
  },
  {
    id: "personalized",
    number: "03",
    title: "Personalized Treatment Plans",
    headline: "Bespoke Anatomical Formulations",
    description: "Your skin barrier, facial symmetry, and cellular renewal rate are unique. We design staged, multidimensional plans that respect your lifestyle and recovery needs.",
    points: [
      "In-depth analysis of epidermal moisture, melanin, and collagen",
      "Multi-modality combination protocols for superior longevity",
      "Custom post-treatment home regimens to sustain results"
    ]
  },
  {
    id: "medical-excellence",
    number: "04",
    title: "Medical Excellence",
    headline: "Hospital-Grade Asepsis & Traceable Biologics",
    description: "We maintain hospital-level sterile environments and strictly use traceable, temperature-monitored injectables and biologics from premier global laboratories.",
    points: [
      "Rigorous sterile handling and single-use micro-needles",
      "Genuine Allergan Botox and Swiss/Swedish hyaluronic acid gels",
      "Transparent medical guidance with clear expected outcomes"
    ]
  },
  {
    id: "patient-first",
    number: "05",
    title: "Patient-First Experience",
    headline: "Unrushed, Private Clinical Sanctuary",
    description: "Located on Main Sumbal Road in F-10/1 Islamabad, our sanctuary offers total privacy, serene consultation suites, and dedicated concierge support for overseas travelers.",
    points: [
      "Private appointment scheduling with zero waiting times",
      "Attentive post-procedure follow-ups and direct physician contact",
      "Priority scheduling for patients flying in from Dubai, the UK, and overseas"
    ]
  }
];

export interface TreatmentCategory {
  id: string;
  number: string;
  name: string;
  concern: string;
  tagline: string;
  description: string;
  procedures: {
    title: string;
    details: string;
  }[];
}

export const TREATMENTS_DATA: TreatmentCategory[] = [
  {
    id: "aesthetic-consultation",
    number: "01",
    name: "Aesthetic Consultation",
    concern: "Facial Harmonization & Diagnostics",
    tagline: "Comprehensive Clinical Assessment & Facial Mapping",
    description: "The essential starting point for all Dermalase patients. Dr. Shumaila Khan conducts a detailed examination of your facial architecture, skin barrier integrity, and aging vectors.",
    procedures: [
      {
        title: "Clinical Dermatology Examination",
        details: "Evaluation of active acne, melasma depth, rosacea, and barrier health."
      },
      {
        title: "3D Facial Proportion Assessment",
        details: "Anatomical analysis of cheek support, jawline angle, and periorbital hollowing."
      },
      {
        title: "Pre-Bridal & Event Skin Strategy",
        details: "Structured 4 to 12 week timeline designed for radiant event-ready skin."
      },
      {
        title: "Overseas Patient Fast-Track Consultation",
        details: "Coordinated consultation and same-trip procedure planning for international visitors."
      }
    ]
  },
  {
    id: "skin-care-treatment",
    number: "02",
    name: "Skin Care Treatment",
    concern: "Melasma, Texture & Pore Health",
    tagline: "Medical-Grade Epidermal Resurfacing & Pigmentation Solutions",
    description: "Therapeutic protocols addressing stubborn hyperpigmentation, uneven tone, enlarged pores, and dehydrated skin barriers common in Pakistani climates.",
    procedures: [
      {
        title: "HydraFacial MD® Signature Protocol",
        details: "Patented vortex extraction, mild acid peel, and antioxidant hydration."
      },
      {
        title: "Medical Chemical Peels & Peeling Procedures",
        details: "Targeted glycolic, mandelic, and bespoke peels for persistent melasma."
      },
      {
        title: "Acne & Acne Scar Remodeling",
        details: "Subcision and fractional collagen induction for rolling and boxcar scars."
      },
      {
        title: "Melasma, Pigmentation & Psoriasis Management",
        details: "Safe medical management of chronic inflammatory skin conditions."
      },
      {
        title: "Anti-Aging Skin Radiance Infusions",
        details: "Microneedling with skin boosters to restore natural epidermal luminescence."
      }
    ]
  },
  {
    id: "laser-treatment",
    number: "03",
    name: "Laser Treatment",
    concern: "Hair Removal & Resurfacing",
    tagline: "FDA-Cleared Multi-Wavelength Laser Systems",
    description: "Precision photothermal technology designed to treat hair reduction, deep collagen remodeling, and vascular imperfections without thermal injury.",
    procedures: [
      {
        title: "Alma Soprano Titanium Hair Removal",
        details: "Triple-wavelength diode system with continuous ice-cooling for painless full-body sessions."
      },
      {
        title: "Fractional Laser Skin Resurfacing",
        details: "Micro-fractional ablative passes to smooth acne scarring and fine line texture."
      },
      {
        title: "Prizmah & Cynosure Laser Toning",
        details: "High-speed photoacoustic pulses targeting dermal melanin and sun spots safely."
      },
      {
        title: "Vascular & Post-Acne Redness Laser",
        details: "Selective wavelength targeting of broken capillaries and erythematous macules."
      }
    ]
  },
  {
    id: "hair-treatment",
    number: "04",
    name: "Hair Treatment",
    concern: "Thinning Hair & Scalp Health",
    tagline: "Cellular & Follicular Bio-Stimulation",
    description: "Regenerative hair therapies activating miniaturized follicles, improving scalp vascularity, and thickening hair diameter.",
    procedures: [
      {
        title: "Autologous PRP Hair Therapy",
        details: "Platelet-rich plasma centrifuged from your own blood to stimulate follicular growth."
      },
      {
        title: "Exosome Regenerative Scalp Therapy",
        details: "Purified extracellular signaling factors to reactivate dormant hair stem cells."
      },
      {
        title: "PDO Hair Growth Thread Therapy",
        details: "Micro-threads positioned into the scalp to encourage sustained neocollagenesis."
      },
      {
        title: "Hair Fillers & Keratin Restructuring",
        details: "Biomimetic peptide complexes to nourish and fortify compromised hair fibers."
      }
    ]
  },
  {
    id: "cosmetic-treatment",
    number: "05",
    name: "Cosmetic Treatment",
    concern: "Non-Surgical Lifting & Contouring",
    tagline: "Endolift Laser Sculpting & Subtle Injectables",
    description: "Refining facial contours, reducing submental fullness, and restoring mid-face volume with zero incisions or surgical recovery.",
    procedures: [
      {
        title: "Endolift® Full-Face & Jawline Remodeling",
        details: "Micro-optical laser fiber (1470nm) inserted beneath the skin to tighten tissue and melt fat."
      },
      {
        title: "Structural Hyaluronic Dermal Fillers",
        details: "Carefully placed filler along cheekbones, chin, and lips for natural definition."
      },
      {
        title: "Botox Anti-Wrinkle & Hyperhidrosis Therapy",
        details: "Precision neuromodulator treatment for expression lines and excessive sweating."
      },
      {
        title: "Non-Surgical Thread Lifting & V-Shape",
        details: "Absorbable suspension threads to subtly reposition descended mid-face tissue."
      },
      {
        title: "Body Contouring & Non-Surgical Lift Procedures",
        details: "Lipolysis micro-injections targeting localized stubborn subcutaneous deposits."
      }
    ]
  },
  {
    id: "medical-aesthetic-treatments",
    number: "06",
    name: "Medical Aesthetic Treatments",
    concern: "Deep Dermal Tightening",
    tagline: "Dual-Wave Radiofrequency & Collagen Bio-Stimulators",
    description: "Advanced energy systems and bio-remodeling agents that stimulate native elastin and collagen synthesis deep within the dermis.",
    procedures: [
      {
        title: "SylfirmX Dual-Wave RF Microneedling",
        details: "FDA-cleared pulsed and continuous wave RF repairing abnormal microvasculature."
      },
      {
        title: "Oligio Monopolar RF Skin Tightening",
        details: "Volumetric 6.78 MHz RF energy delivering immediate dermal contraction and lift."
      },
      {
        title: "PRP & Exosome Cellular Rejuvenation",
        details: "Cellular signaling therapies accelerating deep healing and luminous skin tone."
      },
      {
        title: "Profhilo & Polynucleotide Bio-Remodeling",
        details: "Ultra-pure hyaluronic acid and DNA complexes smoothing crepey skin."
      }
    ]
  }
];

export interface TechnologyItem {
  id: string;
  name: string;
  type: string;
  origin: string;
  highlight: string;
  description: string;
}

export const TECHNOLOGY_SHOWCASE: TechnologyItem[] = [
  {
    id: "hydrafacial",
    name: "HydraFacial MD®",
    type: "Hydro-Dermabrasion System",
    origin: "USA · US FDA Cleared",
    highlight: "Patented 4-in-1 Vortex Delivery",
    description: "Deep cleansing, non-irritating exfoliation, painless extraction, and antioxidant hydration in a single session."
  },
  {
    id: "alma-soprano",
    name: "Alma Soprano Titanium™",
    type: "Triple-Wavelength Diode Laser",
    origin: "Alma Lasers · Global Gold Standard",
    highlight: "ICE Plus™ Continuous Sapphire Cooling",
    description: "Combines 755nm, 810nm, and 1064nm wavelengths simultaneously for safe, pain-free hair reduction on all skin types."
  },
  {
    id: "sylfirmx",
    name: "SylfirmX®",
    type: "Dual-Wave RF Microneedling",
    origin: "Silicon Valley · US FDA Cleared",
    highlight: "Pulsed Wave (PW) + Continuous Wave (CW)",
    description: "The world's only RF microneedling device with selective coagulation to clear stubborn melasma while smoothing acne scars."
  },
  {
    id: "oligio",
    name: "Oligio®",
    type: "Monopolar Radiofrequency",
    origin: "Wontech · US FDA & CE Cleared",
    highlight: "6.78 MHz Deep Collagen Contraction",
    description: "Delivers uniform thermal energy into the deep dermis to lift sagging jowls, tighten eyelids, and sharpen the jawline with zero downtime."
  },
  {
    id: "prizmah",
    name: "Prizmah™",
    type: "Q-Switched Aesthetic Laser",
    origin: "Clinical Grade Laser Platform",
    highlight: "Photoacoustic Melanin Shattering",
    description: "Targets freckles, solar spots, and dermal pigment without heat-induced post-inflammatory hyperpigmentation."
  },
  {
    id: "cynosure",
    name: "Cynosure®",
    type: "Picosecond Laser Suite",
    origin: "USA · FDA-Cleared Medical Standard",
    highlight: "PressureWave™ Cellular Activation",
    description: "High-precision acoustic energy shattering pigment and stimulating collagen with minimal epidermal disruption."
  }
];

export const REAL_RESULTS = [
  {
    title: "Endolift® Full-Face & Jawline Remodeling",
    profile: "Female, Age 42 · Overseas Patient (Dubai)",
    protocol: "Single Endolift 1470nm session targeting jowls and submental laxity",
    outcome: "Crisp mandibular border, significant submental volume reduction, natural tissue retraction without scalpel or sutures.",
    metrics: "48h Recovery · 0 Sutures · 94% Patient Satisfaction"
  },
  {
    title: "SylfirmX Refractory Melasma & Acne Scars",
    profile: "Female, Age 31 · Islamabad",
    protocol: "3 Sessions SylfirmX Dual-Wave RF paired with Exosomes and Cynosure laser toning",
    outcome: "Marked reduction of stubborn malar melasma, refined pore architecture, and restored epidermal barrier strength.",
    metrics: "89% Pigment Reduction · Zero Rebound Hyperpigmentation"
  },
  {
    title: "Facial Harmonization & Tear Trough Rejuvenation",
    profile: "Female, Age 36 · London / Islamabad",
    protocol: "Micro-droplet hyaluronic acid tear trough placement and subtle cheek contouring",
    outcome: "Elimination of hollow tired shadows beneath the eyes while preserving completely natural facial mobility.",
    metrics: "Immediate Result · Natural Dynamic Expression Preserved"
  }
];

export const TESTIMONIALS = [
  {
    quote: "Having visited premier aesthetic clinics in Downtown Dubai and Jumeirah, I can state without hesitation that Dermalase by Dr. Shumaila Khan is on par with the finest luxury clinics in the world. Her honest medical advice and Endolift technique gave me results friends in Dubai thought took surgery. Worth every mile of my flight to Islamabad.",
    author: "Amina Al-Mansoor / Zara K.",
    location: "Dubai, UAE",
    tag: "Featured Overseas Patient",
    treatment: "Endolift Full-Face Transformation & SylfirmX"
  },
  {
    quote: "Dermalase is like a Harley Street clinic right in Islamabad. Dr. Shumaila's Cardiff training is evident in every detail. Her hygiene, bedside manner, and the Alma Soprano Titanium laser made my treatments completely painless and effective.",
    author: "Barrister Mahnoor Tariq",
    location: "Sector F-7, Islamabad",
    tag: "Verified Local Review",
    treatment: "Alma Soprano Titanium & HydraFacial MD"
  },
  {
    quote: "As a physician myself, I am very critical of medical aesthetics. Dr. Shumaila Khan's clinical approach is conservative, evidence-based, and artistic. She advised against excess filler and used Oligio RF instead with brilliant results.",
    author: "Dr. Farzana Siddiqui",
    location: "London, UK / Bahria Town",
    tag: "Medical Colleague Review",
    treatment: "Oligio Monopolar RF & Micro-Toxin"
  }
];

export const CERTIFICATIONS = [
  { acronym: "AAAM", name: "American Academy of Aesthetic Medicine", detail: "Board-Certified Diplomat in Aesthetic Medicine (USA)" },
  { acronym: "Cardiff University", name: "School of Medicine, Cardiff University (Wales, UK)", detail: "Post Graduate Diploma in Practical Dermatology" },
  { acronym: "Dermamed", name: "Dermamed International Clinical Board", detail: "Certified Laser & Energy-Based Device Specialist" },
  { acronym: "A4M", name: "American Academy of Anti-Aging Medicine", detail: "Fellowship Member in Longevity & Regenerative Aesthetics" },
  { acronym: "MMI", name: "Medical Aesthetic & Micro-Invasive Institute", detail: "Endolift 1470nm Laser Fiber Remodeling Credential" }
];

export const JOURNEY_STEPS = [
  {
    step: "01",
    name: "Schedule",
    title: "Private Appointment & Intake",
    description: "Book seamlessly via WhatsApp or our digital concierge. Overseas patients receive prioritized scheduling to accommodate flight itineraries."
  },
  {
    step: "02",
    name: "Assess",
    title: "1-on-1 Consultation with Dr. Shumaila",
    description: "A detailed clinical diagnostic review of your facial anatomy, skin phototype, and health history before any procedure is recommended."
  },
  {
    step: "03",
    name: "Treat",
    title: "Precision Execution & Aftercare",
    description: "Your treatment is performed using authentic FDA-approved technology in our sterile suites, followed by personalized post-procedure care."
  }
];

export const FAQS = [
  {
    q: "What international qualifications does Dr. Shumaila Khan hold?",
    a: "Dr. Shumaila Khan holds a Post Graduate Diploma in Dermatology from Cardiff University, Wales (UK) and is a Board-Certified Diplomat of the American Academy of Aesthetic Medicine (AAAM, USA). She has over 15 years of dedicated clinical experience in Islamabad."
  },
  {
    q: "What is an Endolift Full-Face Transformation?",
    a: "Endolift is an innovative outpatient laser procedure utilizing a hair-thin (200-300 micron) optical fiber placed just under the skin. It delivers 1470nm laser energy to tighten collagen septa and gently emulsify stubborn fat in the jowls and submental area without scalpels or stitches."
  },
  {
    q: "Are laser treatments safe during the summer and monsoon seasons in Pakistan?",
    a: "Yes. With our FDA-cleared Alma Soprano Titanium and SylfirmX systems, settings are specifically calibrated for South Asian skin with active sapphire contact cooling, allowing safe and effective year-round treatments when paired with proper sunscreen."
  },
  {
    q: "Will dermal fillers or Botox look artificial or frozen?",
    a: "Never at Dermalase. Dr. Shumaila Khan follows a conservative European aesthetic philosophy. Neuromodulators and fillers are placed along anatomical vectors to soften lines and restore volume while preserving 100% of your natural facial expressions."
  },
  {
    q: "How can overseas patients from Dubai or the UK arrange appointments?",
    a: "We welcome numerous international patients each month. Simply message our WhatsApp concierge at (+92) 303 555 8444 with your travel dates, and our team will coordinate a streamlined consultation and treatment plan during your stay."
  }
];

export const BLOG_POSTS = [
  {
    slug: "endolift-full-face-transformation",
    category: "Facial Remodeling",
    title: "Endolift Full Face Transformation: The Science of Scarless Laser Jawline Contouring",
    readTime: "5 min read",
    summary: "How 1470nm interstitial optical fibers tighten lower face laxity and sculpt the jawline in a single outpatient session.",
    content: "For patients experiencing early jowl descent and submental fullness, Endolift bridges the gap between surface RF treatments and invasive surgery. By targeting water and fat chromophores directly within the hypodermis, it triggers immediate tissue retraction followed by continuous collagen remodeling over several months."
  },
  {
    slug: "laser-treatments-summer-monsoon",
    category: "Laser Dermatology",
    title: "Are Laser Treatments Safe During Summer or Monsoon? Medical Facts for South Asian Skin",
    readTime: "4 min read",
    summary: "Debunking misconceptions around sun exposure and modern multi-wavelength diode and RF technologies.",
    content: "Historically, older lasers posed thermal risks in sunny climates. Modern diode systems like Alma Soprano Titanium bypass superficial epidermal melanin via rapid in-motion pulses, making consistent hair reduction and gentle skin resurfacing safe throughout Pakistan's summer and monsoon months."
  },
  {
    slug: "monsoon-skincare-protocol",
    category: "Barrier Science",
    title: "The Dermatologist's Monsoon Skincare Protocol: Humidity, Sebum & Melasma Control",
    readTime: "4 min read",
    summary: "Adjusting your topical routine from occlusive creams to antioxidant gels and gentle vortex exfoliation.",
    content: "High humidity accelerates sebum oxidation and micro-comedone formation. Dr. Shumaila Khan advises transitioning to lightweight hyaluronic hydration, niacinamide, mineral SPF, and monthly HydraFacial MD treatments to prevent pore congestion and melasma flares."
  }
];

export const CONTACT_INFO = {
  name: "Dermalase by Dr. Shumaila Khan",
  tagline: "Aesthetic Physician & Skin Specialist in Islamabad",
  address: "A-103, Main Sumbal Road F-10/1, Islamabad - Pakistan",
  phones: [
    "(+92) 51 2211113",
    "(+92) 303 555 8444",
    "(+92) 303 555 8222",
    "(+92) 304-1110844"
  ],
  whatsapp: "+923035558444",
  email: "info@drshumailakhan.com",
  timings: "Monday – Saturday: 11:00 AM – 08:00 PM (Friday break: 01:00 PM – 02:30 PM). Sunday: By Prior Overseas/VIP Appointment."
};
