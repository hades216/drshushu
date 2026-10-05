import React from 'react';
import { TECHNOLOGY_SHOWCASE } from '../data/dermalaseContent';
import { ArrowUpRight } from 'lucide-react';

interface V14TechnologyProps {
  onSelectTech: (techName: string) => void;
}

export const V14Technology: React.FC<V14TechnologyProps> = ({ onSelectTech }) => {
  return (
    <section id="technology" className="border-b border-[var(--ink-faint)] bg-[#F8F7F4] py-24 sm:py-32">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="label">FDA-APPROVED MEDICAL PLATFORMS</span>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl font-light text-[#1A1A1A]">
              Technology Wall
            </h2>
            <p className="text-sm sm:text-base text-[#6B6864] font-light max-w-xl">
              Authentic medical platforms with real manufacturer provenance. US FDA-cleared
              and CE-certified for maximum efficacy and tissue safety.
            </p>
          </div>
          <span className="badge">GOLD STANDARD SYSTEMS</span>
        </div>

        {/* 6 Technology Platforms in Variation 14 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNOLOGY_SHOWCASE.map((tech, idx) => (
            <div
              key={tech.id}
              className="p-8 bg-[#EFECE7] border border-[var(--ink-faint)] flex flex-col justify-between space-y-6 group hover:border-[#1A1A1A] transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono-editorial text-xs text-[#E8C1B0] font-bold">
                    PLATFORM 0{idx + 1}
                  </span>
                  <span className="label !opacity-80">{tech.origin}</span>
                </div>

                <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#1A1A1A]">
                  {tech.name}
                </h3>

                <div className="text-xs uppercase tracking-wider text-[#6B6864]">
                  {tech.type}
                </div>

                <div className="p-2 bg-white/80 border border-[var(--ink-faint)] text-[0.65rem] font-mono-editorial text-[#1A1A1A] inline-block">
                  {tech.highlight}
                </div>

                <p className="text-xs sm:text-sm text-[#1A1A1A]/70 font-light leading-relaxed pt-2">
                  {tech.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--ink-faint)] flex items-center justify-between">
                <span className="label">CLINICAL PROTOCOL</span>
                <button
                  type="button"
                  onClick={() => onSelectTech(tech.name)}
                  className="text-xs uppercase font-mono-editorial text-[#1A1A1A] hover:opacity-60 inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Inquire</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
