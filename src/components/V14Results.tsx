import React, { useState } from 'react';
import { REAL_RESULTS } from '../data/dermalaseContent';
import { ArrowUpRight } from 'lucide-react';

interface V14ResultsProps {
  onBookClick: () => void;
}

export const V14Results: React.FC<V14ResultsProps> = ({ onBookClick }) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const current = REAL_RESULTS[activeIdx];

  return (
    <section id="results" className="border-b border-[var(--ink-faint)] bg-[#F8F7F4] py-24 sm:py-32">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="label">CLINICAL EVIDENCE</span>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl font-light text-[#1A1A1A]">
              Real Results
            </h2>
            <p className="text-sm sm:text-base text-[#6B6864] font-light max-w-xl">
              Authentic clinical endpoints achieved with zero scalpels, sutures, or artificial
              overfilling.
            </p>
          </div>

          <div className="flex gap-2">
            {REAL_RESULTS.map((item, idx) => (
              <button
                key={item.title}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`btn !py-2 !px-4 text-xs font-mono-editorial ${
                  activeIdx === idx ? 'btn-primary' : ''
                }`}
              >
                Case 0{idx + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Active Case Inspection Box */}
        <div className="p-8 sm:p-14 bg-white border border-[var(--ink-faint)] space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--ink-faint)]">
            <div>
              <div className="label text-[#E8C1B0] !opacity-100 mb-1">
                CASE STUDY 0{activeIdx + 1} · {current.profile}
              </div>
              <h3 className="font-serif-editorial text-3xl sm:text-4xl text-[#1A1A1A]">
                {current.title}
              </h3>
            </div>

            <div className="badge self-start sm:self-auto">
              {current.metrics}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2 p-6 bg-[#EFECE7]/60 border border-[var(--ink-faint)]">
              <span className="label">CLINICAL PROTOCOL</span>
              <p className="text-sm text-[#1A1A1A]/90 font-light leading-relaxed">
                {current.protocol}
              </p>
            </div>

            <div className="space-y-2 p-6 bg-[#EFECE7]/60 border border-[var(--ink-faint)]">
              <span className="label">DOCUMENTED OUTCOME</span>
              <p className="text-sm text-[#1A1A1A]/90 font-light leading-relaxed">
                {current.outcome}
              </p>
            </div>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-[var(--ink-faint)]">
            <button
              type="button"
              onClick={onBookClick}
              className="text-xs uppercase font-mono-editorial tracking-wider text-[#1A1A1A] hover:text-[#E8C1B0] inline-flex items-center gap-1.5 cursor-pointer font-bold"
            >
              <span>Consult on Similar Case</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <span className="label">ALL PROCEDURES PHYSICIAN-PERFORMED</span>
          </div>
        </div>
      </div>
    </section>
  );
};
