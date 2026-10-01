import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';
import { getVipHeroData, VIP_CONSULTATION_URL } from '../data/vipServicesData';
import { useLanguage } from '../context/LanguageContext';

export const VipHeroSection: React.FC = () => {
  const { language, dir, isRtl, t } = useLanguage();
  const hero = getVipHeroData(language);
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const scrollToExperience = () => {
    const el = document.getElementById('vip-experience-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="vip-hero"
      className="relative min-h-[92vh] sm:min-h-[95vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white select-none"
      dir={dir}
    >
      {/* Background Photography */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          src={hero.image}
          alt={hero.title}
          className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.08]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-28 sm:py-36 text-center flex flex-col items-center justify-center">
        {/* Luxury Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.07] backdrop-blur-xl border border-white/[0.15] text-amber-200/90 text-xs sm:text-sm font-medium mb-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span className="font-semibold text-slate-100">ایرسا سیمرغ جهان</span>
          <span className="text-white/30 font-mono text-xs">•</span>
          <span className="text-amber-200/80 font-light tracking-wider">VIP HOSPITALITY & CONCIERGE</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.2] mb-6 text-center max-w-3xl drop-shadow-sm"
        >
          {hero.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-xl md:text-2xl font-light text-slate-200/90 leading-relaxed max-w-2xl mb-12 text-center"
        >
          {hero.subtitle}
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            id="vip-hero-cta"
            href={VIP_CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-9 py-4 sm:py-4.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-sm sm:text-base transition-all duration-300 shadow-[0_12px_35px_-5px_rgba(245,158,11,0.5)] hover:shadow-[0_18px_45px_-5px_rgba(245,158,11,0.65)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>{hero.ctaText}</span>
            <ArrowIcon className={`w-4 h-4 transition-transform duration-300 ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
          </a>

          <button
            type="button"
            onClick={scrollToExperience}
            className="inline-flex items-center justify-center gap-2 px-7 py-4 sm:py-4.5 rounded-2xl bg-white/[0.08] hover:bg-white/[0.16] text-white border border-white/[0.18] backdrop-blur-xl text-sm sm:text-base font-medium transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>{t.home.learnMore}</span>
            <ChevronDown className="w-4 h-4 text-white/70" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
