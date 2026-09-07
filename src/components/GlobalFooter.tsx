import React from 'react';
import { Phone, Mail, MapPin, ArrowLeft, MessageCircle, Sparkles } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { PRIMARY_CTA, normalizePath } from '../navigation';

interface GlobalFooterProps {
  currentPath: string;
  onNavigate: (href: string) => void;
}

export const GlobalFooter: React.FC<GlobalFooterProps> = ({ currentPath, onNavigate }) => {
  const normalizedCurrent = normalizePath(currentPath);

  const servicesLinks = [
    { label: 'گردشگری سلامت', href: '/medical-tourism/' },
    { label: 'درخواست درمان', href: '/treatment-request/' },
    { label: 'گردشگری ورودی', href: '/incoming-tourism/' },
    { label: 'خدمات سفر', href: '/travel-services/' },
    { label: 'خدمات VIP', href: '/vip-services/' },
    { label: 'خدمات بین‌المللی', href: '/international-services/' },
  ];

  const quickLinks = [
    { label: 'خانه', href: '/' },
    { label: 'درباره ما', href: '/about-us/' },
    { label: 'مجله', href: '/journal/' },
    { label: 'تماس با ما', href: '/contact-us/' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      id="global-footer"
      role="contentinfo"
      dir="rtl"
      className="bg-[#05070d] text-white border-t border-white/[0.08] relative overflow-hidden font-sans"
    >
      {/* Subtle Ambient Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[250px] bg-blue-500/5 blur-[120px] pointer-events-none rounded-full" />

      {/* SECTION 14: FOOTER BANNER CTA */}
      <div className="border-b border-white/[0.06] bg-gradient-to-r from-slate-900/60 via-slate-900/30 to-slate-900/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 sm:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-right">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold">
              <Sparkles className="w-3 h-3" />
              همراهی از اولین گام
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              برای شروع مسیر خود با ما در ارتباط باشید
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light max-w-xl">
              تیم متخصصان و راهنمایان بین‌المللی ایرسا سیمرغ آماده ارائه مشاوره، برنامه‌ریزی سفر و پذیرش درمانی شما هستند.
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              id="footer-cta-btn"
              href={PRIMARY_CTA.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>{PRIMARY_CTA.label}</span>
              <ArrowLeft className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* SECTION 13: 4-COLUMN FOOTER STRUCTURE */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* COLUMN 1: IRSA SIMORGH (Brand & Positioning) */}
          <div className="lg:col-span-4 space-y-4 text-right">
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="inline-block focus:outline-none"
            >
              <BrandLogo size="md" />
            </a>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-sm">
              «ایرسا سیمرغ؛ همراه شما در تمام مسیر سفر، درمان و تجربه ایران»
            </p>
            <p className="text-[11px] text-slate-400 font-light leading-relaxed max-w-sm">
              ارائه‌دهنده خدمات تخصصی گردشگری سلامت، گردشگری ورودی، تشریفات VIP و ارتباطات تجاری بین‌المللی با تکیه بر استانداردهای جهانی و مهمان‌نوازی اصیل ایرانی.
            </p>
          </div>

          {/* COLUMN 2: خدمات (Services Links) */}
          <div className="lg:col-span-3 space-y-3.5 text-right">
            <h4 className="text-sm font-bold text-white tracking-wide border-r-2 border-amber-400 pr-2.5">
              خدمات
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {servicesLinks.map((link) => {
                const isActive = normalizePath(link.href) === normalizedCurrent;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`inline-block transition-colors py-0.5 ${
                        isActive
                          ? 'text-amber-300 font-bold pr-1'
                          : 'text-slate-300 hover:text-white hover:translate-x-[-2px]'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* COLUMN 3: دسترسی سریع (Quick Links) */}
          <div className="lg:col-span-2 space-y-3.5 text-right">
            <h4 className="text-sm font-bold text-white tracking-wide border-r-2 border-amber-400 pr-2.5">
              دسترسی سریع
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => {
                const isActive = normalizePath(link.href) === normalizedCurrent;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`inline-block transition-colors py-0.5 ${
                        isActive
                          ? 'text-amber-300 font-bold pr-1'
                          : 'text-slate-300 hover:text-white hover:translate-x-[-2px]'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* COLUMN 4: ارتباط با ما (Verified Contact Information) */}
          <div className="lg:col-span-3 space-y-3.5 text-right">
            <h4 className="text-sm font-bold text-white tracking-wide border-r-2 border-amber-400 pr-2.5">
              ارتباط با ما
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-light">
              {/* Phones */}
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5 font-mono text-xs">
                  <a href="tel:03131324716" className="block hover:text-white transition-colors" dir="ltr">
                    ۰۳۱-۳۱۳۲۴۷۱۶
                  </a>
                  <a href="tel:03131324717" className="block hover:text-white transition-colors" dir="ltr">
                    ۰۳۱-۳۱۳۲۴۷۱۷
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-label="واتس‌اپ" />
                <a
                  href="https://wa.me/989133607595"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors font-mono text-xs"
                  dir="ltr"
                >
                  واتس‌اپ: ۰۹۱۳۳۶۰۷۵۹۵
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a
                  href="mailto:CEO@medixmaster.com"
                  className="hover:text-blue-300 transition-colors font-mono text-xs"
                  dir="ltr"
                >
                  CEO@medixmaster.com
                </a>
              </div>

              {/* Physical Office Address */}
              <div className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-rose-400 flex-shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed text-slate-300">
                  اصفهان، خیابان بهار آزادی، روبروی درب دانشگاه اصفهان، مجتمع پردیس ۲، طبقه اول، واحد ۲۱۲
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SECTION 15: FOOTER BOTTOM BAR */}
      <div className="border-t border-white/[0.06] bg-[#04060a]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-right text-[11px] text-slate-400">
          <div>
            <span>© {new Date().getFullYear()} IRSA SIMORGH | ایرسا سیمرغ. کلیه حقوق محفوظ است.</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="font-light">استاندارد بین‌المللی گردشگری و سلامت</span>
            <span>•</span>
            <span className="font-light">Iran Tourism & Medical Hub</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
