import { Language } from '../context/LanguageContext';

export const CONSULTATION_URL = "https://medixmaster.com/contact-us/";

export interface MedicalService {
  id: string;
  number: string;
  enTitle: string;
  title: string;
  description: string;
}

export interface JourneyStep {
  step: string;
  title: string;
  description: string;
  deliverables?: string[];
  details?: string[];
  highlights?: string[];
}

export interface HeroData {
  brandEn: string;
  brandFa: string;
  title: string;
  subtitle: string;
  ctaText: string;
  ctaUrl: string;
}

export interface IntroData {
  badge: string;
  title: string;
  lead: string;
  description: string;
  highlights: { title: string; desc: string }[];
}

export interface VipExperienceData {
  tag: string;
  title: string;
  lead: string;
  description: string;
  features: string[];
}

export interface FinalCtaData {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonUrl: string;
}

export const HERO_DATA_BY_LANG: Record<Language, HeroData> = {
  fa: {
    brandEn: "Airsa Simorgh Jahan",
    brandFa: "ایرسا سیمرغ جهان",
    title: "«گردشگری سلامت، فراتر از درمان»",
    subtitle: "«ما مسیر سفر، درمان و اقامت بیماران بین‌المللی را از ابتدا تا انتها هماهنگ می‌کنیم.»",
    ctaText: "درخواست مشاوره درمان",
    ctaUrl: CONSULTATION_URL,
  },
  en: {
    brandEn: "Airsa Simorgh Jahan",
    brandFa: "ایرسا سیمرغ جهان",
    title: "Medical Tourism Beyond Borders",
    subtitle: "We coordinate travel, world-class medical treatment, and bespoke accommodation for international patients from arrival to complete recovery.",
    ctaText: "Request Treatment Consultation",
    ctaUrl: CONSULTATION_URL,
  },
  ar: {
    brandEn: "Airsa Simorgh Jahan",
    brandFa: "ایرسا سیمرغ جهان",
    title: "«السياحة العلاجية، أبعد من مجرد علاج»",
    subtitle: "«ننسق رحلة السفر، العلاج الطبي المتقدم، والإقامة الفاخرة للمرضى الدوليين من البداية وحتى الشفاء التام.»",
    ctaText: "طلب استشارة علاجية فورية",
    ctaUrl: CONSULTATION_URL,
  },
  tr: {
    brandEn: "Airsa Simorgh Jahan",
    brandFa: "ایرسا سیمرغ جهان",
    title: "Sınırların Ötesinde Sağlık Turizmi",
    subtitle: "Uluslararası hastalarımız için seyahat, dünya standartlarında tıbbi tedavi ve seçkin konaklama süreçlerini varış anından tam iyileşmeye kadar koordine ediyoruz.",
    ctaText: "Tedavi Danışmanlığı Talep Edin",
    ctaUrl: CONSULTATION_URL,
  },
};

