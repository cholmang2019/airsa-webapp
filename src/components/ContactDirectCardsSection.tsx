import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  MessageCircle,
  Mail,
  Send,
  MapPin,
  Copy,
  Check,
  Navigation,
} from 'lucide-react';
import { CONTACT_PAGE_DATA, getContactPageData } from '../data/contactData';
import { useLanguage } from '../context/LanguageContext';

export const ContactDirectCardsSection: React.FC = () => {
  const { language, dir, isRtl, t } = useLanguage();
  const contactData = getContactPageData(language);
  const directCards = contactData.directContactCards || contactData.directCards || [];
  const { companyAddress, companyPhone, whatsapp, telegram } = CONTACT_PAGE_DATA;
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(companyAddress.fullAddress);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2500);
  };

  const getCardIcon = (id: string) => {
    switch (id) {
      case 'phone':
        return <Phone className="w-6 h-6 text-amber-400" />;
      case 'whatsapp':
        return <MessageCircle className="w-6 h-6 text-emerald-400" />;
      case 'telegram':
        return <Send className="w-6 h-6 text-sky-400" />;
      case 'email':
      default:
        return <Mail className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section
      id="contact-direct-cards-section"
      className="py-16 sm:py-20 bg-[#090d16] text-white border-b border-white/[0.08]"
      dir={dir}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-amber-300 text-xs font-semibold">
            {isRtl ? 'راه‌های ارتباطی و نشانی رسمی' : 'Official Direct Communications'}
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            {isRtl ? 'ارتباط مستقیم با شرکت و دفتر مرکزی' : 'Direct Liaison with Headquarters'}
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
            {isRtl
              ? 'از طریق خطوط تلفن، پیام‌رسان‌ها یا مراجعه حضوری با کارشناسان و مدیریت در ارتباط باشید.'
              : 'Connect directly with our desk coordinators and executive management via phone, instant channels, or secure correspondence.'}
          </p>
        </div>

        {/* 4 Direct Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {directCards.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className={`group p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-amber-400/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between ${
                isRtl ? 'text-right' : 'text-left'
              }`}
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getCardIcon(card.id)}
                  </div>
                  <span className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 text-amber-300/90 border border-white/10 font-medium">
                    {card.badge}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="space-y-1.5 p-3 rounded-xl bg-slate-950/70 border border-white/5 font-mono text-xs text-center text-slate-300 truncate">
                  {card.channelInfo}
                </div>
              </div>

              <div className="pt-5">
                {card.id === 'phone' ? (
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={`tel:${companyPhone.line1}`}
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-slate-950 border border-white/10 hover:border-amber-400 text-xs font-bold text-white transition-all"
                    >
                      <span>{isRtl ? 'خط ۱' : 'Line 1'}</span>
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={`tel:${companyPhone.line2}`}
                      className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-slate-950 border border-white/10 hover:border-amber-400 text-xs font-bold text-white transition-all"
                    >
                      <span>{isRtl ? 'خط ۲' : 'Line 2'}</span>
                      <Phone className="w-3.5 h-3.5" />
                    </a>
                  </div>
                ) : card.id === 'telegram' ? (
                  <div className="space-y-2">
                    <a
                      href={telegram.channelLink || telegram.channel}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-sky-500/15 hover:bg-sky-500 hover:text-slate-950 border border-sky-400/30 text-xs font-bold text-sky-200 transition-all"
                    >
                      <span>{card.actionText}</span>
                      <Send className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={telegram.adminLink || telegram.admin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 transition-all"
                    >
                      <span>{card.actionText2}</span>
                    </a>
                  </div>
                ) : (
                  <a
                    href={card.href}
                    target={card.href.startsWith('http') ? '_blank' : undefined}
                    rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-slate-950 border border-white/10 hover:border-amber-400 text-xs sm:text-sm font-bold text-white transition-all duration-200"
                  >
                    <span>{card.actionText}</span>
                    {card.id === 'whatsapp' ? (
                      <MessageCircle className="w-4 h-4" />
                    ) : (
                      <Mail className="w-4 h-4" />
                    )}
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Company Address & Google Map Embed Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-3xl bg-slate-900/60 border border-white/10 backdrop-blur-2xl overflow-hidden shadow-2xl p-6 sm:p-8 lg:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Address Details */}
            <div className={`lg:col-span-5 flex flex-col justify-between space-y-6 ${isRtl ? 'order-1 text-right' : 'order-1 lg:order-1 text-left'}`}>
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{isRtl ? 'آدرس و موقعیت مکانی شرکت' : 'Headquarters Location'}</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    {isRtl ? 'دفتر مرکزی شرکت' : 'Corporate Headquarters'}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                    {companyAddress.fullAddress}
                  </p>
                </div>

                <div className="space-y-2.5 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {isRtl ? 'روبروی درب اصلی دانشگاه اصفهان، مجتمع تجاری اداری پردیس ۲، واحد ۲۱۲' : 'Opposite University of Isfahan Main Gate, Pardis 2 Commercial Complex, Suite 212'}
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      {isRtl ? 'ساعات پذیرش مراجعین حضوری: شنبه تا چهارشنبه ۹:۰۰ الی ۱۷:۰۰ با هماهنگی قبلی' : 'Visiting Hours: Saturday - Wednesday, 09:00 - 17:00 (Prior appointment requested)'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <button
                  type="button"
                  onClick={handleCopyAddress}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs sm:text-sm font-semibold text-slate-200 transition-all cursor-pointer"
                >
                  {copiedAddress ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">{isRtl ? 'نشانی کپی شد!' : 'Address copied!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>{isRtl ? 'کپی نشانی کامل شرکت' : 'Copy Full Address'}</span>
                    </>
                  )}
                </button>

                <a
                  href={companyAddress.googleMapsDirectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-amber-500/20 cursor-pointer"
                >
                  <Navigation className="w-4 h-4" />
                  <span>{isRtl ? 'مسیریابی مستقیم در گوگل مپ' : 'Directions on Google Maps'}</span>
                </a>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className={`lg:col-span-7 flex flex-col justify-center ${isRtl ? 'order-2' : 'order-2'}`}>
              <div className="relative w-full h-[320px] sm:h-[380px] lg:h-full min-h-[350px] rounded-2xl overflow-hidden border border-white/15 bg-slate-950 shadow-inner group">
                <iframe
                  src={companyAddress.googleMapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="Headquarters Location"
                  className="w-full h-full filter contrast-[1.05] grayscale-[15%]"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
