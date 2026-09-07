import contactSupportHeroImg from '../assets/images/contact_support_hero_1788739865372.jpg';
import supportBgImg from '../assets/images/seamless_travel_exp_1788733930696.jpg';
import pillarConsultationImg from '../assets/images/svc_consultation_1788732462429.jpg';
import pillarCoordinationImg from '../assets/images/patient_coordinator_1788731714247.jpg';
import pillarStandardsImg from '../assets/images/about_focus_intl_corporate.jpg';

export type RequestType =
  | 'گردشگری سلامت'
  | 'گردشگری ورودی'
  | 'خدمات سفر'
  | 'ویزای سفر'
  | 'خدمات VIP'
  | 'ثبت شرکت'
  | 'خدمات اقامت'
  | 'سرمایه‌گذاری خارجی'
  | 'مشاوره عمومی';

export const REQUEST_TYPE_OPTIONS: { id: RequestType; label: string; description: string }[] = [
  { id: 'گردشگری سلامت', label: 'گردشگری سلامت', description: 'درمان، جراحی، بستری و ویزای درمانی' },
  { id: 'گردشگری ورودی', label: 'گردشگری ورودی', description: 'تورهای اختصاصی، فرهنگی و راهنمای زبان‌آموز' },
  { id: 'خدمات سفر', label: 'خدمات سفر', description: 'پرواز، رزرو هتل ۵ ستاره و ترانسفر' },
  { id: 'ویزای سفر', label: 'ویزای سفر', description: 'روادید الکترونیک (E-Visa)، تمدید و امور کنسولی' },
  { id: 'خدمات VIP', label: 'خدمات VIP', description: 'تشریفات CIP فرودگاهی، اسکورت و خودرو لوکس' },
  { id: 'ثبت شرکت', label: 'ثبت شرکت', description: 'تاسیس شرکت، افتتاح حساب و دفاتر تجاری' },
  { id: 'خدمات اقامت', label: 'خدمات اقامت', description: 'اقامت کاری، سرمایه‌گذاری و پیگیری حقوقی' },
  { id: 'سرمایه‌گذاری خارجی', label: 'سرمایه‌گذاری خارجی', description: 'پروژه‌های عمرانی، سلامت و گردشگری' },
  { id: 'مشاوره عمومی', label: 'مشاوره عمومی', description: 'سایر سوالات و استعلام‌های تخصصی' },
];

export interface ContactFormData {
  fullName: string;
  country: string;
  phone: string;
  whatsapp: string;
  email: string;
  requestType: RequestType;
  message: string;
}