export const INTRO_DATA_BY_LANG: Record<Language, IntroData> = {
  fa: {
    badge: "معرفی خدمات جامع",
    title: "«یک مسیر کامل برای بیمار بین‌المللی»",
    lead: "دریافت خدمات درمانی در کشوری دیگر، نیازمند اطمینان خاطر، هماهنگی دقیق و آرامش فکری بیمار و همراهان است.",
    description:
      "مجموعه ایرسا سیمرغ جهان با طراحی یک چارچوب حمایتی یکپارچه، کلیه مراحل سفر از اخذ ویزای درمان و رزرو پرواز تا استقرار در اقامتگاه‌های ممتاز، هماهنگی جلسات با برترین پزشکان، نظارت بر روند بستری و درمان، و پشتیبانی کامل در دوران نقاهت و ریکاوری را به صورت شخصی‌سازی‌شده و مستمر مدیریت می‌کند.",
    highlights: [
      { title: "سفر و اقامت اختصاصی", desc: "رزرو هتل‌ها و سوئیت‌های تجهیزشده با رعایت استانداردهای مراقبتی" },
      { title: "هماهنگی پزشکی بدون معطلی", desc: "تعیین وقت و هماهنگی پرونده با پزشکان متخصص و بیمارستان‌های درجه یک" },
      { title: "پایش دوران ریکاوری", desc: "همراهی تیم پرستاری و مشاوره مستمر تا حصول بهبودی کامل و بازگشت" },
    ],
  },
  en: {
    badge: "Comprehensive Care Overview",
    title: "A Complete Journey for International Patients",
    lead: "Receiving specialized medical care in another country requires confidence, precise planning, and complete peace of mind for both patient and family.",
    description:
      "Airsa Simorgh Jahan offers an integrated healthcare management framework covering every step: medical visa issuance, premium flight bookings, luxury hygienic lodging, direct consultations with top accredited surgeons, hospital admission oversight, and round-the-clock post-operative recovery support.",
    highlights: [
      { title: "Bespoke Travel & Lodging", desc: "Handpicked 5-star hotels and patient-ready suites meeting high hygiene standards." },
      { title: "Zero-Wait Medical Access", desc: "Fast-tracked consultations and priority admissions with renowned board-certified specialists." },
      { title: "Continuous Post-Care Monitoring", desc: "Dedicated nurse follow-ups, medication management, and ongoing recovery coordination." },
    ],
  },
  ar: {
    badge: "منظومة الرعاية الشاملة",
    title: "«مسار متكامل ومخصص للمريض الدولي»",
    lead: "تلقي العلاج في بلد آخر يتطلب ثقة مطلقة، تنسيقاً دقيقاً، وراحة بال تامة للمريض ومرافقيه.",
    description:
      "تقدم شركة إيرسا سيمرغ جهان إطاراً علاجياً متكاملاً يشمل كافة مراحل الرحلة: بدءاً من استخراج التأشيرات العلاجية وتأكيد تذاكر الطيران، وحتى الإقامة في أجنحة فندقية مجهزة طبياً، وحجز المواعيد مع كبار الجراحين والاستشاريين، والإشراف على التنويم في المستشفيات المعتمدة، وصولاً إلى الرعاية التمريضية المستمرة خلال فترة النقاهة والتعافي.",
    highlights: [
      { title: "سفر وإقامة فندقية راقية", desc: "حجز فنادق وأجنحة 5 نجوم مجهزة طبياً لتوفير أقصى درجات الراحة للمريض ومرافقيه." },
      { title: "تنسيق طبي مباشر دون انتظار", desc: "تحديد مواعيد فورية مع نخبة الأطباء والجراحين في أرقى المستشفيات الدولية." },
      { title: "متابعة دقيقة لفترة النقاهة", desc: "مرافقة تمريضية واستشارات طبية مستمرة حتى الشفاء التام والعودة بسلام." },
    ],
  },
  tr: {
    badge: "Kapsamlı Sağlık Hizmetleri",
    title: "Uluslararası Hastalar İçin Uçtan Uca Süreç",
    lead: "Başka bir ülkede uzman sağlık hizmeti almak; tam bir güven, titiz planlama ve hasta ile refakatçileri için huzur gerektirir.",
    description:
      "Airsa Simorgh Jahan; medikal vize alımından CIP havalimanı karşılamasına, lüks hijyenik konaklamadan en seçkin cerrahlarla randevulara, akredite hastane yatışından 7/24 ameliyat sonrası iyileşme desteğine kadar entegre bir sağlık yönetim modeli sunar.",
    highlights: [
      { title: "Kişiye Özel Seyahat & Konaklama", desc: "En yüksek hijyen ve konfor standartlarına sahip seçkin 5 yıldızlı oteller ve süitler." },
      { title: "Sıra Beklemeden Hızlı Sağlık Erişimi", desc: "Alanında öncü uzman cerrahlar ve tam donanımlı hastanelerle doğrudan randevu organizasyonu." },
      { title: "Sürekli İyileşme ve Takip Desteği", desc: "Özel hemşire takibi, ilaç temini ve ülkenize dönüş sonrasında da devam eden konsültasyon." },
    ],
  },
};

