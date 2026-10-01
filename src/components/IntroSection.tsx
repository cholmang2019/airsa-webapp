import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, HeartHandshake, ArrowLeft, ArrowRight } from 'lucide-react';
import { getIntroData, CONSULTATION_URL } from '../data/content';
import { useLanguage } from '../context/LanguageContext';
import { ASSETS } from '../assets/assetManager';

export const IntroSection: React.FC = () => {
  const { language, dir, isRtl, t } = useLanguage();
  const intro = getIntroData(language);
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="intro-section"
      className="relative py-24 sm:py-32 bg-white text-slate-900 overflow-hidden"
      dir={dir}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Split Layout: Image on one side, Content on the other */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content Column (lg:col-span-7) */}
          <motion.div
            initial={{ opacity: 0, x: isRtl ? 20 : -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`lg:col-span-7 flex flex-col items-start ${isRtl ? 'text-right' : 'text-left'}`}
          >
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-800 text-xs sm:text-sm font-semibold mb-4">
              <HeartHandshake className="w-4 h-4 text-amber-600" />
              <span>{intro.badge}</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.25] mb-6">
              {intro.title}
            </h2>

            {/* Lead & Explanation */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium mb-4">
              {intro.lead}
            </p>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed sm:leading-loose mb-8 font-normal">
              {intro.description}
            </p>

            {/* Structured Coverage Points */}
            <div className="space-y-3.5 mb-8 w-full">
              {intro.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className={`p-4 rounded-xl bg-slate-50/90 border border-slate-200/80 flex items-start gap-3.5 ${
                    isRtl ? 'text-right' : 'text-left'
                  } transition-colors hover:bg-amber-50/40`}
                >
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Consultation Link */}
            <a
              id="intro-consultation-link"
              href={CONSULTATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-800 hover:text-amber-900 font-bold text-sm transition-colors group"
            >
              <span>{t.home.officialConsultation}</span>
              <ArrowIcon className={`w-4 h-4 transition-transform ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
            </a>
          </motion.div>

          {/* Visual Column (lg:col-span-5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-300 border border-slate-200">
              <img
                src={ASSETS.about.whoWeAreReception.src}
                alt={ASSETS.about.whoWeAreReception.alt}
                className="w-full h-[460px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

              {/* Floating Quality Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-white/40 shadow-lg text-slate-900">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className={isRtl ? 'text-right' : 'text-left'}>
                    <p className="text-xs font-bold text-slate-900">{t.footer.standardBadge}</p>
                    <p className="text-[11px] text-slate-500">{t.footer.slogan}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
