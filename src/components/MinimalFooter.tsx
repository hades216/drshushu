import React from 'react';
import { CONTACT_INFO, TREATMENTS_DATA, CERTIFICATIONS } from '../data/dermalaseContent';

export const MinimalFooter: React.FC = () => {
  return (
    <footer className="bg-[var(--bg-main)] py-20 text-[var(--text-main)]">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 hairline-b">
          {/* Brand & Statement */}
          <div className="md:col-span-5 space-y-4">
            <div className="font-serif-luxury text-2xl font-normal">
              Dermalase
            </div>
            <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent)]">
              By Dr. Shumaila Khan
            </div>
            <p className="text-xs sm:text-sm text-[var(--text-muted)] font-light leading-relaxed max-w-sm">
              Aesthetic Physician &amp; Skin Specialist in Islamabad. Post Graduate Diploma in
              Dermatology (Cardiff University, Wales UK). American Academy of Aesthetic
              Medicine Diplomat.
            </p>
          </div>

          {/* Treatment Suites */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
              Clinical Suites
            </div>
            <ul className="space-y-1.5 text-xs text-[var(--text-muted)] font-light">
              {TREATMENTS_DATA.map((t) => (
                <li key={t.id}>
                  <a href="#treatments" className="hover:text-[var(--text-main)] transition-colors">
                    {t.number}. {t.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coordinates */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs uppercase tracking-wider text-[var(--accent)] font-medium">
              Sanctuary
            </div>
            <div className="text-xs text-[var(--text-muted)] font-light space-y-1">
              <p>{CONTACT_INFO.address}</p>
              <p className="font-mono-tabular text-[var(--text-main)] pt-2">
                {CONTACT_INFO.phones[0]}
              </p>
              <p className="font-mono-tabular text-[var(--text-main)]">
                {CONTACT_INFO.phones[1]}
              </p>
              <p className="pt-2">{CONTACT_INFO.email}</p>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-[var(--text-muted)] font-light">
          <div>
            &copy; {new Date().getFullYear()} Dermalase by Dr. Shumaila Khan. Sector F-10/1, Islamabad. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#top" className="hover:text-[var(--text-main)]">
              Back to Top
            </a>
            <a href="#contact" className="hover:text-[var(--text-main)]">
              Inquire
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
