export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export const MAIN_NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'خانه', href: '/' },
  { id: 'medical-tourism', label: 'گردشگری سلامت', href: '/medical-tourism/' },
  { id: 'treatment-request', label: 'درخواست درمان', href: '/treatment-request/' },
  { id: 'incoming-tourism', label: 'گردشگری ورودی', href: '/incoming-tourism/' },
];

export const SERVICES_DROPDOWN_ITEMS: NavItem[] = [
  { id: 'travel-services', label: 'خدمات سفر', href: '/travel-services/' },
  { id: 'vip-services', label: 'خدمات VIP', href: '/vip-services/' },
  { id: 'international-services', label: 'خدمات بین‌المللی', href: '/international-services/' },
];

export const SECONDARY_NAV_ITEMS: NavItem[] = [
  { id: 'about-us', label: 'درباره ما', href: '/about-us/' },
  { id: 'journal', label: 'مجله', href: '/journal/' },
  { id: 'contact-us', label: 'تماس با ما', href: '/contact-us/' },
];

/**
 * Complete list of all 10 exact routes requested by IRSA SIMORGH
 */
export const ALL_ROUTES: NavItem[] = [
  { id: 'home', label: 'خانه', href: '/' },
  { id: 'medical-tourism', label: 'گردشگری سلامت', href: '/medical-tourism/' },
  { id: 'treatment-request', label: 'درخواست درمان', href: '/treatment-request/' },
  { id: 'incoming-tourism', label: 'گردشگری ورودی', href: '/incoming-tourism/' },
  { id: 'travel-services', label: 'خدمات سفر', href: '/travel-services/' },
  { id: 'vip-services', label: 'خدمات VIP', href: '/vip-services/' },
  { id: 'international-services', label: 'خدمات بین‌المللی', href: '/international-services/' },
  { id: 'about-us', label: 'درباره ما', href: '/about-us/' },
  { id: 'journal', label: 'مجله', href: '/journal/' },
  { id: 'contact-us', label: 'تماس با ما', href: '/contact-us/' },
];

export const PRIMARY_CTA = {
  label: 'درخواست مشاوره',
  href: 'https://medixmaster.com/contact-us/',
};

export const normalizePath = (path: string): string => {
  if (!path || path === '' || path === '/') return '/';
  // Remove hash or search if any
  const clean = path.split('#')[0].split('?')[0];
  // Ensure starts with / and ends with /
  const withLeading = clean.startsWith('/') ? clean : `/${clean}`;
  return withLeading.endsWith('/') ? withLeading : `${withLeading}/`;
};
