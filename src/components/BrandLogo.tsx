import React from 'react';

interface BrandLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  onClick?: () => void;
  className?: string;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  size = 'md',
  showSubtitle = true,
  onClick,
  className = '',
}) => {
  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-3 select-none cursor-pointer group ${className}`}
      dir="rtl"
    >
      {/* Emblem: Stylized Golden Simorgh Crest */}
      <div className="relative flex items-center justify-center">
        <div
          className={`relative rounded-xl bg-gradient-to-br from-amber-400/20 via-amber-500/10 to-slate-900 border border-amber-400/40 flex items-center justify-center shadow-lg shadow-amber-500/10 group-hover:border-amber-400/70 group-hover:shadow-amber-500/20 transition-all duration-300 ${
            size === 'sm' ? 'w-9 h-9' : size === 'lg' ? 'w-12 h-12' : 'w-10 h-10'
          }`}
        >
          {/* Geometric Wing/Simorgh Stylized SVG */}
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`text-amber-400 transform group-hover:scale-110 transition-transform duration-300 ${
              size === 'sm' ? 'w-5 h-5' : size === 'lg' ? 'w-7 h-7' : 'w-6 h-6'
            }`}
          >
            {/* Elegant Simorgh Wing Arc 1 */}
            <path
              d="M6 22C11 20 18 16 23 8C20 14 16 18 10 24"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            {/* Simorgh Wing Arc 2 */}
            <path
              d="M10 24C15 21 21 16 26 10C23 15 18 20 13 25"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeOpacity="0.8"
            />
            {/* Simorgh Crest Tip */}
            <circle cx="24" cy="7.5" r="1.5" fill="currentColor" />
            {/* Base anchor */}
            <path
              d="M7 23.5C8 23 10 23.5 11 24.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>

      {/* Brand Text Typography */}
      <div className="flex flex-col text-right">
        <div className="flex items-center gap-2">
          <span
            className={`font-black text-white group-hover:text-amber-300 transition-colors tracking-tight ${
              size === 'sm' ? 'text-base' : size === 'lg' ? 'text-xl' : 'text-lg'
            }`}
          >
            ایرسا سیمرغ
          </span>
          <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-amber-400/60" />
          <span
            className={`hidden sm:inline-block font-medium tracking-wider text-slate-300 uppercase ${
              size === 'sm' ? 'text-[11px]' : size === 'lg' ? 'text-xs' : 'text-[11px]'
            }`}
          >
            IRSA SIMORGH
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] text-slate-400 font-light tracking-normal hidden md:inline-block">
            گردشگری سلامت و خدمات بین‌المللی
          </span>
        )}
      </div>
    </div>
  );
};
