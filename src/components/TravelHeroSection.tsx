import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ChevronDown, Sparkles, Compass } from 'lucide-react';
import { HERO_CONTENT, CONSULTATION_URL } from '../data/travelServicesData';

export const TravelHeroSection: React.FC = () => {
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
      dir="rtl"
    >
      {/* Premium International Travel Photography Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.07 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          src={HERO_CONTENT.image}
          alt="خدمات بین‌المللی سفر ایرسا سیمرغ - پرواز، ویزا، اقامت و ترانسفر"
          className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-[1.05]"
          loading="eager"
        />

        {/* Cinematic Vignette & Ambient Layering */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/45 to-slate-950/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-transparent to-slate-950/70" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-24 sm:py-32 text-center flex flex-col items-center justify-center">
        
        {/* Subtle Brand Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-200 text-xs sm:text-sm font-medium mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>ایرسا سیمرغ</span>
          <span className="text-white/40 font-mono text-xs">|</span>
          <span className="text-slate-200 text-xs font-light tracking-wide">خدمات جامع سفر</span>
        </motion.div>

        {/* Section 1 Title: «همه چیز برای یک سفر مطمئن» */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.25] mb-6 text-center max-w-3xl"
        >
          {HERO_CONTENT.title}
        </motion.h1>

        {/* Section 1 Subtitle: «خدمات سفر ایرسا سیمرغ از بلیت و ویزا تا اقامت و ترانسفر.» */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-xl md:text-2xl font-light text-slate-200 leading-relaxed max-w-2xl mb-10 text-center"
        >
          {HERO_CONTENT.subtitle}
        </motion.p>

        {/* Hero Actions */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button
            onClick={scrollToServices}
            type="button"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm sm:text-base transition-all duration-300 shadow-[0_12px_35px_-5px_rgba(245,158,11,0.5)] hover:shadow-[0_18px_45px_-5px_rgba(245,158,11,0.7)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <Compass className="w-4 h-4 text-slate-950" />
            <span>{HERO_CONTENT.ctaText}</span>
            <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
          </button>

          <a
            href={CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-slate-200 hover:text-white transition-all cursor-pointer"
          >
            <span>{HERO_CONTENT.consultationText}</span>
            <ArrowLeft className="w-4 h-4 text-amber-300" />
          </a>
        </motion.div>

      </div>

      {/* Subtle Scroll Hint */}
      <motion.div
        animate={{ y: [0, 5, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        onClick={scrollToServices}
        className="absolute bottom-6 sm:bottom-8 z-10 flex flex-col items-center gap-1 cursor-pointer text-slate-400 hover:text-white transition-colors"
      >
        <span className="text-[11px] font-light tracking-wider text-slate-300">ارکان خدمات سفر</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
};
