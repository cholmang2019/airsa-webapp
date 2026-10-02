import React from 'react';
import { motion } from 'motion/react';
import {
  Compass,
  Briefcase,
  Building2,
  GraduationCap,
  Activity,
  HeartPulse,
  Sparkles,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Phone,
  CheckCircle2,
  Globe2,
  TrendingUp,
  Quote,
  ChevronRight,
  ChevronLeft,
  ShieldCheck,
  Award,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { getCeoPageData, CeoTravelPath } from '../data/ceoData';
import { CeoPortrait } from '../components/CeoPortrait';

interface CeoPageProps {
  onNavigate?: (href: string) => void;
}

const pathIcons: Record<CeoTravelPath['iconName'], React.FC<{ className?: string }>> = {
  palm: Compass,
  briefcase: Briefcase,
  landmark: Building2,
  'graduation-cap': GraduationCap,
  activity: Activity,
  'heart-pulse': HeartPulse,
};

export const CeoPage: React.FC<CeoPageProps> = ({ onNavigate }) => {
  const { language, dir, isRtl } = useLanguage();
  const data = getCeoPageData(language);
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;
  const ChevronIcon = isRtl ? ChevronLeft : ChevronRight;

  const handleNav = (href: string) => {
    if (onNavigate) {
      onNavigate(href);
    } else if (typeof window !== 'undefined') {
      window.location.href = href;
    }
  };

  return (
    <div id="page-ceo" dir={dir} className="bg-[#070a12] text-white overflow-hidden font-sans">
      {/* 1. TOP BREADCRUMB */}
      <div className="border-b border-white/[0.06] bg-[#090d18]/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-3 flex items-center gap-2 text-xs text-slate-400">
          <button
            onClick={() => handleNav('/')}
            className="hover:text-amber-400 transition-colors focus:outline-none"
          >
            {data.breadcrumb.home}
          </button>
          <ChevronIcon className="w-3.5 h-3.5 text-slate-600" />
          <button
            onClick={() => handleNav('/about-us/')}
            className="hover:text-amber-400 transition-colors focus:outline-none"
          >
            {data.breadcrumb.about}
          </button>
          <ChevronIcon className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-amber-300 font-medium">{data.breadcrumb.current}</span>
        </div>
      </div>

      {/* 2. EXECUTIVE HERO SECTION */}
      <section className="relative py-14 sm:py-20 lg:py-24 overflow-hidden border-b border-white/[0.08]">
        {/* Ambient Glows */}
        <div className="absolute top-1/4 -right-20 w-[550px] h-[550px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Column 1: Portrait */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 flex justify-center order-1 lg:order-1"
            >
              <div className="w-full max-w-md">
                <CeoPortrait
                  name={data.hero.name}
                  title={data.hero.title}
                  imageSrc={data.hero.portraitImage}
                />
              </div>
            </motion.div>

            {/* Column 2: Executive Bio & Introduction */}
            <motion.div
              initial={{ opacity: 0, x: isRtl ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={`lg:col-span-7 space-y-6 order-2 lg:order-2 ${isRtl ? 'text-right' : 'text-left'}`}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{data.hero.badge}</span>
              </div>

              {/* Name & Title */}
              <div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.2] mb-3">
                  {data.hero.name}
                </h1>
                <p className="text-lg sm:text-xl font-medium text-amber-300/95">
                  {data.hero.title}
                </p>
                <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1">
                  {data.hero.company}
                </p>
              </div>

              {/* Quote Card */}
              <div className="relative p-6 rounded-2xl bg-gradient-to-r from-slate-900/90 via-slate-900/50 to-slate-900/90 border border-amber-400/20 shadow-xl">
                <Quote className={`w-8 h-8 text-amber-400/20 absolute -top-3 ${isRtl ? '-right-2' : '-left-2'}`} />
                <p className="text-base sm:text-lg font-medium text-amber-100 leading-relaxed italic">
                  {data.hero.quote}
                </p>
              </div>

              {/* Opening Lead */}
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                {data.overview.lead}
              </p>

              {/* CTA Group */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="https://medixmaster.com/contact-us/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{data.hero.contactCta}</span>
                </a>

                <button
                  type="button"
                  onClick={() => {
                    const el = document.getElementById('ceo-philosophy-section');
                    el?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-medium text-sm transition-all"
                >
                  <span>{data.hero.secondaryCta}</span>
                  <ArrowIcon className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. MULTIDISCIPLINARY BACKGROUND & EXPERTISE GRID (WITH TOPIC IMAGES) */}
      <section className="py-20 sm:py-28 bg-[#090d18] border-b border-white/[0.08] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Section Header with Featured Image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
            <div className={`lg:col-span-7 space-y-4 ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold">
                <Award className="w-3.5 h-3.5" />
                <span>{data.overview.badge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.3]">
                {data.overview.heading}
              </h2>
              <div className="space-y-3 text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                {data.overview.bioParagraphs.map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </div>

            {/* Featured Section Topic Image: Professional Hospitality */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl overflow-hidden border border-amber-400/25 shadow-2xl bg-slate-950 group">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={data.overview.image}
                    alt={data.overview.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.95]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-slate-950/85 backdrop-blur-md border border-white/10 text-xs text-slate-300 flex items-center justify-between">
                  <span className="font-medium text-amber-300">{data.overview.imageAlt}</span>
                  <span className="text-[11px] text-slate-400 font-mono">AIRSA STANDARD</span>
                </div>
              </div>
            </div>
          </div>

          {/* 6 Foundational Expertise Cards with Topic Visuals */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.overview.expertises.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`rounded-2xl bg-slate-900/70 border border-white/[0.08] hover:border-amber-400/35 backdrop-blur-xl transition-all duration-300 group overflow-hidden flex flex-col justify-between ${
                  isRtl ? 'text-right' : 'text-left'
                }`}
              >
                {/* Topic Image Banner */}
                {item.image && (
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.88] group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                    <div className={`absolute bottom-3 ${isRtl ? 'right-3' : 'left-3'} z-10`}>
                      <span className="text-[10px] font-mono tracking-wider px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-amber-400/30 text-amber-300 font-medium">
                        {item.tag}
                      </span>
                    </div>
                  </div>
                )}

                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {!item.image && (
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-mono tracking-wider px-2.5 py-1 rounded-md bg-white/[0.06] text-amber-300/90 font-medium">
                          {item.tag}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-amber-400/50 group-hover:bg-amber-400 transition-colors" />
                      </div>
                    )}
                    <h3 className="text-base sm:text-lg font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE 6 SPECIALIZED TRAVEL PATHS (FEATURING RICH TOPIC IMAGES) */}
      <section id="ceo-philosophy-section" className="py-20 sm:py-32 relative border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
            <span className="text-xs font-mono tracking-widest text-amber-400 uppercase block mb-2">
              {data.philosophy.badge}
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.25] mb-4">
              {data.philosophy.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-2xl mx-auto">
              {data.philosophy.subtitle}
            </p>

            {/* Quote Callout */}
            <div className="mt-8 p-5 rounded-2xl bg-amber-500/10 border border-amber-400/25 max-w-2xl mx-auto text-amber-200 text-xs sm:text-sm font-medium leading-relaxed">
              {data.philosophy.quoteText}
            </div>
          </div>

          {/* Paths Grid with Dedicated Topic Images */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {data.philosophy.paths.map((path, idx) => {
              const IconComp = pathIcons[path.iconName] || Compass;
              return (
                <motion.div
                  key={path.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  className={`rounded-3xl bg-gradient-to-b from-slate-900/90 via-[#0d1220]/90 to-slate-950/90 border border-white/[0.08] hover:border-amber-400/40 transition-all duration-300 shadow-xl group overflow-hidden flex flex-col justify-between ${
                    isRtl ? 'text-right' : 'text-left'
                  }`}
                >
                  {/* Topic Photo with Overlay & Floating Badges */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 border-b border-white/[0.06]">
                    <img
                      src={path.image}
                      alt={path.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.92] group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent pointer-events-none" />

                    {/* Floating Category Badge with Icon */}
                    <div className={`absolute top-3.5 ${isRtl ? 'right-3.5' : 'left-3.5'} z-10`}>
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-amber-400/30 text-amber-300 text-xs font-semibold shadow-lg">
                        <IconComp className="w-3.5 h-3.5" />
                        <span>{path.badge}</span>
                      </div>
                    </div>

                    {/* Number Pill */}
                    <div className={`absolute top-3.5 ${isRtl ? 'left-3.5' : 'right-3.5'} z-10`}>
                      <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-slate-950/85 backdrop-blur-md border border-white/15 font-mono text-sm font-bold text-amber-300 shadow-lg">
                        {path.number}
                      </span>
                    </div>

                    {/* Topic Image Description Bar */}
                    <div className="absolute bottom-2.5 left-3.5 right-3.5 text-[11px] text-amber-200/90 font-medium truncate pointer-events-none">
                      {path.imageAlt}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Title */}
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2.5 group-hover:text-amber-300 transition-colors leading-snug">
                        {path.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed mb-4">
                        {path.description}
                      </p>
                    </div>

                    {/* Target Audience / Execution Focus Box */}
                    <div className="mt-2 pt-4 border-t border-white/[0.08]">
                      <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.05] text-[12px] text-slate-300 font-light leading-relaxed">
                        <span className="text-amber-300/90 font-semibold block mb-1">
                          {language === 'fa' ? 'رویکرد اجرایی:' : language === 'ar' ? 'النهج التنفيذي:' : language === 'tr' ? 'Uygulama Odağı:' : language === 'zh' ? '落地实施重点:' : 'Execution Focus:'}
                        </span>
                        {path.targetAudience}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. STRATEGIC SYNERGY: COMMERCE, TRAVEL & GLOBAL HORIZONS (WITH TOPIC IMAGE) */}
      <section className="py-20 sm:py-28 bg-[#090d18] border-b border-white/[0.08] relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Side 1: Descriptive narrative */}
            <div className={`lg:col-span-6 space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-semibold">
                <Globe2 className="w-3.5 h-3.5" />
                <span>{data.internationalTrade.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-[1.3]">
                {data.internationalTrade.title}
              </h2>

              <p className="text-base sm:text-lg font-medium text-amber-200/95 leading-relaxed">
                {data.internationalTrade.lead}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                {data.internationalTrade.description}
              </p>

              {/* Strategic Topic Image Card */}
              <div className="relative rounded-2xl overflow-hidden border border-amber-400/25 bg-slate-950 shadow-xl group">
                <div className="aspect-[16/9] w-full overflow-hidden">
                  <img
                    src={data.internationalTrade.image}
                    alt={data.internationalTrade.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-[0.92]"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 p-3 rounded-xl bg-slate-950/80 backdrop-blur-md border border-white/10 flex items-center justify-between text-xs">
                  <span className="text-amber-300 font-medium">{data.internationalTrade.imageAlt}</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleNav('/international-services/')}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-medium text-xs sm:text-sm transition-all"
                >
                  <span>{language === 'fa' ? 'بررسی خدمات بین‌المللی' : language === 'ar' ? 'استعراض الخدمات الدولية' : language === 'tr' ? 'Uluslararası Hizmetleri İnceleyin' : language === 'zh' ? '了解国际商务与投资服务' : 'Explore International Services'}</span>
                  <ArrowIcon className="w-4 h-4 text-amber-400" />
                </button>
              </div>
            </div>

            {/* Side 2: 3 Strategic Pillars */}
            <div className="lg:col-span-6 space-y-4">
              {data.internationalTrade.points.map((pt, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: isRtl ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`p-6 sm:p-7 rounded-2xl bg-slate-900/80 border border-white/[0.08] hover:border-amber-400/30 transition-all ${
                    isRtl ? 'text-right' : 'text-left'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-9 h-9 rounded-xl bg-amber-400/10 border border-amber-400/20 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm sm:text-base font-bold text-white mb-1.5">
                        {pt.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. FOUNDER'S MANIFESTO (نگاه من به ایرسا - WITH LIFESTYLE TRAVEL PHOTO) */}
      <section className="py-20 sm:py-32 relative border-b border-white/[0.08] bg-gradient-to-b from-[#070a12] via-[#090d1a] to-[#070a12]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold mb-4">
              <Quote className="w-3.5 h-3.5" />
              <span>{data.personalStatement.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              {data.personalStatement.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Column 1: Manifesto Narrative & Quote */}
            <div className={`lg:col-span-6 space-y-6 ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className="space-y-4 text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                {data.personalStatement.paragraphs.map((p, idx) => (
                  <p key={idx} className="leading-loose">
                    {p}
                  </p>
                ))}
              </div>

              {/* Highlight Quote Box */}
              <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/90 border border-amber-400/30 text-amber-100 font-medium text-base sm:text-lg leading-relaxed shadow-2xl relative">
                <Quote className={`w-8 h-8 text-amber-400/20 absolute -top-3 ${isRtl ? '-right-2' : '-left-2'}`} />
                «{data.personalStatement.highlightQuote}»
              </div>

              {/* Goal Callout - هدف من از ایجاد و توسعه ایرسا */}
              <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-amber-500/10 via-slate-900/80 to-blue-500/10 border border-amber-400/30 shadow-xl relative overflow-hidden">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-8 h-8 rounded-xl bg-amber-400/20 border border-amber-400/30 text-amber-300 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-4 h-4 text-amber-400" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {data.personalStatement.goalTitle}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
                  {data.personalStatement.goalText}
                </p>
              </div>
            </div>

            {/* Column 2: Thematic Visual: Global Opportunities in Health, Trade & International Horizons */}
            <div className="lg:col-span-6 space-y-4">
              <div className="relative rounded-3xl overflow-hidden border border-amber-400/35 shadow-2xl bg-slate-950 group">
                {/* Metallic Gold Top Accent */}
                <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 via-amber-200 to-blue-500" />

                {/* Composite Image Container */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                  <img
                    src={data.personalStatement.image}
                    alt={data.personalStatement.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.95] group-hover:brightness-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                  {/* Top Floating Badges */}
                  <div className={`absolute top-3.5 ${isRtl ? 'right-3.5' : 'left-3.5'} z-10`}>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-950/85 backdrop-blur-md border border-amber-400/30 text-amber-300 text-xs font-semibold shadow-lg">
                      <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                      <span>{language === 'fa' ? 'سلامت • تجارت • فرصت‌های بین‌المللی' : language === 'ar' ? 'صحة • تجارة • فرص دولية' : language === 'tr' ? 'Sağlık • Ticaret • Küresel Fırsatlar' : language === 'zh' ? '医疗健康 • 国际商贸 • 全球机遇' : 'Health • Trade • Global'}</span>
                    </div>
                  </div>

                  {/* Bottom Image Caption */}
                  <div className="absolute bottom-3 left-4 right-4 z-10">
                    <div className="p-3.5 rounded-2xl bg-slate-950/90 backdrop-blur-xl border border-white/10 shadow-xl">
                      <p className="text-xs sm:text-sm text-amber-200 font-bold mb-0.5">
                        {data.personalStatement.imageAlt}
                      </p>
                      <p className="text-[11px] text-slate-400 font-mono">
                        HEALTHCARE • INTERNATIONAL COMMERCE • GLOBAL EXPANSION
                      </p>
                    </div>
                  </div>
                </div>

                {/* 3 Interactive Synergy Highlight Cards */}
                <div className="p-4 sm:p-5 bg-gradient-to-b from-slate-950 to-[#0a0e1a] border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                  {/* Pillar 1: Healthcare */}
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-cyan-400/20 hover:border-cyan-400/40 transition-colors">
                    <div className="flex items-center gap-1.5 text-cyan-300 font-semibold mb-1">
                      <HeartPulse className="w-3.5 h-3.5 shrink-0" />
                      <span>{language === 'fa' ? 'سلامت بین‌الملل' : language === 'ar' ? 'الصحة الدولية' : language === 'tr' ? 'Uluslararası Sağlık' : language === 'zh' ? '国际医疗健康' : 'Global Health'}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                      {language === 'fa'
                        ? 'گردشگری درمان، بیمارستان‌های IPD و استانداردهای بالینی'
                        : language === 'ar'
                        ? 'السياحة العلاجية وأرقى المستشفيات المعتمدة دولياً'
                        : language === 'tr'
                        ? 'Sağlık turizmi, IPD onaylı hastaneler ve klinik standartlar'
                        : language === 'zh'
                        ? '医疗旅游、国际患者专属资质医院与高品质临床标准'
                        : 'Accredited IPD hospitals & specialized clinical care'}
                    </p>
                  </div>

                  {/* Pillar 2: Commerce */}
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-amber-400/20 hover:border-amber-400/40 transition-colors">
                    <div className="flex items-center gap-1.5 text-amber-300 font-semibold mb-1">
                      <Briefcase className="w-3.5 h-3.5 shrink-0" />
                      <span>{language === 'fa' ? 'تجارت بین‌المللی' : language === 'ar' ? 'التجارة الدولية' : language === 'tr' ? 'Uluslararası Ticaret' : language === 'zh' ? '国际经贸合作' : 'Global Trade'}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                      {language === 'fa'
                        ? 'مذاکرات بازرگانی، ثبت شرکت و توسعه بازارهای صادراتی'
                        : language === 'ar'
                        ? 'تأسيس الشركات، المفاوضات التجارية وتطوير الأسواق'
                        : language === 'tr'
                        ? 'Ticari müzakereler, şirket kuruluşu ve yeni pazar geliştirme'
                        : language === 'zh'
                        ? '国际商务谈判、跨境企业落地与目标出口市场开拓'
                        : 'Cross-border commerce, market entry & company formation'}
                    </p>
                  </div>

                  {/* Pillar 3: Global Opportunities */}
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-blue-400/20 hover:border-blue-400/40 transition-colors">
                    <div className="flex items-center gap-1.5 text-blue-300 font-semibold mb-1">
                      <Globe2 className="w-3.5 h-3.5 shrink-0" />
                      <span>{language === 'fa' ? 'فرصت‌های جهانی' : language === 'ar' ? 'الفرص العالمية' : language === 'tr' ? 'Küresel Fırsatlar' : language === 'zh' ? '全球发展机遇' : 'World Horizons'}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 font-light leading-relaxed">
                      {language === 'fa'
                        ? 'پیوند میان افراد، مقاصد و هیئت‌های سرمایه‌گذاری بین‌المللی'
                        : language === 'ar'
                        ? 'جسور التواصل بين الوفود والفرص الاستثمارية الكبرى'
                        : language === 'tr'
                        ? 'Heyetler, uluslararası yatırımcılar ve stratejik ortaklıklar köprüsü'
                        : language === 'zh'
                        ? '搭建国际商务考察团、投资者与优质战略项目的互通桥梁'
                        : 'Strategic partnerships, missions & global delegations'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FUTURE VISION & OFFICIAL SIGN-OFF (WITH VISUAL BANNER) */}
      <section className="py-20 sm:py-28 bg-[#090d18] border-b border-white/[0.08] relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-gradient-to-br from-slate-900 via-[#0d1424] to-slate-950 border border-amber-400/25 shadow-2xl relative overflow-hidden">
            {/* Visual Background Accent from local hero images */}
            <div className="absolute inset-0 opacity-15 mix-blend-overlay pointer-events-none">
              <img
                src={data.vision.image}
                alt={data.vision.imageAlt}
                className="w-full h-full object-cover filter blur-[2px]"
              />
            </div>

            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className={`relative z-10 ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{data.vision.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
                {data.vision.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-3xl mb-8">
                {data.vision.description}
              </p>

              {/* Sectors Pills */}
              <div className="flex flex-wrap gap-2.5 mb-10">
                {data.vision.sectors.map((sector, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs font-mono text-amber-200"
                  >
                    {sector}
                  </span>
                ))}
              </div>

              {/* Closing Motto & Signature */}
              <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
                <div>
                  <p className="text-xs text-amber-400/80 font-mono tracking-wider uppercase mb-1">
                    AIRSA SIMORGH JAHAN
                  </p>
                  <p className="text-base sm:text-lg font-bold text-white italic">
                    «{data.vision.motto}»
                  </p>
                </div>

                <div className={`space-y-1 ${isRtl ? 'sm:text-left' : 'sm:text-right'}`}>
                  <div className="font-serif text-lg sm:text-xl font-bold text-amber-300">
                    {data.vision.signOff.name}
                  </div>
                  <div className="text-xs text-slate-400">
                    {data.vision.signOff.role}
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono">
                    {data.vision.signOff.company}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FINAL CONSULTATION & ACTION BANNER */}
      <section className="py-16 sm:py-20 bg-[#070a12]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {language === 'fa'
                ? 'برای گفتگو پیرامون فرصت‌های همکاری و سفر در کنار شما هستیم'
                : language === 'ar'
                ? 'نحن هنا لبحث فرص التعاون ومسارات السفر المشتركة معكم'
                : language === 'tr'
                ? 'İş Birliği ve Seyahat Fırsatlarını Görüşmek İçin Yanınızdayız'
                : language === 'zh'
                ? '携手探讨战略合作与定制专属旅行路线'
                : 'Connect with Us for Strategic Travel & Global Partnerships'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light max-w-xl mx-auto">
              {language === 'fa'
                ? 'تیم مشاوران و دفتر مدیریت ایرسا سیمرغ جهان آماده پاسخگویی و تنظیم جلسات حضوری یا آنلاین با متقاضیان و همکاران تجاری است.'
                : language === 'ar'
                ? 'فريق المستشارين ومكتب الإدارة في إيرسا سيمرغ جهان مستعد لتنظيم الجلسات الاستشارية واللقاءات التنسيقية.'
                : language === 'tr'
                ? 'Airsa Simorgh Jahan yönetim ofisi ve danışmanlık ekibi, yüz yüze veya çevrimiçi görüşmeler için her zaman hazırdır.'
                : language === 'zh'
                ? '艾尔萨·西摩格管理层办公室与专属顾问团队随时竭诚为您解答疑问，并可安排线下面对面洽谈或高清线上会议。'
                : 'Our executive team and advisory office are readily accessible for consultations, corporate briefings, and customized travel itineraries.'}
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href="https://medixmaster.com/contact-us/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 transition-all hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4" />
                <span>
                  {language === 'fa'
                    ? 'ارسال درخواست مشاوره'
                    : language === 'ar'
                    ? 'طلب استشارة'
                    : language === 'tr'
                    ? 'Danışmanlık Talebi Gönder'
                    : language === 'zh'
                    ? '发送咨询预约'
                    : 'Request Consultation'}
                </span>
              </a>

              <button
                type="button"
                onClick={() => handleNav('/contact-us/')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 text-white font-medium text-sm transition-all"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>
                  {language === 'fa'
                    ? 'اطلاعات تماس مستقیم'
                    : language === 'ar'
                    ? 'معلومات الاتصال المباشر'
                    : language === 'tr'
                    ? 'Doğrudan İletişim Bilgileri'
                    : language === 'zh'
                    ? '查看直接联络方式'
                    : 'Direct Contact Details'}
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