export const MEDICAL_SERVICES_BY_LANG: Record<Language, MedicalService[]> = {
  fa: [
    { id: "consultation", number: "۰۱", enTitle: "Medical Consultation", title: "مشاوره پزشکی", description: "بررسی اولیه مدارک بالینی و ارائه برنامه پیشنهادی درمان توسط متخصصان پیش از سفر." },
    { id: "doctor", number: "۰۲", enTitle: "Doctor Coordination", title: "هماهنگی پزشک", description: "انتخاب و هماهنگی نوبت ویزیت با پزشکان و جراحان فوق‌تخصص متناسب با نیاز مراجع." },
    { id: "hospital", number: "۰۳", enTitle: "Hospital Coordination", title: "هماهنگی بیمارستان", description: "رزرو تخت، هماهنگی اتاق عمل و پذیرش سریع در بیمارستان‌های مجهز و دارای اعتبار بین‌المللی." },
    { id: "visa", number: "۰۴", enTitle: "Visa Assistance", title: "تسهیلات ویزا", description: "تسریع در فرایند صدور ویزای درمان (T-Visa) و روادید همراهان با هماهنگی مراجع رسمی." },
    { id: "flight", number: "۰۵", enTitle: "Flight Booking", title: "رزرو پرواز", description: "انتخاب بهترین مسیرهای هوایی، صدور بلیت‌های پرواز و پشتیبانی تغییرات سفر هوایی." },
    { id: "accommodation", number: "۰۶", enTitle: "Accommodation", title: "اقامت هتل و سوئیت", description: "رزرو اقامتگاه‌های آرام، هتل‌های ۵ ستاره و سوئیت‌های بهداشتی متناسب با دوره نقاهت." },
    { id: "transfer", number: "۰۷", enTitle: "Airport Transfer", title: "ترانسفر فرودگاهی و تشریفات", description: "استقبال در سالن CIP، تشریفات اختصاصی گمرکی و ترانسفر ایمن با خودروهای اختصاصی." },
    { id: "recovery", number: "۰۸", enTitle: "Recovery Support", title: "پشتیبانی دوران ریکاوری", description: "مراقبت‌های پس از عمل، تهیه دارو، خدمات پرستاری در محل اقامت و فالوآپ تخصصی." },
  ],
  en: [
    { id: "consultation", number: "01", enTitle: "Medical Consultation", title: "Medical Assessment", description: "Initial clinical evaluation of medical records and personalized treatment planning before travel." },
    { id: "doctor", number: "02", enTitle: "Doctor Coordination", title: "Physician Coordination", description: "Direct matchmaking and priority scheduling with leading board-certified surgeons." },
    { id: "hospital", number: "03", enTitle: "Hospital Coordination", title: "Hospital Admission", description: "Bed reservation, surgical theater scheduling, and expedited admission in top accredited hospitals." },
    { id: "visa", number: "04", enTitle: "Visa Assistance", title: "Medical Visa Support", description: "Fast-track processing of T-Visas for patients and companion visas with official authorization." },
    { id: "flight", number: "05", enTitle: "Flight Booking", title: "Flight Ticketing", description: "Optimal flight routing, international ticket issuance, and flexible itinerary management." },
    { id: "accommodation", number: "06", enTitle: "Accommodation", title: "Hygienic Lodging", description: "Selected 5-star hotels and private recovery suites tailored for post-treatment comfort." },
    { id: "transfer", number: "07", enTitle: "Airport Transfer", title: "CIP Airport Transfer", description: "Fast-track CIP airport welcoming, priority luggage handling, and chauffeured transfers." },
    { id: "recovery", number: "08", enTitle: "Recovery Support", title: "Recovery & Follow-Up", description: "Post-operative nursing, prescription procurement, and continued remote medical follow-ups." },
  ],
  ar: [
    { id: "consultation", number: "۰۱", enTitle: "Medical Consultation", title: "استشارة طبية أولية", description: "دراسة التقارير الطبية ووضع خطة علاجية متكاملة وتقدير تكاليف دقيق قبل موعد السفر." },
    { id: "doctor", number: "۰۲", enTitle: "Doctor Coordination", title: "تنسيق كبار الأطباء", description: "اختيار الجراحين والاستشاريين الأكثر كفاءة وحجز المواعيد المباشرة بدون أي تأخير." },
    { id: "hospital", number: "۰۳", enTitle: "Hospital Coordination", title: "تنسيق المستشفيات", description: "حجز غرف التنويم وغرف العمليات في أرقى المستشفيات الإيرانية المعتمدة دولياً." },
    { id: "visa", number: "۰۴", enTitle: "Visa Assistance", title: "تسهيلات الفيزا العلاجية", description: "إصدار التأشيرات العلاجية (T-Visa) وتأشيرات المرافقين بشكل عاجل عبر القنوات الرسمية." },
    { id: "flight", number: "۰۵", enTitle: "Flight Booking", title: "حجز وإصدار الطيران", description: "تأمين أفضل مسارات الطيران الدولية وتوفير مرونة تامة لتعديل مواعيد التذاكر." },
    { id: "accommodation", number: "۰۶", enTitle: "Accommodation", title: "الإقامة الفندقية الراقية", description: "حجز فنادق 5 نجوم وأجنحة فندقية هادئة ومعقمة ومجهزة خصيصاً لفترة الاستشفاء." },
    { id: "transfer", number: "۰۷", enTitle: "Airport Transfer", title: "استقبال وتشريفات المطار", description: "استقبال خاص في صالة كبار الشخصيات CIP، تخليص الإجراءات، وتوصيل بسيارات فاخرة." },
    { id: "recovery", number: "۰۸", enTitle: "Recovery Support", title: "متابعة فترة النقاهة", description: "رعاية تمريضية خاصة بمقر الإقامة، تأمين الأدوية، وفحوصات دورية حتى الاطمئنان التام." },
  ],
  tr: [
    { id: "consultation", number: "01", enTitle: "Medical Consultation", title: "Tıbbi Değerlendirme & Konsültasyon", description: "Seyahatten önce klinik raporlarınızın incelenmesi ve uzman hekimlerce kişiye özel tedavi planının oluşturulması." },
    { id: "doctor", number: "02", enTitle: "Doctor Coordination", title: "Uzman Hekim Eşleştirmesi", description: "Tedavi alanınıza en uygun kurul onaylı uzman cerrah ve profesörlerle doğrudan randevu planlaması." },
    { id: "hospital", number: "03", enTitle: "Hospital Coordination", title: "Hastane ve Ameliyathane Koordinasyonu", description: "Uluslararası standartlara sahip akredite hastanelerde yatak, ameliyathane ve hızlı kabul işlemleri." },
    { id: "visa", number: "04", enTitle: "Visa Assistance", title: "Medikal Vize Kolaylığı (T-Visa)", description: "Hasta ve refakatçileri için resmi onaylı medikal vizelerin hızlı ve güvenli şekilde temin edilmesi." },
    { id: "flight", number: "05", enTitle: "Flight Booking", title: "Uçak Bileti & Rota Planlama", description: "En konforlu uçuş rotalarının belirlenmesi, esnek biletleme ve seyahat değişiklik yönetimi." },
    { id: "accommodation", number: "06", enTitle: "Accommodation", title: "Lüks ve Hijyenik Konaklama", description: "İyileşme sürecine uygun, hasta konforu odaklı 5 yıldızlı oteller ve özel donanımlı süitler." },
    { id: "transfer", number: "07", enTitle: "Airport Transfer", title: "CIP Havalimanı & VIP Transfer", description: "CIP salonunda özel karşılama, gümrük kolaylığı ve lüks araçlarla güvenli transfer hizmeti." },
    { id: "recovery", number: "08", enTitle: "Recovery Support", title: "İyileşme & Taburculuk Sonrası Destek", description: "Ameliyat sonrası hemşirelik bakımı, reçete temini ve memleketinize döndükten sonra uzaktan takip." },
  ],
};

