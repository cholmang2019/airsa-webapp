import React from 'react';
import { motion } from 'motion/react';
import { Compass, ArrowLeft, Sparkles, ChevronDown } from 'lucide-react';
import { HERO_DATA, CONSULTATION_URL } from '../data/incomingTourismData';

export const TourismHeroSection: React.FC = () => {
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
      dir="rtl"
    >
      {/* Cinematic Photograph Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.16, 1, 0.3, 1] }}
          src={HERO_DATA.image}
          alt="شکوه معماری و چشم‌اندازهای ایران - ایرسا سیمرغ"
          className="w-full h-full object-cover object-center filter brightness-[0.62] contrast-[1.05]"
          loading="eager"
        />
        
        {/* Layered cinematic vignette and atmospheric lighting */}
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
          <span>ایرسا سیمرغ</span>
          <span className="text-white/40 font-mono text-xs">|</span>
          <span className="text-slate-200 text-xs font-light tracking-wider">گردشگری ورودی به ایران</span>
        </motion.div>

        {/* Section 1 Title: «ایران را به شیوه خود تجربه کنید» */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.25] mb-6 max-w-4xl"
        >
          {HERO_DATA.title}
        </motion.h1>

        {/* Section 1 Subtitle: «خدمات تخصصی گردشگری ورودی برای مسافرانی که میخواهند ایران را متفاوت تجربه کنند.» */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-xl md:text-2xl font-light text-slate-200 leading-relaxed max-w-3xl mb-10 text-center"
        >
          {HERO_DATA.subtitle}
        </motion.p>

        {/* Section 1 CTA: «برنامه سفر من را طراحی کنید» */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            id="hero-cta-button"
            href={CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-8 sm:px-10 py-4 sm:py-4.5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm sm:text-base transition-all duration-300 shadow-[0_12px_35px_-5px_rgba(245,158,11,0.5)] hover:shadow-[0_18px_45px_-5px_rgba(245,158,11,0.7)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>{HERO_DATA.ctaText}</span>
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </a>

          <button
            onClick={scrollToNext}
            type="button"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-medium text-slate-200 transition-colors cursor-pointer"
          >
            <Compass className="w-4 h-4 text-amber-300" />
            <span>کشف جزئیات سفر</span>
          </button>
        </motion.div>

      </div>

      {/* Subtle Bottom Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        onClick={scrollToNext}
        className="absolute bottom-6 sm:bottom-8 z-10 flex flex-col items-center gap-1.5 cursor-pointer text-slate-400 hover:text-white transition-colors"
      >
        <span className="text-[11px] font-light tracking-widest text-slate-300">مشاهده بخش‌ها</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
};
