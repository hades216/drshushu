import React from 'react';
import { TECHNOLOGY_SHOWCASE, BRAND_IMAGES } from '../data/dermalaseContent';
import { ArrowUpRight, ShieldCheck } from 'lucide-react';

interface MinimalTechnologyProps {
  onSelectTech: (techName: string) => void;
}

export const MinimalTechnology: React.FC<MinimalTechnologyProps> = ({ onSelectTech }) => {
  return (
    <section id="technology" className="py-24 sm:py-32 hairline-b bg-[var(--bg-main)]">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-8 space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] font-medium">
              FDA-Cleared Instrumentation
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[var(--text-main)] font-normal">
              Medical Technology Wall
            </h2>
            <p className="text-sm sm:text-base text-[var(--text-muted)] font-light max-w-xl">
              Authentic gold-standard laser and radiofrequency systems, verified for clinical
              purity and tissue safety.
            </p>
          </div>

          <div className="lg:col-span-4 flex items-center gap-2 text-xs text-[var(--text-muted)]">
            <ShieldCheck className="w-4 h-4 text-[var(--accent)] shrink-0" />
            <span>100% Genuine Manufacturer Devices · Zero Counterfeits</span>
          </div>
        </div>

        {/* 6 Technology Platforms in a Clean Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TECHNOLOGY_SHOWCASE.map((tech, idx) => (
            <div
              key={tech.id}
              className="p-6 sm:p-8 bg-[var(--bg-card)] hairline-all flex flex-col justify-between space-y-6 group hover:border-[var(--text-main)] transition-colors"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs font-mono-tabular text-[var(--accent)]">
                  <span>PLATFORM 0{idx + 1}</span>
                  <span className="text-[var(--text-muted)]">{tech.origin}</span>
                </div>

                <h3 className="font-serif-luxury text-2xl text-[var(--text-main)]">
                  {tech.name}
                </h3>

                <div className="text-xs text-[var(--text-muted)] font-medium">
                  {tech.type}
                </div>

                <div className="p-2 bg-[var(--bg-subtle)] text-[11px] font-mono-tabular text-[var(--accent)] inline-block">
                  {tech.highlight}
                </div>

                <p className="text-xs text-[var(--text-muted)] font-light leading-relaxed pt-2">
                  {tech.description}
                </p>
              </div>

              <div className="pt-4 hairline-t flex items-center justify-between">
                <span className="text-[11px] text-[var(--text-muted)]">
                  Clinical Protocol
                </span>
                <button
                  type="button"
                  onClick={() => onSelectTech(tech.name)}
                  className="text-xs text-[var(--text-main)] hover:text-[var(--accent)] uppercase tracking-wider inline-flex items-center gap-1 cursor-pointer font-medium"
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
