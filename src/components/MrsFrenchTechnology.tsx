import React, { useState } from 'react';
import { ShieldCheck, Check } from 'lucide-react';
import { BRAND_IMAGES } from '../data/dermalaseContent';
import { AuroraBackground } from './AuroraBackground';

interface MrsFrenchTechnologyProps {
  onBookClick: () => void;
}

export const MrsFrenchTechnology: React.FC<MrsFrenchTechnologyProps> = ({ onBookClick }) => {
  const [activeTech, setActiveTech] = useState<number>(2); // Soprano Titanium active by default

  // The 5 clinical machines directly from Screenshot 9
  const equipment = [
    {
      name: 'Prizmah 642VFD',
      category: 'Regenerative Centrifuge System',
      description:
        'Clinical-grade centrifuge providing pure platelet separation for autologous PRP hair restoration and micro-needling collagen stimulation.',
      fda: 'FDA 510(k) Cleared',
      features: ['High Platelet Viability', 'Sterile Single-Use Kits', 'Accelerated Tissue Regeneration'],
      image: BRAND_IMAGES.hairCare,
    },
    {
      name: 'HydraFacial MD',
      category: 'Patented Vortex-Fusion Dermal Infusion',
      description:
        'The authentic worldwide gold-standard for non-invasive hydra-dermabrasion, deep pore extraction, and peptide hydration.',
      fda: 'FDA Cleared & Medical CE',
      features: ['Patented Vortex-Fusion Technology', 'Zero Post-Treatment Downtime', 'Deep Antioxidant Delivery'],
      image: BRAND_IMAGES.skinCare,
    },
    {
      name: 'Alma Soprano Titanium',
      category: 'World #1 3D Diode Laser Hair Removal',
      description:
        'Combines three simultaneous laser wavelengths (755nm, 810nm, 1064nm) with ICE Plus continuous contact cooling for virtually pain-free treatments.',
      fda: 'US FDA Approved',
      features: ['3D Diode Wavelength Trio', 'ICE Plus Continuous Cooling', 'Safe for All Skin Phototypes'],
      image: BRAND_IMAGES.laserTreatment,
    },
    {
      name: 'SylfirmX',
      category: 'Dual-Wave Pulsed & Continuous RF Microneedling',
      description:
        'The world’s first dual-wave RF microneedling platform engineered to treat both pigmentary vascular lesions (melasma) and skin laxity.',
      fda: 'FDA Approved',
      features: ['Selective Coagulation Depth', 'Melasma & Redness Safe', 'Advanced Collagen Remodeling'],
      image: BRAND_IMAGES.medicalAesthetic,
    },
    {
      name: 'Oligio',
      category: '6.78MHz Monopolar RF Lifting & Tightening',
      description:
        'State-of-the-art monopolar radiofrequency designed for Asian and Mediterranean skin morphology, providing non-surgical tissue contracture.',
      fda: 'FDA Cleared & KFDA Certified',
      features: ['Real-Time Impedance Feedback', 'Custom Cryo-Pulse Cooling', 'Immediate Lifting Effect'],
      image: BRAND_IMAGES.facialContour,
    },
  ];

  return (
    <section id="technology" className="relative bg-[#FAF8F5] py-16 sm:py-20 lg:py-24 border-b border-[#EFECE6] overflow-hidden snap-section">
      {/* Animated Gradient Aurora Background */}
      <AuroraBackground opacity={0.6} />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 space-y-14 relative z-10">
        {/* Section Header directly from Screenshot 9 */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs sm:text-sm tracking-[0.16em] uppercase font-semibold text-[#E45D25] block">
            THE TECHNOLOGY WE USE
          </span>
          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-900 leading-tight">
            Clinical-Grade, FDA-Approved Equipment
          </h2>
        </div>

        {/* 5 Equipment Cards matching Screenshot 9 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {equipment.map((item, idx) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActiveTech(idx)}
              className={`text-center p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col items-center justify-between space-y-4 ${
                activeTech === idx
                  ? 'bg-[#FFF5F0] border-[#E45D25] shadow-md ring-1 ring-[#E45D25]'
                  : 'bg-white border-[#EFECE6] hover:border-[#FDBA74] hover:bg-[#FAF8F5]'
              }`}
            >
              <div className="aspect-[4/3] w-full rounded-xl overflow-hidden bg-neutral-100 border border-neutral-100 relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-1">
                <h4 className="font-serif-luxury text-base sm:text-lg font-bold text-neutral-900 leading-snug">
                  {item.name}
                </h4>
                <span className="text-[0.65rem] text-[#E45D25] font-semibold block">
                  {item.fda}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Active Technology Deep Dive Box */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#FBF9F5] border border-[#EFECE6] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-white border border-[#E45D25]/30 text-xs font-semibold text-[#E45D25]">
                {equipment[activeTech].fda}
              </span>
              <span className="text-xs text-neutral-500 font-light">
                {equipment[activeTech].category}
              </span>
            </div>

            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-neutral-900">
              {equipment[activeTech].name}
            </h3>

            <p className="text-neutral-600 font-light text-sm sm:text-base leading-relaxed">
              {equipment[activeTech].description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {equipment[activeTech].features.map((f, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-neutral-800 bg-white p-3 rounded-xl border border-[#EFECE6]">
                  <Check className="w-3.5 h-3.5 text-[#E45D25] flex-shrink-0" />
                  <span className="font-medium">{f}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-6 sm:p-8 bg-white rounded-2xl border border-[#EFECE6] space-y-4">
            <ShieldCheck className="w-12 h-12 text-[#E45D25]" />
            <div className="space-y-1">
              <h4 className="font-serif-luxury text-xl font-bold text-neutral-900">Physician-Operated Precision</h4>
              <p className="text-xs text-neutral-500 font-light max-w-xs">
                All laser frequencies and RF energies are calibrated by Dr. Shumaila Khan according to medical phototype.
              </p>
            </div>
            <button
              type="button"
              onClick={onBookClick}
              className="px-7 py-3 text-xs tracking-wider uppercase font-semibold text-white bg-[#E45D25] hover:bg-[#D44E17] rounded-lg shadow-sm transition-all"
            >
              Book Equipment Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
