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
  ChevronLeft
} from 'lucide-react';
import { PATIENT_JOURNEY, CONSULTATION_URL } from '../data/content';

const STEP_ICONS = [
  MessageSquare,
  FileCheck2,
  UserCheck2,
  FileText,
  Luggage,
  Activity,
  HeartHandshake,
  PlaneLanding
];

export const PatientJourneySection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);

  const activeStep = PATIENT_JOURNEY[activeStepIndex];
  const ActiveIcon = STEP_ICONS[activeStepIndex];

  return (
    <section 
      id="patient-journey"
      className="py-24 sm:py-32 bg-white text-slate-900 overflow-hidden"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 text-amber-800 text-xs font-semibold mb-3">
            <span>نقشه راه بیمار بین‌المللی</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            مسیر سفر درمانی (Patient Journey)
          </h2>
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed">
            فرآیندی شفاف، امن و گام‌به‌گام از نخستین ارتباط و ارزیابی پرونده تا درمان و بازگشت سلامت به وطن
          </p>
        </div>

        {/* DESKTOP TIMELINE (Horizontal 8 Steps) */}
        <div className="hidden lg:block relative mb-14">
          
          {/* Track Line */}
          <div className="absolute top-9 right-8 left-8 h-[2px] bg-slate-200 z-0">
            {/* Animated accent progress line */}
            <div 
              className="h-full bg-gradient-to-l from-amber-500 to-amber-600 transition-all duration-500"
              style={{ width: `${(activeStepIndex / 7) * 100}%` }}
            />
          </div>

          {/* 8 Steps Nodes */}
          <div className="relative z-10 grid grid-cols-8 gap-2">
            {PATIENT_JOURNEY.map((step, idx) => {
              const Icon = STEP_ICONS[idx];
              const isActive = activeStepIndex === idx;
              const isPast = idx <= activeStepIndex;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  type="button"
                  className="group flex flex-col items-center text-center focus:outline-none cursor-pointer"
                >
                  {/* Step Node */}
                  <div 
                    className={`w-16 h-16 rounded-2xl flex flex-col items-center justify-center transition-all duration-300 shadow-sm ${
                      isActive 
                        ? 'bg-amber-500 text-slate-950 ring-4 ring-amber-500/20 shadow-amber-500/30 scale-105'
                        : isPast
                        ? 'bg-slate-900 text-white hover:bg-amber-600'
                        : 'bg-white text-slate-400 border border-slate-200 group-hover:border-amber-300 group-hover:text-slate-700'
                    }`}
                  >
                    <Icon className="w-5 h-5 mb-0.5" />
                    <span className="text-[10px] font-mono font-bold">{step.step}</span>
                  </div>

                  {/* Step Title */}
                  <h3 className={`mt-3.5 text-xs sm:text-sm font-bold transition-colors ${
                    isActive ? 'text-amber-700 font-extrabold' : 'text-slate-800 group-hover:text-slate-950'
                  }`}>
                    {step.title}
                  </h3>
                </button>
              );
            })}
          </div>

          {/* Visual Storytelling Showcase Card for Active Step (Desktop) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep.step}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="mt-12 p-8 rounded-3xl bg-slate-50 border border-slate-200/80 max-w-3xl mx-auto text-right flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0 shadow-md">
                  <ActiveIcon className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-semibold text-amber-700 mb-1">
                    <span>گام {activeStep.step} از ۰۸</span>
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">
                    {activeStep.title}
                  </h4>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                    {activeStep.description}
                  </p>
                </div>
              </div>
              
              <a
                href={CONSULTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold transition-colors"
              >
                <span>مشاوره این مرحله</span>
                <ArrowLeft className="w-3.5 h-3.5 text-amber-400" />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* MOBILE & TABLET TIMELINE (Vertical Storytelling Layout) */}
        <div className="lg:hidden relative">
          {/* Vertical Connecting Line */}
          <div className="absolute top-4 bottom-4 right-5 w-[2px] bg-slate-200 z-0" />

          <div className="relative z-10 space-y-4">
            {PATIENT_JOURNEY.map((step, idx) => {
              const Icon = STEP_ICONS[idx];
              const isSelected = activeStepIndex === idx;

              return (
                <div
                  key={step.step}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`flex items-start gap-4 p-4 rounded-2xl transition-all duration-200 cursor-pointer ${
                    isSelected ? 'bg-amber-500/10 border border-amber-500/30' : 'bg-slate-50 border border-slate-200/80'
                  }`}
                >
                  {/* Step Icon Badge */}
                  <div className={`shrink-0 w-11 h-11 rounded-xl flex items-center justify-center font-mono font-bold text-xs shadow-sm ${
                    isSelected ? 'bg-amber-500 text-slate-950' : 'bg-slate-900 text-white'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  {/* Step Content */}
                  <div className="flex-1 text-right">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm sm:text-base font-bold text-slate-900">
                        {step.title}
                      </h3>
                      <span className="text-[11px] font-mono font-semibold text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                        مرحله {step.step}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed font-normal">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center">
            <a
              href={CONSULTATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 rounded-xl bg-slate-900 text-white font-semibold text-sm shadow-md"
            >
              <span>درخواست مشاوره درمان</span>
              <ArrowLeft className="w-4 h-4 text-amber-400" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
