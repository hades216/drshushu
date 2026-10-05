import React from 'react';
import { JOURNEY_STEPS } from '../data/dermalaseContent';
import { ArrowUpRight } from 'lucide-react';

interface MinimalJourneyProps {
  onBookClick: () => void;
}

export const MinimalJourney: React.FC<MinimalJourneyProps> = ({ onBookClick }) => {
  return (
    <section className="py-24 sm:py-32 hairline-b bg-[var(--bg-main)]">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] font-medium">
              Three-Stage Clinical Flow
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[var(--text-main)] font-normal">
              Consultation Journey
            </h2>
            <p className="text-sm text-[var(--text-muted)] font-light max-w-lg">
              A structured, respectful process ensuring complete diagnostic clarity before any
              procedure commences.
            </p>
          </div>

          <button
            type="button"
            onClick={onBookClick}
            className="px-5 py-2.5 bg-[var(--text-main)] text-[var(--bg-main)] text-xs uppercase tracking-widest font-medium hover:opacity-90 cursor-pointer self-start md:self-auto inline-flex items-center gap-1.5"
          >
            <span>Begin Step 01</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNEY_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-8 bg-[var(--bg-card)] hairline-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono-tabular text-xs text-[var(--accent)] tracking-widest">
                    STEP {step.step}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[var(--text-muted)]">
                    {step.name}
                  </span>
                </div>
                <h3 className="font-serif-luxury text-xl sm:text-2xl text-[var(--text-main)]">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] font-light leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 hairline-t text-xs font-mono-tabular text-[var(--accent)]">
                Dermalase Protocol
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
