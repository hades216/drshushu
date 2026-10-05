/**
 * PillNav - Premium, GSAP-powered pill navigation component.
 * Features:
 * - Transparent floating header
 * - No dark capsule background behind the buttons (clean transparent/frosted pill container)
 * - Crazy 3D Flip dropdown animation on "Services" using GSAP rotateX with perspective
 * - ALL 62 treatments from the 4 screenshots included in categorized columns with background watermark
 * - Rotating logo animation with elastic ease
 * - Rising circle background animation on hover for all pills and Book Now CTA
 * - Responsive mobile menu with GSAP transitions
 */

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Menu, X, ChevronDown, Phone, ArrowRight, Sparkles, Star } from 'lucide-react';
import menuFaceBg from '../assets/images/bright_white_skin_radiance_1791065552181.jpg';

export type PillNavItem = {
  label: string;
  href: string;
  isServices?: boolean;
};

export interface PillNavProps {
  /** Logo element or component */
  logo: React.ReactNode;
  /** Navigation items array */
  items: PillNavItem[];
  /** Current active href for highlighting */
  activeHref?: string;
  /** Extra class names */
  className?: string;
  /** GSAP easing function */
  ease?: string;
  /** Background color of individual pills */
  pillColor?: string;
  /** Text color when hovered */
  hoveredPillTextColor?: string;
  /** Default text color for pills */
  pillTextColor?: string;
  /** Background color for the expanding rising circle */
  circleFillColor?: string;
  /** Callback when Book Now button is clicked */
  onBookClick: (treatmentName?: string) => void;
}

