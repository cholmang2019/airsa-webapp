import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Menu, X, ArrowUpRight } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import { PWAInstallButton } from './PWAInstallButton';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '../context/LanguageContext';
import {
  getMainNavItems,
  getServicesDropdownItems,
  getAboutDropdownItems,
  getAllRoutes,
  normalizePath,
  NAV_LABELS,
} from '../navigation';

interface GlobalHeaderProps {
  currentPath: string;
  onNavigate: (href: string) => void;
}

export const GlobalHeader: React.FC<GlobalHeaderProps> = ({ currentPath, onNavigate }) => {
  const { language, dir, isRtl, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const servicesDropdownRef = useRef<HTMLDivElement>(null);
  const aboutDropdownRef = useRef<HTMLDivElement>(null);
  const normalizedCurrent = normalizePath(currentPath);

  const mainNavItems = getMainNavItems(language);
  const servicesDropdownItems = getServicesDropdownItems(language);
  const aboutDropdownItems = getAboutDropdownItems(language);
  const allRoutes = getAllRoutes(language);

  // Detect scroll to toggle sticky solid glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns on outside click or escape
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(e.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
      if (aboutDropdownRef.current && !aboutDropdownRef.current.contains(e.target as Node)) {
        setIsAboutDropdownOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsServicesDropdownOpen(false);
        setIsAboutDropdownOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setIsServicesDropdownOpen(false);
    setIsAboutDropdownOpen(false);
    onNavigate(href);
  };

  const isServicesActive = servicesDropdownItems.some(
    (item) => normalizePath(item.href) === normalizedCurrent
  );

  const isAboutActive = aboutDropdownItems.some(
    (item) => normalizePath(item.href) === normalizedCurrent
  );

  const isTreatmentActive = normalizedCurrent === '/treatment-request/';

  return (
    <>
      <header
        id="global-header"
        role="banner"
        dir={dir}
        className={`sticky top-0 z-50 w-full transition-all duration-300 font-sans ${
          isScrolled
            ? 'bg-[#070a12]/95 backdrop-blur-xl border-b border-white/[0.08] shadow-xl shadow-black/30 py-2.5 sm:py-3'
            : 'bg-[#070a12]/80 backdrop-blur-md border-b border-white/[0.04] py-3 sm:py-3.5'
        }`}
      >
        <div className="w-full max-w-[1440px] 2xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 lg:gap-6">
          {/* Logo / Brand */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/');
              }}
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-xl"
              aria-label={t.header.homeAria}
            >
              <BrandLogo size="md" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav
            role="navigation"
            aria-label={t.header.navAria}
            className="hidden xl:flex items-center gap-1 2xl:gap-2 text-xs 2xl:text-sm font-medium"
          >
            {/* 1. Home */}
            {(() => {
              const homeItem = mainNavItems.find((i) => i.id === 'home');
              if (!homeItem) return null;
              const isActive = normalizePath(homeItem.href) === normalizedCurrent;
              return (
                <a
                  key="home"
                  href={homeItem.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(homeItem.href);
                  }}
                  className={`relative px-2.5 2xl:px-3 py-1.5 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 whitespace-nowrap ${
                    isActive
                      ? 'text-amber-300 bg-white/10 shadow-inner font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {homeItem.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-amber-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })()}

            {/* 2. Medical Tourism */}
            {(() => {
              const medItem = mainNavItems.find((i) => i.id === 'medical-tourism');
              if (!medItem) return null;
              const isActive = normalizePath(medItem.href) === normalizedCurrent;
              return (
                <a
                  key="medical-tourism"
                  href={medItem.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(medItem.href);
                  }}
                  className={`relative px-2.5 2xl:px-3 py-1.5 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 whitespace-nowrap ${
                    isActive
                      ? 'text-amber-300 bg-white/10 shadow-inner font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {medItem.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-amber-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })()}

            {/* 3. Services Dropdown */}
            <div className="relative" ref={servicesDropdownRef}>
              <button
                id="header-services-dropdown-btn"
                type="button"
                onClick={() => {
                  setIsServicesDropdownOpen((prev) => !prev);
                  setIsAboutDropdownOpen(false);
                }}
                className={`flex items-center gap-1 px-2.5 2xl:px-3 py-1.5 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 whitespace-nowrap ${
                  isServicesActive
                    ? 'text-amber-300 bg-white/10 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                }`}
                aria-haspopup="true"
                aria-expanded={isServicesDropdownOpen}
                aria-controls="services-menu-dropdown"
              >
                <span>{t.header.services}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${
                    isServicesDropdownOpen ? 'rotate-180 text-amber-400' : 'text-slate-400'
                  }`}
                />
              </button>

              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <motion.div
                    id="services-menu-dropdown"
                    role="menu"
                    aria-label={t.header.servicesMenu}
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className={`absolute top-full mt-2 w-80 rounded-2xl bg-[#090d19]/98 border border-white/10 backdrop-blur-2xl shadow-2xl shadow-black/70 p-2 z-50 ${
                      isRtl ? 'right-0 origin-top-right' : 'left-0 origin-top-left'
                    }`}
                  >
                    <div className="px-3 py-1.5 text-[10px] font-semibold tracking-wider text-amber-400/80 border-b border-white/10 uppercase mb-1">
                      {t.header.servicesMenu}
                    </div>
                    <div className="space-y-1">
                      {servicesDropdownItems.map((item) => {
                        const isActive = normalizePath(item.href) === normalizedCurrent;
                        return (
                          <a
                            key={item.id}
                            href={item.href}
                            role="menuitem"
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavClick(item.href);
                            }}
                            className={`flex items-start gap-2.5 p-2.5 rounded-xl text-xs transition-colors duration-150 ${
                              isActive
                                ? 'bg-amber-400/10 text-amber-300 font-bold border border-amber-400/20'
                                : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                            }`}
                          >
                            <div className="flex-1">
                              <div className="font-semibold">{item.label}</div>
                              {item.description && (
                                <p className="text-[11px] text-slate-400 font-normal mt-0.5 line-clamp-1">
                                  {item.description}
                                </p>
                              )}
                            </div>
                            {isActive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 self-center shrink-0" />
                            )}
                          </a>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 4. About Us Dropdown */}
            <div className="relative" ref={aboutDropdownRef}>
              <button
                id="header-about-dropdown-btn"
                type="button"
                onClick={() => {
                  setIsAboutDropdownOpen((prev) => !prev);
                  setIsServicesDropdownOpen(false);
                }}
                className={`flex items-center gap-1 px-2.5 2xl:px-3 py-1.5 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 whitespace-nowrap ${
                  isAboutActive
                    ? 'text-amber-300 bg-white/10 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                }`}
                aria-haspopup="true"
                aria-expanded={isAboutDropdownOpen}
                aria-controls="about-menu-dropdown"
              >
                <span>{t.header.about}</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${
                    isAboutDropdownOpen ? 'rotate-180 text-amber-400' : 'text-slate-400'
                  }`}
                />
              </button>

              <AnimatePresence>
                {isAboutDropdownOpen && (
                  <motion.div
                    id="about-menu-dropdown"
                    role="menu"
                    aria-label={t.header.aboutMenu}
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    className={`absolute top-full mt-2 w-72 rounded-2xl bg-[#090d19]/98 border border-white/10 backdrop-blur-2xl shadow-2xl shadow-black/70 p-2 z-50 ${
                      isRtl ? 'right-0 origin-top-right' : 'left-0 origin-top-left'
                    }`}
                  >
                    <div className="px-3 py-1.5 text-[10px] font-semibold tracking-wider text-amber-400/80 border-b border-white/10 uppercase mb-1">
                      {t.header.aboutMenu}
                    </div>
                    <div className="space-y-1">
                      {aboutDropdownItems.map((item) => {
                        const isActive = normalizePath(item.href) === normalizedCurrent;
                        return (
                          <a
                            key={item.id}
                            href={item.href}
                            role="menuitem"
                            onClick={(e) => {
                              e.preventDefault();
                              handleNavClick(item.href);
                            }}
                            className={`flex items-start gap-2.5 p-2.5 rounded-xl text-xs transition-colors duration-150 ${
                              isActive
                                ? 'bg-amber-400/10 text-amber-300 font-bold border border-amber-400/20'
                                : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                            }`}
                          >
                            <div className="flex-1">
                              <div className="font-semibold">{item.label}</div>
                              {item.description && (
                                <p className="text-[11px] text-slate-400 font-normal mt-0.5 line-clamp-1">
                                  {item.description}
                                </p>
                              )}
                            </div>
                            {isActive && (
                              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 self-center shrink-0" />
                            )}
                          </a>
                        );
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 5. Journal */}
            {(() => {
              const journalItem = mainNavItems.find((i) => i.id === 'journal');
              if (!journalItem) return null;
              const isActive = normalizePath(journalItem.href) === normalizedCurrent;
              return (
                <a
                  key="journal"
                  href={journalItem.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(journalItem.href);
                  }}
                  className={`relative px-2.5 2xl:px-3 py-1.5 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 whitespace-nowrap ${
                    isActive
                      ? 'text-amber-300 bg-white/10 shadow-inner font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {journalItem.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-amber-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })()}

            {/* 6. Contact Us */}
            {(() => {
              const contactItem = mainNavItems.find((i) => i.id === 'contact-us');
              if (!contactItem) return null;
              const isActive = normalizePath(contactItem.href) === normalizedCurrent;
              return (
                <a
                  key="contact-us"
                  href={contactItem.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(contactItem.href);
                  }}
                  className={`relative px-2.5 2xl:px-3 py-1.5 rounded-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 whitespace-nowrap ${
                    isActive
                      ? 'text-amber-300 bg-white/10 shadow-inner font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {contactItem.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-amber-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })()}

            {/* 7. Treatment Request (Prominent Action Link) */}
            <a
              href="/treatment-request/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/treatment-request/');
              }}
              className={`px-3 py-1.5 rounded-xl transition-all duration-200 border whitespace-nowrap shadow-sm text-xs font-semibold ${
                isTreatmentActive
                  ? 'bg-amber-400 text-slate-950 border-amber-300 font-bold shadow-amber-500/25'
                  : 'bg-amber-400/10 text-amber-300 border-amber-400/30 hover:bg-amber-400/20 hover:border-amber-400/60'
              }`}
              aria-current={isTreatmentActive ? 'page' : undefined}
            >
              {NAV_LABELS[language]['treatment-request']}
            </a>
          </nav>

          {/* ACTIONS: Language Selector with Country Flags + Install PWA + Mobile Hamburger */}
          <div className="flex items-center gap-2 sm:gap-2.5 flex-shrink-0 z-20">
            {/* Multi-language Selector Dropdown with Flags (Always visible on desktop and tablet) */}
            <div className="flex-shrink-0">
              <LanguageSelector variant="dropdown" />
            </div>

            {/* Install PWA Button */}
            <PWAInstallButton variant="header" />

            {/* Hamburger Button for Mobile and Tablet (< 1280px) */}
            <button
              id="header-hamburger-btn"
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="xl:hidden inline-flex items-center justify-center p-2 rounded-xl bg-white/[0.06] hover:bg-white/10 text-white border border-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 shrink-0"
              aria-label={isMobileMenuOpen ? t.header.closeMenu : t.header.openMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-amber-400" />
              ) : (
                <Menu className="w-5 h-5 text-slate-200" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE & TABLET NAVIGATION DRAWER */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div
            id="mobile-navigation-drawer"
            className="fixed inset-0 z-50 xl:hidden flex flex-col justify-start"
            dir={dir}
          >
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
              aria-hidden="true"
            />

            {/* Slide-Down Mobile Panel */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative z-10 w-full max-h-[92vh] bg-[#080c16] border-b border-white/10 shadow-2xl flex flex-col overflow-y-auto"
            >
              {/* Mobile Drawer Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08]">
                <BrandLogo size="sm" showSubtitle={false} onClick={() => handleNavClick('/')} />
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors"
                  aria-label={t.header.closeMenu}
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Language Selector in Mobile Drawer with Flags */}
              <div className="px-6 pt-4 pb-2 border-b border-white/[0.06]">
                <LanguageSelector variant="mobile" />
              </div>

              {/* Navigation Items List */}
              <nav className="p-6 space-y-1.5 divide-y divide-white/[0.05]">
                <div className="pb-3 space-y-1">
                  {allRoutes.map((item) => {
                    const isActive = normalizePath(item.href) === normalizedCurrent;
                    return (
                      <a
                        key={item.id}
                        href={item.href}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }}
                        className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-colors min-h-[44px] ${
                          isActive
                            ? 'bg-amber-400/10 text-amber-300 font-bold border border-amber-400/20'
                            : 'text-slate-300 hover:text-white hover:bg-white/5'
                        }`}
                        aria-current={isActive ? 'page' : undefined}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <span className="w-2 h-2 rounded-full bg-amber-400 shadow-sm shadow-amber-400" />
                        )}
                      </a>
                    );
                  })}
                </div>

                {/* Mobile Drawer Footer */}
                <div className="pt-5 space-y-3">
                  <PWAInstallButton variant="header" className="w-full justify-center py-2.5" />

                  <p className="text-center text-[11px] text-slate-400 pt-1">
                    {t.footer.slogan}
                  </p>
                </div>
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
