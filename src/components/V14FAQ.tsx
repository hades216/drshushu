import React, { useState } from 'react';
import { FAQS } from '../data/dermalaseContent';
import { Plus, Minus } from 'lucide-react';

export const V14FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="border-b border-[var(--ink-faint)] bg-[#F8F7F4] py-24 sm:py-32">
      <div className="max-w-[1100px] mx-auto px-6 lg:px-16">
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <span className="label">FREQUENTLY ASKED QUESTIONS</span>
          <h2 className="font-serif-editorial text-4xl sm:text-5xl font-light text-[#1A1A1A]">
            Clinical Inquiries
          </h2>
          <p className="text-sm text-[#6B6864] font-light">
            Direct medical guidance from Dr. Shumaila Khan regarding Endolift, laser safety,
            and international patient bookings.
          </p>
        </div>

        <div className="divide-y divide-[var(--ink-faint)] border-t border-b border-[var(--ink-faint)]">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="py-6">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full text-left flex items-start justify-between gap-6 cursor-pointer group"
                >
                  <div className="space-y-1">
                    <span className="font-mono-editorial text-[0.65rem] text-[#E8C1B0] font-bold">
                      0{idx + 1}
                    </span>
                    <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#1A1A1A] group-hover:opacity-70 transition-opacity">
                      {faq.q}
                    </h3>
                  </div>

                  <span className="w-8 h-8 shrink-0 border border-[var(--ink-faint)] flex items-center justify-center text-xs mt-1">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-4 pr-12 pl-0 sm:pl-6 text-sm text-[#1A1A1A]/75 font-light leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
