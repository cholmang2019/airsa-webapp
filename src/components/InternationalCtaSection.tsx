import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpLeft, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import { INTERNATIONAL_CTA_DATA, OFFICIAL_CONSULTATION_URL } from '../data/internationalServicesData';

export const InternationalCtaSection: React.FC = () => {
  return (
    <section
      id="international-cta-section"
      className="py-24 sm:py-36 bg-[#070a12] text-white relative overflow-hidden"
      dir="rtl"
    >
      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Main Glassmorphic CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl p-8 sm:p-14 md:p-16 bg-gradient-to-b from-slate-900/90 to-slate-950/95 border border-white/[0.15] shadow-[0_30px_90px_-20px_rgba(0,0,0,0.8)] text-center overflow-hidden"
        >
          {/* Subtle Top Ambient Line */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400/50 to-transparent" />

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-medium mb-6">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{INTERNATIONAL_CTA_DATA.badge}</span>
          </div>

          {/* Required Title: «مسیر مناسب خود را پیدا کنید» */}
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.2] mb-6">
            {INTERNATIONAL_CTA_DATA.title}
          </h2>

          {/* Subtitle / Explanatory Text */}
          <p className="max-w-2xl mx-auto text-sm sm:text-lg text-slate-300 font-light leading-relaxed mb-10">
            {INTERNATIONAL_CTA_DATA.subtitle}
          </p>

          {/* Required Button: «مشاوره با کارشناس» -> https://medixmaster.com/contact-us/ */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              id="cta-final-button"
              href={OFFICIAL_CONSULTATION_URL}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4.5 rounded-xl bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 text-slate-950 font-extrabold text-base hover:opacity-95 shadow-[0_12px_40px_rgba(251,191,36,0.3)] hover:shadow-[0_15px_50px_rgba(251,191,36,0.4)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 group"
            >
              <span>{INTERNATIONAL_CTA_DATA.buttonText}</span>
              <ArrowUpLeft className="w-5 h-5 text-slate-950 transition-transform group-hover:-translate-x-1" />
            </a>
          </div>

          {/* Trust Checkpoints */}
          <div className="pt-8 border-t border-white/[0.08] flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-slate-400">
            {INTERNATIONAL_CTA_DATA.trustPoints.map((point, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400/80 shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>

        </motion.div>

      </div>
    </section>
  );
};
