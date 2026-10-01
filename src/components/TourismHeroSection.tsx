import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import { getTourismHero } from '../data/incomingTourismData';
import { useLanguage } from '../context/LanguageContext';

export const TourismHeroSection: React.FC = () => {
  const { language, dir, isRtl, t } = useLanguage();
  const hero = getTourismHero(language);
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const scrollToNext = () => {
    const nextEl = document.getElementById('tourism-intro');
    if (nextEl) {
      nextEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="tourism-hero"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-slate-950 text-white select-none"
      dir={dir}
    >
      {/* Cinematic Photograph Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          src={hero.image}
          alt={hero.title}
          className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-[1.05]"
          loading="eager"
        />
        {/* Layered cinematic vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-slate-950/70" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32 text-center flex flex-col items-center justify-center">
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-200 text-xs sm:text-sm font-medium mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>{hero.badge || t.tourism.experienceBadge}</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.25] mb-6 max-w-4xl"
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
            id="tourism-hero-cta"
            href={hero.ctaUrl || 'https://medixmaster.com/contact-us/'}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-base transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(245,158,11,0.5)] hover:shadow-[0_15px_35px_-5px_rgba(245,158,11,0.6)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{hero.ctaText}</span>
            <ArrowIcon className={`w-4 h-4 transition-transform duration-300 ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
          </a>

          <button
            type="button"
            onClick={scrollToNext}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md text-sm sm:text-base font-medium transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>{t.home?.discoverIran || 'کشف زیبایی‌های ایران'}</span>
            <ChevronDown className="w-4 h-4 text-white/70" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};
