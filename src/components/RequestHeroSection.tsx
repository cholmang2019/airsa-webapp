import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { ASSETS } from '../assets/assetManager';
import { useLanguage } from '../context/LanguageContext';
import { getTreatmentRequestHero } from '../data/treatmentRequestData';

export const RequestHeroSection: React.FC = () => {
  const { language, dir, isRtl, t } = useLanguage();
  const hero = getTreatmentRequestHero(language);

  const scrollToForm = () => {
    const formElement = document.getElementById('treatment-form-section');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="request-hero"
      className="relative min-h-[50vh] sm:min-h-[55vh] lg:min-h-[62vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white select-none"
      dir={dir}
    >
      {/* Calm Medical Tourism Photography Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={ASSETS.hero.requestTreatment.src}
          alt={ASSETS.hero.requestTreatment.alt}
          className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.05]"
          loading="eager"
        />
        {/* Soft atmospheric gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />
      </div>

      {/* Main Hero Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-16 sm:pt-28 sm:pb-20 text-center flex flex-col items-center justify-center">
        {/* Eyebrow Brand Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-200 text-xs sm:text-sm font-medium mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>ایرسا سیمرغ جهان</span>
          <span className="text-white/40 font-mono text-xs">|</span>
          <span className="text-slate-200 text-xs font-light tracking-wide">Airsa Simorgh Jahan</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.3] mb-6 text-center max-w-2xl"
        >
          {hero.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl font-light text-slate-200/90 leading-relaxed max-w-2xl mb-8 text-center"
        >
          {hero.subtitle}
        </motion.p>

        {/* Smooth Scroll Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            type="button"
            onClick={scrollToForm}
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md text-xs sm:text-sm font-medium transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{t.common.sendRequest || (isRtl ? 'شروع تکمیل فرم درخواست' : 'Start Treatment Request')}</span>
            <ChevronDown className="w-4 h-4 text-amber-300" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
