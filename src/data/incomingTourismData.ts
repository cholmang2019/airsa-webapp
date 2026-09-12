import { ASSETS } from '../assets/assetManager';

export const CONSULTATION_URL = "https://medixmaster.com/contact-us/";

export interface TourismService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'فرهنگ' | 'تاریخ' | 'غذا' | 'طبیعت' | 'معماری' | 'زندگی ایرانی';
  image: string;
  aspectClass: string;
}

export interface JourneyStep {
  number: string;
  stepEn: string;
  title: string;
  description: string;
  details: string[];
}

export const HERO_DATA = {
  title: '«ایران را به شیوه خود تجربه کنید»',
  subtitle: '«خدمات تخصصی گردشگری ورودی برای مسافرانی که میخواهند ایران را متفاوت تجربه کنند.»',
  ctaText: '«برنامه سفر من را طراحی کنید»',
  image: ASSETS.hero.iranTourism.src,
};

export const INTRO_DATA = {
  title: '«سفر شما، با یک برنامه اختصاصی»',
  lead: 'ایران سرزمینی با هزاره‌ها تاریخ، تنوع اقلیمی کم‌نظیر و مهمان‌نوازی افسانه‌ای است. ما در ایرسا سیمرغ باور داریم که هیچ دو مسافری علایق، ریتم و انتظارات یکسانی ندارند.',
  paragraphs: [
    'تیم گردشگری ورودی ایرسا سیمرغ با تکیه بر شبکه گسترده هتل‌های بوتیک اصیل، ناوگان ترانسفر اختصاصی، راهنمایان مسلط به زبان‌های بین‌المللی و ارتباطات عمیق بومی، برنامه‌ای منحصربه‌فرد بر پایه علایق فرهنگی، معماری، طبیعت‌گردی یا شکم‌گردی شما طراحی می‌کند.',
    'از لحظه صدور ویزا و تشریفات فرودگاهی CIP تا همراهی اختصاصی در طول سفر، تجربه‌ای روان، امن و خاطره‌انگیز برای مسافران بین‌المللی رقم می‌زنیم.',
  ],
  pillars: [
    {
      title: 'برنامه‌ریزی کاملاً شخصی‌سازی‌شده',
      desc: 'تدوین ریتم و مسیر روزانه بر اساس ترجیحات و علایق فردی',
    },
    {
      title: 'اقامت در هتل‌های بوتیک منتخب',
      desc: 'ترکیب لوکس معماری قاجار و زندیه با استانداردهای نوین رفاهی',
    },
    {
      title: 'ترانسفر اختصاصی و راهنمایان زبده',
      desc: 'ناوگان VIP بین‌شهری همراه با لیدرهای حرفه‌ای چندزبانه',
    },
    {
      title: 'پشتیبانی بی‌وقفه ۲۴ ساعته',
      desc: 'کانسی‌یژ اختصاصی در تمام طول اقامت برای اطمینان خاطر کامل',
    },
  ],
  image: ASSETS.services.inboundTouristExperience.src,
};

export const SERVICES_DATA: TourismService[] = [
  {
    id: 'cip',
    title: 'استقبال فرودگاهی',
    subtitle: 'تشریفات اختصاصی CIP و ترانسفر مستقیم',
    description: 'استقبال بدون معطلی در سالن تشریفات اختصاصی فرودگاه، انجام امور گذرنامه و بار، و هدایت به ترانسفر VIP.',
    image: ASSETS.services.cipAirportLounge.src,
    tag: 'ورود بدون دغدغه',
  },
  {
    id: 'stay',
    title: 'اقامت',
    subtitle: 'هتل‌های لوکس و بوتیک‌های تاریخی اصیل',
    description: 'رزرو اقامتگاه‌های دست‌چین‌شده سنتی با حیاط‌های دلنشین فیروزه‌ای یا هتل‌های مدرن ۵ ستاره با بالاترین استانداردهای رفاهی.',
    image: ASSETS.services.hotelAccommodation.src,
    tag: 'آرامش و شکوه',
  },
  {
    id: 'transfer',
    title: 'ترانسفر اختصاصی',
    subtitle: 'ناوگان VIP بین‌شهری و درون‌شهری',
    description: 'جابه‌جایی ایمن و آسوده در سراسر ایران با خودروهای لوکس مجهز، رانندگان مجرب و سیستم ره‌گیری دقیق مسیر.',
    image: ASSETS.services.privateTransfer.src,
    tag: 'سفری ایمن و راحت',
  },
  {
    id: 'itinerary',
    title: 'برنامه‌ریزی سفر',
    subtitle: 'طراحی گشت‌ها متناسب با ریتم و سلیقه شما',
    description: 'مسیرهای ویژه فراتر از تورهای کلیشه‌ای، متمرکز بر علایق باستان‌شناسی، عکاسی، طبیعت، معماری یا خوراک‌شناسی.',
    image: ASSETS.services.itineraryPlanning.src,
    tag: 'اختصاصی و منعطف',
  },
  {
    id: 'experiences',
    title: 'تجربه‌های محلی',
    subtitle: 'ملاقات با قلب تپنده فرهنگ و هنر ایرانی',
    description: 'از ضیافت شام در خانه‌های سنتی و بافتن گره‌های فرش تا پیمایش کویرهای پرستاره و هم‌صحبتی با استادکاران بازار.',
    image: ASSETS.services.traditionalBazaarLife.src,
    tag: 'اصیل و لمس‌کردنی',
  },
  {
    id: 'support',
    title: 'پشتیبانی در طول سفر',
    subtitle: 'همراهی شبانه‌روزی و کانسی‌یژ اختصاصی',
    description: 'پشتیبانی چندزبانه ۲۴/۷ از آغاز تا خروج از ایران؛ پاسخگویی فوری به نیازها، تغییرات برنامه و راهنمایی لحظه‌ای.',
    image: ASSETS.team.medicalCoordinator.src,
    tag: 'آسودگی خاطر کامل',
  },
];

