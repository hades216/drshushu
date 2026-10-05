import React, { useEffect, useRef } from 'react';

/**
 * AmbientSilkCanvas (Enhanced Background)
 * - Replaces wireframe lines with luxurious, organic luminous silk auras and ambient liquid light pools.
 * - Eliminates sterile blank white backgrounds with soft warm peach, honey amber, and terracotta gradients.
 * - Floating stardust bokeh particles that drift with gentle fluid physics.
 * - Dynamically responds to scroll velocity and depth.
 * - Completely transparent on the dark hero section, smoothly fading in below.
 */
export const SpiralWaveCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let scrollY = window.scrollY;
    let targetScrollY = window.scrollY;
    let lastScrollY = window.scrollY;
    let scrollVelocity = 0;
    let smoothVelocity = 0;

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    let time = 0;

    // Organic glowing ambient light pools
    const lightAuras = [
      { baseHue: 24, xFactor: 0.25, yFactor: 0.35, radius: 340, speed: 0.007, phase: 0 },
      { baseHue: 38, xFactor: 0.75, yFactor: 0.45, radius: 380, speed: 0.005, phase: 1.8 },
      { baseHue: 15, xFactor: 0.5, yFactor: 0.75, radius: 420, speed: 0.006, phase: 3.4 },
      { baseHue: 32, xFactor: 0.85, yFactor: 0.85, radius: 320, speed: 0.008, phase: 4.6 },
      { baseHue: 28, xFactor: 0.15, yFactor: 0.8, radius: 360, speed: 0.0065, phase: 2.2 },
    ];

    // Floating micro-bokeh stardust
    const stardust = Array.from({ length: 36 }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 1.5 + Math.random() * 3.2,
      baseAlpha: 0.25 + Math.random() * 0.45,
      speedX: (Math.random() - 0.5) * 0.4,
      speedY: -0.2 - Math.random() * 0.35,
      pulseSpeed: 0.02 + Math.random() * 0.03,
      pulsePhase: Math.random() * Math.PI * 2,
      hue: 24 + Math.random() * 16,
    }));

    const render = () => {
      time += 0.008;

      // Measure dynamic scroll velocity
      const instantVelocity = Math.abs(targetScrollY - lastScrollY);
      lastScrollY = targetScrollY;
      scrollVelocity += (instantVelocity - scrollVelocity) * 0.08;
      smoothVelocity += (scrollVelocity - smoothVelocity) * 0.06;

      scrollY += (targetScrollY - scrollY) * 0.075;

      ctx.clearRect(0, 0, width, height);

      // Hero protection: completely transparent on hero, smoothly fades in below
      const heroThreshold = height * 0.65;
      const heroFade = Math.max(0, Math.min(1, (scrollY - heroThreshold) / 220));

      if (heroFade <= 0.005) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.save();
      ctx.globalAlpha = heroFade * 0.85;

      const velocityScale = 1 + Math.min(smoothVelocity * 0.04, 1.2);

      // 1. Render Soft Luminous Liquid Light Pools (No harsh wire lines!)
      lightAuras.forEach((aura, idx) => {
        const motionX = Math.sin(time * aura.speed * 100 + aura.phase) * (90 * velocityScale);
        const motionY = Math.cos(time * aura.speed * 85 + aura.phase * 0.8) * (70 * velocityScale);
        const scrollShift = Math.sin(scrollY * 0.002 + idx) * 45;

        const posX = width * aura.xFactor + motionX;
        const posY = height * aura.yFactor + motionY + scrollShift;
        const currentRadius = (aura.radius + Math.sin(time * 0.8 + idx) * 35) * velocityScale;

        // Dynamic warm color palette shifting with scroll depth
        const hue = (aura.baseHue + (scrollY * 0.03) % 25 + Math.sin(time * 0.4 + idx) * 5) % 360;

        const grad = ctx.createRadialGradient(posX, posY, 10, posX, posY, currentRadius);
        // Soft diffused glowing aura that creates ambient depth on white background
        grad.addColorStop(0, `hsla(${hue}, 90%, 60%, 0.18)`);
        grad.addColorStop(0.35, `hsla(${hue + 6}, 92%, 62%, 0.11)`);
        grad.addColorStop(0.7, `hsla(${hue + 14}, 85%, 65%, 0.04)`);
        grad.addColorStop(1, `hsla(${hue + 20}, 80%, 70%, 0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(posX, posY, currentRadius, 0, Math.PI * 2);
        ctx.fill();
      });

      // 2. Render Flowing Liquid Silk Mesh Waves (Filled silky gradients, NOT lines)
      const meshWaves = 3;
      for (let w = 0; w < meshWaves; w++) {
        ctx.beginPath();
        const waveOffset = (w / meshWaves) * Math.PI * 2;
        const waveHue = (25 + w * 7 + (scrollY * 0.02) % 20) % 360;

        const topPoints: { x: number; y: number }[] = [];
        const bottomPoints: { x: number; y: number }[] = [];
        const segments = 36;

        for (let i = 0; i <= segments; i++) {
          const t = i / segments;
          const x = t * (width + 160) - 80;

          const baseWave = Math.sin(t * 2.8 + time * 0.9 + waveOffset) * (65 * velocityScale);
          const harmonic = Math.cos(t * 5.2 - time * 0.6 + waveOffset * 0.5) * 28;
          const scrollParallax = Math.sin(scrollY * 0.0025 + t * 3) * 30;

          const centerY = height * (0.35 + w * 0.22) + baseWave + harmonic + scrollParallax;
          const thickness = (50 + Math.sin(t * Math.PI + time + w) * 30) * velocityScale;

          topPoints.push({ x, y: centerY - thickness * 0.5 });
          bottomPoints.push({ x, y: centerY + thickness * 0.5 });
        }

        topPoints.forEach((p, index) => {
          if (index === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        });

        for (let b = bottomPoints.length - 1; b >= 0; b--) {
          ctx.lineTo(bottomPoints[b].x, bottomPoints[b].y);
        }
        ctx.closePath();

        const waveGrad = ctx.createLinearGradient(0, 0, width, height);
        waveGrad.addColorStop(0, `hsla(${waveHue}, 90%, 55%, 0.01)`);
        waveGrad.addColorStop(0.3, `hsla(${waveHue + 4}, 92%, 58%, 0.09)`);
        waveGrad.addColorStop(0.7, `hsla(${waveHue + 8}, 88%, 56%, 0.12)`);
        waveGrad.addColorStop(1, `hsla(${waveHue + 14}, 90%, 60%, 0.01)`);

        ctx.fillStyle = waveGrad;
        ctx.fill();
      }

      // 3. Floating Stardust & Soft Light Bokeh
      stardust.forEach((star) => {
        star.y += star.speedY - smoothVelocity * 0.15;
        star.x += star.speedX;

        // Wrap around boundaries
        if (star.y < -20) {
          star.y = height + 20;
          star.x = Math.random() * width;
        }
        if (star.x < -20) star.x = width + 20;
        if (star.x > width + 20) star.x = -20;

        const pulse = (Math.sin(time * star.pulseSpeed * 100 + star.pulsePhase) + 1) * 0.5;
        const currentAlpha = star.baseAlpha * (0.5 + pulse * 0.5);

        ctx.fillStyle = `hsla(${star.hue}, 95%, 62%, ${currentAlpha * 0.6})`;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-700"
      style={{
        mixBlendMode: 'multiply',
      }}
      aria-hidden="true"
    />
  );
};
