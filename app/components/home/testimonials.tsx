"use client";

import { useEffect, useRef, useState } from "react";
import { MdStar, MdChevronLeft, MdChevronRight } from "react-icons/md";

const testimonials = [
  {
    name: "مریم سعادتی",
    role: "مدیر سالن زیبایی ماهور",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_IssQQixJH5pjI_zpUCxgkI3jyIQ9KbxcDwJW2mSA0s2YSEV07vJSueSofQQc92DyxdRdn9x_sGijQ0xmWUacpep7PIW1g7oISd_u66vmUnYZA2QNJHcIcBfSyf19YkLlENkZv0anv20D2YgzXMcd5yW9ESNOclXS0UpTTjHCEFdO7LYv9gCS6MEMetaHU3IXl98z5trmxXMl3PulTEFhSmhyL6fwHbdOICmhr3suUfa8XVNUdOYSLeEZZnfem38PjTXd2Cdzq-s",
    text: "از وقتی نارژین را فعال کردم، تداخل نوبت‌ها کمتر شده. مشتری‌ها از بایو اینستاگرام راحت نوبت می‌گیرند.",
  },
  {
    name: "رضا علوی",
    role: "مدیریت پیرایش مدرن",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCeD_1evrhI849glnsGzexA4P0eBomnvKphKibun9uTasNrtekRf0ZnS4Vhm3xzFlrhcNcDjE7TpoLW2ggZAez3jl7PFz9ZFb_-wOuucbN66o65KsaPJR1YN2S7XqEwCk0DyOgmq2D1mgxa-CZX0sZLi7bwqGrpxwBWnYfdTZ_eRVVokwEUbodZshZnuIT34PSeNzvRHMxiD2LZ0-F219ADME61t8IhONL3YTgXQrubbCIT5H-3Rlhqz8eO0beJK2d3exZuHcd3-OI",
    text: "سیستم حسابداری و درصدبندی آرایشگرها در نارژین کاربردی است. هر شب گزارش درآمد را روی گوشی می‌بینم.",
  },
  {
    name: "سارا رضایی",
    role: "مرکز تخصصی ناخن سارا",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBaalxJn4DfMgTCNUTXUdlA0-DzJMR3GN0L9TDTSdLILRrh0bc4Rk3CmTFLKVe5pftelKi1IO-zEfiq1Hl6j6qz2UtbEmTjtZBdU9OpUBWCPxCnPTZvcO20RlDwD4cS8dD8aCAiQzAaXK7NlcQFmYnUp63NsrmZafNBgSTDKZpkx_Hn4Tf30kSNPjXY8Znqxz8DcUUMfIiv2GGke3U3pZ1v7ikdG3TI_dB9e9HusI7uEyy7FxsCJhmjUL8aEx1yF5nll9Yb9zznDaw",
    text: "ارسال پیامک یادآوری باعث شده کنسلی‌ها کمتر شود. برای سالن ما ابزار مفیدی بوده است.",
  },
  {
    name: "نیلوفر احمدی",
    role: "سالن تخصصی پوست و مو آوا",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_IssQQixJH5pjI_zpUCxgkI3jyIQ9KbxcDwJW2mSA0s2YSEV07vJSueSofQQc92DyxdRdn9x_sGijQ0xmWUacpep7PIW1g7oISd_u66vmUnYZA2QNJHcIcBfSyf19YkLlENkZv0anv20D2YgzXMcd5yW9ESNOclXS0UpTTjHCEFdO7LYv9gCS6MEMetaHU3IXl98z5trmxXMl3PulTEFhSmhyL6fwHbdOICmhr3suUfa8XVNUdOYSLeEZZnfem38PjTXd2Cdzq-s",
    text: "با پنل آنلاین نارژین، نوبت‌دهی و مدیریت پرسنل ساده‌تر شده. مشتری‌ها از سرعت کار راضی‌اند.",
  },
];

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollTo = (i: number) => {
    const slider = sliderRef.current;
    if (!slider) return;
    const cards = slider.querySelectorAll("article");
    const card = cards[i] as HTMLElement | undefined;
    if (!card) return;
    card.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    setIndex(i);
  };

  const next = () => scrollTo((index + 1) % testimonials.length);
  const prev = () =>
    scrollTo((index - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;
    const onScroll = () => {
      const cards = Array.from(slider.querySelectorAll("article"));
      if (!cards.length) return;
      const mid = slider.scrollLeft + slider.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      cards.forEach((c, i) => {
        const el = c as HTMLElement;
        const center = el.offsetLeft + el.offsetWidth / 2;
        const d = Math.abs(center - mid);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setIndex(best);
    };
    slider.addEventListener("scroll", onScroll, { passive: true });
    return () => slider.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-background-home py-12 sm:py-16" id="testimonials">
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-2 text-center text-xl font-extrabold text-primary-home sm:text-2xl md:text-3xl">
          از زبان مدیران سالن‌ها
        </h2>
        <p className="mb-8 text-center text-sm text-on-surface-variant-home">
          نمونه‌ای از بازخورد کاربران نارژین
        </p>

        <div className="hidden gap-5 md:grid md:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="flex flex-col rounded-2xl border border-outline-variant/25 bg-white p-5 shadow-sm"
            >
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="h-12 w-12 shrink-0 rounded-full border-2 border-primary-fixed bg-cover bg-center"
                  style={{ backgroundImage: `url("${t.image}")` }}
                  role="img"
                  aria-label={t.name}
                />
                <div className="min-w-0">
                  <div className="truncate font-bold text-primary-home">
                    {t.name}
                  </div>
                  <div className="truncate text-xs text-on-surface-variant">
                    {t.role}
                  </div>
                </div>
              </div>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-on-surface-variant not-italic">
                «{t.text}»
              </p>
              <div className="flex gap-0.5 text-amber-500" aria-label="۵ ستاره">
                {[...Array(5)].map((_, i) => (
                  <MdStar key={i} className="text-lg" />
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="md:hidden">
          <div
            ref={sliderRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth pb-2 no-scrollbar"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="w-[85vw] max-w-[320px] shrink-0 snap-center rounded-2xl border border-outline-variant/25 bg-white p-5 shadow-sm"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="h-12 w-12 shrink-0 rounded-full border-2 border-primary-fixed bg-cover bg-center"
                    style={{ backgroundImage: `url("${t.image}")` }}
                    role="img"
                    aria-label={t.name}
                  />
                  <div className="min-w-0">
                    <div className="truncate font-bold text-primary-home">
                      {t.name}
                    </div>
                    <div className="truncate text-xs text-on-surface-variant">
                      {t.role}
                    </div>
                  </div>
                </div>
                <p className="mb-4 text-sm leading-relaxed text-on-surface-variant not-italic">
                  «{t.text}»
                </p>
                <div className="flex gap-0.5 text-amber-500" aria-label="۵ ستاره">
                  {[...Array(5)].map((_, i) => (
                    <MdStar key={i} className="text-lg" />
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant bg-white text-primary-home shadow-sm"
              aria-label="نظر قبلی"
            >
              <MdChevronRight className="text-2xl" />
            </button>
            <div className="flex gap-1.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollTo(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-5 bg-primary-home" : "w-2 bg-outline-variant"
                  }`}
                  aria-label={`نظر ${i + 1}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant bg-white text-primary-home shadow-sm"
              aria-label="نظر بعدی"
            >
              <MdChevronLeft className="text-2xl" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
