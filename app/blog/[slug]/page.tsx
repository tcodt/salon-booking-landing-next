"use client";

import { useState, useEffect, useRef } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaClock,
  FaShareAlt,
  FaBookmark,
  FaCheckCircle,
} from "react-icons/fa";

interface Article {
  id: number;
  title: string;
  slug: string;
  meta_title: string;
  meta_description: string;
  content: string;
  image: string;
  is_published: boolean;
  created_at: string;
}

// داده‌های نمونه برای مقالات پیشنهادی
const relatedArticles = [
  {
    id: 1,
    title: "چگونه وفاداری مشتریان سالن را ۵۰٪ افزایش دهیم؟",
    slug: "how-to-increase-customer-loyalty",
    category: "مدیریت",
    excerpt: "استراتژی‌های عملی برای ایجاد ارتباط عمیق با مراجعین...",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCY5pwYAa1_EWlZg0hD45kHZ-VsabBWZ6oHSOo8f0hMMl1tMs8Ns_Hy2OixDs77-IlCjaxp5OPyws6HsnxMZ261mcwilcn1-vZG-_Kyju2ykDMgaotkUCaRkxjFBqwih4iHZAK3RA3o8AUFrOCoBPw5TlYrhbbMSHi5cLo64WYK7r_sbL2vhO3NRgjBxI7RLHOQNx9hcKemYmZk2JuYHVE80tpIFUBYAD3R9WwckDb4LhHTNphAtbSF-dzPuYb5IdFdl0j6lBwHnRbr",
  },
  {
    id: 2,
    title: "تاثیر هوش مصنوعی بر آینده کلینیک‌های زیبایی",
    slug: "ai-impact-on-beauty-clinics",
    category: "فناوری",
    excerpt: "بررسی ابزارهای نوین و خودکارسازی فرآیندها...",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAED_b8zvmJm15Q0Blg385uBtWiEyGwOQZR4T44h9a3WhxNgV0iCIiAITnrYtVYxurblCaLGHjLIbF1MSpBl2-PtIhiJ0m1eWhcFRKyqnh5AoN6YljTU91JutAmbzk2k38IGgQCDS0mt75STwwDIloU9ZXZHGLGHzW7W93tprD2bL3cmcgq5Rg3llp0Oi9CDYaRQuPzX2CTX0LyvuRx9Z4S-zy9mkp9OumojU2W-DKFnZ8SZAMcvrDGOVvnwjAefe_9Og1befDaAPaB",
  },
  {
    id: 3,
    title: "اصول برندینگ شخصی برای متخصصین زیبایی",
    slug: "personal-branding-for-beauty-professionals",
    category: "بازاریابی",
    excerpt: "چگونه در شبکه‌های اجتماعی خود را به عنوان یک مرجع معتبر معرفی کنید...",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmOXmgsXSH44Kr057chUbi5B2sLxVRRv74-K_x77yYOJKnVGGPESxNlJuUpBWabSpF-QqRyFV3b8iNYxNwgNcTXp8BFdjtGE4ORVjxh4UyvqlKcdV7ca6EVKwBirQzMoU4d2NuYswAWGcnGGAqL8YruHagzPZ7qYbLg9Wc1LJEz5TWJU5ehgRwZt4wieZ8R_r0Nbzm2jBcnGX22xlOfMtG4YyrIoS3-ws4lRe6Es_ssqwUVgPSDMW_aETUX0Kfz80p9v8kOkJLgJtC",
  },
];

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const progressRef = useRef<HTMLDivElement>(null);
  
  const [article, setArticle] = useState<Article | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const fetchArticle = async () => {
      if (!slug) return;
      
      setIsLoading(true);
      setError(null);
      
      try {
        console.log(`📤 دریافت مقاله با slug: ${slug}`);
        const response = await fetch(`https://queuingprojectapi.pythonanywhere.com/landing/article/${slug}`);
        
        console.log('📥 وضعیت پاسخ:', response.status);
        
        if (!response.ok) {
          throw new Error(`خطا ${response.status}: ${response.statusText}`);
        }
        
        const data = await response.json();
        console.log('✅ مقاله دریافت شد:', data);
        
        if (data && data.id) {
          setArticle(data);
        } else {
          throw new Error('مقاله یافت نشد');
        }
      } catch (err) {
        console.error('❌ خطا:', err);
        setError(err instanceof Error ? err.message : 'مشکلی در دریافت مقاله پیش آمد');
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticle();
  }, [slug]);

  // نوار پیشرفت مطالعه
  useEffect(() => {
    const handleScroll = () => {
      const winScroll = window.scrollY;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = winScroll / height;
      
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${scrolled})`;
      }

      // تشخیص بخش فعال برای فهرست مطالب
      const sections = document.querySelectorAll('section[id]');
      let current = "";
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        if (window.scrollY >= sectionTop - 120) {
          current = section.getAttribute("id") || "";
        }
      });
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [article]);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString('fa-IR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    } catch (e) {
      return dateString;
    }
  };

  // استخراج عناوین از محتوا برای فهرست مطالب
  const extractHeadings = (content: string) => {
    if (!content) return [];
    const headings: { text: string; id: string }[] = [];
    const lines = content.split('\n');
    let counter = 0;
    
    lines.forEach((line) => {
      if (line.startsWith('## ')) {
        const text = line.replace('## ', '').trim();
        const id = `section-${counter}`;
        headings.push({ text, id });
        counter++;
      }
    });
    
    return headings;
  };

  // تبدیل محتوای Markdown به HTML
  const renderContent = (content: string) => {
    if (!content) return '<p>محتوایی موجود نیست</p>';
    
    let html = content;
    
    // استخراج و جایگزینی عناوین با id
    let headingCounter = 0;
    html = html.replace(/^## (.*$)/gim, (match, title) => {
      const id = `section-${headingCounter}`;
      headingCounter++;
      return `<h2 id="${id}" class="text-2xl md:text-3xl font-extrabold text-primary mt-10 mb-5">${title}</h2>`;
    });
    
    html = html.replace(/^### (.*$)/gim, (match, title) => {
      return `<h3 class="text-xl md:text-2xl font-bold text-primary mt-8 mb-4">${title}</h3>`;
    });
    
    html = html.replace(/^# (.*$)/gim, (match, title) => {
      return `<h1 class="text-3xl md:text-4xl font-extrabold text-primary mt-12 mb-6">${title}</h1>`;
    });
    
    // تبدیل لیست‌ها
    html = html.replace(/^- (.*$)/gim, '<li class="mr-4 mb-2 text-base text-on-surface-variant">$1</li>');
    
    // تبدیل نقل قول‌ها
    html = html.replace(/^> (.*$)/gim, (match, text) => {
      return `<blockquote class="border-r-4 border-primary bg-primary-container/10 p-6 md:p-8 my-8 italic rounded-l-2xl">
        <p class="text-lg md:text-xl font-semibold text-primary-container leading-relaxed">${text}</p>
      </blockquote>`;
    });
    
    // تبدیل پاراگراف‌ها
    const paragraphs = html.split('\n\n');
    html = paragraphs.map(p => {
      if (p.startsWith('<h') || p.startsWith('<ul') || p.startsWith('<li') || p.startsWith('<blockquote')) {
        return p;
      }
      return `<p class="text-base md:text-lg text-on-surface-variant leading-relaxed mb-4">${p}</p>`;
    }).join('');
    
    // رفع لیست‌ها
    html = html.replace(/<li/g, '<ul class="list-disc mr-6 mb-4 space-y-1"><li');
    html = html.replace(/<\/li>(?!\s*<li)/g, '</li></ul>');
    
    return html;
  };

  const headings = article ? extractHeadings(article.content || '') : [];

  if (isLoading) {
    return (
      <main className="max-w-7xl mx-auto px-4 md:px-12 py-8 md:py-12 mt-20">
        <div className="animate-pulse">
          <div className="h-8 bg-surface-container-high rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-surface-container-high rounded w-1/3 mb-8"></div>
          <div className="aspect-video bg-surface-container-high rounded-2xl mb-8"></div>
          <div className="space-y-4">
            <div className="h-4 bg-surface-container-high rounded w-full"></div>
            <div className="h-4 bg-surface-container-high rounded w-full"></div>
            <div className="h-4 bg-surface-container-high rounded w-2/3"></div>
          </div>
        </div>
      </main>
    );
  }

  if (error || !article) {
    return (
      <main className="max-w-7xl mx-auto px-4 md:px-12 py-8 md:py-12 mt-20">
        <div className="bg-red-50 border border-red-200 rounded-2xl p-8 text-center max-w-2xl mx-auto">
          <p className="text-red-600 text-lg font-medium">❌ {error || 'مقاله یافت نشد'}</p>
          <Link 
            href="/blog"
            className="mt-6 inline-block bg-primary text-white px-8 py-3 rounded-lg hover:opacity-90 transition-colors"
          >
            بازگشت به لیست مقالات
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background">
      {/* نوار پیشرفت مطالعه */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-surface-container">
        <div 
          ref={progressRef} 
          className="h-full bg-primary scale-x-0 origin-right transition-transform duration-100"
        />
      </div>

      {/* هیرو بخش */}
      <section className="relative w-full min-h-[500px] md:h-[716px] flex items-end overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: article.image 
              ? `url(${article.image})` 
              : `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAPrNjuSA7Gr3PFm0qhyZP-pB2jA0RFvaNLI-Cmh-Htq59DcKCFfid2AS2Isr8Y38UevpVlKCVbwNuHaw-nfpCcgs16-U5KhrfdlDtcObJxgl2qME6cdeno02HTHLHbKlUaDSqWiXEnCkpRL3FnzHyM0c_Ck9ozbc27Jsu6lzZomWJIfJ7IiFz_8Jn778OwaD6YdGDMqLVA3TM_vDiBqocA7KfvF_lQ7S6YwcKgtQ9dLlwczw0k1RyPAtSH2LYwYxNHzJfkxxYoWxA')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
        <div className="relative w-full max-w-7xl mx-auto px-4 md:px-12 pb-8 md:pb-16 text-white">
          <div className="flex items-center gap-4 mb-4 md:mb-6">
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-primary-fixed-dim bg-primary-fixed/20 flex items-center justify-center text-white text-xl md:text-2xl font-bold">
              {article.title?.charAt(0) || 'ن'}
            </div>
            <div>
              <p className="text-xs md:text-sm text-primary-fixed-dim">نوشته شده توسط</p>
              <h3 className="text-base md:text-xl font-bold">نارژین</h3>
            </div>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold max-w-4xl leading-relaxed tracking-wide">
            {article.title}
          </h1>
          <div className="mt-6 flex flex-wrap gap-4 md:gap-6 text-sm md:text-base text-white/80">
            <span className="flex items-center gap-1">
              <FaCalendarAlt className="text-sm" />
              {formatDate(article.created_at)}
            </span>
            <span className="flex items-center gap-1">
              <FaClock className="text-sm" />
              {Math.ceil((article.content?.split(' ').length || 0) / 200) || 3} دقیقه مطالعه
            </span>
          </div>
        </div>
      </section>

      {/* محتوای مقاله */}
      <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 py-12 md:py-20 relative">
        {/* سایدبار - فهرست مطالب */}
        {headings.length > 0 && (
          <aside className="hidden lg:block lg:col-span-3 sticky top-32 h-fit">
            <div className="border-r-2 border-outline-variant/20 pr-6 py-4">
              <h4 className="text-xl font-bold text-primary mb-6">فهرست مطالب</h4>
              <ul className="space-y-4">
                {headings.map((heading) => (
                  <li key={heading.id}>
                    <a
                      href={`#${heading.id}`}
                      className={`block text-sm text-on-surface-variant hover:text-primary transition-all duration-300 ${
                        activeSection === heading.id ? 'text-primary font-bold border-r-2 border-primary pr-3' : ''
                      }`}
                    >
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 p-6 bg-primary-container rounded-xl text-on-primary">
              <h5 className="text-lg font-bold mb-3">نارژین را امتحان کنید</h5>
              <p className="text-sm mb-4 opacity-80">مدیریت هوشمند سالن زیبایی با استانداردهای جهانی.</p>
              <button className="w-full py-3 bg-secondary-container text-on-secondary-container font-medium rounded-lg hover:shadow-lg transition-all duration-300">
                دریافت نسخه دمو
              </button>
            </div>
          </aside>
        )}

        {/* محتوای اصلی */}
        <article className={`${headings.length > 0 ? 'lg:col-span-9 lg:pr-8' : 'lg:col-span-12 max-w-4xl mx-auto'}`}>
          {/* تصویر مقاله */}
          {article.image && (
            <div className="relative aspect-video rounded-2xl overflow-hidden mb-8 bg-primary-fixed/10">
              <img
                className="w-full h-full object-cover"
                alt={article.title}
                src={article.image}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            </div>
          )}

          {/* محتوای Markdown */}
          <div 
            className="prose prose-lg prose-primary max-w-none"
            dangerouslySetInnerHTML={{ 
              __html: renderContent(article.content || article.meta_description || '') 
            }}
          />

          {/* برچسب‌ها و اشتراک‌گذاری */}
          <div className="border-t border-outline-variant/30 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-1.5 bg-surface-container-high text-on-surface-variant rounded-full text-sm font-medium">
                مدیریت سالن
              </span>
              <span className="px-4 py-1.5 bg-surface-container-high text-on-surface-variant rounded-full text-sm font-medium">
                نوبت‌دهی آنلاین
              </span>
              <span className="px-4 py-1.5 bg-surface-container-high text-on-surface-variant rounded-full text-sm font-medium">
                نارژین
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-on-surface-variant">اشتراک‌گذاری:</span>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant hover:bg-primary hover:text-white transition-all duration-300">
                <FaShareAlt className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 flex items-center justify-center rounded-full border border-outline-variant hover:bg-primary hover:text-white transition-all duration-300">
                <FaBookmark className="w-4 h-4" />
              </button>
            </div>
          </div>
        </article>
      </div>

      {/* مقالات پیشنهادی */}
      <section className="bg-surface-container-low py-16 md:py-24 border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-12 text-center">
            مقالات پیشنهادی
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {relatedArticles.map((post, index) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-surface rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-400 border border-outline-variant/10"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    alt={post.title}
                    src={post.image}
                  />
                </div>
                <div className="p-6">
                  <span className="text-primary text-sm font-medium block mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold text-on-surface mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-on-surface-variant mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary font-bold text-sm">
                    ادامه مطلب
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}