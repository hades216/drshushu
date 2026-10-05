import React, { useState } from 'react';
import { DOCTOR_INFO, BRAND_IMAGES } from '../data/dermalaseContent';
import { ArrowUpRight } from 'lucide-react';

interface V14DoctorProps {
  onBookClick: () => void;
}

export const V14Doctor: React.FC<V14DoctorProps> = ({ onBookClick }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="doctor" className="border-b border-[var(--ink-faint)] bg-[#F8F7F4] py-24 sm:py-32">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Portrait & Sanctuary Photo */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="space-y-2">
              <span className="label">THE CHIEF MEDICAL DIRECTOR</span>
              <h2 className="font-serif-editorial text-4xl sm:text-5xl font-light text-[#1A1A1A]">
                {DOCTOR_INFO.name}
              </h2>
              <p className="font-serif-editorial italic text-lg text-[#1A1A1A]/70">
                {DOCTOR_INFO.title}
              </p>
            </div>

            <div className="relative aspect-[3/4] w-full overflow-hidden border border-[var(--ink-faint)] bg-[#EFECE7]">
              <img
                src={BRAND_IMAGES.doctorPortrait}
                alt="Dr. Shumaila Khan"
                className="w-full h-full object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-[#1A1A1A]/80 via-[#1A1A1A]/40 to-transparent text-white">
                <span className="badge !border-white text-white mb-2 inline-block">
                  UK QUALIFIED
                </span>
                <div className="text-xs font-light">
                  Cardiff University, Wales (UK) · AAAM Diplomat (USA)
                </div>
              </div>
            </div>

            <div className="p-6 bg-[#EFECE7] border border-[var(--ink-faint)]">
              <span className="label block mb-2">CLINICAL PHILOSOPHY</span>
              <p className="font-serif-editorial italic text-base sm:text-lg text-[#1A1A1A] leading-relaxed">
                &ldquo;{DOCTOR_INFO.philosophy}&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Narrative & Qualifications */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <span className="label">EVIDENCE-BASED AESTHETIC DERMATOLOGY</span>
              <div className="space-y-4 text-base sm:text-lg text-[#1A1A1A]/80 font-light leading-relaxed">
                {DOCTOR_INFO.bioNarrative.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {/* Interactive Qualifications Tabs */}
            <div className="space-y-6 pt-6 border-t border-[var(--ink-faint)]">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <span className="label">INTERNATIONAL ACCREDITATIONS &amp; BOARDS</span>
                <span className="badge">VERIFIED CREDENTIALS</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {DOCTOR_INFO.qualifications.map((q, idx) => (
                  <button
                    key={q.badge}
                    type="button"
                    onClick={() => setActiveTab(idx)}
                    className={`px-3 py-2 text-xs font-mono-editorial transition-colors cursor-pointer border ${
                      activeTab === idx
                        ? 'bg-[#1A1A1A] text-white border-[#1A1A1A]'
                        : 'bg-white text-[#1A1A1A]/70 border-[var(--ink-faint)] hover:border-[#1A1A1A]'
                    }`}
                  >
                    {q.badge}
                  </button>
                ))}
              </div>

              <div className="p-8 bg-white border border-[var(--ink-faint)] space-y-3">
                <div className="label text-[#E8C1B0] !opacity-100">
                  {DOCTOR_INFO.qualifications[activeTab].badge}
                </div>
                <h3 className="font-serif-editorial text-2xl text-[#1A1A1A]">
                  {DOCTOR_INFO.qualifications[activeTab].title}
                </h3>
                <div className="text-xs uppercase tracking-wider text-[#6B6864]">
                  {DOCTOR_INFO.qualifications[activeTab].institution}
                </div>
                <p className="text-sm text-[#1A1A1A]/70 font-light leading-relaxed pt-2">
                  {DOCTOR_INFO.qualifications[activeTab].summary}
                </p>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={onBookClick}
                  className="btn btn-primary inline-flex items-center gap-2"
                >
                  <span>Request Consultation with Dr. Shumaila</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
