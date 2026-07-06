"use client";

import { useState, useEffect, useRef } from "react";
import {
  FaCalendarAlt,
  FaIdBadge,
  FaChartLine,
  FaCreditCard,
  FaBoxes,
  FaBullhorn,
  FaCheckCircle,
  FaArrowLeft,
} from "react-icons/fa";
import Image from "next/image";

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef<HTMLDivElement>(null);
  const firstTabRef = useRef<HTMLButtonElement>(null);

  const features = [
    {
      id: 1,
      category: "booking",
      icon: FaCalendarAlt,
      title: "نوبت‌دهی آنلاین ۲۴ ساعته",
      description:
        "مشتریان شما می‌توانند در هر ساعت از شبانه‌روز، خدمات مورد نظر خود را رزرو کنند. بدون نیاز به تماس تلفنی.",
    },
    {
      id: 2,
      category: "management",
      icon: FaIdBadge,
      title: "مدیریت هوشمند کارمندان",
      description:
        "شیفت‌بندی، محاسبه کمیسیون و عملکرد هر پرسنل را به صورت دقیق و لحظه‌ای رصد کنید.",
    },
    {
      id: 3,
      category: "reporting",
      icon: FaChartLine,
      title: "گزارش‌های تحلیلی دقیق",
      description:
        "پرطرفدارترین خدمات، ساعات اوج شلوغی و وضعیت مالی سالن خود را در نمودارهای زیبا ببینید.",
    },
    {
      id: 4,
      category: "booking",
      icon: FaCreditCard,
      title: "پرداخت آنلاین و بیعانه",
      description:
        "با دریافت بیعانه هنگام رزرو، کنسلی‌ها را به حداقل برسانید و جریان نقدی خود را تضمین کنید.",
    },
    {
      id: 5,
      category: "management",
      icon: FaBoxes,
      title: "انبارداری و مدیریت کالا",
      description:
        "موجودی محصولات مصرفی و فروشی را مدیریت کنید و قبل از اتمام، هشدار دریافت کنید.",
    },
    {
      id: 6,
      category: "reporting",
      icon: FaBullhorn,
      title: "باشگاه مشتریان و پیامک",
      description:
        "با ارسال پیامک‌های خودکار یادآوری و تبریک تولد، وفاداری مشتریان خود را چند برابر کنید.",
    },
  ];

  const tabs = [
    { id: "all", label: "همه قابلیت‌ها" },
    { id: "booking", label: "نوبت‌دهی" },
    { id: "management", label: "مدیریت" },
    { id: "reporting", label: "گزارش‌گیری" },
  ];

  const filteredFeatures =
    activeTab === "all"
      ? features
      : features.filter((f) => f.category === activeTab);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    const cards = document.querySelectorAll(".reveal-up");

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [activeTab]);

  useEffect(() => {
    if (!firstTabRef.current || !tabsRef.current) return;

    const btnRect = firstTabRef.current.getBoundingClientRect();
    const parentRect = tabsRef.current.getBoundingClientRect();

    setUnderlineStyle({
      left: btnRect.left - parentRect.left,
      width: btnRect.width,
    });
  }, []);

  const handleTabSwitch = (
    tabId: string,
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setActiveTab(tabId);

    const btn = e.currentTarget;
    const parent = tabsRef.current;

    if (!parent) return;

    const btnRect = btn.getBoundingClientRect();
    const parentRect = parent.getBoundingClientRect();

    setUnderlineStyle({
      left: btnRect.left - parentRect.left,
      width: btnRect.width,
    });
  };

  return (
    <main className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop pt-xl pb-xl mt-20">
      {/* Hero Section */}
      <section className="text-center mb-xl fade-in-header">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
          فراتر از یک مدیریت ساده
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl mx-auto">
          نارژین ابزارهای هوشمندی را در اختیار شما می‌گذارد تا روی هنر خود تمرکز
          کنید و دغدغه‌های مدیریتی را به ما بسپارید.
        </p>
      </section>

      {/* Category Tabs */}
      <div className="relative flex justify-center mb-lg">
        <div
          ref={tabsRef}
          className="flex items-center gap-6 border-b border-outline-variant pb-2 relative w-full md:w-auto"
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              ref={index === 0 ? firstTabRef : null}
              className={`px-3 py-2 text-sm font-medium transition-colors duration-300 ${
                activeTab === tab.id
                  ? "text-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
              data-target={tab.id}
              onClick={(e) => handleTabSwitch(tab.id, e)}
            >
              {tab.label}
            </button>
          ))}
          <div
            className="absolute bottom-0 h-0.5 bg-primary transition-all duration-300"
            style={{
              left: underlineStyle.left,
              width: underlineStyle.width,
            }}
          />
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-xl">
        {filteredFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.id}
              className="feature-card p-4 rounded-xl reveal-up bg-white border border-[#E5E7EB]"
              style={{ transitionDelay: `${(index % 3) * 0.1 + 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center mb-4 text-primary">
                <Icon className="text-3xl" />
              </div>
              <h3 className="text-2xl font-bold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-base text-on-surface-variant mb-4">
                {feature.description}
              </p>
              <div className="flex items-center gap-1 text-primary text-sm font-medium group cursor-pointer">
                <span>مشاهده جزئیات</span>
                <FaArrowLeft className="text-lg group-hover:-translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Visual Highlight Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
        <div className="order-2 lg:order-1 relative">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary-fixed/30 rounded-full blur-3xl"></div>
          <div className="relative rounded-2xl overflow-hidden shadow-xl border-4 border-white">
            <Image
              className="w-full h-auto object-cover"
              alt="داشبورد مدرن مدیریت سالن زیبایی"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcOKPS_2rAw_j4uT0ZToKydbCbdp-b2I3Gzg7_7i4OF8Qys9IA5hIojXSg7T53Q2z77EaDkQGblR2-V4EugkqjNNsLiGFwpaQy8llh5U3f60dMywtbCogRZ_tT8DBCRSnXoUctNqxfw9cjobC_VZDFwUBHbc06Ng0My8apn_weHuWtnSdUjRS6H0yinIyGyH_L8uFc79nqVMwyG2uYNCGaJUL9edOUeeiKy-uALSv1NIM7zb4uI2V1PAozNZeIX7EzmFfHoUtj-LKH"
              width={800}
              height={500}
            />
          </div>
        </div>
        <div className="order-1 lg:order-2">
          <h2 className="text-4xl/snug md:text-5xl font-extrabold text-primary mb-4 ">
            اتوماسیونی که لبخند بر لبان شما می‌آورد
          </h2>
          <p className="text-lg text-on-surface-variant mb-6">
            نارژین فقط یک نرم‌افزار نیست؛ بلکه دستیار هوشمند شماست که ۲۴ ساعته و
            بدون خستگی، کارهای خسته‌کننده اداری را انجام می‌دهد.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-secondary text-xl" />
              <span className="text-base">
                کاهش ۹۰ درصدی خطاهای انسانی در رزرو
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-secondary text-xl" />
              <span className="text-base">
                افزایش ۳۰ درصدی درآمد با نوبت‌دهی آنلاین
              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-secondary text-xl" />
              <span className="text-base">
                دسترسی از هر کجا با اپلیکیشن موبایل
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary rounded-3xl p-12 text-center text-white mt-12 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)",
            }}
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            آماده‌اید سالن خود را متحول کنید؟
          </h2>
          <p className="text-lg mb-6 w-full md:w-3/5 mx-auto opacity-90">
            همین حالا به جمع صدها مدیر سالن هوشمند بپیوندید و ۱۴ روز از تمامی
            امکانات به صورت رایگان استفاده کنید.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="bg-secondary-container text-on-secondary-container text-xl font-bold px-12 py-4 rounded-full pulse-animation hover:scale-105 transition-transform duration-300">
              شروع ۱۴ روز تست رایگان
            </button>
            <button className="border border-white/30 text-white px-12 py-4 rounded-full text-xl font-bold hover:bg-white/10 transition-colors duration-300">
              مشاوره رایگان
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
