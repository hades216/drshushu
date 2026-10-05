import React from 'react';

export const V14Footer: React.FC = () => {
  return (
    <footer className="bg-[#F8F7F4] border-t border-[var(--ink-faint)] py-10 px-6 lg:px-16 transition-colors">
      <div className="max-w-[1500px] mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        <div className="label">
          © {new Date().getFullYear()} DERMALASE SANCTUARY — ALL RIGHTS RESERVED
        </div>
        <div className="label flex items-center">
          <span className="badge">UK CERTIFIED</span>
          BRITISH DERMATOLOGY &amp; AAAM DIPLOMAT
        </div>
      </div>
    </footer>
  );
};
