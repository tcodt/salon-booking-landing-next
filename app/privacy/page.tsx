import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "سیاست حریم خصوصی | نارژین",
  description:
    "سیاست حریم خصوصی نارژین درباره جمع‌آوری، استفاده، نگهداری و حفاظت از اطلاعات کاربران و مشتریان سالن‌های زیبایی.",
};

const LAST_UPDATED = "۲۵ مهر ۱۴۰۴";

const toc = [
  { id: "intro", label: "مقدمه" },
  { id: "collect", label: "۱. اطلاعاتی که جمع‌آوری می‌کنیم" },
  { id: "use", label: "۲. نحوه استفاده از اطلاعات" },
  { id: "salon-customers", label: "۳. اطلاعات مشتریان سالن" },
  { id: "sms", label: "۴. پیامک‌ها و ارتباطات" },
  { id: "cookies", label: "۵. کوکی‌ها و اطلاعات فنی" },
  { id: "third-parties", label: "۶. ارائه اطلاعات به اشخاص ثالث" },
  { id: "retention", label: "۷. نگهداری و حذف اطلاعات" },
  { id: "security", label: "۸. امنیت اطلاعات" },
  { id: "rights", label: "۹. حقوق و درخواست‌های کاربران" },
  { id: "children", label: "۱۰. حریم خصوصی کودکان" },
  { id: "changes", label: "۱۱. تغییرات سیاست" },
  { id: "contact", label: "۱۲. تماس" },
];

const sectionClass =
  "scroll-mt-28 mb-10 border-b border-primary-home/10 pb-8 last:border-0";
