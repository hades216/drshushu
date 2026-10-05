import React from 'react';
import { STATS_DATA } from '../data/dermalaseContent';

interface V14HeroProps {
  onBookClick: () => void;
  onExploreTreatments: () => void;
}

export const V14Hero: React.FC<V14HeroProps> = ({
  onBookClick,
  onExploreTreatments,
}) => {
  return (
    <section id="top" className="relative border-b border-[var(--ink-faint)] overflow-hidden">
      {/* Subtle Peach Aesthetic Orb */}
      <div className="aesthetic-orb" />

      <div className="max-w-[1500px] mx-auto grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-85px)]">
        {/* Left Column: Monumental Garamond Typography & CTAs */}
        <div className="lg:col-span-7 p-8 sm:p-12 lg:p-20 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-[var(--ink-faint)] relative z-10">
          <div className="label mb-6">
            DR. SHUMAILA KHAN — CLINICAL DIRECTOR
          </div>

          <h1 className="font-serif-editorial text-[3.8rem] sm:text-[6rem] lg:text-[7.5rem] xl:text-[8.5rem] leading-[0.92] font-light my-6 italic text-[#1A1A1A]">
            Reveal your <br />
            <i className="not-italic block text-[#E8C1B0]">best skin.</i>
          </h1>

          <p className="max-w-lg text-base sm:text-lg text-[#1A1A1A]/80 font-light leading-relaxed mb-10">
            Experience the convergence of Harley Street clinical dermatology and artisan
            aesthetics in the heart of Islamabad. A bespoke, physician-led sanctuary devoted to
            cellular health and anatomical harmony.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={onBookClick}
              className="btn btn-primary"
            >
              Book Consultation
            </button>
            <button
              type="button"
              onClick={onExploreTreatments}
              className="btn"
            >
              Treatments
            </button>
          </div>

          <div className="mt-12 pt-8 border-t border-[var(--ink-faint)] flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="label">CARDIFF UNIVERSITY WALES (UK)</span>
            <span className="text-[#1A1A1A]/20">/</span>
            <span className="label">AAAM BOARD CERTIFIED (USA)</span>
            <span className="text-[#1A1A1A]/20">/</span>
            <span className="label">SECTOR F-10/1 ISLAMABAD</span>
          </div>
        </div>

        {/* Right Column: Variation 14 Signature Stacked Stat Wall */}
        <div className="lg:col-span-5 bg-[#EFECE7] grid grid-rows-4 divide-y divide-[var(--ink-faint)] relative z-10">
          {STATS_DATA.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center px-8 lg:px-14 py-8 group hover:bg-[#EAE6DF] transition-colors"
            >
              <div>
                <span className="label block mb-1">{item.label}</span>
                <span className="text-xs text-[#6B6864] font-light hidden sm:block">
                  {item.sublabel}
                </span>
              </div>
              <div className="text-right">
                <span className="font-serif-editorial text-4xl sm:text-5xl font-light text-[#1A1A1A]">
                  {item.value}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
