"use client";

import { useState, useEffect, useRef } from "react";
import {
  FaCheckCircle,
  FaTimesCircle,
  FaArrowLeft,
  FaChevronDown,
} from "react-icons/fa";

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const pricingPlans = [
    {
      id: "basic",
      name: "پایه",
      description: "مناسب برای شروع کار",
      monthlyPrice: "رایگان",
      yearlyPrice: "رایگان",
      isFree: true,
      features: [
        { text: "مدیریت ۵۰ نوبت در ماه", included: true },
        { text: "پنل مدیریت پایه", included: true },
        { text: "گزارشات پیشرفته ماهانه", included: false },
      ],
      buttonText: "انتخاب پلن پایه",
      buttonVariant: "outline",
    },
    {
      id: "pro",
      name: "حرفه‌ای",
      description: "مناسب برای سالن‌های در حال رشد",
      monthlyPrice: "۴۹۰,۰۰۰",
      yearlyPrice: "۳۹۰,۰۰۰",
      isFree: false,
      isFeatured: true,
      features: [
        { text: "نوبت‌دهی نامحدود", included: true },
        { text: "سیستم پیامک خودکار", included: true },
        { text: "مدیریت تا ۵ پرسنل", included: true },
        { text: "گزارشات مالی دقیق", included: true },
      ],
      buttonText: "انتخاب پلن حرفه‌ای",
      buttonVariant: "primary",
    },
    {
      id: "business",
      name: "تجاری",
      description: "برای مجموعه‌های بزرگ و زنجیره‌ای",
      monthlyPrice: "۹۵۰,۰۰۰",
      yearlyPrice: "۷۶۰,۰۰۰",
      isFree: false,
      features: [
        { text: "همه امکانات حرفه‌ای", included: true },
        { text: "پرسنل و شعب نامحدود", included: true },
        { text: "پشتیبانی اختصاصی VIP", included: true },
        { text: "اتصال به API و وب‌سایت شخصی", included: true },
      ],
      buttonText: "ارتباط با فروش",
      buttonVariant: "outline",
    },
  ];

  const comparisonFeatures = [
    {
      name: "تعداد نوبت‌ها",
      basic: "۵۰ مورد",
      pro: "نامحدود",
      business: "نامحدود",
    },
    { name: "سیستم پیامک هوشمند", basic: false, pro: true, business: true },
    {
      name: "اپلیکیشن اختصاصی موبایل",
      basic: false,
      pro: true,
      business: true,
    },
    { name: "انبارداری و محصولات", basic: false, pro: false, business: true },
  ];

  const faqs = [
    {
      question: "آیا می‌توانم در هر زمان پلن خود را تغییر دهم؟",
      answer:
        "بله، شما می‌توانید در هر لحظه از پنل کاربری خود اقدام به ارتقا یا تغییر پلن نمایید. مابه‌التفاوت هزینه به صورت خودکار محاسبه خواهد شد.",
    },
    {
      question: "آیا هزینه پیامک‌ها جداگانه محاسبه می‌شود؟",
      answer:
        "در پلن حرفه‌ای و تجاری، بسته‌های پیامکی هدیه وجود دارد، اما در صورت اتمام اعتبار پیامک، می‌توانید به راحتی شارژ مجدد انجام دهید.",
    },
    {
      question: "آیا امکان بازگشت وجه وجود دارد؟",
      answer:
        "نارژین یک دوره ۷ روزه تست رایگان دارد تا با تمام امکانات آشنا شوید. پس از خرید، طبق قوانین بازگشت وجه تا ۴۸ ساعت امکان‌پذیر است.",
    },
  ];

  useEffect(() => {
    // Intersection Observer for scroll reveals
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    setTimeout(() => {
      document
        .querySelectorAll(".reveal-up")
        .forEach((el) => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, []);

  const togglePricing = () => {
    setIsYearly(!isYearly);
  };

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const getPrice = (plan: (typeof pricingPlans)[0]) => {
    if (plan.isFree) return "رایگان";
    return isYearly ? plan.yearlyPrice : plan.monthlyPrice;
  };

  const getPriceLabel = (plan: (typeof pricingPlans)[0]) => {
    if (plan.isFree) return "";
    return isYearly ? "تومان / سالانه" : "تومان / ماهانه";
  };

  return (
    <main className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pt-xl pb-xl mt-20">
      {/* Header Section */}
      <div className="text-center mb-xl">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 reveal-up">
          برنامه‌ای هوشمند برای رشد کسب‌وکار شما
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto mb-lg reveal-up">
          پلن مناسب خود را انتخاب کنید و از مدیریت هوشمند سالن و نوبت‌دهی آنلاین
          لذت ببرید.
        </p>
        {/* Monthly/Yearly Toggle */}
        <div className="flex items-center justify-center gap-3 mb-xl reveal-up">
          <span className="text-sm font-medium text-on-surface-variant">
            ماهانه
          </span>
          <div
            className="relative w-14 h-8 bg-surface-container rounded-full p-1 cursor-pointer"
            onClick={togglePricing}
          >
            <div
              className={`w-6 h-6 bg-primary rounded-full shadow-sm transition-transform duration-300 ${
                isYearly ? "-translate-x-6" : "translate-x-0"
              }`}
            />
          </div>
          <span className="text-sm font-medium text-on-surface-variant">
            سالانه <span className="text-secondary font-bold">(۲۰٪ تخفیف)</span>
          </span>
        </div>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-xl">
        {pricingPlans.map((plan, index) => (
          <div
            key={plan.id}
            className={`glass-card border p-6 rounded-xl flex flex-col gap-4 transition-all duration-300 reveal-up ${
              plan.isFeatured
                ? "border-2 border-secondary-container scale-105 shadow-lg featured-pulse relative"
                : "border border-outline-variant hover:scale-105 hover:shadow-xl"
            }`}
            style={{ transitionDelay: `${(index + 1) * 100}ms` }}
          >
            {plan.isFeatured && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full text-sm font-bold whitespace-nowrap">
                پیشنهاد ویژه
              </div>
            )}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-1">
                {plan.name}
              </h3>
              <p className="text-sm text-on-surface-variant">
                {plan.description}
              </p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-on-surface">
                {getPrice(plan)}
              </span>
              {!plan.isFree && (
                <span className="text-sm text-on-surface-variant">
                  {getPriceLabel(plan)}
                </span>
              )}
            </div>
            <ul className="flex flex-col gap-2 border-t border-outline-variant pt-4">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className={`flex items-center gap-2 text-base ${
                    !feature.included ? "opacity-50" : ""
                  }`}
                >
                  {feature.included ? (
                    <FaCheckCircle className="text-primary" />
                  ) : (
                    <FaTimesCircle className="text-outline" />
                  )}
                  <span className={feature.included ? "" : "text-outline"}>
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>
            <button
              className={`w-full py-2 rounded-lg font-medium transition-all duration-300 mt-auto ${
                plan.buttonVariant === "primary"
                  ? "bg-secondary-container text-on-secondary-container font-bold hover:shadow-md"
                  : "border border-primary text-primary hover:bg-primary hover:text-white"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>

      {/* Comparison Table Section */}
      <section className="max-w-4xl mx-auto py-xl">
        <h2 className="text-3xl font-bold text-center text-primary mb-xl reveal-up">
          مقایسه ویژگی‌ها
        </h2>
        <div className="overflow-x-auto glass-card rounded-xl border border-outline-variant reveal-up">
          <table className="w-full text-right border-collapse">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="p-4 text-sm font-medium text-on-surface-variant">
                  ویژگی
                </th>
                <th className="p-4 text-sm font-medium text-primary text-center">
                  پایه
                </th>
                <th className="p-4 text-sm font-medium text-primary text-center">
                  حرفه‌ای
                </th>
                <th className="p-4 text-sm font-medium text-primary text-center">
                  تجاری
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {comparisonFeatures.map((feature, index) => (
                <tr
                  key={index}
                  className="hover:bg-surface-container-lowest transition-colors"
                >
                  <td className="p-4 text-base">{feature.name}</td>
                  <td className="p-4 text-base text-center">
                    {typeof feature.basic === "string" ? (
                      feature.basic
                    ) : feature.basic ? (
                      <FaCheckCircle className="text-primary inline" />
                    ) : (
                      <FaTimesCircle className="text-outline inline" />
                    )}
                  </td>
                  <td className="p-4 text-base text-center">
                    {typeof feature.pro === "string" ? (
                      feature.pro
                    ) : feature.pro ? (
                      <FaCheckCircle className="text-primary inline" />
                    ) : (
                      <FaTimesCircle className="text-outline inline" />
                    )}
                  </td>
                  <td className="p-4 text-base text-center">
                    {typeof feature.business === "string" ? (
                      feature.business
                    ) : feature.business ? (
                      <FaCheckCircle className="text-primary inline" />
                    ) : (
                      <FaTimesCircle className="text-outline inline" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-3xl mx-auto py-xl">
        <h2 className="text-3xl font-bold text-center text-primary mb-xl reveal-up">
          سوالات متداول
        </h2>
        <div className="flex flex-col gap-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item glass-card border border-outline-variant rounded-lg overflow-hidden cursor-pointer group reveal-up ${
                activeFaq === index ? "active" : ""
              }`}
              onClick={() => toggleFaq(index)}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="p-4 flex justify-between items-center bg-surface-container-low group-hover:bg-surface-container transition-colors">
                <span className="text-sm font-bold text-on-surface">
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`faq-icon transition-transform duration-300 ${
                    activeFaq === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              <div
                className={`faq-content bg-white transition-all duration-300 ${
                  activeFaq === index ? "max-h-48" : "max-h-0"
                }`}
              >
                <p className="p-4 text-base text-on-surface-variant">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto py-xl mb-xl">
        <div className="relative overflow-hidden rounded-xl bg-primary-container p-12 text-center flex flex-col items-center gap-4 reveal-up shadow-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-on-primary relative z-10">
            آماده‌اید کسب‌وکار خود را متحول کنید؟
          </h2>
          <p className="text-lg text-on-primary-container relative z-10 w-full md:w-3/5">
            همین حالا به جمع بیش از ۱۰۰۰ سالن برتر بپیوندید و ۷ روز از تمامی
            امکانات به صورت رایگان استفاده کنید.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 relative z-10 mt-4">
            <button className="bg-secondary-container text-on-secondary-container px-12 py-4 rounded-xl text-xl font-bold shadow-lg hover:scale-105 active:scale-95 transition-all duration-300">
              شروع نوبت‌دهی آنلاین
            </button>
            <button className="bg-primary border border-on-primary-container text-on-primary px-12 py-4 rounded-xl text-xl font-bold hover:bg-on-primary-fixed-variant transition-all duration-300">
              مشاهده دموی پنل
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
