"use client";

import { MdEventBusy, MdPhoneDisabled, MdTrendingUp } from "react-icons/md";

const featuresData = [
  {
    icon: <MdEventBusy className="text-3xl" />,
    bg: "bg-primary-home/10",
    color: "text-primary-home",
    title: "نوبت‌های فراموش‌شده",
    description:
      "با یادآوری خودکار پیامکی، پیگیری نوبت‌ها منظم‌تر می‌شود و کمتر نوبت از قلم می‌افتد.",
  },
  {
    icon: <MdPhoneDisabled className="text-3xl" />,
    bg: "bg-secondary-container/30",
    color: "text-secondary",
    title: "تلفن‌های بی‌پایان",
    description:
      "مشتری از لینک اختصاصی سالن، هر ساعت از شبانه‌روز نوبت می‌گیرد؛ بدون قطع کار شما.",
  },
  {
    icon: <MdTrendingUp className="text-3xl" />,
    bg: "bg-tertiary-home/10",
    color: "text-tertiary-home",
    title: "مدیریت درآمد و زمان",
    description:
      "گزارش عملکرد و ساعات خلوت را ببینید تا برنامه‌ریزی خدمات و پرسنل دقیق‌تر شود.",
  },
];

export default function Features() {
  return (
    <section className="bg-background-home py-12 sm:py-16" id="features">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="text-xl font-extrabold text-primary-home sm:text-2xl md:text-3xl">
            خداحافظی با چالش‌های سنتی
          </h2>
          <p className="mt-2 text-sm text-on-surface-variant-home sm:text-base">
            دغدغه‌های رایج سالن‌ها را می‌شناسیم و برایشان راهکار داریم.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {featuresData.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-outline-variant/20 bg-white p-5 shadow-sm transition hover:shadow-md sm:p-6 sm:rounded-3xl"
            >
              <div
                className={`mb-4 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.bg} ${feature.color}`}
              >
                {feature.icon}
              </div>
              <h3 className="mb-2 text-base font-bold text-on-surface sm:text-lg">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-on-surface-variant-home">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