export const PillNav: React.FC<PillNavProps> = ({
  logo,
  items,
  activeHref,
  className = '',
  ease = 'power3.out',
  pillColor = '#FFFFFF',
  hoveredPillTextColor = '#FFFFFF',
  pillTextColor = '#181716',
  circleFillColor = '#E45D25',
  onBookClick,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const lastScrollY = useRef(0);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const headerRef = useRef<HTMLElement>(null);
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);

  const bookCircleRef = useRef<HTMLSpanElement | null>(null);
  const bookTlRef = useRef<gsap.core.Timeline | null>(null);

  const logoRef = useRef<HTMLDivElement | null>(null);
  const logoImgRef = useRef<HTMLDivElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const navItemsRef = useRef<HTMLDivElement | null>(null);
  const dropdownCardRef = useRef<HTMLDivElement | null>(null);
  const dropdownColsRef = useRef<HTMLDivElement | null>(null);

  // ALL 62 TREATMENTS VERBATIM FROM THE 4 SCREENSHOTS:
  // 1. Skin Care Treatment (20 items from Screenshot 1)
  const skinCareItems = [
    'HiFU Treatment',
    'Gold Facial Treatment',
    'Acne and Acne Scar Treatment',
    'HydraFacial',
    'Body Contouring Treatment',
    'Aging Skin Treatment',
    'Complexion Brightening Treatment',
    'Carbon Laser Peel',
    'Chemical Skin Peels',
    'Dark Circles Treatment',
    'Fillers Treatment',
    'Mesotherapy Treatment',
    'Dry Skin Treatment',
    'Microdermabrasion',
    'Oily Skin Treatment',
    'Skin Rejuvenation',
    'Skin Whitening',
    'Stubborn Fat Area Reduction',
    'Thread Lifting Treatment',
    'Submission Acne Scars',
  ];

  // 2. Laser Treatment (17 items from Screenshot 2)
  const laserItems = [
    'Microneedling For Acne Scars',
    'PICO Skin Treatment',
    'Birthmarks Removal',
    'Aging Skin and Fine Lines and wrinkles',
    'Fractional CO2 Laser Treatment',
    'Freckles and Blemishes',
    'Large Pores Treatment',
    'Laser Hair Removal Treatment',
    'Laser Photo Rejuvenation Treatment',
    'Laser Skin Tightening Treatment',
    'Laser Tattoo Removal Treatment',
    'Melasma Treatment',
    'Hyperpigmentation',
    'Port Wine Stains and birthmarks',
    'Post Surgical Scars Treatment',
    'Spider Veins Treatment',
    'Stretch Mark Treatment',
  ];

  // 3. Cosmetic Aesthetic Treatments (21 items from Screenshot 3)
  const cosmeticItems = [
    'Best Dermal Fillers in Islamabad',
    'Gummy Smile Correction',
    'Non-Surgical Rhinoplasty Treatment',
    'Jawline Treatment',
    'Breast Lift Treatment',
    'V-Shape Face Treatment',
    'Facial Contouring',
    'Spider Web Face Lift',
    'Thread Lift Treatment in Islamabad',
    'Double Chin Treatment',
    'Weight loss',
    'Nefertiti Neck Lift Treatment',
    'Makeover Cosmetic Surgery',
    'Macrolane Injection',
    'Lipolysis',
    'Lip Reduction',
    'Fat Injection',
    'Dimple Creation',
    'Non-Surgical Facelift Treatments',
    'Cheek Implant',
    'Buttock Lift',
  ];

  // 4. Hair Treatment (4 items from Screenshot 4)
  const hairItems = [
    'Hair Loss Treatment',
    'PRP for Hair loss',
    'Hair Keratin',
    'Hair Removal',
  ];

  // GSAP Rising Circle Animation for Pills
  useEffect(() => {
    const setupPills = () => {
      circleRefs.current.forEach((circle, index) => {
        if (!circle?.parentElement) return;

        const pill = circle.parentElement as HTMLElement;
        const rect = pill.getBoundingClientRect();
        const { width: w, height: h } = rect;

        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        circle.style.width = `${D}px`;
        circle.style.height = `${D}px`;
        circle.style.bottom = `-${delta}px`;

        gsap.set(circle, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = pill.querySelector<HTMLElement>('.pill-label');
        const hoverLabel = pill.querySelector<HTMLElement>('.pill-label-hover');

        if (label) gsap.set(label, { y: 0 });
        if (hoverLabel) gsap.set(hoverLabel, { y: h + 12, opacity: 0 });

        tlRefs.current[index]?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(
          circle,
          {
            scale: 1.25,
            xPercent: -50,
            duration: 0.6,
            ease,
            overwrite: 'auto',
          },
          0
        );

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 0.45, ease, overwrite: 'auto' }, 0);
        }

        if (hoverLabel) {
          gsap.set(hoverLabel, { y: Math.ceil(h + 14), opacity: 0 });
          tl.to(hoverLabel, { y: 0, opacity: 1, duration: 0.45, ease, overwrite: 'auto' }, 0);
        }

        tlRefs.current[index] = tl;
      });

      // Book Now button pill animation
      if (bookCircleRef.current?.parentElement) {
        const btn = bookCircleRef.current.parentElement;
        const rect = btn.getBoundingClientRect();
        const { width: w, height: h } = rect;

        const R = ((w * w) / 4 + h * h) / (2 * h);
        const D = Math.ceil(2 * R) + 2;
        const delta = Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
        const originY = D - delta;

        bookCircleRef.current.style.width = `${D}px`;
        bookCircleRef.current.style.height = `${D}px`;
        bookCircleRef.current.style.bottom = `-${delta}px`;

        gsap.set(bookCircleRef.current, {
          xPercent: -50,
          scale: 0,
          transformOrigin: `50% ${originY}px`,
        });

        const label = btn.querySelector<HTMLElement>('.pill-label');
        const hoverLabel = btn.querySelector<HTMLElement>('.pill-label-hover');

        if (label) gsap.set(label, { y: 0 });
        if (hoverLabel) gsap.set(hoverLabel, { y: h + 12, opacity: 0 });

        bookTlRef.current?.kill();
        const tl = gsap.timeline({ paused: true });

        tl.to(
          bookCircleRef.current,
          {
            scale: 1.25,
            xPercent: -50,
            duration: 0.6,
            ease,
            overwrite: 'auto',
          },
          0
        );

        if (label) {
          tl.to(label, { y: -(h + 8), duration: 0.45, ease, overwrite: 'auto' }, 0);
        }

        if (hoverLabel) {
          gsap.set(hoverLabel, { y: Math.ceil(h + 14), opacity: 0 });
          tl.to(hoverLabel, { y: 0, opacity: 1, duration: 0.45, ease, overwrite: 'auto' }, 0);
        }

        bookTlRef.current = tl;
      }
    };

    setupPills();
    window.addEventListener('resize', setupPills);
    if (document.fonts) {
      document.fonts.ready.then(setupPills).catch(() => {});
    }

    return () => window.removeEventListener('resize', setupPills);
  }, [items, ease]);

  // CRAZY 3D FLIP ANIMATION ON SERVICES DROPDOWN
  useEffect(() => {
    const card = dropdownCardRef.current;
    if (!card) return;

    if (servicesOpen) {
      // 3D Flip open from top
      gsap.killTweensOf(card);
      gsap.set(card, {
        display: 'block',
        transformPerspective: 1400,
        transformOrigin: 'top center',
        rotateX: -85,
        scale: 0.88,
        opacity: 0,
        y: -15,
      });

      gsap.to(card, {
        rotateX: 0,
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'back.out(1.5)',
      });

      // Stagger column flip
      if (dropdownColsRef.current) {
        const cols = dropdownColsRef.current.children;
        gsap.fromTo(
          cols,
          { opacity: 0, y: 15, rotateY: 15 },
          { opacity: 1, y: 0, rotateY: 0, stagger: 0.05, duration: 0.4, ease: 'power2.out', delay: 0.1 }
        );
      }
    } else {
      // 3D Flip close
      gsap.killTweensOf(card);
      gsap.to(card, {
        rotateX: -70,
        scale: 0.9,
        opacity: 0,
        y: -10,
        duration: 0.35,
        ease: 'power3.in',
        onComplete: () => {
          gsap.set(card, { display: 'none' });
        },
      });
    }
  }, [servicesOpen]);

  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.35,
      ease,
      overwrite: 'auto',
    });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.28,
      ease,
      overwrite: 'auto',
    });
  };

  const handleBookEnter = () => {
    bookTlRef.current?.tweenTo(bookTlRef.current.duration(), {
      duration: 0.35,
      ease,
      overwrite: 'auto',
    });
  };

  const handleBookLeave = () => {
    bookTlRef.current?.tweenTo(0, {
      duration: 0.28,
      ease,
      overwrite: 'auto',
    });
  };

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;
    gsap.to(img, {
      rotate: 360,
      duration: 0.85,
      ease: 'elastic.out(1, 0.45)',
      overwrite: 'auto',
      onComplete: () => gsap.set(img, { rotate: 0 }),
    });
  };

  const handleServicesEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 250);
  };

  const handleItemClick = (name: string) => {
    setServicesOpen(false);
    onBookClick(name);
  };

  // Smart Hide/Reveal Header on Scroll (hides on scroll down, reveals on scroll up)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY || document.documentElement.scrollTop;

      if (currentScrollY <= 80) {
        // At top of hero banner: hide header so hero is full and unobstructed
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY.current) {
        // Scrolling UP: reveal header
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        // Scrolling DOWN: hide header
        if (!servicesOpen && !isMobileMenuOpen) {
          setIsVisible(false);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [servicesOpen, isMobileMenuOpen]);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-400 ease-out py-3 px-4 sm:px-6 lg:px-8 ${
        isVisible || servicesOpen || isMobileMenuOpen
          ? 'translate-y-0 opacity-100 pointer-events-auto bg-white/45 backdrop-blur-2xl border-b border-white/60 shadow-[0_8px_32px_0_rgba(0,0,0,0.06)]'
          : '-translate-y-full opacity-0 pointer-events-none'
      }`}
      style={{ perspective: '1400px' }}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4 relative">
        {/* Logo Section with GSAP 360 Elastic Rotate on Hover */}
        <div
          ref={logoRef}
          onMouseEnter={handleLogoEnter}
          className="flex-shrink-0 cursor-pointer"
        >
          <a href="#top" className="flex items-center gap-3 group">
            <div ref={logoImgRef} className="transition-transform duration-300">
              {logo}
            </div>
          </a>
        </div>

        {/* Center PillNav Container — NO BLACK BACKGROUND! Clean, airy pill row */}
        <div
          ref={navItemsRef}
          className="hidden lg:flex items-center rounded-full p-1.5 bg-white/20 backdrop-blur-md border border-white/40 shadow-sm"
        >
          <ul
            role="menubar"
            className="list-none flex items-center m-0 p-0 gap-1.5"
          >
            {items.map((item, i) => {
              const isActive = activeHref === item.href;

              const PillContent = (
                <>
                  {/* Rising Circle Element animated by GSAP */}
                  <span
                    className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
                    style={{
                      background: circleFillColor,
                      willChange: 'transform',
                    }}
                    aria-hidden="true"
                    ref={(el) => {
                      circleRefs.current[i] = el;
                    }}
                  />
                  {/* Pill Label Stack */}
                  <span className="label-stack relative inline-flex items-center gap-1 leading-none z-[2] overflow-hidden py-1 px-1">
                    <span
                      className="pill-label relative z-[2] inline-flex items-center gap-1 font-semibold text-xs tracking-wider uppercase"
                      style={{ willChange: 'transform' }}
                    >
                      <span>{item.label}</span>
                      {item.isServices && (
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesOpen ? 'rotate-180 text-[#E45D25]' : ''}`} />
                      )}
                    </span>
                    <span
                      className="pill-label-hover absolute left-0 top-1 z-[3] inline-flex items-center justify-center gap-1 w-full text-center font-semibold text-xs tracking-wider uppercase text-white"
                      style={{ willChange: 'transform, opacity' }}
                      aria-hidden="true"
                    >
                      <span>{item.label}</span>
                      {item.isServices && (
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesOpen ? 'rotate-180 text-white' : ''}`} />
                      )}
                    </span>
                  </span>
                  {isActive && (
                    <span
                      className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-1.5 h-1.5 rounded-full z-[4] bg-[#E45D25]"
                      aria-hidden="true"
                    />
                  )}
                </>
              );

              return (
                <li
                  key={item.label}
                  role="none"
                  className="relative flex items-center"
                  onMouseEnter={() => {
                    handleEnter(i);
                    if (item.isServices) handleServicesEnter();
                  }}
                  onMouseLeave={() => {
                    handleLeave(i);
                    if (item.isServices) handleServicesLeave();
                  }}
                >
                  <a
                    role="menuitem"
                    href={item.href}
                    className="relative overflow-hidden inline-flex items-center justify-center h-[38px] px-5 rounded-full no-underline cursor-pointer transition-all duration-200 shadow-xs hover:shadow-md border border-neutral-200/50"
                    style={{
                      background: pillColor,
                      color: pillTextColor,
                    }}
                    onClick={(e) => {
                      if (item.isServices) {
                        e.preventDefault();
                        const el = document.getElementById('treatments');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                  >
                    {PillContent}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Right CTA Button: Pill-Shaped with Rising Circle Effect */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Book Now Pill Button with GSAP Rising Circle Animation */}
          <button
            type="button"
            onClick={() => onBookClick()}
            onMouseEnter={handleBookEnter}
            onMouseLeave={handleBookLeave}
            className="relative overflow-hidden inline-flex items-center justify-center h-[44px] px-7 rounded-full no-underline cursor-pointer shadow-md shadow-[#E45D25]/25 hover:shadow-lg hover:shadow-[#E45D25]/40 transition-all active:scale-95"
            style={{
              background: '#E45D25',
              color: '#FFFFFF',
            }}
          >
            <span
              ref={bookCircleRef}
              className="hover-circle absolute left-1/2 bottom-0 rounded-full z-[1] block pointer-events-none"
              style={{
                background: '#C2410C',
                willChange: 'transform',
              }}
              aria-hidden="true"
            />
            <span className="label-stack relative inline-flex items-center gap-1.5 leading-none z-[2] overflow-hidden py-1 px-1">
              <span
                className="pill-label relative z-[2] inline-flex items-center gap-1.5 font-bold text-xs tracking-wider uppercase text-white"
                style={{ willChange: 'transform' }}
              >
                <span>Book Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
              <span
                className="pill-label-hover absolute left-0 top-1 z-[3] inline-flex items-center justify-center gap-1.5 w-full text-center font-bold text-xs tracking-wider uppercase text-white"
                style={{ willChange: 'transform, opacity' }}
                aria-hidden="true"
              >
                <span>Book Now</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </span>
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
          className="lg:hidden flex items-center justify-center w-11 h-11 rounded-full bg-white/80 backdrop-blur-md text-neutral-900 border border-neutral-200 transition-transform active:scale-90"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* PERFECTLY ALIGNED MEGA MENU WITH 3D FLIP ANIMATION & ALL 62 TREATMENTS */}
        <div
          ref={dropdownCardRef}
          onMouseEnter={handleServicesEnter}
          onMouseLeave={handleServicesLeave}
          className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[96vw] max-w-[1300px] bg-white/95 backdrop-blur-3xl rounded-3xl shadow-[0_35px_80px_-15px_rgba(0,0,0,0.25)] border-2 border-[#E45D25] overflow-hidden z-50 hidden"
          style={{
            transformStyle: 'preserve-3d',
            backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.98) 0%, rgba(255, 255, 255, 0.95) 62%, rgba(255, 255, 255, 0.45) 88%), url(${menuFaceBg})`,
            backgroundPosition: 'right center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'auto 100%',
          }}
        >
          {/* Header Strip inside Menu */}
          <div className="bg-[#FAF8F5] border-b border-[#EFECE6] px-8 py-3.5 flex items-center justify-between text-xs">
            <span className="text-neutral-700 font-medium flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#E45D25]" />
              <span className="font-semibold text-neutral-900">Dr. Shumaila Khan's Clinical Treatment Protocols</span>
              <span className="text-neutral-300">·</span>
              <span className="text-neutral-500 font-light">62 Procedures across Skin, Laser, Cosmetic &amp; Hair</span>
            </span>
            <span className="text-[0.65rem] tracking-wider uppercase font-bold text-[#E45D25] bg-[#FFF5F0] px-3 py-1 rounded-full border border-[#FDBA74]">
              AAAM Board Certified Care
            </span>
          </div>

          {/* 4 Categorized Columns with ALL 62 TREATMENTS */}
          <div
            ref={dropdownColsRef}
            className="p-6 sm:p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-h-[70vh] overflow-y-auto"
          >
            {/* 1. Skin Care Treatment (20 items from Screenshot 1) */}
            <div className="space-y-3 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-neutral-100">
              <div className="flex items-center justify-between border-b border-[#E45D25]/30 pb-1.5">
                <span className="text-xs uppercase tracking-wider font-bold text-[#E45D25]">
                  Skin Care Treatment
                </span>
                <span className="text-[0.62rem] font-bold text-neutral-400">20 Items</span>
              </div>
              <ul className="space-y-1.5">
                {skinCareItems.map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => handleItemClick(item)}
                      className="text-[0.78rem] text-neutral-700 hover:text-[#E45D25] hover:translate-x-1 transition-all text-left font-normal cursor-pointer block leading-snug"
                    >
                      • {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* 2. Laser Treatment (17 items from Screenshot 2) */}
            <div className="space-y-3 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-neutral-100">
              <div className="flex items-center justify-between border-b border-[#E45D25]/30 pb-1.5">
                <span className="text-xs uppercase tracking-wider font-bold text-[#E45D25]">
                  Laser Treatment
                </span>
                <span className="text-[0.62rem] font-bold text-neutral-400">17 Items</span>
              </div>
              <ul className="space-y-1.5">
                {laserItems.map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => handleItemClick(item)}
                      className="text-[0.78rem] text-neutral-700 hover:text-[#E45D25] hover:translate-x-1 transition-all text-left font-normal cursor-pointer block leading-snug"
                    >
                      • {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* 3. Cosmetic Aesthetic Treatments (21 items from Screenshot 3) */}
            <div className="space-y-3 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-neutral-100">
              <div className="flex items-center justify-between border-b border-[#E45D25]/30 pb-1.5">
                <span className="text-xs uppercase tracking-wider font-bold text-[#E45D25]">
                  Cosmetic Aesthetic
                </span>
                <span className="text-[0.62rem] font-bold text-neutral-400">21 Items</span>
              </div>
              <ul className="space-y-1.5">
                {cosmeticItems.map((item) => (
                  <li key={item}>
                    <button
                      type="button"
                      onClick={() => handleItemClick(item)}
                      className="text-[0.78rem] text-neutral-700 hover:text-[#E45D25] hover:translate-x-1 transition-all text-left font-normal cursor-pointer block leading-snug"
                    >
                      • {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Hair Treatment (4 items from Screenshot 4) + Doctor Callout */}
            <div className="space-y-5 flex flex-col justify-between">
              <div className="space-y-3 bg-white/70 backdrop-blur-sm p-4 rounded-2xl border border-neutral-100">
                <div className="flex items-center justify-between border-b border-[#E45D25]/30 pb-1.5">
                  <span className="text-xs uppercase tracking-wider font-bold text-[#E45D25]">
                    Hair Treatment
                  </span>
                  <span className="text-[0.62rem] font-bold text-neutral-400">4 Items</span>
                </div>
                <ul className="space-y-2">
                  {hairItems.map((item) => (
                    <li key={item}>
                      <button
                        type="button"
                        onClick={() => handleItemClick(item)}
                        className="text-[0.78rem] text-neutral-800 hover:text-[#E45D25] hover:translate-x-1 transition-all text-left font-medium cursor-pointer block"
                      >
                        • {item}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Callout Card */}
              <div className="p-4 rounded-2xl bg-[#FFF5F0] border border-[#FDBA74] space-y-2">
                <div className="flex items-center gap-1 text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
                  ))}
                </div>
                <h5 className="font-serif-luxury text-sm font-bold text-neutral-900">
                  Not sure which service is right?
                </h5>
                <p className="text-[0.7rem] text-neutral-600 font-light leading-relaxed">
                  Book a private skin analysis with Dr. Shumaila Khan at our Sector F-10 sanctuary.
                </p>
                <button
                  type="button"
                  onClick={() => handleItemClick('General Skin Assessment')}
                  className="w-full py-2 px-3 text-[0.68rem] tracking-wider uppercase font-bold text-white bg-[#E45D25] rounded-lg shadow-xs hover:bg-[#C2410C] transition-colors"
                >
                  Book Assessment
                </button>
              </div>
            </div>
          </div>

          {/* Footer Bar inside Dropdown */}
          <div className="bg-[#FAF8F5] border-t border-[#EFECE6] px-8 py-3 flex items-center justify-between text-xs">
            <span className="text-neutral-500 font-light">
              ✦ Click any treatment to immediately open consultation booking
            </span>
            <button
              type="button"
              onClick={() => handleItemClick('General Consultation')}
              className="text-[#E45D25] font-bold hover:underline flex items-center gap-1.5"
            >
              <span>Explore All Treatment Details</span> &rarr;
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          ref={mobileMenuRef}
          className="lg:hidden absolute top-full left-4 right-4 mt-2 rounded-3xl overflow-hidden shadow-2xl z-[999] bg-white/95 backdrop-blur-2xl text-neutral-900 border border-neutral-200 p-5 space-y-4 max-h-[85vh] overflow-y-auto animate-fadeIn"
        >
          <ul className="list-none m-0 p-0 flex flex-col gap-1.5">
            {items.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="block py-2.5 px-4 text-xs font-bold uppercase tracking-wider rounded-xl bg-neutral-50 hover:bg-[#FFF5F0] hover:text-[#E45D25] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="pt-2 space-y-2 border-t border-neutral-200">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onBookClick();
              }}
              className="btn-ctr-orange shimmer-sweep w-full py-3.5 text-center text-xs tracking-wider uppercase font-bold text-white rounded-xl shadow-md"
            >
              Book Consultation Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
