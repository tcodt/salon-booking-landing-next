import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "قوانین و مقررات | نارژین",
  description:
    "شرایط استفاده از خدمات نارژین، حساب کاربری، پلن‌ها، پرداخت، تعهدات کاربران و مسئولیت‌های طرفین.",
};

const LAST_UPDATED = "۲۵ مهر ۱۴۰۴";

const toc = [
  { id: "intro", label: "مقدمه" },
  { id: "definitions", label: "۱. تعاریف" },
  { id: "acceptance", label: "۲. پذیرش شرایط" },
  { id: "account", label: "۳. حساب کاربری" },
  { id: "plans", label: "۴. خدمات و پلن‌ها" },
  { id: "payment", label: "۵. پرداخت و بازگشت وجه" },
  { id: "user-obligations", label: "۶. تعهدات کاربر" },
  { id: "narjin-obligations", label: "۷. تعهدات نارژین" },
  { id: "sms", label: "۸. پیامک و ارتباطات" },
  { id: "ip", label: "۹. مالکیت معنوی" },
  { id: "liability", label: "۱۰. محدودیت مسئولیت" },
  { id: "termination", label: "۱۱. تعلیق و پایان حساب" },
  { id: "changes", label: "۱۲. تغییر قوانین" },
  { id: "law", label: "۱۳. قانون حاکم و حل اختلاف" },
  { id: "contact", label: "۱۴. تماس" },
];

const sectionClass =
  "scroll-mt-28 mb-10 border-b border-primary-home/10 pb-8 last:border-0";
const h2Class = "mb-4 text-lg font-extrabold text-primary-home sm:text-xl";
const pClass = "mb-3 text-base leading-[1.9] text-[#3d5a4c]";
const ulClass =
  "mb-3 list-disc space-y-2 pr-5 text-base leading-[1.9] text-[#3d5a4c]";

