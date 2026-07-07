"use client";

import { useEffect, useRef } from "react";
import { MdCheckCircleOutline, MdClose } from "react-icons/md";

export default function Comparison() {
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
      className="py-xl bg-surface-container-low overflow-hidden"
    >
      <div className="container mx-auto px-margin-mobile">
        <h2 className="font-headline-lg text-headline-lg text-center text-primary-home mb-xl">
          تفاوت را احساس کنید
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg max-w-5xl mx-auto">
          {/* Without Narjin */}
          <div
            className="fade-up p-xl bg-white rounded-4xl border border-outline-variant/30 opacity-60"
            style={{ transitionDelay: "0.1s" }}
          >
            <h4 className="font-headline-sm text-headline-sm text-secondary-home mb-lg">
              بدون نارژین
            </h4>
            <ul className="space-y-md">
              <li className="flex items-center gap-sm text-secondary-home font-body-md">
                <span className="material-symbols-outlined text-error-home">
                  <MdClose />
                </span>
                دفترچه‌های کاغذی شلوغ و نامرتب
              </li>
              <li className="flex items-center gap-sm text-secondary-home font-body-md">
                <span className="material-symbols-outlined text-error-home">
                  <MdClose />
                </span>
                پاسخگویی به تلفن حتی در زمان کار
              </li>
              <li className="flex items-center gap-sm text-secondary-home font-body-md">
                <span className="material-symbols-outlined text-error-home">
                  <MdClose />
                </span>
                فراموشی نوبت توسط مشتری
              </li>
              <li className="flex items-center gap-sm text-secondary-home font-body-md">
                <span className="material-symbols-outlined text-error-home">
                  <MdClose />
                </span>
                عدم گزارش‌های دقیق
              </li>
            </ul>
          </div>
          {/* With Narjin */}
          <div
            className="fade-up p-xl bg-primary-container-home text-on-primary rounded-4xl shadow-2xl relative scale-105 z-10"
            style={{ transitionDelay: "0.2s" }}
          >
            <div className="absolute -top-4 -right-4 bg-tertiary-home text-on-tertiary-home px-md py-xs rounded-full font-label-md">
              پیشنهادی
            </div>
            <h4 className="font-headline-sm text-headline-sm mb-lg">
              با نارژین
            </h4>
            <ul className="space-y-md">
              <li className="flex items-center gap-sm font-body-md animate-pulse">
                <span className="material-symbols-outlined text-primary-fixed">
                  <MdCheckCircleOutline />
                </span>
                تقویم هوشمند و مدیریت لحظه‌ای
              </li>
              <li
                className="flex items-center gap-sm font-body-md animate-pulse"
                style={{ animationDelay: "0.2s" }}
              >
                <span className="material-symbols-outlined text-primary-fixed">
                  <MdCheckCircleOutline />
                </span>
                لینک اختصاصی نوبت‌دهی 
              </li>
              <li
                className="flex items-center gap-sm font-body-md animate-pulse"
                style={{ animationDelay: "0.4s" }}
              >
                <span className="material-symbols-outlined text-primary-fixed">
                  <MdCheckCircleOutline />
                </span>
                پیامک تایید و یادآوری خودکار
              </li>
              <li
                className="flex items-center gap-sm font-body-md animate-pulse"
                style={{ animationDelay: "0.6s" }}
              >
                <span className="material-symbols-outlined text-primary-fixed">
                  <MdCheckCircleOutline />
                </span>
                گزارش‌های دقیق مالی و عملکرد آرایشگران
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
