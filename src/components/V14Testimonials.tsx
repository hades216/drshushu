import React from 'react';
import { TESTIMONIALS } from '../data/dermalaseContent';
import { Star } from 'lucide-react';

export const V14Testimonials: React.FC = () => {
  const featuredDubai = TESTIMONIALS[0];
  const otherReviews = TESTIMONIALS.slice(1);

  return (
    <section className="border-b border-[var(--ink-faint)] bg-[#F8F7F4] py-24 sm:py-32">
      <div className="max-w-[1500px] mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="label">TESTIMONIALS &amp; GLOBAL ACCLAIM</span>
            <h2 className="font-serif-editorial text-4xl sm:text-6xl font-light text-[#1A1A1A]">
              Patient Stories
            </h2>
            <div className="flex items-center gap-2 pt-1">
              <div className="flex text-[#1A1A1A]">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#1A1A1A]" />
                ))}
              </div>
              <span className="label !opacity-90">
                4.9 RATING ACROSS 400+ VERIFIED PATIENTS
              </span>
            </div>
          </div>
          <span className="badge">DUBAI · LONDON · ISLAMABAD</span>
        </div>

        {/* Featured Dubai Patient Testimonial Spotlight */}
        <div className="p-8 sm:p-14 bg-white border border-[var(--ink-faint)] mb-8 space-y-6">
          <div className="flex items-center justify-between">
            <span className="badge !border-[#E8C1B0] text-[#1A1A1A] bg-[#E8C1B0]/20">
              FEATURED OVERSEAS PATIENT · DUBAI, UAE
            </span>
            <span className="label">{featuredDubai.treatment}</span>
          </div>

          <blockquote className="font-serif-editorial text-2xl sm:text-3xl lg:text-4xl text-[#1A1A1A] leading-relaxed italic font-light">
            &ldquo;{featuredDubai.quote}&rdquo;
          </blockquote>

          <div className="pt-6 border-t border-[var(--ink-faint)] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div>
              <span className="font-serif-editorial text-lg text-[#1A1A1A]">
                {featuredDubai.author}
              </span>
              <span className="text-[#6B6864] ml-2">({featuredDubai.location})</span>
            </div>
            <span className="label">VERIFIED INTERNATIONAL PATIENT REVIEW</span>
          </div>
        </div>

        {/* Secondary Reviews in Variation 14 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherReviews.map((rev) => (
            <div
              key={rev.author}
              className="p-8 bg-[#EFECE7] border border-[var(--ink-faint)] flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <span className="label text-[#E8C1B0] !opacity-100">{rev.tag}</span>
                <blockquote className="font-serif-editorial italic text-lg sm:text-xl text-[#1A1A1A] leading-relaxed">
                  &ldquo;{rev.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-[var(--ink-faint)] flex items-center justify-between text-xs">
                <div>
                  <strong className="font-serif-editorial text-base text-[#1A1A1A] block">
                    {rev.author}
                  </strong>
                  <span className="text-[#6B6864]">{rev.location}</span>
                </div>
                <span className="label">{rev.treatment}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
