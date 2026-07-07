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
  FaUsers,
  FaGift,
  FaLink,
  FaClock,
  FaHandScissors,    // جایگزین FaScissors
  FaStore,
  FaChartPie,
  FaUserTie,
  FaHistory,
  FaSearch,
  FaSms,
  FaBirthdayCake,    // این آیکون وجود دارد
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
      title: "رزرو آنلاین ۲۴ ساعته",
      description:
        "مشتریان شما در هر ساعت از شبانه‌روز می‌توانند بدون تماس تلفنی از طریق لینک اختصاصی سالن، نوبت خود را رزرو کنند.",
    },
    {
      id: 2,
      category: "booking",
      icon: FaLink,
      title: "لینک اختصاصی رزرو",
      description:
        "یک لینک اختصاصی برای سالن خود دریافت کنید و آن را در اینستاگرام، واتساپ یا وب‌سایت قرار دهید تا مشتریان به‌سادگی نوبت بگیرند.",
    },
    {
      id: 3,
      category: "booking",
      icon: FaClock,
      title: "تقویم هوشمند نوبت‌ها",
      description:
        "همه نوبت‌ها را به‌صورت لحظه‌ای مشاهده کنید، از تداخل زمانی جلوگیری کنید و برنامه کاری سالن را هوشمند مدیریت کنید.",
    },
    {
      id: 4,
      category: "management",
      icon: FaIdBadge,
      title: "مدیریت کارکنان",
      description:
        "شیفت‌های کاری، عملکرد، درصد همکاری و درآمد هر آرایشگر را در یک پنل مدیریت کنید.",
    },
    {
      id: 5,
      category: "management",
      icon: FaHandScissors,  // تغییر داده شد
      title: "مدیریت خدمات سالن",
      description:
        "تمام خدمات، مدت زمان، قیمت و آرایشگران مرتبط با هر سرویس را به‌راحتی تعریف و ویرایش کنید.",
    },
    {
      id: 6,
      category: "management",
      icon: FaStore,
      title: "مدیریت اطلاعات سالن",
      description:
        "اطلاعات سالن، ساعت کاری، تعطیلی‌ها و تنظیمات رزرو آنلاین را تنها با چند کلیک مدیریت کنید.",
    },
    {
      id: 7,
      category: "reporting",
      icon: FaChartLine,
      title: "گزارش درآمد سالن",
      description:
        "درآمد روزانه، هفتگی و ماهانه سالن را همراه با نمودارهای تحلیلی مشاهده کنید.",
    },
    {
      id: 8,
      category: "reporting",
      icon: FaChartPie,
      title: "تحلیل خدمات پرفروش",
      description:
        "ببینید کدام خدمات بیشترین درآمد و محبوبیت را دارند تا تصمیم‌های بهتری برای رشد سالن بگیرید.",
    },
    {
      id: 9,
      category: "reporting",
      icon: FaUserTie,
      title: "گزارش عملکرد کارکنان",
      description:
        "عملکرد هر آرایشگر، تعداد مشتریان، درآمد و میزان فروش را به‌صورت دقیق بررسی کنید.",
    },
    {
      id: 10,
      category: "customers",
      icon: FaUsers,
      title: "پرونده اختصاصی مشتریان",
      description:
        "سوابق مراجعه، خدمات دریافت‌شده و اطلاعات هر مشتری را در یک پرونده کامل نگهداری کنید.",
    },
    {
      id: 11,
      category: "customers",
      icon: FaHistory,
      title: "تاریخچه مراجعات",
      description:
        "تمام رزروها و مراجعات گذشته هر مشتری را مشاهده کنید و خدمات بهتری ارائه دهید.",
    },
    {
      id: 12,
      category: "customers",
      icon: FaSearch,
      title: "جستجوی سریع مشتریان",
      description:
        "با جستجوی نام یا شماره تماس، در چند ثانیه اطلاعات و سوابق مشتری را پیدا کنید.",
    },
    {
      id: 13,
      category: "growth",
      icon: FaSms,
      title: "پیامک یادآوری خودکار",
      description:
        "قبل از زمان رزرو، پیامک یا پیام واتساپ برای مشتری ارسال کنید و میزان کنسلی‌ها را کاهش دهید.",
    },
    {
      id: 14,
      category: "growth",
      icon: FaGift,
      title: "باشگاه مشتریان",
      description:
        "با امتیازدهی، تخفیف و هدایا، مشتریان را به مراجعه مجدد تشویق کنید و وفاداری آن‌ها را افزایش دهید.",
    },
    {
      id: 15,
      category: "growth",
      icon: FaBirthdayCake,
      title: "پیام تبریک تولد",
      description:
        "در روز تولد مشتری، پیام تبریک همراه با کد تخفیف ارسال کنید و تجربه‌ای متفاوت برای او بسازید.",
    },
  ];

  const tabs = [
    { id: "all", label: "همه قابلیت‌ها" },
    { id: "booking", label: "نوبت‌دهی" },
    { id: "management", label: "مدیریت" },
    { id: "reporting", label: "گزارش‌گیری" },
    { id: "customers", label: "مشتریان" },
    { id: "growth", label: "وفاداری" },
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
    <main className="max-w-7xl mx-auto px-4 md:px-12 pt-20 pb-12 mt-20">
      {/* Hero Section */}

    <section className="text-center mb-16 md:mb-20 fade-in-header">
      <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6">
        فراتر از یک مدیریت ساده
      </h1>
      <p className="text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
        نارژین ابزارهای هوشمندی را در اختیار شما می‌گذارد تا روی هنر خود تمرکز
        کنید و دغدغه‌های مدیریتی را به ما بسپارید.
      </p>
    </section>

      {/* Category Tabs */}
      <div className="relative flex justify-center mb-6">
        <div
          ref={tabsRef}
          className="flex items-center gap-6 border-b border-outline-variant pb-2 relative w-full md:w-auto overflow-x-auto no-scrollbar"
        >
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              ref={index === 0 ? firstTabRef : null}
              className={`px-3 py-2 text-sm font-medium transition-colors duration-300 whitespace-nowrap ${
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {filteredFeatures.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.id}
              className="feature-card p-4 rounded-xl reveal-up bg-white border border-[#E5E7EB] opacity-0 translate-y-[30px] scale-[0.95] transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{ transitionDelay: `${(index % 3) * 0.1 + 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary-fixed flex items-center justify-center mb-4 text-primary">
                <Icon className="text-3xl" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-on-surface-variant mb-4">
                {feature.description}
              </p>
              {/* <div className="flex items-center gap-1 text-primary text-sm font-medium group cursor-pointer">
                <span>مشاهده جزئیات</span>
                <FaArrowLeft className="text-lg group-hover:-translate-x-1 transition-transform duration-300" />
              </div> */}
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
<h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-5 leading-[1.5]">
  تمرکز شما روی مشتری؛ مدیریت با نارژین
</h2>
          <p className="text-lg text-on-surface-variant mb-6">
نارژین تمام ابزارهای لازم برای مدیریت حرفه‌ای سالن زیبایی را در یک پنل هوشمند جمع کرده است؛ از نوبت‌دهی آنلاین و مدیریت مشتریان گرفته تا گزارش‌های مالی و تحلیل عملکرد کارکنان.
          </p>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-secondary text-xl flex-shrink-0" />
              <span className="text-base">
رزرو آنلاین بدون تماس تلفنی              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-secondary text-xl flex-shrink-0" />
              <span className="text-base">
گزارش‌های مالی و عملکرد لحظه‌ای              </span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-secondary text-xl flex-shrink-0" />
              <span className="text-base">
دسترسی با موبایل و وب              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary rounded-3xl p-8 md:p-12 text-center text-white mt-12 overflow-hidden relative">
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
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold mb-4 md:mb-6">
آماده‌اید مدیریت سالن خود را هوشمند کنید؟          </h2>
          <p className="text-base md:text-lg mb-6 w-full md:w-3/5 mx-auto opacity-90">
با نارژین، رزرو آنلاین، مدیریت مشتریان، کارکنان و گزارش‌های مالی را در یک پنل ساده و حرفه‌ای تجربه کنید. همین امروز رایگان شروع کنید و اولین قدم را برای رشد کسب‌وکار خود بردارید.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="bg-secondary-container text-on-secondary-container text-base md:text-xl font-bold px-8 md:px-12 py-3 md:py-4 rounded-full pulse-animation hover:scale-105 transition-transform duration-300">
              شروع ۱۴ روز تست رایگان
            </button>
            <button className="border border-white/30 text-white px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-xl font-bold hover:bg-white/10 transition-colors duration-300">
              مشاوره رایگان
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}