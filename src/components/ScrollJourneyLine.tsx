import React, { useState, useEffect } from 'react';
import { Sparkles, ChevronUp, ChevronDown, Compass } from 'lucide-react';

interface JourneyMilestone {
  id: string;
  num: string;
  label: string;
  shortLabel: string;
}

export const ScrollJourneyLine: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('top');
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  const milestones: JourneyMilestone[] = [
    { id: 'top', num: '01', label: 'Arrival & Editorial', shortLabel: 'Hero' },
    { id: 'welcome', num: '02', label: 'Welcome & Consultation', shortLabel: 'Welcome' },
    { id: 'about', num: '03', label: 'Dr. Shumaila Khan', shortLabel: 'Specialist' },
    { id: 'treatments', num: '04', label: 'Signature Treatments', shortLabel: 'Treatments' },
    { id: 'clinic', num: '05', label: 'Clinical Sanctuary', shortLabel: 'Clinic' },
    { id: 'why-choose', num: '06', label: 'Why Choose Us', shortLabel: 'Why Us' },
    { id: 'technology', num: '07', label: 'Technology Suite', shortLabel: 'Tech' },
    { id: 'journey', num: '08', label: 'Patient Journey', shortLabel: 'Journey' },
    { id: 'results', num: '09', label: 'Before & After', shortLabel: 'Results' },
    { id: 'reviews', num: '10', label: 'Verified Reviews', shortLabel: 'Reviews' },
    { id: 'faq', num: '11', label: 'FAQ', shortLabel: 'FAQ' },
    { id: 'contact', num: '12', label: 'Sanctuary & Booking', shortLabel: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const winHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight - winHeight;
      const currentScroll = window.scrollY || document.documentElement.scrollTop;
      const progress = docHeight > 0 ? Math.min(1, Math.max(0, currentScroll / docHeight)) : 0;
      setScrollProgress(progress);

      // Determine active section based on viewport center offset
      const centerScroll = currentScroll + winHeight * 0.38;
      for (let i = milestones.length - 1; i >= 0; i--) {
        const el = document.getElementById(milestones[i].id);
        if (el && el.offsetTop <= centerScroll) {
          setActiveSection(milestones[i].id);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeIndex = milestones.findIndex((m) => m.id === activeSection);
  const currentMilestone = milestones[activeIndex] || milestones[0];

  return (
    <>
      {/* 1. Global Top-of-Screen Micro Glowing Journey Bar (Visible everywhere) */}
      <div className="fixed top-0 left-0 right-0 h-[3.5px] z-[60] bg-black/10 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#E45D25] via-[#FDBA74] to-[#F59E0B] transition-all duration-150 ease-out shadow-[0_0_12px_rgba(228,93,37,0.8)]"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* 2. Prominent Luxury Floating Vertical Journey Spine (Visible on Tablets, Laptops & Desktops) */}
      <aside
        aria-label="Editorial Scroll Journey Spine"
        className="fixed right-3 sm:right-5 md:right-6 top-1/2 -translate-y-1/2 z-[60] flex flex-col items-center select-none"
      >
        {/* Active Stage Floating Badge */}
        <div className="mb-3 transition-all duration-300 transform">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="glass-panel-light px-3 py-1.5 rounded-full border border-neutral-300/80 shadow-[0_8px_25px_-5px_rgba(0,0,0,0.15)] flex items-center gap-1.5 backdrop-blur-xl bg-white/90 hover:bg-white transition-all cursor-pointer group"
            title="Click to toggle full journey milestones"
          >
            <span className="w-2 h-2 rounded-full bg-[#E45D25] animate-pulse" />
            <span className="text-[0.62rem] font-bold tracking-widest text-[#E45D25] uppercase">
              {currentMilestone.num}
            </span>
            <span className="text-[0.62rem] text-neutral-400 font-light">·</span>
            <span className="text-[0.62rem] font-semibold text-neutral-800 uppercase tracking-wider hidden sm:inline max-w-[100px] truncate">
              {currentMilestone.shortLabel}
            </span>
          </button>
        </div>

        {/* Vertical Track Capsule */}
        <div className="bg-white/85 backdrop-blur-xl px-2 py-3.5 rounded-full border border-neutral-300/80 shadow-[0_12px_35px_-8px_rgba(0,0,0,0.15)] flex flex-col items-center relative">
          {/* Background Inactive Track Line */}
          <div className="w-[3px] h-[280px] sm:h-[340px] bg-neutral-200 rounded-full relative overflow-hidden">
            {/* Active Liquid Fill with Specular Gradient */}
            <div
              className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#E45D25] via-[#F59E0B] to-[#E45D25] rounded-full transition-all duration-150 ease-out shadow-[0_0_10px_rgba(228,93,37,0.7)]"
              style={{
                height: `${scrollProgress * 100}%`,
              }}
            />
          </div>

          {/* Interactive Milestone Nodes along the Track */}
          <div className="absolute inset-y-3.5 flex flex-col justify-between items-center pointer-events-auto">
            {milestones.map((m, idx) => {
              const isPassed = idx <= activeIndex;
              const isCurrent = m.id === activeSection;

              return (
                <div
                  key={m.id}
                  className="relative group flex items-center justify-center cursor-pointer p-0.5"
                  onClick={() => scrollToSection(m.id)}
                  onMouseEnter={() => setHoveredNode(m.id)}
                  onMouseLeave={() => setHoveredNode(null)}
                >
                  {/* Node Glyphs (Diamond for key milestones 01, 04, 08, 12, Circle for others) */}
                  {idx % 3 === 0 ? (
                    <div
                      className={`rotate-45 transition-all duration-300 ease-out flex items-center justify-center ${
                        isCurrent
                          ? 'w-3.5 h-3.5 bg-white border-2 border-[#E45D25] shadow-[0_0_12px_rgba(228,93,37,0.8)] scale-125'
                          : isPassed
                          ? 'w-2.5 h-2.5 bg-[#E45D25] group-hover:scale-130'
                          : 'w-2 h-2 bg-neutral-300 group-hover:bg-neutral-500 group-hover:scale-125'
                      }`}
                    >
                      {isCurrent && (
                        <div className="w-1.5 h-1.5 bg-[#E45D25] rounded-xs" />
                      )}
                    </div>
                  ) : (
                    <div
                      className={`rounded-full transition-all duration-300 ease-out flex items-center justify-center ${
                        isCurrent
                          ? 'w-3.5 h-3.5 bg-white border-2 border-[#E45D25] shadow-[0_0_12px_rgba(228,93,37,0.8)] scale-125'
                          : isPassed
                          ? 'w-2.5 h-2.5 bg-[#E45D25] group-hover:scale-130'
                          : 'w-2 h-2 bg-neutral-300 group-hover:bg-neutral-500 group-hover:scale-125'
                      }`}
                    >
                      {isCurrent && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E45D25] animate-ping" />
                      )}
                    </div>
                  )}

                  {/* Frosted Tooltip on Hover or Active */}
                  {(hoveredNode === m.id || isExpanded) && (
                    <div className="absolute right-8 py-1.5 px-3 rounded-xl bg-white/95 backdrop-blur-xl border border-neutral-200 shadow-[0_10px_30px_-5px_rgba(0,0,0,0.18)] flex items-center gap-2 pointer-events-none animate-fadeIn whitespace-nowrap z-[70]">
                      <span className="text-[0.62rem] font-bold text-[#E45D25] uppercase">
                        {m.num}
                      </span>
                      <span className="text-[0.68rem] font-semibold text-neutral-800">
                        {m.label}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Percentage Badge */}
        <div className="mt-2.5 px-2 py-0.5 rounded-md bg-white/90 backdrop-blur-md border border-neutral-200 shadow-xs text-[0.6rem] font-mono tracking-widest text-neutral-700 font-bold">
          {Math.round(scrollProgress * 100)}%
        </div>
      </aside>
    </>
  );
};
