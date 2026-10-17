"use client";

import Image from "next/image";
import { MdArrowBack, MdPlayArrow } from "react-icons/md";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background-home pt-28 sm:pt-32 pb-12 sm:pb-16 md:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(6,95,70,0.06),_transparent_55%)]" />

      <div className="container relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 text-center lg:order-1 lg:text-right">
            <p className="mb-3 text-sm font-medium text-primary-home/80 sm:text-base">
              نرم‌افزار مدیریت سالن زیبایی
            </p>
            <h1
              id="hero-title"
              className="mb-4 text-primary-home font-extrabold leading-snug sm:mb-5"
              style={{
                fontSize: "clamp(1.5rem, 3.2vw + 0.8rem, 2.75rem)",
              }}
            >
              نوبت‌دهی آنلاین آرایشگاه را رایگان شروع کنید
            </h1>
            <p className="mx-auto mb-7 max-w-xl text-sm leading-relaxed text-on-surface-variant-home sm:mb-8 sm:text-base lg:mx-0">
              نارژین رزرو آنلاین، مدیریت مشتریان، گزارش مالی و کارکنان را در یک
              پنل ساده کنار هم قرار می‌دهد تا کمتر تلفن پاسخ دهید و نوبت‌ها منظم‌تر
              پیش بروند.
            </p>

            <div
              id="hero-ctas"
              className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center lg:justify-start"
            >
              <a
                href="https://panel.narjin.ir"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-primary-container-home px-7 py-3.5 text-base font-bold text-on-primary shadow-md transition hover:opacity-95 hover:shadow-lg sm:px-9"
              >
                رایگان شروع کنید
              </a>
              <a
                href="#product-demo"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border-2 border-primary-home/25 px-5 py-3 text-base font-bold text-primary-home transition hover:border-primary-home hover:bg-primary-home/5"
              >
                <MdPlayArrow className="text-xl" />
                مشاهده معرفی
              </a>
            </div>

            <ul className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-on-surface-variant-home sm:text-sm lg:justify-start">
              <li className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-home" />
                رزرو ۲۴ ساعته
              </li>
              <li className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-home" />
                یادآوری پیامکی
              </li>
              <li className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-primary-home" />
                گزارش درآمد
              </li>
            </ul>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              <div className="overflow-hidden rounded-2xl border border-outline-variant/25 bg-white shadow-[0_20px_50px_-20px_rgba(6,95,70,0.25)] sm:rounded-3xl">
                <Image
                  src="/images/about.png"
                  alt="نمای نرم‌افزار نارژین — مدیریت سالن زیبایی"
                  width={900}
                  height={700}
                  className="h-auto w-full object-cover object-top"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <p className="mt-3 text-center text-xs text-on-surface-variant-home/80 lg:text-right">
                نمای نمایشی از فضای کاری نارژین
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
