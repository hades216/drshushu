import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, ArrowLeft, Sparkles, ShieldCheck, ChevronRight, ChevronLeft } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BRAND_IMAGES } from '../data/dermalaseContent';

gsap.registerPlugin(ScrollTrigger);

interface MrsFrenchHorizontalScrollProps {
  onBookClick: (treatmentName?: string) => void;
}

interface HorizontalCard {
  id: string;
  num: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  stats: { label: string; val: string }[];
  highlight: string;
}

export const MrsFrenchHorizontalScroll: React.FC<MrsFrenchHorizontalScrollProps> = ({
  onBookClick,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const scrollWrapperRef = useRef<HTMLDivElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const cards: HorizontalCard[] = [
    {
      id: 'h-facial-morphology',
      num: '01',
      category: 'Diagnostic Dermatology',
      title: '3D Facial Morphometry & Barrier Scanning',
      tagline: 'Precision diagnostics before any syringe or laser touches your skin.',
      description:
        'Using multispectral polarized light to map subcutaneous melanin depth, sebum distribution, and baseline collagen reserves for a bespoke timeline.',
      image: BRAND_IMAGES.skinCare,
      stats: [
        { label: 'Diagnostic Depth', val: 'Sub-dermal' },
        { label: 'Session Time', val: '45 Mins' },
      ],
      highlight: 'UK-Trained Diagnostic Protocol',
    },
    {
      id: 'h-hydrafacial-md',
      num: '02',
      category: 'Clinical Radiance',
      title: 'Patented HydraFacial MD Vortex-Infusion',
      tagline: 'Deep pore purification, vacuum extraction & custom peptide cocktail.',
      description:
        'Proprietary vortex tip removes dead stratum corneum while saturating the dermis with hyaluronic acid, polyphenols, and essential antioxidants.',
      image: BRAND_IMAGES.facialContour,
      stats: [
        { label: 'Downtime', val: 'Zero Minutes' },
        { label: 'Glow Longevity', val: '4 - 6 Weeks' },
      ],
      highlight: 'Original Certified Device',
    },
    {
      id: 'h-soprano-titanium',
      num: '03',
      category: 'Laser Excellence',
      title: 'Alma Soprano Titanium ICE Plus',
      tagline: 'Trio-clustered 3D laser wavelengths for painless hair clearance.',
      description:
        'Combining Alex 755nm, Speed 810nm, and YAG 1064nm simultaneously with ICE Plus sapphire contact cooling for complete safety on Asian skin types.',
      image: BRAND_IMAGES.laserTreatment,
      stats: [
        { label: 'Phototypes', val: 'Fitzpatrick I-VI' },
        { label: 'Speed', val: 'Super-Fast SHR' },
      ],
      highlight: 'Gold Standard Laser',
    },
    {
      id: 'h-prp-regeneration',
      num: '04',
      category: 'Regenerative Medicine',
      title: 'Autologous High-Platelet PRP Therapy',
      tagline: 'Pure growth factors extracted via Prizmah clinical centrifugation.',
      description:
        'Concentrated autologous thrombocytes re-injected into follicular zones to halt androgenetic hair fall and trigger dormant stem cell activation.',
      image: BRAND_IMAGES.hairCare,
      stats: [
        { label: 'Concentration', val: '5 - 7x Baseline' },
        { label: 'Needles', val: 'Sterile Micro-Kits' },
      ],
      highlight: 'Zero Allergen Risk',
    },
    {
      id: 'h-oligio-rf',
      num: '05',
      category: 'Non-Surgical Lifting',
      title: 'Oligio 6.78MHz Monopolar Radiofrequency',
      tagline: 'Non-invasive deep SMAS tightening with real-time impedance cooling.',
      description:
        'Engineered specifically for Asian facial contours to tighten the lower third, sharpen the jawline, and lift lax neck tissue without scalpel or anesthesia.',
      image: BRAND_IMAGES.clinicBright,
      stats: [
        { label: 'Lifting Longevity', val: '12 - 18 Months' },
        { label: 'Anesthesia', val: 'None Needed' },
      ],
      highlight: 'FDA & KFDA Cleared',
    },
    {
      id: 'h-micro-cannula',
      num: '06',
      category: 'Facial Restructuring',
      title: 'Micro-Cannula Dermal Restructuring',
      tagline: 'Conservative anatomical enhancement preserving natural expression.',
      description:
        'Blunt micro-cannula delivery of premium hyaluronic acid to restore tear troughs, temples, and jawline definition with near-zero risk of bruising.',
      image: BRAND_IMAGES.cosmeticAesthetics,
      stats: [
        { label: 'Product', val: 'FDA Juvederm / Restylane' },
        { label: 'Technique', val: 'Blunt Micro-Cannula' },
      ],
      highlight: 'Conservative Precision',
    },
  ];

  // Desktop GSAP Pin & Scrub
  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    let pinTween: gsap.core.Tween | null = null;
    let ctx: gsap.Context | null = null;

    const setupDesktopAnimation = () => {
      if (window.innerWidth >= 1024) {
        ctx = gsap.context(() => {
          const scrollDistance = track.scrollWidth - window.innerWidth + 80;

          // Ensure track starts at x: 0
          gsap.set(track, { x: 0 });

          pinTween = gsap.to(track, {
            x: -scrollDistance,
            ease: 'none',
            scrollTrigger: {
              trigger: container,
              start: 'top top',
              end: () => `+=${scrollDistance * 1.05}`,
              pin: true,
              scrub: 0.8,
              invalidateOnRefresh: true,
              onUpdate: (self) => {
                if (progressBarRef.current) {
                  progressBarRef.current.style.width = `${self.progress * 100}%`;
                }
                const idx = Math.min(
                  Math.floor(self.progress * cards.length),
                  cards.length - 1
                );
                setActiveCardIndex(idx);
              },
            },
          });
        }, container);
      } else {
        // Reset transform on mobile/tablet to rely on native horizontal touch swipe
        gsap.set(track, { clearProps: 'all' });
      }
    };

    setupDesktopAnimation();

    const handleResize = () => {
      ctx?.revert();
      setupDesktopAnimation();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      ctx?.revert();
    };
  }, [cards.length]);

  // Handle mobile horizontal scroll progress
  const handleMobileScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const maxScroll = target.scrollWidth - target.clientWidth;
    if (maxScroll > 0) {
      const progress = target.scrollLeft / maxScroll;
      if (progressBarRef.current) {
        progressBarRef.current.style.width = `${progress * 100}%`;
      }
      const idx = Math.min(
        Math.round(progress * (cards.length - 1)),
        cards.length - 1
      );
      setActiveCardIndex(idx);
    }
  };

  const scrollToIndex = (index: number) => {
    const wrapper = scrollWrapperRef.current;
    if (!wrapper) return;
    const cardsElements = wrapper.querySelectorAll('.horizontal-card-item');
    if (cardsElements[index]) {
      cardsElements[index].scrollIntoView({
        behavior: 'smooth',
        inline: 'start',
        block: 'nearest',
      });
      setActiveCardIndex(index);
    }
  };

  return (
    <section
      id="horizontal-showcase"
      ref={containerRef}
      className="relative bg-[#181716] text-white py-14 sm:py-16 lg:py-0 lg:min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background Subtle Depth */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/6 w-[400px] sm:w-[500px] h-[300px] sm:h-[350px] bg-[#E45D25]/12 blur-[100px] sm:blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/6 w-[350px] sm:w-[450px] h-[250px] sm:h-[300px] bg-[#F59E0B]/10 blur-[90px] sm:blur-[100px] rounded-full" />
      </div>

      {/* Header Container */}
      <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-10 w-full pt-4 pb-4 lg:py-8 flex flex-col md:flex-row md:items-end justify-end gap-4 relative z-20">
        {/* Progress Tracker Pill & Arrows */}
        <div className="flex items-center justify-between md:justify-end gap-4">
          {/* Card Indicator Dots (Mobile) */}
          <div className="flex lg:hidden items-center gap-1.5">
            {cards.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeCardIndex === i
                    ? 'w-6 bg-[#E45D25]'
                    : 'w-1.5 bg-white/30 hover:bg-white/50'
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Desktop Progress Bar */}
          <div className="hidden lg:flex flex-col items-end gap-2">
            <span className="text-xs uppercase tracking-widest text-white/60 font-mono">
              SCROLL TO EXPLORE &rarr;
            </span>
            <div className="w-44 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div
                ref={progressBarRef}
                className="h-full bg-gradient-to-r from-[#E45D25] to-[#FDBA74] w-0 transition-all duration-75"
              />
            </div>
          </div>

          {/* Navigation Buttons for Quick Scrolling */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => scrollToIndex(Math.max(0, activeCardIndex - 1))}
              disabled={activeCardIndex === 0}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
              aria-label="Previous card"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollToIndex(Math.min(cards.length - 1, activeCardIndex + 1))}
              disabled={activeCardIndex === cards.length - 1}
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 flex items-center justify-center text-white disabled:opacity-30 disabled:cursor-not-allowed transition-all cursor-pointer"
              aria-label="Next card"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Track Container */}
      <div
        ref={scrollWrapperRef}
        onScroll={handleMobileScroll}
        className="w-full overflow-x-auto lg:overflow-hidden py-4 sm:py-6 lg:py-8 select-none snap-x snap-mandatory lg:snap-none"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <div
          ref={trackRef}
          className="flex gap-4 sm:gap-6 lg:gap-8 w-max items-stretch relative z-20 px-4 sm:px-6 lg:px-10"
          style={{
            paddingLeft: 'max(1rem, calc((100vw - 1360px) / 2 + 2.5rem))',
            paddingRight: 'max(1rem, calc((100vw - 1360px) / 2 + 2.5rem))',
          }}
        >
          {cards.map((c, idx) => (
            <div
              key={c.id}
              className="horizontal-card-item w-[85vw] max-w-[320px] sm:w-[380px] md:w-[420px] lg:w-[460px] flex-shrink-0 bg-white/5 hover:bg-white/10 backdrop-blur-xl border border-white/15 rounded-3xl p-5 sm:p-6 lg:p-7 flex flex-col justify-between space-y-4 sm:space-y-5 transition-all duration-300 group hover:border-[#FDBA74]/50 hover:shadow-[0_15px_40px_rgba(0,0,0,0.4)] snap-start"
            >
              <div className="space-y-3.5 sm:space-y-4">
                {/* Header: Number & Badge */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 sm:pb-3.5">
                  <span className="font-serif-luxury text-2xl sm:text-3xl lg:text-4xl font-light text-[#FDBA74]">
                    {c.num}
                  </span>
                  <span className="text-[0.65rem] sm:text-xs uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-white/90 border border-white/15">
                    {c.category}
                  </span>
                </div>

                {/* Photographic Frame */}
                <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-900 border border-white/10">
                  <img
                    src={c.image}
                    alt={c.title}
                    loading="lazy"
                    onLoad={() => setLoadedImages(prev => ({ ...prev, [c.id]: true }))}
                    className={`w-full h-full object-cover group-hover:scale-105 transition-all duration-700 filter ${
                      loadedImages[c.id] ? 'blur-0 opacity-100' : 'blur-md opacity-0'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-black/75 backdrop-blur-md border border-white/20 text-[0.7rem] sm:text-xs font-semibold text-[#FDBA74] flex items-center gap-1.5">
                    <ShieldCheck className="w-3 h-3 text-[#FDBA74]" />
                    <span>{c.highlight}</span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-1.5 sm:space-y-2">
                  <h3 className="font-serif-luxury text-lg sm:text-2xl font-normal text-white group-hover:text-[#FDBA74] transition-colors leading-snug">
                    {c.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-normal text-[#FDBA74]/95 italic">
                    "{c.tagline}"
                  </p>
                  <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed line-clamp-3 sm:line-clamp-none">
                    {c.description}
                  </p>
                </div>
              </div>

              {/* Stats & CTA */}
              <div className="space-y-3 pt-3 border-t border-white/10">
                <div className="grid grid-cols-2 gap-2 text-left">
                  {c.stats.map((st, i) => (
                    <div key={i} className="p-2 sm:p-2.5 rounded-xl bg-white/5 border border-white/10">
                      <span className="text-[0.65rem] sm:text-xs uppercase font-semibold text-white/60 block">
                        {st.label}
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white block mt-0.5">
                        {st.val}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => onBookClick(c.title)}
                  className="w-full btn-ctr-gold shimmer-sweep py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm uppercase font-bold tracking-wider text-neutral-900 flex items-center justify-center gap-2 cursor-pointer shadow-md hover:scale-102 active:scale-98 transition-all"
                >
                  <span>Book Consultation</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
