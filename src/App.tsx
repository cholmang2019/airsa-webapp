import React, { useState, useEffect, useCallback } from 'react';
import { GlobalHeader } from './components/GlobalHeader';
import { GlobalFooter } from './components/GlobalFooter';
import { HomePage } from './pages/HomePage';
import { MedicalTourismPage } from './pages/MedicalTourismPage';
import { TreatmentRequestPage } from './pages/TreatmentRequestPage';
import { IncomingTourismPage } from './pages/IncomingTourismPage';
import { TravelServicesPage } from './pages/TravelServicesPage';
import { VipServicesPage } from './pages/VipServicesPage';
import { InternationalServicesPage } from './pages/InternationalServicesPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { JournalPage } from './pages/JournalPage';
import { ContactPage } from './pages/ContactPage';
import { ALL_ROUTES, normalizePath } from './navigation';

const PAGE_TITLES: Record<string, string> = {
  '/': 'ایرسا سیمرغ (IRSA SIMORGH) | خدمات گردشگری سلامت و تشریفات بین‌المللی',
  '/medical-tourism/': 'گردشگری سلامت | ایرسا سیمرغ (IRSA SIMORGH)',
  '/treatment-request/': 'درخواست درمان | ایرسا سیمرغ (IRSA SIMORGH)',
  '/incoming-tourism/': 'گردشگری ورودی | ایرسا سیمرغ (IRSA SIMORGH)',
  '/travel-services/': 'خدمات سفر | ایرسا سیمرغ (IRSA SIMORGH)',
  '/vip-services/': 'خدمات VIP و تشریفات اختصاصی | ایرسا سیمرغ (IRSA SIMORGH)',
  '/international-services/': 'خدمات بین‌المللی و بازرگانی | ایرسا سیمرغ (IRSA SIMORGH)',
  '/about-us/': 'درباره ما | ایرسا سیمرغ (IRSA SIMORGH)',
  '/journal/': 'مجله و مقالات تخصصی | ایرسا سیمرغ (IRSA SIMORGH)',
  '/contact-us/': 'تماس با ما | ایرسا سیمرغ (IRSA SIMORGH)',
};

const resolvePathFromUrl = (): string => {
  if (typeof window === 'undefined') return '/';

  // Check hash fallback if available (e.g. #/treatment-request/)
  if (window.location.hash && window.location.hash.startsWith('#/')) {
    return normalizePath(window.location.hash.slice(1));
  }

  const path = window.location.pathname;
  if (!path || path === '' || path === '/') return '/';

  // Find exact matching route
  const normalized = normalizePath(path);
  const exactMatch = ALL_ROUTES.find((r) => normalizePath(r.href) === normalized);
  if (exactMatch) return exactMatch.href;

  // Subpath fuzzy match for cloud previews or subfolder hosting
  const subMatch = ALL_ROUTES.find(
    (r) => r.href !== '/' && path.includes(r.href.replace(/\//g, ''))
  );
  if (subMatch) return subMatch.href;

  return '/';
};

/**
 * IRSA SIMORGH | Global Website Shell & Responsive Navigation System
 *
 * Requirements fulfilled:
 * - Global Header (Sticky, Desktop glassmorphism, Dropdown "خدمات", Mobile Drawer)
 * - Exact 10 Navigation Routes
 * - Active Page State on Desktop & Mobile
 * - Preserved and untouched page bodies
 * - Global Footer (4 Columns + Banner CTA + Bottom Copyright Bar)
 * - Pure Persian RTL & Vazir typography
 */
export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(resolvePathFromUrl);

  const navigateTo = useCallback((newPath: string) => {
    const normalized = normalizePath(newPath);
    setCurrentPath(normalized);

    // Update browser URL via History API
    if (typeof window !== 'undefined') {
      try {
        window.history.pushState({}, '', normalized);
      } catch {
        // Fallback for restricted sandboxes
        window.location.hash = `#${normalized}`;
      }
      window.scrollTo({ top: 0, behavior: 'instant' });

      // Update page title
      const title = PAGE_TITLES[normalized] || PAGE_TITLES['/'];
      document.title = title;
    }
  }, []);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const resolved = resolvePathFromUrl();
      setCurrentPath(resolved);
      window.scrollTo({ top: 0, behavior: 'instant' });
      const title = PAGE_TITLES[resolved] || PAGE_TITLES['/'];
      document.title = title;
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Update initial title
  useEffect(() => {
    const title = PAGE_TITLES[currentPath] || PAGE_TITLES['/'];
    document.title = title;
  }, [currentPath]);

  // Render current page body
  const renderPageBody = () => {
    const normalized = normalizePath(currentPath);

    switch (normalized) {
      case '/':
        return <HomePage />;
      case '/medical-tourism/':
        return <MedicalTourismPage />;
      case '/treatment-request/':
        return <TreatmentRequestPage />;
      case '/incoming-tourism/':
        return <IncomingTourismPage />;
      case '/travel-services/':
        return <TravelServicesPage />;
      case '/vip-services/':
        return <VipServicesPage />;
      case '/international-services/':
        return <InternationalServicesPage />;
      case '/about-us/':
        return <AboutUsPage />;
      case '/journal/':
        return <JournalPage />;
      case '/contact-us/':
        return <ContactPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div
      id="irsa-simorgh-global-shell"
      className="min-h-screen flex flex-col bg-[#070a12] text-white selection:bg-amber-500/20 selection:text-amber-200 font-sans overflow-x-hidden w-full"
      dir="rtl"
    >
      {/* 1. Global Sticky Header */}
      <GlobalHeader currentPath={currentPath} onNavigate={navigateTo} />

      {/* 2. Main Page Body (Cleanly rendered per route without modification) */}
      <main id="irsa-simorgh-page-content" className="flex-grow w-full overflow-x-clip">
        {renderPageBody()}
      </main>

      {/* 3. Global Footer */}
      <GlobalFooter currentPath={currentPath} onNavigate={navigateTo} />
    </div>
  );
}
