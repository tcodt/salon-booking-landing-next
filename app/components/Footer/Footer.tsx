"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaTelegramPlane,
  FaPhone,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

const PHONE_DISPLAY = "۰۹۹۱۲۱۴۶۰۸۳";
const PHONE_TEL = "09912146083";

export default function Footer() {
  const currentYear = (() => {
    try {
      return new Intl.DateTimeFormat("fa-IR-u-ca-persian", { year: "numeric" })
        .format(new Date())
        .replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)));
    } catch {
      return String(new Date().getFullYear() - 621);
    }
  })();

  const linkClass = "text-sm text-white/75 transition-colors hover:text-white";

  return (
    <footer className="mt-auto bg-primary-home text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 md:px-12 md:py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12">
          <div className="text-center sm:text-right">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image src="/images/logo-main.png" alt="نارژین" width={40} height={40} className="h-10 w-10 object-contain" />
              <span className="text-2xl font-extrabold text-white">نارژین</span>
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-white/75">
              نرم‌افزار مدیریت و نوبت‌دهی آنلاین سالن زیبایی
            </p>
            <div className="mt-5 flex justify-center gap-3 sm:justify-start">
              <a href="https://instagram.com/narjin" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/90 transition hover:bg-white/10" aria-label="اینستاگرام">
                <FaInstagram className="h-4 w-4" />
              </a>
              <a href="https://t.me/narjin" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/90 transition hover:bg-white/10" aria-label="تلگرام">
                <FaTelegramPlane className="h-4 w-4" />
              </a>
              <a href="https://wa.me/989912146083" target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white/90 transition hover:bg-white/10" aria-label="واتس‌اپ">
                <FaWhatsapp className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="text-center sm:text-right">
            <h3 className="mb-4 text-sm font-bold text-[#ffc329]">محصول</h3>
            <ul className="flex flex-col gap-2.5">
              <li><Link href="/features" className={linkClass}>قابلیت‌ها</Link></li>
              <li><Link href="/pricing" className={linkClass}>تعرفه‌ها</Link></li>
              <li><Link href="/blog" className={linkClass}>مقالات</Link></li>
              <li><Link href="/#faq" className={linkClass}>سؤالات متداول</Link></li>
            </ul>
          </div>

          <div className="text-center sm:text-right">
            <h3 className="mb-4 text-sm font-bold text-[#ffc329]">شرکت</h3>
            <ul className="flex flex-col gap-2.5">
              <li><Link href="/#contact" className={linkClass}>تماس با ما</Link></li>
              <li><Link href="/#pricing-preview" className={linkClass}>پلن‌ها</Link></li>
              <li><Link href="/" className={linkClass}>صفحه اصلی</Link></li>
            </ul>
            <p className="mt-3 text-xs text-white/50">
              صفحات درباره ما، قوانین و حریم خصوصی هنوز در سایت تعریف نشده‌اند.
            </p>
          </div>

          <div className="text-center sm:text-right">
            <h3 className="mb-4 text-sm font-bold text-[#ffc329]">تماس</h3>
            <ul className="flex flex-col gap-3 text-sm text-white/85">
              <li>
                <a href={`tel:${PHONE_TEL}`} className="inline-flex items-center justify-center gap-2 hover:text-white sm:justify-start">
                  <FaPhone className="h-3.5 w-3.5 shrink-0 text-[#ffc329]" />
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li>
                <a href="mailto:info@narjin.ir" className="inline-flex items-center justify-center gap-2 hover:text-white sm:justify-start">
                  <FaEnvelope className="h-3.5 w-3.5 shrink-0 text-[#ffc329]" />
                  info@narjin.ir
                </a>
              </li>
              <li className="text-white/90">پشتیبانی ۲۴ ساعته</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/15 pt-6 text-center text-xs text-white/60">
          © {currentYear} تمامی حقوق برای <span className="font-medium text-white/90">نارژین</span> محفوظ است.
        </div>
      </div>
    </footer>
  );
}
