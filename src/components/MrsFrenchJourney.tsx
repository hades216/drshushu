import React, { useState, useEffect, useRef } from 'react';
import { Star, ShieldCheck, Award, MessageSquare, ArrowRight, Sparkles } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import drPortrait from '../assets/images/DSC_6377.jpg';
import { CONTACT_INFO } from '../data/dermalaseContent';
import { ScrollDrawnJourneyLine } from './ScrollDrawnJourneyLine';
import { AuroraBackground } from './AuroraBackground';

gsap.registerPlugin(ScrollTrigger);

interface MrsFrenchJourneyProps {
  onBookClick: () => void;
}

export const MrsFrenchJourney: React.FC<MrsFrenchJourneyProps> = ({ onBookClick }) => {
  const [showFullBio, setShowFullBio] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const stepCardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // 3 Steps directly from Screenshot 10
  const steps = [
    {
      num: '01',
      title: 'CYNOSURE',
      desc: 'Call, WhatsApp or fill the form to schedule your consultation visit.',
      badge: 'Step 1 · Booking',
    },
    {
      num: '02',
      title: 'Assess',
      desc: 'Dr. Shumaila examines your skin barrier and discusses your goals.',
      badge: 'Step 2 · Diagnosis',
    },
    {
      num: '03',
      title: 'Treat',
      desc: 'Begin a personalised, results-driven precision treatment plan.',
      badge: 'Step 3 · Transformation',
    },
  ];

  // 4 Badges directly from Screenshot 10
  const badges = [
    'UK-Qualified',
    'AAAM Board Certified',
    'Female Dermatologist',
    'FDA-Approved Tech',
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Staggered Step Cards Reveal
      gsap.fromTo(
        stepCardRefs.current.filter(Boolean),
        { opacity: 0, y: 35, scale: 0.96 },
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
      id="journey"
      ref={sectionRef}
      className="relative bg-[#FAF8F5] py-16 sm:py-20 lg:py-28 border-b border-[#EFECE6] overflow-hidden snap-section"
    >
      {/* Animated Gradient Aurora Background */}
      <AuroraBackground opacity={0.7} />

      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 space-y-14 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF5F0] border border-[#FDBA74] text-xs font-bold text-[#E45D25] shadow-xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span className="tracking-[0.16em] uppercase text-xs">GETTING STARTED</span>
          </div>

          <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal text-neutral-900 leading-tight">
            Not Sure Which Treatment Is Right For You?
          </h2>

          <p className="text-neutral-700 font-normal text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Book a free skin assessment. Our dermatologist will examine your concern and recommend a plan — no obligation.
          </p>
        </div>

        {/* Non-overlapping Animated Scroll-Drawn SVG Journey Connector Line */}
        <div className="max-w-4xl mx-auto px-4">
          <ScrollDrawnJourneyLine variant="horizontal" startPercentage="top 80%" endPercentage="bottom 50%" />
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
          {steps.map((s, idx) => (
            <div
              key={s.num}
              ref={(el) => {
                stepCardRefs.current[idx] = el;
              }}
              className="bg-white/95 backdrop-blur-md rounded-3xl p-8 sm:p-10 border border-[#EFECE6] shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] space-y-4 text-left card-interactive card-specular group hover:border-[#E45D25]/40 transition-all"
            >
              <div className="flex items-center justify-between">
                <span className="font-serif-luxury text-4xl sm:text-5xl font-light text-[#E45D25] group-hover:scale-108 transition-transform inline-block">
                  {s.num}
                </span>
                <span className="text-xs font-semibold uppercase tracking-wider text-neutral-600 bg-[#FAF8F5] px-3 py-1 rounded-md border border-[#EFECE6]">
                  {s.badge}
                </span>
              </div>

              <h3 className="font-serif-luxury text-2xl sm:text-3xl font-bold text-neutral-900 group-hover:text-[#E45D25] transition-colors">
                {s.title}
              </h3>
              <p className="text-neutral-700 font-normal text-sm sm:text-base leading-relaxed">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* MEET YOUR DOCTOR Profile Card directly replicating Screenshot 10 */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 lg:p-12 border border-[#EFECE6] shadow-[0_10px_35px_-10px_rgba(0,0,0,0.06)] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left: Doctor Photo with 3 Overlay Badges: 15+ YEARS, 4.6★ RATING, 400+ PATIENTS */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px]">
              <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden bg-neutral-100 border border-[#EFECE6] shadow-md group">
                <img
                  src={drPortrait}
                  alt="Dr. Shumaila Khan"
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* 3 Stats Overlay Badge from Screenshot 10 */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-black/50 backdrop-blur-md border border-white/20 text-white flex items-center justify-around text-center">
                  <div>
                    <span className="font-serif-luxury text-xl font-bold text-white block">15+</span>
                    <span className="text-xs tracking-wider uppercase text-white/80 block">YEARS</span>
                  </div>
                  <div className="w-px h-6 bg-white/20" />
                  <div>
                    <span className="font-serif-luxury text-xl font-bold text-white flex items-center justify-center gap-0.5">
                      <span>4.6</span>
                      <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                    </span>
                    <span className="text-xs tracking-wider uppercase text-white/80 block">RATING</span>
                  </div>
                  <div className="w-px h-6 bg-white/20" />
                  <div>
                    <span className="font-serif-luxury text-xl font-bold text-white block">400+</span>
                    <span className="text-xs tracking-wider uppercase text-white/80 block">PATIENTS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Verbatim Copy from Screenshot 10 */}
          <div className="lg:col-span-7 space-y-5">
            <div className="space-y-1">
              <span className="text-xs sm:text-sm uppercase tracking-[0.16em] font-bold text-neutral-500 block">
                MEET YOUR DOCTOR
              </span>
              <h3 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-bold text-[#E45D25]">
                Dr. Shumaila Khan
              </h3>
              <p className="text-sm font-semibold text-neutral-700">
                Dip. Derm (Cardiff, Wales, UK) · AAAM Board Certified · Founder, Dermalase
              </p>
            </div>

            {/* 4 Badges from Screenshot 10 */}
            <div className="flex flex-wrap gap-2 pt-1">
              {badges.map((b) => (
                <span
                  key={b}
                  className="px-4 py-2 rounded-full text-xs sm:text-sm font-semibold text-white bg-[#E45D25]"
                >
                  {b}
                </span>
              ))}
            </div>

            {/* Verbatim Bio from Screenshot 10 */}
            <p className="text-neutral-800 font-normal text-sm sm:text-base md:text-[1.05rem] leading-relaxed">
              Dr. Shumaila Khan is a UK-qualified aesthetic dermatologist and one of Islamabad’s most trusted skin specialists. With advanced training from Cardiff, Wales and board certification from the American Academy of Aesthetic Medicine, she leads Dermalase with a diligent, hygiene-first approach to every treatment — known for her innovative, results-driven care across skin, hair and cosmetic aesthetics.
            </p>

            {/* Buttons from Screenshot 10 */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onBookClick}
                className="btn-ctr-orange shimmer-sweep px-8 py-3.5 text-xs sm:text-sm tracking-wider uppercase font-bold text-white rounded-xl shadow-md cursor-pointer"
              >
                Book With Dr. Shumaila
              </button>

              <button
                type="button"
                onClick={() => setShowFullBio(!showFullBio)}
                className="px-8 py-3.5 text-xs sm:text-sm tracking-wider uppercase font-bold text-neutral-800 hover:text-black border border-neutral-300 hover:border-black rounded-xl transition-colors cursor-pointer"
              >
                {showFullBio ? 'Close Bio' : 'Read Full Bio'}
              </button>
            </div>

            {showFullBio && (
              <div className="p-6 rounded-2xl bg-[#FBF9F5] border border-[#EFECE6] text-sm text-neutral-700 space-y-3 animate-fadeIn mt-4 leading-relaxed">
                <p>
                  Having trained at Cardiff University's Department of Dermatology in the UK and certified by the American Academy of Aesthetic Medicine, Dr. Shumaila brings over 15 years of specialized expertise in advanced dermal fillers, facial restructuring, and gold-standard laser therapies.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
