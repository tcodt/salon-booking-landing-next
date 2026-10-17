"use client";

/**
 * ویدیو واقعی: public/video/narjin-introduce.mp4
 * ابعاد: 740×1280 (عمودی) — مدت حدود ۴۳ ثانیه
 */
export default function ProductVideo() {
  return (
    <section id="product-demo" className="scroll-mt-24 bg-surface-home py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-xl font-extrabold text-primary-home sm:text-2xl md:text-3xl">
            ببینید نارژین چطور کار می‌کند
          </h2>
          <p className="mt-2 text-sm text-[#3d5a4c] sm:text-base">ویدیوی معرفی محصول</p>
        </div>

        <div className="flex flex-col items-center gap-8 md:flex-row md:items-start md:justify-center md:gap-12">
          <div className="w-full max-w-[320px] shrink-0 sm:max-w-[360px]">
            <div className="overflow-hidden rounded-2xl border border-primary-home/15 bg-[#0a2e22] shadow-xl">
              <video
                className="block h-auto w-full"
                style={{ aspectRatio: "740 / 1280" }}
                controls
                playsInline
                preload="metadata"
                poster="/images/video-poster.jpg"
              >
                <source src="/video/narjin-introduce.mp4" type="video/mp4" />
                مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
              </video>
            </div>
          </div>

          <div className="max-w-sm text-center md:pt-6 md:text-right">
            <h3 className="mb-3 text-lg font-bold text-primary-home">معرفی کوتاه نارژین</h3>
            <p className="mb-4 text-sm leading-relaxed text-[#3d5a4c]">
              در این ویدیو با فضای کلی محصول و نحوهٔ نوبت‌دهی آنلاین آشنا می‌شوید.
              پس از پخش می‌توانید صدا و کنترل‌ها را تنظیم کنید.
            </p>
            <a
              href="https://panel.narjin.ir"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-primary-home px-6 py-2.5 text-sm font-bold text-white transition hover:opacity-95"
            >
              ورود به پنل
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
