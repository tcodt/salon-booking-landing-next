import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { JsonLd, SITE_URL, breadcrumb } from "@/lib/jsonld";

const SITE_INTERNAL = process.env.INTERNAL_SITE_URL || "http://127.0.0.1:3000";

type ArticleMeta = {
  title?: string;
  meta_title?: string;
  meta_description?: string;
  image?: string | null;
  created_at?: string;
  updated_at?: string;
  is_published?: boolean;
};

/** null = خطای موقتی (API در دسترس نیست)؛ "missing" = مقاله واقعاً وجود ندارد (باید 404 واقعی داد). */
async function getArticle(slug: string): Promise<ArticleMeta | "missing" | null> {
  try {
    const res = await fetch(
      `${SITE_INTERNAL}/api/articles/${encodeURIComponent(slug)}`,
      { next: { revalidate: 300 } }
    );
    if (res.status === 404) return "missing";
    if (!res.ok) return null;
    const j: ArticleMeta & { data?: ArticleMeta } = await res.json();
    return j.data ?? j;
  } catch {
    return null;
  }
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const found = await getArticle(slug);
  if (found === "missing") notFound();
  const a = found;
  const title = a?.meta_title || a?.title || "مقاله | نارژین";
  const description = a?.meta_description || undefined;
  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { title, description, url: `/blog/${slug}`, type: "article" },
  };
}

function abs(src?: string | null) {
  if (!src) return undefined;
  if (/^https?:\/\//.test(src)) return src;
  return `https://api.narjin.ir/${src.replace(/^\/+/, "")}`;
}

export default async function ArticleLayout({ children, params }: Props & { children: ReactNode }) {
  const { slug } = await params;
  const found = await getArticle(slug);
  // مقالهٔ ناموجود یا منتشرنشده: پاسخ 404 واقعی (قبلاً 200 با صفحهٔ خالی = soft-404)
  if (found === "missing" || (found && found.is_published === false)) notFound();
  const a = found || null;
  return (
    <>
      <JsonLd
        data={[
          breadcrumb([{ name: "بلاگ", path: "/blog" }, { name: a?.title || "مقاله", path: `/blog/${slug}` }]),
          ...(a?.title
            ? [
                {
                  "@context": "https://schema.org",
                  "@type": "BlogPosting",
                  headline: a.title,
                  description: a.meta_description || undefined,
                  image: abs(a.image),
                  datePublished: a.created_at,
                  dateModified: a.updated_at || a.created_at,
                  inLanguage: "fa-IR",
                  mainEntityOfPage: `${SITE_URL}/blog/${slug}`,
                  author: { "@type": "Organization", name: "نارژین" },
                  publisher: { "@id": `${SITE_URL}/#organization` },
                },
              ]
            : []),
        ]}
      />
      {children}
    </>
  );
}
