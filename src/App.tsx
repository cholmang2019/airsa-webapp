import React, { useState, useEffect, useCallback } from 'react';
import { LanguageProvider, useLanguage, Language } from './context/LanguageContext';
import { GlobalHeader } from './components/GlobalHeader';
import { GlobalFooter } from './components/GlobalFooter';
import { OfflineIndicator } from './components/OfflineIndicator';
import { PWAInstallButton } from './components/PWAInstallButton';
import { HomePage } from './pages/HomePage';
import { MedicalTourismPage } from './pages/MedicalTourismPage';
import { TreatmentRequestPage } from './pages/TreatmentRequestPage';
import { IncomingTourismPage } from './pages/IncomingTourismPage';
import { TravelServicesPage } from './pages/TravelServicesPage';
import { VipServicesPage } from './pages/VipServicesPage';
import { InternationalServicesPage } from './pages/InternationalServicesPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { CeoPage } from './pages/CeoPage';
import { JournalPage } from './pages/JournalPage';
import { ContactPage } from './pages/ContactPage';
import { ALL_ROUTES, normalizePath } from './navigation';

const PAGE_TITLES_BY_LANG: Record<Language, Record<string, string>> = {
  fa: {
    '/': 'ایرسا سیمرغ جهان (Airsa Simorgh Jahan) | خدمات گردشگری سلامت و تشریفات بین‌المللی',
    '/medical-tourism/': 'گردشگری سلامت | ایرسا سیمرغ جهان (Airsa Simorgh Jahan)',
    '/treatment-request/': 'درخواست درمان | ایرسا سیمرغ جهان (Airsa Simorgh Jahan)',
    '/incoming-tourism/': 'گردشگری ورودی | ایرسا سیمرغ جهان (Airsa Simorgh Jahan)',
    '/travel-services/': 'خدمات سفر | ایرسا سیمرغ جهان (Airsa Simorgh Jahan)',
    '/vip-services/': 'خدمات VIP و تشریفات اختصاصی | ایرسا سیمرغ جهان (Airsa Simorgh Jahan)',
    '/international-services/': 'خدمات بین‌المللی و بازرگانی | ایرسا سیمرغ جهان (Airsa Simorgh Jahan)',
    '/about-us/': 'درباره ما | ایرسا سیمرغ جهان (Airsa Simorgh Jahan)',
    '/ceo/': 'حدیثه دهقانی پوده | بنیان‌گذار و مدیر ایرسا سیمرغ جهان',
    '/journal/': 'مجله و مقالات تخصصی | ایرسا سیمرغ جهان (Airsa Simorgh Jahan)',
    '/contact-us/': 'تماس با ما | ایرسا سیمرغ جهان (Airsa Simorgh Jahan)',
  },
  en: {
    '/': 'Airsa Simorgh Jahan | Medical Tourism, VIP Concierge & Travel Services in Iran',
    '/medical-tourism/': 'Medical Tourism | Airsa Simorgh Jahan',
    '/treatment-request/': 'Treatment Request | Airsa Simorgh Jahan',
    '/incoming-tourism/': 'Inbound Cultural Tourism | Airsa Simorgh Jahan',
    '/travel-services/': 'Travel & Ticketing Services | Airsa Simorgh Jahan',
    '/vip-services/': 'VIP Concierge & CIP Protocol | Airsa Simorgh Jahan',
    '/international-services/': 'International Corporate & Residency | Airsa Simorgh Jahan',
    '/about-us/': 'About Us | Airsa Simorgh Jahan',
    '/ceo/': 'Hadiseh Dehghani Poudeh | Founder & CEO of Airsa Simorgh Jahan',
    '/journal/': 'Journal & Articles | Airsa Simorgh Jahan',
    '/contact-us/': 'Contact Us | Airsa Simorgh Jahan',
  },
  ar: {
    '/': 'إيرسا سيمرغ جهان | خدمات السياحة العلاجية وتشريفات كبار الشخصيات في إيران',
    '/medical-tourism/': 'السياحة العلاجية | إيرسا سيمرغ جهان',
    '/treatment-request/': 'طلب العلاج والقبول الدولي | إيرسا سيمرغ جهان',
    '/incoming-tourism/': 'السياحة الوافدة واستكشاف إيران | إيرسا سيمرغ جهان',
    '/travel-services/': 'خدمات السفر وتذاكر الطيران | إيرسا سيمرغ جهان',
    '/vip-services/': 'خدمات كبار الشخصيات VIP والتشريفات | إيرسا سيمرغ جهان',
    '/international-services/': 'الخدمات الدولية والإقامة والاستثمار | إيرسا سيمرغ جهان',
    '/about-us/': 'عن الشركة | إيرسا سيمرغ جهان',
    '/ceo/': 'حديثة دهقاني بوده | المؤسس والمدير التنفيذي لإيرسا سيمرغ جهان',
    '/journal/': 'المجلة والمقالات المتخصصة | إيرسا سيمرغ جهان',
    '/contact-us/': 'اتصل بنا | إيرسا سيمرغ جهان',
  },
  tr: {
    '/': 'Airsa Simorgh Jahan | İran Sağlık Turizmi ve VIP Seyahat Hizmetleri',
    '/medical-tourism/': 'Sağlık Turizmi | Airsa Simorgh Jahan',
    '/treatment-request/': 'Tedavi Talebi | Airsa Simorgh Jahan',
    '/incoming-tourism/': 'Gelen Turizm & İran Turları | Airsa Simorgh Jahan',
    '/travel-services/': 'Seyahat ve Ulaşım Hizmetleri | Airsa Simorgh Jahan',
    '/vip-services/': 'VIP Konsiyerj ve CIP Protokolü | Airsa Simorgh Jahan',
    '/international-services/': 'Uluslararası Ticaret ve Danışmanlık | Airsa Simorgh Jahan',
    '/about-us/': 'Hakkımızda | Airsa Simorgh Jahan',
    '/ceo/': 'Hadiseh Dehghani Poudeh | Kurucu ve Genel Müdür',
    '/journal/': 'Dergi ve Sağlık Rehberi | Airsa Simorgh Jahan',
    '/contact-us/': 'İletişim | Airsa Simorgh Jahan',
  },
};

