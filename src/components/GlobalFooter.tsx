import React from 'react';
import { Phone, Mail, MapPin, ArrowLeft, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';
import { getPrimaryCta, getServicesDropdownItems, normalizePath } from '../navigation';

interface GlobalFooterProps {
  currentPath: string;
  onNavigate: (href: string) => void;
}

export const GlobalFooter: React.FC<GlobalFooterProps> = ({ currentPath, onNavigate }) => {
  const { language, dir, isRtl, t } = useLanguage();
  const normalizedCurrent = normalizePath(currentPath);
  const primaryCta = getPrimaryCta(language);
  const servicesDropdown = getServicesDropdownItems(language);

  const quickLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.aboutUs, href: '/about-us/' },
    { label: t.nav.ceo || (language === 'fa' ? 'مدیر عامل' : language === 'ar' ? 'المدير التنفيذي' : language === 'tr' ? 'Genel Müdür' : 'Founder & CEO'), href: '/ceo/' },
    { label: t.nav.journal, href: '/journal/' },
    { label: t.nav.contactUs, href: '/contact-us/' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    onNavigate(href);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <footer
      id="global-footer"
      role="contentinfo"
      dir={dir}
      className="bg-[#05070d] text-white border-t border-white/[0.08] relative overflow-hidden font-sans"
    >
      {/* Subtle Ambient Background Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-amber-500/5 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-0 left-1/4 w-[400px] h-[250px] bg-blue-500/5 blur-[120px] pointer-events-none rounded-full" />

      {/* FOOTER BANNER CTA */}
      <div className="border-b border-white/[0.06] bg-gradient-to-r from-slate-900/60 via-slate-900/30 to-slate-900/60">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-10 sm:py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className={`space-y-2 text-center ${isRtl ? 'md:text-right' : 'md:text-left'}`}>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-semibold">
              <Sparkles className="w-3 h-3" />
              {t.footer.bannerBadge}
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight">
              {t.footer.bannerTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 font-light max-w-xl">
              {t.footer.bannerSubtitle}
            </p>
          </div>

          <div className="flex-shrink-0">
            <a
              id="footer-cta-btn"
              href={primaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              <span>{t.footer.bannerCta}</span>
              <ArrowIcon className={`w-4 h-4 transform ${isRtl ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`} />
            </a>
          </div>
        </div>
      </div>

      {/* 4-COLUMN FOOTER STRUCTURE */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-14 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* COLUMN 1: Brand & Positioning */}
          <div className={`lg:col-span-4 space-y-4 ${isRtl ? 'text-right' : 'text-left'}`}>
            <a
              href="/"
              onClick={(e) => handleLinkClick(e, '/')}
              className="inline-block focus:outline-none"
            >
              <BrandLogo size="md" />
            </a>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed max-w-sm">
              {t.footer.slogan}
            </p>
            <p className="text-[11px] text-slate-400 font-light leading-relaxed max-w-sm">
              {t.footer.brandDesc}
            </p>
          </div>

          {/* COLUMN 2: Services Links */}
          <div className={`lg:col-span-3 space-y-3.5 ${isRtl ? 'text-right' : 'text-left'}`}>
            <h4 className={`text-sm font-bold text-white tracking-wide ${isRtl ? 'border-r-2 pr-2.5' : 'border-l-2 pl-2.5'} border-amber-400`}>
              {t.footer.colServices}
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {servicesDropdown.map((link) => {
                const isActive = normalizePath(link.href) === normalizedCurrent;
                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className={`inline-block transition-colors py-0.5 ${
                        isActive
                          ? 'text-amber-300 font-bold'
                          : 'text-slate-300 hover:text-white hover:underline'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* COLUMN 3: Quick Links */}
          <div className={`lg:col-span-2 space-y-3.5 ${isRtl ? 'text-right' : 'text-left'}`}>
            <h4 className={`text-sm font-bold text-white tracking-wide ${isRtl ? 'border-r-2 pr-2.5' : 'border-l-2 pl-2.5'} border-amber-400`}>
              {t.footer.colQuickLinks}
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
                          ? 'text-amber-300 font-bold'
                          : 'text-slate-300 hover:text-white hover:underline'
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* COLUMN 4: Contact Information */}
          <div className={`lg:col-span-3 space-y-3.5 ${isRtl ? 'text-right' : 'text-left'}`}>
            <h4 className={`text-sm font-bold text-white tracking-wide ${isRtl ? 'border-r-2 pr-2.5' : 'border-l-2 pl-2.5'} border-amber-400`}>
              {t.footer.colContact}
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-300 font-light">
              {/* Phones */}
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="space-y-0.5 font-mono text-xs">
                  <a href="tel:03131324716" className="block hover:text-white transition-colors" dir="ltr">
                    +98 (31) 3132-4716
                  </a>
                  <a href="tel:03131324717" className="block hover:text-white transition-colors" dir="ltr">
                    +98 (31) 3132-4717
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" aria-label="WhatsApp" />
                <a
                  href="https://wa.me/989133607595"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 transition-colors font-mono text-xs"
                  dir="ltr"
                >
                  WhatsApp: +98 913 360 7595
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
                  {t.footer.addressText || t.footer.addressLabel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM BAR WITH LANGUAGE SELECTOR */}
      <div className="border-t border-white/[0.06] bg-[#04060a]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-right text-[11px] text-slate-400">
          <div>
            <span>{t.footer.copyright}</span>
          </div>

          {/* Language Selector in Footer with Flags */}
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400">
              {t.header?.chooseLanguage || t.nav.selectLanguage}:
            </span>
            <LanguageSelector variant="inline" />
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span className="font-light">{t.footer.standards}</span>
            <span>•</span>
            <span className="font-light">Airsa Simorgh Jahan Global</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
