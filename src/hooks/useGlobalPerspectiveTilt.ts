import { useEffect } from 'react';
import { gsap } from 'gsap';

/**
 * useGlobalPerspectiveTilt
 * Automatically attaches mouse-following 3D perspective tilt to all section containers
 * and cards marked with `.perspective-tilt-section` or `.tilt-card`.
 * Preserves scroll flow while bringing organic, editorial physical depth to the screen.
 */
export const useGlobalPerspectiveTilt = () => {
  useEffect(() => {
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return;

    // Find all section containers
    const elements = document.querySelectorAll<HTMLElement>(
      'section > div:first-child, .perspective-tilt-section, .tilt-card'
    );

    if (elements.length === 0) return;

    const cleanupFns: (() => void)[] = [];

    elements.forEach((el) => {
      // Set perspective on parent section or element itself
      if (el.parentElement) {
        el.parentElement.style.perspective = '1600px';
      }
      el.style.transformStyle = 'preserve-3d';
      el.style.willChange = 'transform';

      const maxTilt = el.tagName === 'DIV' && el.parentElement?.tagName === 'SECTION' ? 2.5 : 4.0;
      const speed = 0.55;

      const setRotateX = gsap.quickTo(el, 'rotateX', { duration: speed, ease: 'power2.out' });
      const setRotateY = gsap.quickTo(el, 'rotateY', { duration: speed, ease: 'power2.out' });

      const handleMouseMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Check if cursor is within bounding area
        if (x < -50 || x > rect.width + 50 || y < -50 || y > rect.height + 50) return;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const normalizedX = (x - centerX) / centerX;
        const normalizedY = (y - centerY) / centerY;

        const tiltX = -normalizedY * maxTilt;
        const tiltY = normalizedX * maxTilt;

        setRotateX(tiltX);
        setRotateY(tiltY);
      };

      const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
      };

      el.addEventListener('mousemove', handleMouseMove, { passive: true });
      el.addEventListener('mouseleave', handleMouseLeave, { passive: true });

      cleanupFns.push(() => {
        el.removeEventListener('mousemove', handleMouseMove);
        el.removeEventListener('mouseleave', handleMouseLeave);
        gsap.set(el, { clearProps: 'rotateX,rotateY,transformStyle' });
      });
    });

    return () => {
      cleanupFns.forEach((fn) => fn());
    };
  }, []);
};
