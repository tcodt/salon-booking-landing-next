"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaClock,
  FaArrowLeft,
  FaChevronDown,
  FaUser,
  FaTag,
} from "react-icons/fa";

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "چگونه وفاداری مشتریان سالن را ۵۰٪ افزایش دهیم؟",
    excerpt:
      "استراتژی‌های عملی برای ایجاد ارتباط عمیق با مراجعین و تبدیل آن‌ها به مشتریان همیشگی در بازار رقابتی امروز...",
    category: "management",
    categoryFa: "مدیریت",
    readTime: "۱۰ دقیقه مطالعه",
    author: "تیم تحریریه نارژین",
    authorImage: "/images/authors/team.jpg",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCY5pwYAa1_EWlZg0hD45kHZ-VsabBWZ6oHSOo8f0hMMl1tMs8Ns_Hy2OixDs77-IlCjaxp5OPyws6HsnxMZ261mcwilcn1-vZG-_Kyju2ykDMgaotkUCaRkxjFBqwih4iHZAK3RA3o8AUFrOCoBPw5TlYrhbbMSHi5cLo64WYK7r_sbL2vhO3NRgjBxI7RLHOQNx9hcKemYmZk2JuYHVE80tpIFUBYAD3R9WwckDb4LhHTNphAtbSF-dzPuYb5IdFdl0j6lBwHnRbr",
    slug: "how-to-increase-customer-loyalty",
    date: "۱۵ تیر ۱۴۰۳",
  },
  {
    id: 2,
    title: "تاثیر هوش مصنوعی بر آینده کلینیک‌های زیبایی",
    excerpt:
      "بررسی ابزارهای نوین و خودکارسازی فرآیندها که به مدیران اجازه می‌دهد روی کیفیت خدمات تمرکز کنند...",
    category: "technology",
    categoryFa: "فناوری",
    readTime: "۱۵ دقیقه مطالعه",
    author: "دکتر سارا احمدی",
    authorImage: "/images/authors/sara.jpg",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAED_b8zvmJm15Q0Blg385uBtWiEyGwOQZR4T44h9a3WhxNgV0iCIiAITnrYtVYxurblCaLGHjLIbF1MSpBl2-PtIhiJ0m1eWhcFRKyqnh5AoN6YljTU91JutAmbzk2k38IGgQCDS0mt75STwwDIloU9ZXZHGLGHzW7W93tprD2bL3cmcgq5Rg3llp0Oi9CDYaRQuPzX2CTX0LyvuRx9Z4S-zy9mkp9OumojU2W-DKFnZ8SZAMcvrDGOVvnwjAefe_9Og1befDaAPaB",
    slug: "ai-impact-on-beauty-clinics",
    date: "۱۲ تیر ۱۴۰۳",
  },
  {
    id: 3,
    title: "اصول برندینگ شخصی برای متخصصین زیبایی",
    excerpt:
      "چگونه در شبکه‌های اجتماعی خود را به عنوان یک مرجع معتبر معرفی کنید و اعتماد مراجعین را جلب نمایید...",
    category: "marketing",
    categoryFa: "بازاریابی",
    readTime: "۸ دقیقه مطالعه",
    author: "رامین علوی",
    authorImage: "/images/authors/ramin.jpg",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCmOXmgsXSH44Kr057chUbi5B2sLxVRRv74-K_x77yYOJKnVGGPESxNlJuUpBWabSpF-QqRyFV3b8iNYxNwgNcTXp8BFdjtGE4ORVjxh4UyvqlKcdV7ca6EVKwBirQzMoU4d2NuYswAWGcnGGAqL8YruHagzPZ7qYbLg9Wc1LJEz5TWJU5ehgRwZt4wieZ8R_r0Nbzm2jBcnGX22xlOfMtG4YyrIoS3-ws4lRe6Es_ssqwUVgPSDMW_aETUX0Kfz80p9v8kOkJLgJtC",
    slug: "personal-branding-for-beauty-professionals",
    date: "۱۰ تیر ۱۴۰۳",
  },
  {
    id: 4,
    title: "بهینه‌سازی نوبت‌دهی آنلاین برای سالن‌ها",
    excerpt:
      "راهکارهای عملی برای افزایش رضایت مشتریان و کاهش زمان انتظار با استفاده از سیستم‌های هوشمند نوبت‌دهی...",
    category: "business",
    categoryFa: "کسب و کار",
    readTime: "۶ دقیقه مطالعه",
    author: "نیما راد",
    authorImage: "/images/authors/nima.jpg",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCcOKPS_2rAw_j4uT0ZToKydbCbdp-b2I3Gzg7_7i4OF8Qys9IA5hIojXSg7T53Q2z77EaDkQGblR2-V4EugkqjNNsLiGFwpaQy8llh5U3f60dMywtbCogRZ_tT8DBCRSnXoUctNqxfw9cjobC_VZDFwUBHbc06Ng0My8apn_weHuWtnSdUjRS6H0yinIyGyH_L8uFc79nqVMwyG2uYNCGaJUL9edOUeeiKy-uALSv1NIM7zb4uI2V1PAozNZeIX7EzmFfHoUtj-LKH",
    slug: "optimize-online-booking",
    date: "۸ تیر ۱۴۰۳",
  },
  {
    id: 5,
    title: "مدیریت مالی در سالن‌های کوچک",
    excerpt:
      "راهنمای جامع برای مدیریت هزینه‌ها، افزایش سودآوری و رشد کسب‌وکار در سالن‌های زیبایی با بودجه محدود...",
    category: "business",
    categoryFa: "کسب و کار",
    readTime: "۲۰ دقیقه مطالعه",
    author: "علی حسینی",
    authorImage: "/images/authors/ali.jpg",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCcOKPS_2rAw_j4uT0ZToKydbCbdp-b2I3Gzg7_7i4OF8Qys9IA5hIojXSg7T53Q2z77EaDkQGblR2-V4EugkqjNNsLiGFwpaQy8llh5U3f60dMywtbCogRZ_tT8DBCRSnXoUctNqxfw9cjobC_VZDFwUBHbc06Ng0My8apn_weHuWtnSdUjRS6H0yinIyGyH_L8uFc79nqVMwyG2uYNCGaJUL9edOUeeiKy-uALSv1NIM7zb4uI2V1PAozNZeIX7EzmFfHoUtj-LKH",
    slug: "financial-management-small-salons",
    date: "۵ تیر ۱۴۰۳",
  },
  {
    id: 6,
    title: "انتخاب بهترین متریال مصرفی در سالن",
    excerpt:
      "راهنمای انتخاب متریال‌های باکیفیت و مقرون‌به‌صرفه برای سالن‌های زیبایی و کلینیک‌های پوست و مو...",
    category: "education",
    categoryFa: "آموزش",
    readTime: "۱۲ دقیقه مطالعه",
    author: "تیم فنی نارژین",
    authorImage: "/images/authors/tech-team.jpg",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCcOKPS_2rAw_j4uT0ZToKydbCbdp-b2I3Gzg7_7i4OF8Qys9IA5hIojXSg7T53Q2z77EaDkQGblR2-V4EugkqjNNsLiGFwpaQy8llh5U3f60dMywtbCogRZ_tT8DBCRSnXoUctNqxfw9cjobC_VZDFwUBHbc06Ng0My8apn_weHuWtnSdUjRS6H0yinIyGyH_L8uFc79nqVMwyG2uYNCGaJUL9edOUeeiKy-uALSv1NIM7zb4uI2V1PAozNZeIX7EzmFfHoUtj-LKH",
    slug: "best-consumable-materials",
    date: "۳ تیر ۱۴۰۳",
  },
];