export const PATIENT_JOURNEY_BY_LANG: Record<Language, JourneyStep[]> = {
  fa: [
    { step: "۰۱", title: "مشاوره اولیه", description: "ارتباط با کارشناس پذیرش، ارسال اسناد پزشکی و شرح وضعیت سلامت بیمار به صورت محرمانه." },
    { step: "۰۲", title: "بررسی نیاز درمانی", description: "ارزیابی دقیق مدارک توسط تیم پزشکی، برآورد هزینه درمان و ارائه پلن کامل درمان و اقامت." },
    { step: "۰۳", title: "هماهنگی پزشک", description: "تطبیق پرونده با برترین جراحان و فوق‌تخصص‌های معتمد و تایید زمان‌بندی دقیق درمان." },
    { step: "۰۴", title: "ویزا و برنامه سفر", description: "صدور دعوت‌نامه رسمی درمانی، دریافت ویزا، رزرو پرواز و تدوین برنامه روزشمار سفر." },
    { step: "۰۵", title: "استقبال و اقامت", description: "خوش‌آمدگویی در جایگاه تشریفات CIP فرودگاه، تحویل سیم‌کارت و انتقال به محل اقامت." },
    { step: "۰۶", title: "درمان", description: "انجام آزمایش‌های تکمیلی، جلسات ویزیت، جراحی یا فرایندهای درمانی در بیمارستان مجهز." },
    { step: "۰۷", title: "دوران ریکاوری", description: "استراحت تحت مراقبت، بازدیدهای کنترلی پزشک، فیزیوتراپی و تغذیه اختصاصی در اقامتگاه." },
    { step: "۰۸", title: "بازگشت", description: "ارائه پرونده کامل ترخیص، صدور گواهی پرواز، بدرقه فرودگاهی و پیگیری وضعیت پس از بازگشت." },
  ],
  en: [
    { step: "01", title: "Initial Consultation", description: "Confidential submission of medical files and detailed clinical symptom description to intake specialists." },
    { step: "02", title: "Medical Assessment", description: "Clinical review by expert physicians, detailed cost estimate, and tailored treatment-travel blueprint." },
    { step: "03", title: "Specialist Matching", description: "Matching your case with leading surgeons and confirming the precise clinical timetable." },
    { step: "04", title: "Visa & Travel Blueprint", description: "Issuing formal medical invitation letters, rapid visa approvals, flight reservations, and day-by-day scheduling." },
    { step: "05", title: "VIP Welcome & Lodging", description: "Fast-track greeting at the airport CIP lounge, local SIM provision, and chauffeured hotel check-in." },
    { step: "06", title: "Hospital Treatment", description: "Pre-op diagnostics, specialist consultations, surgical procedure, and dedicated bedside multilingual support." },
    { step: "07", title: "Supervised Recovery", description: "Nurtured rest, physician check-ups, tailored dietary support, and physiotherapy at your residence." },
    { step: "08", title: "Safe Departure & Follow-up", description: "Comprehensive discharge reports, fit-to-fly certificates, airport farewell, and long-term remote care." },
  ],
  ar: [
    { step: "۰۱", title: "الاستشارة الأولية", description: "إرسال التقارير الطبية وتفاصيل الحالة الصحية بسرية تامة لمستشاري القبول الطبي الدولي." },
    { step: "۰۲", title: "التقييم الطبي وخطة العلاج", description: "دراسة الملف بواسطة أطباء اختصاصيين، تقديم تقدير التكاليف، وإعداد جدول زمني متكامل للرحلة." },
    { step: "۰۳", title: "تثبيت الجراح والمستشفى", description: "اختيار كبار الأطباء وتحديد المواعيد النهائية للعمليات أو الجلسات العلاجية بدقة." },
    { step: "۰۴", title: "التأشيرة وحجز الرحلة", description: "إصدار الدعوة الطبية الرسمية، استخراج الفيزا، حجز الطيران، وتجهيز جدول الأيام بالتفصيل." },
    { step: "۰۵", title: "الاستقبال الخاص والإقامة", description: "الاستقبال في صالة كبار الشخصيات CIP، تسليم خط اتصال محلي، والانتقال للفندق الفاخر." },
    { step: "۰۶", title: "إجراءات العلاج والعملية", description: "إجراء الفحوصات والتحاليل، المقابلات الطبية، والعملية الجراحية في مستشفى حديث ومتطور." },
    { step: "۰۷", title: "فترة النقاهة والاستشفاء", description: "راحة تامة بإشراف طبي، زيارات متابعة دورية، وتغذية مخصصة ومطابقة للمعايير الصحية." },
    { step: "۰۸", title: "العودة الآمنة والمتابعة", description: "تسليم ملف الخروج الطبي بالكامل، شهادة صلاحية الطيران، توديع المطار، واستمرار المتابعة عن بُعد." },
  ],
  tr: [
    { step: "01", title: "İlk İletişim & Danışmanlık", description: "Tıbbi dosyalarınızın ve şikayetlerinizin uluslararası hasta kabul uzmanlarımıza gizlilikle iletilmesi." },
    { step: "02", title: "Klinik Değerlendirme & Planlama", description: "Uzman hekim heyetince tetkiklerin incelenmesi, net maliyet tahmini ve gün gün tedavi takviminin sunulması." },
    { step: "03", title: "Hekim ve Hastane Belirlenmesi", description: "Dosyanızın en yetkin cerrahla eşleştirilmesi ve kesin ameliyat/tedavi tarihlerinin onaylanması." },
    { step: "04", title: "Vize, Uçuş ve Seyahat Planı", description: "Resmi medikal davetiyenin çıkarılması, vize onayı, uçak biletleri ve detaylı seyahat rehberi." },
    { step: "05", title: "VIP Karşılama ve Konaklama", description: "Havalimanı CIP salonunda karşılama, yerel iletişim hattı teslimi ve otele konforlu transfer." },
    { step: "06", title: "Tedavi ve Cerrahi Süreç", description: "Ameliyat öncesi son kontroller, uzman görüşmesi, cerrahi operasyon ve ana dilde birebir refakat." },
    { step: "07", title: "Gözetimli İyileşme (Riyazet)", description: "Doktor kontrolleri, fizyoterapi, özel beslenme ve otel süitinde profesyonel hemşire takibi." },
    { step: "08", title: "Güvenli Dönüş ve Uzaktan Takip", description: "Eksiksiz epikriz raporları, uçuşa uygundur belgesi, havalimanı uğurlaması ve online takip." },
  ],
};

