import { Language } from './context/LanguageContext';

export interface NavItem {
  id: string;
  label: string;
  href: string;
  description?: string;
}

export const NAV_LABELS: Record<Language, Record<string, string>> = {
  fa: {
    home: 'خانه',
    'medical-tourism': 'گردشگری سلامت',
    'treatment-request': 'درخواست درمان',
    'incoming-tourism': 'گردشگری ورودی',
    'travel-services': 'خدمات سفر',
    'vip-services': 'خدمات VIP',
    'international-services': 'خدمات بین‌المللی',
    'about-us': 'درباره ما',
    ceo: 'مدیر عامل',
    journal: 'مجله',
    'contact-us': 'تماس با ما',
    cta: 'درخواست مشاوره',
  },
  en: {
    home: 'Home',
    'medical-tourism': 'Medical Tourism',
    'treatment-request': 'Treatment Request',
    'incoming-tourism': 'Incoming Tourism',
    'travel-services': 'Travel Services',
    'vip-services': 'VIP Services',
    'international-services': 'International Services',
    'about-us': 'About Us',
    ceo: 'Founder & CEO',
    journal: 'Journal',
    'contact-us': 'Contact Us',
    cta: 'Request Consultation',
  },
  ar: {
    home: 'الرئيسية',
    'medical-tourism': 'السياحة العلاجية',
    'treatment-request': 'طلب العلاج',
    'incoming-tourism': 'السياحة الوافدة',
    'travel-services': 'خدمات السفر',
    'vip-services': 'خدمات VIP',
    'international-services': 'الخدمات الدولية',
    'about-us': 'من نحن',
    ceo: 'المدير التنفيذي',
    journal: 'المدونة',
    'contact-us': 'اتصل بنا',
    cta: 'طلب استشارة',
  },
  tr: {
    home: 'Ana Sayfa',
    'medical-tourism': 'Sağlık Turizmi',
    'treatment-request': 'Tedavi Talebi',
    'incoming-tourism': 'Gelen Turizm',
    'travel-services': 'Seyahat Hizmetleri',
    'vip-services': 'VIP Hizmetler',
    'international-services': 'Uluslararası Hizmetler',
    'about-us': 'Hakkımızda',
    ceo: 'Genel Müdür',
    journal: 'Dergi & Blog',
    'contact-us': 'İletişim',
    cta: 'Danışmanlık Alın',
  },
};

export const getMainNavItems = (lang: Language = 'fa'): NavItem[] => [
  { id: 'home', label: NAV_LABELS[lang].home, href: '/' },
  { id: 'medical-tourism', label: NAV_LABELS[lang]['medical-tourism'], href: '/medical-tourism/' },
  { id: 'treatment-request', label: NAV_LABELS[lang]['treatment-request'], href: '/treatment-request/' },
  { id: 'incoming-tourism', label: NAV_LABELS[lang]['incoming-tourism'], href: '/incoming-tourism/' },
];

export const getServicesDropdownItems = (lang: Language = 'fa'): NavItem[] => [
  { id: 'travel-services', label: NAV_LABELS[lang]['travel-services'], href: '/travel-services/' },
  { id: 'vip-services', label: NAV_LABELS[lang]['vip-services'], href: '/vip-services/' },
  { id: 'international-services', label: NAV_LABELS[lang]['international-services'], href: '/international-services/' },
];

export const getSecondaryNavItems = (lang: Language = 'fa'): NavItem[] => [
  { id: 'about-us', label: NAV_LABELS[lang]['about-us'], href: '/about-us/' },
  { id: 'ceo', label: NAV_LABELS[lang].ceo, href: '/ceo/' },
  { id: 'journal', label: NAV_LABELS[lang].journal, href: '/journal/' },
  { id: 'contact-us', label: NAV_LABELS[lang]['contact-us'], href: '/contact-us/' },
];

export const getAllRoutes = (lang: Language = 'fa'): NavItem[] => [
  { id: 'home', label: NAV_LABELS[lang].home, href: '/' },
  { id: 'medical-tourism', label: NAV_LABELS[lang]['medical-tourism'], href: '/medical-tourism/' },
  { id: 'treatment-request', label: NAV_LABELS[lang]['treatment-request'], href: '/treatment-request/' },
  { id: 'incoming-tourism', label: NAV_LABELS[lang]['incoming-tourism'], href: '/incoming-tourism/' },
  { id: 'travel-services', label: NAV_LABELS[lang]['travel-services'], href: '/travel-services/' },
  { id: 'vip-services', label: NAV_LABELS[lang]['vip-services'], href: '/vip-services/' },
  { id: 'international-services', label: NAV_LABELS[lang]['international-services'], href: '/international-services/' },
  { id: 'about-us', label: NAV_LABELS[lang]['about-us'], href: '/about-us/' },
  { id: 'ceo', label: NAV_LABELS[lang].ceo, href: '/ceo/' },
  { id: 'journal', label: NAV_LABELS[lang].journal, href: '/journal/' },
  { id: 'contact-us', label: NAV_LABELS[lang]['contact-us'], href: '/contact-us/' },
];

export const getPrimaryCta = (lang: Language = 'fa') => ({
  label: NAV_LABELS[lang].cta,
  href: 'https://medixmaster.com/contact-us/',
});

// Backward-compatible defaults (Persian)
export const MAIN_NAV_ITEMS: NavItem[] = getMainNavItems('fa');
export const SERVICES_DROPDOWN_ITEMS: NavItem[] = getServicesDropdownItems('fa');
export const SECONDARY_NAV_ITEMS: NavItem[] = getSecondaryNavItems('fa');
export const ALL_ROUTES: NavItem[] = getAllRoutes('fa');
export const PRIMARY_CTA = getPrimaryCta('fa');

export const normalizePath = (path: string): string => {
  if (!path || path === '' || path === '/') return '/';
  const clean = path.split('#')[0].split('?')[0];
  const withLeading = clean.startsWith('/') ? clean : `/${clean}`;
  return withLeading.endsWith('/') ? withLeading : `${withLeading}/`;
};
