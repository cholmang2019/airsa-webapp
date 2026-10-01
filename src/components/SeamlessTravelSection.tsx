import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Sparkles, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { getSeamlessTravel, CONSULTATION_URL } from '../data/travelServicesData';
import { useLanguage } from '../context/LanguageContext';

export const SeamlessTravelSection: React.FC = () => {
  const { language, dir, isRtl, t } = useLanguage();
  const seamless = getSeamlessTravel(language);
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="seamless-travel-section"
      className="py-24 sm:py-32 bg-white text-slate-900 relative overflow-hidden border-t border-slate-200/70"
      dir={dir}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Split Layout: 12 Cols (6 image / 6 content) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Split Side 1: Premium Airport / Traveler Experience Photography */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 25 : -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`lg:col-span-6 relative ${isRtl ? 'order-2 lg:order-1' : 'order-2 lg:order-1'}`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_60px_-15px_rgba(15,23,42,0.14)] border border-slate-200/90 group">
              <img
                src={seamless.image}
                alt={seamless.title}
                className="w-full h-auto aspect-[4/3] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />

              {/* Bottom Caption Pill */}
              <div className="absolute bottom-5 right-5 left-5 text-white flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{t.home.conciergeSupport}</span>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-slate-100">
                  VIP Concierge
                </span>
              </div>
            </div>

            {/* Floating Status Card */}
            <div
              className={`hidden sm:flex absolute -bottom-6 ${
                isRtl ? '-left-4 text-right' : '-right-4 text-left'
              } items-center gap-3.5 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl text-slate-900 z-10 max-w-xs`}
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold block text-slate-900">{t.home.punctualCoordination}</span>
                <span className="text-[11px] text-slate-500">{t.home.stressFreeTransfers}</span>
              </div>
            </div>
          </motion.div>

          {/* Split Side 2: Text Narrative & Badges */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -25 : 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`lg:col-span-6 flex flex-col items-start ${
              isRtl ? 'text-right order-1 lg:order-2' : 'text-left order-1 lg:order-2'
            }`}
          >
            {/* Category Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>{seamless.badge}</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.2] mb-6">
              {seamless.title}
            </h2>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed sm:leading-loose mb-8 font-normal">
              {seamless.description}
            </p>

            {/* Checklist of 4 Core Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10 w-full">
              {seamless.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 transition-colors hover:bg-amber-50/40 ${
                    isRtl ? 'text-right' : 'text-left'
                  }`}
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-bold text-slate-800 leading-relaxed">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Consultation Link */}
            <a
              id="seamless-cta-btn"
              href={CONSULTATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-slate-950 hover:bg-amber-600 text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-slate-950/20 hover:shadow-amber-600/30 group"
            >
              <span>{t.home.bookTripCoordination}</span>
              <ArrowIcon className={`w-4 h-4 transition-transform ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
