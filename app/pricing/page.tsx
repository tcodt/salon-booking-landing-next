import { getSite } from "@/lib/site";
import PricingClient from "./pricing-client";

// متن هشدار دورهٔ آزمایشی از پنل مدیریت می‌آید و هر ۶۰ ثانیه تازه می‌شود
export const revalidate = 60;

export default async function PricingPage() {
  const { settings } = await getSite();
  return <PricingClient trialText={settings.pricing_trial_text} />;
}
