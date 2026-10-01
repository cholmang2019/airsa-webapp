import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MapPin, Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import { getTourismIntro } from '../data/incomingTourismData';
import { useLanguage } from '../context/LanguageContext';

export const TourismIntroSection: React.FC = () => {
  const { language, dir, isRtl, t } = useLanguage();
  const intro = getTourismIntro(language);
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="tourism-intro"
      className="py-24 sm:py-32 bg-[#fafafc] text-slate-900 relative overflow-hidden"
      dir={dir}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Split Side 1: Photography */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 25 : -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`lg:col-span-6 relative ${isRtl ? 'order-2 lg:order-1' : 'order-2 lg:order-1'}`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-[0_25px_50px_-12px_rgba(15,23,42,0.12)] border border-slate-200/80 group">
              <img
                src={intro.image}
                alt={intro.title}
                className="w-full h-auto aspect-[4/3] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />

              <div className="absolute bottom-5 right-5 left-5 text-white flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-medium">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{intro.locationCaption}</span>
                </div>
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-slate-100">
                  VIP Experience
                </span>
              </div>
            </div>

            <div
              className={`hidden sm:flex absolute -bottom-6 ${
                isRtl ? '-left-4 text-right' : '-right-4 text-left'
              } items-center gap-3 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200 shadow-xl text-slate-900 z-10 max-w-xs`}
            >
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold block text-slate-900">{t.home.authenticRhythm}</span>
                <span className="text-[11px] text-slate-500">{t.home.noRushTours}</span>
              </div>
            </div>
          </motion.div>

          {/* Split Side 2: Narrative & Core Pillars */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? -25 : 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`lg:col-span-6 flex flex-col items-start ${
              isRtl ? 'text-right order-1 lg:order-2' : 'text-left order-1 lg:order-2'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-semibold mb-4">
              <span>{intro.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.25] mb-6">
              {intro.title}
            </h2>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed sm:leading-loose mb-6 font-normal">
              {intro.paragraph1}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed sm:leading-loose mb-8 font-normal">
              {intro.paragraph2}
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10 w-full">
              {intro.pillars.map((pillar, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-200/80 shadow-sm ${
                    isRtl ? 'text-right' : 'text-left'
                  }`}
                >
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed">
                    {pillar}
                  </span>
                </div>
              ))}
            </div>

            <a
              id="tourism-intro-cta"
              href={intro.ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-slate-900 hover:bg-amber-600 text-white font-bold text-sm transition-all duration-300 shadow-md group"
            >
              <span>{intro.ctaText}</span>
              <ArrowIcon className={`w-4 h-4 transition-transform ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
