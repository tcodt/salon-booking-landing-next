import { fetchArticles } from "@/lib/articles";
import BlogList from "./blog-list";

// فهرست مقالات سمت سرور خوانده می‌شود تا در HTML اولیه باشد؛ هر ۶۰ ثانیه تازه می‌شود.
export const revalidate = 60;

export default async function BlogPage() {
  const articles = await fetchArticles(); // null = خطا؛ کلاینت دوباره تلاش می‌کند
  return <BlogList initialArticles={articles} />;
}
