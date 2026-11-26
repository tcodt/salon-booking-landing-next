// دریافت فهرست مقالات از API نارژین؛ هم آرایهٔ ساده و هم پاسخ صفحه‌بندی‌شده
// ({count,next,previous,results}) را می‌پذیرد و همهٔ صفحه‌ها را تا سقف امن جمع می‌کند.

export type ArticleListItem = {
  id: number;
  title: string;
  slug: string;
  meta_title?: string;
  meta_description?: string;
  content?: string;
  image?: string | null;
  is_published?: boolean;
  created_at?: string;
};

const BASE = `${process.env.NARJIN_API_URL ?? "https://api.narjin.ir"}/landing/article/`;
const MAX_PAGES = 20;

function isArticle(x: unknown): x is ArticleListItem {
  if (!x || typeof x !== "object") return false;
  const a = x as Record<string, unknown>;
  return typeof a.slug === "string" && a.slug !== "" && typeof a.title === "string";
}

type Page = { items: unknown[]; hasNext: boolean };

function readPage(data: unknown): Page | null {
  if (Array.isArray(data)) return { items: data, hasNext: false };
  if (data && typeof data === "object") {
    const d = data as { results?: unknown; next?: unknown };
    if (Array.isArray(d.results)) return { items: d.results, hasNext: typeof d.next === "string" && d.next !== "" };
  }
  return null; // ساختار نامعتبر
}

/** null = خطا (API در دسترس نیست یا ساختار نامعتبر)؛ [] = پاسخ معتبرِ خالی. */
export async function fetchArticles(): Promise<ArticleListItem[] | null> {
  const all: ArticleListItem[] = [];
  try {
    for (let page = 1; page <= MAX_PAGES; page++) {
      const res = await fetch(page === 1 ? BASE : `${BASE}?page=${page}`, {
        headers: { accept: "application/json" },
        next: { revalidate: 60 },
        signal: AbortSignal.timeout(8000),
      });
      if (!res.ok) return page === 1 ? null : all;
      const parsed = readPage(await res.json());
      if (!parsed) return page === 1 ? null : all;
      all.push(...parsed.items.filter(isArticle));
      if (!parsed.hasNext) break;
    }
  } catch (err) {
    console.error("articles fetch error:", err instanceof Error ? err.message : err);
    return all.length ? all : null;
  }
  return all.filter((a) => a.is_published !== false);
}
