import Link from "next/link";
import { MdPublic, MdShare } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bg-surface-container-low border-t border-outline-variant py-xl">
      <div className="container mx-auto px-margin-mobile max-w-7xl">
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-lg mb-xl">
          <div className="font-headline-sm text-headline-sm font-black text-primary">
            نارژین
          </div>
          <div className="flex flex-wrap justify-center gap-lg">
            <Link
              className="text-secondary hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all font-body-sm text-body-sm"
              href="#"
            >
              تماس با ما
            </Link>
            <Link
              className="text-secondary hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all font-body-sm text-body-sm"
              href="#"
            >
              قوانین و مقررات
            </Link>
            <Link
              className="text-secondary hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all font-body-sm text-body-sm"
              href="#"
            >
              حریم خصوصی
            </Link>
            <Link
              className="text-secondary hover:text-primary hover:underline decoration-primary underline-offset-4 transition-all font-body-sm text-body-sm"
              href="#"
            >
              سوالات متداول
            </Link>
          </div>
          <div className="flex gap-md">
            <Link
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">
                <MdShare />
              </span>
            </Link>
            <Link
              className="w-10 h-10 rounded-full border border-outline-variant flex items-center justify-center text-primary hover:bg-primary hover:text-on-primary transition-all"
              href="#"
            >
              <span className="material-symbols-outlined">
                <MdPublic />
              </span>
            </Link>
          </div>
        </div>
        <div className="text-center font-body-sm text-body-sm text-secondary opacity-60">
          © ۱۴۰۲ نارژین. تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}
