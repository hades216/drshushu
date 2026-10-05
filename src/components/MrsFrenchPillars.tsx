import React from 'react';
import { WHY_CHOOSE_DATA } from '../data/dermalaseContent';
import { Check } from 'lucide-react';

export const MrsFrenchPillars: React.FC = () => {
  return (
    <section className="py-24 sm:py-32 bg-[#FAF9F7] border-b border-[#EAEAEA]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="mrs-badge">Clinical Principles</span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl font-light text-neutral-900">
              Why Choose Dermalase
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 font-light max-w-xl">
              Modeled after premier Australian and Harley Street London dermatology practices.
              An unwavering commitment to safety, integrity, and cellular preservation.
            </p>
          </div>
          <span className="text-xs uppercase tracking-widest text-neutral-400 font-mono-micro">
            05 CORE COMMITMENTS
          </span>
        </div>

        {/* 5 Pillars Clean Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_DATA.map((pillar) => (
            <div
              key={pillar.id}
              className="p-8 rounded-2xl bg-white border border-neutral-200/80 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-mono-micro text-xs text-[#C49A86] font-bold">
                    PILLAR {pillar.number}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-neutral-400">
                    {pillar.title}
                  </span>
                </div>

                <h3 className="font-serif-luxury text-2xl text-neutral-900 leading-snug">
                  {pillar.headline}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-100 space-y-2">
                {pillar.points.map((pt) => (
                  <div key={pt} className="flex items-start gap-2 text-xs text-neutral-600">
                    <Check className="w-3.5 h-3.5 text-[#C49A86] shrink-0 mt-0.5" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* 6th Complementary Philosophy Card */}
          <div className="p-8 rounded-2xl bg-[#F6F1EC] border border-[#E9DFD6] flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <span className="font-mono-micro text-xs text-[#C49A86] font-bold">
                PROMISE
              </span>
              <h3 className="font-serif-luxury text-2xl text-neutral-900">
                Conservative Aesthetic Artistry
              </h3>
              <p className="text-xs sm:text-sm text-neutral-700 font-light leading-relaxed">
                We believe in undetectable enhancements. Your friends will notice your radiant
                vitality, not a cosmetic procedure.
              </p>
            </div>
            <div className="text-xs font-medium text-neutral-900">
              Dr. Shumaila Khan · Medical Director
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