const categories = [
  { id: "all", label: "همه" },
  { id: "management", label: "مدیریت" },
  { id: "marketing", label: "بازاریابی" },
  { id: "technology", label: "فناوری" },
  { id: "business", label: "کسب و کار" },
  { id: "education", label: "آموزش" },
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [isLoading, setIsLoading] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef<HTMLDivElement>(null);
  const firstTabRef = useRef<HTMLButtonElement>(null);

  const filteredPosts =
    activeCategory === "all"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const displayedPosts = filteredPosts.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < filteredPosts.length;

  useEffect(() => {
    // Intersection Observer for scroll reveals
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-up");
        }
      });
    }, observerOptions);

    setTimeout(() => {
      document
        .querySelectorAll(".stagger-item")
        .forEach((el) => observer.observe(el));
    }, 100);

    // Set initial underline position
    if (firstTabRef.current && tabsRef.current) {
      setUnderlineStyle({
        left: firstTabRef.current.offsetLeft,
        width: firstTabRef.current.offsetWidth,
      });
    }

    return () => observer.disconnect();
  }, []);

  const handleCategoryChange = (
    category: string,
    e: React.MouseEvent<HTMLButtonElement>,
  ) => {
    setActiveCategory(category);
    setVisiblePosts(6);
    const btn = e.currentTarget;
    setUnderlineStyle({
      left: btn.offsetLeft,
      width: btn.offsetWidth,
    });
  };

  const loadMorePosts = () => {
    setIsLoading(true);
    setTimeout(() => {
      setVisiblePosts((prev) => Math.min(prev + 3, filteredPosts.length));
      setIsLoading(false);
    }, 1200);
  };

  return (
    <main className="max-w-7xl mx-auto px-margin-mobile md:px-margin-desktop py-xl mt-20">
      {/* Hero Section */}
      <section className="mb-xl text-center md:text-right">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-4 fade-in-header">
          آموزش‌ها
        </h1>
        <p className="text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          آخرین مقالات، راهنماها و آموزش‌های تخصصی مدیریت سالن زیبایی و
          کلینیک‌های پوست و مو را در اینجا بخوانید.
        </p>
      </section>

      {/* Category Filters */}
      <section className="mb-lg relative overflow-x-auto no-scrollbar">
        <div
          ref={tabsRef}
          className="flex flex-row-reverse items-center gap-4 border-b border-outline-variant pb-2 relative"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              ref={category.id === "all" ? firstTabRef : null}
              className={`px-3 py-2 text-sm font-medium whitespace-nowrap relative z-10 transition-colors duration-300 ${
                activeCategory === category.id
                  ? "text-primary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
              onClick={(e) => handleCategoryChange(category.id, e)}
            >
              {category.label}
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
      </section>

      {/* Articles Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
        id="article-grid"
      >
        {displayedPosts.map((post, index) => (
          <article
            key={post.id}
            className="stagger-item group bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant shadow-[0px_4px_20px_rgba(6,95,70,0.05)] flex flex-col h-full "
            style={{ animationDelay: `${(index % 3) * 100}ms` }}
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="relative aspect-video overflow-hidden hover-zoom">
                <Image
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={post.title}
                  src={post.image}
                  width={400}
                  height={225}
                />
                <div className="absolute top-2 right-2 bg-secondary-container text-on-secondary-container px-2 py-1 rounded-lg text-xs font-medium">
                  {post.category}
                </div>
              </div>
              <div className="p-4 flex flex-col grow">
                <div className="flex items-center gap-1 text-on-surface-variant text-xs font-medium mb-2">
                  <FaClock className="text-sm" />
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-on-surface-variant line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary-fixed-dim flex items-center justify-center text-primary text-xs font-bold">
                      {post.author.charAt(0)}
                    </div>
                    <span className="text-xs font-medium">{post.author}</span>
                  </div>
                  <FaArrowLeft className="text-primary group-hover:-translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {/* Show More Button */}
      {hasMorePosts && (
        <div className="flex justify-center mt-8">
          <button
            onClick={loadMorePosts}
            disabled={isLoading}
            className="flex items-center gap-2 bg-surface-container border border-outline-variant hover:bg-outline-variant/20 transition-all px-6 py-3 rounded-full text-sm font-medium text-primary active:scale-95 group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              "در حال بارگذاری..."
            ) : (
              <>
                مشاهده مطالب بیشتر
                <FaChevronDown className="group-hover:rotate-180 transition-transform duration-300" />
              </>
            )}
          </button>
        </div>
      )}

      {/* No posts message */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-on-surface-variant">
            مقاله‌ای در این دسته‌بندی یافت نشد.
          </p>
        </div>
      )}
    </main>
  );
}
