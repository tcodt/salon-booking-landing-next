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
      id: "starter",
      name: "شروع",
      description: "مناسب برای سالن‌های تازه‌تأسیس",
      monthlyPrice: "رایگان",
      yearlyPrice: "رایگان",
      isFree: true,
      features: [
        { text: "رزرو آنلاین تا ۱۰۰ نوبت در ماه", included: true },
        { text: "مدیریت خدمات و تقویم نوبت‌ها", included: true },
        { text: "مدیریت اطلاعات مشتریان", included: true },
        { text: "گزارش‌های مالی پیشرفته", included: false },
        { text: "پیامک یادآوری خودکار", included: false },
        { text: "مدیریت کارکنان", included: false },
      ],
      buttonText: "رایگان شروع کنید",
      buttonVariant: "outline",
    },
    {
      id: "professional",
      name: "حرفه‌ای",
      description: "بهترین انتخاب برای سالن‌های در حال رشد",
      monthlyPrice: "۴۹۰,۰۰۰",
      yearlyPrice: "۴,۷۰۰,۰۰۰",
      isFree: false,
      isFeatured: true,
      features: [
        { text: "رزرو آنلاین نامحدود", included: true },
        { text: "پیامک یادآوری و تأیید نوبت", included: true },
        { text: "مدیریت کارکنان و کمیسیون", included: true },
        { text: "گزارش‌های مالی و مدیریتی", included: true },
        { text: "CRM و پرونده مشتریان", included: true },
        { text: "پشتیبانی اولویت‌دار", included: true },
      ],
      buttonText: "شروع پلن حرفه‌ای",
      buttonVariant: "primary",
    },
    {
      id: "enterprise",
      name: "سازمانی",
      description: "برای سالن‌های بزرگ و چند شعبه‌ای",
      monthlyPrice: "تماس بگیرید",
      yearlyPrice: "تماس بگیرید",
      isFree: false,
      features: [
        { text: "تمام امکانات پلن حرفه‌ای", included: true },
        { text: "شعب و کارکنان نامحدود", included: true },
        { text: "داشبورد اختصاصی مدیریت شعب", included: true },
        { text: "API و یکپارچه‌سازی اختصاصی", included: true },
        { text: "پشتیبانی اختصاصی VIP", included: true },
        { text: "آموزش و راه‌اندازی اختصاصی", included: true },
      ],
      buttonText: "تماس با واحد فروش",
      buttonVariant: "outline",
    },
  ];

  const comparisonFeatures = [
    { name: "تعداد نوبت ماهانه", basic: "۱۰۰", pro: "نامحدود", business: "نامحدود" },
    { name: "تعداد کارکنان", basic: "۱ نفر", pro: "۵ نفر", business: "نامحدود" },
    { name: "تعداد شعب", basic: "۱", pro: "۱", business: "نامحدود" },
    { name: "رزرو آنلاین ۲۴ ساعته", basic: true, pro: true, business: true },
    { name: "تقویم هوشمند", basic: true, pro: true, business: true },
    { name: "مدیریت مشتریان (CRM)", basic: true, pro: true, business: true },
    { name: "مدیریت کارکنان", basic: false, pro: true, business: true },
    { name: "مدیریت کمیسیون", basic: false, pro: true, business: true },
    { name: "پیامک یادآوری خودکار", basic: false, pro: true, business: true },
    { name: "واتساپ یادآوری", basic: false, pro: true, business: true },
    { name: "گزارش‌های مالی", basic: false, pro: true, business: true },
    { name: "گزارش عملکرد کارکنان", basic: false, pro: true, business: true },
    { name: "باشگاه مشتریان", basic: false, pro: true, business: true },
    { name: "تخفیف و کد هدیه", basic: false, pro: true, business: true },
    { name: "پشتیبانی VIP", basic: false, pro: false, business: true },
    { name: "API اختصاصی", basic: false, pro: false, business: true },
  ];


  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    setTimeout(() => {
      document.querySelectorAll(".reveal-up").forEach((el) => observer.observe(el));
    }, 100);

    return () => observer.disconnect();
  }, []);

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
    <main className="max-w-7xl mx-auto px-4 md:px-12 pt-20 pb-12 mt-20">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 reveal-up">
          پلن مناسب سالن خود را انتخاب کنید
        </h1>
        <p className="text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto mb-12 md:mb-16 reveal-up leading-relaxed">
          نارژین برای هر مرحله از رشد کسب‌وکار شما، از سالن‌های تازه‌تأسیس تا مجموعه‌های چندشعبه‌ای، پلنی متناسب ارائه می‌دهد. امکانات موردنیاز خود را انتخاب کنید و هر زمان که نیاز داشتید، پلن خود را ارتقا دهید.
        </p>
      </div>

      {/* Pricing Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-12">
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
              <h3 className="text-2xl font-bold text-primary mb-1">{plan.name}</h3>
              <p className="text-sm text-on-surface-variant">{plan.description}</p>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="text-3xl font-bold text-on-surface">{getPrice(plan)}</span>
              {!plan.isFree && (
                <span className="text-sm text-on-surface-variant">{getPriceLabel(plan)}</span>
              )}
            </div>
            <ul className="flex flex-col gap-2 border-t border-outline-variant pt-4">
              {plan.features.map((feature, idx) => (
                <li key={idx} className={`flex items-center gap-2 text-base ${!feature.included ? "opacity-50" : ""}`}>
                  {feature.included ? (
                    <FaCheckCircle className="text-primary flex-shrink-0" />
                  ) : (
                    <FaTimesCircle className="text-outline flex-shrink-0" />
                  )}
                  <span className={feature.included ? "" : "text-outline"}>{feature.text}</span>
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
      <section className="max-w-4xl mx-auto py-12">
        <h2 className="text-3xl font-bold text-center text-primary mb-12 reveal-up">
          مقایسه ویژگی‌ها
        </h2>
        <div className="overflow-x-auto glass-card rounded-xl border border-outline-variant reveal-up">
          <table className="w-full text-right border-collapse min-w-[600px]">
            <thead>
              <tr className="bg-surface-container-low">
                <th className="p-4 text-sm font-medium text-on-surface-variant">ویژگی</th>
                <th className="p-4 text-sm font-medium text-primary text-center">شروع</th>
                <th className="p-4 text-sm font-medium text-primary text-center">حرفه‌ای</th>
                <th className="p-4 text-sm font-medium text-primary text-center">سازمانی</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant">
              {comparisonFeatures.map((feature, index) => (
                <tr key={index} className="hover:bg-surface-container-lowest transition-colors">
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

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto py-12 mb-12">
        <div className="relative overflow-hidden rounded-xl bg-primary-container p-8 md:p-12 text-center flex flex-col items-center gap-4 reveal-up shadow-xl">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-on-primary relative z-10">
آماده‌اید مدیریت سالن خود را هوشمند کنید؟             </h2>
<p className="text-base md:text-lg mb-6 w-full md:w-3/5 mx-auto opacity-90 text-white">
  با نارژین، رزرو آنلاین، مدیریت مشتریان، کارکنان و گزارش‌های مالی را در یک پنل ساده و حرفه‌ای تجربه کنید. همین امروز رایگان شروع کنید و اولین قدم را برای رشد کسب‌وکار خود بردارید.
</p>
          <div className="flex flex-col sm:flex-row gap-4 relative z-10 mt-4">
            <button className="bg-secondary-container text-on-secondary-container px-8 md:px-12 py-3 md:py-4 rounded-xl text-base md:text-xl font-bold shadow-lg hover:scale-105 active:scale-95 transition-all duration-300">
              شروع نوبت‌دهی آنلاین
            </button>
            <button className="bg-primary border border-on-primary-container text-on-primary px-8 md:px-12 py-3 md:py-4 rounded-xl text-base md:text-xl font-bold hover:bg-on-primary-fixed-variant transition-all duration-300">
              مشاهده دموی پنل
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}