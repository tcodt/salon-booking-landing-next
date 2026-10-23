"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { MdStar, MdChevronLeft, MdChevronRight } from "react-icons/md";

const samples = [
  {
    name: "سارا محمدی",
    role: "مدیر سالن زیبایی",
    avatar: "/images/avatars/a1.svg",
    text: "نوبت‌دهی آنلاین باعث شده تماس‌های تکراری کمتر شود و تقویم مرتب‌تر باشد.",
  },
  {
    name: "مریم احمدی",
    role: "مسئول پذیرش",
    avatar: "/images/avatars/a2.svg",
    text: "یادآوری پیامکی به پیگیری نوبت‌ها کمک می‌کند و کار روزانه منظم‌تر پیش می‌رود.",
  },
  {
    name: "نیلوفر رضایی",
    role: "مالک مجموعه",
    avatar: "/images/avatars/a3.svg",
    text: "گزارش‌های پنل برای بررسی عملکرد خدمات و برنامه‌ریزی پرسنل مفید است.",
  },
  {
    name: "رضا کریمی",
    role: "مدیر فنی سالن",
    avatar: "/images/avatars/a4.svg",
    text: "لینک اختصاصی نوبت‌دهی را در اینستاگرام گذاشتیم؛ مشتری‌ها راحت‌تر وقت می‌گیرند.",
  },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const max = samples.length - 1;

  const scrollToIndex = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll<HTMLElement>("[data-card]");
    const card = cards[i];
    if (!card) return;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    card.scrollIntoView({
      behavior: prefersReduced ? "auto" : "smooth",
      inline: "center",
      block: "nearest",
    });
    setIndex(i);
  }, []);

  const next = () => scrollToIndex(Math.min(index + 1, max));
  const prev = () => scrollToIndex(Math.max(index - 1, 0));

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const cards = Array.from(
        track.querySelectorAll<HTMLElement>("[data-card]"),
      );
      if (!cards.length) return;
      const mid = track.scrollLeft + track.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      cards.forEach((el, i) => {
        const center = el.offsetLeft + el.offsetWidth / 2;
        const d = Math.abs(center - mid);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setIndex(best);
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="bg-[#eef4f0] py-12 sm:py-16" id="testimonials">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h2 className="mb-8 text-center text-xl font-extrabold text-primary-home sm:text-2xl md:text-3xl">
          مدیران سالن درباره نارژین چی می‌گن؟
        </h2>

        <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-1 pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          style={{ WebkitOverflowScrolling: "touch", scrollPaddingInline: "12px" }}
          role="region"
          aria-label="نظرات مشتریان"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") next();
            if (e.key === "ArrowRight") prev();
          }}
        >
          {samples.map((t) => (
            <article
              key={t.name + t.role}
              data-card
              className="w-[min(85vw,300px)] shrink-0 snap-start rounded-2xl border border-primary-home/10 bg-white p-5 shadow-sm sm:w-[280px]"
            >
              <div className="mb-3 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt=""
                  width={44}
                  height={44}
                  className="h-11 w-11 shrink-0 rounded-full object-cover ring-2 ring-white shadow-sm"
                  loading="lazy"
                />
                <div className="min-w-0">
                  <div className="truncate font-bold text-[#15241c]">{t.name}</div>
                  <div className="truncate text-xs text-[#5a7266]">{t.role}</div>
                </div>
              </div>
              <p className="mb-4 min-h-[4.5rem] text-sm leading-relaxed text-[#3d5a4c] not-italic">
                «{t.text}»
              </p>
              <div className="flex gap-0.5 text-[#f59e0b]" aria-hidden>
                {[...Array(5)].map((_, i) => (
                  <MdStar key={i} className="text-lg" style={{ color: "#f59e0b", fill: "#f59e0b" }} />
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            disabled={index <= 0}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-home/20 bg-white text-primary-home shadow-sm disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="نظر قبلی"
          >
            <MdChevronRight className="text-2xl" />
          </button>
          <div className="flex gap-1.5">
            {samples.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollToIndex(i)}
                className={
                  i === index
                    ? "h-2 w-5 rounded-full bg-primary-home transition-all"
                    : "h-2 w-2 rounded-full bg-primary-home/25 transition-all"
                }
                aria-label={`نظر ${i + 1}`}
                aria-current={i === index}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={next}
            disabled={index >= max}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary-home/20 bg-white text-primary-home shadow-sm disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="نظر بعدی"
          >
            <MdChevronLeft className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
}
