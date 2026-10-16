"use client";

import { useEffect, useRef } from "react";
import HeroShader from "./hero-shader";
import { MdArrowBack } from "react-icons/md";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const splitText = (el: HTMLElement) => {
      const words = el.textContent?.split(" ") || [];
      el.innerHTML = words
        .map(
          (word, i) =>
            `<span style="transition-delay: ${i * 0.1}s">${word}</span>`,
        )
        .join(" ");
    };

    if (titleRef.current) {
      splitText(titleRef.current);
    }

    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          if (entry.target.classList.contains("split-reveal")) {
            entry.target.classList.add("active");
          }
        }
      });
    }, observerOptions);

    document
      .querySelectorAll(".fade-up, .split-reveal")
      .forEach((el) => observer.observe(el));

    // Ensure hero CTAs become visible even if observer misses
    const timer = window.setTimeout(() => {
      document
        .querySelectorAll("#hero-ctas, #hero-subtitle, #hero-title")
        .forEach((el) => {
          el.classList.add("visible", "active");
        });
    }, 400);

    return () => {
      observer.disconnect();
      window.clearTimeout(timer);
    };
  }, []);

  return (
    <section className="relative min-h-[85vh] sm:min-h-screen flex items-center justify-center pt-24 sm:pt-20 pb-10 overflow-hidden">
      <div className="absolute inset-0 w-full h-full -z-10 opacity-40">
        <HeroShader />
      </div>
      <div className="container mx-auto px-4 sm:px-margin-mobile text-center z-10 max-w-4xl">
        <h1
          ref={titleRef}
          className="font-headline-lg text-primary-home mb-4 sm:mb-lg split-reveal px-1"
          id="hero-title"
          style={{
            fontSize: "clamp(1.375rem, 4.5vw + 0.75rem, 3.5rem)",
            lineHeight: "1.35",
            fontWeight: 700,
          }}
        >
          نوبت‌دهی آنلاین برای آرایشگاه رایگان شروع کن
        </h1>
        <p
          id="hero-subtitle"
          className="fade-up font-body-lg text-sm sm:text-body-lg text-secondary-home max-w-2xl mx-auto mb-6 sm:mb-xl opacity-0 leading-relaxed px-1"
          style={{ transitionDelay: "0.6s" }}
        >
          نارژین یک نرم‌افزار تخصصی مدیریت سالن‌های زیبایی است که رزرو آنلاین، مدیریت مشتریان، گزارش‌های مالی و مدیریت کارکنان را در یک پنل ساده و هوشمند در اختیار شما قرار می‌دهد.
        </p>

        {/* دو دکمه اصلی هیرو */}
        <div
          id="hero-ctas"
          className="fade-up flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center w-full max-w-md sm:max-w-none mx-auto opacity-0"
          style={{ transitionDelay: "0.8s" }}
        >
          <a
            href="https://panel.narjin.ir"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-pulse inline-flex items-center justify-center w-full sm:w-auto bg-primary-container-home text-on-primary px-6 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-base sm:text-lg hover:scale-105 transition-transform min-h-[48px] shadow-md"
          >
            رایگان شروع کنید
          </a>
          <a
            href="#product-video"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto text-primary-home font-bold text-base sm:text-lg group min-h-[48px] px-4 py-3 rounded-full border-2 border-primary-home/30 hover:border-primary-home hover:bg-primary-home/5 transition-all"
          >
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform inline-flex">
              <MdArrowBack />
            </span>
            مشاهده دمو
          </a>
        </div>
      </div>
    </section>
  );
}
