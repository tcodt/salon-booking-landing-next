"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MdCheck } from "react-icons/md";
import {
  type Plan,
  formatPlanPrice,
  durationLabel,
  featureLine,
  isFeatureIncluded,
} from "@/lib/api";

export default function PricingTeaser() {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch("/api/plans/");
        if (!res.ok) throw new Error("fail");
        const data = await res.json();
        if (Array.isArray(data) && !cancelled) setPlans(data as Plan[]);
      } catch {
        if (!cancelled) setPlans([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  const featuredId = (() => {
    const paid = plans.filter((p) => p.price > 0);
    if (paid.length >= 1) {
      const sorted = [...paid].sort((a, b) => a.price - b.price);
      return sorted[Math.floor((sorted.length - 1) / 2)]?.id ?? paid[0].id;
    }
    return plans[1]?.id ?? plans[0]?.id;
  })();

  return (
    <section className="bg-background-home py-12 sm:py-16" id="pricing-preview">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="text-xl font-extrabold text-primary-home sm:text-2xl md:text-3xl">
            از رایگان شروع کنید؛ با رشد سالن ارتقا بدید
          </h2>
        </div>

        {loading && (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-64 animate-pulse rounded-2xl bg-white/80" />
            ))}
          </div>
        )}

        {!loading && plans.length === 0 && (
          <p className="text-center text-sm text-[#3d5a4c]">
            برای دیدن جزئیات تعرفه‌ها به{" "}
            <Link href="/pricing" className="font-semibold text-primary-home underline">
              صفحه پلن‌ها
            </Link>{" "}
            سر بزنید.
          </p>
        )}

        {!loading && plans.length > 0 && (
          <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3">
            {plans.slice(0, 3).map((p) => {
              const featured = p.id === featuredId;
              const lines = (p.features || [])
                .filter(isFeatureIncluded)
                .map(featureLine)
                .filter(Boolean)
                .slice(0, 5);
              const isFree = !p.price || p.price <= 0;
              const isOrg = /سازمان|enterprise/i.test(p.title || "");

              return (
                <div
                  key={p.id}
                  className={
                    featured
                      ? "relative flex flex-col rounded-2xl border border-primary-home bg-primary-home p-5 text-white shadow-lg sm:p-6"
                      : "relative flex flex-col rounded-2xl border border-primary-home/15 bg-white p-5 sm:p-6"
                  }
                >
                  {featured && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#ffc329] px-3 py-0.5 text-xs font-bold text-[#003527]">
                      محبوب‌ترین
                    </span>
                  )}
                  <h3
                    className={
                      featured
                        ? "text-lg font-bold text-white"
                        : "text-lg font-bold text-[#15241c]"
                    }
                  >
                    {p.title}
                  </h3>
                  <p
                    className={
                      featured
                        ? "mt-2 text-2xl font-extrabold text-[#ffc329]"
                        : "mt-2 text-2xl font-extrabold text-primary-home"
                    }
                  >
                    {formatPlanPrice(p.price)}
                  </p>
                  {durationLabel(p.duration_days) && (
                    <p
                      className={
                        featured ? "text-xs text-white/70" : "text-xs text-[#5a7266]"
                      }
                    >
                      {durationLabel(p.duration_days)}
                    </p>
                  )}
                  <ul className="mt-5 flex flex-1 flex-col gap-2.5">
                    {lines.map((f) => (
                      <li
                        key={f}
                        className={
                          featured
                            ? "flex items-start gap-2 text-sm text-white/90"
                            : "flex items-start gap-2 text-sm text-[#3d5a4c]"
                        }
                      >
                        <MdCheck
                          className={
                            featured
                              ? "mt-0.5 shrink-0 text-lg text-[#ffc329]"
                              : "mt-0.5 shrink-0 text-lg text-primary-home"
                          }
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  {isFree ? (
                    <a
                      href="https://panel.narjin.ir"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full bg-primary-home px-4 py-3 text-sm font-bold text-white transition hover:opacity-95"
                    >
                      ساخت سالن من، رایگان
                    </a>
                  ) : isOrg ? (
                    <Link
                      href="/#contact"
                      className="mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full bg-primary-home px-4 py-3 text-sm font-bold text-white transition hover:opacity-95"
                    >
                      دریافت مشاوره
                    </Link>
                  ) : (
                    <Link
                      href="/pricing"
                      className={
                        featured
                          ? "mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full bg-white px-4 py-3 text-sm font-bold text-primary-home transition hover:bg-white/90"
                          : "mt-6 inline-flex min-h-[48px] items-center justify-center rounded-full bg-primary-home px-4 py-3 text-sm font-bold text-white transition hover:opacity-95"
                      }
                    >
                      مشاهده پلن‌ها
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        )}

        <p className="mt-6 text-center text-sm font-medium text-[#3d5a4c]">
          بدون هزینه نصب، بدون قرارداد اجباری
        </p>
      </div>
    </section>
  );
}
