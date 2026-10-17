"use client";

import { MdStar } from "react-icons/md";

/** نمونه نمایشی — نظر واقعی مشتری نیست */
const samples = [
  {
    name: "مدیر سالن",
    role: "سالن زیبایی",
    text: "نوبت‌دهی آنلاین باعث شده تماس‌های تکراری کمتر شود و تقویم مرتب‌تر باشد.",
  },
  {
    name: "مسئول پذیرش",
    role: "مرکز خدمات زیبایی",
    text: "یادآوری پیامکی به پیگیری نوبت‌ها کمک می‌کند و کار روزانه منظم‌تر پیش می‌رود.",
  },
  {
    name: "مالک مجموعه",
    role: "سالن چندخدماتی",
    text: "گزارش‌های پنل برای بررسی عملکرد خدمات و برنامه‌ریزی پرسنل مفید است.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#eef4f0] py-12 sm:py-16" id="testimonials">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-2 text-center text-xl font-extrabold text-primary-home sm:text-2xl md:text-3xl">
          تجربه کار با ابزار مدیریت نوبت
        </h2>
        <p className="mb-2 text-center text-sm text-[#3d5a4c]">
          نمونه‌های نمایشی از بازخوردهای رایج مدیران سالن
        </p>
        <p className="mb-8 text-center text-xs font-medium text-amber-800">
          نمونه نمایشی — نظر واقعی مشتری نیست
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
          {samples.map((t) => (
            <article key={t.name + t.role} className="flex flex-col rounded-2xl border border-primary-home/10 bg-white p-5 shadow-sm">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-home/10 text-sm font-bold text-primary-home">
                  {t.name.charAt(0)}
                </div>
                <div className="min-w-0">
                  <div className="truncate font-bold text-[#15241c]">{t.name}</div>
                  <div className="truncate text-xs text-[#5a7266]">{t.role}</div>
                </div>
              </div>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-[#3d5a4c] not-italic">«{t.text}»</p>
              <div className="flex gap-0.5 text-amber-500" aria-hidden>
                {[...Array(5)].map((_, i) => (
                  <MdStar key={i} className="text-base" />
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
