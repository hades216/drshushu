import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollDrawnJourneyLineProps {
  className?: string;
  variant?: 'horizontal' | 'vertical' | 'curved';
  startPercentage?: string;
  endPercentage?: string;
}

/**
 * ScrollDrawnJourneyLine
 * SVG connector line that draws itself forward based on the user's scroll percentage.
 * Uses strokeDasharray/strokeDashoffset tied to GSAP ScrollTrigger without overlapping content.
 */
export const ScrollDrawnJourneyLine: React.FC<ScrollDrawnJourneyLineProps> = ({
  className = '',
  variant = 'horizontal',
  startPercentage = 'top 75%',
  endPercentage = 'bottom 45%',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const pathRef = useRef<SVGPathElement | null>(null);
  const glowHeadRef = useRef<SVGCircleElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const path = pathRef.current;
    if (!container || !path) return;

    const ctx = gsap.context(() => {
      const length = path.getTotalLength();

      // Configure SVG stroke dash properties
      gsap.set(path, {
        strokeDasharray: length,
        strokeDashoffset: length,
      });

      // Animate stroke drawing forward on scroll
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: startPercentage,
          end: endPercentage,
          scrub: 1.2,
          onUpdate: (self) => {
            if (glowHeadRef.current && path) {
              const currentLength = length * (1 - self.progress);
              const point = path.getPointAtLength(length - currentLength);
              glowHeadRef.current.setAttribute('cx', String(point.x));
              glowHeadRef.current.setAttribute('cy', String(point.y));
              glowHeadRef.current.style.opacity = self.progress > 0.02 && self.progress < 0.98 ? '1' : '0';
            }
          },
        },
      });
    }, container);

    return () => ctx.revert();
  }, [variant, startPercentage, endPercentage]);

  if (variant === 'horizontal') {
    return (
      <div
        ref={containerRef}
        className={`w-full h-8 relative pointer-events-none select-none my-2 overflow-visible ${className}`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1000 32"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full overflow-visible"
        >
          <defs>
            <linearGradient id="journeyGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E45D25" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#F59E0B" stopOpacity="1" />
              <stop offset="100%" stopColor="#E45D25" stopOpacity="0.8" />
            </linearGradient>
            <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Inactive Background Track */}
          <path
            d="M 20 16 L 980 16"
            stroke="#E8E2D8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="4 6"
          />

          {/* Active Scroll-Drawn Journey Line */}
          <path
            ref={pathRef}
            d="M 20 16 L 980 16"
            stroke="url(#journeyGlow)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#glowFilter)"
          />

          {/* Pulsing Drawing Head */}
          <circle
            ref={glowHeadRef}
            cx="20"
            cy="16"
            r="4.5"
            fill="#E45D25"
            className="transition-opacity duration-150"
            filter="url(#glowFilter)"
          />
        </svg>
      </div>
    );
  }

  if (variant === 'curved') {
    return (
      <div
        ref={containerRef}
        className={`w-full h-20 relative pointer-events-none select-none my-4 overflow-visible ${className}`}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 1000 80"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-full overflow-visible"
        >
          <defs>
            <linearGradient id="curvedJourneyGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E45D25" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#F59E0B" stopOpacity="1" />
              <stop offset="100%" stopColor="#E45D25" stopOpacity="0.8" />
            </linearGradient>
            <filter id="curvedGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Inactive Curved Track */}
          <path
            d="M 30 20 C 280 80, 720 0, 970 60"
            stroke="#EFEBE4"
            strokeWidth="2"
            strokeDasharray="5 7"
            strokeLinecap="round"
          />

          {/* Scroll-Drawn Animated Line */}
          <path
            ref={pathRef}
            d="M 30 20 C 280 80, 720 0, 970 60"
            stroke="url(#curvedJourneyGlow)"
            strokeWidth="3"
            strokeLinecap="round"
            filter="url(#curvedGlow)"
          />

          {/* Floating Glow Head */}
          <circle
            ref={glowHeadRef}
            cx="30"
            cy="20"
            r="5"
            fill="#E45D25"
            filter="url(#curvedGlow)"
          />
        </svg>
      </div>
    );
  }

  // Vertical Variant
  return (
    <div
      ref={containerRef}
      className={`w-8 h-40 relative pointer-events-none select-none mx-auto overflow-visible ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 32 160"
        fill="none"
        preserveAspectRatio="none"
        className="w-full h-full overflow-visible"
      >
        <defs>
          <linearGradient id="vertJourneyGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E45D25" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#F59E0B" stopOpacity="1" />
            <stop offset="100%" stopColor="#E45D25" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        <path
          d="M 16 10 L 16 150"
          stroke="#EAE5DC"
          strokeWidth="2"
          strokeDasharray="4 6"
          strokeLinecap="round"
        />

        <path
          ref={pathRef}
          d="M 16 10 L 16 150"
          stroke="url(#vertJourneyGlow)"
          strokeWidth="3"
          strokeLinecap="round"
        />

        <circle
          ref={glowHeadRef}
          cx="16"
          cy="10"
          r="4"
          fill="#E45D25"
        />
      </svg>
    </div>
  );
};
