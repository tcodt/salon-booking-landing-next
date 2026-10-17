"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { MdPhone, MdSchedule } from "react-icons/md";

interface FormData {
  full_name: string;
  phone: string;
  subject: string;
  message: string;
}

const PHONE_DISPLAY = "۰۹۹۱۲۱۴۶۰۸۳";
const PHONE_TEL = "09912146083";
const WHATSAPP = "https://wa.me/989912146083";

const subjectOptions = [
  { value: "مشاوره رایگان", label: "مشاوره رایگان" },
  { value: "خرید اشتراک", label: "خرید اشتراک" },
  { value: "پشتیبانی", label: "پشتیبانی" },
  { value: "پیشنهاد همکاری", label: "پیشنهاد همکاری" },
  { value: "سایر", label: "سایر" },
];

const fieldClass =
  "w-full rounded-xl border border-primary-home/20 bg-[#f5f8f6] px-4 py-3 text-base text-[#15241c] outline-none transition focus:border-primary-home focus:ring-2 focus:ring-primary-home/20 disabled:opacity-60 min-h-[48px]";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    full_name: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message || data.error || "خطا در ارسال پیام");
      }
      setIsSuccess(true);
      setFormData({ full_name: "", phone: "", subject: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "خطا در ارتباط با سرور. لطفاً اتصال اینترنت را بررسی کنید.",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <section className="bg-surface-home py-12 sm:py-16" id="contact">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
        <div className="min-w-0">
          <h2 className="mb-3 text-xl font-extrabold text-primary-home sm:text-2xl">
            آماده‌اید سالنتون رو آنلاین کنید؟
          </h2>
          <p className="mb-6 text-sm leading-relaxed text-[#3d5a4c] sm:text-base">
            فرم رو پر کنید یا مستقیم تماس بگیرید؛ کارشناسان ما جواب می‌دن.
          </p>

          <div className="space-y-4 rounded-2xl border border-primary-home/10 bg-[#f5f8f6] p-5">
            <a
              href={`tel:${PHONE_TEL}`}
              className="flex items-center gap-3 text-[#15241c] transition hover:text-primary-home"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-home text-white">
                <MdPhone className="text-xl" />
              </span>
              <span>
                <span className="block text-xs text-[#5a7266]">تلفن پشتیبانی</span>
                <span className="text-lg font-bold tracking-wide">{PHONE_DISPLAY}</span>
              </span>
            </a>

            <div className="flex items-center gap-3 text-[#15241c]">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary-home/10 text-primary-home">
                <MdSchedule className="text-xl" />
              </span>
              <span>
                <span className="block text-xs text-[#5a7266]">پشتیبانی</span>
                <span className="text-sm font-semibold">۲۴ ساعته</span>
              </span>
            </div>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 font-bold text-white transition hover:opacity-95"
            >
              <FaWhatsapp className="text-xl" />
              گفتگو در واتس‌اپ
            </a>
          </div>
        </div>

        <div className="min-w-0 rounded-2xl border border-primary-home/10 bg-white p-5 shadow-sm sm:p-7">
          {isSuccess && (
            <div className="mb-4 rounded-xl border border-emerald-200 bg-emerald-50 p-3 text-center text-sm text-emerald-800">
              پیام شما ارسال شد. به‌زودی تماس می‌گیریم.
            </div>
          )}
          {error && (
            <div className="mb-4 rounded-xl border border-red-200 bg-red-50 p-3 text-center text-sm text-red-700">
              {error}
            </div>
          )}

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="full_name" className="mb-1.5 block text-sm font-medium text-[#15241c]">نام و نام خانوادگی *</label>
              <input id="full_name" type="text" className={fieldClass} value={formData.full_name} onChange={handleChange} required disabled={isLoading} autoComplete="name" />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-[#15241c]">شماره تماس *</label>
              <input id="phone" type="tel" inputMode="tel" className={fieldClass} value={formData.phone} onChange={handleChange} required disabled={isLoading} autoComplete="tel" />
            </div>
            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-[#15241c]">موضوع *</label>
              <select id="subject" className={fieldClass} value={formData.subject} onChange={handleChange} required disabled={isLoading}>
                <option value="" disabled>انتخاب موضوع</option>
                {subjectOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-[#15241c]">پیام شما *</label>
              <textarea id="message" rows={4} className={`${fieldClass} min-h-[110px] resize-y`} value={formData.message} onChange={handleChange} required disabled={isLoading} />
            </div>
            <button type="submit" disabled={isLoading} className={`min-h-[48px] w-full rounded-xl py-3.5 text-base font-bold text-white transition ${
              isLoading ? "cursor-not-allowed bg-gray-400" : "bg-primary-home hover:opacity-95"
            }`}>
              {isLoading ? "در حال ارسال..." : "دریافت مشاوره"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
