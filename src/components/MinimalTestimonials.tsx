import React from 'react';
import { TESTIMONIALS } from '../data/dermalaseContent';
import { Star } from 'lucide-react';

export const MinimalTestimonials: React.FC = () => {
  const featured = TESTIMONIALS[0];
  const others = TESTIMONIALS.slice(1);

  return (
    <section className="py-24 sm:py-32 hairline-b bg-[var(--bg-main)]">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12">
        <div className="max-w-2xl mb-16 space-y-3">
          <div className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] font-medium">
            Patient Stories &amp; Colleague Endorsements
          </div>
          <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[var(--text-main)] font-normal">
            Voices of Trust
          </h2>
          <div className="flex items-center gap-1 text-xs text-[var(--accent)] font-medium pt-1">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-[var(--accent)]" />
              ))}
            </div>
            <span className="ml-1 text-[var(--text-muted)]">
              4.9 Google &amp; Oladoc Rating Across 400+ Patients
            </span>
          </div>
        </div>

        {/* Featured Dubai Patient Testimonial */}
        <div className="p-8 sm:p-12 bg-[var(--bg-card)] hairline-all mb-8 space-y-6">
          <div className="text-xs font-mono-tabular uppercase tracking-widest text-[var(--accent)]">
            {featured.tag} · {featured.location}
          </div>

          <blockquote className="font-serif-luxury text-lg sm:text-2xl text-[var(--text-main)] leading-relaxed italic font-normal">
            &ldquo;{featured.quote}&rdquo;
          </blockquote>

          <div className="pt-4 hairline-t flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[var(--text-muted)]">
            <div>
              <strong className="text-[var(--text-main)] font-medium">{featured.author}</strong> —{' '}
              <span>{featured.location}</span>
            </div>
            <div className="text-[var(--accent)]">{featured.treatment}</div>
          </div>
        </div>

        {/* Secondary Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {others.map((item) => (
            <div
              key={item.author}
              className="p-6 sm:p-8 bg-[var(--bg-card)] hairline-all flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="text-xs font-mono-tabular uppercase text-[var(--accent)]">
                  {item.tag}
                </div>
                <blockquote className="text-sm text-[var(--text-main)] font-light leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              </div>

              <div className="pt-4 hairline-t text-xs text-[var(--text-muted)] flex items-center justify-between">
                <span>{item.author} · {item.location}</span>
                <span className="text-[var(--text-main)]">{item.treatment}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
