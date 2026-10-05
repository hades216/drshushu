import React from 'react';
import { STATS_DATA } from '../data/dermalaseContent';

export const MinimalStats: React.FC = () => {
  return (
    <section className="hairline-b bg-[var(--bg-main)]">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-color)]">
          {STATS_DATA.map((item, idx) => (
            <div
              key={item.id}
              className={`py-8 sm:py-0 ${idx === 0 ? 'sm:pr-8' : idx === 3 ? 'sm:pl-8' : 'sm:px-8'} space-y-3`}
            >
              <div className="font-serif-luxury font-mono-tabular text-4xl sm:text-5xl text-[var(--text-main)] font-normal">
                {item.value}
              </div>
              <div className="text-sm font-medium text-[var(--text-main)]">
                {item.label}
              </div>
              <div className="text-xs text-[var(--accent)] font-medium">
                {item.sublabel}
              </div>
              <p className="text-xs text-[var(--text-muted)] leading-relaxed font-light">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
