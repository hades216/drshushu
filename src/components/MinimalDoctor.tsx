import React, { useState } from 'react';
import { DOCTOR_INFO, BRAND_IMAGES } from '../data/dermalaseContent';
import { ArrowUpRight } from 'lucide-react';

interface MinimalDoctorProps {
  onBookClick: () => void;
}

export const MinimalDoctor: React.FC<MinimalDoctorProps> = ({ onBookClick }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="doctor" className="py-24 sm:py-32 hairline-b bg-[var(--bg-main)]">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Doctor Profile & Architectural Image */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="space-y-2">
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] font-medium">
                The Clinical Physician
              </div>
              <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[var(--text-main)] font-normal">
                {DOCTOR_INFO.name}
              </h2>
              <p className="text-sm text-[var(--text-muted)] italic font-serif-luxury">
                {DOCTOR_INFO.title}
              </p>
            </div>

            <div className="relative aspect-[4/5] w-full overflow-hidden bg-[var(--bg-subtle)] hairline-all">
              <img
                src={BRAND_IMAGES.clinicInterior}
                alt="Dermalase Sanctuary F-10/1 Islamabad"
                className="w-full h-full object-cover filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 text-xs text-[var(--text-muted)]">
                A-103, Main Sumbal Road, F-10/1 Islamabad
              </div>
            </div>

            <blockquote className="p-6 bg-[var(--bg-subtle)] hairline-all font-serif-luxury italic text-sm text-[var(--text-main)] leading-relaxed">
              &ldquo;{DOCTOR_INFO.philosophy}&rdquo;
            </blockquote>
          </div>

          {/* Right Column: Bio Narrative & Interactive Qualification Tabs */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-5">
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] font-medium">
                Clinical Philosophy &amp; Background
              </div>
              <div className="space-y-4 text-base sm:text-lg text-[var(--text-muted)] font-light leading-relaxed">
                {DOCTOR_INFO.bioNarrative.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Qualifications Matrix (UK, Cardiff Wales, AAAM, Leadership, Specialist) */}
            <div className="space-y-4 pt-6 hairline-t">
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] font-medium">
                Board Qualifications &amp; Credentials
              </div>

              {/* Minimal Option Selector */}
              <div className="flex flex-wrap gap-2 pb-2">
                {DOCTOR_INFO.qualifications.map((q, idx) => (
                  <button
                    key={q.badge}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`px-3 py-1.5 text-xs transition-colors cursor-pointer whitespace-nowrap ${
                      activeTab === idx
                        ? 'bg-[var(--text-main)] text-[var(--bg-main)] font-medium'
                        : 'bg-[var(--bg-subtle)] text-[var(--text-muted)] hover:text-[var(--text-main)]'
                    }`}
                  >
                    {q.badge}
                  </button>
                ))}
              </div>

              {/* Active Qualification Display */}
              <div className="p-6 bg-[var(--bg-card)] hairline-all space-y-2">
                <div className="text-xs font-mono-tabular text-[var(--accent)]">
                  {DOCTOR_INFO.qualifications[activeTab].badge}
                </div>
                <div className="font-serif-luxury text-xl text-[var(--text-main)]">
                  {DOCTOR_INFO.qualifications[activeTab].title}
                </div>
                <div className="text-xs text-[var(--text-muted)] font-medium">
                  {DOCTOR_INFO.qualifications[activeTab].institution}
                </div>
                <p className="text-xs sm:text-sm text-[var(--text-muted)] font-light leading-relaxed pt-2">
                  {DOCTOR_INFO.qualifications[activeTab].summary}
                </p>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={onBookClick}
                  className="text-xs uppercase tracking-widest text-[var(--text-main)] hover:text-[var(--accent)] underline underline-offset-4 inline-flex items-center gap-1.5 cursor-pointer font-medium"
                >
                  <span>Request Consultation with Dr. Shumaila</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
