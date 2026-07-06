"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // Determine which nav item is active based on the current path
  const getActiveItem = () => {
    if (pathname === "/" || pathname === "") return "home";
    if (pathname.startsWith("/features")) return "features";
    if (pathname.startsWith("/pricing")) return "pricing";
    if (pathname.startsWith("/about") || pathname === "#about") return "about";
    return "home";
  };

  const activeItem = getActiveItem();

  const linkClassName = (item: string) =>
    activeItem === item
      ? "text-primary font-bold border-b-2 border-primary pb-1 font-body-md text-body-md"
      : "text-on-surface-variant hover:text-primary transition-colors font-body-md text-body-md";

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/30 shadow-sm">
      <div className="flex flex-row-reverse justify-between items-center px-margin-mobile md:px-margin-desktop h-20 w-full max-w-7xl mx-auto">
        <div className="font-headline-md text-headline-md font-bold text-primary">
          نارژین
        </div>
        <div className="hidden md:flex flex-row-reverse gap-lg items-center">
          <Link className={linkClassName("home")} href="/">
            خانه
          </Link>
          <Link className={linkClassName("features")} href="/features">
            ویژگی‌ها
          </Link>
          <Link className={linkClassName("pricing")} href="/pricing">
            قیمت‌گذاری
          </Link>
          <Link className={linkClassName("blog")} href="/blog">
            بلاگ
          </Link>
        </div>
        <button className="bg-primary text-on-primary px-lg py-sm rounded-xl font-label-md text-label-md active:scale-95 transition-all duration-200">
          شروع کنید
        </button>
      </div>
    </nav>
  );
}
