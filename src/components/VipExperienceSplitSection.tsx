import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Shield, Clock, Compass, ArrowUpLeft } from 'lucide-react';
import { VIP_EXPERIENCE_DATA, VIP_CONSULTATION_URL } from '../data/vipServicesData';

export const VipExperienceSplitSection: React.FC = () => {
  return (
    <section
      id="vip-experience-section"
      className="py-24 sm:py-36 bg-[#0f172a] text-white relative overflow-hidden border-t border-white/[0.08]"
      dir="rtl"
    >
      {/* Ambient Lighting for luxury depth */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Split Layout: 12 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Split Side 1: Premium Concierge Photography with Glassmorphic Accents */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] border border-white/[0.12] group bg-slate-900">
              <img
                src={VIP_EXPERIENCE_DATA.image}
                alt="همراه اختصاصی و کانسی‌یژ VIP در مسیر سفر"
                className="w-full h-auto aspect-[4/3] object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.92] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

              {/* Bottom Glassmorphism Bar */}
              <div className="absolute bottom-5 right-5 left-5 p-4 rounded-2xl bg-slate-950/60 backdrop-blur-xl border border-white/[0.15] text-white flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium">
                  <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>کانسی‌یژ اختصاصی ۲۴ ساعته</span>
                </div>
                <span className="text-[11px] font-mono tracking-wider px-3 py-1 rounded-full bg-amber-400/20 border border-amber-300/30 text-amber-200 font-semibold">
                  PRIVATE ATTACHÉ
                </span>
              </div>
            </div>

            {/* Subtle Floating Privilege Card */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3.5 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/[0.15] shadow-2xl text-white z-10 max-w-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30">
                <Shield className="w-5 h-5" />
              </div>
              <div className="text-right">
                <span className="text-xs font-bold block text-slate-100">پروتکل محرمانگی مطلق</span>
                <span className="text-[11px] text-slate-400">حفظ کامل حریم خصوصی و امنیت اطلاعات</span>
              </div>
            </div>
          </motion.div>

          {/* Split Side 2: Text Narrative & Pillars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 text-right order-1 lg:order-2 space-y-6"
          >
            {/* Section Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-medium">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>تجربه میزبانی اختصاصی</span>
            </div>

            {/* Section 2 Title: «یک همراه اختصاصی در مسیر شما» */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
              {VIP_EXPERIENCE_DATA.title}
            </h2>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-amber-100/90 font-light leading-relaxed">
              {VIP_EXPERIENCE_DATA.lead}
            </p>

            {/* In-depth explanation of personalized assistance */}
            <p className="text-xs sm:text-sm md:text-base text-slate-300 font-normal leading-relaxed">
              {VIP_EXPERIENCE_DATA.description}
            </p>

            {/* Three Refined Pillars */}
            <div className="space-y-3 pt-2">
              {VIP_EXPERIENCE_DATA.pillars.map((pillar, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-white/[0.04] hover:bg-white/[0.07] border border-white/[0.08] hover:border-amber-400/30 transition-all text-right group"
                >
                  <div className="flex items-center gap-2 text-slate-100 font-bold text-xs sm:text-sm mb-1 group-hover:text-amber-200 transition-colors">
                    <div className="w-2 h-2 rounded-full bg-amber-400 shrink-0" />
                    <span>{pillar.title}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed pr-4">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Action Link */}
            <div className="pt-2">
              <a
                href={VIP_CONSULTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-300 hover:text-amber-200 transition-colors cursor-pointer group"
              >
                <span>تنظیم جلسه مشاوره تشریفات و خدمات اختصاصی</span>
                <ArrowUpLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 group-hover:-translate-y-0.5" />
              </a>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