export const VIP_EXPERIENCE_DATA_BY_LANG: Record<Language, VipExperienceData> = {
  fa: {
    tag: "سرویس ویژه VIP",
    title: "«تجربه‌ای آرام برای بیمار و همراهان»",
    lead: "حفظ شأن مراجعین، رفاه همه‌جانبه همراهان و حذف کوچک‌ترین اضطراب از محیط سفر و درمان، اولویت نخست ایرسا سیمرغ جهان است.",
    description:
      "با تکیه بر خدمات شخصی‌سازی‌شده (Personalized Care)، حضور راهنمای مسلط به زبان مادری، همراهی اختصاصی فرودگاهی CIP، انتخاب لوکس‌ترین اقامتگاه‌ها و ترانسفر تشریفاتی در کلیه رفت‌وآمدها، شما و خانواده‌تان فضایی مطمئن و دلنشین را مانند خانه تجربه خواهید کرد.",
    features: [
      "همراهی مترجم و هماهنگ‌کننده پزشکی اختصاصی در تمام ساعات",
      "ترانسفر خصوصی و تشریفات فرودگاهی بدون معطلی و ایستادن در صف‌ها",
      "اقامت در بهترین هتل‌ها و سوئیت‌های دارای امکانات رفاهی بیمار و همراه",
      "تسهیل امور مالی، تبدیل ارز و پشتیبانی بدون توقف در سراسر ایران",
    ],
  },
  en: {
    tag: "VIP Luxury Standard",
    title: "A Serene Experience for Patients and Companions",
    lead: "Upholding patient dignity, ensuring family comfort, and eliminating travel stress remain our utmost commitments at Airsa Simorgh Jahan.",
    description:
      "Through individualized care plans, native-speaking medical translators, dedicated CIP airport fast-tracks, premier suite selections, and private chauffeured transfers, you and your loved ones experience a secure, homelike sanctuary throughout your healing process in Iran.",
    features: [
      "Dedicated 24/7 bilingual medical coordinator and personal interpreter.",
      "Private transfers and airport CIP fast-track without waiting in public queues.",
      "Lodging in premium 5-star hotels with specialized patient and companion amenities.",
      "Seamless financial logistics, currency exchange support, and 24/7 concierge across Iran.",
    ],
  },
  ar: {
    tag: "خدمات كبار الشخصيات VIP",
    title: "«تجربة هادئة ومريحة للمريض والمرافقين»",
    lead: "صون خصوصية المرضى، وتوفير أقصى درجات الرفاهية للمرافقين، وإزالة أي قلق خلال رحلة العلاج هو هدفنا الأساسي.",
    description:
      "بفضل الرعاية المصممة خصيصاً، ووجود مرافق ومترجم يتحدث لغتكم الأم بطلاقة، واستقبال صالات كبار الشخصيات CIP، واختيار أفخم الفنادق، والتنقل بسيارات فارهة، ستشعرون أنتم وعائلتكم بأمان واطمئنان تام وكأنكم في وطنكم طوال فترة العلاج.",
    features: [
      "مترجم ومنسق طبي خاص متواجد على مدار الساعة لتسهيل كافة التواصلات.",
      "خدمات تشريفات واستقبال CIP بالمطار وتخطي طوابير الانتظار العامة.",
      "إقامة في أرقى الفنادق والأجنحة المزودة بسبل الراحة للمريض والمرافقين.",
      "تسهيل التعاملات المالية، تصريف العملات، وخدمة عملاء ممتازة في جميع المدن الإيرانية.",
    ],
  },
  tr: {
    tag: "VIP Ayrıcalıklı Standart",
    title: "Hasta ve Refakatçiler İçin Huzurlu Bir Deneyim",
    lead: "Misafirlerimizin mahremiyetini korumak, refakatçilere en üst düzey konforu sağlamak ve seyahatin tüm stresini ortadan kaldırmak en temel önceliğimizdir.",
    description:
      "Kişiselleştirilmiş bakım planları, ana dilinizde iletişim kuran sağlık rehberleri, CIP havalimanı hızlı geçişleri, seçkin 5 yıldızlı süitler ve özel şoförlü transferler ile siz ve aileniz İran'daki tedavi süreciniz boyunca kendinizi evinizde hissedeceksiniz.",
    features: [
      "7/24 yanınızda olan ana dilinizde medikal koordinatör ve tercüman desteği.",
      "Sıra beklemeden, kalabalıktan uzak CIP havalimanı karşılama ve özel transferler.",
      "Hasta ve refakatçi ihtiyaçlarına özel olarak tasarlanmış 5 yıldızlı lüks konaklama.",
      "Kolay döviz işlemleri, kesintisiz finansal lojistik ve İran genelinde 7/24 konsiyerj.",
    ],
  },
};

