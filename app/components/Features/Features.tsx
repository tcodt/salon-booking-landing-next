"use client";

import { useEffect, useRef } from "react";
import { MdEventBusy, MdSupportAgent, MdTrendingDown } from "react-icons/md";

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
    <section ref={sectionRef} className="py-xl bg-background" id="features">
      <div className="container mx-auto px-margin-mobile">
        <div className="text-center mb-xl">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-sm">
            خداحافظی با چالش‌های سنتی
          </h2>
          <p className="font-body-md text-body-md text-secondary">
            ما دغدغه‌های شما را می‌شناسیم و برای آن‌ها راهکار داریم.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-lg max-w-6xl mx-auto">
          <div
            className="fade-up glass-card p-xl rounded-3xl hover:shadow-xl transition-all duration-500 group"
            style={{ transitionDelay: "0.1s" }}
          >
            <div className="w-16 h-16 bg-error/10 text-error rounded-2xl flex items-center justify-center mb-lg group-hover:rotate-6 transition-transform">
              <span className="material-symbols-outlined text-[32px]">
                <MdEventBusy />
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-md">
              نوبت‌های فراموش شده
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              با ارسال پیامک یادآوری خودکار به مشتریان، کنسلی‌ها را تا ۷۰٪ کاهش
              دهید.
            </p>
          </div>
          <div
            className="glass-card p-xl rounded-3xl hover:shadow-xl transition-all duration-500 group"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-lg group-hover:rotate-6 transition-transform">
              <span className="material-symbols-outlined text-[32px]">
                <MdSupportAgent />
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-md">
              ترافیک تلفنی بالا
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              دیگر نیاز نیست تمام وقت پشت تلفن باشید. مشتریان آنلاین نوبت خود را
              ثبت می‌کنند.
            </p>
          </div>
          <div
            className="glass-card p-xl rounded-3xl hover:shadow-xl transition-all duration-500 group"
            style={{ transitionDelay: "0.3s" }}
          >
            <div className="w-16 h-16 bg-tertiary/10 text-tertiary rounded-2xl flex items-center justify-center mb-lg group-hover:rotate-6 transition-transform">
              <span className="material-symbols-outlined text-[32px]">
                <MdTrendingDown />
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface mb-md">
              درآمد از دست رفته
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              با تحلیل هوشمند پرنشده‌ترین ساعت‌ها، جشنواره بگذارید و صندلی‌های
              خالی را پر کنید.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
