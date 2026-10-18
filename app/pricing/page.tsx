"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import {
  type Plan,
  formatPlanPrice,
  durationLabel,
  featureLine,
  isFeatureIncluded,
} from "@/lib/api";

export default function PricingPage() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/plans/");
        if (!res.ok) throw new Error(`خطا ${res.status}`);
        const data = await res.json();
        if (!Array.isArray(data)) throw new Error("داده پلن‌ها معتبر نیست");
        if (!cancelled) setPlans(data as Plan[]);
      } catch (e) {
        if (!cancelled) {
          setError(
            e instanceof Error ? e.message : "مشکلی در دریافت تعرفه‌ها پیش آمد",
          );
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const featuredId = (() => {
    if (plans.length < 2) return plans[0]?.id;
    const paid = plans.filter((p) => p.price > 0);
    if (paid.length === 1) return paid[0].id;
    if (paid.length >= 2) {
      const sorted = [...paid].sort((a, b) => a.price - b.price);
      return sorted[Math.floor((sorted.length - 1) / 2)]?.id ?? paid[0].id;
    }
    return plans[1]?.id;
  })();

  const ctaFor = (plan: Plan) => {
    if (!plan.price || plan.price <= 0) {
      return {
        href: "https://panel.narjin.ir",
        external: true,
        label: "رایگان شروع کنید",
      };
    }
    const t = plan.title || "";
    if (/سازمان|enterprise|business/i.test(t)) {
      return { href: "/#contact", external: false, label: "تماس با فروش" };
    }
    return {
      href: "https://panel.narjin.ir",
      external: true,
      label: "شروع این پلن",
    };
  };

  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 pt-28 sm:px-6 md:px-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-extrabold text-primary-home sm:text-4xl md:text-5xl">
          پلن مناسب سالن خود را انتخاب کنید
        </h1>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#3d5a4c] sm:text-lg">
          تعرفه‌ها از سرور نارژین بارگذاری می‌شوند. هر زمان نیاز داشتید می‌توانید
          پلن را ارتقا دهید.
        </p>
      </div>

      {loading && (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-80 animate-pulse rounded-2xl border border-primary-home/10 bg-white"
            />
          ))}
        </div>
      )}

      {error && (
        <div className="mx-auto max-w-md rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
          <p className="mb-4 text-red-700">{error}</p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="rounded-full bg-primary-home px-6 py-2 text-sm font-bold text-white"
          >
            تلاش مجدد
          </button>
        </div>
      )}

      {!loading && !error && plans.length === 0 && (
        <p className="text-center text-[#3d5a4c]">
          در حال حاضر پلنی برای نمایش موجود نیست.
        </p>
      )}

      {!loading && !error && plans.length > 0 && (
        <div className="mb-8 grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => {
            const featured = plan.id === featuredId;
            const cta = ctaFor(plan);
            const priceText = formatPlanPrice(plan.price);
            const period = durationLabel(plan.duration_days);

            return (
              <div
                key={plan.id}
                className={
                  featured
                    ? "relative flex flex-col rounded-2xl border-2 border-primary-home bg-primary-home p-6 text-white shadow-lg"
                    : "relative flex flex-col rounded-2xl border border-primary-home/15 bg-white p-6 shadow-sm"
                }
              >
                {featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#ffc329] px-3 py-0.5 text-xs font-bold text-[#003527]">
                    پیشنهاد ویژه
                  </span>
                )}
                <h2
                  className={
                    featured
                      ? "text-xl font-bold text-white"
                      : "text-xl font-bold text-primary-home"
                  }
                >
                  {plan.title}
                </h2>
                <p
                  className={
                    featured
                      ? "mt-3 text-2xl font-extrabold text-[#ffc329]"
                      : "mt-3 text-2xl font-extrabold text-primary-home"
                  }
                >
                  {priceText}
                </p>
                {period && (
                  <p
                    className={
                      featured ? "text-xs text-white/70" : "text-xs text-[#5a7266]"
                    }
                  >
                    {period}
                  </p>
                )}

                <ul className="mt-6 flex flex-1 flex-col gap-2.5">
                  {(plan.features || []).map((pf, idx) => {
                    const included = isFeatureIncluded(pf);
                    const line = featureLine(pf);
                    if (!line) return null;
                    return (
                      <li
                        key={`${plan.id}-${pf.feature?.id ?? idx}`}
                        className={
                          featured
                            ? "flex items-start gap-2 text-sm text-white/90"
                            : "flex items-start gap-2 text-sm text-[#3d5a4c]"
                        }
                      >
                        {included ? (
                          <FaCheckCircle
                            className={
                              featured
                                ? "mt-0.5 shrink-0 text-[#ffc329]"
                                : "mt-0.5 shrink-0 text-primary-home"
                            }
                          />
                        ) : (
                          <FaTimesCircle className="mt-0.5 shrink-0 text-gray-400" />
                        )}
                        <span className={included ? "" : "opacity-60"}>{line}</span>
                      </li>
                    );
                  })}
                </ul>

                {cta.external ? (
                  <a
                    href={cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={
                      featured
                        ? "mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-bold text-primary-home transition hover:bg-white/90"
                        : "mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full bg-primary-home px-4 py-3 text-sm font-bold text-white transition hover:opacity-95"
                    }
                  >
                    {cta.label}
                  </a>
                ) : (
                  <Link
                    href={cta.href}
                    className={
                      featured
                        ? "mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-bold text-primary-home transition hover:bg-white/90"
                        : "mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full border-2 border-primary-home px-4 py-3 text-sm font-bold text-primary-home transition hover:bg-primary-home/5"
                    }
                  >
                    {cta.label}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      )}
    </main>
  );
}
