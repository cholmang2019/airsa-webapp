import { ASSETS } from '../assets/assetManager';

export const OFFICIAL_CONTACT_URL = 'https://medixmaster.com/contact-us/';

export const ABOUT_HERO_DATA = {
  badge: 'IRSA SIMORGH | هویت سازمانی',
  title: '«درباره ایرسا سیمرغ»',
  subtitle: '«همراه شما در تمام مسیر سفر، درمان و تجربه ایران»',
  image: ASSETS.hero.aboutGateway.src,
  alt: ASSETS.hero.aboutGateway.alt,
};

export const ABOUT_WHO_WE_ARE_DATA = {
  badge: 'معرفی مجموعه',
  statement: '«ایرسا سیمرغ مجموعه‌ای تخصصی در حوزه گردشگری، خدمات هوایی، گردشگری سلامت، گردشگری ورودی و خدمات بین‌المللی است.»',
  elaboration: 'هدف بنیادین این مجموعه، ارائه تجربه‌ای یکپارچه، آرام و با استانداردهای جهانی برای مسافران، گردشگران و بیماران بین‌المللی است. ما تمامی نیازهای پیش از سفر، تشریفات فرودگاهی، اقامتگاهی، ترانسفر، هماهنگی‌های تخصصی پزشکی و امور حقوقی و تجاری را در قالب یک سامانه هماهنگ مدیریت می‌کنیم تا میهمانان ما بدون دغدغه، بالاترین سطح مراقبت و میزبانی را در ایران تجربه نمایند.',
  image: ASSETS.about.whoWeAreReception.src,
  alt: ASSETS.about.whoWeAreReception.alt,
  highlights: [
    { title: 'رویکرد یکپارچه (Integrated Care)', desc: 'مدیریت پیوسته کلیه مراحل سفر، اسکان و سلامت' },
    { title: 'استانداردهای بین‌المللی', desc: 'تعهد به کیفیت، زمان‌بندی دقیق و پروتکل‌های محرمانگی' },
    { title: 'تیم چندزبانه و متخصص', desc: 'همراهی کارشناسان زبده در تمام طول اقامت' },
  ],
};

