import React, { useState } from 'react';
import { ArrowRight, X, Check, Sparkles, Clock, Calendar, ShieldCheck } from 'lucide-react';
import { BRAND_IMAGES } from '../data/dermalaseContent';
import { AuroraBackground } from './AuroraBackground';

interface MrsFrenchTreatmentsProps {
  onBookClick: () => void;
}

interface TreatmentItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  details: {
    duration: string;
    downtime: string;
    sessions: string;
    target: string;
    benefits: string[];
  };
}

export const MrsFrenchTreatments: React.FC<MrsFrenchTreatmentsProps> = ({ onBookClick }) => {
  const [selectedTreatment, setSelectedTreatment] = useState<TreatmentItem | null>(null);

  // The 6 exact treatments with verbatim copy from Screenshots 4 & 5
  const treatments: TreatmentItem[] = [
    {
      id: 'aesthetic-consultation',
      title: 'Aesthetic Consultation',
      category: 'Diagnostic Assessment',
      description:
        'Consultation with experts forms the basis of a complete and result-oriented treatment with long lasting effects.',
      image: BRAND_IMAGES.skinCare,
      details: {
        duration: '45 Minutes',
        downtime: 'None',
        sessions: '1 Comprehensive Diagnostic Session',
        target: 'Full facial morphology assessment, skin barrier diagnostics, customized roadmap',
        benefits: [
          'Detailed diagnostic evaluation by UK-trained Dr. Shumaila Khan',
          '3D skin barrier and pigmentation scanning',
          'Personalized treatment timeline with zero unnecessary interventions',
        ],
      },
    },
    {
      id: 'skin-care-treatment',
      title: 'Skin Care Treatment',
      category: 'Clinical Dermatology',
      description:
        'Your skin is an asset. We handle your skin with all the care it deserves and give it a long-lasting glow effect.',
      image: BRAND_IMAGES.facialContour,
      details: {
        duration: '60 Minutes',
        downtime: 'Zero (Immediate Glow)',
        sessions: 'Monthly maintenance recommended',
        target: 'Congested pores, dehydration, uneven skin tone, dull complexion',
        benefits: [
          'Authentic patented HydraFacial MD vortex-infusion technology',
          'Deep medical-grade exfoliation and antioxidant hydration',
          'Customized serum cocktails for lasting radiance',
        ],
      },
    },
    {
      id: 'laser-treatment',
      title: 'Laser Treatment',
      category: 'Laser Excellence',
      description:
        'We use gold standard laser technology for safe, effective, and painless treatments for all skin tones and concerns.',
      image: BRAND_IMAGES.laserTreatment,
      details: {
        duration: '30 - 75 Minutes',
        downtime: 'Minimal to None',
        sessions: '4 - 6 Sessions for permanent clearance',
        target: 'Unwanted hair, melasma, tattoo removal, birthmarks, vascular lesions',
        benefits: [
          'Alma Soprano Titanium with ICE Plus continuous contact cooling',
          'PICO laser for stubborn hyperpigmentation with zero thermal damage',
          'Calibrated specifically for Fitzpatrick skin types III to VI',
        ],
      },
    },
    {
      id: 'hair-treatment',
      title: 'Hair Treatment',
      category: 'Regenerative Medicine',
      description:
        'Advanced therapies designed to stimulate natural hair growth, improve scalp health and restore density.',
      image: BRAND_IMAGES.hairCare,
      details: {
        duration: '45 Minutes',
        downtime: 'None (Resume work same day)',
        sessions: '3 - 5 Sessions spaced 4 weeks apart',
        target: 'Androgenetic alopecia, crown thinning, receding hairline, telogen effluvium',
        benefits: [
          'Prizmah 642VFD high-concentration autologous PRP centrifugation',
          'Sterile single-use micro-needling injection protocol',
          'Visible follicular stimulation and reduced hair fall within 4 weeks',
        ],
      },
    },
    {
      id: 'cosmetic-treatment',
      title: 'Cosmetic Treatment',
      category: 'Facial Restructuring',
      description:
        'Subtle, natural enhancements to contour and restore balance to your features with no surgery needed.',
      image: BRAND_IMAGES.cosmeticAesthetics,
      details: {
        duration: '30 - 60 Minutes',
        downtime: 'Zero to 24 Hours',
        sessions: '1 Session (Results last 12 - 18 months)',
        target: 'Tear troughs, non-surgical rhinoplasty, lip symmetry, jawline definition',
        benefits: [
          'FDA-approved hyaluronic acid dermal fillers (Juvederm / Restylane)',
          'Precision micro-cannula technique for zero bruising',
          'Conservative aesthetic approach that preserves your natural facial identity',
        ],
      },
    },
    {
      id: 'medical-aesthetic-treatments',
      title: 'Medical Aesthetic Treatments',
      category: 'Non-Surgical Lifting',
      description:
        'State of the art technology for skin tightening, lifting, scar reduction, and collagen regeneration.',
      image: BRAND_IMAGES.medicalAesthetic,
      details: {
        duration: '60 Minutes',
        downtime: '1 - 2 Days mild redness',
        sessions: '1 - 3 Sessions based on collagen deficit',
        target: 'Deep acne scars, skin laxity, jowls, neck wrinkles, enlarged pores',
        benefits: [
          'Oligio 6.78MHz Monopolar RF for deep non-surgical tissue contracture',
          'SylfirmX pulsed-wave dual RF for melasma and skin firming',
          'Long-term collagen neo-genesis continuing for months',
        ],
      },
    },
  ];

  return (
    <section
      id="treatments"
      className="relative bg-[#FAF8F5] py-16 sm:py-20 lg:py-28 border-b border-[#EFECE6] overflow-hidden snap-section"
    >
      {/* Animated Gradient Aurora Background */}
      <AuroraBackground opacity={0.75} />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 space-y-14 relative z-10">
        {/* Section Header directly from Screenshots 4 & 5 */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF5F0] border border-[#FDBA74] text-xs font-bold text-[#E45D25] shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="tracking-[0.16em] uppercase">OUR TREATMENTS</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-900 leading-tight">
            Aesthetic &amp; Medical Skin Treatments
          </h2>
          <p className="text-neutral-700 font-normal text-base sm:text-lg leading-relaxed">
            30+ treatments across skin, hair and body — your consultation determines the right plan for you.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {treatments.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#EFECE6] shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] card-interactive card-specular flex flex-col justify-between group hover:border-[#E45D25]/40 transition-all duration-300"
            >
              {/* Image Frame */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-neutral-100">
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-xs font-semibold text-neutral-800 border border-white/60 shadow-xs">
                  {t.category}
                </div>
              </div>

              {/* Content Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-2.5">
                  <h3 className="font-serif-luxury text-2xl sm:text-3xl text-neutral-900 font-semibold leading-snug group-hover:text-[#E45D25] transition-colors duration-300">
                    {t.title}
                  </h3>
                  <p className="text-neutral-700 font-normal text-sm sm:text-base leading-relaxed">
                    {t.description}
                  </p>
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-[#F2EFE9] flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedTreatment(t)}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#E45D25] hover:text-[#C2410C] transition-colors cursor-pointer group/btn"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1.5 transition-transform" />
                  </button>

                  <button
                    type="button"
                    onClick={onBookClick}
                    className="px-4 py-2 rounded-lg bg-[#FAF8F5] hover:bg-[#E45D25] hover:text-white text-xs uppercase tracking-wider font-bold text-neutral-700 transition-all cursor-pointer border border-[#EFECE6]"
                  >
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Treatments Button */}
        <div className="text-center pt-4">
          <button
            type="button"
            onClick={onBookClick}
            className="btn-ctr-orange shimmer-sweep px-9 py-4 text-xs sm:text-sm tracking-wider uppercase font-bold text-white rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer inline-flex items-center gap-2"
          >
            <span>View All Treatments</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Interactive Treatment Modal */}
      {selectedTreatment && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedTreatment(null)}
        >
          <div
            className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-[#EFECE6] max-h-[90vh] overflow-y-auto relative animate-scaleUp"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between border-b border-[#EFECE6] pb-4">
              <div className="space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#E45D25] font-bold">
                  {selectedTreatment.category}
                </span>
                <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-neutral-900">
                  {selectedTreatment.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setSelectedTreatment(null)}
                className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 flex items-center justify-center text-neutral-700 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
              <img
                src={selectedTreatment.image}
                alt={selectedTreatment.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-neutral-800 font-normal text-base leading-relaxed">
              {selectedTreatment.description}
            </p>

            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="p-3.5 rounded-xl bg-[#FBF9F5] border border-[#EFECE6] space-y-1">
                <span className="text-xs font-semibold uppercase text-neutral-500 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#E45D25]" />
                  Duration
                </span>
                <p className="font-bold text-neutral-900">{selectedTreatment.details.duration}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-[#FBF9F5] border border-[#EFECE6] space-y-1">
                <span className="text-xs font-semibold uppercase text-neutral-500 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#E45D25]" />
                  Downtime
                </span>
                <p className="font-bold text-neutral-900">{selectedTreatment.details.downtime}</p>
              </div>
            </div>

            <div className="space-y-2.5">
              <h4 className="text-sm font-bold uppercase tracking-wider text-neutral-900">
                Key Clinical Benefits
              </h4>
              <ul className="space-y-2 text-sm text-neutral-700">
                {selectedTreatment.details.benefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#E45D25] flex-shrink-0 mt-0.5" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 flex gap-3">
              <button
                type="button"
                onClick={() => {
                  setSelectedTreatment(null);
                  onBookClick();
                }}
                className="flex-1 btn-ctr-orange py-3.5 rounded-xl text-sm font-bold uppercase tracking-wider text-white shadow-md cursor-pointer"
              >
                Book This Treatment
              </button>
              <button
                type="button"
                onClick={() => setSelectedTreatment(null)}
                className="px-6 py-3.5 rounded-xl border border-neutral-300 text-sm font-semibold text-neutral-700 hover:bg-neutral-100 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
