"use client";

import { MdCheckCircleOutline, MdClose } from "react-icons/md";

const withoutItems = [
  "دفترچه‌های کاغذی شلوغ و نامرتب",
  "پاسخگویی به تلفن حتی در زمان کار",
  "فراموشی نوبت توسط مشتری",
  "محاسبه دستی سهم آرایشگرها",
];

const withItems = [
  "تقویم آنلاین و منظم نوبت‌ها",
  "لینک اختصاصی نوبت‌دهی",
  "پیامک تأیید و یادآوری خودکار",
  "گزارش مالی و عملکرد آرایشگران",
];

export default function Comparison() {
  return (
    <section className="bg-[#eef4f0] py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="mb-8 text-center text-xl font-extrabold text-primary-home sm:mb-10 sm:text-2xl md:text-3xl">
          سالن شما با نارژین و بدون نارژین
        </h2>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6">
          <div className="rounded-2xl border border-[#0a4d3a]/15 bg-white p-5 sm:rounded-3xl sm:p-7">
            <h3 className="mb-5 text-lg font-bold text-[#15241c]">بدون نارژین</h3>
            <ul className="space-y-3.5">
              {withoutItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-[#3d5a4c] sm:text-base">
                  <MdClose className="mt-0.5 shrink-0 text-xl text-red-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border-2 border-primary-home/30 bg-primary-home p-5 text-white shadow-md sm:rounded-3xl sm:p-7">
            <h3 className="mb-5 text-lg font-bold">با نارژین</h3>
            <ul className="space-y-3.5">
              {withItems.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm sm:text-base">
                  <MdCheckCircleOutline className="mt-0.5 shrink-0 text-xl text-[#ffc329]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
