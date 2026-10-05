import React from 'react';
import { Sparkles, Sun, Moon } from 'lucide-react';

interface MinimalNavbarProps {
  theme: 'warm' | 'noir';
  onToggleTheme: () => void;
  onBookClick: () => void;
}

export const MinimalNavbar: React.FC<MinimalNavbarProps> = ({
  theme,
  onToggleTheme,
  onBookClick,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[var(--bg-main)]/90 backdrop-blur-md hairline-b transition-colors duration-300">
      <div className="max-w-[1340px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#top"
          className="font-serif-luxury text-2xl font-normal tracking-tight text-[var(--text-main)] hover:opacity-80 transition-opacity"
        >
          Dermalase
        </a>

        {/* Zone 2: 5 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-xs tracking-wider uppercase text-[var(--text-muted)]">
          <a
            href="#doctor"
            className="hover:text-[var(--text-main)] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[var(--accent)] hover:after:w-full after:transition-all"
          >
            Dr. Shumaila Khan
          </a>
          <a
            href="#treatments"
            className="hover:text-[var(--text-main)] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[var(--accent)] hover:after:w-full after:transition-all"
          >
            Treatments
          </a>
          <a
            href="#technology"
            className="hover:text-[var(--text-main)] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[var(--accent)] hover:after:w-full after:transition-all"
          >
            Technology
          </a>
          <a
            href="#results"
            className="hover:text-[var(--text-main)] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[var(--accent)] hover:after:w-full after:transition-all"
          >
            Results
          </a>
          <a
            href="#contact"
            className="hover:text-[var(--text-main)] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[var(--accent)] hover:after:w-full after:transition-all"
          >
            Contact
          </a>
        </nav>

        {/* Zone 3: Aesthetic Option Switcher & Primary Action */}
        <div className="flex items-center gap-3">
          {/* Aesthetic curation toggle: gives user options between Atelier Warm and Noir Monolith */}
          <button
            type="button"
            onClick={onToggleTheme}
            className="px-3 py-1.5 text-xs text-[var(--text-muted)] hover:text-[var(--text-main)] hairline-all transition-colors cursor-pointer flex items-center gap-1.5"
            title="Switch minimalist aesthetic curation mode"
          >
            {theme === 'warm' ? (
              <>
                <Moon className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Option: Noir</span>
              </>
            ) : (
              <>
                <Sun className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Option: Atelier</span>
              </>
            )}
          </button>

          <button
            type="button"
            onClick={onBookClick}
            className="px-4 py-2 text-xs uppercase tracking-wider font-medium bg-[var(--text-main)] text-[var(--bg-main)] hover:opacity-90 transition-opacity cursor-pointer whitespace-nowrap"
          >
            Consultation
          </button>
        </div>
      </div>
    </header>
  );
};
