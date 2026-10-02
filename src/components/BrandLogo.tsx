import React from 'react';
import { useLanguage } from '../context/LanguageContext';

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
  const { language, isRtl } = useLanguage();

  const brandName =
    language === 'ar'
      ? 'إيرسا سيمرغ جهان'
      : language === 'fa'
      ? 'ایرسا سیمرغ جهان'
      : language === 'zh'
      ? 'Airsa Simorgh (艾尔萨·西摩格)'
      : 'Airsa Simorgh Jahan';

  const brandSubtitle =
    language === 'ar'
      ? 'السياحة العلاجية والخدمات الدولية'
      : language === 'fa'
      ? 'گردشگری سلامت و خدمات بین‌المللی'
      : language === 'tr'
      ? 'Sağlık Turizmi ve Küresel Hizmetler'
      : language === 'zh'
      ? '医疗旅游与全球商贸服务'
      : 'Medical Tourism & Global Services';

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 sm:gap-3 select-none cursor-pointer group ${className}`}
      dir={isRtl ? 'rtl' : 'ltr'}
    >
      {/* Emblem: Stylized Golden Simorgh Crest */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <div
          className={`relative rounded-xl bg-gradient-to-br from-amber-400/20 via-amber-500/10 to-slate-900 border border-amber-400/40 flex items-center justify-center shadow-lg shadow-amber-500/10 group-hover:border-amber-400/70 group-hover:shadow-amber-500/20 transition-all duration-300 ${
            size === 'sm' ? 'w-8 h-8' : size === 'lg' ? 'w-12 h-12' : 'w-9 h-9 sm:w-10 sm:h-10'
          }`}
        >
          {/* Geometric Wing/Simorgh Stylized SVG */}
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`text-amber-400 transform group-hover:scale-110 transition-transform duration-300 ${
              size === 'sm' ? 'w-4 h-4' : size === 'lg' ? 'w-7 h-7' : 'w-5 h-5 sm:w-6 sm:h-6'
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
      <div className={`flex flex-col ${isRtl ? 'text-right' : 'text-left'}`}>
        <div className="flex items-center gap-1.5">
          <span
            className={`font-black text-white group-hover:text-amber-300 transition-colors tracking-tight whitespace-nowrap ${
              size === 'sm' ? 'text-sm sm:text-base' : size === 'lg' ? 'text-xl' : 'text-base sm:text-lg'
            }`}
          >
            {brandName}
          </span>
        </div>
        {showSubtitle && (
          <span className="text-[10px] text-slate-400 font-light tracking-normal hidden md:inline-block line-clamp-1 whitespace-nowrap">
            {brandSubtitle}
          </span>
        )}
      </div>
    </div>
  );
};
