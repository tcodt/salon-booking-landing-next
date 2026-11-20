// محتوای پویای لندینگ: از API نارژین (پنل مدیریت ← «سایت لندینگ») خوانده می‌شود.
// اگر API در دسترس نبود، مقادیر پیش‌فرض همین فایل نمایش داده می‌شود.

export interface SiteSettings {
  hero_badge: string;
  hero_title: string;
  hero_subtitle: string;
  hero_cta_text: string;
  hero_cta_url: string;
  hero_secondary_text: string;
  video_title: string;
  video_embed_url: string;
  features_title: string;
  comparison_title: string;
  comparison_without_title: string;
  comparison_with_title: string;
  testimonials_title: string;
  pricing_title: string;
  faq_title: string;
  contact_title: string;
  contact_subtitle: string;
  phone: string;
  whatsapp: string;
  email: string;
  instagram: string;
  telegram: string;
  footer_description: string;
  meta_title: string;
  meta_description: string;
}

export interface SiteContent {
  settings: SiteSettings;
  chips: { title: string; icon: string }[];
  features: { title: string; description: string; icon: string }[];
  comparison: { without: string[]; with: string[] };
  testimonials: { name: string; role: string; text: string; avatar: string | null }[];
  faqs: { question: string; answer: string }[];
}

