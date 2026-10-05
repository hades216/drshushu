import React from 'react';
import { CERTIFICATIONS } from '../data/dermalaseContent';
import { Award } from 'lucide-react';

export const MinimalCertifications: React.FC = () => {
  return (
    <section className="py-20 hairline-b bg-[var(--bg-main)]">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12">
        <div className="text-center max-w-xl mx-auto mb-12 space-y-2">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] font-medium">
            International Prestige
          </div>
          <h2 className="font-serif-luxury text-2xl sm:text-4xl text-[var(--text-main)] font-normal">
            Board Accreditations
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border-color)] hairline-all bg-[var(--bg-card)]">
          {CERTIFICATIONS.map((cert) => (
            <div key={cert.acronym} className="p-6 space-y-2 flex flex-col justify-between">
              <div>
                <Award className="w-5 h-5 text-[var(--accent)] mb-3" />
                <div className="font-serif-luxury text-lg text-[var(--text-main)]">
                  {cert.acronym}
                </div>
                <div className="text-xs text-[var(--text-muted)] font-medium pt-1">
                  {cert.name}
                </div>
              </div>
              <div className="text-[11px] text-[var(--text-muted)] pt-3 hairline-t font-light">
                {cert.detail}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
