import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "درباره ما | نارژین",
  description: "آشنایی با نرم‌افزار مدیریت و نوبت‌دهی آنلاین سالن زیبایی نارژین",
};

export default function AboutPage() {
  return (
    <main className="min-h-[60vh] bg-background-home pt-28 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="mb-6 text-2xl font-extrabold text-primary-home sm:text-3xl">درباره نارژین</h1>
        <div className="space-y-4 text-base leading-relaxed text-[#3d5a4c]">
          <p>
            نارژین نرم‌افزار مدیریت و نوبت‌دهی آنلاین برای سالن‌های زیبایی،
            آرایشگاه‌ها و مراکز خدمات مشابه است.
          </p>
          <p>
            هدف ما ساده‌تر کردن رزرو نوبت، مدیریت مشتریان و پیگیری عملکرد روزانه
            سالن در یک پنل واحد است.
          </p>
          <p>
            برای شروع رایگان می‌توانید از طریق{" "}
            <a href="https://panel.narjin.ir" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-home underline-offset-2 hover:underline">
              پنل نارژین
            </a>{" "}
            اقدام کنید یا از صفحه{" "}
            <Link href="/#contact" className="font-semibold text-primary-home underline-offset-2 hover:underline">
              تماس با ما
            </Link>{" "}
            درخواست مشاوره ثبت کنید.
          </p>
        </div>
      </div>
    </main>
  );
}
