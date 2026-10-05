import React, { useState, useEffect } from 'react';

interface RolodexTextProps {
  words: string[];
  interval?: number;
  className?: string;
  wordClassName?: string;
}

/**
 * RolodexText
 * 3D Rolodex / Split-Flap rotating text component with 3D perspective, smooth vertical flip,
 * and warm gold/orange luxury gradient styling.
 */
export const RolodexText: React.FC<RolodexTextProps> = ({
  words,
  interval = 2800,
  className = '',
  wordClassName = 'text-gradient-orange italic font-serif-luxury',
}) => {
  const [index, setIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    if (words.length <= 1) return;

    const timer = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setIsFlipping(false);
      }, 350);
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval]);

  const currentWord = words[index];

  return (
    <span
      className={`inline-block relative overflow-hidden align-baseline ${className}`}
      style={{ perspective: '800px' }}
    >
      <span
        className={`inline-block transition-all duration-350 ease-out transform ${wordClassName} ${
          isFlipping
            ? '-translate-y-full opacity-0 rotate-x-90 scale-95'
            : 'translate-y-0 opacity-100 rotate-x-0 scale-100'
        }`}
        style={{
          transformOrigin: '50% 50% -15px',
          backfaceVisibility: 'hidden',
          display: 'inline-block',
        }}
      >
        {currentWord}
      </span>
    </span>
  );
};
