"use client";

export default function ProductVideo() {
  return (
    <section
      id="product-demo"
      className="scroll-mt-24 bg-surface-home py-10 sm:py-14 md:py-16"
    >
      <div className="container mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-6 text-center sm:mb-8">
          <h2 className="text-xl font-extrabold text-primary-home sm:text-2xl md:text-3xl">
            نارژین در یک نگاه
          </h2>
          <p className="mt-2 text-sm text-on-surface-variant-home sm:text-base">
            ویدیوی معرفی محصول را ببینید
          </p>
        </div>

        <div className="overflow-hidden rounded-2xl border border-outline-variant/20 bg-black shadow-xl sm:rounded-3xl">
          <video
            className="aspect-video h-auto w-full"
            controls
            playsInline
            preload="metadata"
            poster="/images/about.png"
          >
            <source src="/video/narjin-introduce.mp4" type="video/mp4" />
            مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
          </video>
        </div>
      </div>
    </section>
  );
}
