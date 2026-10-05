import React from 'react';
import { ArrowUpRight, SlidersHorizontal } from 'lucide-react';
import { BRAND_IMAGES } from '../data/dermalaseContent';

interface MinimalHeroProps {
  theme: 'warm' | 'noir';
  onToggleTheme: () => void;
  onBookClick: () => void;
}

export const MinimalHero: React.FC<MinimalHeroProps> = ({
  theme,
  onToggleTheme,
  onBookClick,
}) => {
  return (
    <section id="top" className="relative pt-12 pb-20 lg:py-28 overflow-hidden hairline-b">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12">
        {/* Aesthetic Option Selector Bar */}
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4 p-3 bg-[var(--bg-subtle)] hairline-all text-xs">
          <div className="flex items-center gap-2 text-[var(--text-muted)]">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[var(--accent)]" />
            <span className="uppercase tracking-widest text-[11px] font-medium">
              Curated Aesthetic View:
            </span>
            <span className="text-[var(--text-main)] font-medium">
              {theme === 'warm' ? '01. Atelier Minimalist (Warm Gallery & Swiss Stone)' : '02. Noir Monolith (Understated Architectural Dark)'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[var(--text-muted)] text-[11px]">Alternate Option:</span>
            <button
              type="button"
              onClick={onToggleTheme}
              className="text-[var(--text-main)] hover:text-[var(--accent)] underline underline-offset-4 cursor-pointer font-medium"
            >
              Switch to {theme === 'warm' ? 'Noir Monolith' : 'Atelier Warm'}
            </button>
          </div>
        </div>

        {/* Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Essential Preserved Messages & Minimalist Typography */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] font-medium">
                Welcome to Dermalase by Dr. Shumaila Khan
              </div>
              <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] text-[var(--text-main)]">
                Reveal your <span className="italic font-light">best skin.</span>
              </h1>
            </div>

            <div className="space-y-4 max-w-xl text-[var(--text-muted)]">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-[var(--text-main)] font-normal">
                Aesthetic Physician &amp; Skin Specialist in Islamabad
              </h2>
              <p className="text-base sm:text-lg leading-relaxed font-light">
                British dermatological qualifications from Cardiff University, Wales (UK)
                paired with genuine FDA-approved laser and radiofrequency platforms. An unhurried,
                physician-led sanctuary in Sector F-10/1 designed for lasting cellular health.
              </p>
            </div>

            {/* Quiet, Minimal CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onBookClick}
                className="px-6 py-3.5 bg-[var(--text-main)] text-[var(--bg-main)] text-xs uppercase tracking-widest font-medium hover:opacity-90 transition-opacity cursor-pointer inline-flex items-center gap-2"
              >
                <span>Book Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="#treatments"
                className="px-6 py-3.5 hairline-all text-[var(--text-main)] text-xs uppercase tracking-widest hover:border-[var(--text-main)] transition-colors inline-flex items-center gap-2"
              >
                Explore 30+ Treatments
              </a>
            </div>

            {/* Unboxed Metadata Trust Line */}
            <div className="pt-6 hairline-t flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[var(--text-muted)]">
              <span>Cardiff University (Wales, UK)</span>
              <span aria-hidden="true" className="text-[var(--accent)]">·</span>
              <span>Diplomat AAAM (USA)</span>
              <span aria-hidden="true" className="text-[var(--accent)]">·</span>
              <span>Sector F-10/1 Islamabad</span>
            </div>
          </div>

          {/* Right Column: Architectural Editorial Frame */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[3/4] w-full max-w-[460px] mx-auto overflow-hidden bg-[var(--bg-subtle)] hairline-all">
              <img
                src={BRAND_IMAGES.doctorPortrait}
                alt="Dr. Shumaila Khan — Aesthetic Physician & Skin Specialist in Islamabad"
                className="w-full h-full object-cover object-top filter grayscale contrast-105 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[var(--bg-main)] via-[var(--bg-main)]/70 to-transparent">
                <div className="text-[11px] tracking-widest uppercase text-[var(--accent)] mb-1">
                  Dr. Shumaila Khan
                </div>
                <div className="text-xs text-[var(--text-muted)]">
                  Founder &amp; Chief Aesthetic Physician · Dermalase
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
