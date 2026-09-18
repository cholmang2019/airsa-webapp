import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, HeartHandshake } from 'lucide-react';
import { INTRO_DATA, CONSULTATION_URL } from '../data/content';
import { ASSETS } from '../assets/assetManager';

export const IntroSection: React.FC = () => {
  return (
    <section 
      id="intro-section"
      className="relative py-24 sm:py-32 bg-white text-slate-900 overflow-hidden"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Split Layout: Image on one side, Content on the other */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Right Column: Text & Content (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start text-right"
          >
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs sm:text-sm font-semibold mb-4">
              <HeartHandshake className="w-4 h-4 text-amber-600" />
              <span>{INTRO_DATA.badge}</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.25] mb-6">
              {INTRO_DATA.title}
            </h2>

            {/* Lead & Explanation */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium mb-4">
              {INTRO_DATA.lead}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed sm:leading-loose mb-8 font-normal">
              {INTRO_DATA.description}
            </p>

            {/* Structured Coverage Points */}
            <div className="space-y-3.5 mb-8 w-full">
              {INTRO_DATA.highlights.map((item, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-xl bg-slate-50/90 border border-slate-200/80 flex items-start gap-3.5 text-right transition-colors hover:bg-amber-50/40"
                >
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    ۰{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust mark */}
            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium pt-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>تضمین رازداری پزشکی و پشتیبانی هماهنگ‌کننده مقیم</span>
            </div>
          </motion.div>

          {/* Left Column: Image of International Patient with Medical Coordinator (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100 group">
              <img
                src={ASSETS.team.medicalCoordinator.src}
                alt={ASSETS.team.medicalCoordinator.alt}
                className="w-full h-[450px] sm:h-[520px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              
              {/* Subtle glass gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-85" />

              {/* Glassmorphic floating card */}
              <div className="absolute bottom-6 right-6 left-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 shadow-xl text-right">
                <div className="flex items-center justify-between gap-2 mb-1.5">
                  <span className="text-xs font-bold text-amber-800">هماهنگ‌کننده اختصاصی بیمار</span>
                  <span className="text-[11px] font-mono text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded-full">
                    همراهی ۲۴/۷
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  ارائه مشاوره تخصصی، ترجمه پرونده‌های درمانی و برنامه‌ریزی دقیق بدون اتلاف وقت.
                </p>
              </div>
            </div>

            {/* Ambient decorative blur */}
            <div className="absolute -bottom-6 -left-6 w-56 h-56 bg-amber-500/10 rounded-full blur-3xl -z-10 pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
