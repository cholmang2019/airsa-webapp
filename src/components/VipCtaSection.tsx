import React from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Sparkles, ShieldCheck, Lock, Headphones } from 'lucide-react';
import { VIP_CTA_DATA, VIP_CONSULTATION_URL } from '../data/vipServicesData';

export const VipCtaSection: React.FC = () => {
  return (
    <section
      id="vip-cta-section"
      className="py-28 sm:py-40 bg-slate-950 text-white relative overflow-hidden border-t border-white/[0.08]"
      dir="rtl"
    >
      {/* Subtle Radial Glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/[0.08] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-indigo-500/[0.06] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 text-center flex flex-col items-center">
        
        {/* Subtle Brand Tag */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.06] backdrop-blur-xl border border-white/[0.12] text-amber-200/90 text-xs sm:text-sm font-medium mb-8 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>ایرسا سیمرغ | خدمات تشریفات اختصاصی VIP</span>
        </div>

        {/* Section 6 Title: «تجربه VIP خود را طراحی کنید» */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-6 leading-[1.2] text-center"
        >
          {VIP_CTA_DATA.title}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-slate-300 text-sm sm:text-base md:text-lg max-w-2xl font-light leading-relaxed mb-10 text-center"
        >
          {VIP_CTA_DATA.subtitle}
        </motion.p>

        {/* Button: «درخواست مشاوره» */}
        <motion.a
          id="vip-final-cta-button"
          href={VIP_CONSULTATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="group inline-flex items-center justify-center gap-3 px-10 py-4 sm:py-5 rounded-2xl bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-extrabold text-base sm:text-lg transition-all duration-300 shadow-[0_12px_45px_-5px_rgba(245,158,11,0.5)] hover:shadow-[0_20px_55px_-5px_rgba(245,158,11,0.7)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
        >
          <span>{VIP_CTA_DATA.buttonText}</span>
          <ArrowLeft className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1.5" />
        </motion.a>

        {/* VIP Reassurance Badges */}
        <div className="mt-16 pt-8 border-t border-white/[0.08] w-full flex flex-wrap items-center justify-center gap-6 sm:gap-12 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-amber-400/90" />
            <span>پروتکل کامل محرمانگی و عدم افشای اطلاعات</span>
          </div>
          <div className="flex items-center gap-2">
            <Headphones className="w-4 h-4 text-amber-400/90" />
            <span>مدیریت مستقیم توسط کارشناس ارشد تشریفات</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400/90" />
            <span>تضمین رضایت و آرامش کامل در تمام طول سفر</span>
          </div>
        </div>

      </div>
    </section>
  );
};
