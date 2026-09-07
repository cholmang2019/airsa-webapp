import airportCipImg from '../assets/images/svc_airport_cip_1788733656641.jpg';
import transferImg from '../assets/images/svc_transfer_1788732528571.jpg';
import hotelImg from '../assets/images/svc_hotel_1788732516592.jpg';
import conciergeImg from '../assets/images/seamless_travel_exp_1788733930696.jpg';
import personalCompanionImg from '../assets/images/patient_coordinator_1788731714247.jpg';
import medicalCoordImg from '../assets/images/healthcare_hospitality_1788731009329.jpg';
import departureImg from '../assets/images/travel_services_hero_1788733916402.jpg';

// Masonry curated visual assets for luxury brand statement
import archStainedGlass from '../assets/images/architecture_stained_glass_1788733570786.jpg';
import serenePatientCare from '../assets/images/vip_patient_serene_1788731726403.jpg';
import carpetArtistry from '../assets/images/culture_carpet_art_1788733608823.jpg';
import historicOmanSerenity from '../assets/images/oman_luxury_tourism_1788730560569.jpg';

export const VIP_CONSULTATION_URL = 'https://medixmaster.com/contact-us/';

export interface VipServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tag: string;
  image: string;
  features: string[];
}

export interface VipTimelineStep {
  stepEn: string;
  stepFa: string;
  title: string;
  lead: string;
  description: string;
  badge: string;
}

export const VIP_HERO_DATA = {
  title: '«سفر، فراتر از انتظار»',
  subtitle: '«خدمات VIP اختصاصی برای تجربه‌ای آرام، شخصی‌سازی‌شده و حرفه‌ای.»',
  ctaText: '«درخواست خدمات VIP»',
  image: departureImg,
};

export const VIP_EXPERIENCE_DATA = {
  title: '«یک همراه اختصاصی در مسیر شما»',
  lead: 'آرامش خاطر مطلق در گرو حضور دستیاری اختصاصی است که پیش از بروز هر نیازی، پاسخ آن را مهیا ساخته است.',
  description: 'در سطح خدمات VIP ایرسا سیمرغ، یک کانسی‌یژ ارشد و اختصاصی مسلط به زبان و پروتکل‌های تشریفات بین‌المللی در تمامی مراحل سفر همراه شماست. از هماهنگی گیت‌های اختصاصی فرودگاه و انتقال بی‌وقفه چمدان‌ها گرفته تا شخصی‌سازی اقامتگاه، رزرواسیون‌های ویژه، تنظیم ملاقات‌های پزشکی و رفع موانع زبانی، تمامی امور با بالاترین ضریب محرمانگی و دقت میلی‌متری به انجام می‌رسد.',
  image: personalCompanionImg,
  pillars: [
    { title: 'محرمانگی و حریم خصوصی', desc: 'حفاظت کامل از اطلاعات، هویت و آرامش فردی مهمانان' },
    { title: 'پاسخگویی بی‌وقفه ۲۴/۷', desc: 'ارتباط مستقیم اختصاصی در تمامی ساعات شبانه‌روز' },
    { title: 'شخصی‌سازی نامحدود', desc: 'تنظیم جزئی‌ترین جزئیات سفر طبق اولویت‌ها و سلیقه شما' },
  ],
};

export const VIP_HOSPITALITY_OVERVIEW = {
  tag: 'استاندارد ممتاز تشریفات',
  title: 'آرامش بی‌دغدغه، هماهنگی بی‌نقص',
  subtitle: '«هنر میزبانی لوکس، در پیش‌بینی جزئیاتی است که شما هنوز به آن فکر نکرده‌اید.»',
  description: 'تجربه سفر تشریفاتی در ایرسا سیمرغ تنها معطوف به امکانات مجلل نیست؛ بلکه حاصل هماهنگی شبکه‌ای یکپارچه از متخصصان تشریفات فرودگاهی، رانندگان مجرب ناوگان VIP، مدیران اقامتگاه‌های ۵ ستاره و مشاوران زبده است. ما تمامی دسترسی‌ها، زمان‌بندی‌ها و ترتیبات اداری را پیش از حضور شما نهایی می‌کنیم تا جریان سفر با بیشترین آرامش و بدون کوچک‌ترین اتلاف وقت طی شود.',
  image: conciergeImg,
  highlights: [
    {
      title: 'مدیریت دقیق زمان و تردد',
      desc: 'تردد روان در گیت‌ها و ترانسفرهای اختصاصی بدون کوچک‌ترین توقف یا معطلی.',
    },
    {
      title: 'انتخاب اختصاصی اقامتگاه و سوئیت',
      desc: 'دسترسی به برترین سوئیت‌های دیپلماتیک و بوتیک‌هتل‌های نامدار با خدمات اختصاصی.',
    },
    {
      title: 'حفظ حریم امن و آرامش مسافر',
      desc: 'رعایت کلیه موازین امنیتی، حریم خصوصی و پروتکل‌های محرمانگی در تمامی مقاصد.',
    },
  ],
  stats: [
    { value: '۱۰۰٪', label: 'تضمین محرمانگی' },
    { value: '۲۴/۷', label: 'پشتیبانی اختصاصی' },
    { value: 'صفر', label: 'معطلی در صفوف' },
  ],
};

