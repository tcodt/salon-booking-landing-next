"use client";

import { useState } from "react";

interface FormData {
  full_name: string;
  phone: string;
  subject: string;
  message: string;
}

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
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    try {
      const requestBody = {
        full_name: formData.full_name,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
      };

      console.log("📤 ارسال داده به سرور:", requestBody);

      const response = await fetch("https://queuingprojectapi.pythonanywhere.com/landing/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      const data = await response.json();
      console.log("📥 پاسخ از سرور:", response.status, data);

      if (!response.ok) {
        throw new Error(data.message || data.error || "خطا در ارسال پیام");
      }

      setIsSuccess(true);
      setFormData({
        full_name: "",
        phone: "",
        subject: "",
        message: "",
      });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      console.error("❌ خطا:", err);
      setError(
        err instanceof Error
          ? err.message
          : "خطا در ارتباط با سرور. لطفاً اتصال اینترنت خود را بررسی کنید."
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const subjectOptions = [
    { value: "مشاوره رایگان", label: "مشاوره رایگان" },
    { value: "خرید اشتراک", label: "خرید اشتراک" },
    { value: "پشتیبانی", label: "پشتیبانی" },
    { value: "پیشنهاد همکاری", label: "پیشنهاد همکاری" },
    { value: "سایر", label: "سایر" },
  ];

  return (
    <section className="py-24 px-6 bg-surface" id="contact">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-primary mb-12">
            با ما در ارتباط باشید
          </h1>
          <p className="text-lg text-on-surface-variant mb-12">
            آماده‌اید تا کسب‌وکار خود را متحول کنید؟ فرم را پر کنید تا کارشناسان
            ما با شما تماس بگیرند.
          </p>
          <div className="flex items-center gap-6 mb-8">
            <div className="w-14 h-14 bg-primary text-white rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="material-symbols-outlined text-2xl">call</span>
            </div>
            <div>
              <p className="text-sm opacity-60">تلفن پشتیبانی</p>
              <p className="text-xl font-bold tracking-widest">۰۲۱-۱۲۳۴۵۶۷۸</p>
            </div>
          </div>
          <a
            className="inline-flex items-center gap-4 bg-[#25D366] text-white px-8 py-4 rounded-2xl shadow-xl hover:scale-105 transition-transform relative"
            href="#"
          >
            <span className="material-symbols-outlined text-3xl">chat</span>
            <span className="font-bold">گفتگو در واتس‌اپ</span>
            <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full border-2 border-white animate-ping"></span>
          </a>
        </div>

        <div className="flex-1 bg-white p-10 rounded-3xl shadow-xl border border-outline-variant/20">
          {isSuccess && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center">
              <span className="material-symbols-outlined text-2xl align-middle ml-2">check_circle</span>
              پیام شما با موفقیت ارسال شد. به زودی با شما تماس خواهیم گرفت.
            </div>
          )}

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center">
              <span className="material-symbols-outlined text-2xl align-middle ml-2">error</span>
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="relative">
              <input
                className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary transition-colors py-2 px-0 text-base peer"
                id="full_name"
                placeholder=" "
                type="text"
                value={formData.full_name}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
              <label
                className="absolute right-0 top-2 text-on-surface-variant transition-all duration-300 pointer-events-none text-sm peer-focus:-translate-y-5 peer-focus:text-primary peer-not-placeholder-shown:-translate-y-5 peer-not-placeholder-shown:text-primary"
                htmlFor="full_name"
              >
                نام و نام خانوادگی
              </label>
            </div>

            <div className="relative">
              <input
                className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary transition-colors py-2 px-0 text-base peer"
                id="phone"
                placeholder=" "
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                disabled={isLoading}
                dir="ltr"
              />
              <label
                className="absolute right-0 top-2 text-on-surface-variant transition-all duration-300 pointer-events-none text-sm peer-focus:-translate-y-5 peer-focus:text-primary peer-not-placeholder-shown:-translate-y-5 peer-not-placeholder-shown:text-primary"
                htmlFor="phone"
              >
                شماره تلفن
              </label>
            </div>

            <div className="relative">
              <select
                className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary transition-colors py-2 px-0 text-base appearance-none cursor-pointer peer"
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                disabled={isLoading}
              >
                <option value="" disabled></option>
                {subjectOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <label
                className={`absolute right-0 transition-all duration-300 pointer-events-none text-sm ${
                  formData.subject
                    ? '-translate-y-5 text-primary'
                    : 'top-2 text-on-surface-variant'
                }`}
                htmlFor="subject"
              >
                موضوع
              </label>
              <span className="absolute left-0 top-2 text-on-surface-variant pointer-events-none">
                <span className="material-symbols-outlined">expand_more</span>
              </span>
            </div>

            <div className="relative">
              <textarea
                className="w-full bg-transparent border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary transition-colors py-2 px-0 text-base resize-none peer"
                id="message"
                placeholder=" "
                rows={3}
                value={formData.message}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
              <label
                className="absolute right-0 top-2 text-on-surface-variant transition-all duration-300 pointer-events-none text-sm peer-focus:-translate-y-5 peer-focus:text-primary peer-not-placeholder-shown:-translate-y-5 peer-not-placeholder-shown:text-primary"
                htmlFor="message"
              >
                پیام شما
              </label>
            </div>

            <button
              className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-primary text-white hover:shadow-2xl active:scale-95"
              }`}
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-3">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  در حال ارسال...
                </span>
              ) : (
                "ارسال پیام"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}