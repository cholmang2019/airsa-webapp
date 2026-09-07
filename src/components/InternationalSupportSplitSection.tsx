import React from 'react';
import { motion } from 'motion/react';
import { 
  Users2, 
  ShieldCheck, 
  Layers, 
  ArrowUpLeft, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';
import { INTERNATIONAL_SUPPORT_DATA, OFFICIAL_CONSULTATION_URL } from '../data/internationalServicesData';

export const InternationalSupportSplitSection: React.FC = () => {
  return (
    <section
      id="international-support-section"
      className="py-24 sm:py-36 bg-[#0f172a] text-white relative overflow-hidden border-b border-white/[0.08]"
      dir="rtl"
    >
      {/* Ambient Lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Split Layout: 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Split Side 1: Photography (International Business Meeting) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] border border-white/[0.12] group bg-slate-900">
              <img
                src={INTERNATIONAL_SUPPORT_DATA.image}
                alt="جلسه مشاوره و مذاکرات بازرگانی بین‌المللی ایرسا سیمرغ"
                className="w-full h-auto aspect-[4/3] object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.90] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />

              {/* Bottom Glassmorphism Bar */}
              <div className="absolute bottom-5 right-5 left-5 p-4 rounded-2xl bg-slate-950/70 backdrop-blur-xl border border-white/[0.15] text-white flex items-center justify-between shadow-xl">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium">
                  <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>مدیریت یکپارچه پرونده‌های بین‌المللی</span>
                </div>
                <span className="text-[11px] font-mono tracking-wider px-3 py-1 rounded-full bg-amber-400/20 border border-amber-300/30 text-amber-200 font-semibold">
                  SINGLE POINT OF CONTACT
                </span>
              </div>
            </div>

            {/* Floating Trust Card */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 items-center gap-3.5 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/[0.15] shadow-2xl text-white z-10 max-w-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-right">
                <span className="text-xs font-bold block text-slate-100">پشتیبانی یکپارچه</span>
                <span className="text-[11px] text-slate-400">هماهنگی امور حقوقی، بانکی و اقامتی</span>
              </div>
            </div>
          </motion.div>

          {/* Split Side 2: Narrative Text & Support Explanation */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 text-right order-1 lg:order-2 space-y-6"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-medium">
              <Users2 className="w-3.5 h-3.5 text-amber-400" />
              <span>{INTERNATIONAL_SUPPORT_DATA.badge}</span>
            </div>

            {/* Title: «یک نقطه تماس برای مسیر شما» */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.25]">
              {INTERNATIONAL_SUPPORT_DATA.title}
            </h2>

            {/* Lead text */}
            <p className="text-amber-200/90 text-base sm:text-lg font-medium leading-relaxed">
              {INTERNATIONAL_SUPPORT_DATA.lead}
            </p>

            {/* Short text explaining coordinated support */}
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              {INTERNATIONAL_SUPPORT_DATA.description}
            </p>

            {/* Support Pillars */}
            <div className="space-y-3 pt-2">
              {INTERNATIONAL_SUPPORT_DATA.pillars.map((pillar, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-amber-400/25 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-amber-400/15 text-amber-300 flex items-center justify-center shrink-0 mt-0.5 border border-amber-400/30">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">{pillar.title}</h4>
                    <p className="text-xs text-slate-400 font-light leading-normal">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Section CTA */}
            <div className="pt-2">
              <a
                href={OFFICIAL_CONSULTATION_URL}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm font-semibold transition-all hover:border-amber-300/40 hover:shadow-[0_0_20px_rgba(251,191,36,0.15)] group"
              >
                <span>درخواست جلسه هماهنگی</span>
                <ArrowUpLeft className="w-4 h-4 text-amber-300 transition-transform group-hover:-translate-x-1" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