export const VIP_SERVICES_DATA: VipServiceItem[] = [
  {
    id: 'vip-airport-arrival',
    title: 'استقبال VIP فرودگاه',
    subtitle: 'تشریفات اختصاصی CIP پای پرواز',
    description: 'خروج اختصاصی پای پلکان هواپیما با خودروی تشریفاتی، پذیرایی در سالن اختصاصی CIP، و انجام کلیه تشریفات گذرنامه و تحویل چمدان بدون معطلی در صفوف عمومی.',
    tag: 'Fast-Track & CIP Lounge',
    image: airportCipImg,
    features: [
      'انتقال اختصاصی پای پرواز با خودروی تشریفات',
      'پذیرایی در سالن‌های VIP و استراحت مسافر',
      'اخذ بار و کنترل گذرنامه توسط تیم تشریفات',
    ],
  },
  {
    id: 'vip-transfer',
    title: 'ترانسفر اختصاصی',
    subtitle: 'ناوگان لوکس خودروهای تشریفاتی',
    description: 'ناوگان مدرن از برترین خودروهای تشریفاتی روز دنیا همراه با رانندگان زبده، مسلط به آداب مهمانداری و متعهد به حفظ کامل حریم خصوصی و امنیت سفر.',
    tag: 'Chauffeur & Fleet VIP',
    image: transferImg,
    features: [
      'خودروهای مدرن کلاس لوکس با سیستم تهویه مطبوع پیشرفته',
      'رانندگان مسلط به زبان‌های بین‌المللی و آداب دیپلماتیک',
      'سرویس‌های در اختیار شهری، بین‌شهری و تشریفاتی',
    ],
  },
  {
    id: 'vip-stay',
    title: 'اقامت ویژه',
    subtitle: 'سوئیت‌های منتخب در بهترین هتل‌ها',
    description: 'اقامت در باشکوه‌ترین سوئیت‌های پرزیدنتال و هتل‌های بوتیک اصیل دارای استاندارد جهانی با امکانات چک‌این اختصاصی در اتاق و سرویس‌دهی اختصاصی ۲۴ ساعته.',
    tag: 'Curated 5-Star Suites',
    image: hotelImg,
    features: [
      'چک‌این و چک‌اوت اختصاصی در داخل سوئیت بدون توقف در لابی',
      'سرویس‌دهی اختصاصی و منوی تغذیه‌ای شخصی‌سازی‌شده',
      'چشم‌اندازهای اختصاصی و فضایی کاملاً آرام و محافظت‌شده',
    ],
  },
  {
    id: 'vip-concierge',
    title: 'همراهی شخصی',
    subtitle: 'کانسی‌یژ اختصاصی در تمام ساعات سفر',
    description: 'حضور یک مشاور و همراه شخصی اختصاصی مسلط به زبان شما برای تسهیل ارتباطات، برنامه‌ریزی قرارهای کاری یا گردشگری، و مدیریت سریع تغییرات احتمالی.',
    tag: 'Dedicated Concierge',
    image: conciergeImg,
    features: [
      'دسترسی تلفنی و حضوری مستقیم در تمام لحظات سفر',
      'تسلط کامل به زبان انگلیسی، عربی و فارسی',
      'هماهنگی سریع تغییرات پروازی، خرید و رزرواسیون',
    ],
  },
  {
    id: 'vip-medical',
    title: 'هماهنگی خدمات پزشکی',
    subtitle: 'مسیر سبز مراقبت‌های سلامت و درمانی',
    description: 'در صورت نیاز به خدمات درمانی، چکاپ یا مشاوره‌های سلامت، پذیرش مستقیم نزد زبده‌ترین اساتید پزشکی در کلینیک‌ها و بیمارستان‌های فوق‌تخصصی بدون کوچک‌ترین معطلی.',
    tag: 'Priority Healthcare Liaison',
    image: medicalCoordImg,
    features: [
      'مسیر سبز بدون نوبت در برترین بیمارستان‌های معتبر',
      'هماهنگی مستقیم با پزشکان ارشد و فوق‌تخصص',
      'پرونده پزشکی الکترونیک دوزبانه و پرستاری اختصاصی',
    ],
  },
  {
    id: 'vip-departure',
    title: 'بدرقه فرودگاهی',
    subtitle: 'ترخیص و بدرقه با آرامش مطلق تا پای پرواز',
    description: 'پایان سفر با همان شکوه آغاز؛ بدرقه از هتل، انتقال مستقیم به لانژ تشریفات فرودگاه، تحویل بار، کارت پرواز و هدایت VIP تا لحظه ورود به کابین هواپیما.',
    tag: 'Seamless Departure VIP',
    image: departureImg,
    features: [
      'دریافت کارت پرواز و بارنامه توسط کارشناس تشریفات',
      'استراحت در سالن لانژ خصوصی همراه با پذیرایی بوفه',
      'هدایت اختصاصی تا داخل کابین پرواز بدون ترافیک گیت',
    ],
  },
];

