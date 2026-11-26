import type { MetadataRoute } from "next";

// نبودِ robots.txt تا امروز باعث می‌شد sitemap به کراولرها معرفی نشود.
// مسیرهای /api/ فقط پروکسی JSON برای فرانت‌اند هستند و محتوای قابل‌ایندکس ندارند.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: "https://narjin.ir/sitemap.xml",
  };
}
