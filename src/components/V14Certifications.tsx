import React from 'react';
import { CERTIFICATIONS } from '../data/dermalaseContent';
import { Award } from 'lucide-react';

export const V14Certifications: React.FC = () => {
  return (
    <section className="border-b border-[var(--ink-faint)] bg-[#F8F7F4] py-20">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-12">
          <div className="space-y-1">
            <span className="label">GLOBAL INSTITUTIONS &amp; FELLOWSHIPS</span>
            <h2 className="font-serif-editorial text-3xl sm:text-4xl text-[#1A1A1A] font-light">
              Board Accreditations
            </h2>
          </div>
          <span className="badge">BRITISH &amp; AMERICAN MEDICAL BOARDS</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[var(--ink-faint)] border border-[var(--ink-faint)] bg-white">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.acronym} className="p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-2">
                <Award className="w-5 h-5 text-[#E8C1B0] mb-3" />
                <h3 className="font-serif-editorial text-2xl text-[#1A1A1A]">
                  {cert.acronym}
                </h3>
                <div className="label !opacity-90">{cert.name}</div>
              </div>
              <p className="text-xs text-[#6B6864] font-light leading-relaxed pt-3 border-t border-[var(--ink-faint)]">
                {cert.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
