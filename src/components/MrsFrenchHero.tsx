import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import heroBg from '../assets/images/DSC_6377.jpg';

interface MrsFrenchHeroProps {
  onBookClick: () => void;
  onWelcomeClick: () => void;
}

export const MrsFrenchHero: React.FC<MrsFrenchHeroProps> = ({
  onBookClick,
  onWelcomeClick,
}) => {
  const [scrollY, setScrollY] = useState(0);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const heroContainerRef = useRef<HTMLDivElement | null>(null);
  const headingWordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const ctaButtonsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP Text Stagger Animations on Mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // 1. Initial states
      gsap.set(headingWordRefs.current.filter(Boolean), {
        opacity: 0,
        y: 60,
        rotateX: 35,
        transformOrigin: '50% 100%',
      });
      gsap.set(subtitleRef.current, { opacity: 0, y: 25, letterSpacing: '0.4em' });
      gsap.set(ctaButtonsRef.current, { opacity: 0, y: 30, scale: 0.95 });

      // 2. Coordinated cinematic entrance
      tl.to(
        headingWordRefs.current.filter(Boolean),
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1.1,
          stagger: 0.08,
          ease: 'power3.out',
        }
      )
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            letterSpacing: '0.24em',
            duration: 0.95,
            ease: 'power2.out',
          },
          '-=0.6'
        )
        .to(
          ctaButtonsRef.current,
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.85,
            ease: 'back.out(1.4)',
          },
          '-=0.5'
        );
    }, heroContainerRef);

    return () => ctx.revert();
  }, []);

  // Parallax calculations & Quick Decisive Text Disappearance on Scroll
  const bgTranslate = Math.min(scrollY * 0.35, 280);
  const bgScale = 1 + Math.min(scrollY * 0.00035, 0.15);

  // Text disappears smoothly and decisively within 220px of scroll
  // and drifts gently upward (-Y) so it never bleeds into the next section
  const textOpacity = Math.max(0, 1 - Math.pow(scrollY / 220, 1.4));
  const textTranslateY = -Math.min(scrollY * 0.42, 110);
  const textScale = Math.max(0.88, 1 - scrollY * 0.0006);
  const glowOpacity = Math.max(0, 1 - scrollY / 190);

  const headingWords = ['ENHANCING', 'YOUR', 'MOST', 'NATURAL', 'BEAUTY'];

  return (
    <section
      id="top"
      ref={heroContainerRef}
      className="relative min-h-[95vh] sm:min-h-screen w-full flex flex-col justify-center items-center text-white overflow-hidden bg-[#181716] snap-section-always py-0"
      style={{ perspective: '1200px' }}
    >
      {/* 1. Parallax Photographic Background with Cinematic Depth */}
      <div
        className="absolute inset-0 z-0 will-change-transform transition-transform duration-75 ease-out"
        style={{
          transform: `translate3d(0, ${bgTranslate}px, 0) scale(${bgScale})`,
        }}
      >
        <img
          src={heroBg}
          alt="Dermalase Aesthetic Clinic - Dr. Shumaila Khan"
          loading="eager"
          // @ts-ignore
          fetchPriority="high"
          onLoad={() => setIsImageLoaded(true)}
          className={`w-full h-full object-cover object-[center_28%] filter brightness-95 transition-opacity duration-700 ${
            isImageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        {/* Cinematic gradient overlays with specular depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/80" />
        <div className="absolute inset-0 bg-radial-[at_50%_45%] from-transparent via-black/30 to-black/75" />
      </div>

      {/* 2. Floating Ambient Glow Auras (Disappears promptly on scroll) */}
      <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
        {/* Golden amber radial orb */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] sm:w-[800px] h-[350px] sm:h-[480px] rounded-full bg-gradient-to-tr from-[#E45D25]/25 via-[#D4C49D]/20 to-transparent blur-[110px] float-gentle transition-opacity duration-150"
          style={{ opacity: glowOpacity }}
        />
        {/* Subtle upper light flare */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[250px] bg-[#FAF8F5]/10 blur-[90px] pointer-events-none" />
      </div>

      {/* 3. Main Hero Center Typography with Decisive Disappear on Scroll */}
      <div
        className="relative z-20 flex-1 flex flex-col items-center justify-center text-center px-4 sm:px-6 py-12 md:py-20 max-w-4xl mx-auto space-y-6 md:space-y-8 will-change-transform transition-all duration-75 ease-out"
        style={{
          transform: `translate3d(0, ${textTranslateY}px, 0) scale(${textScale})`,
          opacity: textOpacity,
          visibility: textOpacity <= 0.005 ? 'hidden' : 'visible',
          pointerEvents: textOpacity < 0.1 ? 'none' : 'auto',
        }}
      >

        {/* Headline with Word-by-Word 3D Stagger Reveal */}
        <h1 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-normal leading-[1.08] tracking-[0.04em] uppercase drop-shadow-[0_4px_22px_rgba(0,0,0,0.6)] flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
          {headingWords.map((word, idx) => (
            <span
              key={idx}
              ref={(el) => {
                headingWordRefs.current[idx] = el;
              }}
              className="inline-block will-change-transform text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FDBA74] to-[#E45D25] animate-text-gradient"
            >
              {word}
            </span>
          ))}
        </h1>

        {/* Subtitle in Crisp Tracked Sans-Serif with Letter Spacing Transition */}
        <p
          ref={subtitleRef}
          className="text-xs sm:text-sm md:text-base font-sans font-light tracking-[0.24em] text-transparent bg-clip-text bg-gradient-to-r from-white/90 via-[#FDBA74] to-[#E45D25] uppercase max-w-xl mx-auto drop-shadow-sm will-change-transform animate-text-gradient"
        >
          LET ME HELP BRING OUT THE BEST IN YOU
        </p>

        {/* 4. High-CTR Glassmorphic Button with Shimmer Light Sweep */}
        <div
          ref={ctaButtonsRef}
          className="pt-3 md:pt-6 flex flex-col sm:flex-row items-center justify-center gap-4 will-change-transform"
        >
          <button
            type="button"
            onClick={onWelcomeClick}
            className="btn-ctr-gold shimmer-sweep px-9 py-4 sm:px-11 sm:py-4.5 text-xs sm:text-sm tracking-[0.18em] uppercase font-bold text-neutral-900 rounded-xl shadow-[0_10px_30px_rgba(197,179,136,0.4)] hover:shadow-[0_15px_40px_rgba(249,115,22,0.4)] cursor-pointer flex items-center gap-3 group"
          >
            <span>WELCOME TO DERMALASE</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </button>

          <button
            type="button"
            onClick={onBookClick}
            className="px-8 py-4 sm:px-9 sm:py-4 text-xs sm:text-sm tracking-[0.16em] uppercase font-semibold text-white bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 rounded-xl transition-all hover:scale-105 active:scale-95 shadow-md cursor-pointer"
          >
            Book Consultation
          </button>
        </div>
      </div>
    </section>
  );
};