export const EXPERIENCES_DATA: ExperienceItem[] = [
  {
    id: 'exp-arch',
    title: 'معماری و نور',
    subtitle: 'رقص نور از پشت شیشه‌های رنگی و کاشی‌کاری‌های زرین‌فام',
    category: 'معماری',
    image: ASSETS.services.nasirAlMulkArchitecture.src,
    aspectClass: 'sm:col-span-2 lg:col-span-2 row-span-2 aspect-[4/3] sm:aspect-auto sm:min-h-[420px]',
  },
  {
    id: 'exp-hist',
    title: 'هزاره‌های تاریخ',
    subtitle: 'شکوه هخامنشیان در تخت‌جمشید و پایتخت‌های باستانی پارس',
    category: 'تاریخ',
    image: ASSETS.services.persepolisHeritage.src,
    aspectClass: 'col-span-1 aspect-[3/4] sm:min-h-[300px]',
  },
  {
    id: 'exp-food',
    title: 'سفره اصیل ایرانی',
    subtitle: 'طعم زعفران، انار، زرشک و عطر ادویه‌های باستانی',
    category: 'غذا',
    image: ASSETS.services.persianCuisineFeast.src,
    aspectClass: 'col-span-1 sm:col-span-1 aspect-square sm:min-h-[300px]',
  },
  {
    id: 'exp-cult',
    title: 'هنر و فرهنگ',
    subtitle: 'ظرافت گره‌های فرش ابریشم و میراث جاودانه استادکاران',
    category: 'فرهنگ',
    image: ASSETS.services.persianCarpetCulture.src,
    aspectClass: 'col-span-1 aspect-square sm:min-h-[290px]',
  },
  {
    id: 'exp-life',
    title: 'زندگی و اصالت',
    subtitle: 'نبض گرم بازارهای تاریخی، بادگیرهای کویری و عطر چای دارچین',
    category: 'زندگی ایرانی',
    image: ASSETS.services.yazdWindcatchers.src,
    aspectClass: 'col-span-1 sm:col-span-1 aspect-[4/3] sm:min-h-[290px]',
  },
  {
    id: 'exp-nat',
    title: 'طبیعت سحرانگیز',
    subtitle: 'سکوت رمل‌های کویر لوت تا سپیدی قله‌های البرز',
    category: 'طبیعت',
    image: ASSETS.services.lutDesertSafari.src,
    aspectClass: 'col-span-1 sm:col-span-2 lg:col-span-1 aspect-[3/4] sm:min-h-[290px]',
  },
];

export const JOURNEY_STEPS: JourneyStep[] = [
  {
    number: '۰۱',
    stepEn: 'Plan',
    title: 'طراحی و برنامه‌ریزی',
    description: 'شنیدن خواسته‌ها، مدت اقامت و سبک سفر شما برای تدوین دقیق‌ترین برنامه سفر شخصی‌سازی‌شده.',
    details: ['مشاوره آنلاین اولیه', 'انتخاب مسیر و هتل‌ها', 'تنظیم بودجه و پیش‌فاکتور شفاف'],
  },
  {
    number: '۰۲',
    stepEn: 'Visa',
    title: 'روادید و امور کنسولی',
    description: 'دریافت تاییدیه ویزای توریستی ایران (E-Visa) با پیگیری کامل و بدون نیاز به مراجعه حضوری مسافر.',
    details: ['تسهیل کد دعوت‌نامه', 'پشتیبانی سریع کنسولی', 'بیمه مسافرتی معتبر بین‌المللی'],
  },
  {
    number: '۰۳',
    stepEn: 'Arrival',
    title: 'ورود و استقبال تشریفاتی',
    description: 'میزبانی در فرودگاه، تحویل سیم‌کارت و کارت پرداخت اعتباری ریالی، و انتقال روان به هتل با ترانسفر VIP.',
    details: ['تشریفات CIP فرودگاهی', 'کارت بانکی توریستی Tourist Card', 'استقرار آسوده در هتل'],
  },
  {
    number: '۰۴',
    stepEn: 'Stay',
    title: 'اقامت در هتل‌های برگزیده',
    description: 'تجربه استراحت در اصیل‌ترین بوتیک‌هتل‌های سنتی و هتل‌های ۵ ستاره مجهز به مدرن‌ترین امکانات بین‌المللی.',
    details: ['رزرو تاییدشده قبلی', 'کیفیت‌سنجی مستمر اتاق‌ها', 'پذیرایی صبحانه اصیل محلی'],
  },
  {
    number: '۰۵',
    stepEn: 'Experience',
    title: 'تجربه ناب و گشت‌های ویژه',
    description: 'کشف عمیق تاریخ، طعم‌ها، طبیعت و معاشرت با جامعه محلی در همراهی راهنمایان اختصاصی زبده.',
    details: ['گشت‌های خصوصی بدون شتاب', 'ورود اختصاصی به جاذبه‌ها', 'تجربه‌های آشپزی و صنایع دستی'],
  },
  {
    number: '۰۶',
    stepEn: 'Return',
    title: 'بدرقه و بازگشت خاطره‌انگیز',
    description: 'ترانسفر برگشت به فرودگاه بین‌المللی، بدرقه تشریفاتی و خاطراتی بی‌بدیل که تا همیشه زنده خواهند ماند.',
    details: ['ترانسفر سر وقت پرواز', 'بدرقه در سالن فرودگاه', 'پشتیبانی بازخورد و هدایای یادبود'],
  },
];
