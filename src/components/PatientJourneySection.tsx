import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageSquare,
  FileCheck2,
  UserCheck2,
  FileText,
  Luggage,
  Activity,
  HeartHandshake,
  PlaneLanding,
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { getPatientJourney, CONSULTATION_URL } from '../data/content';
import { useLanguage } from '../context/LanguageContext';

const STEP_ICONS = [
  MessageSquare,
  FileCheck2,
  UserCheck2,
  FileText,
  Luggage,
  Activity,
  HeartHandshake,
  PlaneLanding,
];

export const PatientJourneySection: React.FC = () => {
  const { language, dir, isRtl, t } = useLanguage();
  const journey = getPatientJourney(language);
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const activeStep = journey[activeStepIndex] || journey[0];
  const ActiveIcon = STEP_ICONS[activeStepIndex] || STEP_ICONS[0];
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="patient-journey"
      className="py-24 sm:py-32 bg-white text-slate-900 overflow-hidden"
      dir={dir}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-semibold mb-3">
            <span>{t.home.journeyBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            {t.home.journeyTitle}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            {t.home.journeySubtitle}
          </p>
        </div>

        {/* DESKTOP TIMELINE (Horizontal 8 Steps) */}
        <div className="hidden lg:block relative mb-14">
          {/* Track Line */}
          <div className="absolute top-9 right-8 left-8 h-[2px] bg-slate-200 z-0">
            {/* Animated accent progress line */}
            <div
              className={`h-full bg-gradient-to-r from-amber-500 to-amber-600 transition-all duration-500`}
              style={{
                width: `${(activeStepIndex / 7) * 100}%`,
                float: isRtl ? 'right' : 'left',
              }}
            />
          </div>

          {/* 8 Steps Nodes */}
          <div className="relative z-10 grid grid-cols-8 gap-2">
            {journey.map((step, idx) => {
              const Icon = STEP_ICONS[idx];
              const isPassed = idx <= activeStepIndex;
              const isCurrent = idx === activeStepIndex;

              return (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className="flex flex-col items-center text-center group focus:outline-none"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 mb-3 ${
                      isCurrent
                        ? 'bg-amber-500 text-white ring-4 ring-amber-500/20 shadow-lg scale-105'
                        : isPassed
                        ? 'bg-amber-100 text-amber-900'
                        : 'bg-white border border-slate-200 text-slate-400 group-hover:border-slate-300'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[11px] font-mono font-bold text-slate-400 mb-0.5">
                    0{idx + 1}
                  </span>

                  <span
                    className={`text-xs font-bold leading-snug line-clamp-2 px-1 ${
                      isCurrent ? 'text-amber-800' : 'text-slate-600 group-hover:text-slate-900'
                    }`}
                  >
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ACTIVE STEP CARD VIEW */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStepIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className={`bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200/80 shadow-md ${
                isRtl ? 'text-right' : 'text-left'
              }`}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-200/70">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/20 shrink-0">
                    <ActiveIcon className="w-8 h-8" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-amber-700 bg-amber-100/80 px-2.5 py-0.5 rounded-md">
                      0{activeStepIndex + 1} / 08
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                      {activeStep.title}
                    </h3>
                  </div>
                </div>

                {/* Next/Previous Controls */}
                <div className="flex items-center gap-2 self-end sm:self-auto">
                  <button
                    type="button"
                    onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                    disabled={activeStepIndex === 0}
                    className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    aria-label="Previous step"
                  >
                    {isRtl ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveStepIndex((prev) => Math.min(journey.length - 1, prev + 1))}
                    disabled={activeStepIndex === journey.length - 1}
                    className="p-2.5 rounded-xl border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                    aria-label="Next step"
                  >
                    {isRtl ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed sm:leading-loose mb-6">
                {activeStep.description}
              </p>

              {/* Key Deliverables */}
              {(activeStep.deliverables || activeStep.details) && (
                <div className="space-y-2 mb-8 bg-white p-5 rounded-2xl border border-slate-200/80">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-1">
                    {t.home.keyDeliverables}:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-700">
                    {(activeStep.deliverables || activeStep.details || []).map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Action */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <a
                  id="journey-cta-btn"
                  href={CONSULTATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-amber-600 text-white font-semibold text-xs sm:text-sm transition-all duration-300 group"
                >
                  <span>{t.home.officialConsultation}</span>
                  <ArrowIcon className={`w-4 h-4 transition-transform ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </a>

                <span className="text-xs text-slate-400">
                  {t.home.stepCounter} {activeStepIndex + 1} {t.home.of} 8
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
