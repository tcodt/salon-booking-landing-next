"use client";

import { useEffect, useState } from "react";
import { MdCheckCircle, MdSms } from "react-icons/md";

type HeroMedia = { video: string | null; poster: string | null };

const SERVICES = ["کوتاهی مو", "رنگ و مش", "مراقبت پوست", "ناخن"];
const TIMES = ["۱۰:۰۰", "۱۱:۳۰", "۱۴:۰۰", "۱۶:۳۰"];
const STEP_MS = 2600;

/** انیمیشن پیش‌فرض (وقتی ویدیویی در پنل مدیریت آپلود نشده): ۳ مرحلهٔ رزرو مشتری */
function DemoScreen() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = setInterval(() => setStep((s) => (s + 1) % 3), STEP_MS);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex h-full flex-col bg-[#f7faf6] text-[#15241c]">
      <div className="bg-[#003527] px-4 pb-3 pt-9 text-white">
        <p className="text-[11px] opacity-80">سالن زیبایی آرمان</p>
        <p className="text-sm font-bold">رزرو آنلاین نوبت</p>
      </div>

      <div className="relative flex-1 overflow-hidden">
        {/* مرحله ۱: خدمت */}
        <div className={`absolute inset-0 space-y-2 p-4 transition-all duration-500 ${step === 0 ? "opacity-100" : "pointer-events-none -translate-x-4 opacity-0"}`}>
          <p className="text-xs font-bold text-[#003527]">خدمت را انتخاب کنید</p>
          {SERVICES.map((s, i) => (
            <div
              key={s}
              className={`flex items-center justify-between rounded-xl border px-3 py-2.5 text-xs ${
                i === 1 ? "border-[#003527] bg-[#003527]/10 font-bold text-[#003527]" : "border-[#0a4d3a]/10 bg-white text-[#3d5a4c]"
              }`}
            >
              {s}
              {i === 1 && <MdCheckCircle className="text-base text-[#003527]" aria-hidden />}
            </div>
          ))}
        </div>

        {/* مرحله ۲: ساعت */}
        <div className={`absolute inset-0 space-y-3 p-4 transition-all duration-500 ${step === 1 ? "opacity-100" : "pointer-events-none translate-x-4 opacity-0"}`}>
          <p className="text-xs font-bold text-[#003527]">روز و ساعت</p>
          <div className="grid grid-cols-3 gap-2">
            {["شنبه ۱۵", "یکشنبه ۱۶", "دوشنبه ۱۷"].map((d, i) => (
              <div key={d} className={`rounded-lg border py-2 text-center text-[10px] ${i === 1 ? "border-[#003527] bg-[#003527]/10 font-bold" : "border-[#0a4d3a]/10 bg-white"}`}>
                {d}
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            {TIMES.map((t, i) => (
              <div key={t} className={`rounded-lg py-2 text-center text-xs font-semibold ${i === 2 ? "bg-[#ffc329] text-[#003527]" : "bg-[#003527]/5 text-[#003527]"}`}>
                {t}
              </div>
            ))}
          </div>
          <div className="rounded-full bg-[#003527] py-2.5 text-center text-xs font-bold text-white">ثبت نوبت</div>
        </div>

        {/* مرحله ۳: تأیید */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center gap-3 p-4 text-center transition-all duration-500 ${step === 2 ? "opacity-100" : "pointer-events-none translate-x-4 opacity-0"}`}>
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <MdCheckCircle size={34} aria-hidden />
          </span>
          <p className="text-sm font-bold text-[#003527]">نوبت شما ثبت شد</p>
          <p className="text-[11px] text-[#5a7266]">یکشنبه ۱۶ — ساعت ۱۴:۰۰<br />رنگ و مش</p>
          <div className="mt-2 flex items-center gap-2 rounded-xl border border-[#0a4d3a]/10 bg-white px-3 py-2 text-[10px] text-[#3d5a4c]">
            <MdSms className="text-base text-emerald-600" aria-hidden /> پیامک یادآوری ارسال می‌شود
          </div>
        </div>
      </div>

      {/* نقطه‌های صفحه‌بندی: فقط transform/opacity انیمیت می‌شوند (کامپوزیت)، نه width/background-color */}
      <div className="flex justify-center gap-2 pb-4 pt-2" aria-hidden>
        {[0, 1, 2].map((i) => (
          <span key={i} className="relative block h-1.5 w-1.5">
            <span className="absolute inset-0 rounded-full bg-[#003527]/25" />
            <span
              className={`absolute inset-0 rounded-full bg-[#003527] transition-[transform,opacity] duration-300 ${
                step === i ? "scale-x-[3.33] opacity-100" : "scale-x-100 opacity-0"
              }`}
            />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function PhoneMockup() {
  const [media, setMedia] = useState<HeroMedia | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/hero-video")
      .then((r) => (r.ok ? r.json() : null))
      .then((d: HeroMedia | null) => {
        if (!cancelled && d?.video) setMedia(d);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div className="mx-auto w-[11.5rem] sm:w-[16rem]" aria-label="پیش‌نمایش رزرو آنلاین در موبایل">
      <div className="relative rounded-[2.4rem] bg-[#0c1a14] p-2.5 shadow-[0_30px_70px_-20px_rgba(0,53,39,0.55)] ring-1 ring-black/10">
        {/* دکمه‌های کناری */}
        <span className="absolute -left-[3px] top-24 h-10 w-[3px] rounded-r bg-[#0c1a14]" aria-hidden />
        <span className="absolute -right-[3px] top-32 h-14 w-[3px] rounded-l bg-[#0c1a14]" aria-hidden />
        <div className="relative aspect-[9/19] overflow-hidden rounded-[1.9rem] bg-black">
          {/* ناچ */}
          <span className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-[#0c1a14]" aria-hidden />
          {media?.video ? (
            <video
              className="h-full w-full object-cover"
              src={media.video}
              poster={media.poster ?? undefined}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden
            />
          ) : (
            <DemoScreen />
          )}
        </div>
      </div>
    </div>
  );
}
