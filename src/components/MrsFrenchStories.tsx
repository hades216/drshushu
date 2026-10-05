import React from 'react';
import { TESTIMONIALS } from '../data/dermalaseContent';
import { Star, Quote, ArrowUpRight } from 'lucide-react';

interface MrsFrenchStoriesProps {
  onBookClick: () => void;
}

export const MrsFrenchStories: React.FC<MrsFrenchStoriesProps> = ({ onBookClick }) => {
  const featuredDubai = TESTIMONIALS[0];
  const otherStories = TESTIMONIALS.slice(1);

  return (
    <section id="stories" className="py-24 sm:py-32 bg-[#FAF9F7] border-b border-[#EAEAEA]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="mrs-badge">Patient Experiences</span>
            <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl font-light text-neutral-900">
              Voices of Trust
            </h2>
            <div className="flex items-center gap-2 pt-1 text-xs text-neutral-600">
              <div className="flex text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-500" />
                ))}
              </div>
              <span className="font-medium text-neutral-900">4.9 Average Rating</span>
              <span className="text-neutral-400">·</span>
              <span>400+ Happy Patients across Islamabad, Dubai &amp; London</span>
            </div>
          </div>

          <button
            type="button"
            onClick={onBookClick}
            className="btn-mrs btn-mrs-dark self-start md:self-auto"
          >
            <span>Book Your Journey</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Featured Dubai Patient Testimonial */}
        <div className="p-8 sm:p-14 rounded-3xl bg-white border border-neutral-200/90 shadow-sm mb-8 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <span className="mrs-badge !bg-[#FDF9F7] !text-[#9B7563] !border-[#EEDBD0]">
              Featured Overseas Patient Review · Dubai, UAE
            </span>
            <span className="text-xs font-mono-micro text-neutral-400">
              {featuredDubai.treatment}
            </span>
          </div>

          <blockquote className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl text-neutral-900 font-light leading-relaxed italic">
            &ldquo;{featuredDubai.quote}&rdquo;
          </blockquote>

          <div className="pt-6 border-t border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
            <div>
              <span className="font-serif-luxury text-xl text-neutral-900 font-normal">
                {featuredDubai.author}
              </span>
              <span className="text-neutral-500 ml-2">({featuredDubai.location})</span>
            </div>
            <span className="text-neutral-400 font-mono-micro text-[0.7rem]">
              VERIFIED INTERNATIONAL PATIENT REVIEW
            </span>
          </div>
        </div>

        {/* Other Verified Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {otherStories.map((story) => (
            <div
              key={story.author}
              className="p-8 rounded-2xl bg-white border border-neutral-200/80 shadow-sm flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-micro text-[#C49A86] uppercase font-bold">
                    {story.tag}
                  </span>
                  <Quote className="w-4 h-4 text-neutral-300" />
                </div>

                <blockquote className="font-serif-luxury text-xl text-neutral-900 font-light leading-relaxed italic">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 border-t border-neutral-100 flex items-center justify-between text-xs">
                <div>
                  <strong className="font-serif-luxury text-lg text-neutral-900 block font-normal">
                    {story.author}
                  </strong>
                  <span className="text-neutral-500">{story.location}</span>
                </div>
                <span className="text-xs text-neutral-500">{story.treatment}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
