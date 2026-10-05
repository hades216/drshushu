import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface UsePerspectiveTiltOptions {
  maxTilt?: number; // max tilt angle in degrees (e.g. 3 to 6 deg for subtle luxury)
  perspective?: number; // CSS perspective distance (e.g. 1400px)
  scale?: number; // subtle scale on hover (e.g. 1.01)
  speed?: number; // GSAP tween duration
  glare?: boolean; // whether to add a specular sheen reflection
}

/**
 * usePerspectiveTilt
 * Attaches a refined 3D mouse-following perspective tilt to an element.
 * Smoothly rotates X/Y based on normalized mouse distance from container center,
 * creating editorial tactile depth while leaving scrolling unconstrained.
 */
export const usePerspectiveTilt = <T extends HTMLElement = HTMLDivElement>(
  options: UsePerspectiveTiltOptions = {}
) => {
  const elementRef = useRef<T | null>(null);
  const {
    maxTilt = 4.5,
    perspective = 1400,
    scale = 1.008,
    speed = 0.55,
  } = options;

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Only apply on devices with precision pointer / mouse
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return;

    el.style.transformStyle = 'preserve-3d';
    if (!el.style.perspective) {
      el.style.perspective = `${perspective}px`;
    }

    const setRotateX = gsap.quickTo(el, 'rotateX', { duration: speed, ease: 'power2.out' });
    const setRotateY = gsap.quickTo(el, 'rotateY', { duration: speed, ease: 'power2.out' });
    const setScale = gsap.quickTo(el, 'scale', { duration: speed, ease: 'power2.out' });

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      // Ensure mouse is inside or near the bounding box
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      // Normalized coordinates: -1 to +1
      const normalizedX = (x - centerX) / centerX;
      const normalizedY = (y - centerY) / centerY;

      // Invert Y for natural perspective tilt: mouse top tilts away (positive rotateX), mouse bottom tilts toward
      const tiltX = -normalizedY * maxTilt;
      const tiltY = normalizedX * maxTilt;

      setRotateX(tiltX);
      setRotateY(tiltY);
      setScale(scale);
    };

    const handleMouseLeave = () => {
      setRotateX(0);
      setRotateY(0);
      setScale(1);
    };

    el.addEventListener('mousemove', handleMouseMove, { passive: true });
    el.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      gsap.set(el, { clearProps: 'rotateX,rotateY,scale,transformStyle' });
    };
  }, [maxTilt, perspective, scale, speed]);

  return elementRef;
};
