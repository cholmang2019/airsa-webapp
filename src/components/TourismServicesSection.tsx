import React from 'react';
import { motion } from 'motion/react';
import { Plane, Hotel, Car, Compass, Sparkles, Headphones, ArrowLeft, ArrowRight } from 'lucide-react';
import { getTourismServices, CONSULTATION_URL } from '../data/incomingTourismData';
import { useLanguage } from '../context/LanguageContext';

const iconMap: { [key: string]: React.FC<{ className?: string }> } = {
  cip: Plane,
  stay: Hotel,
  transfer: Car,
  itinerary: Compass,
  experiences: Sparkles,
  support: Headphones,
};

export const TourismServicesSection: React.FC = () => {
  const { language, dir, isRtl, t } = useLanguage();
  const services = getTourismServices(language);
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section
      id="tourism-services"
      className="py-24 sm:py-32 bg-slate-900 text-white relative overflow-hidden"
      dir={dir}
    >
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-amber-300 text-xs font-semibold mb-4">
            <span>{t.home.servicesBadge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.25] mb-5">
            {t.home.servicesTitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
            {t.home.servicesSubtitle}
          </p>
        </div>

        {/* 6-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.id] || Compass;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative flex flex-col rounded-3xl bg-slate-800/80 backdrop-blur-md border border-white/10 overflow-hidden shadow-xl hover:border-amber-500/50 hover:shadow-[0_20px_40px_-15px_rgba(245,158,11,0.2)] transition-all duration-500 hover:-translate-y-1"
              >
                <div className="relative h-52 sm:h-56 w-full overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110 filter brightness-[0.78] contrast-[1.05]"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />

                  {/* Floating Icon */}
                  <div
                    className={`absolute top-4 ${
                      isRtl ? 'right-4' : 'left-4'
                    } w-10 h-10 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-amber-300 shadow-md`}
                  >
                    <IconComponent className="w-5 h-5" />
                  </div>
                </div>

                <div className={`p-6 sm:p-7 flex flex-col flex-grow ${isRtl ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-300 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-6 flex-grow">
                    {service.description}
                  </p>

                  <a
                    href={CONSULTATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 group-hover:text-amber-300 transition-colors pt-3 border-t border-white/10"
                  >
                    <span>{t.home.learnMore}</span>
                    <ArrowIcon className={`w-3.5 h-3.5 transition-transform ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
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
