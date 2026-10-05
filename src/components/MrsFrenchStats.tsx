import React from 'react';
import { STATS_DATA } from '../data/dermalaseContent';

export const MrsFrenchStats: React.FC = () => {
  return (
    <section className="bg-[#FAF9F7] border-b border-[#EAEAEA]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-14 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 divide-y sm:divide-y-0 divide-neutral-200">
          {STATS_DATA.map((item, idx) => (
            <div key={item.id} className={`${idx > 0 ? 'pt-6 sm:pt-0' : ''} space-y-2`}>
              <div className="font-serif-luxury text-4xl sm:text-5xl font-light text-neutral-900">
                {item.value}
              </div>
              <div className="text-sm font-medium text-neutral-900">
                {item.label}
              </div>
              <div className="text-xs text-[#9B7563] font-medium">
                {item.sublabel}
              </div>
              <p className="text-xs text-neutral-500 font-light leading-relaxed">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
