"use client";

import { MdEventAvailable, MdPeople, MdPayments, MdNotificationsActive } from "react-icons/md";

const highlights = [
  {
    icon: MdEventAvailable,
    title: "رزرو آنلاین ۲۴ ساعته",
    text: "مشتری از لینک اختصاصی سالن، در هر ساعت شبانه‌روز نوبت می‌گیرد.",
  },
  {
    icon: MdNotificationsActive,
    title: "یادآوری پیامکی",
    text: "تأیید و یادآوری نوبت به‌صورت خودکار ارسال می‌شود تا پیگیری آسان‌تر باشد.",
  },
  {
    icon: MdPeople,
    title: "پرونده مشتریان",
    text: "سوابق مراجعه و خدمات در یک پنل قابل‌مشاهده است.",
  },
  {
    icon: MdPayments,
    title: "گزارش درآمد",
    text: "خلاصه عملکرد مالی و سهم کارکنان در گزارش‌های مدیریتی در دسترس است.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-background-home py-12 sm:py-16" id="highlights">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-2 text-center text-xl font-extrabold text-primary-home sm:text-2xl md:text-3xl">
          آنچه در نارژین دارید
        </h2>
        <p className="mb-8 text-center text-sm text-[#3d5a4c] sm:text-base">
          امکانات اصلی محصول برای مدیریت روزمره سالن
        </p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {highlights.map(({ icon: Icon, title, text }) => (
            <article
              key={title}
              className="rounded-2xl border border-primary-home/10 bg-white p-5 shadow-sm transition duration-300 hover:shadow-md"
            >
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary-home/10 text-primary-home">
                <Icon className="text-2xl" />
              </div>
              <h3 className="mb-2 text-base font-bold text-[#15241c]">{title}</h3>
              <p className="text-sm leading-relaxed text-[#3d5a4c]">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
