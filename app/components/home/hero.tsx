"use client";

import {
  MdPlayArrow,
  MdAccessTime,
  MdSms,
  MdBarChart,
} from "react-icons/md";

/** نمای نمایشی رابط پنل — داده نمونه، نه اسکرین‌شات زنده */
function PanelPreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#0a4d3a]/20 bg-white shadow-[0_24px_60px_-24px_rgba(0,53,39,0.35)] sm:rounded-3xl">
      <div className="flex items-center justify-between border-b border-[#0a4d3a]/10 bg-[#003527] px-3 py-2.5 sm:px-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ffc329]" />
          <span className="text-xs font-medium text-white/90 sm:text-sm">
            پنل نارژین
          </span>
        </div>
        <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-[10px] text-white/80 sm:text-xs">
          نمای نمایشی
        </span>
      </div>

      <div className="grid grid-cols-[72px_1fr] sm:grid-cols-[88px_1fr]">
        <aside className="space-y-2 border-l border-[#0a4d3a]/8 bg-[#f0f5f2] p-2 sm:p-3">
          {["نوبت‌ها", "مشتریان", "خدمات", "گزارش"].map((item, i) => (
            <div
              key={item}
              className={`rounded-lg px-1.5 py-2 text-center text-[10px] sm:text-xs ${
                i === 0
                  ? "bg-[#003527] font-semibold text-white"
                  : "text-[#3d5a4c]"
              }`}
            >
              {item}
            </div>
          ))}
        </aside>

        <div className="min-w-0 space-y-3 p-3 sm:p-4">
          <div className="flex items-center justify-between gap-2">
            <p className="text-xs font-bold text-[#003527] sm:text-sm">
              تقویم نوبت‌ها
            </p>
            <span className="text-[10px] text-[#5a7266] sm:text-xs">امروز</span>
          </div>

          {[
            { time: "۱۰:۰۰", name: "نوبت صبح", service: "کوتاهی مو" },
            { time: "۱۱:۳۰", name: "نوبت ظهر", service: "رنگ و مش" },
            { time: "۱۴:۰۰", name: "نوبت بعدازظهر", service: "مراقبت پوست" },
            { time: "۱۶:۳۰", name: "نوبت عصر", service: "ناخن" },
          ].map((row) => (
            <div
              key={row.time}
              className="flex min-w-0 items-center gap-2 rounded-xl border border-[#0a4d3a]/10 bg-[#f7faf6] px-2.5 py-2 sm:gap-3 sm:px-3"
            >
              <span className="shrink-0 rounded-md bg-[#003527]/10 px-1.5 py-1 text-[10px] font-bold text-[#003527] sm:text-xs">
                {row.time}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-xs font-medium text-[#15241c] sm:text-sm">
                  {row.name}
                </p>
                <p className="truncate text-[10px] text-[#5a7266] sm:text-xs">
                  {row.service}
                </p>
              </div>
              <span className="hidden shrink-0 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] text-emerald-800 sm:inline">
                تأییدشده
              </span>
            </div>
          ))}

          <div className="grid grid-cols-3 gap-2 pt-1">
            {[
              { label: "نوبت امروز", value: "۱۲" },
              { label: "آزاد", value: "۴" },
              { label: "یادآوری", value: "۸" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl bg-[#003527]/5 px-2 py-2 text-center"
              >
                <p className="text-sm font-bold text-[#003527] sm:text-base">
                  {s.value}
                </p>
                <p className="text-[10px] text-[#5a7266] sm:text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background-home pt-[5.5rem] pb-12 sm:pt-28 sm:pb-16 md:pb-20">
      <div className="pointer-events-none absolute inset-x-0 top-[4.5rem] bottom-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,53,39,0.06),_transparent_50%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
          <div className="order-2 min-w-0 text-center lg:order-1 lg:text-right">
            <p className="mb-3 inline-flex items-center rounded-full border border-primary-home/20 bg-primary-home/5 px-3.5 py-1.5 text-sm font-semibold text-primary-home sm:text-base">
              نرم افزار مدیریت نوبت دهی
            </p>

            <h1
              id="hero-title"
              className="mb-4 font-extrabold leading-[1.35] text-primary-home sm:mb-5"
              style={{ fontSize: "clamp(1.5rem, 2.6vw + 0.85rem, 2.5rem)" }}
            >
              روشی هوشمند برای مدیریت مراجعه کنندگان شما
            </h1>

            <p className="narjin-prose mx-auto mb-7 max-w-[36rem] text-[0.95rem] leading-[1.85] text-[#3d5a4c] sm:mb-8 sm:text-base lg:mx-0 lg:max-w-none">
              کمتر تلفن جواب بدید و نوبت ها رو منظم تر مدیریت کنید
            </p>

            <div
              id="hero-ctas"
              className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-start"
            >
              <a
                href="https://panel.narjin.ir"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-primary-container-home px-8 py-3.5 text-base font-bold text-on-primary shadow-md transition hover:opacity-95 hover:shadow-lg"
              >
                ساخت سالن من، رایگان
              </a>
              <a
                href="#product-demo"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border-2 border-primary-home/30 px-5 py-3 text-base font-bold text-primary-home transition hover:border-primary-home hover:bg-primary-home/5"
              >
                <MdPlayArrow className="text-xl" />
                مشاهده معرفی
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap items-center justify-center gap-2.5 lg:justify-start">
              {[
                { icon: MdAccessTime, label: "رزرو ۲۴ ساعته" },
                { icon: MdSms, label: "یادآوری پیامکی" },
                { icon: MdBarChart, label: "گزارش درآمد" },
              ].map(({ icon: Icon, label }) => (
                <li
                  key={label}
                  className="inline-flex shrink-0 items-center gap-2 whitespace-nowrap rounded-full border border-primary-home/15 bg-white px-3.5 py-2 text-sm font-medium text-[#1f3a2e] shadow-sm"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-home/10 text-primary-home">
                    <Icon className="text-base" />
                  </span>
                  {label}
                </li>
              ))}
            </ul>
          </div>

          <div className="order-1 min-w-0 lg:order-2">
            <PanelPreview />
          </div>
        </div>
      </div>
    </section>
  );
}