const resolvePathFromUrl = (): string => {
  if (typeof window === 'undefined') return '/';

  if (window.location.hash && window.location.hash.startsWith('#/')) {
    return normalizePath(window.location.hash.slice(1));
  }

  const path = window.location.pathname;
  if (!path || path === '' || path === '/') return '/';

  const normalized = normalizePath(path);
  const exactMatch = ALL_ROUTES.find((r) => normalizePath(r.href) === normalized);
  if (exactMatch) return exactMatch.href;

  const subMatch = ALL_ROUTES.find(
    (r) => r.href !== '/' && path.includes(r.href.replace(/\//g, ''))
  );
  if (subMatch) return subMatch.href;

  return '/';
};

function MainAppShell() {
  const { language, dir } = useLanguage();
  const [currentPath, setCurrentPath] = useState<string>(resolvePathFromUrl);

  const getTitle = useCallback(
    (path: string) => {
      const normalized = normalizePath(path);
      const dict = PAGE_TITLES_BY_LANG[language] || PAGE_TITLES_BY_LANG.fa;
      return dict[normalized] || dict['/'];
    },
    [language]
  );

  const navigateTo = useCallback(
    (newPath: string) => {
      const normalized = normalizePath(newPath);
      setCurrentPath(normalized);

      if (typeof window !== 'undefined') {
        try {
          window.history.pushState({}, '', normalized);
        } catch {
          window.location.hash = `#${normalized}`;
        }
        window.scrollTo({ top: 0, behavior: 'instant' });
        document.title = getTitle(normalized);
      }
    },
    [getTitle]
  );

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const resolved = resolvePathFromUrl();
      setCurrentPath(resolved);
      window.scrollTo({ top: 0, behavior: 'instant' });
      document.title = getTitle(resolved);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [getTitle]);

  // Update title whenever path or language changes
  useEffect(() => {
    document.title = getTitle(currentPath);
  }, [currentPath, getTitle]);

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
      case '/ceo/':
        return <CeoPage onNavigate={navigateTo} />;
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
      dir={dir}
    >
      {/* 1. Global Sticky Header with Multi-Language Switcher & Flags */}
      <GlobalHeader currentPath={currentPath} onNavigate={navigateTo} />

      {/* 2. Main Page Content */}
      <main id="irsa-simorgh-page-content" className="flex-grow w-full overflow-x-clip">
        {renderPageBody()}
      </main>

      {/* 3. Global Footer with Language Switcher */}
      <GlobalFooter currentPath={currentPath} onNavigate={navigateTo} />

      {/* 4. PWA In-App Mobile Install Banner */}
      <PWAInstallButton variant="banner" />

      {/* 5. Offline Connectivity Indicator */}
      <OfflineIndicator />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <MainAppShell />
    </LanguageProvider>
  );
}
