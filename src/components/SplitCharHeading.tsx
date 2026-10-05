import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface SplitCharHeadingProps {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'div';
  className?: string;
  stagger?: number;
  duration?: number;
  delay?: number;
  triggerOffset?: string;
  highlightWords?: string[];
  highlightClass?: string;
}

/**
 * SplitCharHeading
 * High-end GSAP char splitter component that wraps each character in an inline-block container
 * and performs a sequential, staggered entrance animation (opacity, y-slide, 3D rotateX, blur reduction)
 * upon scrolling into view.
 */
export const SplitCharHeading: React.FC<SplitCharHeadingProps> = ({
  children,
  as: Component = 'h2',
  className = '',
  stagger = 0.018,
  duration = 0.75,
  delay = 0,
  triggerOffset = 'top 85%',
  highlightWords = [],
  highlightClass = 'text-gradient-orange italic',
}) => {
  const containerRef = useRef<any>(null);
  const charsRef = useRef<(HTMLSpanElement | null)[]>([]);

  // Extract raw text from children if simple string, or handle string array
  const textContent = typeof children === 'string' ? children : String(children || '');
  const words = textContent.split(' ');

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const chars = charsRef.current.filter(Boolean);
    if (chars.length === 0) return;

    const ctx = gsap.context(() => {
      // Set initial 3D hidden state
      gsap.set(chars, {
        opacity: 0,
        y: 35,
        rotateX: 40,
        filter: 'blur(8px)',
        scale: 0.92,
        transformOrigin: '50% 100%',
      });

      const anim = gsap.to(chars, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: 'blur(0px)',
        scale: 1,
        duration,
        stagger,
        ease: 'power3.out',
        delay,
      });

      ScrollTrigger.create({
        trigger: el,
        start: triggerOffset,
        onEnter: () => anim.play(),
        once: true,
      });
    }, el);

    return () => ctx.revert();
  }, [textContent, stagger, duration, delay, triggerOffset]);

  let charCount = 0;

  return (
    <Component
      ref={containerRef}
      className={`font-serif-luxury tracking-[-0.015em] transition-colors duration-300 select-text ${className}`}
      style={{ perspective: '1200px' }}
    >
      {words.map((word, wIdx) => {
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const isHighlighted = highlightWords.some(
          (hw) => hw.toLowerCase() === cleanWord
        );

        return (
          <span
            key={wIdx}
            className={`inline-block whitespace-nowrap ${isHighlighted ? highlightClass : ''}`}
          >
            {word.split('').map((char) => {
              const idx = charCount++;
              return (
                <span
                  key={idx}
                  ref={(c) => {
                    charsRef.current[idx] = c;
                  }}
                  className="inline-block will-change-[transform,opacity,filter]"
                >
                  {char}
                </span>
              );
            })}
            {wIdx < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        );
      })}
    </Component>
  );
};
