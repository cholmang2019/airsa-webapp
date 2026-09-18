import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Clock, Shield, Headphones } from 'lucide-react';
import { FINAL_CTA_DATA, CONSULTATION_URL } from '../data/content';

export const FinalCtaSection: React.FC = () => {
  return (
    <section 
      id="final-cta"
      className="relative py-24 sm:py-32 bg-slate-950 text-white overflow-hidden"
      dir="rtl"
    >
      {/* Subtle Ambient Glows */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center flex flex-col items-center">
        
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs sm:text-sm font-medium mb-8"
        >
          <span>مشاوره و ارزیابی محرمانه پرونده</span>
        </motion.div>

        {/* Section 6 Title: «مسیر درمان خود را با یک مشاوره آغاز کنید» */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.3] mb-6 text-center max-w-2xl"
        >
          {FINAL_CTA_DATA.title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-300 text-base sm:text-lg max-w-xl font-light leading-relaxed mb-12"
        >
          {FINAL_CTA_DATA.subtitle}
        </motion.p>

        {/* Final CTA Button: «درخواست مشاوره درمان» */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-full sm:w-auto"
        >
          <a
            id="final-cta-button"
            href={FINAL_CTA_DATA.buttonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 w-full sm:w-auto px-10 py-4.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-base sm:text-lg transition-all duration-300 shadow-[0_10px_35px_-5px_rgba(245,158,11,0.5)] hover:shadow-[0_15px_40px_-5px_rgba(245,158,11,0.7)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{FINAL_CTA_DATA.buttonText}</span>
            <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1.5" />
          </a>
        </motion.div>

        {/* Guarantees / Service Promises */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-14 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-slate-400 text-xs sm:text-sm"
        >
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-400" />
            <span>پاسخگویی سریع در کمتر از ۲۴ ساعت</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span>رازداری کامل اطلاعات و مدارک پزشکی</span>
          </div>
          <div className="flex items-center gap-2">
            <Headphones className="w-4 h-4 text-sky-400" />
            <span>مشاوره و ارزیابی اولیه بدون هزینه</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
