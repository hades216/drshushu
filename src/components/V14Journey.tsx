import React from 'react';
import { JOURNEY_STEPS } from '../data/dermalaseContent';
import { ArrowUpRight } from 'lucide-react';

interface V14JourneyProps {
  onBookClick: () => void;
}

export const V14Journey: React.FC<V14JourneyProps> = ({ onBookClick }) => {
  return (
    <section className="border-b border-[var(--ink-faint)] bg-[#F8F7F4] py-24 sm:py-32">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="label">THE PATIENT PROTOCOL</span>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl font-light text-[#1A1A1A]">
              Consultation Journey
            </h2>
            <p className="text-sm sm:text-base text-[#6B6864] font-light max-w-xl">
              Schedule, Assess, Treat. A structured, transparent clinical experience crafted
              for your safety and peace of mind.
            </p>
          </div>

          <button
            type="button"
            onClick={onBookClick}
            className="btn btn-primary inline-flex items-center gap-2 self-start md:self-auto"
          >
            <span>Begin Step 01</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[var(--ink-faint)] border border-[var(--ink-faint)]">
          {JOURNEY_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-8 sm:p-12 bg-white flex flex-col justify-between space-y-8"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono-editorial text-xs text-[#E8C1B0] font-bold">
                    STAGE {step.step}
                  </span>
                  <span className="badge">{step.name}</span>
                </div>

                <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#1A1A1A]">
                  {step.title}
                </h3>

                <p className="text-sm text-[#1A1A1A]/70 font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--ink-faint)]">
                <span className="label">DERMALASE STANDARD</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
