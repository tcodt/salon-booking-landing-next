import type { ReactNode } from "react";
import { FaCheckCircle, FaTimesCircle, FaStar } from "react-icons/fa";
import { type Plan, formatPlanPrice, durationLabel } from "@/lib/api";

export type PlanRow = { id: number; title: string; included: boolean; note: string };

/** کارت تعرفه (مشترک بین صفحهٔ اصلی و /pricing). پلن پیشنهادی برجسته می‌شود. */
export default function PlanCard({
  plan,
  featured,
  rows,
  cta,
  badge = "پیشنهادی",
}: {
  plan: Plan;
  featured: boolean;
  rows: PlanRow[];
  cta: ReactNode;
  badge?: string;
}) {
  const free = !plan.price || plan.price <= 0;
  const period = durationLabel(plan.duration_days);

  return (
    <div
      className={
        featured
          ? "relative z-10 flex flex-col rounded-3xl bg-gradient-to-b from-[#0a5a46] to-[#003527] p-6 text-white shadow-[0_24px_60px_-20px_rgba(0,53,39,0.55)] ring-2 ring-[#ffc329]/70 lg:-my-3 lg:py-9"
          : "relative flex flex-col rounded-3xl border border-primary-home/15 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
      }
    >
      {featured && (
        <span className="absolute -top-3.5 left-1/2 inline-flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-[#ffc329] px-4 py-1 text-xs font-extrabold text-[#003527] shadow">
          <FaStar aria-hidden /> {badge}
        </span>
      )}

      <h3 className={featured ? "text-lg font-extrabold text-white" : "text-lg font-extrabold text-[#15241c]"}>
        {plan.title}
      </h3>

      <div className="mt-4 flex flex-wrap items-baseline gap-x-1.5 gap-y-1">
        {free ? (
          <span className={featured ? "text-3xl font-extrabold text-[#ffc329]" : "text-3xl font-extrabold text-primary-home"}>
            {formatPlanPrice(plan.price)}
          </span>
        ) : (
          <>
            <span className={featured ? "text-3xl font-extrabold text-[#ffc329]" : "text-3xl font-extrabold text-primary-home"}>
              {plan.price.toLocaleString("fa-IR")}
            </span>
            <span className={featured ? "text-sm font-semibold text-white/80" : "text-sm font-semibold text-[#5a7266]"}>
              تومان
            </span>
          </>
        )}
      </div>
      {period && (
        <span
          className={
            featured
              ? "mt-2 inline-flex w-fit rounded-full bg-white/15 px-3 py-0.5 text-xs font-semibold text-white/90"
              : "mt-2 inline-flex w-fit rounded-full bg-primary-home/10 px-3 py-0.5 text-xs font-semibold text-primary-home"
          }
        >
          {period}
        </span>
      )}

      <hr className={featured ? "my-5 border-white/15" : "my-5 border-primary-home/10"} />

      <ul className="flex flex-1 flex-col gap-3">
        {rows.map((f) => (
          <li
            key={f.id}
            className={
              featured
                ? "flex items-start gap-2.5 text-sm text-white/95"
                : "flex items-start gap-2.5 text-sm text-[#3d5a4c]"
            }
          >
            {f.included ? (
              <FaCheckCircle
                className={featured ? "mt-0.5 shrink-0 text-base text-[#ffc329]" : "mt-0.5 shrink-0 text-base text-primary-home"}
                aria-label="دارد"
              />
            ) : (
              <FaTimesCircle
                className={featured ? "mt-0.5 shrink-0 text-base text-white/35" : "mt-0.5 shrink-0 text-base text-gray-300"}
                aria-label="ندارد"
              />
            )}
            <span className={f.included ? "" : featured ? "text-white/50 line-through" : "text-gray-400 line-through"}>
              {f.title}
              {f.included && f.note ? (
                <span className={featured ? "mr-1 font-semibold text-[#ffc329]" : "mr-1 font-semibold text-primary-home"}>
                  ({f.note})
                </span>
              ) : null}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-7">{cta}</div>
    </div>
  );
}
