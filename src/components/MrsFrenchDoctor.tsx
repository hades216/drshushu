import React, { useState } from 'react';
import { DOCTOR_INFO, BRAND_IMAGES } from '../data/dermalaseContent';
import { Award, ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface MrsFrenchDoctorProps {
  onBookClick: () => void;
}

export const MrsFrenchDoctor: React.FC<MrsFrenchDoctorProps> = ({ onBookClick }) => {
  const [selectedCred, setSelectedCred] = useState(0);

  return (
    <section id="about" className="py-24 sm:py-32 bg-white border-b border-[#EAEAEA]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Portrait & Sanctuary Quote */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-28">
            <div className="space-y-3">
              <span className="mrs-badge">The Medical Director</span>
              <h2 className="font-serif-luxury text-4xl sm:text-5xl font-light text-neutral-900">
                {DOCTOR_INFO.name}
              </h2>
              <p className="font-serif-luxury italic text-lg text-neutral-600">
                {DOCTOR_INFO.title}
              </p>
            </div>

            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-neutral-100 border border-neutral-200 shadow-sm">
              <img
                src={BRAND_IMAGES.doctorPortrait}
                alt="Dr. Shumaila Khan"
                className="w-full h-full object-cover object-top filter contrast-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-6 left-6 right-6 text-white text-xs space-y-1">
                <div className="font-medium text-sm">Dr. Shumaila Khan</div>
                <div className="text-white/80 font-light">
                  PGDip Dermatology (Cardiff, UK) · Diplomat AAAM (USA)
                </div>
              </div>
            </div>

            <div className="p-7 rounded-2xl bg-[#FAF9F7] border border-[#EAEAEA] space-y-3">
              <div className="text-xs uppercase tracking-[0.16em] font-medium text-[#C49A86]">
                Clinical Philosophy
              </div>
              <p className="font-serif-luxury italic text-base sm:text-lg text-neutral-800 leading-relaxed">
                &ldquo;{DOCTOR_INFO.philosophy}&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Narrative, Qualifications & Interactive Credential Viewer */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-400">
                British Training &amp; Aesthetic Artistry
              </span>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl text-neutral-900 font-light">
                Where clinical safety meets natural facial harmony.
              </h3>
              <div className="space-y-4 text-base text-neutral-600 font-light leading-relaxed">
                {DOCTOR_INFO.bioNarrative.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Qualifications Matrix (UK, Cardiff Wales, AAAM, Dermalase Leadership, Specialist) */}
            <div className="space-y-6 pt-6 border-t border-neutral-200">
              <div className="flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.16em] font-medium text-neutral-500">
                  Select a Board Credential to Inspect:
                </span>
                <span className="text-xs text-neutral-400 font-mono-micro">05 CREDENTIALS</span>
              </div>

              {/* Horizontal Pill Selector */}
              <div className="flex flex-wrap gap-2">
                {DOCTOR_INFO.qualifications.map((q, idx) => (
                  <button
                    key={q.badge}
                    type="button"
                    onClick={() => setSelectedCred(idx)}
                    className={`px-4 py-2 text-xs rounded-full transition-all cursor-pointer font-medium ${
                      selectedCred === idx
                        ? 'bg-neutral-900 text-white shadow-sm'
                        : 'bg-[#FAF9F7] text-neutral-600 hover:text-black hover:bg-neutral-100 border border-neutral-200/80'
                    }`}
                  >
                    {q.badge}
                  </button>
                ))}
              </div>

              {/* Detailed Card for Selected Qualification */}
              <div className="p-8 rounded-2xl bg-[#FAFAFA] border border-neutral-200 space-y-4">
                <div className="flex items-center justify-between text-xs text-[#C49A86] font-mono-micro font-bold">
                  <span>{DOCTOR_INFO.qualifications[selectedCred].badge}</span>
                  <Award className="w-4 h-4" />
                </div>
                <h4 className="font-serif-luxury text-2xl text-neutral-900">
                  {DOCTOR_INFO.qualifications[selectedCred].title}
                </h4>
                <div className="text-xs font-medium text-neutral-500 uppercase tracking-wider">
                  {DOCTOR_INFO.qualifications[selectedCred].institution}
                </div>
                <p className="text-sm text-neutral-600 font-light leading-relaxed pt-2 border-t border-neutral-200/70">
                  {DOCTOR_INFO.qualifications[selectedCred].summary}
                </p>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={onBookClick}
                  className="btn-mrs btn-mrs-dark"
                >
                  <span>Book Assessment with Dr. Shumaila</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2 text-xs text-neutral-500">
                  <CheckCircle2 className="w-4 h-4 text-[#C49A86]" />
                  <span>Sector F-10/1 Islamabad &amp; Overseas Video Available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
