"use client";

import { useState } from "react";

const FaqDropdown = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  const items = [
    {
      q: "نارژین دقیقاً چی‌کار می‌کنه؟",
      a: "نارژین یه پلتفرم هوشمنده برای مدیریت کامل سالن‌های زیبایی. باهاش می‌تونی نوبت‌دهی، حسابداری، ارتباط با مشتریان و حتی برنامه‌ریزی کارمندان رو در یک پنل ساده انجام بدی.",
    },
    {
      q: "برای استفاده از نارژین به تجهیزات خاصی نیاز دارم؟",
      a: "نه! فقط با یه موبایل و اتصال اینترنت می‌تونی از همه امکانات نارژین استفاده کنی بدون نیاز به نصب نرم‌افزارهای پیچیده.",
    },
    {
      q: "آیا مشتریان من هم می‌تونن از نارژین استفاده کنن؟",
      a: "بله، مشتریان می‌تونن خیلی راحت از طریق سایت یا اپ نارژین نوبت رزرو کنن، زمان‌های آزاد سالن رو ببینن و پرداختشون رو آنلاین انجام بدن.",
    },
    {
      q: "نارژین برای سالن‌های کوچک هم مناسبه؟",
      a: "کاملاً! نارژین طوری طراحی شده که هم سالن‌های بزرگ و هم کسب‌وکارهای کوچیک بتونن به‌سادگی ازش استفاده کنن و روند کاریشون رو هوشمندتر کنن.",
    },
  ];

  return (
    <section className="py-16 p-4">
      <div className="w-full max-w-2xl mx-auto space-y-4">
        <h3
          className="text-2xl font-bold mb-4 text-center"
          style={{ color: "#19705D" }}
        >
          سوالات پر کاربرد
        </h3>

        {items.map((item, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-4 cursor-pointer transition"
            onClick={() => toggle(i)}
          >
            <div className="flex justify-between items-center text-md md:text-lg font-medium">
              <span className="text-gray-800">{item.q}</span>
              <span
                className={`transition-transform duration-300 ${
                  openIndex === i ? "rotate-180" : ""
                }`}
                style={{ color: "#19705D" }}
              >
                ▼
              </span>
            </div>
            {/* answer box */}
            <div
              className={`
                  overflow-hidden transition-all duration-300
                  ${openIndex === i ? "max-h-96 mt-3" : "max-h-0"}
                `}
            >
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {item.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqDropdown;
