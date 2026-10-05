import React, { useState } from 'react';
import { REAL_RESULTS } from '../data/dermalaseContent';
import { ArrowUpRight } from 'lucide-react';

interface MinimalResultsProps {
  onBookClick: () => void;
}

export const MinimalResults: React.FC<MinimalResultsProps> = ({ onBookClick }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = REAL_RESULTS[activeIdx];

  return (
    <section id="results" className="py-24 sm:py-32 hairline-b bg-[var(--bg-main)]">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] font-medium">
              Clinical Evidence &amp; Documentation
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[var(--text-main)] font-normal">
              Real Results
            </h2>
            <p className="text-sm text-[var(--text-muted)] font-light max-w-lg">
              Documented patient transformations achieved through anatomical restraint and
              advanced energy devices.
            </p>
          </div>

          {/* Minimal Case Tabs */}
          <div className="flex flex-wrap gap-2">
            {REAL_RESULTS.map((item, idx) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`px-3 py-1.5 text-xs transition-colors cursor-pointer ${
                  activeIdx === idx
                    ? 'bg-[var(--text-main)] text-[var(--bg-main)] font-medium'
                    : 'bg-[var(--bg-card)] hairline-all text-[var(--text-muted)] hover:text-[var(--text-main)]'
                }`}
              >
                Case 0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Minimal Case Inspector Box */}
        <div className="p-8 sm:p-12 bg-[var(--bg-card)] hairline-all space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 hairline-b">
            <div>
              <div className="text-xs font-mono-tabular text-[var(--accent)] mb-1">
                CASE STUDY 0{activeIdx + 1} · {current.profile}
              </div>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-[var(--text-main)]">
                {current.title}
              </h3>
            </div>

            <div className="p-2 bg-[var(--bg-subtle)] text-xs font-mono-tabular text-[var(--text-main)] self-start sm:self-center">
              {current.metrics}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-medium">
                Clinical Protocol
              </div>
              <p className="text-sm text-[var(--text-main)] font-light leading-relaxed">
                {current.protocol}
              </p>
            </div>

            <div className="space-y-2">
              <div className="text-xs uppercase tracking-wider text-[var(--text-muted)] font-medium">
                Documented Outcome
              </div>
              <p className="text-sm text-[var(--text-main)] font-light leading-relaxed">
                {current.outcome}
              </p>
            </div>
          </div>

          <div className="pt-6 hairline-t flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={onBookClick}
              className="text-xs uppercase tracking-widest text-[var(--text-main)] hover:text-[var(--accent)] underline underline-offset-4 inline-flex items-center gap-1.5 cursor-pointer font-medium"
            >
              <span>Consult on Similar Procedure</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <span className="text-xs text-[var(--text-muted)]">
              All results individualized · Physician assessment required
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
