import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedLetterH3Props {
  text: string;
  className?: string;
  highlightWords?: string[];
  highlightClassName?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  delay?: number;
  triggerOnScroll?: boolean;
}

/**
 * AnimatedLetterH3
 * Responsive H3 heading component with tight letter tracking, smooth color transitions,
 * and per-letter GSAP animation that fades in, slides up, and reduces blur from 12px -> 0px.
 */
export const AnimatedLetterH3: React.FC<AnimatedLetterH3Props> = ({
  text,
  className = '',
  highlightWords = [],
  highlightClassName = 'text-gradient-orange italic font-normal',
  as: Component = 'h3',
  delay = 0,
  triggerOnScroll = true,
}) => {
  const containerRef = useRef<HTMLHeadingElement | null>(null);
  const lettersRef = useRef<(HTMLSpanElement | null)[]>([]);

  // Split text into words and letters while preserving spacing
  const words = text.split(' ');

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const letters = lettersRef.current.filter(Boolean);
    if (letters.length === 0) return;

    const ctx = gsap.context(() => {
      // Set initial state: faded out, translated down, and blurred
      gsap.set(letters, {
        opacity: 0,
        y: 35,
        filter: 'blur(12px)',
        scale: 0.94,
        rotateX: 20,
        transformOrigin: '50% 100%',
      });

      const tween = gsap.to(letters, {
        opacity: 1,
        y: 0,
        filter: 'blur(0px)',
        scale: 1,
        rotateX: 0,
        duration: 0.85,
        stagger: 0.02,
        ease: 'power3.out',
        delay,
      });

      if (triggerOnScroll) {
        ScrollTrigger.create({
          trigger: container,
          start: 'top 85%',
          onEnter: () => tween.play(),
          once: true,
        });
      }
    }, container);

    return () => ctx.revert();
  }, [text, delay, triggerOnScroll]);

  let letterIndex = 0;

  return (
    <Component
      ref={containerRef}
      className={`font-serif-luxury text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal leading-[1.12] tracking-[-0.02em] text-neutral-900 transition-colors duration-500 ease-out select-text ${className}`}
      style={{ perspective: '1000px' }}
    >
      {words.map((word, wIdx) => {
        const isHighlighted = highlightWords.some(
          (hw) => hw.toLowerCase() === word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        );

        return (
          <span
            key={wIdx}
            className={`inline-block whitespace-nowrap ${isHighlighted ? highlightClassName : ''}`}
          >
            {word.split('').map((char) => {
              const curIndex = letterIndex++;
              return (
                <span
                  key={curIndex}
                  ref={(el) => {
                    lettersRef.current[curIndex] = el;
                  }}
                  className="inline-block will-change-[transform,opacity,filter] transition-colors duration-300"
                >
                  {char}
                </span>
              );
            })}
            {/* Space between words */}
            {wIdx < words.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        );
      })}
    </Component>
  );
};
