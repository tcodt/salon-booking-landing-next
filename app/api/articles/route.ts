import { NextResponse } from "next/server";
import { fetchArticles } from "@/lib/articles";

// همیشه آرایهٔ ساده برمی‌گرداند (سازگار با sitemap و کلاینت)، حتی اگر API صفحه‌بندی‌شده باشد.
export async function GET() {
  const articles = await fetchArticles();
  if (articles === null) {
    return NextResponse.json(
      { error: true, message: "دریافت مقالات از سرور ممکن نشد" },
      { status: 502 },
    );
  }
  return NextResponse.json(articles);
}
