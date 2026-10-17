import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "حریم خصوصی | نارژین",
  description: "سیاست حریم خصوصی نارژین",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-[60vh] bg-background-home pt-28 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="mb-4 text-2xl font-extrabold text-primary-home sm:text-3xl">حریم خصوصی</h1>
        <p className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          این متن پیش‌نویس اولیه است و باید توسط مسئول کسب‌وکار بازبینی و تأیید
          شود. محتوای حاضر به‌عنوان سیاست نهایی حریم خصوصی محسوب نمی‌شود.
        </p>
        <div className="space-y-4 text-base leading-relaxed text-[#3d5a4c]">
          <p>
            نارژین اطلاعات تماس و داده‌های ضروری ثبت‌شده از طریق فرم‌های سایت یا
            پنل را برای پاسخ‌گویی، پشتیبانی و ارائه خدمت نگهداری می‌کند.
          </p>
          <p>
            اطلاعات کاربران و مشتریان سالن‌ها نباید بدون مجوز قانونی یا درخواست
            مراجع ذی‌صلاح در اختیار شخص ثالث قرار گیرد، مگر در چارچوب ارائه خود
            خدمت.
          </p>
          <p>
            برای درخواست اصلاح یا حذف اطلاعات تماس با{" "}
            <a href="mailto:info@narjin.ir" className="font-semibold text-primary-home underline-offset-2 hover:underline">
              info@narjin.ir
            </a>{" "}
            یا{" "}
            <Link href="/#contact" className="font-semibold text-primary-home underline-offset-2 hover:underline">
              فرم تماس
            </Link>{" "}
            اقدام کنید.
          </p>
        </div>
      </div>
    </main>
  );
}
