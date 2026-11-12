import type { Metadata } from "next";
import type { ReactNode } from "react";

const SITE_INTERNAL = process.env.INTERNAL_SITE_URL || "http://127.0.0.1:3000";

type ArticleMeta = {
  title?: string;
  meta_title?: string;
  meta_description?: string;
};

async function getArticle(slug: string): Promise<ArticleMeta | null> {
  try {
    const res = await fetch(
      `${SITE_INTERNAL}/api/articles/${encodeURIComponent(slug)}`,
      { next: { revalidate: 300 } }
    );
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
  const a = await getArticle(slug);
  const title = a?.meta_title || a?.title || "مقاله | نارژین";
  const description = a?.meta_description || undefined;
  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: { title, description, url: `/blog/${slug}`, type: "article" },
  };
}

export default function ArticleLayout({ children }: { children: ReactNode }) {
  return children;
}
