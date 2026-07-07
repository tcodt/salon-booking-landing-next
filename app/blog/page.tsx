"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaClock, FaArrowLeft, FaChevronDown } from "react-icons/fa";
import Image from "next/image";

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

export default function BlogPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [visiblePosts, setVisiblePosts] = useState(6);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
      setError(null);

      try {
        console.log("📤 درخواست به API...");
        const response = await fetch(
          "https://queuingprojectapi.pythonanywhere.com/landing/article/",
        );

        console.log("📥 وضعیت پاسخ:", response.status);

        if (!response.ok) {
          throw new Error(`خطا ${response.status}: ${response.statusText}`);
        }

        const data = await response.json();
        console.log("✅ مقالات دریافت شدند:", data);

        if (Array.isArray(data)) {
          const published = data.filter(
            (item: Article) => item.is_published !== false,
          );
          console.log("📰 مقالات منتشر شده:", published.length);
          setArticles(published);
        } else {
          throw new Error("داده دریافتی معتبر نیست");
        }
      } catch (err) {
        console.error("❌ خطا:", err);
        setError(
          err instanceof Error ? err.message : "مشکلی در دریافت مقالات پیش آمد",
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString("fa-IR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    } catch {
      return dateString;
    }
  };

  const displayedPosts = articles.slice(0, visiblePosts);
  const hasMorePosts = visiblePosts < articles.length;

  const loadMorePosts = () => {
    setIsLoadingMore(true);
    setTimeout(() => {
      setVisiblePosts((prev) => Math.min(prev + 3, articles.length));
      setIsLoadingMore(false);
    }, 800);
  };

  const getExcerpt = (content: string, maxLength: number = 120) => {
    if (!content) return "";
    const plainText = content.replace(/<[^>]*>/g, "");
    if (plainText.length <= maxLength) return plainText;
    return plainText.slice(0, maxLength) + "...";
  };

  const getInitial = (title: string) => {
    if (!title) return "ن";
    return title.charAt(0);
  };

  return (
    <main className="max-w-7xl mx-auto px-4 md:px-12 py-8 md:py-12 mt-20">
      <section className="mb-8 md:mb-12 text-center md:text-right">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-4">
          آموزش‌ها
        </h1>
        <p className="text-base md:text-lg text-on-surface-variant max-w-2xl leading-relaxed">
          آخرین مقالات، راهنماها و آموزش‌های تخصصی مدیریت سالن زیبایی و
          کلینیک‌های پوست و مو را در اینجا بخوانید.
        </p>
      </section>

      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant animate-pulse"
            >
              <div className="aspect-video bg-surface-container-high"></div>
              <div className="p-4 space-y-3">
                <div className="h-4 bg-surface-container-high rounded w-1/3"></div>
                <div className="h-6 bg-surface-container-high rounded w-3/4"></div>
                <div className="h-4 bg-surface-container-high rounded w-full"></div>
                <div className="h-4 bg-surface-container-high rounded w-2/3"></div>
                <div className="flex justify-between items-center pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-surface-container-high"></div>
                    <div className="h-3 bg-surface-container-high rounded w-20"></div>
                  </div>
                  <div className="w-5 h-5 bg-surface-container-high rounded"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {error && (
        <div className="text-center py-12">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 max-w-md mx-auto">
            <p className="text-red-600 text-base font-medium">❌ {error}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 bg-primary text-white px-6 py-2 rounded-lg hover:opacity-90 transition-colors"
            >
              تلاش مجدد
            </button>
          </div>
        </div>
      )}

      {!isLoading && !error && (
        <>
          {articles.length === 0 ? (
            <div className="text-center py-12">
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 max-w-md mx-auto">
                <p className="text-yellow-700 text-base">
                  در حال حاضر هیچ مقاله‌ای موجود نیست.
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
                {displayedPosts.map((post) => (
                  <article
                    key={post.id}
                    className="group bg-surface-container-lowest rounded-xl overflow-hidden border border-outline-variant shadow-[0px_4px_20px_rgba(6,95,70,0.05)] flex flex-col h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="flex flex-col h-full"
                    >
                      <div className="relative aspect-video overflow-hidden bg-primary-fixed/10">
                        {post.image ? (
                          <Image
                            width={300}
                            height={300}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            alt={post.title || "مقاله"}
                            src={post.image}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = "none";
                              const parent = target.parentElement;
                              if (parent) {
                                const placeholder =
                                  document.createElement("div");
                                placeholder.className =
                                  "w-full h-full bg-primary-fixed/20 flex items-center justify-center";
                                placeholder.innerHTML =
                                  '<span class="text-4xl text-primary/40">نارژین</span>';
                                parent.appendChild(placeholder);
                              }
                            }}
                          />
                        ) : (
                          <div className="w-full h-full bg-primary-fixed/20 flex items-center justify-center">
                            <span className="text-4xl text-primary/40">
                              نارژین
                            </span>
                          </div>
                        )}
                      </div>
                      <div className="p-4 flex flex-col grow">
                        <div className="flex items-center gap-1 text-on-surface-variant text-xs font-medium mb-2">
                          <FaClock className="text-sm" />
                          <span>{formatDate(post.created_at)}</span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-on-surface mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title || "بدون عنوان"}
                        </h3>
                        <p className="text-sm text-on-surface-variant line-clamp-3 mb-4">
                          {getExcerpt(
                            post.meta_description || post.content || "",
                            120,
                          )}
                        </p>
                        <div className="mt-auto flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-primary-fixed flex items-center justify-center text-primary text-xs font-bold">
                              {getInitial(post.title || "ن")}
                            </div>
                            <span className="text-xs font-medium text-on-surface-variant">
                              نارژین
                            </span>
                          </div>
                          <FaArrowLeft className="text-primary group-hover:-translate-x-2 transition-transform duration-300" />
                        </div>
                      </div>
                    </Link>
                  </article>
                ))}
              </div>

              {hasMorePosts && (
                <div className="flex justify-center mt-8">
                  <button
                    onClick={loadMorePosts}
                    disabled={isLoadingMore}
                    className="flex items-center gap-2 bg-surface-container border border-outline-variant hover:bg-outline-variant/20 transition-all px-6 py-3 rounded-full text-sm font-medium text-primary active:scale-95 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoadingMore ? (
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
            </>
          )}
        </>
      )}
    </main>
  );
}