export default function TermsPage() {
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
            <li className="font-medium text-primary-home">قوانین و مقررات</li>
          </ol>
        </nav>

        <header className="mb-8 max-w-3xl">
          <h1 className="mb-3 text-2xl font-extrabold text-primary-home sm:text-3xl">
            قوانین و مقررات
          </h1>
          <p className="text-sm text-[#5a7266]">آخرین به‌روزرسانی: {LAST_UPDATED}</p>
          <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm leading-relaxed text-amber-950">
            این صفحه پیش‌نویس محصولی است، نه تأییدیه حقوقی نهایی. متن باید با
            رفتار واقعی سامانه و الزامات حقوقی قابل اجرا هماهنگ شود و پیش از
            اتکای حقوقی توسط مشاور حقوقی بررسی شود.
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
                استفاده از خدمات نارژین به معنای پذیرش این قوانین است. لطفاً پیش
                از ثبت‌نام، آن‌ها را به‌دقت بخونید. نسخهٔ قابل اتکا همان نسخه‌ای
                است که در زمان استفاده شما در این صفحه منتشر شده است.
              </p>
            </section>

            <section id="definitions" className={sectionClass}>
              <h2 className={h2Class}>۱. تعاریف</h2>
              <ul className={ulClass}>
                <li>
                  <strong className="text-[#15241c]">«نارژین» یا «ما»</strong>:
                  ارائه‌دهنده پلتفرم مدیریت و نوبت‌دهی آنلاین سالن‌های زیبایی در
                  نشانی narjin.ir.
                </li>
                <li>
                  <strong className="text-[#15241c]">«کاربر»</strong>: صاحب یا
                  مدیر سالنی که در نارژین حساب ایجاد می‌کند.
                </li>
                <li>
                  <strong className="text-[#15241c]">«مشتری»</strong>: فردی که از
                  طریق لینک رزرو سالن کاربر نوبت ثبت می‌کند.
                </li>
                <li>
                  <strong className="text-[#15241c]">«خدمات»</strong>: امکاناتی
                  که در محصول فعال‌اند؛ از جمله رزرو آنلاین، مدیریت مشتریان و
                  کارکنان، یادآوری پیامکی (بسته به پلن) و گزارش‌های مالی.
                </li>
              </ul>
            </section>

            <section id="acceptance" className={sectionClass}>
              <h2 className={h2Class}>۲. پذیرش شرایط</h2>
              <p className={pClass}>
                با ثبت‌نام یا استفاده از خدمات، اعلام می‌کنید که قوانین و سیاست
                حریم خصوصی را مطالعه کرده‌اید. ادامه استفاده از خدمات باید مطابق
                شرایط معتبر و قابل اجرای این توافق باشد.
              </p>
              <p className={pClass}>
                سیاست حریم خصوصی در صفحه{" "}
                <Link href="/privacy" className="font-semibold text-primary-home underline-offset-2 hover:underline">
                  حریم خصوصی
                </Link>{" "}
                در دسترس است.
              </p>
            </section>

            <section id="account" className={sectionClass}>
              <h2 className={h2Class}>۳. حساب کاربری</h2>
              <ul className={ulClass}>
                <li>کاربر باید اطلاعات صحیح و به‌روز ارائه کند.</li>
                <li>کاربر مسئول حفاظت از اطلاعات ورود و دسترسی‌های حساب خود است.</li>
                <li>
                  در صورت مشاهده دسترسی غیرمجاز، در اسرع وقت از طریق مسیرهای
                  تماس اعلام‌شده در سایت اطلاع دهید.
                </li>
                <li>
                  مدیریت نقش‌ها و دسترسی‌ها در حد امکانات موجود پنل بر عهده
                  کاربر است.
                </li>
              </ul>
            </section>

            <section id="plans" className={sectionClass}>
              <h2 className={h2Class}>۴. خدمات و پلن‌ها</h2>
              <p className={pClass}>
                امکانات، محدودیت‌ها و هزینه‌های هر پلن در صفحه{" "}
                <Link href="/pricing" className="font-semibold text-primary-home underline-offset-2 hover:underline">
                  تعرفه‌ها
                </Link>{" "}
                اعلام می‌شود. در حال حاضر پلن‌های «شروع» (رایگان)، «حرفه‌ای» و
                «سازمانی» در سایت معرفی شده‌اند.
              </p>
            </section>

            <section id="payment" className={sectionClass}>
              <h2 className={h2Class}>۵. پرداخت و بازگشت وجه</h2>
              <p className={pClass}>
                برای پلن‌های غیررایگان، هزینه اشتراک طبق تعرفه اعلام‌شده در زمان
                خرید محاسبه می‌شود. جزئیات دوره پرداخت، درگاه، رسید، تمدید، لغو و
                سیاست بازگشت وجه باید مطابق فرآیند واقعی محصول باشد.
              </p>
              <p className={pClass}>
                تا زمان انتشار سیاست رسمی بازگشت وجه، ادعای خاصی درباره مهلت یا
                درصد بازگشت در اینجا مطرح نمی‌شود. برای پرسش از بخش تماس استفاده
                کنید.
              </p>
            </section>

            <section id="user-obligations" className={sectionClass}>
              <h2 className={h2Class}>۶. تعهدات کاربر</h2>
              <ul className={ulClass}>
                <li>استفاده از خدمات در چهارچوب قوانین قابل اجرا</li>
                <li>رعایت حقوق مشتریان سالن و صحت اطلاعات ثبت‌شده</li>
                <li>
                  دریافت مجوز یا رضایت لازم برای جمع‌آوری و استفاده از اطلاعات
                  مشتریان، در موارد مقتضی
                </li>
                <li>رعایت الزامات قانونی مربوط به ارسال پیامک و محتوای ارتباطی</li>
                <li>
                  خودداری از تلاش برای نفوذ، ایجاد اختلال یا دور زدن محدودیت‌های
                  سامانه
                </li>
              </ul>
            </section>

            <section id="narjin-obligations" className={sectionClass}>
              <h2 className={h2Class}>۷. تعهدات نارژین</h2>
              <p className={pClass}>
                نارژین برای ارائه پایدار خدمات و رسیدگی به درخواست‌های پشتیبانی
                تلاش می‌کند. ممکن است در نگهداری یا به‌روزرسانی، اختلال موقت رخ
                دهد. تعهدات قطعی دسترس‌پذیری یا جبران خسارت فقط در صورت سیاست
                رسمی اعلام می‌شوند.
              </p>
            </section>

            <section id="sms" className={sectionClass}>
              <h2 className={h2Class}>۸. پیامک و ارتباطات</h2>
              <p className={pClass}>
                در پلن‌هایی که پیامک یادآوری یا تأیید نوبت فعال است، پیام‌ها در
                چارچوب امکانات همان پلن ارسال می‌شوند. هزینه و سقف ارسال ممکن است
                بخشی از پلن یا جداگانه باشد؛ جزئیات در تعرفه و پنل اعلام می‌شود.
              </p>
              <p className={pClass}>
                کاربر مسئول محتوای پیام‌های مرتبط با سالن خود است. برای پرسش
                درباره تنظیمات پیام، از پشتیبانی استفاده کنید.
              </p>
            </section>

            <section id="ip" className={sectionClass}>
              <h2 className={h2Class}>۹. مالکیت معنوی</h2>
              <p className={pClass}>
                حقوق نرم‌افزار، طراحی و نشان نارژین محفوظ است. داده‌هایی که
                کاربران وارد می‌کنند متعلق به کاربر است و طبق سیاست حریم خصوصی
                پردازش می‌شود.
              </p>
            </section>

            <section id="liability" className={sectionClass}>
              <h2 className={h2Class}>۱۰. محدودیت مسئولیت</h2>
              <p className={pClass}>
                نارژین خدمات را در حد امکانات موجود ارائه می‌دهد و برای تداوم
                سرویس تلاش می‌کند. هر سقف مسئولیت مالی باید توسط مسئول حقوقی
                تنظیم شود؛ در این پیش‌نویس عدد مشخصی درج نشده است.
              </p>
            </section>

            <section id="termination" className={sectionClass}>
              <h2 className={h2Class}>۱۱. تعلیق و پایان حساب</h2>
              <p className={pClass}>
                در صورت نقض جدی قوانین یا سوءاستفاده، ممکن است دسترسی محدود یا
                تعلیق شود. درباره خروجی داده و حذف، از طریق پشتیبانی و در حد
                امکانات سیستم اقدام می‌شود.
              </p>
            </section>

            <section id="changes" className={sectionClass}>
              <h2 className={h2Class}>۱۲. تغییر قوانین</h2>
              <p className={pClass}>
                این صفحه ممکن است به‌روزرسانی شود. تاریخ آخرین به‌روزرسانی در
                بالای صفحه درج می‌شود.
              </p>
            </section>

            <section id="law" className={sectionClass}>
              <h2 className={h2Class}>۱۳. قانون حاکم و حل اختلاف</h2>
              <p className={pClass}>
                هر اشاره به قانون حاکم یا مرجع قضایی باید توسط مشاور حقوقی بررسی
                شود. در این پیش‌نویس مرجع رسیدگی خاصی تعیین نشده است.
              </p>
            </section>

            <section id="contact" className={sectionClass}>
              <h2 className={h2Class}>۱۴. تماس</h2>
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
                    فرم تماس در صفحه اصلی
                  </Link>
                </li>
              </ul>
            </section>

            <div className="flex flex-wrap gap-4 pt-2">
              <Link href="/privacy" className="text-sm font-semibold text-primary-home underline-offset-2 hover:underline">
                مشاهده سیاست حریم خصوصی
              </Link>
              <a href="#intro" className="text-sm font-semibold text-[#5a7266] underline-offset-2 hover:underline">
                بازگشت به بالا
              </a>
            </div>
          </article>
        </div>
      </div>
    </main>
  );
}
