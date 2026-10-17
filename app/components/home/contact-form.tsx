"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

interface FormData {
  full_name: string;
  phone: string;
  subject: string;
  message: string;
}

const subjectOptions = [
  { value: "مشاوره رایگان", label: "مشاوره رایگان" },
  { value: "خرید اشتراک", label: "خرید اشتراک" },
  { value: "پشتیبانی", label: "پشتیبانی" },
  { value: "پیشنهاد همکاری", label: "پیشنهاد همکاری" },
  { value: "سایر", label: "سایر" },
];

const fieldClass =
  "w-full rounded-xl border border-outline-variant/50 bg-surface-container-low px-4 py-3 text-base text-on-surface outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 disabled:opacity-60 min-h-[48px]";

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
      const response = await fetch(
        "https://queuingprojectapi.pythonanywhere.com/landing/contact/",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            full_name: formData.full_name,
            phone: formData.phone,
            subject: formData.subject,
            message: formData.message,
          }),
        },
      );
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
          : "خطا در ارتباط با سرور. لطفاً اتصال اینترنت خود را بررسی کنید.",
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
    <section className="bg-surface py-12 sm:py-16" id="contact">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:px-6 md:flex-row md:gap-14">
        <div className="flex-1">
          <h2 className="mb-4 text-center text-xl font-extrabold text-primary md:text-right md:text-2xl lg:text-3xl">
            با ما در ارتباط باشید
          </h2>
          <p className="mb-8 text-center text-sm leading-relaxed text-on-surface-variant sm:text-base md:text-right">
            فرم را پر کنید تا کارشناسان نارژین با شما تماس بگیرند.
          </p>

          <div className="mb-6 flex items-center justify-center gap-4 md:justify-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white shadow-md sm:h-14 sm:w-14">
              <span className="material-symbols-outlined text-xl">call</span>
            </div>
            <div>
              <p className="text-sm text-on-surface-variant">تلفن پشتیبانی</p>
              <a
                href="tel:09912146083"
                className="text-lg font-bold tracking-wide text-on-surface hover:text-primary"
              >
                ۰۹۹۱۲۱۴۶۰۸۳
              </a>
            </div>
          </div>

          <div className="flex justify-center md:justify-start">
            <a
              className="inline-flex min-h-[48px] items-center gap-3 rounded-2xl bg-[#25D366] px-6 py-3 text-white shadow-lg transition hover:opacity-95"
              href="https://wa.me/989912146083"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className="text-2xl" />
              <span className="font-bold">گفتگو در واتس‌اپ</span>
            </a>
          </div>
        </div>

        <div className="flex-1 rounded-2xl border border-outline-variant/25 bg-white p-5 shadow-md sm:rounded-3xl sm:p-8">
          {isSuccess && (
            <div className="mb-5 rounded-xl border border-green-200 bg-green-50 p-4 text-center text-green-700">
              پیام شما با موفقیت ارسال شد. به‌زودی با شما تماس می‌گیریم.
            </div>
          )}
          {error && (
            <div className="mb-5 rounded-xl border border-red-200 bg-red-50 p-4 text-center text-red-700">
              {error}
            </div>
          )}

          <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="full_name" className="mb-1.5 block text-sm font-medium text-on-surface">
                نام و نام خانوادگی <span className="text-error">*</span>
              </label>
              <input id="full_name" type="text" className={fieldClass} value={formData.full_name} onChange={handleChange} required disabled={isLoading} autoComplete="name" />
            </div>

            <div>
              <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-on-surface">
                شماره تماس <span className="text-error">*</span>
              </label>
              <input id="phone" type="tel" inputMode="tel" className={fieldClass} value={formData.phone} onChange={handleChange} required disabled={isLoading} autoComplete="tel" />
            </div>

            <div>
              <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-on-surface">
                موضوع <span className="text-error">*</span>
              </label>
              <select id="subject" className={fieldClass} value={formData.subject} onChange={handleChange} required disabled={isLoading}>
                <option value="" disabled>انتخاب موضوع</option>
                {subjectOptions.map((o) => (
                  <option key={o.value} value={o.value}>{o.label}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-on-surface">
                پیام شما <span className="text-error">*</span>
              </label>
              <textarea id="message" rows={4} className={`${fieldClass} min-h-[120px] resize-y`} value={formData.message} onChange={handleChange} required disabled={isLoading} />
            </div>

            <button type="submit" disabled={isLoading} className={`min-h-[48px] w-full rounded-xl py-3.5 text-lg font-bold transition ${
              isLoading ? "cursor-not-allowed bg-gray-400 text-white" : "bg-primary text-white hover:opacity-95 active:scale-[0.99]"
            }`}>
              {isLoading ? "در حال ارسال..." : "ارسال پیام"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
