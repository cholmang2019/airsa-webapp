import React, { useState, useEffect } from 'react';
import { ShieldCheck, Award, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { assetPath } from '../assets/assetManager';

interface CeoPortraitProps {
  className?: string;
  name: string;
  title: string;
}

const STORAGE_PHOTO_KEY = 'airsa_ceo_photo_custom_v1';
const DEFAULT_IMAGE_PATHS = [
  assetPath('/Hadiseh Dehghani CEO.jpg'),
  assetPath('/images/team/hadiseh-dehghani-ceo.jpg'),
  assetPath('/images/team/hadiseh-dehghani.jpg'),
  assetPath('/images/ceo/hadiseh-dehghani.jpg'),
  assetPath('/images/team/hadiseh-dehghani.webp'),
  assetPath('/images/team/placeholder-team.webp'),
];

export const CeoPortrait: React.FC<CeoPortraitProps> = ({
  className = '',
  name,
  title,
}) => {
  const { language, isRtl } = useLanguage();
  const [currentSourceIndex, setCurrentSourceIndex] = useState(0);
  const [customPhotoUrl, setCustomPhotoUrl] = useState<string | null>(null);
  const [imageError, setImageError] = useState(false);

  // Load custom saved photo if exists in localStorage and sync with local project disk
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_PHOTO_KEY);
        if (saved) {
          setCustomPhotoUrl(saved);

          // Permanently sync photo to local filesystem in background
          fetch('/api/save-ceo-photo', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ dataUrl: saved }),
          }).catch(() => {});
        }
      } catch {
        // Storage fail-safe
      }
    }
  }, []);

  const handleImageError = () => {
    if (customPhotoUrl) {
      // If custom photo failed, fall back to defaults
      setCustomPhotoUrl(null);
      setCurrentSourceIndex(0);
      return;
    }

    if (currentSourceIndex < DEFAULT_IMAGE_PATHS.length - 1) {
      setCurrentSourceIndex((prev) => prev + 1);
    } else {
      setImageError(true);
    }
  };

  const activeSrc = customPhotoUrl || DEFAULT_IMAGE_PATHS[currentSourceIndex];

  return (
    <div className={`relative group ${className}`}>
      {/* Outer Executive Ambient Aura */}
      <div className="absolute -inset-1.5 bg-gradient-to-tr from-amber-500/40 via-amber-300/20 to-blue-500/30 rounded-[32px] blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-300 pointer-events-none" />

      {/* Main Luxury Frame */}
      <div className="relative rounded-[28px] overflow-hidden bg-gradient-to-b from-slate-900 via-[#0d1322] to-slate-950 border border-amber-400/30 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)]">
        {/* Golden Metallic Header Line */}
        <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 via-amber-200 to-amber-600" />

        {/* Photo Container */}
        <div className="relative aspect-[3/4] w-full overflow-hidden bg-gradient-to-br from-slate-900 to-[#070b14] flex items-center justify-center">
          {!imageError ? (
            <img
              src={activeSrc}
              alt={`${name} - ${title}`}
              onError={handleImageError}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.98] contrast-[1.03]"
            />
          ) : (
            /* Executive Fallback with Royal Simorgh Emblem */
            <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center bg-gradient-to-b from-slate-900 via-[#0b1020] to-[#070913] relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.12)_0%,transparent_70%)]" />

              {/* Decorative Geometric Rings */}
              <div className="w-36 h-36 rounded-full border border-amber-400/25 flex items-center justify-center relative mb-5 shadow-2xl shadow-amber-500/10">
                <div className="w-28 h-28 rounded-full border border-amber-400/40 border-dashed animate-[spin_60s_linear_infinite]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="font-serif text-3xl font-bold tracking-widest text-amber-300 drop-shadow-[0_2px_10px_rgba(245,158,11,0.5)]">
                    HD
                  </span>
                  <span className="text-[10px] tracking-wider text-amber-200/80 font-mono mt-0.5">
                    AIRSA
                  </span>
                </div>
              </div>

              <h4 className="text-xl font-bold text-white mb-1.5 tracking-tight">
                {name}
              </h4>
              <p className="text-xs text-amber-300/90 font-medium mb-4 max-w-xs">
                {title}
              </p>

              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-[11px] font-mono">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>OFFICIAL LEADERSHIP</span>
              </div>
            </div>
          )}

          {/* Vignette / Bottom Gradient for Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

          {/* Top Left/Right Verified Executive Badge */}
          <div className={`absolute top-4 ${isRtl ? 'right-4' : 'left-4'} z-10`}>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-400/30 text-amber-300 text-xs font-bold shadow-lg">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>{language === 'fa' ? 'بنیان‌گذار و مدیر عامل' : language === 'ar' ? 'المؤسس والمدير التنفيذي' : language === 'tr' ? 'Kurucu ve Genel Müdür' : 'Founder & CEO'}</span>
            </div>
          </div>

          {/* Bottom Card Identity Banner */}
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <div className="p-4 rounded-2xl bg-slate-950/85 backdrop-blur-xl border border-white/10 shadow-xl">
              <div className="flex items-center justify-between gap-2 mb-1">
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                  <span>{name}</span>
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                </h3>
              </div>
              <p className="text-xs text-amber-300/90 font-medium">
                {title}
              </p>
              <div className="mt-2.5 pt-2.5 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400 font-mono">
                <span>AIRSA SIMORGH JAHAN</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  VERIFIED
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metadata Band */}
        <div className="p-4 bg-slate-950 border-t border-white/[0.06] text-xs text-slate-400 flex items-center justify-between">
          <span className="font-mono text-[11px] text-amber-400/80">
            ISFAHAN • TEHRAN • GLOBAL
          </span>
          <span className="text-[11px] text-slate-300">
            {language === 'fa' ? 'گردشگری • سلامت • تجارت' : language === 'ar' ? 'سياحة • صحة • تجارة' : language === 'tr' ? 'Turizm • Sağlık • Ticaret' : 'Tourism • Health • Trade'}
          </span>
        </div>
      </div>
    </div>
  );
};
