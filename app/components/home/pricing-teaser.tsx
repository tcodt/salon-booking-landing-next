import Link from "next/link";
import { MdCheck } from "react-icons/md";

const plans = [
  {
    name: "شروع",
    price: "رایگان",
    desc: "مناسب برای سالن‌های تازه‌تأسیس",
    features: [
      "رزرو آنلاین تا ۱۰۰ نوبت در ماه",
      "مدیریت خدمات و تقویم نوبت‌ها",
      "مدیریت اطلاعات مشتریان",
      "دسترسی به امکانات پایه",
    ],
    cta: "رایگان شروع کنید",
    href: "https://panel.narjin.ir",
    external: true,
  },
  {
    name: "حرفه‌ای",
    price: "از ۴۹۰٬۰۰۰ تومان",
    priceNote: "ماهانه",
    desc: "بهترین انتخاب برای سالن‌های در حال رشد",
    features: [
      "رزرو آنلاین نامحدود",
      "پیامک یادآوری و تأیید نوبت",
      "مدیریت کارکنان و کمیسیون",
      "گزارش‌های مالی و مدیریتی",
      "CRM و پرونده مشتریان",
    ],
    cta: "جزئیات تعرفه",
    href: "/pricing",
    external: false,
    featured: true,
  },
  {
    name: "سازمانی",
    price: "تماس بگیرید",
    desc: "برای سالن‌های بزرگ و چندشعبه‌ای",
    features: [
      "تمام امکانات پلن حرفه‌ای",
      "شعب و کارکنان نامحدود",
      "داشبورد مدیریت شعب",
      "پشتیبانی اختصاصی",
      "آموزش و راه‌اندازی",
    ],
    cta: "تماس با فروش",
    href: "#contact",
    external: false,
  },
];

export default function PricingTeaser() {
  return (
    <section className="bg-background-home py-12 sm:py-16" id="pricing-preview">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="text-xl font-extrabold text-primary-home sm:text-2xl md:text-3xl">
            قیمت ساده، بدون هزینه پنهان
          </h2>
          <p className="mt-2 text-sm text-[#3d5a4c] sm:text-base">
            خلاصه پلن‌ها — جزئیات کامل در صفحه تعرفه‌ها
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative flex flex-col rounded-2xl border p-5 sm:p-6 ${
                p.featured
                  ? "border-primary-home bg-primary-home text-white shadow-lg"
                  : "border-primary-home/15 bg-white"
              }`}
            >
              {p.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#ffc329] px-3 py-0.5 text-xs font-bold text-[#003527]">
                  محبوب‌ترین
                </span>
              )}
              <h3 className={`text-lg font-bold ${p.featured ? "text-white" : "text-[#15241c]"}`}>{p.name}</h3>
              <p className={`mt-2 text-2xl font-extrabold ${p.featured ? "text-[#ffc329]" : "text-primary-home"}`}>{p.price}</p>
              {p.priceNote && (
                <p className={`text-xs ${p.featured ? "text-white/70" : "text-[#5a7266]"}`}>{p.priceNote}</p>
              )}
              <p className={`mt-2 text-sm ${p.featured ? "text-white/85" : "text-[#3d5a4c]"}`}>{p.desc}</p>
              <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                {p.features.map((f) => (
                  <li key={f} className={`flex items-start gap-2 text-sm ${p.featured ? "text-white/90" : "text-[#3d5a4c]"}`}>
                    <MdCheck className={`mt-0.5 shrink-0 text-lg ${p.featured ? "text-[#ffc329]" : "text-primary-home"}`} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              {p.external ? (
                <a href={p.href} target="_blank" rel="noopener noreferrer" className={`mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full px-4 py-3 text-sm font-bold transition ${p.featured ? "bg-white text-primary-home hover:bg-white/90" : "bg-primary-home text-white hover:opacity-95"}`}>
                  {p.cta}
                </a>
              ) : (
                <Link href={p.href} className={`mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full px-4 py-3 text-sm font-bold transition ${p.featured ? "bg-white text-primary-home hover:bg-white/90" : "bg-primary-home text-white hover:opacity-95"}`}>
                  {p.cta}
                </Link>
              )}
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm font-medium text-[#3d5a4c]">بدون هزینه نصب، بدون قرارداد اجباری</p>
        <p className="mt-2 text-center">
          <Link href="/pricing" className="text-sm font-semibold text-primary-home underline-offset-4 hover:underline">
            مشاهده جدول کامل تعرفه‌ها
          </Link>
        </p>
      </div>
    </section>
  );
}
