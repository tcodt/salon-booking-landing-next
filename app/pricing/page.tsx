import { getSite } from "@/lib/site";
import type { Plan } from "@/lib/api";
import PricingClient from "./pricing-client";
import { JsonLd, faqPage } from "@/lib/jsonld";
import { pricingFaqs } from "./faqs";

// متن هشدار دورهٔ آزمایشی و پلن‌ها از API می‌آیند و هر ۶۰ ثانیه تازه می‌شوند
export const revalidate = 60;

const PLANS_URL = `${process.env.NARJIN_API_URL ?? "https://api.narjin.ir"}/landing/plans/`;

// پلن‌ها سمت سرور هم خوانده می‌شوند تا قیمت و امکانات در HTML اولیه (برای کراولرها) باشد.
async function getPlans(): Promise<Plan[] | null> {
  try {
    const res = await fetch(PLANS_URL, {
      headers: { accept: "application/json" },
      next: { revalidate: 60 },
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    const data = await res.json();
    return Array.isArray(data) ? (data as Plan[]) : null;
  } catch {
    return null;
  }
}

export default async function PricingPage() {
  const [{ settings }, plans] = await Promise.all([getSite(), getPlans()]);
  const faqs = pricingFaqs(settings.pricing_trial_text);
  return (
    <>
      <JsonLd data={faqPage(faqs)} />
      <PricingClient trialText={settings.pricing_trial_text} initialPlans={plans} faqs={faqs} />
    </>
  );
}
