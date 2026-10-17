/** Types matching api.narjin.ir /landing/* schemas */

export type PlanFeature = {
  feature: {
    id: number;
    title: string;
    key: string;
    description: string;
  };
  value: string;
};

export type Plan = {
  id: number;
  title: string;
  price: number;
  duration_days: number;
  features: PlanFeature[];
};

export type Article = {
  id: number;
  title: string;
  slug: string;
  meta_title: string;
  meta_description: string;
  content: string;
  image: string;
  is_published: boolean;
  created_at: string;
};

export const API_BASE = "https://api.narjin.ir";

export function formatPlanPrice(price: number): string {
  if (!price || price <= 0) return "رایگان";
  return `${price.toLocaleString("fa-IR")} تومان`;
}

export function durationLabel(days: number): string {
  if (!days || days <= 0) return "";
  if (days === 30 || days === 31) return "ماهانه";
  if (days >= 360 && days <= 366) return "سالانه";
  return `${days.toLocaleString("fa-IR")} روز`;
}

export function featureLine(pf: PlanFeature): string {
  const title = pf.feature?.title?.trim() || "";
  const value = (pf.value ?? "").trim();
  if (!title) return value;
  if (!value || value === "true" || value === "1" || value === "✓") return title;
  if (value === "false" || value === "0") return title;
  return `${title}: ${value}`;
}

export function isFeatureIncluded(pf: PlanFeature): boolean {
  const v = (pf.value ?? "").trim().toLowerCase();
  if (v === "false" || v === "0" || v === "no" || v === "خیر") return false;
  return true;
}
