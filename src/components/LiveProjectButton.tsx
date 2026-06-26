import React from 'react';

interface LiveProjectButtonProps {
  onClick?: () => void;
  className?: string;
  label?: string;
}

export default function LiveProjectButton({ onClick, className = '', label = 'Live Project' }: LiveProjectButtonProps) {
  return (
    <button
      id={`live-project-btn-${label.toLowerCase().replace(/\s+/g, '-')}`}
      onClick={onClick}
      className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest transition-all duration-300 hover:bg-[#D7E2EA]/10 active:scale-95 cursor-pointer px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base ${className}`}
    >
      {label}
    </button>
  );
}
