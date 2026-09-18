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
  ExternalLink,
  Navigation,
} from 'lucide-react';
import { CONTACT_PAGE_DATA } from '../data/contactData';

export const ContactDirectCardsSection: React.FC = () => {
  const { directContactCards, companyAddress, companyPhone, whatsapp, telegram } = CONTACT_PAGE_DATA;
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
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="px-3.5 py-1 rounded-full bg-white/5 border border-white/10 text-amber-300 text-xs font-semibold">
            راه‌های ارتباطی و نشانی رسمی
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
            ارتباط مستقیم با شرکت و دفتر مرکزی
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed">
            از طریق خطوط تلفن، پیام‌رسان‌ها یا مراجعه حضوری با کارشناسان و مدیریت در ارتباط باشید.
          </p>
        </div>

        {/* 4 Direct Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1: Direct Company Phone Lines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0, ease: [0.16, 1, 0.3, 1] }}
            className="group p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-amber-400/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Phone className="w-6 h-6 text-amber-400" />
                </div>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 text-amber-300/90 border border-white/10 font-medium">
                  پاسخگویی اداری
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  تماس مستقیم با شرکت
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  خطوط تلفن دفتر مرکزی برای مشاوره و هماهنگی خدمات
                </p>
              </div>

              <div className="space-y-2 p-3 rounded-xl bg-slate-950/70 border border-white/5 font-mono text-center">
                <a
                  href={`tel:${companyPhone.line1}`}
                  className="block text-sm text-slate-200 hover:text-amber-300 font-bold transition-colors"
                  dir="ltr"
                >
                  031 - 31324716
                </a>
                <a
                  href={`tel:${companyPhone.line2}`}
                  className="block text-sm text-slate-200 hover:text-amber-300 font-bold transition-colors"
                  dir="ltr"
                >
                  031 - 31324717
                </a>
              </div>
            </div>

            <div className="pt-5 grid grid-cols-2 gap-2">
              <a
                href={`tel:${companyPhone.line1}`}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-slate-950 border border-white/10 hover:border-amber-400 text-xs font-bold text-white transition-all"
              >
                <span>خط ۱</span>
                <Phone className="w-3.5 h-3.5" />
              </a>
              <a
                href={`tel:${companyPhone.line2}`}
                className="inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-slate-950 border border-white/10 hover:border-amber-400 text-xs font-bold text-white transition-all"
              >
                <span>خط ۲</span>
                <Phone className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: WhatsApp */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-emerald-400/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-6 h-6 text-emerald-400" />
                </div>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-medium">
                  آنلاین و سریع
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-emerald-300 transition-colors">
                  شماره تماس در واتس‌اپ
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  ارسال پیام، مدارک پزشکی، ویزا و استعلام‌های فوری
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-white/5 font-mono text-center">
                <span className="text-sm font-bold text-slate-200" dir="ltr">
                  {whatsapp.number}
                </span>
              </div>
            </div>

            <div className="pt-5">
              <a
                href={whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-900/30"
              >
                <span>گفتگو در واتس‌اپ</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Card 3: Telegram (Channel & Admin) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="group p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-sky-400/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Send className="w-6 h-6 text-sky-400" />
                </div>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20 font-medium">
                  کانال و ادمین
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                  کانال تلگرام
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  عضویت در کانال و ارتباط مستقیم با ادمین تلگرام
                </p>
              </div>

              <div className="space-y-1.5 p-3 rounded-xl bg-slate-950/70 border border-white/5 text-xs text-center font-mono">
                <div className="text-slate-300">
                  <span className="text-slate-500 text-[11px]">کانال: </span>
                  <span className="text-sky-300 font-bold" dir="ltr">@{telegram.channel}</span>
                </div>
                <div className="text-slate-300">
                  <span className="text-slate-500 text-[11px]">ادمین: </span>
                  <span className="text-amber-300 font-bold" dir="ltr">@{telegram.admin}</span>
                </div>
              </div>
            </div>

            <div className="pt-5 grid grid-cols-2 gap-2">
              <a
                href={telegram.channelLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1 py-2.5 px-2 rounded-xl bg-white/5 hover:bg-sky-500 hover:text-white border border-white/10 hover:border-sky-400 text-xs font-bold text-white transition-all text-center"
              >
                <span>کانال</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href={telegram.adminLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1 py-2.5 px-2 rounded-xl bg-white/5 hover:bg-sky-500 hover:text-white border border-white/10 hover:border-sky-400 text-xs font-bold text-white transition-all text-center"
              >
                <span>پیام به ادمین</span>
                <Send className="w-3 h-3" />
              </a>
            </div>
          </motion.div>

          {/* Card 4: Executive Email */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
            className="group p-6 rounded-2xl bg-slate-900/60 border border-white/10 hover:border-amber-400/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 shadow-lg flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <span className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10 font-medium">
                  مکاتبه با مدیریت
                </span>
              </div>

              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  ایمیل سازمانی
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  مکاتبات رسمی، قراردادها و امور حقوقی و سرمایه‌گذاری
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-950/70 border border-white/5 text-xs text-slate-300 font-mono text-center truncate">
                CEO@medixmaster.com
              </div>
            </div>

            <div className="pt-5">
              <a
                href="mailto:CEO@medixmaster.com?subject=Direct%20Inquiry%20-%20IRSA%20SIMORGH"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/5 hover:bg-amber-500 hover:text-slate-950 border border-white/10 hover:border-amber-400 text-xs sm:text-sm font-bold text-white transition-all duration-200"
              >
                <span>ارسال ایمیل</span>
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
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
            {/* Address Details (Right side in RTL) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>آدرس و موقعیت مکانی شرکت</span>
                </div>

                <div className="space-y-3">
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    دفتر مرکزی شرکت
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                    {companyAddress.fullAddress}
                  </p>
                </div>

                {/* Quick Info Badges */}
                <div className="space-y-2.5 pt-2">
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 mt-2 flex-shrink-0" />
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      روبروی درب اصلی دانشگاه اصفهان، مجتمع تجاری اداری پردیس ۲، واحد ۲۱۲
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-950/60 border border-white/5 flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-amber-400 mt-2 flex-shrink-0" />
                    <p className="text-xs text-slate-300 font-light leading-relaxed">
                      ساعات پذیرش مراجعین حضوری: شنبه تا چهارشنبه ۹:۰۰ الی ۱۷:۰۰ با هماهنگی قبلی
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
                      <span className="text-emerald-300">نشانی کپی شد!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 text-slate-400" />
                      <span>کپی نشانی کامل شرکت</span>
                    </>
                  )}
                </button>

                <a
                  href={companyAddress.googleMapsDirectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-amber-500/20"
                >
                  <Navigation className="w-4 h-4" />
                  <span>مسیریابی مستقیم در گوگل مپ</span>
                </a>
              </div>
            </div>

            {/* Google Map Embed (Left side in RTL) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="relative w-full h-[320px] sm:h-[380px] lg:h-full min-h-[350px] rounded-2xl overflow-hidden border border-white/15 bg-slate-950 shadow-inner group">
                <iframe
                  src={companyAddress.googleMapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  title="نشان موقعیت مکانی شرکت روی گوگل مپ"
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
