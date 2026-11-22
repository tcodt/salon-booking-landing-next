/** Types matching api.narjin.ir /landing/* schemas */

export type PlanFeature = {
  feature: {
    id: number;
    title: string;
    key: string;
    description: string;
  };
  value: string;
  /** تیک/ضربدر از پنل مدیریت (API جدید)؛ اگر نبود از value حدس زده می‌شود */
  is_included?: boolean;
};

export type Plan = {
  id: number;
  title: string;
  price: number;
  duration_days: number;
  features: PlanFeature[];
  /** پلن پیشنهادی (از پنل مدیریت) */
  is_recommended?: boolean;
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
  if (typeof pf.is_included === "boolean") return pf.is_included;
  const v = (pf.value ?? "").trim().toLowerCase();
  if (v === "false" || v === "0" || v === "no" || v === "خیر") return false;
  return true;
}

const GENERIC_VALUES = new Set(["دارد", "ندارد", "خیر", "بله", "true", "false", "1", "0", "yes", "no", "✓", "✗"]);

/** توضیح اختیاری کنار ویژگی (مثلاً «تا ۲ نفر»)؛ مقدارهای عمومی دارد/ندارد نادیده گرفته می‌شود. */
export function featureNote(pf: PlanFeature): string {
  const v = (pf.value ?? "").trim();
  return GENERIC_VALUES.has(v.toLowerCase()) ? "" : v;
}

/** اجتماع ویژگی‌های همهٔ پلن‌ها (به ترتیب اولین ظهور) تا همهٔ کارت‌ها یک‌اندازه و هم‌تراز شوند. */
export function allPlanFeatures(plans: Plan[]): { id: number; title: string }[] {
  const seen = new Map<number, string>();
  for (const p of plans)
    for (const pf of p.features || []) {
      const id = pf.feature?.id;
      if (id != null && !seen.has(id)) seen.set(id, pf.feature.title);
    }
  return Array.from(seen, ([id, title]) => ({ id, title }));
}

/** وضعیت یک ویژگی در یک پلن: اگر در پلن نباشد = ضربدر. */
export function planFeatureState(plan: Plan, featureId: number): { included: boolean; note: string } {
  const pf = (plan.features || []).find((x) => x.feature?.id === featureId);
  if (!pf) return { included: false, note: "" };
  return { included: isFeatureIncluded(pf), note: featureNote(pf) };
}

/** ستون‌های گرید: تا ۴ (و ۵) پلن همیشه در «یک ردیف» (روی دسکتاپ). */
export function planGridClass(count: number): string {
  if (count <= 1) return "grid-cols-1 mx-auto max-w-md";
  if (count === 2) return "grid-cols-1 md:grid-cols-2 mx-auto max-w-3xl";
  if (count === 3) return "grid-cols-1 md:grid-cols-3";
  if (count === 4) return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
  return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-5";
}

/** پلن پیشنهادی (از پنل مدیریت)؛ اگر نبود، پلن میانیِ پولی. */
export function featuredPlanId(plans: Plan[]): number | undefined {
  const rec = plans.find((p) => p.is_recommended);
  if (rec) return rec.id;
  const paid = plans.filter((p) => p.price > 0).sort((a, b) => a.price - b.price);
  if (paid.length >= 1) return paid[Math.floor((paid.length - 1) / 2)].id;
  return plans[1]?.id ?? plans[0]?.id;
}

/** مرتب‌سازی نمایش: بر اساس قیمت؛ اگر پلن پیشنهادی هست، وسط کارت‌ها قرار می‌گیرد. */
export function orderPlansForDisplay(plans: Plan[]): Plan[] {
  const sorted = [...plans].sort((a, b) => a.price - b.price);
  const rec = sorted.find((p) => p.is_recommended);
  if (!rec || sorted.length < 3) return sorted;
  const rest = sorted.filter((p) => p.id !== rec.id);
  rest.splice(Math.floor((sorted.length - 1) / 2), 0, rec);
  return rest;
}
