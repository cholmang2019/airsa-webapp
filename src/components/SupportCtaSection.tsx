import React from 'react';
import { ArrowLeft, ArrowRight, MessageCircle, PhoneCall, Headphones } from 'lucide-react';
import { CONSULTATION_URL, getSupportCta } from '../data/treatmentRequestData';
import { useLanguage } from '../context/LanguageContext';

export const SupportCtaSection: React.FC = () => {
  const { language, dir, isRtl, t } = useLanguage();
  const cta = getSupportCta(language);
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="support-cta"
      className="py-20 sm:py-24 bg-slate-900 text-white relative overflow-hidden"
      dir={dir}
    >
      {/* Soft Ambient Glows */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center flex flex-col items-center">
        {/* Minimal Icon Badge */}
        <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 flex items-center justify-center mb-6 shadow-sm">
          <Headphones className="w-6 h-6" />
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4 leading-[1.3] text-center max-w-xl">
          {cta.title}
        </h2>

        {/* Subtitle */}
        <p className="text-slate-300 text-sm sm:text-base max-w-lg font-light leading-relaxed mb-8 text-center">
          {cta.subtitle}
        </p>

        {/* Primary CTA Button */}
        <a
          id="support-cta-button"
          href={CONSULTATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm sm:text-base transition-all duration-300 shadow-[0_10px_30px_-5px_rgba(245,158,11,0.5)] hover:shadow-[0_15px_35px_-5px_rgba(245,158,11,0.7)] hover:-translate-y-0.5 active:translate-y-0"
        >
          <span>{cta.buttonText}</span>
          <ArrowIcon className={`w-4 h-4 transition-transform duration-300 ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
        </a>

        {/* Trust Badges */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs text-slate-400">
          <div className="flex items-center gap-1.5">
            <MessageCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.home.multilingualSupport}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <PhoneCall className="w-3.5 h-3.5 text-emerald-400" />
            <span>{t.home.rapidFreeGuidance}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
