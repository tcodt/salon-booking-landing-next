import { Metadata } from "next";
import Link from "next/link";
import {
  MdAutoAwesome,
  MdVisibility,
  MdSupportAgent,
  MdSecurity,
} from "react-icons/md";

export const metadata: Metadata = {
  title: "درباره نارژین | نرم‌افزار مدیریت و نوبت‌دهی آنلاین سالن زیبایی",
  description:
    "با نارژین و امکانات آن آشنا شوید؛ نرم‌افزار فارسی رزرو آنلاین، مدیریت مشتری و گزارش مالی سالن‌های زیبایی.",
};

const values = [
  {
    icon: MdAutoAwesome,
    title: "سادگی",
    text: "پنلی که استفاده از اون تا جای ممکن ساده و روشنه.",
  },
  {
    icon: MdVisibility,
    title: "شفافیت",
    text: "شرایط و هزینه‌ها باید روشن و قابل فهم باشن.",
  },
  {
    icon: MdSupportAgent,
    title: "پشتیبانی پاسخ‌گو",
    text: "برای سؤال‌ها و مشکلات کاربران، مسیر مشخصی برای ارتباط با تیم نارژین فراهم می‌کنیم.",
  },
  {
    icon: MdSecurity,
    title: "احترام به داده‌ها",
    text: "اطلاعات کاربران و مشتریان باید با دسترسی کنترل‌شده و مطابق سیاست حریم خصوصی مدیریت بشه.",
  },
];

const steps = [
  {
    n: "۱",
    title: "سالنتون رو بسازید",
    text: "حساب خودتون رو ایجاد کنید و تنظیمات اولیه سالن رو انجام بدید.",
  },
  {
    n: "۲",
    title: "خدمات و کارکنان رو تعریف کنید",
    text: "خدمات، ساعات کاری و اطلاعات کارکنان رو تنظیم کنید.",
  },
  {
    n: "۳",
    title: "لینک رزرو رو در اختیار مشتری‌ها بذارید",
    text: "مشتری‌ها می‌تونن از طریق لینک رزرو سالن، در زمان‌های قابل رزرو نوبت ثبت کنن.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background-home pt-24 pb-16 sm:pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav className="mb-8 text-sm text-[#5a7266]" aria-label="مسیر صفحه">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-primary-home">
                خانه
              </Link>
            </li>
            <li aria-hidden>←</li>
            <li className="font-medium text-primary-home">درباره ما</li>
          </ol>
        </nav>

        <section className="mb-14 text-center sm:mb-16 sm:text-right">
          <h1 className="mb-4 text-2xl font-extrabold leading-snug text-primary-home sm:text-3xl md:text-4xl">
            ما نارژین رو ساختیم تا مدیریت سالن ساده بشه
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-[#3d5a4c] sm:mx-0 sm:text-lg">
            نارژین نرم‌افزار فارسی رزرو آنلاین، مدیریت مشتری و گزارش مالی برای
            سالن‌های زیباییه.
          </p>
          <a
            href="https://panel.narjin.ir"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-primary-home px-8 py-3 text-base font-bold text-white shadow-md transition hover:opacity-95"
          >
            ساخت سالن من (رایگان)
          </a>
        </section>

        <section className="mb-14 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="min-w-0">
            <h2 className="mb-4 text-xl font-extrabold text-primary-home sm:text-2xl">
              داستان نارژین
            </h2>
            <p className="text-base leading-[1.9] text-[#3d5a4c]">
              خیلی از سالن‌ها هنوز نوبت‌ها رو توی دفترچه یا پیام‌های پراکنده
              مدیریت می‌کنن. نتیجه‌اش تلفن‌های پشت‌سرهم، نوبت‌های فراموش‌شده و
              حساب‌وکتاب دستی آخر ماهه. نارژین رو ساختیم تا رزرو، مشتری‌ها،
              کارکنان و گزارش مالی توی یک پنل ساده کنار هم باشن و مدیر سالن وقتش
              رو صرف کاری کنه که بلده: کار با مشتری.
            </p>
            <p className="mt-3 text-xs text-[#5a7266]">
              این متن پیش‌نویس معرفی محصول است و تاریخچه رسمی شرکت محسوب
              نمی‌شود.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-primary-home/15 bg-white p-4 shadow-sm sm:p-5">
            <div className="rounded-xl bg-[#003527] px-3 py-2 text-xs font-medium text-white/90">
              پنل نارژین — نمای نمایشی
            </div>
            <div className="mt-3 space-y-2">
              {["تقویم نوبت‌ها", "مشتریان", "گزارش‌ها"].map((label, i) => (
                <div
                  key={label}
                  className={`rounded-lg px-3 py-2.5 text-sm ${
                    i === 0
                      ? "bg-primary-home/10 font-semibold text-primary-home"
                      : "bg-[#f5f8f6] text-[#3d5a4c]"
                  }`}
                >
                  {label}
                </div>
              ))}
            </div>
            <p className="mt-3 text-center text-xs text-[#5a7266]">
              ساختار کلی پنل — نه اسکرین‌شات زنده
            </p>
          </div>
        </section>

        <section className="mb-14 rounded-2xl border border-primary-home/10 bg-[#eef4f0] px-5 py-8 text-center sm:px-8">
          <h2 className="mb-3 text-xl font-extrabold text-primary-home">مأموریت</h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#3d5a4c] sm:text-lg">
            مدیریت سالن رو برای هر سالونی، کوچیک یا بزرگ، ساده و در دسترس کنیم.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-center text-xl font-extrabold text-primary-home sm:text-2xl">
            ارزش‌های ما
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-2xl border border-primary-home/10 bg-white p-5 shadow-sm"
              >
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-home/10 text-primary-home">
                  <Icon className="text-2xl" aria-hidden />
                </div>
                <h3 className="mb-2 font-bold text-[#15241c]">{title}</h3>
                <p className="text-sm leading-relaxed text-[#3d5a4c]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-14">
          <h2 className="mb-6 text-center text-xl font-extrabold text-primary-home sm:text-2xl">
            مراحل کار با نارژین
          </h2>
          <ol className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {steps.map((s) => (
              <li
                key={s.n}
                className="rounded-2xl border border-primary-home/10 bg-white p-5 shadow-sm"
              >
                <span className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary-home text-lg font-bold text-white">
                  {s.n}
                </span>
                <h3 className="mb-2 font-bold text-[#15241c]">{s.title}</h3>
                <p className="text-sm leading-relaxed text-[#3d5a4c]">{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="rounded-2xl bg-primary-home px-5 py-10 text-center text-white sm:px-8">
          <h2 className="mb-6 text-xl font-extrabold sm:text-2xl">
            آماده‌اید سالنتون رو آنلاین کنیم؟
          </h2>
          <div className="mb-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://panel.narjin.ir"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-7 py-3 text-base font-bold text-primary-home transition hover:bg-white/90"
            >
              ساخت سالن من (رایگان)
            </a>
            <Link
              href="/#contact"
              className="inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-white/40 px-7 py-3 text-base font-bold text-white transition hover:border-white"
            >
              تماس با ما
            </Link>
          </div>
          <p className="text-sm text-white/80">
            <a href="mailto:info@narjin.ir" className="hover:underline">
              info@narjin.ir
            </a>
            {" · "}
            <a href="tel:09912146083" className="hover:underline">
              ۰۹۹۱۲۱۴۶۰۸۳
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
