import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * useCinematicImageReveal
 * Creates a cinematic 'reveal-on-scroll' effect for all section images:
 * Images start slightly zoomed-in (scale: 1.22, soft focus) and smoothly scale down
 * to their crisp original size (scale: 1.0) as they cross the center of the viewport.
 */
export const useCinematicImageReveal = () => {
  useEffect(() => {
    // Collect all meaningful section photographic images (exclude logos and tiny avatars)
    const images = document.querySelectorAll<HTMLImageElement>(
      'section img:not(.no-cinematic):not([src*="logo"]):not(.logo-img)'
    );

    if (images.length === 0) return;

    const ctx = gsap.context(() => {
      images.forEach((img) => {
        // Ensure the parent container clips the zoom-in cleanly
        const parent = img.parentElement;
        if (parent && !parent.classList.contains('overflow-hidden')) {
          parent.style.overflow = 'hidden';
        }

        // Set will-change for high GPU performance
        img.style.willChange = 'transform, filter, opacity';

        gsap.fromTo(
          img,
          {
            scale: 1.22,
            filter: 'blur(2px)',
            opacity: 0.88,
          },
          {
            scale: 1.0,
            filter: 'blur(0px)',
            opacity: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: img.closest('.relative') || img,
              start: 'top 95%',
              end: 'center 45%',
              scrub: 1.2,
              invalidateOnRefresh: true,
            },
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);
};
