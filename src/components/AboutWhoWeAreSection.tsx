import React from 'react';
import { motion } from 'motion/react';
import { Building, Sparkles, CheckCircle2 } from 'lucide-react';
import { ABOUT_WHO_WE_ARE_DATA } from '../data/aboutUsData';

export const AboutWhoWeAreSection: React.FC = () => {
  return (
    <section
      id="about-who-we-are-section"
      className="py-24 sm:py-36 bg-[#090d16] text-white relative overflow-hidden border-b border-white/[0.08]"
      dir="rtl"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Split Layout: 12 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Side 1: Authentic Photography */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative order-2 lg:order-1"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] border border-white/[0.12] group bg-slate-900">
              <img
                src={ABOUT_WHO_WE_ARE_DATA.image}
                alt="تیم هماهنگی و همراهی مسافران و بیماران بین‌المللی ایرسا سیمرغ"
                className="w-full h-auto aspect-[4/3] object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.92] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Vignette Shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

              {/* Glassmorphic Caption Bar */}
              <div className="absolute bottom-5 right-5 left-5 p-4 rounded-2xl bg-slate-950/70 backdrop-blur-xl border border-white/[0.15] text-white flex items-center justify-between shadow-xl">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-medium">
                  <Sparkles className="w-4 h-4 text-amber-300 shrink-0" />
                  <span>میزبانی متعهدانه و همراهی پیوسته</span>
                </div>
                <span className="text-[11px] font-mono tracking-wider px-3 py-1 rounded-full bg-amber-400/20 border border-amber-300/30 text-amber-200 font-semibold">
                  INTEGRATED HOSPITALITY
                </span>
              </div>
            </div>
          </motion.div>

          {/* Side 2: Narrative Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 text-right order-1 lg:order-2 space-y-6"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-medium">
              <Building className="w-3.5 h-3.5 text-amber-400" />
              <span>{ABOUT_WHO_WE_ARE_DATA.badge}</span>
            </div>

            {/* Core Required Statement */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.35]">
              {ABOUT_WHO_WE_ARE_DATA.statement}
            </h2>

            {/* Brief Explanation of Integrated Experience */}
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              {ABOUT_WHO_WE_ARE_DATA.elaboration}
            </p>

            {/* Distinct Highlights */}
            <div className="space-y-3 pt-2">
              {ABOUT_WHO_WE_ARE_DATA.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-amber-400/20 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-amber-400/15 text-amber-300 flex items-center justify-center shrink-0 mt-0.5 border border-amber-400/30">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-0.5">{item.title}</h3>
                    <p className="text-xs text-slate-400 font-light leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
