"use client";

import Link from "next/link";
import Image from "next/image";
import {
  FaInstagram,
  FaTelegramPlane,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

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

  const linkClass =
    "block py-1 text-sm text-white/80 transition-colors hover:text-[#8bd6b6] active:text-white";

  return (
    <footer className="mt-auto bg-[#0a0a0a] text-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 md:px-12 md:py-14">
        <div className="grid grid-cols-1 gap-8 min-[480px]:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr] lg:gap-10">
          <div className="min-w-0 text-center min-[480px]:text-right">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/images/logo-main.png"
                alt="نارژین"
                width={40}
                height={40}
                className="h-10 w-10 object-contain"
              />
              <span className="text-2xl font-extrabold text-white">نارژین</span>
            </Link>
            <p
              className="mx-auto mt-3 w-full min-w-0 text-sm leading-[1.9] text-white/75 min-[480px]:mx-0 lg:max-w-[18rem]"
              style={{ overflowWrap: "normal", wordBreak: "normal" }}
            >
              نرم‌افزار مدیریت و نوبت‌دهی آنلاین سالن زیبایی
            </p>
            <div className="mt-5 flex justify-center gap-3 min-[480px]:justify-start">
              <a href="https://instagram.com/narjin" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white/90 transition hover:border-[#8bd6b6] hover:text-[#8bd6b6]" aria-label="اینستاگرام">
                <FaInstagram className="h-4 w-4" />
              </a>
              <a href="https://t.me/narjin" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white/90 transition hover:border-[#8bd6b6] hover:text-[#8bd6b6]" aria-label="تلگرام">
                <FaTelegramPlane className="h-4 w-4" />
              </a>
              <a href="https://wa.me/989912146083" target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white/90 transition hover:border-[#8bd6b6] hover:text-[#8bd6b6]" aria-label="واتس‌اپ">
                <FaWhatsapp className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="text-center min-[480px]:text-right">
            <h3 className="mb-3 text-sm font-bold text-white">محصول</h3>
            <ul className="flex flex-col gap-1">
              <li><Link href="/features" className={linkClass}>قابلیت‌ها</Link></li>
              <li><Link href="/pricing" className={linkClass}>تعرفه‌ها</Link></li>
              <li><Link href="/blog" className={linkClass}>مقالات</Link></li>
              <li><Link href="/#faq" className={linkClass}>سؤالات متداول</Link></li>
            </ul>
          </div>

          <div className="text-center min-[480px]:text-right">
            <h3 className="mb-3 text-sm font-bold text-white">شرکت</h3>
            <ul className="flex flex-col gap-1">
              <li><Link href="/about" className={linkClass}>درباره ما</Link></li>
              <li><Link href="/#contact" className={linkClass}>تماس با ما</Link></li>
              <li><Link href="/terms" className={linkClass}>قوانین و مقررات</Link></li>
              <li><Link href="/privacy" className={linkClass}>حریم خصوصی</Link></li>
            </ul>
          </div>

          <div className="text-center min-[480px]:text-right">
            <h3 className="mb-3 text-sm font-bold text-white">تماس</h3>
            <ul className="flex flex-col gap-1">
              <li><Link href="/#contact" className={linkClass}>تماس با ما</Link></li>
              <li>
                <a href="mailto:info@narjin.ir" className={linkClass}>
                  info@narjin.ir
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs leading-relaxed text-white/55">
          © {currentYear} تمامی حقوق برای <span className="font-medium text-white/85">نارژین</span> محفوظ است.
        </div>
      </div>
    </footer>
  );
}
