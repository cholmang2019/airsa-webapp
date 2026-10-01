import React from 'react';
import { motion } from 'motion/react';
import {
  PlaneLanding,
  Car,
  Hotel,
  UserCheck,
  HeartHandshake,
  PlaneTakeoff,
  Check,
  ArrowLeft,
  ArrowRight,
  Crown,
} from 'lucide-react';
import { getVipServicesData, VIP_CONSULTATION_URL, VipServiceItem } from '../data/vipServicesData';
import { useLanguage } from '../context/LanguageContext';

const iconMap: { [key: string]: React.FC<{ className?: string }> } = {
  'vip-airport-arrival': PlaneLanding,
  'vip-transfer': Car,
  'vip-stay': Hotel,
  'vip-concierge': UserCheck,
  'vip-medical': HeartHandshake,
  'vip-departure': PlaneTakeoff,
};

export const VipServicesCardsSection: React.FC = () => {
  const { language, dir, isRtl, t } = useLanguage();
  const services = getVipServicesData(language);
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="vip-services-section"
      className="py-24 sm:py-36 bg-[#090d16] text-white relative border-t border-white/[0.08]"
      dir={dir}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-300 text-xs font-medium mb-4">
            <Crown className="w-3.5 h-3.5 text-amber-400" />
            <span>{t.vip.sixVipServices}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.25] mb-5">
            {t.vip.vipStandardTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            {t.vip.vipStandardSubtitle}
          </p>
        </div>

        {/* 6 Premium Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          {services.map((service: VipServiceItem, index: number) => {
            const IconComponent = iconMap[service.id] || Crown;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative flex flex-col rounded-3xl bg-slate-900/70 border border-white/[0.1] hover:border-amber-400/40 overflow-hidden shadow-[0_20px_50px_-15px_rgba(0,0,0,0.6)] hover:shadow-[0_30px_60px_-15px_rgba(245,158,11,0.15)] transition-all duration-500 ${
                  isRtl ? 'text-right' : 'text-left'
                } backdrop-blur-md`}
              >
                {/* Photo Header */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.85] group-hover:brightness-[0.95]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-slate-950/40 to-transparent" />

                  <div
                    className={`absolute top-4 ${
                      isRtl ? 'right-4' : 'left-4'
                    } w-11 h-11 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/20 flex items-center justify-center text-amber-300 shadow-lg`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>

                  <div className={`absolute bottom-3 ${isRtl ? 'right-4' : 'left-4'}`}>
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-amber-500/20 backdrop-blur-md border border-amber-400/30 text-amber-300 font-medium">
                      {service.tag}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 sm:p-8 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>

                  <span className="text-xs font-mono text-amber-200/80 mb-4 block">
                    {service.subtitle}
                  </span>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6 flex-grow">
                    {service.description}
                  </p>

                  <div className="space-y-2.5 mb-8 pt-4 border-t border-white/[0.08]">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs text-slate-200">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span className="font-light">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={VIP_CONSULTATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between p-3.5 rounded-xl bg-white/[0.06] hover:bg-amber-500 hover:text-slate-950 text-slate-200 font-bold text-xs transition-all duration-300 group/btn border border-white/[0.08]"
                  >
                    <span>{t.home.inquireService}</span>
                    <ArrowIcon className={`w-3.5 h-3.5 transition-transform ${isRtl ? 'group-hover/btn:-translate-x-1' : 'group-hover/btn:translate-x-1'}`} />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
