import React from 'react';
import { motion } from 'motion/react';
import { 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ArrowUpLeft, 
  Award
} from 'lucide-react';
import { VIP_HOSPITALITY_OVERVIEW, VIP_CONSULTATION_URL } from '../data/vipServicesData';

export const VipHospitalityStandardSection: React.FC = () => {
  return (
    <section
      id="vip-hospitality-standard"
      className="py-24 sm:py-36 bg-[#0e1526] text-white relative overflow-hidden border-t border-white/[0.08]"
      dir="rtl"
    >
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/3 left-1/4 -translate-y-1/2 w-96 h-96 bg-amber-400/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        
        {/* Two-Column Grid: Text on Right, Image on Left (in RTL) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Column 1 (Text & Highlights) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 text-right space-y-6"
          >
            {/* Tag Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-medium">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>{VIP_HOSPITALITY_OVERVIEW.tag}</span>
            </div>

            {/* Main Section Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.25]">
              {VIP_HOSPITALITY_OVERVIEW.title}
            </h2>

            {/* Subtitle / Philosophy */}
            <p className="text-amber-200/90 text-base sm:text-lg font-medium leading-relaxed">
              {VIP_HOSPITALITY_OVERVIEW.subtitle}
            </p>

            {/* Detailed Body Copy */}
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              {VIP_HOSPITALITY_OVERVIEW.description}
            </p>

            {/* Key Luxury Pillars / Highlights */}
            <div className="pt-2 space-y-3.5">
              {VIP_HOSPITALITY_OVERVIEW.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-amber-400/20 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-amber-400/15 text-amber-300 flex items-center justify-center shrink-0 mt-0.5 border border-amber-400/30">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white mb-0.5">{item.title}</h4>
                    <p className="text-xs text-slate-400 font-light leading-normal">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Action CTA Link */}
            <div className="pt-3">
              <a
                href={VIP_CONSULTATION_URL}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm font-semibold transition-all hover:border-amber-300/40 hover:shadow-[0_0_20px_rgba(251,191,36,0.15)] group"
              >
                <span>درخواست مشاوره و هماهنگی اختصاصی</span>
                <ArrowUpLeft className="w-4 h-4 text-amber-300 transition-transform group-hover:-translate-x-1" />
              </a>
            </div>
          </motion.div>

          {/* Column 2 (Photographic Luxury Composition with Badges) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] border border-white/[0.12] group bg-slate-900">
              <img
                src={VIP_HOSPITALITY_OVERVIEW.image}
                alt="تجربه تشریفات و میزبانی لوکس ایرسا سیمرغ"
                className="w-full h-auto aspect-[4/3] object-cover object-center transition-transform duration-700 group-hover:scale-105 filter brightness-[0.92] contrast-[1.05]"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Gradient Vignette Shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />

              {/* Bottom Glassmorphic Stats Overlay */}
              <div className="absolute bottom-5 right-5 left-5 p-4 rounded-2xl bg-slate-950/70 backdrop-blur-xl border border-white/[0.15] text-white shadow-xl">
                <div className="grid grid-cols-3 divide-x divide-x-reverse divide-white/10 text-center">
                  {VIP_HOSPITALITY_OVERVIEW.stats.map((stat, idx) => (
                    <div key={idx} className="px-2">
                      <div className="text-base sm:text-xl font-extrabold text-amber-200 tracking-tight font-serif">
                        {stat.value}
                      </div>
                      <div className="text-[11px] sm:text-xs text-slate-300 font-light mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Top Floating Badge */}
              <div className="absolute top-5 right-5 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/15 text-xs text-white">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>FLAWLESS LOGISTICS</span>
              </div>
            </div>

            {/* Subtle Floating Trust Badge on Opposite Corner */}
            <div className="hidden sm:flex absolute -bottom-6 -right-6 items-center gap-3.5 p-4 rounded-2xl bg-slate-900/90 backdrop-blur-xl border border-white/[0.15] shadow-2xl text-white z-10 max-w-xs">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-right">
                <span className="text-xs font-bold block text-slate-100">ناوگان و خدمات استاندارد</span>
                <span className="text-[11px] text-slate-400">انتقال بدون وقفه با برترین تجهیزات و امکانات</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