export const VIP_TIMELINE_STEPS: VipTimelineStep[] = [
  {
    stepEn: 'Arrival',
    stepFa: 'ورود به فرودگاه',
    title: 'ورود و فرود ایمن',
    lead: 'لحظه فرود هواپیما در فرودگاه مقصد',
    description: 'استقرار تیم تشریفات در پای پلکان پرواز پیش از خروج مسافران و استقبال مستقیم با خودروی اختصاصی فرودگاهی.',
    badge: 'Step 01',
  },
  {
    stepEn: 'Welcome',
    stepFa: 'استقبال اختصاصی',
    title: 'پذیرایی و تشریفات در سالن CIP',
    lead: 'انجام مراحل اداری بدون حضور در صف',
    description: 'استراحت مهمان در سالن اختصاصی همراه با پذیرایی دلپذیر در حالی که کارشناس ایرسا سیمرغ گذرنامه و بار را تحویل می‌گیرد.',
    badge: 'Step 02',
  },
  {
    stepEn: 'Transfer',
    stepFa: 'ترانسفر تشریفاتی',
    title: 'حرکت با ناوگان VIP',
    lead: 'جابه‌جایی آرام و بی‌صدا تا مقصد اقامت',
    description: 'سوار شدن به خودروی لوکس اختصاصی همراه با راننده آموزش‌دیده، اینترنت پرسرعت همراه و نوشیدنی‌های گوارا.',
    badge: 'Step 03',
  },
  {
    stepEn: 'Stay',
    stepFa: 'اقامت ویژه',
    title: 'استقرار در سوئیت مجلل',
    lead: 'چک‌این اختصاصی در داخل اتاق',
    description: 'ورود بدون توقف به سوئیت از پیش آماده‌شده، هماهنگی پروتکل‌های غذایی و استراحت با آرامش کامل.',
    badge: 'Step 04',
  },
  {
    stepEn: 'Assistance',
    stepFa: 'همراهی مستمر',
    title: 'پشتیبانی شخصی و هماهنگی‌ها',
    lead: 'حضور همه‌جانبه کانسی‌یژ اختصاصی',
    description: 'مدیریت برنامه روزانه، قرارها، ترانسفرهای درون‌شهری، مشاوره‌های سلامت و پیگیری هرگونه درخواست خاص مهمان.',
    badge: 'Step 05',
  },
  {
    stepEn: 'Departure',
    stepFa: 'بدرقه فرودگاهی',
    title: 'بدرقه و خداحافظی باشکوه',
    lead: 'ترخیص فرودگاهی و بازگشت بی‌دغدغه',
    description: 'انتقال سر وقت به سالن CIP فرودگاه، تحویل بار، استراحت در لانژ و بدرقه تا لحظه سوار شدن به هواپیما.',
    badge: 'Step 06',
  },
];

export const VIP_BRAND_STATEMENT = {
  faTitle: 'سفر شما، تعهد و مراقبت ما',
  faStatement: '«از اولین لحظه ورود تا زمان بازگشت، در کنار شما هستیم.»',
  subtext: 'تعهد به برتری، دقت در جزئیات نادیدنی و احترام به حریم فردی مهمانان، جوهره بنیادین خدمات VIP ایرسا سیمرغ است.',
  mosaicImages: [
    { src: archStainedGlass, title: 'شکوه و اصالت' },
    { src: serenePatientCare, title: 'مراقبت و آرامش' },
    { src: carpetArtistry, title: 'ظرافت بی‌مانند' },
    { src: historicOmanSerenity, title: 'میزبانی شاهانه' },
  ],
};

export const VIP_CTA_DATA = {
  title: '«تجربه VIP خود را طراحی کنید»',
  subtitle: 'برای برنامه‌ریزی جزئیات سفر اختصاصی، بررسی دسترسی‌های فرودگاهی CIP و انتخاب بهترین گزینه‌های اقامت و ترانسفر، با مشاوران ارشد VIP ما گفتگو کنید.',
  buttonText: '«درخواست مشاوره»',
  features: [
    'تضمین کامل محرمانگی اطلاعات',
    'طراحی اختصاصی پروتکل متناسب با نیاز شما',
    'پاسخگویی مستقیم توسط کارشناس ارشد تشریفات',
  ],
};

export type VipServiceCard = VipServiceItem;
export const VIP_EXPERIENCE_CONTENT = VIP_EXPERIENCE_DATA;


