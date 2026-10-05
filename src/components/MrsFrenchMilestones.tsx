import React, { useRef, useEffect } from 'react';
import { Sparkles, Calendar, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { AuroraBackground } from './AuroraBackground';

gsap.registerPlugin(ScrollTrigger);

interface MrsFrenchMilestonesProps {
  onBookClick: () => void;
}

export const MrsFrenchMilestones: React.FC<MrsFrenchMilestonesProps> = ({ onBookClick }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const milestones = [
    {
      year: '2011',
      title: 'Foundation & UK Qualification',
      subtitle: 'Cardiff University, Wales (UK)',
      description: 'Dr. Shumaila Khan completes advanced post-graduate clinical training in dermatology and aesthetic medicine in the UK, establishing rigorous evidence-based medical standards.',
      highlight: 'UK-Qualified Standard',
    },
    {
      year: '2014',
      title: 'Flagship Sanctuary Launch',
      subtitle: 'Sector F-10/1, Islamabad',
      description: 'Opening of Dermalase Clinic in Islamabad — designed as an elite, private sanctuary providing bespoke dermatological and non-surgical aesthetic care for discerning patients.',
      highlight: 'Islamabad Flagship',
    },
    {
      year: '2018',
      title: 'FDA-Approved Technology Integration',
      subtitle: 'World-Class Laser Platforms',
      description: 'Pioneered the introduction of medical-grade FDA-cleared equipment in Islamabad, including Alma Soprano Titanium for painless laser hair removal and advanced RF systems.',
      highlight: 'Gold-Standard Equipment',
    },
    {
      year: '2021',
      title: 'Regenerative Aesthetics Expansion',
      subtitle: 'SylfirmX & Oligio Monopolar RF',
      description: 'Introduced next-generation dual-wave radiofrequency microneedling and 6.78MHz monopolar RF lifting, revolutionizing non-surgical tissue contracture and melasma treatment.',
      highlight: 'Advanced Collagen Neo-Genesis',
    },
    {
      year: '2024',
      title: '400+ Documented Success Outcomes',
      subtitle: 'Trusted by Diplomats & High-Profile Residents',
      description: 'Achieved milestone recognition for clinical excellence with over 400+ documented patient transformations and top-tier Google ratings in Pakistan.',
      highlight: '4.9 Star Patient Rating',
    },
    {
      year: '2026',
      title: 'The Premier Aesthetics Standard',
      subtitle: '15+ Years of Uncompromising Care',
      description: 'Continuing the legacy of meticulous, natural-looking aesthetic artistry and medical safety under Dr. Shumaila Khan’s personal supervision.',
      highlight: '15 Years of Excellence',
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRefs.current.filter(Boolean),
        { opacity: 0, y: 40, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="milestones"
      ref={sectionRef}
      className="relative bg-[#FAF8F5] py-20 sm:py-28 lg:py-32 border-b border-[#EFECE6] overflow-hidden snap-section"
    >
      {/* Animated Gradient Aurora Background */}
      <AuroraBackground opacity={0.7} />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 space-y-16 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF5F0] border border-[#FDBA74] text-xs font-bold text-[#E45D25] shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="tracking-[0.16em] uppercase text-xs">CLINIC MILESTONES</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-900 leading-tight">
            15 Years of Clinical Growth &amp; Excellence
          </h2>

          <p className="text-neutral-700 font-normal text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            From founding Cardiff-trained standards in 2011 to becoming Islamabad’s leading medical aesthetic sanctuary.
          </p>
        </div>

        {/* Horizontal Timeline Layout with Connecting Glowing Track */}
        <div className="relative">
          {/* Connecting Track Line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FDBA74]/50 to-transparent -translate-y-1/2 z-0" />

          {/* Milestones Grid / Horizontal Timeline Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
            {milestones.map((item, idx) => (
              <div
                key={item.year}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-[#EFECE6] hover:border-[#FDBA74] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6 group transform hover:-translate-y-1"
              >
                <div className="space-y-4">
                  {/* Year & Badge Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-2xl sm:text-3xl font-serif-luxury font-bold text-[#E45D25]">
                      {item.year}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-[#FFF5F0] border border-[#FDBA74]/60 text-[0.7rem] font-bold text-[#E45D25] uppercase tracking-wider">
                      {item.highlight}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div>
                    <h3 className="font-serif-luxury text-xl sm:text-2xl font-normal text-neutral-900 group-hover:text-[#E45D25] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold uppercase tracking-wider text-[#C5B388] mt-1">
                      {item.subtitle}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-neutral-600 text-sm leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>

                {/* Card Footer Indicator */}
                <div className="pt-4 border-t border-[#F5F2EC] flex items-center justify-between text-xs font-medium text-neutral-500">
                  <span className="flex items-center gap-1.5 text-[#E45D25]">
                    <CheckCircle2 className="w-4 h-4 text-[#E45D25]" />
                    Milestone Verified
                  </span>
                  <span className="text-neutral-400 group-hover:translate-x-1 transition-transform">
                    0{idx + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Banner */}
        <div className="bg-gradient-to-r from-[#181716] via-[#2D2A26] to-[#181716] rounded-3xl p-8 sm:p-12 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl border border-white/10">
          <div className="space-y-2 text-center sm:text-left">
            <span className="text-xs tracking-[0.2em] uppercase font-semibold text-[#FDBA74]">
              EXPERIENCE THE DIFFERENCE
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl font-normal text-white">
              Ready to Begin Your Skin Journey?
            </h3>
            <p className="text-neutral-300 text-sm font-light max-w-xl">
              Schedule a personalized consultation with Dr. Shumaila Khan in Sector F-10/1 Islamabad.
            </p>
          </div>

          <button
            type="button"
            onClick={onBookClick}
            className="btn-ctr-gold px-8 py-4 text-xs tracking-[0.18em] uppercase font-bold text-neutral-900 rounded-xl shadow-lg hover:shadow-xl transition-all cursor-pointer flex items-center gap-3 shrink-0 group"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