export const CONTACT_PAGE_DATA = {
  hero: {
    title: 'چطور می‌توانیم به شما کمک کنیم؟',
    subtitle: 'نوع درخواست خود را انتخاب کنید و اطلاعات اولیه را برای ما ارسال کنید.',
    image: contactSupportHeroImg,
    badge: 'ارتباط مستقیم با مدیریت و کارشناسان ارشد',
  },
  destinationEmail: 'CEO@medixmaster.com',
  companyPhone: {
    line1: '03131324716',
    line1Display: '۰۳۱-۳۱۳۲۴۷۱۶',
    line2: '03131324717',
    line2Display: '۰۳۱-۳۱۳۲۴۷۱۷',
  },
  whatsapp: {
    number: '09133607595',
    display: '۰۹۱۳۳۶۰۷۵۹۵',
    link: 'https://wa.me/989133607595',
  },
  telegram: {
    channel: 'medixmaster',
    channelLink: 'https://t.me/medixmaster',
    admin: 'venustejaratvira',
    adminLink: 'https://t.me/venustejaratvira',
  },
  companyAddress: {
    city: 'اصفهان',
    fullAddress: 'اصفهان، خیابان بهار آزادی، حد فاصل میدان آزادی و سه راه توحید، روبروی درب دانشگاه اصفهان، کوچه زمانی، مجتمع تجاری اداری پردیس ۲، طبقه اول، واحد ۲۱۲',
    googleMapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3360.368003687379!2d51.65714777428757!3d32.623022091842344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fbc370058d79b3b%3A0x5418667f3b9ea11f!2z2LTYsdqp2Kog2YjZhtmI2LMg2KrYrNin2LHYqiDZiNuM2LHYpyAobWVkaXggbWFzdGVy2YXYr9uM2qnYsyDZhdiz2KrYsSk!5e0!3m2!1sen!2sus!4v1788740203502!5m2!1sen!2sus',
    googleMapsDirectLink: 'https://maps.google.com/?q=32.623022,51.657147',
  },
  directContactCards: [
    {
      id: 'phone',
      title: 'تماس مستقیم با شرکت',
      description: 'پاسخگویی کارشناسان و هماهنگی اداری و تشریفاتی',
      actionText: 'تماس با خط ۱',
      actionText2: 'تماس با خط ۲',
      phone1: '03131324716',
      phone2: '03131324717',
      channelInfo: '۰۳۱-۳۱۳۲۴۷۱۶  |  ۰۳۱-۳۱۳۲۴۷۱۷',
      badge: 'خطوط اداری مستقیم',
      href: 'tel:03131324716',
      href2: 'tel:03131324717',
    },
    {
      id: 'whatsapp',
      title: 'شماره تماس در واتس‌اپ',
      description: 'مشاوره فوری، ارسال مدارک و فایل‌های پزشکی',
      actionText: 'گفتگو در واتس‌اپ',
      channelInfo: '۰۹۱۳۳۶۰۷۵۹۵',
      badge: 'پاسخگویی سریع',
      href: 'https://wa.me/989133607595',
    },
    {
      id: 'telegram',
      title: 'کانال و پشتیبانی تلگرام',
      description: 'عضویت در کانال اطلاع‌رسانی و پیام به ادمین',
      actionText: 'کانال: medixmaster@',
      actionText2: 'ادمین: venustejaratvira@',
      channelInfo: 'medixmaster@  |  venustejaratvira@',
      badge: 'کانال و ادمین رسمی',
      href: 'https://t.me/medixmaster',
      href2: 'https://t.me/venustejaratvira',
    },
    {
      id: 'email',
      title: 'مکاتبه الکترونیک با مدیریت',
      description: 'ارسال مستقیم پروپوزال و استعلام‌های رسمی',
      actionText: 'ارسال ایمیل مستقیم',
      channelInfo: 'CEO@medixmaster.com',
      badge: 'رسمی و محرمانه',
      href: 'mailto:CEO@medixmaster.com?subject=New%20Inquiry%20-%20IRSA%20SIMORGH',
    },
  ],
  pillarsSection: {
    badge: 'تعهدات و استانداردهای ایرسا سیمرغ',
    title: 'ارکان همراهی و پاسخگویی به مراجعین',
    subtitle: 'سه اصل بنیادین در ارائه خدمات مشاوره‌ای، حقوقی و درمانی به مراجعین و گردشگران بین‌المللی',
    items: [
      {
        id: 'consultation',
        number: '۰۱',
        title: 'مشاوره شفاف و برنامه‌ریزی اختصاصی',
        subtitle: 'بررسی دقیق پرونده، تدوین برنامه درمانی یا سفارشی سفر و ارائه برآورد شفاف و دقیق هزینه‌ها پیش از هرگونه اقدام اجرایی.',
        image: pillarConsultationImg,
        alt: 'مشاوره تخصصی و تدوین برنامه‌ریزی سفر در ایرسا سیمرغ',
      },
      {
        id: 'coordination',
        number: '۰۲',
        title: 'همراهی پیوسته و مترجم اختصاصی',
        subtitle: 'پشتیبانی ۲۴ ساعته میدانی با همراهی راهنمای مجرب و مترجم هم‌زبان از بدو ورود، پذیرش در مراکز تا اتمام دوره و بدرقه رسمی.',
        image: pillarCoordinationImg,
        alt: 'همراهی و هماهنگی پرونده‌های سلامت و گردشگری',
      },
      {
        id: 'standards',
        number: '۰۳',
        title: 'محرمانگی اطلاعات و استانداردهای رسمی',
        subtitle: 'رعایت کامل پروتکل‌های بین‌المللی حفظ حریم خصوصی سوابق پزشکی و تجاری با تنظیم قراردادهای رسمی، شفاف و معتبر حقوقی.',
        image: pillarStandardsImg,
        alt: 'استانداردهای بین‌المللی و تعهدات حقوقی ایرسا سیمرغ',
      },
    ],
  },
  supportMessage: {
    statement: 'از اولین سؤال تا آخرین مرحله سفر، تیم ایرسا سیمرغ در کنار شماست.',
    backgroundImage: supportBgImg,
    lead: 'همراهی متعهدانه، امن و یکپارچه در تمام ابعاد سفر، درمان و خدمات بین‌المللی',
  },
  finalCta: {
    title: 'برای شروع کافی است درخواست خود را ارسال کنید.',
    subtitle: 'تیم تخصصی ایرسا سیمرغ در کمترین زمان ممکن درخواست شما را بررسی کرده و پاسخ کامل ارائه می‌دهد.',
    buttonText: 'ارسال درخواست',
  },
};
