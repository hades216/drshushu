import React, { useState } from 'react';
import { WHY_CHOOSE_DATA } from '../data/dermalaseContent';
import { Check } from 'lucide-react';

export const MinimalWhyChoose: React.FC = () => {
  const [activePillar, setActivePillar] = useState(0);
  const current = WHY_CHOOSE_DATA[activePillar];

  return (
    <section className="py-24 sm:py-32 hairline-b bg-[var(--bg-main)]">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] font-medium">
            Five Core Standards
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[var(--text-main)] font-normal">
            Why Choose Dermalase
          </h2>
          <p className="text-sm sm:text-base text-[var(--text-muted)] font-light">
            Founded on transparency, anatomical preservation, and uncompromised medical safety.
          </p>
        </div>

        {/* Minimalist Horizontal Pillar Option Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-px bg-[var(--border-color)] mb-8 hairline-all">
          {WHY_CHOOSE_DATA.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActivePillar(idx)}
              className={`p-4 sm:p-5 text-left transition-colors cursor-pointer ${
                activePillar === idx
                  ? 'bg-[var(--bg-card)] text-[var(--text-main)] font-medium'
                  : 'bg-[var(--bg-main)] text-[var(--text-muted)] hover:text-[var(--text-main)]'
              }`}
            >
              <div className="font-mono-tabular text-xs text-[var(--accent)] mb-1">
                {item.number}
              </div>
              <div className="text-xs sm:text-sm font-serif-luxury">
                {item.title}
              </div>
            </button>
          ))}
        </div>

        {/* Selected Pillar Content */}
        <div className="p-8 sm:p-12 bg-[var(--bg-card)] hairline-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs tracking-widest uppercase text-[var(--accent)] font-mono-tabular">
              Standard {current.number} · {current.title}
            </div>
            <h3 className="font-serif-luxury text-2xl sm:text-4xl text-[var(--text-main)]">
              {current.headline}
            </h3>
            <p className="text-sm sm:text-base text-[var(--text-muted)] font-light leading-relaxed">
              {current.description}
            </p>
          </div>

          <div className="lg:col-span-5 space-y-3 pt-4 lg:pt-0 lg:hairline-l lg:pl-8">
            <div className="text-xs tracking-wider uppercase text-[var(--text-main)] font-medium mb-3">
              Guaranteed Protocols
            </div>
            {current.points.map((pt) => (
              <div key={pt} className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-muted)]">
                <Check className="w-4 h-4 text-[var(--accent)] shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
