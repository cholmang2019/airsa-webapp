import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowLeft, ChevronDown, ShieldCheck } from 'lucide-react';
import { VIP_HERO_DATA, VIP_CONSULTATION_URL } from '../data/vipServicesData';

export const VipHeroSection: React.FC = () => {
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
      dir="rtl"
    >
      {/* Cinematic Ultra-Luxury Travel Photography Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.img
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          src={VIP_HERO_DATA.image}
          alt="خدمات VIP اختصاصی ایرسا سیمرغ - سفر فراتر از انتظار"
          className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.08]"
          loading="eager"
        />

        {/* Quiet Luxury Gradient & Atmospheric Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-slate-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/80" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-28 sm:py-36 text-center flex flex-col items-center justify-center">
        
        {/* Subtle Luxury Glassmorphism Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.07] backdrop-blur-xl border border-white/[0.15] text-amber-200/90 text-xs sm:text-sm font-medium mb-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span className="font-semibold text-slate-100">ایرسا سیمرغ</span>
          <span className="text-white/30 font-mono text-xs">•</span>
          <span className="text-amber-200/80 font-light tracking-wider">VIP HOSPITALITY & CONCIERGE</span>
        </motion.div>

        {/* Section 1 Title: «سفر، فراتر از انتظار» */}
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.2] mb-6 text-center max-w-3xl drop-shadow-sm"
        >
          {VIP_HERO_DATA.title}
        </motion.h1>

        {/* Section 1 Subtitle: «خدمات VIP اختصاصی برای تجربه‌ای آرام، شخصی‌سازی‌شده و حرفه‌ای.» */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-xl md:text-2xl font-light text-slate-200/90 leading-relaxed max-w-2xl mb-12 text-center"
        >
          {VIP_HERO_DATA.subtitle}
        </motion.p>

        {/* CTA: «درخواست خدمات VIP» */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            id="vip-hero-cta-button"
            href={VIP_CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-10 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-extrabold text-base sm:text-lg transition-all duration-300 shadow-[0_12px_45px_-5px_rgba(245,158,11,0.5)] hover:shadow-[0_20px_55px_-5px_rgba(245,158,11,0.7)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>{VIP_HERO_DATA.ctaText}</span>
            <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1.5" />
          </a>

          <button
            onClick={scrollToExperience}
            type="button"
            className="inline-flex items-center gap-2 px-7 py-4 sm:py-5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] backdrop-blur-xl border border-white/[0.15] text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-all cursor-pointer"
          >
            <span>مشاهده جزئیات خدمات</span>
            <ChevronDown className="w-4 h-4 text-amber-300" />
          </button>
        </motion.div>

        {/* Subtle Reassurance Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 flex items-center gap-2 text-xs text-slate-400 font-light"
        >
          <ShieldCheck className="w-4 h-4 text-amber-400/80" />
          <span>پروتکل کامل محرمانگی، همراهی تشریفاتی و پاسخگویی مستقیم ۲۴/۷</span>
        </motion.div>

      </div>

      {/* Gentle Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        onClick={scrollToExperience}
        className="absolute bottom-6 sm:bottom-8 z-10 flex flex-col items-center gap-1 cursor-pointer text-slate-400 hover:text-white transition-colors"
      >
        <span className="text-[10px] font-mono tracking-widest text-slate-300 uppercase">EXPLORE VIP CARE</span>
        <ChevronDown className="w-4 h-4" />
      </motion.div>
    </section>
  );
};
