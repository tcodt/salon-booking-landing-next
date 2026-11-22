import { FaGift, FaCheckCircle } from "react-icons/fa";

/** هشدار بالای تعرفه‌ها: دورهٔ آزمایشی رایگان با همهٔ ویژگی‌ها (متن از پنل مدیریت). */
export default function TrialBanner({ text }: { text: string }) {
  if (!text) return null;
  return (
    <div
      role="note"
      className="mx-auto mb-8 flex max-w-3xl items-center gap-3 rounded-2xl border border-primary-home/20 bg-gradient-to-l from-[#d5f2ee] to-[#eaf8f5] px-4 py-3.5 shadow-sm sm:gap-4 sm:px-5"
    >
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-home text-lg text-[#ffc329] shadow">
        <FaGift aria-hidden />
      </span>
      <p className="min-w-0 flex-1 text-sm font-bold leading-relaxed text-primary-home sm:text-base">
        {text}
      </p>
      <FaCheckCircle className="hidden shrink-0 text-2xl text-primary-home/60 sm:block" aria-hidden />
    </div>
  );
}
