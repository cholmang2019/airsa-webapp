import React from 'react';
import { motion } from 'motion/react';
import { Compass, Sparkles, ShieldCheck } from 'lucide-react';
import { ABOUT_APPROACH_DATA } from '../data/aboutUsData';

export const AboutApproachSection: React.FC = () => {
  return (
    <section
      id="about-approach-section"
      className="py-24 sm:py-36 bg-[#080c15] text-white relative overflow-hidden border-b border-white/[0.08]"
      dir="rtl"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Two-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1: Rich Text & Paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-right order-1"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-medium">
              <Compass className="w-3.5 h-3.5 text-amber-400" />
              <span>{ABOUT_APPROACH_DATA.badge}</span>
            </div>

            {/* Main Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.25]">
              {ABOUT_APPROACH_DATA.title}
            </h2>

            {/* Paragraphs with high typography craftsmanship */}
            <div className="space-y-4 pt-2">
              {ABOUT_APPROACH_DATA.paragraphs.map((para, idx) => (
                <p
                  key={idx}
                  className="text-sm sm:text-base text-slate-300 font-light leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </div>

            {/* 3 Metric / Feature Cards */}
            <div className="pt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 border-t border-white/[0.08]">
              {ABOUT_APPROACH_DATA.stats.map((stat, i) => (
                <div
                  key={i}
                  className="p-4 rounded-2xl bg-slate-900/60 border border-white/[0.08] hover:border-amber-400/25 transition-colors"
                >
                  <div className="text-xl sm:text-2xl font-extrabold text-amber-300 font-mono mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white mb-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-400 font-light">
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Authentic Photography & Floating Tag */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative order-2"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] border border-white/[0.12] group bg-slate-900">
              <img
                id="about-approach-image"
                src={ABOUT_APPROACH_DATA.image}
                alt="جلسه رسمی مذاکرات و مشاوره راهبردی مدیران و همراهان ایرسا سیمرغ"
                className="w-full h-auto aspect-[3/4] object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.95] contrast-[1.03]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Vignette Shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

              {/* Floating Badge Top */}
              <div className="absolute top-4 right-4 z-10 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/20 text-xs text-amber-200">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                <span>تضمین کیفیت و استانداردهای میزبانی</span>
              </div>

              {/* Glassmorphic Caption Bar */}
              <div className="absolute bottom-5 right-5 left-5 p-4 rounded-2xl bg-slate-950/75 backdrop-blur-xl border border-white/[0.15] text-white flex items-center justify-between shadow-xl">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium">
                  <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>پشتیبانی همه‌جانبه و پیوسته</span>
                </div>
                <span className="text-[11px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-amber-400/20 border border-amber-300/30 text-amber-200 font-semibold">
                  SEAMLESS CARE
                </span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