export const FINAL_CTA_DATA_BY_LANG: Record<Language, FinalCtaData> = {
  fa: {
    title: "«مسیر درمان خود را با یک مشاوره آغاز کنید»",
    subtitle: "تیم مشاوران بین‌المللی ما آماده‌اند تا مدارک پزشکی شما را ارزیابی کرده و برنامه‌ای متناسب با نیازتان تدوین نمایند.",
    buttonText: "درخواست مشاوره درمان",
    buttonUrl: CONSULTATION_URL,
  },
  en: {
    title: "Start Your Treatment Journey with a Free Consultation",
    subtitle: "Our international medical panel is ready to review your clinical records and design a tailored plan suited to your specific health goals.",
    buttonText: "Request Treatment Consultation",
    buttonUrl: CONSULTATION_URL,
  },
  ar: {
    title: "«ابدأ مسيرتك العلاجية باستشارة مجانية متخصصة»",
    subtitle: "فريقنا الطبي الدولي جاهز لتقييم تقاريركم الطبية وإعداد برنامج علاجي وسياحي مخصص وفقاً لاحتياجاتكم الدقيقة.",
    buttonText: "طلب استشارة علاجية",
    buttonUrl: CONSULTATION_URL,
  },
  tr: {
    title: "Tedavi Yolculuğunuza Ücretsiz Danışmanlıkla Başlayın",
    subtitle: "Uluslararası medikal kurulumuz sağlık raporlarınızı değerlendirmeye ve ihtiyaçlarınıza özel bir plan hazırlamaya hazırdır.",
    buttonText: "Tedavi Danışmanlığı İsteyin",
    buttonUrl: CONSULTATION_URL,
  },
};

