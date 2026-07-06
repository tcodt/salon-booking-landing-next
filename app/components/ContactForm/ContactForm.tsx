"use client";

import { useState } from "react";
import { MdCall, MdChat } from "react-icons/md";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    // You can add your API call here
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <section className="py-24 px-6 bg-surface">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row gap-16">
        <div className="flex-1 reveal-up active">
          <h1 className="font-headline-lg text-headline-lg text-center text-primary mb-xl">
            با ما در ارتباط باشید
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
            آماده‌اید تا کسب‌وکار خود را متحول کنید؟ فرم را پر کنید تا کارشناسان
            ما با شما تماس بگیرند.
          </p>
          <div className="flex items-center gap-6 mb-8">
            <div className="w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-lg animate-bounce">
              <span className="material-symbols-outlined text-2xl">
                <MdCall />
              </span>
            </div>
            <div>
              <p className="text-sm opacity-60">تلفن پشتیبانی</p>
              <p className="text-xl font-bold tracking-widest">۰۲۱-۱۲۳۴۵۶۷۸</p>
            </div>
          </div>
          <a
            className="inline-flex items-center gap-4 bg-[#25D366] text-white px-8 py-4 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-400 relative"
            href="#"
          >
            <span className="material-symbols-outlined text-3xl">
              <MdChat />
            </span>
            <span className="font-bold">گفتگو در واتس‌اپ</span>
            <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full border-2 border-white animate-ping"></span>
          </a>
        </div>
        <div className="flex-1 bg-white p-10 rounded-3xl shadow-xl border border-outline-variant/20 reveal-up active">
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="relative">
              <input
                className="floating-label-input w-full bg-transparent border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary transition-colors py-2 px-0 outline-none"
                id="name"
                placeholder=" "
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <label
                className="absolute right-0 top-2 text-on-surface-variant transition-all duration-300 pointer-events-none"
                htmlFor="name"
              >
                نام و نام خانوادگی
              </label>
            </div>
            <div className="relative">
              <input
                className="floating-label-input w-full bg-transparent border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary transition-colors py-2 px-0 outline-none"
                id="email"
                placeholder=" "
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <label
                className="absolute right-0 top-2 text-on-surface-variant transition-all duration-300 pointer-events-none"
                htmlFor="email"
              >
                آدرس ایمیل
              </label>
            </div>
            <div className="relative">
              <textarea
                className="floating-label-input w-full bg-transparent border-0 border-b-2 border-outline-variant focus:ring-0 focus:border-primary transition-colors py-2 px-0 outline-none"
                id="message"
                placeholder=" "
                rows={3}
                value={formData.message}
                onChange={handleChange}
                required
              />
              <label
                className="absolute right-0 top-2 text-on-surface-variant transition-all duration-300 pointer-events-none"
                htmlFor="message"
              >
                پیام شما
              </label>
            </div>
            <button
              className="w-full bg-primary text-on-primary py-4 rounded-xl font-bold text-lg hover:shadow-2xl active:scale-95 transition-all duration-400"
              type="submit"
            >
              ارسال پیام
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
