import React, { useState } from 'react';
import radianceImg from '../assets/images/bright_white_skin_radiance_1791065552181.jpg';
import drPortrait from '../assets/images/DSC_6377.jpg';

interface MrsFrenchBeforeAfterProps {
  onBookClick: () => void;
}

export const MrsFrenchBeforeAfter: React.FC<MrsFrenchBeforeAfterProps> = ({ onBookClick }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeCaseIndex, setActiveCaseIndex] = useState(0);

  // The 6 exact cases from Screenshot 11
  const cases = [
    {
      title: 'Rhinoplasty',
      category: 'Non-Surgical Profile Refinement',
      description: 'Dorsal hump smoothing and nasal bridge elevation without surgery or downtime.',
    },
    {
      title: 'Neck Filler',
      category: 'Neck Crease Rejuvenation',
      description: 'Smoothing of horizontal neck rings and skin laxity restoration.',
    },
    {
      title: 'Non Surgical Rhinoplasty',
      category: 'Nasal Symmetry & Tip Lift',
      description: 'Frontal alignment and subtle nasal tip projection enhancement.',
    },
    {
      title: 'Eye Area Contours',
      category: 'Periorbital Awakening',
      description: 'Tear trough correction, under-eye hollow softening, and dark circle reduction.',
    },
    {
      title: 'Non Surgical Rhinoplasty',
      category: 'Lateral Profile Balancing',
      description: 'Micro-droplet hyaluronic acid contouring along the nasal bridge.',
    },
    {
      title: 'Liquid Lift',
      category: 'Full-Face Vector Lifting',
      description: 'Structural cheek, nasolabial, and jawline support restoring youthful facial vectors.',
    },
  ];

  // Accreditation line from Screenshot 11
  const accreditations = [
    'DERMA MEDICAL',
    'A4M / MMI',
    'AMERICAN ACADEMY OF AESTHETIC MEDICINE',
    'CARDIFF UNIVERSITY',
    'PAADS',
  ];

  return (
    <section id="results" className="relative bg-white py-16 sm:py-20 lg:py-24 border-b border-[#EFECE6] overflow-hidden snap-section">
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 space-y-14">
        {/* Section Header directly from Screenshot 11 */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs sm:text-sm tracking-[0.16em] uppercase font-semibold text-[#E45D25] block">
            REAL RESULTS
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-900 leading-tight">
            Before &amp; After
          </h2>
          <p className="text-neutral-600 font-light text-sm sm:text-base leading-relaxed">
            Real patients, real transformations — results may vary by skin type and treatment plan.
          </p>
        </div>

        {/* 6 Cases Cards Grid matching Screenshot 11 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {cases.map((c, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveCaseIndex(idx)}
              className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                activeCaseIndex === idx
                  ? 'bg-[#FFF5F0] border-[#E45D25] shadow-md ring-1 ring-[#E45D25]'
                  : 'bg-white border-[#EFECE6] hover:border-[#FDBA74]'
              }`}
            >
              <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-neutral-100 relative">
                <img
                  src={radianceImg}
                  alt={c.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-serif-luxury text-sm font-bold text-neutral-900 leading-tight">
                  {c.title}
                </h4>
                <p className="text-[0.62rem] text-neutral-400 line-clamp-1">{c.category}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Interactive Comparison Slider for Active Case */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl bg-[#FBF9F5] border border-[#EFECE6] space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EAE6DF] pb-4">
            <div>
              <span className="text-[0.65rem] tracking-[0.16em] uppercase font-semibold text-[#E45D25]">
                ACTIVE CASE VERIFICATION
              </span>
              <h3 className="font-serif-luxury text-2xl font-bold text-neutral-900">
                {cases[activeCaseIndex].title}
              </h3>
            </div>
            <span className="text-xs text-neutral-500 font-light">
              {cases[activeCaseIndex].description}
            </span>
          </div>

          <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-neutral-200 select-none shadow-md border border-neutral-300">
            {/* After Image */}
            <img
              src={radianceImg}
              alt="After procedure"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 right-4 px-3 py-1 rounded-md bg-black/70 backdrop-blur-sm text-white text-[0.65rem] tracking-wider uppercase font-semibold">
              AFTER
            </div>

            {/* Before Image */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPosition}%` }}
            >
              <img
                src={drPortrait}
                alt="Before procedure"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div className="absolute top-4 left-4 px-3 py-1 rounded-md bg-black/70 backdrop-blur-sm text-white text-[0.65rem] tracking-wider uppercase font-semibold">
                BEFORE
              </div>
            </div>

            {/* Divider line */}
            <div
              className="absolute inset-y-0 w-1 bg-white cursor-ew-resize flex items-center justify-center shadow-lg"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="w-8 h-8 rounded-full bg-white text-neutral-900 shadow-md flex items-center justify-center text-xs font-bold border border-neutral-300">
                ⟷
              </div>
            </div>

            <input
              type="range"
              min="5"
              max="95"
              value={sliderPosition}
              onChange={(e) => setSliderPosition(Number(e.target.value))}
              className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-10"
              aria-label="Drag before and after transformation slider"
            />
          </div>

          <p className="text-center text-xs text-neutral-400 font-light">
            ✦ Slide horizontally to review the natural clinical refinement
          </p>
        </div>

        {/* Accreditation Text Line directly from Screenshot 11 */}
        <div className="pt-8 border-t border-[#EFECE6] text-center space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 lg:gap-12 text-xs sm:text-sm font-semibold tracking-[0.14em] uppercase text-neutral-500">
            {accreditations.map((acc, i) => (
              <span key={i} className="hover:text-neutral-900 transition-colors">
                {acc}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
