import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface PerspectiveTiltContainerProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  speed?: number;
  glare?: boolean;
}

/**
 * PerspectiveTiltContainer
 * High-performance 3D perspective wrapper that reacts smoothly to mouse movement.
 * Adds tactile depth to editorial containers while preserving native document scroll flow.
 */
export const PerspectiveTiltContainer: React.FC<PerspectiveTiltContainerProps> = ({
  children,
  className = '',
  maxTilt = 3.5,
  perspective = 1400,
  scale = 1.006,
  speed = 0.5,
  glare = true,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const glareRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return;

    el.style.transformStyle = 'preserve-3d';
    el.style.perspective = `${perspective}px`;

    const setRotateX = gsap.quickTo(el, 'rotateX', { duration: speed, ease: 'power2.out' });
    const setRotateY = gsap.quickTo(el, 'rotateY', { duration: speed, ease: 'power2.out' });
    const setScale = gsap.quickTo(el, 'scale', { duration: speed, ease: 'power2.out' });

    let setGlareOpacity: ((val: number) => void) | null = null;
    let setGlareX: ((val: number) => void) | null = null;
    let setGlareY: ((val: number) => void) | null = null;

    if (glare && glareRef.current) {
      setGlareOpacity = gsap.quickTo(glareRef.current, 'opacity', { duration: speed, ease: 'power2.out' });
      setGlareX = gsap.quickTo(glareRef.current, 'x', { duration: speed, ease: 'power2.out' });
      setGlareY = gsap.quickTo(glareRef.current, 'y', { duration: speed, ease: 'power2.out' });
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const normalizedX = (x - centerX) / centerX;
      const normalizedY = (y - centerY) / centerY;

      const tiltX = -normalizedY * maxTilt;
      const tiltY = normalizedX * maxTilt;

      setRotateX(tiltX);
      setRotateY(tiltY);
      setScale(scale);

      if (setGlareOpacity && setGlareX && setGlareY) {
        setGlareOpacity(0.18);
        setGlareX(x - 150);
        setGlareY(y - 150);
      }
    };

    const handleMouseLeave = () => {
      setRotateX(0);
      setRotateY(0);
      setScale(1);
      if (setGlareOpacity) {
        setGlareOpacity(0);
      }
    };

    el.addEventListener('mousemove', handleMouseMove, { passive: true });
    el.addEventListener('mouseleave', handleMouseLeave, { passive: true });

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
      gsap.set(el, { clearProps: 'rotateX,rotateY,scale,transformStyle' });
    };
  }, [maxTilt, perspective, scale, speed, glare]);

  return (
    <div
      ref={containerRef}
      className={`relative will-change-transform transition-shadow duration-300 ${className}`}
    >
      {glare && (
        <div
          ref={glareRef}
          className="pointer-events-none absolute w-[300px] h-[300px] rounded-full bg-radial from-white/20 to-transparent blur-xl opacity-0 z-30"
          style={{ willChange: 'transform, opacity' }}
        />
      )}
      {children}
    </div>
  );
};
