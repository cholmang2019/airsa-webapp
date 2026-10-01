import React from 'react';
import { motion } from 'motion/react';
import {
  FileCheck,
  Stamp,
  PlaneLanding,
  Hotel,
  Sparkles,
  PlaneTakeoff,
  Check,
  ArrowLeft,
  ArrowRight,
} from 'lucide-react';
import { getPersonalizedSteps, CONSULTATION_URL } from '../data/incomingTourismData';
import { useLanguage } from '../context/LanguageContext';

const stepIcons = [
  FileCheck,
  Stamp,
  PlaneLanding,
  Hotel,
  Sparkles,
  PlaneTakeoff,
];

export const PersonalizedJourneySection: React.FC = () => {
  const { language, dir, isRtl, t } = useLanguage();
  const steps = getPersonalizedSteps(language);
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="personalized-journey"
      className="py-24 sm:py-32 bg-white text-slate-900 relative border-t border-slate-200/70"
      dir={dir}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-800 text-xs font-semibold mb-4">
            <span>{t.tourism.journeyBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.25] mb-5">
            {t.tourism.journeyTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            {t.tourism.journeySubtitle}
          </p>
        </div>

        {/* Journey Flow Ribbon (Desktop) */}
        <div className="hidden lg:flex items-center justify-between relative mb-16 px-4">
          <div className="absolute top-1/2 right-10 left-10 h-0.5 bg-slate-200 -translate-y-1/2 z-0" />

          {steps.map((step, idx) => {
            const IconComp = stepIcons[idx] || Sparkles;
            return (
              <div key={step.stepEn} className="relative z-10 flex flex-col items-center group">
                <div className="w-14 h-14 rounded-2xl bg-white border-2 border-slate-200 group-hover:border-amber-500 shadow-sm flex items-center justify-center text-slate-700 group-hover:text-amber-600 transition-all duration-300 group-hover:scale-110">
                  <IconComp className="w-6 h-6" />
                </div>
                <div className="mt-3 text-center">
                  <span className="font-mono text-xs font-bold text-amber-600 block">{step.stepEn}</span>
                  <span className="text-xs font-bold text-slate-800">{step.title}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 6 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => {
            const IconComp = stepIcons[idx] || Sparkles;
            return (
              <motion.div
                key={step.stepEn}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`p-6 sm:p-7 rounded-3xl bg-[#fafafc] border border-slate-200/80 hover:border-amber-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between ${
                  isRtl ? 'text-right' : 'text-left'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-md bg-amber-500/10 text-amber-800">
                      {step.stepEn}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-700 flex items-center justify-center shadow-xs">
                      <IconComp className="w-5 h-5 text-amber-600" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-5">
                    {step.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 space-y-2">
                  {(step.highlights || step.details || []).map((h, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <a
            id="journey-start-cta"
            href={CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-slate-900 hover:bg-amber-600 text-white font-bold text-sm transition-all duration-300 shadow-md group"
          >
            <span>{t.tourism.planYourTrip}</span>
            <ArrowIcon className={`w-4 h-4 transition-transform ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
          </a>
        </div>
      </div>
    </section>
  );
};
