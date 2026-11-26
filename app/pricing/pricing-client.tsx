"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import PlanCard from "../components/pricing/plan-card";
import TrialBanner from "../components/pricing/trial-banner";
import {
  type Plan,
  allPlanFeatures,
  featuredPlanId,
  orderPlansForDisplay,
  planFeatureState,
  planGridClass,
} from "@/lib/api";

export default function PricingClient({
  trialText,
  initialPlans,
  faqs,
}: {
  trialText: string;
  initialPlans: Plan[] | null;
  faqs: { question: string; answer: string }[];
}) {
  const [plans, setPlans] = useState<Plan[]>(initialPlans ?? []);
  const [loading, setLoading] = useState(initialPlans === null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (initialPlans !== null) return; // سمت سرور آماده است
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
  }, [initialPlans]);

  const featuredId = featuredPlanId(plans);

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
          قیمت نرم‌افزار مدیریت سالن زیبایی؛ پلن مناسب سالن خود را انتخاب کنید
        </h1>
        <p className="mx-auto max-w-2xl text-base leading-relaxed text-[#3d5a4c] sm:text-lg">
          امکانات هر پلن را کنار هم ببینید، با دورهٔ آزمایشی شروع کنید و هر زمان
          نیاز داشتید پلن را ارتقا دهید.
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
        <>
          <TrialBanner text={trialText} />
          <div className={`mb-8 grid items-stretch gap-6 ${planGridClass(plans.length)}`}>
            {orderPlansForDisplay(plans).map((plan) => {
              const featured = plan.id === featuredId;
              const cta = ctaFor(plan);
              const rows = allPlanFeatures(plans).map((f) => ({ ...f, ...planFeatureState(plan, f.id) }));
              const base =
                "inline-flex min-h-[48px] w-full items-center justify-center rounded-full px-4 py-3 text-sm font-bold transition";
              const cls = featured
                ? `${base} bg-white text-primary-home hover:bg-white/90`
                : cta.external
                  ? `${base} bg-primary-home text-white hover:opacity-95`
                  : `${base} border-2 border-primary-home text-primary-home hover:bg-primary-home/5`;
              const button = cta.external ? (
                <a href={cta.href} target="_blank" rel="noopener noreferrer" className={cls}>
                  {cta.label}
                </a>
              ) : (
                <Link href={cta.href} className={cls}>
                  {cta.label}
                </Link>
              );
              return <PlanCard key={plan.id} plan={plan} featured={featured} rows={rows} cta={button} />;
            })}
          </div>
        </>
      )}

      <section className="mx-auto mt-12 max-w-3xl" aria-labelledby="pricing-faq">
        <h2 id="pricing-faq" className="mb-6 text-center text-2xl font-extrabold text-primary-home">
          سؤالات متداول درباره تعرفه
        </h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.question} className="rounded-2xl border border-primary-home/10 bg-white px-4 py-3">
              <summary className="cursor-pointer font-bold text-[#15241c]">{f.question}</summary>
              <p className="mt-2 leading-relaxed text-[#3d5a4c]">{f.answer}</p>
            </details>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-[#3d5a4c]">
          جزئیات هر قابلیت را در <Link href="/features" className="font-bold text-primary-home underline">صفحهٔ امکانات نارژین</Link> ببینید.
        </p>
      </section>
    </main>
  );
}
