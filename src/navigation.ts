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
  zh: {
    home: '首页',
    'medical-tourism': '医疗旅游',
    'treatment-request': '就医申请',
    'incoming-tourism': '入境旅游',
    'travel-services': '商旅服务',
    'vip-services': 'VIP贵宾礼遇',
    'international-services': '国际商务',
    'about-us': '关于我们',
    ceo: '创始人与CEO',
    journal: '资讯刊物',
    'contact-us': '联系我们',
    cta: '预约咨询',
  },
};

export const getMainNavItems = (lang: Language = 'fa'): NavItem[] => [
  { id: 'home', label: NAV_LABELS[lang].home, href: '/' },
  { id: 'medical-tourism', label: NAV_LABELS[lang]['medical-tourism'], href: '/medical-tourism/' },
  { id: 'journal', label: NAV_LABELS[lang].journal, href: '/journal/' },
  { id: 'contact-us', label: NAV_LABELS[lang]['contact-us'], href: '/contact-us/' },
];

export const getServicesDropdownItems = (lang: Language = 'fa'): NavItem[] => [
  {
    id: 'incoming-tourism',
    label: NAV_LABELS[lang]['incoming-tourism'],
    href: '/incoming-tourism/',
    description:
      lang === 'fa'
        ? 'برنامه‌ریزی تور اختصاصی، تجارب اصیل و ترانسفر CIP'
        : lang === 'ar'
        ? 'تنظيم رحلات متكاملة واستقبال CIP للضيوف الدوليين'
        : lang === 'tr'
        ? 'Özel turlar ve VIP havalimanı karşılama hizmeti'
        : lang === 'zh'
        ? '量身定制专属行程、深度文化体验与机场CIP贵宾通道'
        : 'Tailored itineraries & CIP reception for inbound guests',
  },
  {
    id: 'travel-services',
    label: NAV_LABELS[lang]['travel-services'],
    href: '/travel-services/',
    description:
      lang === 'fa'
        ? 'صدور بلیت پرواز، رزرو هتل‌های ۵ ستاره و اخذ ویزا'
        : lang === 'ar'
        ? 'حجوزات الطيران وفنادق ۵ نجوم وتأشيرات السفر السريعة'
        : lang === 'tr'
        ? 'Uçak bileti, 5 yıldızlı oteller ve ekspres vize desteği'
        : lang === 'zh'
        ? '国际机票、五星级酒店预订及加急旅游签证支持'
        : 'Flight tickets, 5-star hotels & express tourist visa',
  },
  {
    id: 'vip-services',
    label: NAV_LABELS[lang]['vip-services'],
    href: '/vip-services/',
    description:
      lang === 'fa'
        ? 'خودروهای تشریفاتی با راننده، لانژ اختصاصی و تشریفات CIP'
        : lang === 'ar'
        ? 'سيارات فارهة مع سائق، تشريفات ولانجات المطارات'
        : lang === 'tr'
        ? 'Lüks araçlar, özel şoför ve CIP havalimanı salonları'
        : lang === 'zh'
        ? '专属豪华车队、双语私人礼宾与机场贵宾休息室'
        : 'Chauffeur fleet, private concierge & airport lounge',
  },
  {
    id: 'international-services',
    label: NAV_LABELS[lang]['international-services'],
    href: '/international-services/',
    description:
      lang === 'fa'
        ? 'ثبت شرکت خارجی، توسعه صادرات و مشاوره‌های سرمایه‌گذاری'
        : lang === 'ar'
        ? 'تأسيس الشركات، الاستشارات التجارية والاستثمار الأجنبي'
        : lang === 'tr'
        ? 'Şirket kuruluşu, dış ticaret ve yatırım danışmanlığı'
        : lang === 'zh'
        ? '跨境公司注册、外商投资咨询与进出口贸易撮合'
        : 'Cross-border trade, FDI advisory & corporate formation',
  },
];

export const getAboutDropdownItems = (lang: Language = 'fa'): NavItem[] => [
  {
    id: 'about-us',
    label: NAV_LABELS[lang]['about-us'],
    href: '/about-us/',
    description:
      lang === 'fa'
        ? 'تاریخچه، رسالت سازمانی، هویت برند و چشم‌انداز ایرسا'
        : lang === 'ar'
        ? 'قصة التأسيس، الرسالة المؤسسية والرؤية المستقبلية'
        : lang === 'tr'
        ? 'Tarihçemiz, kurumsal misyonumuz ve temel vizyonumuz'
        : lang === 'zh'
        ? '企业发展历程、组织使命、品牌愿景与核心价值观'
        : 'Our story, institutional mission and core vision',
  },
  {
    id: 'ceo',
    label: NAV_LABELS[lang].ceo,
    href: '/ceo/',
    description:
      lang === 'fa'
        ? 'مانیفست راهبردی و پیام حدیثه دهقانی پوده'
        : lang === 'ar'
        ? 'الملف القيادي ورسالة الأستاذة حديثة دهقاني بوده'
        : lang === 'tr'
        ? 'Hadiseh Dehghani Poudeh vizyonu ve yönetici profili'
        : lang === 'zh'
        ? '创始人兼CEO哈迪塞·德赫加尼·普德赫女士的战略寄语'
        : 'Strategic manifesto & profile of Hadiseh Dehghani Poudeh',
  },
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
export const ABOUT_DROPDOWN_ITEMS: NavItem[] = getAboutDropdownItems('fa');
export const SECONDARY_NAV_ITEMS: NavItem[] = getSecondaryNavItems('fa');
export const ALL_ROUTES: NavItem[] = getAllRoutes('fa');
export const PRIMARY_CTA = getPrimaryCta('fa');

export const normalizePath = (path: string): string => {
  if (!path || path === '' || path === '/') return '/';
  const clean = path.split('#')[0].split('?')[0];
  const withLeading = clean.startsWith('/') ? clean : `/${clean}`;
  return withLeading.endsWith('/') ? withLeading : `${withLeading}/`;
};
