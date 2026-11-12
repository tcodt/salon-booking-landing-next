import type { MetadataRoute } from "next";

export const revalidate = 3600; // هر ساعت به‌روز می‌شود

const baseUrl = "https://narjin.ir";
const SITE_INTERNAL = process.env.INTERNAL_SITE_URL || "http://127.0.0.1:3000";

type ArticleItem = {
  slug?: string;
  is_published?: boolean;
  created_at?: string;
  updated_at?: string;
};

async function getArticles(): Promise<ArticleItem[]> {
  try {
    const res = await fetch(`${SITE_INTERNAL}/api/articles/`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return [];
    const j: ArticleItem[] | { results?: ArticleItem[]; data?: ArticleItem[] } =
      await res.json();
    if (Array.isArray(j)) return j;
    return j.results ?? j.data ?? [];
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = ["", "/features", "/pricing", "/blog", "/about", "/terms", "/privacy"];

  const pages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.7,
  }));

  const articles: MetadataRoute.Sitemap = (await getArticles())
    .filter((a) => a.slug && a.is_published !== false)
    .map((a) => ({
      url: `${baseUrl}/blog/${a.slug}`,
      lastModified: a.updated_at || a.created_at,
      changeFrequency: "monthly",
      priority: 0.6,
    }));

  return [...pages, ...articles];
}
