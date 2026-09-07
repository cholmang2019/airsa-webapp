import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ChevronDown, Sparkles } from 'lucide-react';
import calmHeroImg from '../assets/images/request_hero_calm_1788732664259.jpg';

export const RequestHeroSection: React.FC = () => {
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
      dir="rtl"
    >
      {/* Calm Medical Tourism Photography Background */}
      <div className="absolute inset-0 z-0">
        <img
          src={calmHeroImg}
          alt="گردشگری سلامت ایرسا سیمرغ - شروع مسیر درمان در ایران"
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
          <span>ایرسا سیمرغ</span>
          <span className="text-white/40 font-mono text-xs">|</span>
          <span className="text-slate-200 text-xs font-light tracking-wide">IRSA SIMORGH</span>
        </motion.div>

        {/* Title: «مسیر درمان خود را آغاز کنید» */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.3] mb-6 text-center max-w-2xl"
        >
          «مسیر درمان خود را آغاز کنید»
        </motion.h1>

        {/* Subtitle: «اطلاعات اولیه خود را ارسال کنید تا کارشناسان ایرسا سیمرغ درخواست شما را بررسی کنند.» */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-lg md:text-xl font-light text-slate-200 leading-relaxed max-w-2xl mb-8 text-center"
        >
          «اطلاعات اولیه خود را ارسال کنید تا کارشناسان ایرسا سیمرغ درخواست شما را بررسی کنند.»
        </motion.p>

        {/* Quick scroll action */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onClick={scrollToForm}
          type="button"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-md border border-white/20 text-xs sm:text-sm text-slate-100 font-medium transition-all hover:translate-y-0.5 cursor-pointer"
        >
          <ShieldCheck className="w-4 h-4 text-emerald-300" />
          <span>تکمیل فرم درخواست درمان</span>
          <ChevronDown className="w-3.5 h-3.5 text-white/70" />
        </motion.button>

      </div>
    </section>
  );
};