const h2Class = "mb-4 text-lg font-extrabold text-primary-home sm:text-xl";
const pClass = "mb-3 text-base leading-[1.9] text-[#3d5a4c]";
const ulClass =
  "mb-3 list-disc space-y-2 pr-5 text-base leading-[1.9] text-[#3d5a4c]";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-background-home pt-24 pb-16 sm:pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <nav className="mb-8 text-sm text-[#5a7266]" aria-label="مسیر صفحه">
          <ol className="flex flex-wrap items-center gap-1.5">
            <li>
              <Link href="/" className="hover:text-primary-home">
                خانه
              </Link>
            </li>
            <li aria-hidden>←</li>
            <li className="font-medium text-primary-home">حریم خصوصی</li>
          </ol>
        </nav>

        <header className="mb-8 max-w-3xl">
          <h1 className="mb-3 text-2xl font-extrabold text-primary-home sm:text-3xl">
            سیاست حریم خصوصی
          </h1>
          <p className="text-sm text-[#5a7266]">آخرین به‌روزرسانی: {LAST_UPDATED}</p>
          <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-950">
            این صفحه پیش‌نویس سیاست حریم خصوصی است و باید با فرآیندهای واقعی
            سامانه و الزامات حقوقی هماهنگ شود. پیش از اتکای حقوقی، بازبینی مشاور
            حقوقی توصیه می‌شود.
          </p>
        </header>

        <div className="grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <nav
              aria-label="فهرست مطالب"
              className="rounded-2xl border border-primary-home/10 bg-white p-4 shadow-sm"
            >
              <p className="mb-3 text-sm font-bold text-primary-home">فهرست مطالب</p>
              <ul className="max-h-[50vh] space-y-1.5 overflow-y-auto text-sm lg:max-h-[70vh]">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block rounded-lg px-2 py-1.5 text-[#3d5a4c] transition hover:bg-primary-home/5 hover:text-primary-home"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <article className="min-w-0 max-w-3xl">
            <section id="intro" className={sectionClass}>
              <h2 className={h2Class}>مقدمه</h2>
              <p className={pClass}>
                در نارژین، حفاظت از اطلاعات کاربران و مشتریان سالن‌ها اهمیت دارد.
                این صفحه توضیح می‌دهد چه اطلاعاتی ممکن است پردازش شوند و برای چه
                اهدافی استفاده می‌شوند.
              </p>
            </section>

            <section id="collect" className={sectionClass}>
              <h2 className={h2Class}>۱. اطلاعاتی که جمع‌آوری می‌کنیم</h2>
              <ul className={ulClass}>
                <li>اطلاعات حساب کاربری و تماس (نام، تلفن، ایمیل در صورت ثبت)</li>
                <li>اطلاعات سالن، کارکنان و خدمات تعریف‌شده در پنل</li>
                <li>اطلاعات نوبت و مشتریان سالن که کاربر ثبت می‌کند</li>
                <li>اطلاعات مرتبط با اشتراک و پرداخت، در حد لازم برای ارائه خدمت</li>
                <li>اطلاعات فنی ضروری برای امنیت و رفع خطا</li>
              </ul>
              <p className={pClass}>
                داده‌های فرم تماس لندینگ برای پاسخ‌گویی به درخواست شما استفاده
                می‌شود.
              </p>
            </section>

            <section id="use" className={sectionClass}>
              <h2 className={h2Class}>۲. نحوه استفاده از اطلاعات</h2>
              <ul className={ulClass}>
                <li>ارائه رزرو آنلاین و مدیریت نوبت‌ها</li>
                <li>مدیریت مشتریان و کارکنان در پنل</li>
                <li>نمایش گزارش‌های مرتبط با عملکرد سالن</li>
                <li>پشتیبانی و پاسخ به درخواست‌ها</li>
                <li>حفظ امنیت و پایداری سامانه</li>
              </ul>
            </section>

            <section id="salon-customers" className={sectionClass}>
              <h2 className={h2Class}>۳. اطلاعات مشتریان سالن</h2>
              <p className={pClass}>
                اطلاعات مشتریان ممکن است توسط مدیر سالن برای نوبت‌دهی ثبت شود.
                دسترسی تابع نقش‌های پنل است. سالن مسئول رعایت قوانین مربوط به
                داده‌های مشتریان خود است. نقش حقوقی قطعی هر طرف در این پیش‌نویس
                اعلام نشده است.
              </p>
            </section>

            <section id="sms" className={sectionClass}>
              <h2 className={h2Class}>۴. پیامک‌ها و ارتباطات</h2>
              <p className={pClass}>
                در پلن‌هایی که پیامک فعال است، پیام‌هایی مانند تأیید یا یادآوری
                نوبت ممکن است ارسال شود. برای پرسش درباره تنظیمات، از پشتیبانی
                استفاده کنید. روش‌هایی که در پنل پیاده‌سازی نشده‌اند وعده داده
                نمی‌شوند.
              </p>
            </section>

            <section id="cookies" className={sectionClass}>
              <h2 className={h2Class}>۵. کوکی‌ها و اطلاعات فنی</h2>
              <p className={pClass}>
                برای کارکرد سایت و پنل ممکن است از کوکی یا فضای ذخیره مرورگر و
                نشست استفاده شود. اگر ابزار تحلیل یا تبلیغات شخص ثالث به‌طور
                مشخص فعال نباشد، به‌عنوان خدمت قطعی اعلام نمی‌شود.
              </p>
            </section>

            <section id="third-parties" className={sectionClass}>
              <h2 className={h2Class}>۶. ارائه اطلاعات به اشخاص ثالث</h2>
              <p className={pClass}>
                ممکن است برای میزبانی، پرداخت یا پیامک به ارائه‌دهندگان فنی نیاز
                باشد. انتقال محدود به هدف ارائه همان خدمت است. نام دقیق
                ارائه‌دهندگان باید بر اساس معماری واقعی مستند شود.
              </p>
            </section>

            <section id="retention" className={sectionClass}>
              <h2 className={h2Class}>۷. نگهداری و حذف اطلاعات</h2>
              <p className={pClass}>
                اطلاعات تا زمان لازم برای ارائه خدمت، پشتیبانی یا الزامات قانونی
                نگهداری می‌شوند. درخواست اصلاح یا حذف از طریق تماس پیگیری می‌شود.
                حذف فوری از همه نسخه‌های پشتیبان تضمین نمی‌شود مگر فرآیند رسمی
                تعریف شده باشد.
              </p>
            </section>

            <section id="security" className={sectionClass}>
              <h2 className={h2Class}>۸. امنیت اطلاعات</h2>
              <p className={pClass}>
                اقدامات متعارف فنی و سازمانی در حد امکانات زیرساخت به کار گرفته
                می‌شود. امنیت مطلق تضمین نمی‌شود.
              </p>
            </section>

            <section id="rights" className={sectionClass}>
              <h2 className={h2Class}>۹. حقوق و درخواست‌های کاربران</h2>
              <p className={pClass}>
                برای دسترسی، اصلاح یا حذف اطلاعات حساب، از ایمیل یا فرم تماس
                استفاده کنید. رسیدگی در حد امکانات عملیاتی و الزامات قانونی انجام
                می‌شود.
              </p>
            </section>

            <section id="children" className={sectionClass}>
              <h2 className={h2Class}>۱۰. حریم خصوصی کودکان</h2>
              <p className={pClass}>
                مخاطب اصلی خدمات، مدیران و کارکنان سالن هستند. پردازش داده‌های
                افراد زیر سن قانونی در صورت طرح، باید مطابق مقررات و با مسئولیت
                کاربر سالن باشد.
              </p>
            </section>

            <section id="changes" className={sectionClass}>
              <h2 className={h2Class}>۱۱. تغییرات سیاست</h2>
              <p className={pClass}>
                این سیاست ممکن است به‌روزرسانی شود. تاریخ آخرین به‌روزرسانی در
                بالای صفحه درج می‌شود.
              </p>
            </section>

            <section id="contact" className={sectionClass}>
              <h2 className={h2Class}>۱۲. تماس</h2>
              <ul className={ulClass}>
                <li>
                  ایمیل:{" "}
                  <a href="mailto:info@narjin.ir" className="font-semibold text-primary-home hover:underline">
                    info@narjin.ir
                  </a>
                </li>
                <li>
                  تلفن:{" "}
                  <a href="tel:09912146083" className="font-semibold text-primary-home hover:underline">
                    ۰۹۹۱۲۱۴۶۰۸۳
                  </a>
                </li>
                <li>
                  <Link href="/#contact" className="font-semibold text-primary-home hover:underline">
                    فرم تماس
                  </Link>
                </li>
              </ul>
              <p className={pClass}>
                همچنین{" "}
                <Link href="/terms" className="font-semibold text-primary-home underline-offset-2 hover:underline">
                  قوانین و مقررات
                </Link>{" "}
                را مطالعه کنید.
              </p>
            </section>

            <a href="#intro" className="text-sm font-semibold text-[#5a7266] underline-offset-2 hover:underline">
              بازگشت به بالا
            </a>
          </article>
        </div>
      </div>
    </main>
  );
}
