import React, { useState } from 'react';
import { FAQS } from '../data/dermalaseContent';
import { Plus, Minus } from 'lucide-react';

export const MinimalFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-24 sm:py-32 hairline-b bg-[var(--bg-main)]">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] font-medium">
            Frequently Asked Questions
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[var(--text-main)] font-normal">
            Clinical Clarifications
          </h2>
          <p className="text-sm text-[var(--text-muted)] font-light">
            Clear, honest answers directly from Dr. Shumaila Khan regarding safety, recovery,
            and international care.
          </p>
        </div>

        <div className="divide-y divide-[var(--border-color)] hairline-t hairline-b">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="py-6">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full text-left flex items-start justify-between gap-6 cursor-pointer group"
                >
                  <span className="font-serif-luxury text-lg sm:text-xl text-[var(--text-main)] group-hover:text-[var(--accent)] transition-colors">
                    {faq.q}
                  </span>
                  <span className="w-7 h-7 shrink-0 hairline-all flex items-center justify-center text-xs text-[var(--text-muted)] mt-1">
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="pt-4 pr-10 text-xs sm:text-sm text-[var(--text-muted)] font-light leading-relaxed">
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
