import React from 'react';

interface SectionDividerProps {
  className?: string;
  variant?: 'vertical' | 'horizontal';
}

/**
 * SectionDivider
 * Elegant, subtle hairline separator with a center diamond ornament
 * used between major editorial snap sections.
 */
export const SectionDivider: React.FC<SectionDividerProps> = ({
  className = '',
  variant = 'vertical',
}) => {
  if (variant === 'vertical') {
    return (
      <div
        className={`w-full flex flex-col items-center justify-center py-6 sm:py-8 pointer-events-none select-none relative z-20 ${className}`}
        aria-hidden="true"
      >
        {/* Upper Hairline */}
        <div className="w-[1px] h-8 sm:h-12 bg-gradient-to-b from-transparent via-[#E2D8C7] to-[#C5B388]/70" />

        {/* Center Diamond Icon Ornament */}
        <div className="my-1.5 relative flex items-center justify-center">
          {/* Outer diamond halo */}
          <div className="w-3.5 h-3.5 rotate-45 border border-[#E45D25]/40 bg-white/90 shadow-[0_0_8px_rgba(228,93,37,0.15)] flex items-center justify-center transition-transform hover:scale-125">
            {/* Center amber core */}
            <div className="w-1.5 h-1.5 bg-[#E45D25] rounded-xs" />
          </div>
        </div>

        {/* Lower Hairline */}
        <div className="w-[1px] h-8 sm:h-12 bg-gradient-to-b from-[#C5B388]/70 via-[#E2D8C7] to-transparent" />
      </div>
    );
  }

  return (
    <div
      className={`w-full max-w-[1280px] mx-auto px-6 py-8 flex items-center justify-center gap-4 pointer-events-none select-none relative z-20 ${className}`}
      aria-hidden="true"
    >
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-[#E2D8C7] to-[#C5B388]/60" />
      <div className="relative flex items-center justify-center">
        <div className="w-3 h-3 rotate-45 border border-[#E45D25]/50 bg-white shadow-xs flex items-center justify-center">
          <div className="w-1 h-1 bg-[#E45D25] rounded-xs" />
        </div>
      </div>
      <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-[#E2D8C7] to-[#C5B388]/60" />
    </div>
  );
};
