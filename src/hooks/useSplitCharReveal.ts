import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * useSplitCharReveal
 * Automatically finds all elements with .split-char-auto in the DOM, splits their text
 * into individual character spans, and attaches a smooth GSAP ScrollTrigger staggered entrance.
 */
export const useSplitCharReveal = () => {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.split-char-auto');
    if (elements.length === 0) return;

    const cleanupFns: (() => void)[] = [];

    elements.forEach((el) => {
      // Avoid splitting multiple times
      if (el.dataset.splitDone === 'true') return;
      el.dataset.splitDone = 'true';

      const originalText = el.innerText.trim();
      if (!originalText) return;

      const words = originalText.split(' ');
      el.innerHTML = '';
      el.style.perspective = '1200px';

      const charSpans: HTMLSpanElement[] = [];

      words.forEach((word, wIdx) => {
        const wordSpan = document.createElement('span');
        wordSpan.className = 'inline-block whitespace-nowrap';

        word.split('').forEach((char) => {
          const charSpan = document.createElement('span');
          charSpan.className = 'inline-block will-change-[transform,opacity,filter]';
          charSpan.textContent = char;
          wordSpan.appendChild(charSpan);
          charSpans.push(charSpan);
        });

        el.appendChild(wordSpan);

        if (wIdx < words.length - 1) {
          const spaceSpan = document.createElement('span');
          spaceSpan.className = 'inline-block';
          spaceSpan.innerHTML = '&nbsp;';
          el.appendChild(spaceSpan);
        }
      });

      // Initial GSAP State: 3D, blur, translateY
      gsap.set(charSpans, {
        opacity: 0,
        y: 35,
        rotateX: 40,
        filter: 'blur(8px)',
        scale: 0.92,
        transformOrigin: '50% 100%',
      });

      const anim = gsap.to(charSpans, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        filter: 'blur(0px)',
        scale: 1,
        duration: 0.8,
        stagger: 0.018,
        ease: 'power3.out',
        paused: true,
      });

      const st = ScrollTrigger.create({
        trigger: el,
        start: 'top 85%',
        onEnter: () => anim.play(),
        once: true,
      });

      cleanupFns.push(() => {
        st.kill();
        anim.kill();
      });
    });

    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, []);
};
