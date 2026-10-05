import React, { useState, useEffect, useRef } from 'react';
import { Check, MessageSquare, MapPin } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import receptionImg from '../assets/images/dermalase_hero_reception_1791133688014.jpg';
import loungeImg from '../assets/images/clinic_minimalist_interior_1791064469162.jpg';
import { CONTACT_INFO } from '../data/dermalaseContent';
import { SplitCharHeading } from './SplitCharHeading';
import { RolodexText } from './RolodexText';

gsap.registerPlugin(ScrollTrigger);

interface MrsFrenchAboutClinicProps {
  onBookClick: () => void;
}

export const MrsFrenchAboutClinic: React.FC<MrsFrenchAboutClinicProps> = ({ onBookClick }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const leftImageRef = useRef<HTMLDivElement | null>(null);
  const rightTextRef = useRef<HTMLDivElement | null>(null);
  const bottomNarrativeRef = useRef<HTMLDivElement | null>(null);
  const bottomImageRef = useRef<HTMLDivElement | null>(null);

  const [isImg1Loaded, setIsImg1Loaded] = useState(false);
  const [isImg2Loaded, setIsImg2Loaded] = useState(false);

  const highlights = [
    {
      title: 'Expert, Board-Certified Care',
      desc: 'UK-trained dermatology backed by AAAM board certification.',
    },
    {
      title: 'Advanced, FDA-Approved Technology',
      desc: 'HIFU, Soprano Ice, PICO Laser and more — the latest in aesthetic medicine.',
    },
    {
      title: 'Personalised Treatment Plans',
      desc: 'Every plan is tailored to your skin type, concerns and desired outcome.',
    },
  ];

  const badges = [
    'Female Dermatologist',
    'UK-Qualified Dermatologist',
    'FDA-Approved Technology',
    'Latest FDA-Approved Technology',
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      if (window.innerWidth >= 768) {
        // Parallel opposite scroll for top block
        gsap.fromTo(
          leftImageRef.current,
          { y: 35 },
          {
            y: -35,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'center center',
              scrub: 1.2,
            },
          }
        );

        gsap.fromTo(
          rightTextRef.current,
          { y: -30 },
          {
            y: 30,
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'center center',
              scrub: 1.2,
            },
          }
        );

        // Parallel opposite scroll for lower narrative block
        gsap.fromTo(
          bottomNarrativeRef.current,
          { y: -25 },
          {
            y: 25,
            ease: 'none',
            scrollTrigger: {
              trigger: bottomNarrativeRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );

        gsap.fromTo(
          bottomImageRef.current,
          { y: 30 },
          {
            y: -30,
            ease: 'none',
            scrollTrigger: {
              trigger: bottomImageRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1.2,
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="clinic"
      ref={sectionRef}
      className="relative bg-white py-16 sm:py-20 lg:py-28 border-b border-[#EFECE6] overflow-hidden snap-section"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 space-y-16">
        {/* Top Section directly replicating Screenshot 6 with Parallel Opposite Parallax */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left: Real Clinic Reception Image from Screenshot 6 — Scrolls Upwards */}
          <div ref={leftImageRef} className="lg:col-span-6 will-change-transform">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_15px_45px_-15px_rgba(0,0,0,0.1)] border border-[#EFECE6] group">
              <img
                src={receptionImg}
                alt="Dermalase Reception with Illuminated Butterfly Logo & Living Greenery Wall"
                loading="lazy"
                onLoad={() => setIsImg1Loaded(true)}
                className={`w-full h-full object-cover group-hover:scale-103 transition-all duration-700 filter ${
                  isImg1Loaded ? 'blur-0 opacity-100' : 'blur-md opacity-0'
                }`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-white/95 backdrop-blur-md border border-white/60 text-sm text-neutral-900 flex items-center justify-between shadow-sm">
                <span className="font-semibold text-neutral-900">Dermalase Aesthetic Clinic</span>
                <span className="text-neutral-600 font-medium flex items-center gap-1">
                  <MapPin className="w-4 h-4 text-[#E45D25]" />
                  <span>Sector F-10/1, Islamabad</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right: Verbatim Text & Checkmarks from Screenshot 6 */}
          <div ref={rightTextRef} className="lg:col-span-6 space-y-6 will-change-transform">
            <div className="space-y-2">
              <span className="text-sm tracking-[0.18em] uppercase font-bold text-[#E45D25] block">
                ABOUT DERMALASE
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl lg:text-5xl font-normal leading-tight text-neutral-900 flex flex-wrap items-center gap-x-2.5">
                <span>Islamabad's Premier</span>
                <RolodexText
                  words={[
                    'Aesthetic & Skin Clinic',
                    'Laser Sanctuary',
                    'Dermatology Authority',
                    'Facial Contouring Suite',
                  ]}
                  className="text-[#E45D25]"
                  wordClassName="text-gradient-luxury font-normal italic font-serif-luxury"
                />
              </h2>
            </div>

            {/* Verbatim Paragraph from Screenshot 6 — Enhanced Readability */}
            <p className="text-neutral-700 font-normal text-base sm:text-lg leading-relaxed">
              Led by Dr. Shumaila Khan, a highly qualified aesthetic dermatologist and skin doctor, Dermalase combines medical expertise with the latest technology to deliver safe, effective, and natural-looking results. Every treatment plan is customised to your skin, goals, and comfort — never one-size-fits-all.
            </p>

            {/* 3 Checkmark Highlights from Screenshot 6 */}
            <div className="space-y-4 pt-1">
              {highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-3.5">
                  <div className="w-7 h-7 rounded-full bg-[#FFF5F0] border border-[#FDBA74] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#E45D25]" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-base font-bold text-neutral-900">{h.title}</h4>
                    <p className="text-sm text-neutral-600 font-normal leading-relaxed">{h.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons from Screenshot 6 */}
            <div className="pt-3 flex flex-wrap items-center gap-5">
              <button
                type="button"
                onClick={onBookClick}
                className="px-8 py-3.5 text-xs sm:text-sm tracking-wider uppercase font-bold text-white bg-[#E45D25] hover:bg-[#D44E17] active:bg-[#C2410C] rounded-lg shadow-sm hover:shadow transition-all cursor-pointer"
              >
                Learn More About Dr. Shumaila
              </button>

              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}?text=Hello%20Dr%20Shumaila%2C%20I%20would%20like%20to%20learn%20more%20about%20Dermalase.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#E45D25] hover:text-[#C2410C] transition-colors"
              >
                <MessageSquare className="w-4.5 h-4.5 text-[#E45D25]" />
                <span>Chat On WhatsApp &rarr;</span>
              </a>
            </div>
          </div>
        </div>

        {/* Narrative, Lounge Photo & 4 Pills directly replicating Screenshot 8 */}
        <div className="p-8 sm:p-10 lg:p-12 rounded-3xl bg-[#FBF9F5] border border-[#EFECE6] space-y-8">
          <div className="space-y-3">
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-neutral-900 font-normal leading-snug">
              Explore our featured skincare services at Dermalase, including advanced dermatology for all skin types and state-of-the-art laser treatments for effective skin rejuvenation and enhancement.
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Paragraph 1 & 2 + View All Treatment button */}
            <div ref={bottomNarrativeRef} className="lg:col-span-6 space-y-5 text-neutral-800 font-normal text-sm sm:text-base md:text-[1.05rem] leading-relaxed will-change-transform">
              <p className="text-neutral-800 font-normal leading-relaxed">
                Dermalase is a leading aesthetic and skin care clinic in Islamabad, offering advanced dermatology and aesthetic medicine under the care of Dr. Shumaila Khan, a trusted female dermatologist in Islamabad. Patients looking for a reliable skin specialist near me, a skin doctor in Islamabad, or a modern laser clinic in Islamabad choose Dermalase for its medical expertise and consistent results.
              </p>
              <p className="text-neutral-800 font-normal leading-relaxed">
                The clinic specializes in aesthetic medicine treatments, including dermal fillers, Botox in Islamabad, jawline contouring, V-shape face enhancement, and non-surgical facelift procedures. These treatments are designed to restore facial balance and maintain natural-looking results. Dermalase also offers advanced regenerative solutions, including PRP therapy and exosome treatments, that support collagen production and long-term skin rejuvenation.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onBookClick}
                  className="px-8 py-3.5 text-xs sm:text-sm tracking-wider uppercase font-bold text-white bg-[#E45D25] hover:bg-[#D44E17] rounded-lg shadow-sm transition-all cursor-pointer"
                >
                  View All Treatment &rarr;
                </button>
              </div>
            </div>

            {/* Right Column: Paragraph 3 & Lounge Image from Screenshot 8 */}
            <div ref={bottomImageRef} className="lg:col-span-6 space-y-5 will-change-transform">
              <p className="text-neutral-800 font-normal text-sm sm:text-base md:text-[1.05rem] leading-relaxed">
                In addition, patients benefit from laser hair removal in Islamabad, full-body and facial laser treatments, chemical peels, skin peeling procedures, and HydraFacial. Targeted care is available for acne scars, pigmentation, melasma, psoriasis, and anti-aging concerns. As a trusted aesthetic clinic in Islamabad, Dermalase combines medical precision with advanced technology to deliver personalized skin, hair, and aesthetic care for all skin types.
              </p>

              <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100 border border-[#EFECE6] shadow-sm">
                <img
                  src={loungeImg}
                  alt="Dermalase Waiting Lounge with Modern Colorful Chairs"
                  loading="lazy"
                  onLoad={() => setIsImg2Loaded(true)}
                  className={`w-full h-full object-cover transition-all duration-700 filter ${
                    isImg2Loaded ? 'blur-0 opacity-100' : 'blur-md opacity-0'
                  }`}
                />
              </div>
            </div>
          </div>

          {/* 4 Badges directly from Screenshot 8 */}
          <div className="pt-6 border-t border-[#EAE6DF] flex flex-wrap gap-3">
            {badges.map((b) => (
              <span
                key={b}
                className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-neutral-800 bg-white border border-[#DDD5C5] shadow-xs"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