export interface FocusArea {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const ABOUT_OUR_FOCUS_DATA: FocusArea[] = [
  {
    id: 'tourism',
    number: '۰۱',
    title: 'گردشگری',
    description: 'برنامه‌ریزی سفرهای اختصاصی، معرفی جاذبه‌های کهن ایران و میزبانی با بالاترین کیفیت.',
    image: ASSETS.about.focusTourismIsfahan.src,
    alt: ASSETS.about.focusTourismIsfahan.alt,
  },
  {
    id: 'health-tourism',
    number: '۰۲',
    title: 'گردشگری سلامت',
    description: 'هماهنگی خدمات پزشکی برتر، پیگیری دوره نقاهت و مراقبت همه‌جانبه از بیماران بین‌المللی.',
    image: ASSETS.about.focusHealthDoctor.src,
    alt: ASSETS.about.focusHealthDoctor.alt,
  },
  {
    id: 'vip-services',
    number: '۰۳',
    title: 'خدمات VIP',
    description: 'تشریفات اختصاصی فرودگاهی CIP، ترانسفر لوکس، اقامتگاه‌های ویژه و همراهی ۲۴ ساعته.',
    image: ASSETS.about.focusVipChauffeur.src,
    alt: ASSETS.about.focusVipChauffeur.alt,
  },
  {
    id: 'international-services',
    number: '۰۴',
    title: 'خدمات بین‌المللی',
    description: 'تسهیل ثبت شرکت، خدمات اقامت قانونی، مشاوره سرمایه‌گذاری و ارتباطات راهبردی در ایران.',
    image: ASSETS.about.focusIntlCorporate.src,
    alt: ASSETS.about.focusIntlCorporate.alt,
  },
];

export const ABOUT_MISSION_DATA = {
  badge: 'آرمان و تعهد ما',
  title: '«ماموریت ما»',
  text: '«ایجاد تجربه‌ای حرفه‌ای، یکپارچه و قابل اعتماد برای مسافران و بیماران بین‌المللی.»',
  supportingText: 'تعهد ما فراتر از ارائه خدمات صرف است؛ ما پلی معتمد میان خواسته‌های شما و بالاترین ظرفیت‌های گردشگری و درمانی ایران هستیم.',
  image: ASSETS.about.missionCareSupport.src,
  alt: ASSETS.about.missionCareSupport.alt,
};

export const ABOUT_VISION_DATA = {
  badge: 'آینده‌نگری سازمانی',
  title: '«چشم‌انداز ما»',
  text: '«تبدیل شدن به یک برند بین‌المللی قابل اعتماد در زمینه گردشگری، گردشگری سلامت و خدمات VIP.»',
  supportingText: 'همگام‌سازی استانداردهای بومی با انتظارات بین‌المللی و بازتعریف مفهوم میزبانی حرفه‌ای در منطقه.',
};

export const ABOUT_APPROACH_DATA = {
  badge: 'رویکرد یکپارچه ایرسا سیمرغ',
  title: 'تعهد به همراهی پیوسته و کیفیت بی‌نقص',
  image: ASSETS.about.approachBoardroom.src,
  alt: ASSETS.about.approachBoardroom.alt,
  paragraphs: [
    'در ایرسا سیمرغ، ما به خلق سفرهایی باور داریم که با آرامش کامل، شفافیت همه‌جانبه و احساس امنیت رقم می‌خورند. ساختار خدمات ما فراتر از یک آژانس مسافرتی یا مرکز هماهنگی مقطعی طراحی شده است؛ ما زنجیره‌ای پیوسته از کارشناسان تشریفات، مترجمان زبده و تیم‌های مراقبت بالینی را گرد هم آورده‌ایم تا در تمامی لحظات، همراهی مطمئن و پاسخگو در کنار میهمانان باشیم.',
    'از نخستین مشاوره پیش از ورود و اخذ روادید، تا استقبال اختصاصی در فرودگاه، هماهنگی اقامتگاه‌های منتخب، تنظیم برنامه‌های درمانی در بیمارستان‌های تراز اول و برنامه‌ریزی گشت‌های فرهنگی، تمام امور با دقت و نظارت مستمر مدیریت می‌شوند تا مراجعان کمترین دغدغه اجرایی را احساس نکنند.',
    'این رویکرد جامع به مسافران و بیماران بین‌المللی این امکان را می‌دهد که با خیالی آسوده بر بازیابی سلامت، کشف شکوه تمدن ایران یا پیشبرد مذاکرات تجاری خود تمرکز کنند؛ در حالی که می‌دانند جزئی‌ترین نیازها و انتظاراتشان توسط تیمی مسئولیت‌پذیر پیگیری و برآورده می‌شود.',
  ],
  stats: [
    { label: 'پوشش جامع مراحل سفر', value: '۱۰۰٪', desc: 'از مبدأ تا مقصد و بازگشت' },
    { label: 'پشتیبانی و همراهی اختصاصی', value: '۲۴/۷', desc: 'کارشناسان چندزبانه تمام‌وقت' },
    { label: 'شبکه مراکز درمانی و اقامتی', value: '+۵۰', desc: 'مراکز دارای تاییدیه بین‌المللی' },
  ],
};

export interface BrandValue {
  id: string;
  title: string;
  description: string;
  tag: string;
}

export const ABOUT_BRAND_VALUES_DATA: BrandValue[] = [
  {
    id: 'trust',
    title: 'اعتماد',
    description: 'بنیان تمامی تعاملات ما بر شفافیت، صداقت و حفظ محرمانگی اطلاعات استوار است.',
    tag: 'TRUST',
  },
  {
    id: 'quality',
    title: 'کیفیت',
    description: 'التزام بی‌قید و شرط به استانداردهای تراز اول در انتخاب شرکا، اقامتگاه‌ها و خدمات.',
    tag: 'QUALITY',
  },
  {
    id: 'care',
    title: 'مراقبت',
    description: 'احترام عمیق به نیازهای انسانی و همراهی دلسوزانه در کلیه مراحل سفر و درمان.',
    tag: 'CARE',
  },
  {
    id: 'experience',
    title: 'تجربه',
    description: 'بهره‌گیری از سال‌ها تخصص و دانش اجرایی برای خلق خاطره‌ای آسوده و بدون دغدغه.',
    tag: 'EXPERIENCE',
  },
];

export const ABOUT_CTA_DATA = {
  badge: 'همراهی بی‌وقفه',
  title: '«با ایرسا سیمرغ در ارتباط باشید»',
  subtitle: 'تیم کارشناسان و مشاوران ما آماده پاسخگویی، راهنمایی و برنامه‌ریزی اختصاصی برای سفر یا اقامت شما هستند.',
  buttonText: 'درخواست مشاوره',
};
