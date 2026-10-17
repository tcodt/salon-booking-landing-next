"use client";

import { MdEventBusy, MdPhoneDisabled, MdTrendingUp } from "react-icons/md";

const featuresData = [
  {
    icon: MdEventBusy,
    title: "نوبت‌های فراموش‌شده",
    description:
      "با یادآوری خودکار پیامکی، پیگیری نوبت‌ها منظم‌تر می‌شود و کمتر نوبت از قلم می‌افتد.",
  },
  {
    icon: MdPhoneDisabled,
    title: "تلفن‌های بی‌پایان",
    description:
      "مشتری از لینک اختصاصی سالن، هر ساعت از شبانه‌روز نوبت می‌گیرد؛ بدون قطع کار شما.",
  },
  {
    icon: MdTrendingUp,
    title: "مدیریت درآمد و زمان",
    description:
      "گزارش عملکرد و ساعات خلوت را ببینید تا برنامه‌ریزی خدمات و پرسنل دقیق‌تر شود.",
  },
];

export default function Features() {
  return (
    <section className="bg-background-home py-12 sm:py-16" id="features">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="text-xl font-extrabold text-primary-home sm:text-2xl md:text-3xl">
            دیگه نوبت‌هاتون بین دفترچه و تماس‌ها گم نمی‌شن
          </h2>
          <p className="mt-2 text-sm text-[#3d5a4c] sm:text-base">
            چالش‌های روزمره مدیریت سالن را می‌شناسیم و برایشان ابزار داریم.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {featuresData.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-2xl border border-primary-home/10 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:rounded-3xl sm:p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-home/10 text-primary-home">
                <Icon className="text-2xl" />
              </div>
              <h3 className="mb-2 text-base font-bold text-[#15241c] sm:text-lg">{title}</h3>
              <p className="text-sm leading-relaxed text-[#3d5a4c]">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
