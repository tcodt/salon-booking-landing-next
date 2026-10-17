import Link from "next/link";

const plans = [
  {
    name: "شروع",
    price: "رایگان",
    desc: "مناسب سالن‌های تازه‌تأسیس",
    cta: "شروع رایگان",
    href: "https://panel.narjin.ir",
    external: true,
  },
  {
    name: "حرفه‌ای",
    price: "از ۴۹۰٬۰۰۰ تومان",
    desc: "رزرو نامحدود، پیامک و گزارش مالی",
    cta: "جزئیات تعرفه",
    href: "/pricing",
    external: false,
    featured: true,
  },
  {
    name: "سازمانی",
    price: "تماس بگیرید",
    desc: "چند شعبه و پشتیبانی اختصاصی",
    cta: "تماس با فروش",
    href: "#contact",
    external: false,
  },
];

export default function PricingTeaser() {
  return (
    <section className="bg-background-home py-12 sm:py-16" id="pricing-preview">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 text-center">
          <h2 className="text-xl font-extrabold text-primary-home sm:text-2xl md:text-3xl">
            تعرفه‌ها
          </h2>
          <p className="mt-2 text-sm text-[#3d5a4c] sm:text-base">
            خلاصه پلن‌ها — جزئیات کامل در صفحه تعرفه‌ها
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`flex flex-col rounded-2xl border p-5 sm:p-6 ${
                p.featured
                  ? "border-primary-home bg-primary-home text-white shadow-md"
                  : "border-primary-home/15 bg-white"
              }`}
            >
              <h3 className={`text-lg font-bold ${p.featured ? "text-white" : "text-[#15241c]"}`}>
                {p.name}
              </h3>
              <p className={`mt-2 text-xl font-extrabold ${p.featured ? "text-[#ffc329]" : "text-primary-home"}`}>
                {p.price}
              </p>
              <p className={`mt-2 flex-1 text-sm ${p.featured ? "text-white/85" : "text-[#3d5a4c]"}`}>
                {p.desc}
              </p>
              {p.external ? (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-5 inline-flex min-h-[44px] items-center justify-center rounded-full px-4 py-2.5 text-sm font-bold transition ${
                    p.featured
                      ? "bg-white text-primary-home hover:bg-white/90"
                      : "bg-primary-home text-white hover:opacity-95"
                  }`}
                >
                  {p.cta}
                </a>
              ) : (
                <Link
                  href={p.href}
                  className={`mt-5 inline-flex min-h-[44px] items-center justify-center rounded-full px-4 py-2.5 text-sm font-bold transition ${
                    p.featured
                      ? "bg-white text-primary-home hover:bg-white/90"
                      : "bg-primary-home text-white hover:opacity-95"
                  }`}
                >
                  {p.cta}
                </Link>
              )}
            </div>
          ))}
        </div>

        <p className="mt-6 text-center">
          <Link href="/pricing" className="text-sm font-semibold text-primary-home underline-offset-4 hover:underline">
            مشاهده جدول کامل تعرفه‌ها
          </Link>
        </p>
      </div>
    </section>
  );
}
