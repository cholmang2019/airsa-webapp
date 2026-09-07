import heroBusinessImg from '../assets/images/travel_services_hero_1788733916402.jpg';
import businessMeetingImg from '../assets/images/svc_consultation_1788732462429.jpg';
import companyFormationImg from '../assets/images/company_formation_biz_1788735659476.jpg';
import residencyLegalImg from '../assets/images/svc_visa_1788732496579.jpg';
import investmentImg from '../assets/images/oman_luxury_tourism_1788730560569.jpg';
import advisoryImg from '../assets/images/intl_advisory_meet_1788735680477.jpg';

export const OFFICIAL_CONSULTATION_URL = 'https://medixmaster.com/contact-us/';

export const INTERNATIONAL_HERO_DATA = {
  badge: 'IRSA SIMORGH | خدمات بین‌المللی',
  title: '«دروازه‌ای برای ورود به ایران»',
  subtitle: '«خدمات بین‌المللی برای افرادی که به دنبال راه‌اندازی کسب‌وکار، اقامت یا سرمایه‌گذاری در ایران هستند.»',
  ctaText: 'مشاوره تخصصی',
  image: heroBusinessImg,
};

export interface ServiceCardItem {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  tag: string;
  highlights: string[];
}

export const INTERNATIONAL_SERVICES_DATA: ServiceCardItem[] = [
  {
    id: 'company-formation',
    number: '۰۱',
    title: 'ثبت شرکت',
    description: 'راهکارهای ثبت شرکت و شروع فعالیت اقتصادی.',
    tag: 'Corporate & Legal Formation',
    image: companyFormationImg,
    highlights: [
      'تدوین اساسنامه و انتخاب ساختار حقوقی بهینه',
      'افتتاح حساب‌های شرکتی و امور مالیاتی قانونی',
      'اخذ مجوزهای فعالیت اقتصادی و بازرگانی'
    ],
  },
  {
    id: 'residency-services',
    number: '۰۲',
    title: 'خدمات اقامت',
    description: 'مشاوره درباره راهکارهای قانونی اقامت.',
    tag: 'Residency & Visa Solutions',
    image: residencyLegalImg,
    highlights: [
      'بررسی پرونده و گزینه‌های اقامت تجاری و سرمایه‌گذاری',
      'تسهیل دریافت ویزاهای بلندمدت و تمدید مدارک',
      'همراهی مستمر در کلیه مراجع رسمی و اداری'
    ],
  },
  {
    id: 'foreign-investment',
    number: '۰۳',
    title: 'سرمایه‌گذاری خارجی',
    description: 'مشاوره و خدمات مرتبط با سرمایه‌گذاری خارجی.',
    tag: 'Foreign Direct Investment (FDI)',
    image: investmentImg,
    highlights: [
      'مشاوره فرصت‌های راهبردی و تحلیل بازارهای هدف',
      'رعایت چارچوب‌های تشویق و حمایت از سرمایه‌گذاری (FIPPA)',
      'انتقال امن سرمایه و صیانت از منافع اقتصادی'
    ],
  },
  {
    id: 'international-advisory',
    number: '۰۴',
    title: 'مشاوره بین‌المللی',
    description: 'بررسی نیاز و ارائه مسیر مناسب.',
    tag: 'Strategic Advisory & Roadmapping',
    image: advisoryImg,
    highlights: [
      'تحلیل جامع نیازمندی‌ها و اهداف شخصی یا سازمانی',
      'طراحی نقشه راه اجرایی گام‌به‌گام با پیش‌بینی ریسک‌ها',
      'پشتیبانی مشورتی در تمامی مراحل تصمیم‌گیری'
    ],
  },
];

export const INTERNATIONAL_SUPPORT_DATA = {
  badge: 'پشتیبانی یکپارچه بین‌المللی',
  title: '«یک نقطه تماس برای مسیر شما»',
  lead: 'آرامش، اطمینان و سرعت عمل در تعامل با یک تیم اختصاصی و متعهد.',
  description: 'در ایرسا سیمرغ، تمامی هماهنگی‌های حقوقی، تجاری، اقامتی و اجرایی از طریق یک مدیر پرونده ارشد و اختصاصی ساماندهی می‌شود. به جای درگیر شدن با سازمان‌های متعدد، تشریفات پیچیده اداری و پیگیری‌های پراکنده، شما از یک نقطه تماس مطمئن و مسلط به پروتکل‌های بین‌المللی بهره‌مند می‌شوید که مسیر ورود و استقرار شما را با بالاترین دقت، شفافیت و محرمانگی مدیریت می‌کند.',
  image: businessMeetingImg,
  pillars: [
    {
      title: 'مدیر پرونده اختصاصی (Single Point of Contact)',
      desc: 'پاسخگویی مستقیم و یکپارچه در تمامی ابعاد سفر، اقامت و تجارت.',
    },
    {
      title: 'محرمانگی و انضباط بین‌المللی',
      desc: 'صیانت کامل از حریم خصوصی، اسناد مالی و اطلاعات کسب‌وکار شما.',
    },
    {
      title: 'شبکه متخصصان حقوقی و مالی',
      desc: 'همکاری مستقیم با وکلای پایه یک و کارشناسان ارشد سرمایه‌گذاری.',
    },
  ],
};

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
}

export const PROCESS_STEPS_DATA: ProcessStep[] = [
  {
    stepNumber: '۰۱',
    title: 'مشاوره',
    description: 'جلسه مقدماتی آنلاین یا حضوری جهت دریافت اهداف و چشم‌انداز شما.',
  },
  {
    stepNumber: '۰۲',
    title: 'بررسی نیاز',
    description: 'ارزیابی دقیق شرایط حقوقی، الزامات قانونی و پتانسیل‌های سرمایه‌گذاری.',
  },
  {
    stepNumber: '۰۳',
    title: 'طراحی مسیر',
    description: 'تدوین برنامه اقدام اختصاصی با جدول زمانی، هزینه‌ها و مراحل قانونی.',
  },
  {
    stepNumber: '۰۴',
    title: 'اجرای خدمات',
    description: 'پیشبرد منظم پرونده تا نهایی‌سازی کامل و ارائه گزارش‌های دوره‌ای.',
  },
];

export const INTERNATIONAL_CTA_DATA = {
  badge: 'همراهی معتمد در ایران',
  title: '«مسیر مناسب خود را پیدا کنید»',
  subtitle: 'برای بررسی گزینه‌های ثبت شرکت، شرایط اقامت قانونی یا فرصت‌های سرمایه‌گذاری در ایران، با مشاوران ارشد ما در ارتباط باشید.',
  buttonText: 'مشاوره با کارشناس',
  trustPoints: [
    'جلسه محرمانه و بدون تعهد',
    'تحلیل اختصاصی متناسب با ملیت و هدف شما',
    'پاسخگویی سریع توسط مشاور ارشد بین‌الملل'
  ],
};
