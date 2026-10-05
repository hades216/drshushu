import React from 'react';

interface V14HeaderProps {
  onBookClick: () => void;
}

export const V14Header: React.FC<V14HeaderProps> = ({ onBookClick }) => {
  return (
    <header className="sticky top-0 z-40 bg-[#F8F7F4]/95 backdrop-blur-sm border-b border-[var(--ink-faint)] px-6 lg:px-16 py-6 transition-colors">
      <div className="max-w-[1500px] mx-auto grid grid-cols-2 md:grid-cols-3 items-center">
        {/* Left Zone: Micro Badge / Location */}
        <div className="hidden md:flex items-center gap-3">
          <span className="badge">F-10/1 ISLAMABAD</span>
          <span className="label hidden lg:inline">DR. SHUMAILA KHAN</span>
        </div>

        {/* Center Zone: Logo in Cormorant Garamond */}
        <div className="text-left md:text-center">
          <a
            href="#top"
            className="font-serif-editorial text-3xl sm:text-4xl font-light tracking-[0.12em] uppercase text-[#1A1A1A] hover:opacity-80 transition-opacity"
          >
            DERMALASE
          </a>
        </div>

        {/* Right Zone: Navigation & Action */}
        <nav className="flex items-center justify-end gap-6 lg:gap-8">
          <a
            href="#doctor"
            className="hidden sm:inline text-[0.75rem] uppercase tracking-[0.1em] text-[#1A1A1A] hover:opacity-60 transition-opacity"
          >
            The Doctor
          </a>
          <a
            href="#treatments"
            className="hidden md:inline text-[0.75rem] uppercase tracking-[0.1em] text-[#1A1A1A] hover:opacity-60 transition-opacity"
          >
            Treatments
          </a>
          <a
            href="#technology"
            className="hidden lg:inline text-[0.75rem] uppercase tracking-[0.1em] text-[#1A1A1A] hover:opacity-60 transition-opacity"
          >
            Technology
          </a>
          <a
            href="#results"
            className="hidden sm:inline text-[0.75rem] uppercase tracking-[0.1em] text-[#1A1A1A] hover:opacity-60 transition-opacity"
          >
            Results
          </a>
          <button
            type="button"
            onClick={onBookClick}
            className="btn !py-2.5 !px-5 text-[0.65rem] !tracking-[0.15em] bg-[#1A1A1A] text-white hover:bg-[#2D2D2D]"
          >
            Consultation
          </button>
        </nav>
      </div>
    </header>
  );
};
