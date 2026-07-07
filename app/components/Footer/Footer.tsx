"use client";

import Link from "next/link";
import { 
  FaInstagram, 
  FaTelegramPlane, 
  FaPhone, 
  FaEnvelope,
  FaWhatsapp
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface-container border-t border-outline-variant/30 mt-auto">
      <div className="max-w-7xl mx-auto px-4 md:px-12 py-8 md:py-16">
        {/* نسخه موبایل: نمایش به صورت ستونی */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
          
          {/* ستون اول: لوگو و شبکه‌های اجتماعی */}
          <div className="flex flex-col items-center sm:items-start gap-4 text-center sm:text-right">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-2xl font-extrabold text-primary">نارژین</span>
            </Link>
            <div className="flex gap-3 justify-center sm:justify-start">
              <a 
                href="https://instagram.com/narjin" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-pink-600 hover:border-pink-600 transition-all duration-300"
                aria-label="اینستاگرام"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              <a 
                href="https://t.me/narjin" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-blue-500 hover:border-blue-500 transition-all duration-300"
                aria-label="تلگرام"
              >
                <FaTelegramPlane className="w-4 h-4" />
              </a>
              <a 
                href="https://wa.me/989912146083" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-green-500 hover:border-green-500 transition-all duration-300"
                aria-label="واتس‌اپ"
              >
                <FaWhatsapp className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ستون دوم: لینک‌های سریع */}
          <div className="text-center sm:text-right">
            <h3 className="text-sm font-bold text-primary mb-3">لینک‌های سریع</h3>
            <ul className="flex flex-col gap-2">
              <li><Link href="/" className="text-sm text-on-surface-variant/70 hover:text-primary transition-colors">خانه</Link></li>
              <li><Link href="/features" className="text-sm text-on-surface-variant/70 hover:text-primary transition-colors">قابلیت‌ها</Link></li>
              <li><Link href="/pricing" className="text-sm text-on-surface-variant/70 hover:text-primary transition-colors">تعرفه‌ها</Link></li>
              <li><Link href="/blog" className="text-sm text-on-surface-variant/70 hover:text-primary transition-colors">وبلاگ</Link></li>
            </ul>
          </div>

          {/* ستون سوم: لینک‌های مفید */}
          <div className="text-center sm:text-right">
            <h3 className="text-sm font-bold text-primary mb-3">لینک‌های مفید</h3>
            <ul className="flex flex-col gap-2">
              <li><Link href="/about" className="text-sm text-on-surface-variant/70 hover:text-primary transition-colors">درباره ما</Link></li>
              <li><Link href="/contact" className="text-sm text-on-surface-variant/70 hover:text-primary transition-colors">تماس با ما</Link></li>
              <li><Link href="/terms" className="text-sm text-on-surface-variant/70 hover:text-primary transition-colors">قوانین و مقررات</Link></li>
              <li><Link href="/privacy" className="text-sm text-on-surface-variant/70 hover:text-primary transition-colors">حریم خصوصی</Link></li>
              <li><Link href="/faq" className="text-sm text-on-surface-variant/70 hover:text-primary transition-colors">سوالات متداول</Link></li>
            </ul>
          </div>

          {/* ستون چهارم: اطلاعات تماس */}
          <div className="text-center sm:text-right">
            <h3 className="text-sm font-bold text-primary mb-3">تماس با ما</h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a 
                  href="tel:09912146083" 
                  className="flex items-center justify-center sm:justify-start gap-3 text-sm text-on-surface-variant/70 hover:text-primary transition-colors group"
                >
                  <FaPhone className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>۰۹۹-۱۲۱۴۶۰۸۳</span>
                </a>
              </li>
              <li>
                <a 
                  href="mailto:info@narjin.ir" 
                  className="flex items-center justify-center sm:justify-start gap-3 text-sm text-on-surface-variant/70 hover:text-primary transition-colors group"
                >
                  <FaEnvelope className="w-4 h-4 text-primary flex-shrink-0" />
                  <span className="truncate">info@narjin.ir</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* بخش پایین فوتر - موبایل بهینه */}
        <div className="mt-8 md:mt-12 pt-6 border-t border-outline-variant/30 flex flex-col-reverse sm:flex-row justify-between items-center gap-4">
          {/* کپی رایت */}
          <p className="text-xs text-on-surface-variant/50 text-center sm:text-right">
            © {currentYear} تمامی حقوق برای <span className="text-primary font-medium">نارژین</span> محفوظ است.
          </p>
          
          {/* نمادهای اعتماد - موبایل بهینه */}
          <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-on-surface-variant/50">
            <span className="flex items-center gap-1">
              <span className="material-symbols-outlined text-green-600 text-sm">verified</span>
              <span className="hidden xs:inline">اتصال امن</span>
            </span>
            <span className="w-px h-3 bg-outline-variant/30"></span>
            <span>پشتیبانی ۲۴ ساعته</span>
            <span className="w-px h-3 bg-outline-variant/30 hidden xs:block"></span>
            <span className="hidden xs:inline">ضمانت کیفیت</span>
          </div>
        </div>
      </div>
    </footer>
  );
}