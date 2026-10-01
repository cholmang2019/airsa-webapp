import React from 'react';
import { motion } from 'motion/react';
import { Award, Sparkles, ArrowLeft, ArrowRight, Quote, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { CeoPortrait } from './CeoPortrait';

export const AboutCeoSpotlightSection: React.FC = () => {
  const { language, dir, isRtl } = useLanguage();
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  const content = {
    fa: {
      badge: 'رهبری و مدیریت ارشد',
      title: 'حدیثه دهقانی پوده',
      subtitle: 'بنیان‌گذار و مدیر ایرسا سیمرغ جهان',
      quote: '«ایرسا سیمرغ جهان حاصل یک نگاه چندبعدی به مفهوم سفر و فرصت‌های بین‌المللی است؛ نگاهی که سفر را مسیری برای تجربه، آموزش، سلامت، تجارت و توسعه فردی و حرفه‌ای می‌داند.»',
      description: 'حدیثه دهقانی پوده با پیشینه تخصصی در حوزه سلامت و تجربه فعالیت در زمینه‌های آموزش، مشاوره، توسعه کسب‌وکار، تجارت و خدمات بین‌المللی، گردشگری، پوست و زیبایی، طب سوزنی و مربیگری ورزشی، نگاه متفاوتی به صنعت گردشگری خلق کرده است.',
      cta: 'مشاهده صفحه اختصاصی مدیر عامل',
      pillars: ['حوزه سلامت و طب سوزنی', 'توسعه تجارت بین‌الملل', 'سفرهای هدفمند و تخصصی'],
    },
    en: {
      badge: 'Executive Leadership',
      title: 'Hadiseh Dehghani Poudeh',
      subtitle: 'Founder & CEO of Airsa Simorgh Jahan',
      quote: '“Airsa Simorgh Jahan is born of a multidimensional perspective on travel and global opportunities—perceiving journey as an inspiring pathway for experience, education, healthcare, trade, and professional growth.”',
      description: 'With a specialized background in clinical healthcare and expansive leadership across education, enterprise consulting, international commerce, skin & aesthetics, acupuncture, and athletic coaching, she brings a uniquely holistic vision to modern travel.',
      cta: 'Explore CEO Profile & Manifesto',
      pillars: ['Healthcare & Clinical Care', 'International Trade & Commerce', 'Purpose-Driven Travel'],
    },
    ar: {
      badge: 'القيادة والإدارة العليا',
      title: 'حديثة دهقاني بوده',
      subtitle: 'المؤسس والمدير التنفيذي لإيرسا سيمرغ جهان',
      quote: '«إيرسا سيمرغ جهان هي ثمرة نظرة متعددة الأبعاد لمفهوم السفر والفرص الدولية؛ حيث يغدو السفر مساراً متكاملاً للتعليم، الرعاية الصحية، التجارة والتطور المهني.»',
      description: 'تمتلك خلفية تخصصية في قطاع الصحة وخبرة رائدة في مجالات التعليم، الاستشارات، تطوير الأعمال، التجارة الدولية، العناية بالبشرة والوخز بالإبر الصينية والتدريب الرياضي.',
      cta: 'عرض الصفحة الخاصة بالمدير التنفيذي',
      pillars: ['الرعاية الصحية والطب التكميلي', 'التجارة والأعمال الدولية', 'السياحة الهادفة المتخصصة'],
    },
    tr: {
      badge: 'Üst Düzey Liderlik',
      title: 'Hadiseh Dehghani Poudeh',
      subtitle: 'Airsa Simorgh Jahan Kurucusu ve Genel Müdürü',
      quote: '«Airsa Simorgh Jahan, seyahat kavramına ve uluslararası fırsatlara çok boyutlu bir bakışın ürünüdür; seyahati sadece bir varış noktası değil, deneyim, eğitim, sağlık, ticaret ve profesyonel gelişim için eşsiz bir köprü olarak görüyoruz.»',
      description: 'Sağlık alanındaki uzmanlık geçmişi ve eğitim, yönetim danışmanlığı, uluslararası ticaret, estetik, akupunktur ve spor koçluğu alanlarındaki çok yönlü birikimiyle seyahat endüstrisine yenilikçi bir vizyon kazandırmıştır.',
      cta: 'Genel Müdür Özel Sayfasını İnceleyin',
      pillars: ['Klinik Sağlık & Tamamlayıcı Tıp', 'Uluslararası Ticaret & İhracat', 'Amaca Özel Tasarlanmış Seyahat'],
    },
  }[language] || {
    badge: 'Executive Leadership',
    title: 'Hadiseh Dehghani Poudeh',
    subtitle: 'Founder & CEO of Airsa Simorgh Jahan',
    quote: '“Every journey can be the start of a new experience, a connection, or a fresh opportunity.”',
    description: 'Founder and CEO of Airsa Simorgh Jahan with a multidisciplinary background across healthcare, international commerce, and travel engineering.',
    cta: 'Explore CEO Profile & Manifesto',
    pillars: ['Healthcare & Care', 'International Commerce', 'Purposeful Travel'],
  };

  const handleNavigateToCeo = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', '/ceo/');
      window.dispatchEvent(new PopStateEvent('popstate'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="about-ceo-spotlight-section"
      className="py-20 sm:py-28 bg-[#080c16] text-white relative overflow-hidden border-b border-white/[0.08]"
      dir={dir}
    >
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Portrait Column */}
          <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
            <div className="w-full max-w-sm">
              <CeoPortrait name={content.title} title={content.subtitle} />
            </div>
          </div>

          {/* Narrative Column */}
          <div className={`lg:col-span-7 space-y-6 order-1 lg:order-2 ${isRtl ? 'text-right' : 'text-left'}`}>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/25 text-amber-300 text-xs font-semibold">
              <Award className="w-3.5 h-3.5" />
              <span>{content.badge}</span>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2">
                {content.title}
              </h2>
              <p className="text-base sm:text-lg font-medium text-amber-300/90">
                {content.subtitle}
              </p>
            </div>

            {/* Quote */}
            <div className="p-5 rounded-2xl bg-slate-900/80 border border-amber-400/20 text-amber-100 text-xs sm:text-sm font-medium leading-relaxed italic">
              {content.quote}
            </div>

            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              {content.description}
            </p>

            {/* Pillars */}
            <div className="flex flex-wrap gap-2 pt-1">
              {content.pillars.map((pillar, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/10 text-xs text-slate-300 font-mono"
                >
                  {pillar}
                </span>
              ))}
            </div>

            {/* Link to Dedicated CEO Page */}
            <div className="pt-3">
              <a
                href="/ceo/"
                onClick={handleNavigateToCeo}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-amber-500/20 transition-all hover:-translate-y-0.5"
              >
                <span>{content.cta}</span>
                <ArrowIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
