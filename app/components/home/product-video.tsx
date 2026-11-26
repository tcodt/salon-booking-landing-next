"use client";

import { useState } from "react";
import { MdPlayArrow } from "react-icons/md";

import type { SiteContent } from "@/lib/site";

export default function ProductVideo({ site }: { site: SiteContent }) {
  const st = site.settings;
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="product-demo"
      className="scroll-mt-24 bg-surface-home py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="mb-8 w-full text-center">
          <h2 className="mx-auto max-w-2xl text-xl font-extrabold leading-snug text-primary-home sm:text-2xl md:text-3xl">
            {st.video_title}
          </h2>
        </div>

        <div
          className="relative mx-auto w-full max-w-[900px] overflow-hidden rounded-2xl bg-[#0a2e22] shadow-[0_20px_50px_rgba(6,60,40,0.18)] sm:rounded-3xl"
          style={{ aspectRatio: "16 / 9" }}
        >
          {isPlaying ? (
            <iframe
              src={st.video_embed_url}
              title="ویدیوی معرفی نرم افزار مدیریت نوبت دهی نارژین"
              className="absolute inset-0 h-full w-full border-0"
              allowFullScreen
              allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
            />
          ) : (
            <button
              type="button"
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex h-full w-full flex-col items-center justify-center gap-3 bg-[#0a2e22] transition hover:bg-[#0c3528]"
              aria-label="پخش ویدیوی معرفی نارژین"
            >
              {/* پوستر: فایل /images/video-poster.jpg در ریپو وجود ندارد و درخواست آن همیشه ۴۰۰ می‌داد (خطای کنسول).
                  با گذاشتن فایل در public/images می‌توان <Image fill className="object-cover opacity-40" /> را اینجا برگرداند. */}
              <span className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white/95 text-primary-home shadow-lg sm:h-20 sm:w-20">
                <MdPlayArrow className="text-4xl sm:text-5xl" aria-hidden />
              </span>
              <span className="relative z-10 text-sm font-medium text-white/90 sm:text-base">
                پخش ویدیو
              </span>
            </button>
          )}
        </div>

        <div className="mt-6 flex w-full justify-center sm:mt-8">
          <a
            href={st.hero_cta_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] w-full max-w-[280px] items-center justify-center rounded-full bg-primary-home px-5 py-3 text-sm font-bold text-white shadow-md transition hover:opacity-95 active:scale-[0.98] sm:w-auto sm:min-w-[220px] sm:max-w-none sm:px-8 sm:text-base"
          >
            {st.hero_cta_text}
          </a>
        </div>
      </div>
    </section>
  );
}
