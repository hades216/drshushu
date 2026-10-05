import React from 'react';
import { TECHNOLOGY_SHOWCASE } from '../data/dermalaseContent';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';

interface MrsFrenchTechProps {
  onSelectTech: (techName: string) => void;
}

export const MrsFrenchTech: React.FC<MrsFrenchTechProps> = ({ onSelectTech }) => {
  return (
    <section id="technology" className="py-24 sm:py-32 bg-[#FAF9F7] border-b border-[#EAEAEA]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="mrs-badge">Clinical Hardware</span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-light text-neutral-900">
              Technology Wall
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-light max-w-xl">
              We invest exclusively in authentic, original manufacturer systems. US FDA-cleared
              and CE-certified for maximum tissue safety on diverse skin tones.
            </p>
          </div>

          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-neutral-200 text-xs text-neutral-700 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#C49A86]" />
            <span>100% Genuine Medical Platforms</span>
          </div>
        </div>

        {/* 6 Technology Platforms in Clean Pure White Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNOLOGY_SHOWCASE.map((tech, idx) => (
            <div
              key={tech.id}
              className="p-8 rounded-2xl bg-white border border-neutral-200/80 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono-micro text-xs text-[#C49A86] font-bold">
                    PLATFORM 0{idx + 1}
                  </span>
                  <span className="text-[0.68rem] uppercase tracking-wider text-neutral-400 font-mono-micro">
                    {tech.origin}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-2xl sm:text-3xl text-neutral-900">
                  {tech.name}
                </h3>

                <div className="text-xs uppercase tracking-wider text-neutral-500 font-medium">
                  {tech.type}
                </div>

                <div className="p-2.5 rounded-lg bg-[#FAF9F7] border border-neutral-200 text-xs font-mono-micro text-neutral-800 inline-block">
                  {tech.highlight}
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed pt-2">
                  {tech.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between">
                <span className="text-xs text-neutral-400">Available at Dermalase</span>
                <button
                  type="button"
                  onClick={() => onSelectTech(tech.name)}
                  className="btn-mrs btn-mrs-outline !py-1.5 !px-3.5 text-[0.65rem]"
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
