"use client";

import {
  MdPlayArrow,
  MdAccessTime,
  MdLink,
  MdCalendarMonth,
  MdGroups,
  MdContentCut,
  MdStorefront,
  MdBarChart,
  MdTrendingUp,
  MdAssessment,
  MdFolderShared,
  MdHistory,
  MdSearch,
  MdSms,
  MdLoyalty,
  MdCake,
} from "react-icons/md";

const FEATURE_CHIPS = [
  { icon: MdAccessTime, label: "رزرو آنلاین ۲۴ ساعته" },
  { icon: MdLink, label: "لینک اختصاصی رزرو" },
  { icon: MdCalendarMonth, label: "تقویم هوشمند نوبت‌ها" },
  { icon: MdGroups, label: "مدیریت کارکنان" },
  { icon: MdContentCut, label: "مدیریت خدمات سالن" },
  { icon: MdStorefront, label: "مدیریت اطلاعات سالن" },
  { icon: MdBarChart, label: "گزارش درآمد سالن" },
  { icon: MdTrendingUp, label: "تحلیل خدمات پرفروش" },
  { icon: MdAssessment, label: "گزارش عملکرد کارکنان" },
  { icon: MdFolderShared, label: "پرونده اختصاصی مشتریان" },
  { icon: MdHistory, label: "تاریخچه مراجعات" },
  { icon: MdSearch, label: "جستجوی سریع مشتریان" },
  { icon: MdSms, label: "پیامک یادآوری خودکار" },
  { icon: MdLoyalty, label: "باشگاه مشتریان" },
  { icon: MdCake, label: "پیام تبریک تولد" },
] as const;

function BookingPreview() {
  const days = [
    { d: "شنبه", n: "۱۵" },
    { d: "یکشنبه", n: "۱۶" },
    { d: "دوشنبه", n: "۱۷" },
    { d: "سه‌شنبه", n: "۱۸" },
  ];
  const times = ["۱۰:۰۰", "۱۱:۳۰", "۱۴:۰۰", "۱۶:۳۰"];
  return (
    <div className="relative mx-auto w-full max-w-[28rem]">
      <div className="overflow-hidden rounded-2xl border border-[#0a4d3a]/20 bg-white shadow-[0_24px_60px_-24px_rgba(0,53,39,0.35)] sm:rounded-3xl">
        <div className="flex items-center gap-2 border-b border-[#0a4d3a]/10 bg-[#003527] px-4 py-3">
          <MdLink className="text-lg text-[#ffc329]" aria-hidden />
          <span className="text-xs font-medium text-white/90 sm:text-sm" dir="ltr">
            narjin.ir/your-salon
          </span>
        </div>

        <div className="space-y-4 p-4 sm:p-5">
          <div>
            <p className="mb-2 text-xs font-bold text-[#003527] sm:text-sm">۱. خدمت را انتخاب کنید</p>
            <div className="flex flex-wrap gap-2">
              {["کوتاهی مو", "رنگ و مش", "مراقبت پوست", "ناخن"].map((s, i) => (
                <span
                  key={s}
                  className={`rounded-full border px-3 py-1.5 text-[11px] sm:text-xs ${
                    i === 1
                      ? "border-[#003527] bg-[#003527] font-semibold text-white"
                      : "border-[#0a4d3a]/20 bg-[#f7faf6] text-[#3d5a4c]"
                  }`}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-xs font-bold text-[#003527] sm:text-sm">۲. روز و ساعت</p>
            <div className="grid grid-cols-4 gap-2">
              {days.map((x, i) => (
                <div
                  key={x.d}
                  className={`rounded-xl border px-1 py-2 text-center ${
                    i === 1
                      ? "border-[#003527] bg-[#003527]/10"
                      : "border-[#0a4d3a]/10 bg-[#f7faf6]"
                  }`}
                >
                  <p className="text-[10px] text-[#5a7266]">{x.d}</p>
                  <p className="text-sm font-bold text-[#003527]">{x.n}</p>
                </div>
              ))}
            </div>
            <div className="mt-2 grid grid-cols-4 gap-2">
              {times.map((t, i) => (
                <span
                  key={t}
                  className={`rounded-lg py-1.5 text-center text-[11px] font-semibold sm:text-xs ${
                    i === 2
                      ? "bg-[#ffc329] text-[#003527]"
                      : "bg-[#003527]/5 text-[#003527]"
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <button
            type="button"
            tabIndex={-1}
            aria-hidden
            className="flex w-full items-center justify-center gap-2 rounded-full bg-[#003527] py-2.5 text-sm font-bold text-white"
          >
            <MdCalendarMonth aria-hidden /> ثبت نوبت
          </button>
        </div>
      </div>

      <div className="absolute -bottom-5 start-2 flex max-w-[80%] items-center gap-2.5 rounded-2xl border border-[#0a4d3a]/15 bg-white px-3.5 py-2.5 shadow-lg sm:-start-4">
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
          <MdSms aria-hidden />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-bold text-[#15241c]">نوبت شما ثبت شد ✓</p>
          <p className="text-[10px] text-[#5a7266]">پیامک یادآوری ارسال می‌شود</p>
        </div>
      </div>
    </div>
  );
}

function FeatureChipsMarquee() {
  const row = (prefix: string) =>
    FEATURE_CHIPS.map(({ icon: Icon, label }) => (
      <span
        key={`${prefix}-${label}`}
        className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#003527]/25 bg-white px-3.5 py-2 text-sm font-semibold text-[#1f3a2e] shadow-sm"
        style={{ marginInlineEnd: 12 }}
      >
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#003527]/10 text-[#003527]">
          <Icon size={16} aria-hidden />
        </span>
        {label}
      </span>
    ));

  return (
    <>
      <style>{`
        @keyframes narjin-marquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-33.333333%, 0, 0); }
        }
        .narjin-mq {
          overflow: hidden;
          width: 100%;
          margin-top: 2rem;
          direction: ltr;
        }
        .narjin-mq-track {
          display: flex;
          width: max-content;
          animation: narjin-marquee 50s linear infinite;
        }
        .narjin-mq-set {
          display: flex;
          flex-shrink: 0;
        }
        .narjin-mq:hover .narjin-mq-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .narjin-mq-track { animation: none !important; flex-wrap: wrap; width: 100%; }
          .narjin-mq-set:nth-child(n+2) { display: none; }
        }
      `}</style>
      <div className="narjin-mq" aria-label="امکانات نارژین">
        <div className="narjin-mq-track">
          <div className="narjin-mq-set">{row("a")}</div>
          <div className="narjin-mq-set" aria-hidden="true">{row("b")}</div>
          <div className="narjin-mq-set" aria-hidden="true">{row("c")}</div>
        </div>
      </div>
    </>
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
          </div>

          <div className="order-1 min-w-0 pb-6 lg:order-2">
            <BookingPreview />
          </div>
        </div>

        <FeatureChipsMarquee />
      </div>
    </section>
  );
}
