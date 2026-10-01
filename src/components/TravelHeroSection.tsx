import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { getTravelHero } from '../data/travelServicesData';
import { useLanguage } from '../context/LanguageContext';

export const TravelHeroSection: React.FC = () => {
  const { language, dir, isRtl, t } = useLanguage();
  const hero = getTravelHero(language);
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const scrollToServices = () => {
    const servicesEl = document.getElementById('core-services-section');
    if (servicesEl) {
      servicesEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="travel-hero"
      className="relative min-h-[85vh] sm:min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white select-none"
      dir={dir}
    >
      {/* Background Photography */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.07 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          src={hero.image}
          alt={hero.title}
          className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-[1.05]"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-slate-950/70" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32 text-center flex flex-col items-center justify-center">
        {/* Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-200 text-xs sm:text-sm font-medium mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>{hero.badge}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.25] mb-6 text-center max-w-3xl"
        >
          {hero.title}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-xl md:text-2xl font-light text-slate-100/90 leading-relaxed max-w-2xl mb-10 text-center"
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
            id="travel-hero-cta"
            href={hero.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-base transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(245,158,11,0.5)] hover:shadow-[0_15px_35px_-5px_rgba(245,158,11,0.6)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{hero.ctaText}</span>
            <ArrowIcon className={`w-4 h-4 transition-transform duration-300 ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
          </a>

          <button
            type="button"
            onClick={scrollToServices}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md text-sm sm:text-base font-medium transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>{t.home.servicesTitle}</span>
            <ChevronDown className="w-4 h-4 text-white/70" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
