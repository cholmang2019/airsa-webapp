import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MapPin, Calendar, Users, Shield } from 'lucide-react';
import { INTRO_DATA, CONSULTATION_URL } from '../data/incomingTourismData';

export const TourismIntroSection: React.FC = () => {
  return (
    <section
      id="tourism-intro"
      className="py-24 sm:py-32 bg-[#fafafc] text-slate-900 relative overflow-hidden"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Split Layout: 12 Cols (6 image / 6 content) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Split Side 1: Authentic Photography of International Tourist Experiencing Iran */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(15,23,42,0.12)] border border-slate-200/80 group">
              <img
                src={INTRO_DATA.image}
                alt="تجربه گردشگر بین‌المللی در حیاط سنتی شیراز، ایران"
                className="w-full h-auto aspect-[4/3] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
              
              {/* Floating Overlay Badge with subtle authentic detail */}
              <div className="absolute bottom-5 right-5 left-5 text-white flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>شیراز، عمارت‌های تاریخی و حیاط‌های دلنشین</span>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-slate-100">
                  تجربه دست‌اول
                </span>
              </div>
            </div>

            {/* Subtle decorative accent pill */}
            <div className="hidden sm:flex absolute -bottom-6 -left-4 items-center gap-3 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl text-slate-900 z-10 max-w-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div className="text-right">
                <span className="text-xs font-bold block text-slate-900">سفری با ریتم دلخواه</span>
                <span className="text-[11px] text-slate-500">بدون شتاب‌زدگی تورهای کلیشه‌ای</span>
              </div>
            </div>
          </motion.div>

          {/* Split Side 2: Narrative & Core Pillars */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 text-right order-1 lg:order-2 space-y-6"
          >
            {/* Minimal Sub-tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-semibold">
              <Users className="w-3.5 h-3.5 text-amber-600" />
              <span>گردشگری ورودی اختصاصی</span>
            </div>

            {/* Title: «سفر شما، با یک برنامه اختصاصی» */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.25]">
              {INTRO_DATA.title}
            </h2>

            {/* Lead & Narrative */}
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
              {INTRO_DATA.lead}
            </p>

            <div className="space-y-4 text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
              {INTRO_DATA.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* 4 Pillars Card View Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {INTRO_DATA.pillars.map((pillar, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-sm text-right space-y-1 hover:border-amber-500/30 transition-colors"
                >
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-xs sm:text-sm">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>{pillar.title}</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-500 pr-6 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Direct Consultation Link */}
            <div className="pt-2">
              <a
                href={CONSULTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-amber-700 hover:text-amber-800 transition-colors"
              >
                <span>گفتگو با مشاور ارشد سفر به ایران</span>
                <span className="text-amber-500 text-base">←</span>
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
