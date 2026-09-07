import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, MessageSquare, Headphones, ShieldCheck } from 'lucide-react';
import { CTA_CONTENT, CONSULTATION_URL } from '../data/travelServicesData';

export const TravelCtaSection: React.FC = () => {
  return (
    <section
      id="travel-cta-section"
      className="py-24 sm:py-32 bg-slate-950 text-white relative overflow-hidden"
      dir="rtl"
    >
      {/* Subtle Ambient Radial Glows */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center flex flex-col items-center">
        
        {/* Simorgh Brand Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-xs sm:text-sm font-medium mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5" />
          <span>ایرسا سیمرغ | همراه مطمئن سفرهای شما</span>
        </div>

        {/* Title: «برای سفر خود به راهنمایی نیاز دارید؟» */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.25] text-center"
        >
          {CTA_CONTENT.title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed mb-10 text-center"
        >
          {CTA_CONTENT.subtitle}
        </motion.p>

        {/* Button: «درخواست مشاوره» */}
        <motion.a
          id="travel-consultation-cta-button"
          href={CONSULTATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="group inline-flex items-center justify-center gap-3 px-10 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-base sm:text-lg transition-all duration-300 shadow-[0_12px_40px_-5px_rgba(245,158,11,0.5)] hover:shadow-[0_18px_50px_-5px_rgba(245,158,11,0.7)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          <span>{CTA_CONTENT.buttonText}</span>
          <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1.5" />
        </motion.a>

        {/* Reassurance Features */}
        <div className="mt-14 pt-8 border-t border-white/10 w-full flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Headphones className="w-4 h-4 text-amber-400" />
            <span>مشاوره تخصصی و پاسخگویی سریع</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>پشتیبانی قانونی و تضمین کلیه خدمات</span>
          </div>
          <div className="flex items-center gap-2">
            <MessageSquare className="w-4 h-4 text-sky-400" />
            <span>ارائه راهکارهای متناسب با بودجه و برنامه سفر</span>
          </div>
        </div>

      </div>
    </section>
  );
};
