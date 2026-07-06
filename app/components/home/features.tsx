"use client";

import { useEffect, useRef } from "react";
import { MdEventBusy, MdSupportAgent, MdTrendingDown } from "react-icons/md";

const featuresData = [
  {
    icon: <MdEventBusy />,
    color: "error-home",
    bgColor: "bg-error-home/10",
    title: "نوبت‌های فراموش شده",
    description:
      "با ارسال پیامک یادآوری خودکار به مشتریان، کنسلی‌ها را تا ۷۰٪ کاهش دهید.",
  },
  {
    icon: <MdSupportAgent />,
    color: "primary-home",
    bgColor: "bg-primary-home/10",
    title: "ترافیک تلفنی بالا",
    description:
      "دیگر نیاز نیست تمام وقت پشت تلفن باشید. مشتریان آنلاین نوبت خود را ثبت می‌کنند.",
  },
  {
    icon: <MdTrendingDown />,
    color: "tertiary-home",
    bgColor: "bg-tertiary-home/10",
    title: "درآمد از دست رفته",
    description:
      "با تحلیل هوشمند پرنشده‌ترین ساعت‌ها، جشنواره بگذارید و صندلی‌های خالی را پر کنید.",
  },
];

export default function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    }, observerOptions);

    if (sectionRef.current) {
      sectionRef.current
        .querySelectorAll(".fade-up")
        .forEach((el) => observer.observe(el));
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-xl bg-background-home"
      id="features"
    >
      <div className="container mx-auto px-margin-mobile">
        <div className="text-center mb-xl">
          <h2 className="font-headline-lg text-headline-lg text-primary-home mb-sm">
            خداحافظی با چالش‌های سنتی
          </h2>
          <p className="font-body-md text-body-md text-secondary-home">
            ما دغدغه‌های شما را می‌شناسیم و برای آن‌ها راهکار داریم.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg max-w-6xl mx-auto">
          {featuresData.map((feature, index) => (
            <div
              key={feature.title}
              className="fade-up glass-card p-xl rounded-3xl hover:shadow-xl transition-all duration-500 group"
              style={{ transitionDelay: `${(index + 1) * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 ${feature.bgColor} text-${feature.color} rounded-2xl flex items-center justify-center mb-lg group-hover:rotate-6 transition-transform`}
              >
                <span className="material-symbols-outlined text-[32px]">
                  {feature.icon}
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface mb-md">
                {feature.title}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant-home">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
