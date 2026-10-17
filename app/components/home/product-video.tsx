"use client";

export default function ProductVideo() {
  return (
    <section
      id="product-demo"
      className="scroll-mt-24 bg-surface-home py-10 sm:py-14"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="mb-6 text-center sm:mb-8">
          <h2 className="text-xl font-extrabold text-primary-home sm:text-2xl md:text-3xl">
            نارژین در یک نگاه
          </h2>
          <p className="mt-2 text-sm text-[#3d5a4c] sm:text-base">
            ویدیوی معرفی محصول
          </p>
        </div>

        <div className="mx-auto flex max-w-md justify-center sm:max-w-lg">
          <div className="w-full overflow-hidden rounded-2xl border border-primary-home/15 bg-[#0a2e22] shadow-xl sm:rounded-3xl">
            <video
              className="mx-auto h-auto max-h-[70vh] w-full object-contain"
              controls
              playsInline
              preload="metadata"
              poster="/images/logo-main.png"
            >
              <source src="/video/narjin-introduce.mp4" type="video/mp4" />
              مرورگر شما از پخش ویدیو پشتیبانی نمی‌کند.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
