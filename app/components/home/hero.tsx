"use client";

import { useEffect, useRef } from "react";
import HeroShader from "./hero-shader";
import { MdArrowBack } from "react-icons/md";

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Split text animation
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

    // Intersection Observer for animations
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

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      <div className="absolute inset-0 w-full h-full -z-10 opacity-40">
        <HeroShader />
      </div>
      <div className="container mx-auto px-margin-mobile text-center z-10">
        <h1
          ref={titleRef}
          className="font-headline-lg text-headline-lg md:text-[56px] md:leading-[72px] text-primary-home mb-lg split-reveal"
          id="hero-title"
        >
          نوبت‌دهی آنلاین برای آرایشگاه رایگان شروع کن
        </h1>
        <p
          className="fade-up font-body-lg text-body-lg text-secondary-home max-w-2xl mx-auto mb-xl opacity-0"
          style={{ transitionDelay: "0.6s" }}
        >
نارژین یک نرم‌افزار تخصصی مدیریت سالن‌های زیبایی است که رزرو آنلاین، مدیریت مشتریان، گزارش‌های مالی و مدیریت کارکنان را در یک پنل ساده و هوشمند در اختیار شما قرار می‌دهد.
        </p>
        <div
          className="fade-up flex flex-col md:flex-row gap-md justify-center items-center opacity-0"
          style={{ transitionDelay: "0.8s" }}
        >
          <button className="glow-pulse bg-primary-container-home text-on-primary px-xl py-md rounded-full font-headline-sm text-headline-sm hover:scale-105 transition-transform">
           رایگان شروع کنید
          </button>
          <button className="flex items-center gap-sm text-primary-home font-bold font-body-md text-body-md group">
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              <MdArrowBack />
            </span>
            مشاهده دمو 
          </button>
        </div>
      </div>
    </section>
  );
}
