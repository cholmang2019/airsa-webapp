import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, Sparkles, Clock, Compass } from 'lucide-react';
import { SEAMLESS_TRAVEL, CONSULTATION_URL } from '../data/travelServicesData';

export const SeamlessTravelSection: React.FC = () => {
  return (
    <section
      id="seamless-travel-section"
      className="py-24 sm:py-32 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200/70"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Split Layout: 12 Cols (6 image / 6 content) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Split Side 1: Premium Airport / Traveler Experience Photography */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(15,23,42,0.14)] border border-slate-200/90 group">
              <img
                src={SEAMLESS_TRAVEL.image}
                alt="تجربه لوکس و بدون دغدغه مسافر در فرودگاه بین‌المللی با همراهی کانسی‌یژ اختصاصی ایرسا سیمرغ"
                className="w-full h-auto aspect-[4/3] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
              
              {/* Bottom Caption Pill */}
              <div className="absolute bottom-5 right-5 left-5 text-white flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>همراهی کانسی‌یژ اختصاصی در تمام گام‌های سفر</span>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-slate-100">
                  VIP Concierge
                </span>
              </div>
            </div>

            {/* Subtle Floating Status Card */}
            <div className="hidden sm:flex absolute -bottom-6 -left-4 items-center gap-3.5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl text-slate-900 z-10 max-w-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-right">
                <span className="text-xs font-bold block text-slate-900">هماهنگی دقیق زمان‌بندی</span>
                <span className="text-[11px] text-slate-500">حذف کامل انتظارها و استرس ترانسفر</span>
              </div>
            </div>
          </motion.div>

          {/* Split Side 2: Text Narrative & Badges */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 text-right order-1 lg:order-2 space-y-6"
          >
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-semibold">
              <Compass className="w-3.5 h-3.5 text-amber-600" />
              <span>هماهنگی جامع و یکپارچه</span>
            </div>

            {/* Title: «سفر بدون دغدغه» */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.25]">
              {SEAMLESS_TRAVEL.title}
            </h2>

            {/* Lead & Explanation */}
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
              {SEAMLESS_TRAVEL.lead}
            </p>

            <p className="text-xs sm:text-sm md:text-base text-slate-600 font-normal leading-relaxed">
              {SEAMLESS_TRAVEL.description}
            </p>

            {/* Coordinated Services Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
              {SEAMLESS_TRAVEL.badges.map((badge, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-[#fafafc] border border-slate-200/90 text-right space-y-1 hover:border-amber-500/40 transition-colors"
                >
                  <div className="flex items-center gap-1.5 text-slate-900 font-bold text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{badge.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-500 leading-relaxed pt-0.5">
                    {badge.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick Action Link */}
            <div className="pt-2">
              <a
                href={CONSULTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-700 hover:text-amber-800 transition-colors"
              >
                <span>تنظیم هماهنگی یکپارچه پرواز، هتل و ترانسفر</span>
                <span className="text-amber-500 text-base">←</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
