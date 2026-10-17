"use client";

/**
 * Embed رسمی آپارات — videohash: nelxg17
 * https://www.aparat.com/v/nelxg17
 */
export default function ProductVideo() {
  return (
    <section
      id="product-demo"
      className="scroll-mt-24 bg-surface-home py-12 sm:py-16"
    >
      <div className="mx-auto w-full max-w-5xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-xl font-extrabold text-primary-home sm:text-2xl md:text-3xl">
            در ۴۳ ثانیه با نارژین آشنا بشید
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-[#3d5a4c] sm:text-base">
            ویدیوی معرفی محصول را ببینید و با فضای کلی پنل نارژین آشنا شوید.
          </p>
        </div>

        <div
          className="relative mx-auto w-full max-w-[900px] overflow-hidden rounded-2xl shadow-[0_20px_50px_rgba(6,60,40,0.18)] sm:rounded-3xl"
          style={{ aspectRatio: "16 / 9" }}
        >
          <iframe
            src="https://www.aparat.com/video/video/embed/videohash/nelxg17/vt/frame"
            title="معرفی نرم‌افزار مدیریت سالن زیبایی نارژین"
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            allowFullScreen
            allow="autoplay; encrypted-media; fullscreen; picture-in-picture"
          />
        </div>

        <div className="mt-8 flex justify-center">
          <a
            href="https://panel.narjin.ir"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[48px] min-w-[12rem] items-center justify-center whitespace-nowrap rounded-full bg-primary-home px-8 py-3 text-base font-bold text-white shadow-md transition hover:opacity-95"
          >
            ورود به پنل نارژین
          </a>
        </div>
      </div>
    </section>
  );
}
