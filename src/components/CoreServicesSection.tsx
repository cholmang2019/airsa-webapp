import React from 'react';
import { motion } from 'motion/react';
import { Plane, Stamp, Hotel, Car, Check, ArrowLeft, ArrowRight, ShieldCheck } from 'lucide-react';
import { getTravelCoreServices, CONSULTATION_URL } from '../data/travelServicesData';
import { useLanguage } from '../context/LanguageContext';

const iconMap: { [key: string]: React.FC<{ className?: string }> } = {
  flights: Plane,
  visa: Stamp,
  hotel: Hotel,
  transfer: Car,
};

export const CoreServicesSection: React.FC = () => {
  const { language, dir, isRtl, t } = useLanguage();
  const services = getTravelCoreServices(language);
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="core-services-section"
      className="py-24 sm:py-32 bg-[#fafafc] text-slate-900 relative"
      dir={dir}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-800 text-xs font-semibold mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
            <span>{t.home.coreServicesBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.25] mb-4">
            {t.home.coreServicesTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            {t.home.coreServicesSubtitle}
          </p>
        </div>

        {/* Four Large Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.id] || Plane;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative flex flex-col rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-[0_15px_40px_-15px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_50px_-15px_rgba(15,23,42,0.12)] hover:border-amber-500/40 transition-all duration-500 ${
                  isRtl ? 'text-right' : 'text-left'
                }`}
              >
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 filter brightness-[0.88] group-hover:brightness-[0.8] contrast-[1.03]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />

                  <div
                    className={`absolute top-5 ${
                      isRtl ? 'right-5' : 'left-5'
                    } w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-amber-300 shadow-md`}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>

                  <div className={`absolute bottom-4 ${isRtl ? 'right-5' : 'left-5'} text-white`}>
                    <span className="text-xs font-mono px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-md text-amber-200 font-semibold">
                      0{index + 1}
                    </span>
                  </div>
                </div>

                <div className="p-7 sm:p-9 flex flex-col flex-grow">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 group-hover:text-amber-800 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal mb-6 flex-grow">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-8 pt-4 border-t border-slate-100">
                    {(service.features || service.highlights || []).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href={CONSULTATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-between p-4 rounded-xl bg-slate-50 hover:bg-amber-500 hover:text-slate-950 text-slate-800 font-bold text-xs sm:text-sm transition-all duration-300 group/btn"
                  >
                    <span>{t.home.inquireService}</span>
                    <ArrowIcon className={`w-4 h-4 transition-transform ${isRtl ? 'group-hover/btn:-translate-x-1' : 'group-hover/btn:translate-x-1'}`} />
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
