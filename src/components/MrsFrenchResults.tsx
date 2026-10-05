import React, { useState } from 'react';
import { REAL_RESULTS } from '../data/dermalaseContent';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface MrsFrenchResultsProps {
  onBookClick: () => void;
}

export const MrsFrenchResults: React.FC<MrsFrenchResultsProps> = ({ onBookClick }) => {
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const currentCase = REAL_RESULTS[activeCaseIdx];

  return (
    <section id="results" className="py-24 sm:py-32 bg-white border-b border-[#EAEAEA]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="mrs-badge">Clinical Documentation</span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-light text-neutral-900">
              Real Results
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-light max-w-xl">
              Authentic transformations achieved through non-surgical precision, anatomical
              respect, and individualized treatment planning.
            </p>
          </div>

          <div className="flex gap-2">
            {REAL_RESULTS.map((item, idx) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveCaseIdx(idx)}
                className={`px-4 py-2 rounded-full text-xs font-medium uppercase tracking-[0.1em] transition-all cursor-pointer border ${
                  activeCaseIdx === idx
                    ? 'bg-neutral-900 text-white border-neutral-900'
                    : 'bg-[#FAF9F7] text-neutral-600 hover:text-black border-neutral-200'
                }`}
              >
                Case 0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Case Inspector Card */}
        <div className="p-8 sm:p-14 rounded-3xl bg-[#FAF9F7] border border-[#EAEAEA] space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-200">
            <div>
              <div className="text-xs uppercase tracking-widest font-mono-micro text-[#C49A86] mb-1">
                CASE STUDY 0{activeCaseIdx + 1} · {currentCase.profile}
              </div>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-neutral-900">
                {currentCase.title}
              </h3>
            </div>

            <div className="px-4 py-2 rounded-full bg-white border border-neutral-200 text-xs font-mono-micro text-neutral-800 shadow-sm self-start sm:self-auto">
              {currentCase.metrics}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 space-y-2">
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                Clinical Protocol
              </span>
              <p className="text-sm text-neutral-800 font-light leading-relaxed">
                {currentCase.protocol}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-neutral-200/80 space-y-2">
              <span className="text-xs uppercase tracking-wider text-neutral-400 font-medium">
                Documented Clinical Outcome
              </span>
              <p className="text-sm text-neutral-800 font-light leading-relaxed">
                {currentCase.outcome}
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-neutral-200">
            <button
              type="button"
              onClick={onBookClick}
              className="btn-mrs btn-mrs-dark"
            >
              <span>Consult on Similar Procedure</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-2 text-xs text-neutral-500">
              <CheckCircle2 className="w-4 h-4 text-[#C49A86]" />
              <span>Zero Scalpels or Sutures Required</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