export const DEFAULT_SITE: SiteContent = {
  settings: {
    hero_badge: "نرم افزار مدیریت نوبت دهی",
    hero_title: "روشی هوشمند برای مدیریت مراجعه کنندگان شما",
    hero_subtitle: "کمتر تلفن جواب بدید و نوبت ها رو منظم تر مدیریت کنید",
    hero_cta_text: "ساخت سالن من، رایگان",
    hero_cta_url: "https://panel.narjin.ir",
    hero_secondary_text: "مشاهده معرفی",
    video_title: "در ۴۳ ثانیه با نارژین آشنا بشید",
    video_embed_url: "https://www.aparat.com/video/video/embed/videohash/nelxg17/vt/frame",
    features_title: "دیگه نوبت‌هاتون بین دفترچه و تماس‌ها گم نمی‌شن",
    comparison_title: "یک روز کاری سالن شما، قبل و بعد از نارژین",
    comparison_without_title: "بدون نارژین",
    comparison_with_title: "با نارژین",
    testimonials_title: "مدیران سالن درباره نارژین چی می‌گن؟",
    pricing_title: "از رایگان شروع کنید؛ با رشد سالن ارتقا بدید",
    faq_title: "قبل از شروع، این‌ها رو بدونید",
    contact_title: "آماده‌اید سالنتون رو آنلاین کنید؟",
    contact_subtitle: "فرم رو پر کنید یا مستقیم تماس بگیرید؛ کارشناسان ما جواب می‌دن.",
    phone: "09912146083",
    whatsapp: "989912146083",
    email: "info@narjin.ir",
    instagram: "https://instagram.com/narjin",
    telegram: "https://t.me/narjin",
    footer_description: "نرم‌افزار مدیریت و نوبت‌دهی آنلاین سالن زیبایی",
    meta_title: "نرم‌افزار مدیریت سالن زیبایی و نوبت‌دهی | نارژین",
    meta_description:
      "با نرم‌افزار مدیریت سالن زیبایی نارژین، نوبت‌ها، مشتریان، کارکنان و گزارش‌های مالی سالن خود را مدیریت کنید و رزرو آنلاین را ساده‌تر کنید.",
  },
  chips: [
    ["access_time", "رزرو آنلاین ۲۴ ساعته"], ["link", "لینک اختصاصی رزرو"], ["calendar", "تقویم هوشمند نوبت‌ها"],
    ["groups", "مدیریت کارکنان"], ["content_cut", "مدیریت خدمات سالن"], ["storefront", "مدیریت اطلاعات سالن"],
    ["bar_chart", "گزارش درآمد سالن"], ["trending_up", "تحلیل خدمات پرفروش"], ["assessment", "گزارش عملکرد کارکنان"],
    ["folder", "پرونده اختصاصی مشتریان"], ["history", "تاریخچه مراجعات"], ["search", "جستجوی سریع مشتریان"],
    ["sms", "پیامک یادآوری خودکار"], ["loyalty", "باشگاه مشتریان"], ["cake", "پیام تبریک تولد"],
  ].map(([icon, title]) => ({ icon, title })),
  features: [
    { icon: "event_busy", title: "نوبت‌های فراموش‌شده", description: "با یادآوری خودکار پیامکی، پیگیری نوبت‌ها منظم‌تر می‌شود و کمتر نوبت از قلم می‌افتد." },
    { icon: "phone_disabled", title: "تلفن‌های بی‌پایان", description: "مشتری از لینک اختصاصی سالن، هر ساعت از شبانه‌روز نوبت می‌گیرد؛ بدون قطع کار شما." },
    { icon: "trending_up", title: "مدیریت درآمد و زمان", description: "گزارش عملکرد و ساعات خلوت را ببینید تا برنامه‌ریزی خدمات و پرسنل دقیق‌تر شود." },
  ],
  comparison: {
    without: ["دفترچه‌های کاغذی شلوغ و نامرتب", "پاسخگویی به تلفن حتی در زمان کار", "فراموشی نوبت توسط مشتری", "محاسبه دستی سهم آرایشگرها"],
    with: ["تقویم آنلاین و منظم نوبت‌ها", "لینک اختصاصی نوبت‌دهی", "پیامک تأیید و یادآوری خودکار", "گزارش مالی و عملکرد آرایشگران"],
  },
  testimonials: [
    { name: "سارا محمدی", role: "مدیر سالن زیبایی", text: "نوبت‌دهی آنلاین باعث شده تماس‌های تکراری کمتر شود و تقویم مرتب‌تر باشد.", avatar: null },
    { name: "مریم احمدی", role: "مسئول پذیرش", text: "یادآوری پیامکی به پیگیری نوبت‌ها کمک می‌کند و کار روزانه منظم‌تر پیش می‌رود.", avatar: null },
    { name: "نیلوفر رضایی", role: "مالک مجموعه", text: "گزارش‌های پنل برای بررسی عملکرد خدمات و برنامه‌ریزی پرسنل مفید است.", avatar: null },
    { name: "رضا کریمی", role: "مدیر فنی سالن", text: "لینک اختصاصی نوبت‌دهی را در اینستاگرام گذاشتیم؛ مشتری‌ها راحت‌تر وقت می‌گیرند.", avatar: null },
  ],
  faqs: [
    { question: "نارژین برای چه نوع سالن‌هایی مناسب است؟", answer: "برای آرایشگاه‌ها، سالن‌های زیبایی، مراکز ناخن، پوست و مو و کسب‌وکارهای مشابه که نیاز به نوبت‌دهی و مدیریت مشتریان دارند." },
    { question: "آیا مشتریان می‌توانند به‌صورت آنلاین نوبت رزرو کنند؟", answer: "بله. با لینک اختصاصی سالن، مشتری می‌تواند بدون تماس تلفنی نوبت بگیرد." },
    { question: "یادآوری نوبت‌ها چگونه انجام می‌شود؟", answer: "در پلن‌هایی که پیامک یادآوری فعال است، تأیید و یادآوری به‌صورت خودکار برای مشتری ارسال می‌شود." },
    { question: "آیا امکان مشاهده گزارش درآمد وجود دارد؟", answer: "بله. در پنل مدیریت می‌توانید گزارش‌های مالی و عملکرد مرتبط با خدمات و کارکنان را مشاهده کنید." },
    { question: "برای شروع استفاده از نارژین چه باید کرد؟", answer: "از طریق دکمه «ساخت سالن من، رایگان» وارد پنل شوید یا از بخش تماس درخواست مشاوره ثبت کنید." },
    { question: "هزینه استفاده از نارژین چگونه محاسبه می‌شود؟", answer: "پلن رایگان و پلن‌های اشتراکی در صفحه تعرفه‌ها توضیح داده شده‌اند. جزئیات را در بخش تعرفه‌ها ببینید." },
  ],
};

const UPSTREAM = `${process.env.NARJIN_API_URL ?? "https://api.narjin.ir"}/landing/site/`;

/** فقط روی سرور استفاده شود. در صورت خطا، مقادیر پیش‌فرض برمی‌گردد. */
export async function getSite(): Promise<SiteContent> {
  try {
    const res = await fetch(UPSTREAM, {
      headers: { accept: "application/json" },
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return DEFAULT_SITE;
    const d = (await res.json()) as Partial<SiteContent>;
    return {
      settings: { ...DEFAULT_SITE.settings, ...(d.settings ?? {}) },
      chips: d.chips ?? DEFAULT_SITE.chips,
      features: d.features ?? DEFAULT_SITE.features,
      comparison: d.comparison ?? DEFAULT_SITE.comparison,
      testimonials: d.testimonials ?? DEFAULT_SITE.testimonials,
      faqs: d.faqs ?? DEFAULT_SITE.faqs,
    };
  } catch {
    return DEFAULT_SITE;
  }
}

/** شمارهٔ موبایل را به نمایش فارسی (اعداد فارسی) تبدیل می‌کند. */
export function toFaDigits(s: string): string {
  return s.replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)]);
}
