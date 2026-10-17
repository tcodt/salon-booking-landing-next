import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "قوانین و مقررات | نارژین",
  description: "قوانین و مقررات استفاده از خدمات نارژین",
};

export default function TermsPage() {
  return (
    <main className="min-h-[60vh] bg-background-home pt-28 pb-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h1 className="mb-4 text-2xl font-extrabold text-primary-home sm:text-3xl">قوانین و مقررات</h1>
        <p className="mb-6 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
          این متن پیش‌نویس اولیه است و باید توسط مسئول کسب‌وکار بازبینی و تأیید
          شود. محتوای حاضر به‌عنوان سند حقوقی نهایی محسوب نمی‌شود.
        </p>
        <div className="space-y-4 text-base leading-relaxed text-[#3d5a4c]">
          <p>
            استفاده از خدمات نارژین به‌منزله پذیرش شرایط عمومی استفاده از پنل و
            قوانین جاری کشور است.
          </p>
          <p>
            کاربر مسئول صحت اطلاعات ثبت‌شده در پنل و رعایت حریم خصوصی مشتریان
            خود است.
          </p>
          <p>
            برای پرسش درباره شرایط اشتراک یا پشتیبانی با{" "}
            <Link href="/#contact" className="font-semibold text-primary-home underline-offset-2 hover:underline">
              بخش تماس
            </Link>{" "}
            در ارتباط باشید.
          </p>
        </div>
      </div>
    </main>
  );
}
