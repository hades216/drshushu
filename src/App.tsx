import React, { useState, useEffect, useRef } from 'react';
import { PillNav, PillNavItem } from './components/PillNav';
import { DermalaseLogo } from './components/DermalaseLogo';
import { MrsFrenchHero } from './components/MrsFrenchHero';
import { MrsFrenchWelcome } from './components/MrsFrenchWelcome';
import { MrsFrenchDoctorBio } from './components/MrsFrenchDoctorBio';
import { MrsFrenchTreatments } from './components/MrsFrenchTreatments';
import { MrsFrenchAboutClinic } from './components/MrsFrenchAboutClinic';
import { MrsFrenchBentoWhyChoose } from './components/MrsFrenchBentoWhyChoose';
import { MrsFrenchMilestones } from './components/MrsFrenchMilestones';
import { MrsFrenchTechnology } from './components/MrsFrenchTechnology';
import { MrsFrenchHorizontalScroll } from './components/MrsFrenchHorizontalScroll';
import { MrsFrenchJourney } from './components/MrsFrenchJourney';
import { MrsFrenchBeforeAfter } from './components/MrsFrenchBeforeAfter';
import { MrsFrenchReviews } from './components/MrsFrenchReviews';
import { MrsFrenchFAQ } from './components/MrsFrenchFAQ';
import { MrsFrenchContact } from './components/MrsFrenchContact';
import { MrsFrenchFooter } from './components/MrsFrenchFooter';
import { FloatingActions } from './components/FloatingActions';
import { QuickBookModal } from './components/QuickBookModal';
import { useCinematicImageReveal } from './hooks/useCinematicImageReveal';
import { useSplitCharReveal } from './hooks/useSplitCharReveal';
import { useGlobalPerspectiveTilt } from './hooks/useGlobalPerspectiveTilt';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [bookModalOpen, setBookModalOpen] = useState(false);
  const [selectedTreatment, setSelectedTreatment] = useState<string | undefined>(undefined);
  const mainContainerRef = useRef<HTMLDivElement | null>(null);

  const handleOpenBook = (treatmentName?: string) => {
    setSelectedTreatment(treatmentName);
    setBookModalOpen(true);
  };

  const handleWelcomeClick = () => {
    const el = document.getElementById('welcome');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Cinematic Image Zoom-In to Scale-Down on Scroll
  useCinematicImageReveal();

  // Automatic Character-by-Character Splitter Reveal
  useSplitCharReveal();

  // Mouse-Following Perspective Tilt Effect for Section Containers & Cards
  useGlobalPerspectiveTilt();

  // GSAP Fade-In-Up Animation for Sections
  useEffect(() => {
    const mainEl = mainContainerRef.current;
    if (!mainEl) return;

    const ctx = gsap.context(() => {
      const sections = mainEl.querySelectorAll('section:not(#top), .gsap-section-fade');

      sections.forEach((sec) => {
        gsap.fromTo(
          sec,
          {
            opacity: 0.95,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sec,
              start: 'top 88%',
              toggleActions: 'play none none none',
            },
          }
        );
      });
    }, mainEl);

    return () => ctx.revert();
  }, []);

  // Clean PillNav items with unified "Services" menu
  const navItems: PillNavItem[] = [
    { label: 'Home', href: '#top' },
    { label: 'Services', href: '#treatments', isServices: true },
    { label: 'Milestones', href: '#milestones' },
    { label: 'Showcase', href: '#horizontal-showcase' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <div
      ref={mainContainerRef}
      className="relative min-h-screen bg-white text-neutral-900 font-sans selection:bg-[#FDBA74] selection:text-neutral-900 overflow-x-hidden"
    >
      {/* Premium GSAP-Powered PillNav with Rising Background Animation & Rotating Logo */}
      <PillNav
        logo={<DermalaseLogo />}
        items={navItems}
        activeHref="#top"
        pillColor="#FFFFFF"
        pillTextColor="#181716"
        circleFillColor="#E45D25"
        hoveredPillTextColor="#FFFFFF"
        onBookClick={handleOpenBook}
      />

      {/* 1. Hero Section: Full-bleed background, editorial serif headline, centered typography */}
      <MrsFrenchHero
        onBookClick={() => handleOpenBook()}
        onWelcomeClick={handleWelcomeClick}
      />

      {/* 2. Welcome Section: Dr. Shumaila Khan consultation form & AAAM portrait */}
      <MrsFrenchWelcome onBookSuccess={() => {}} />

      {/* 3. Stats & Doctor Bio: 4 Stats Cards, Doctor in green scrubs, UK credentials */}
      <MrsFrenchDoctorBio onBookClick={() => handleOpenBook('Aesthetic Consultation')} />

      {/* 4. Treatments Grid: OUR TREATMENTS (6 cards fully rendered with modal details) */}
      <MrsFrenchTreatments onBookClick={() => handleOpenBook()} />

      {/* 5. Horizontal Editorial Showcase: Pinned horizontal scroll for signature protocols */}
      <MrsFrenchHorizontalScroll onBookClick={handleOpenBook} />

      {/* 6. About Dermalase Clinic: Reception photo with moss wall, 3 checkmarks, narrative, lounge photo, and 4 badges */}
      <MrsFrenchAboutClinic onBookClick={() => handleOpenBook()} />

      {/* 7. Why Choose Us Bento Grid: Bento layout, 16+ years since 2011, seamless client experience, free skin analysis */}
      <MrsFrenchBentoWhyChoose onBookClick={() => handleOpenBook('Free Skin Analysis')} />

      {/* Clinic Milestones: Horizontal Timeline growth since 2011 */}
      <MrsFrenchMilestones onBookClick={() => handleOpenBook()} />

      {/* 8. Technology Suite: Prizmah 642VFD, HydraFacial MD, Alma Soprano Titanium, SylfirmX, Oligio */}
      <MrsFrenchTechnology onBookClick={() => handleOpenBook()} />

      {/* 9. Getting Started 3-Step Journey & Meet Your Doctor: 01 CYNOSURE, 02 Assess, 03 Treat + Doctor card */}
      <MrsFrenchJourney onBookClick={() => handleOpenBook('Assessment')} />

      {/* 10. Real Results Before & After: 6 real cases, interactive slider, accreditation line */}
      <MrsFrenchBeforeAfter onBookClick={() => handleOpenBook('Facial Harmonization')} />

      {/* 11. Patient Stories & Reviews: Google 625 reviews scorecard + Photo Assessment banner with WhatsApp button */}
      <MrsFrenchReviews onBookClick={() => handleOpenBook()} />

      {/* 12. Frequently Asked Questions: 10 exact questions, clinic treatment room photo */}
      <MrsFrenchFAQ onContactClick={handleContactClick} />

      {/* 13. Location & Reservations: Sector F-10/1 Islamabad sanctuary details, clinic hours, booking form */}
      <MrsFrenchContact onBookSuccess={() => {}} />

      {/* 14. Clean Luxury Footer */}
      <MrsFrenchFooter />

      {/* Floating Action Buttons: Phone icon on bottom-left, WhatsApp icon on bottom-right */}
      <FloatingActions />

      {/* Instant Reservation Modal with Web Speech Dictation */}
      <QuickBookModal
        isOpen={bookModalOpen}
        onClose={() => setBookModalOpen(false)}
        preselectedTreatment={selectedTreatment}
      />
    </div>
  );
}

export default App;
