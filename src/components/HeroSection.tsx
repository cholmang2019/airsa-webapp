import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, ChevronDown } from 'lucide-react';
import { HERO_DATA } from '../data/content';
import heroPatientCareImg from '../assets/images/hero_patient_care_1788731701211.jpg';

export const HeroSection: React.FC = () => {
  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero-section"
      className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center overflow-hidden bg-slate-950 text-white select-none"
      dir="rtl"
    >
      {/* Background Image: International patient receiving professional high-end care */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroPatientCareImg}
          alt="مراقبت تخصصی و گردشگری سلامت بیماران بین‌المللی - ایرسا سیمرغ"
          className="w-full h-full object-cover object-center filter brightness-[0.65] contrast-[1.05]"
          loading="eager"
        />
        {/* Multi-layered luxury glassmorphism gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />
        
        {/* Subtle warm amber light beam */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 pt-24 pb-20 sm:pt-28 sm:pb-24 lg:py-28 text-right flex flex-col items-start justify-center">
        
        {/* Brand Eyebrow Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-200 text-xs sm:text-sm font-medium tracking-wide mb-6 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>{HERO_DATA.brandFa}</span>
          <span className="text-white/40 font-mono text-xs">|</span>
          <span className="text-slate-200 text-xs font-light uppercase tracking-wider">{HERO_DATA.brandEn}</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.3] sm:leading-[1.2] mb-6 max-w-3xl"
        >
          {HERO_DATA.title}
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-xl md:text-2xl font-light text-slate-100/90 leading-relaxed sm:leading-relaxed max-w-2xl mb-10 text-right"
        >
          {HERO_DATA.subtitle}
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
        >
          {/* Primary Consultation CTA */}
          <a
            id="hero-cta-consultation"
            href={HERO_DATA.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-semibold text-base transition-all duration-300 shadow-[0_10px_30px_-10px_rgba(245,158,11,0.5)] hover:shadow-[0_15px_35px_-5px_rgba(245,158,11,0.6)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{HERO_DATA.ctaText}</span>
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
          </a>

          {/* Secondary Quick Scroll */}
          <button
            id="hero-cta-services"
            onClick={scrollToServices}
            type="button"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md font-medium text-sm sm:text-base transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>مشاهده خدمات</span>
            <ChevronDown className="w-4 h-4 text-white/70" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};
