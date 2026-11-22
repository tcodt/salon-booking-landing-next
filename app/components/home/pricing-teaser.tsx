"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MdCheck, MdClose } from "react-icons/md";
import {
  type Plan,
  formatPlanPrice,
  durationLabel,
  allPlanFeatures,
  featuredPlanId,
  orderPlansForDisplay,
  planFeatureState,
  planGridClass,
} from "@/lib/api";
import type { SiteContent } from "@/lib/site";
import PlanCard from "../pricing/plan-card";
import TrialBanner from "../pricing/trial-banner";

export default function PricingTeaser({ site }: { site: SiteContent }) {
  const pricingTitle = site.settings.pricing_title;
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

  const featuredId = featuredPlanId(plans);

  return (
    <section className="bg-background-home py-12 sm:py-16" id="pricing-preview">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 text-center sm:mb-10">
          <h2 className="text-xl font-extrabold text-primary-home sm:text-2xl md:text-3xl">
            {pricingTitle}
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
          <>
            <TrialBanner text={site.settings.pricing_trial_text} />
            <div className={`grid items-stretch gap-6 ${planGridClass(plans.length)}`}>
              {orderPlansForDisplay(plans).map((p) => {
                const featured = p.id === featuredId;
                const rows = allPlanFeatures(plans)
                  .slice(0, 6)
                  .map((f) => ({ ...f, ...planFeatureState(p, f.id) }));
                const isFree = !p.price || p.price <= 0;
                const isOrg = /سازمان|enterprise/i.test(p.title || "");
                const base =
                  "inline-flex min-h-[48px] w-full items-center justify-center rounded-full px-4 py-3 text-sm font-bold transition";
                const primary = `${base} bg-primary-home text-white hover:opacity-95`;
                const onDark = `${base} bg-white text-primary-home hover:bg-white/90`;
                const cta = isFree ? (
                  <a href={site.settings.hero_cta_url} target="_blank" rel="noopener noreferrer" className={featured ? onDark : primary}>
                    {site.settings.hero_cta_text}
                  </a>
                ) : isOrg ? (
                  <Link href="/#contact" className={featured ? onDark : primary}>
                    دریافت مشاوره
                  </Link>
                ) : (
                  <Link href="/pricing" className={featured ? onDark : primary}>
                    مشاهده پلن‌ها
                  </Link>
                );
                return <PlanCard key={p.id} plan={p} featured={featured} rows={rows} cta={cta} />;
              })}
            </div>
          </>
        )}

        <p className="mt-6 text-center text-sm font-medium text-[#3d5a4c]">
          بدون هزینه نصب، بدون قرارداد اجباری
        </p>
      </div>
    </section>
  );
}