// Helper getter functions for dynamic components
export const getHeroData = (lang: Language = 'fa'): HeroData => HERO_DATA_BY_LANG[lang] || HERO_DATA_BY_LANG.fa;
export const getIntroData = (lang: Language = 'fa'): IntroData => INTRO_DATA_BY_LANG[lang] || INTRO_DATA_BY_LANG.fa;
export const getMedicalServices = (lang: Language = 'fa'): MedicalService[] => MEDICAL_SERVICES_BY_LANG[lang] || MEDICAL_SERVICES_BY_LANG.fa;
export const getPatientJourney = (lang: Language = 'fa'): JourneyStep[] => PATIENT_JOURNEY_BY_LANG[lang] || PATIENT_JOURNEY_BY_LANG.fa;
export const getVipExperienceData = (lang: Language = 'fa'): VipExperienceData => VIP_EXPERIENCE_DATA_BY_LANG[lang] || VIP_EXPERIENCE_DATA_BY_LANG.fa;
export const getFinalCtaData = (lang: Language = 'fa'): FinalCtaData => FINAL_CTA_DATA_BY_LANG[lang] || FINAL_CTA_DATA_BY_LANG.fa;

// Backward-compatible defaults (Persian)
export const HERO_DATA = HERO_DATA_BY_LANG.fa;
export const INTRO_DATA = INTRO_DATA_BY_LANG.fa;
export const MEDICAL_SERVICES = MEDICAL_SERVICES_BY_LANG.fa;
export const PATIENT_JOURNEY = PATIENT_JOURNEY_BY_LANG.fa;
export const VIP_EXPERIENCE_DATA = VIP_EXPERIENCE_DATA_BY_LANG.fa;
export const FINAL_CTA_DATA = FINAL_CTA_DATA_BY_LANG.fa;
