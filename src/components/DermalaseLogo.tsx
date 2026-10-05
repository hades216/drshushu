import React from 'react';

interface DermalaseLogoProps {
  className?: string;
  lightMode?: boolean;
}

export const DermalaseLogo: React.FC<DermalaseLogoProps> = ({
  className = '',
  lightMode = false,
}) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Official Butterfly Silhouette Emblem from Screenshots 2-13 */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 flex-shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full drop-shadow-xs"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Left Wing (warm amber/orange gradient) */}
          <path
            d="M50 50 C40 20, 10 15, 10 38 C10 52, 28 62, 50 78 C35 68, 22 75, 22 84 C22 92, 38 94, 50 82 Z"
            fill="url(#butterflyGrad1)"
          />
          {/* Right Wing (radiant orange gradient) */}
          <path
            d="M50 50 C60 20, 90 15, 90 38 C90 52, 72 62, 50 78 C65 68, 78 75, 78 84 C78 92, 62 94, 50 82 Z"
            fill="url(#butterflyGrad2)"
          />
          {/* Subtle profile silhouette inside */}
          <circle cx="50" cy="46" r="6" fill="#FFFFFF" opacity="0.3" />
          <defs>
            <linearGradient id="butterflyGrad1" x1="10" y1="20" x2="50" y2="85" gradientUnits="userSpaceOnUse">
              <stop stopColor="#F97316" />
              <stop offset="1" stopColor="#E45D25" />
            </linearGradient>
            <linearGradient id="butterflyGrad2" x1="90" y1="20" x2="50" y2="85" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FB923C" />
              <stop offset="1" stopColor="#EA580C" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Brand Typography matching Screenshots 2-13 */}
      <div className="flex flex-col text-left">
        <span
          className={`text-[0.62rem] sm:text-[0.68rem] tracking-[0.06em] font-medium leading-none ${
            lightMode ? 'text-white/80' : 'text-[#E45D25]'
          }`}
        >
          Dr. Shumaila Khan's
        </span>
        <span
          className={`font-serif-luxury text-xl sm:text-2xl font-bold tracking-[0.08em] uppercase leading-tight ${
            lightMode ? 'text-white' : 'text-neutral-900'
          }`}
        >
          DERMALASE
        </span>
      </div>
    </div>
  );
};
