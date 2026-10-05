import React from 'react';

interface AuroraBackgroundProps {
  className?: string;
  variant?: 'light' | 'dark' | 'warm';
  opacity?: number;
}

/**
 * AuroraBackground
 * Animated multi-layered gradient aurora background with floating organic light orbs,
 * smooth color shifts, and ultra-soft blurs for luxury editorial depth.
 */
export const AuroraBackground: React.FC<AuroraBackgroundProps> = ({
  className = '',
  variant = 'warm',
  opacity = 0.85,
}) => {
  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Aurora Layer 1 - Warm Coral Glow */}
      <div
        className="absolute -top-[20%] -left-[10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-br from-[#E45D25]/20 via-[#FDBA74]/15 to-transparent blur-[90px] sm:blur-[130px] animate-aurora-slow transform-gpu"
        style={{ willChange: 'transform' }}
      />

      {/* Aurora Layer 2 - Soft Radiant Cyan / Ice Highlight */}
      <div
        className="absolute top-[30%] -right-[15%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-bl from-[#38BDF8]/15 via-[#818CF8]/12 to-transparent blur-[100px] sm:blur-[140px] animate-aurora-reverse transform-gpu"
        style={{ willChange: 'transform' }}
      />

      {/* Aurora Layer 3 - Golden Apricot Core */}
      <div
        className="absolute -bottom-[20%] left-[25%] w-[60vw] h-[45vw] rounded-full bg-gradient-to-tr from-[#F59E0B]/18 via-[#FB923C]/12 to-transparent blur-[110px] sm:blur-[150px] animate-aurora-drift transform-gpu"
        style={{ willChange: 'transform' }}
      />

      {/* Aurora Shimmer Noise Overlay */}
      <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/[0.02]" />
    </div>
  );
};
