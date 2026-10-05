import React, { useState } from 'react';
import { WHY_CHOOSE_DATA } from '../data/dermalaseContent';
import { Check } from 'lucide-react';

export const V14WhyChoose: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activePillar = WHY_CHOOSE_DATA[selectedIdx];

  return (
    <section className="border-b border-[var(--ink-faint)] bg-[#F8F7F4] py-24 sm:py-32">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="label">FIVE PILLARS OF CLINICAL PRACTICE</span>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl font-light text-[#1A1A1A]">
              Why Choose Dermalase
            </h2>
            <p className="text-sm sm:text-base text-[#6B6864] font-light max-w-xl">
              Engineered like London Harley Street and Dubai aesthetic clinics. Transparency,
              medical excellence, and patient safety above all.
            </p>
          </div>
          <span className="badge">100% PHYSICIAN OVERSIGHT</span>
        </div>

        {/* 5-Column Variation 14 Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-px bg-[var(--ink-faint)] border border-[var(--ink-faint)] mb-10">
          {WHY_CHOOSE_DATA.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelectedIdx(idx)}
              className={`p-6 text-left transition-colors cursor-pointer ${
                selectedIdx === idx
                  ? 'bg-white text-[#1A1A1A]'
                  : 'bg-[#EFECE7] text-[#1A1A1A]/70 hover:bg-white/70'
              }`}
            >
              <div className="font-mono-editorial text-xs text-[#E8C1B0] font-bold mb-2">
                {item.number}
              </div>
              <div className="font-serif-editorial text-base sm:text-lg">
                {item.title}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Pillar Detailed Panel */}
        <div className="p-8 sm:p-14 bg-white border border-[var(--ink-faint)] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="label text-[#E8C1B0] !opacity-100">
              PILLAR {activePillar.number} — {activePillar.title}
            </div>
            <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#1A1A1A]">
              {activePillar.headline}
            </h3>
            <p className="text-base text-[#1A1A1A]/80 font-light leading-relaxed">
              {activePillar.description}
            </p>
          </div>

          <div className="lg:col-span-5 space-y-3 pt-6 lg:pt-0 lg:border-l border-[var(--ink-faint)] lg:pl-10">
            <div className="label mb-3">CLINICAL SAFEGUARDS</div>
            {activePillar.points.map((pt) => (
              <div key={pt} className="flex items-start gap-3 text-xs sm:text-sm text-[#1A1A1A]/80">
                <Check className="w-4 h-4 text-[#1A1A1A] shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
