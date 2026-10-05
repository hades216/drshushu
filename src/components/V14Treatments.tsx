import React, { useState } from 'react';
import { TREATMENTS_DATA } from '../data/dermalaseContent';
import { ArrowUpRight } from 'lucide-react';

interface V14TreatmentsProps {
  onSelectTreatment: (treatmentName: string) => void;
}

export const V14Treatments: React.FC<V14TreatmentsProps> = ({ onSelectTreatment }) => {
  const [activeCategory, setActiveCategory] = useState(0);
  const current = TREATMENTS_DATA[activeCategory];

  return (
    <section id="treatments" className="border-b border-[var(--ink-faint)] bg-[#F8F7F4] py-24 sm:py-32">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-16">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="label">CLINICAL TREATMENT SUITES</span>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl font-light text-[#1A1A1A]">
              Curated Protocols
            </h2>
            <p className="text-sm sm:text-base text-[#6B6864] font-light max-w-xl">
              From non-surgical Endolift laser remodeling to advanced dual-wave radiofrequency,
              each protocol is calibrated for South Asian and international skin phototypes.
            </p>
          </div>
          <span className="badge">30+ PROCEDURES AVAILABLE</span>
        </div>

        {/* 6 Category Horizontal Navigation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-px bg-[var(--ink-faint)] border border-[var(--ink-faint)] mb-12">
          {TREATMENTS_DATA.map((cat, idx) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(idx)}
              className={`p-5 text-left transition-colors cursor-pointer ${
                activeCategory === idx
                  ? 'bg-white text-[#1A1A1A]'
                  : 'bg-[#EFECE7] text-[#1A1A1A]/70 hover:bg-white/70'
              }`}
            >
              <div className="font-mono-editorial text-xs text-[#E8C1B0] font-bold mb-1">
                {cat.number}
              </div>
              <div className="font-serif-editorial text-base truncate">
                {cat.name}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Suite Detailed Presentation */}
        <div className="p-8 sm:p-14 bg-white border border-[var(--ink-faint)] space-y-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[var(--ink-faint)]">
            <div>
              <div className="label text-[#E8C1B0] !opacity-100 mb-1">
                SUITE {current.number} · {current.concern}
              </div>
              <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#1A1A1A]">
                {current.name}
              </h3>
              <p className="font-serif-editorial italic text-base sm:text-lg text-[#6B6864] mt-1">
                {current.tagline}
              </p>
            </div>

            <button
              type="button"
              onClick={() => onSelectTreatment(current.name)}
              className="btn btn-primary self-start md:self-auto"
            >
              Consult On This Suite
            </button>
          </div>

          <p className="text-base text-[#1A1A1A]/80 font-light max-w-3xl leading-relaxed">
            {current.description}
          </p>

          {/* Procedure List inside Category */}
          <div className="space-y-4">
            <span className="label">INDIVIDUAL CLINICAL PROTOCOLS INCLUDED</span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {current.procedures.map((proc, pIdx) => (
                <div
                  key={proc.title}
                  className="p-6 bg-[#EFECE7]/60 border border-[var(--ink-faint)] flex flex-col justify-between space-y-4 hover:border-[#1A1A1A] transition-colors"
                >
                  <div className="space-y-2">
                    <div className="font-mono-editorial text-xs text-[#1A1A1A]/50">
                      0{pIdx + 1}
                    </div>
                    <h4 className="font-serif-editorial text-xl text-[#1A1A1A]">
                      {proc.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-light leading-relaxed">
                      {proc.details}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectTreatment(`${current.name}: ${proc.title}`)}
                    className="self-start text-[0.68rem] uppercase font-mono-editorial text-[#1A1A1A] hover:text-[#E8C1B0] inline-flex items-center gap-1 cursor-pointer pt-2"
                  >
                    <span>Request Protocol</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
