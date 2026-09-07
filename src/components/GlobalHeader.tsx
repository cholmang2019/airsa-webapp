import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowLeft, Menu, X, Sparkles } from 'lucide-react';
import { BrandLogo } from './BrandLogo';
import {
  MAIN_NAV_ITEMS,
  SERVICES_DROPDOWN_ITEMS,
  SECONDARY_NAV_ITEMS,
  ALL_ROUTES,
  PRIMARY_CTA,
  normalizePath,
} from '../navigation';

interface GlobalHeaderProps {
  currentPath: string;
  onNavigate: (href: string) => void;
}

export const GlobalHeader: React.FC<GlobalHeaderProps> = ({ currentPath, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const normalizedCurrent = normalizePath(currentPath);

  // Detect scroll to toggle sticky solid glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click or escape
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsServicesDropdownOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsServicesDropdownOpen(false);
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
    onNavigate(href);
  };

  const isServicesActive = SERVICES_DROPDOWN_ITEMS.some(
    (item) => normalizePath(item.href) === normalizedCurrent
  );

  return (
    <>
      <header
        id="global-header"
        role="banner"
        dir="rtl"
        className={`sticky top-0 z-50 w-full transition-all duration-300 font-sans ${
          isScrolled
            ? 'bg-[#070a12]/92 backdrop-blur-xl border-b border-white/[0.08] shadow-xl shadow-black/25 py-3'
            : 'bg-[#070a12]/70 backdrop-blur-md border-b border-white/[0.04] py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 flex items-center justify-between gap-3">
          {/* RIGHT: Logo / Brand */}
          <div className="flex-shrink-0 flex items-center">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('/');
              }}
              className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-xl"
              aria-label="ایرسا سیمرغ - صفحه اصلی"
            >
              <BrandLogo size="md" />
            </a>
          </div>

          {/* CENTER: Desktop & Large Tablet Navigation */}
          <nav
            role="navigation"
            aria-label="منوی اصلی وبسایت ایرسا سیمرغ"
            className="hidden xl:flex items-center gap-1.5 2xl:gap-2 text-sm"
          >
            {/* Direct Main Items */}
            {MAIN_NAV_ITEMS.map((item) => {
              const isActive = normalizePath(item.href) === normalizedCurrent;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative px-3 py-1.5 rounded-lg text-xs 2xl:text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 whitespace-nowrap ${
                    isActive
                      ? 'text-amber-300 bg-white/10 shadow-inner'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-amber-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}

            {/* Dropdown: خدمات (Grouping: خدمات سفر, خدمات VIP, خدمات بین‌المللی) */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setIsServicesDropdownOpen((prev) => !prev)}
                onMouseEnter={() => setIsServicesDropdownOpen(true)}
                aria-expanded={isServicesDropdownOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs 2xl:text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 whitespace-nowrap cursor-pointer ${
                  isServicesActive || isServicesDropdownOpen
                    ? 'text-amber-300 bg-white/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                <span>خدمات</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    isServicesDropdownOpen ? 'rotate-180 text-amber-400' : 'text-slate-400'
                  }`}
                />
                {isServicesActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                )}
              </button>

              {/* Dropdown Menu Panel */}
              <AnimatePresence>
                {isServicesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    className="absolute right-0 top-full mt-2 w-48 rounded-xl bg-[#0b101b]/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/60 py-2 z-50"
                    role="menu"
                    aria-label="زیرمنوی خدمات"
                  >
                    {SERVICES_DROPDOWN_ITEMS.map((item) => {
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
                          className={`flex items-center justify-between px-4 py-2.5 text-xs 2xl:text-sm transition-colors ${
                            isActive
                              ? 'text-amber-300 bg-white/10 font-bold'
                              : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                          }`}
                        >
                          <span>{item.label}</span>
                          {isActive && (
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                          )}
                        </a>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Secondary Direct Items: درباره ما, مجله, تماس با ما */}
            {SECONDARY_NAV_ITEMS.map((item) => {
              const isActive = normalizePath(item.href) === normalizedCurrent;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative px-3 py-1.5 rounded-lg text-xs 2xl:text-sm font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 whitespace-nowrap ${
                    isActive
                      ? 'text-amber-300 bg-white/10 shadow-inner'
                      : 'text-slate-300 hover:text-white hover:bg-white/[0.06]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-amber-400 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* LEFT: Primary CTA on Desktop / Tablet + Mobile Hamburger */}
          <div className="flex items-center gap-3">
            {/* Primary CTA Button (Visible on Desktop and Tablet) */}
            <a
              id="header-primary-cta"
              href={PRIMARY_CTA.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs sm:text-sm shadow-md shadow-amber-500/20 hover:shadow-amber-500/30 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 cursor-pointer whitespace-nowrap"
            >
              <span>{PRIMARY_CTA.label}</span>
              <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-0.5 transition-transform" />
            </a>

            {/* Hamburger Button for Mobile and Tablet (< 1280px) */}
            <button
              id="header-hamburger-btn"
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="xl:hidden inline-flex items-center justify-center p-2.5 rounded-xl bg-white/[0.06] hover:bg-white/10 text-white border border-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label={isMobileMenuOpen ? 'بستن منوی ناوبری' : 'باز کردن منوی ناوبری'}
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
            dir="rtl"
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
                  aria-label="بستن منو"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Items List */}
              <nav className="p-6 space-y-1.5 divide-y divide-white/[0.05]">
                <div className="pb-3 space-y-1">
                  {ALL_ROUTES.map((item) => {
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

                {/* Mobile Drawer Footer with CTA */}
                <div className="pt-5 space-y-3">
                  <a
                    href={PRIMARY_CTA.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-sm shadow-lg shadow-amber-500/20"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>{PRIMARY_CTA.label}</span>
                    <ArrowLeft className="w-4 h-4" />
                  </a>

                  <p className="text-center text-[11px] text-slate-400">
                    ایرسا سیمرغ؛ خدمات گردشگری سلامت و تشریفات بین‌المللی در ایران
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
