"use client";

import { useEffect, useRef } from "react";
import { MdStar } from "react-icons/md";

const testimonials = [
  {
    name: "مریم سعادتی",
    role: "مدیر سالن زیبایی ماهور",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB_IssQQixJH5pjI_zpUCxgkI3jyIQ9KbxcDwJW2mSA0s2YSEV07vJSueSofQQc92DyxdRdn9x_sGijQ0xmWUacpep7PIW1g7oISd_u66vmUnYZA2QNJHcIcBfSyf19YkLlENkZv0anv20D2YgzXMcd5yW9ESNOclXS0UpTTjHCEFdO7LYv9gCS6MEMetaHU3IXl98z5trmxXMl3PulTEFhSmhyL6fwHbdOICmhr3suUfa8XVNUdOYSLeEZZnfem38PjTXd2Cdzq-s",
    text: '"از وقتی نارژین رو فعال کردم، دیگه دغدغه تداخل نوبت‌ها رو ندارم. مشتری‌ها خیلی راحت از بایو اینستاگرام نوبتشون رو رزرو می‌کنن."',
  },
  {
    name: "رضا علوی",
    role: "مدیریت پیرایش مدرن",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCeD_1evrhI849glnsGzexA4P0eBomnvKphKibun9uTasNrtekRf0ZnS4Vhm3xzFlrhcNcDjE7TpoLW2ggZAez3jl7PFz9ZFb_-wOuucbN66o65KsaPJR1YN2S7XqEwCk0DyOgmq2D1mgxa-CZX0sZLi7bwqGrpxwBWnYfdTZ_eRVVokwEUbodZshZnuIT34PSeNzvRHMxiD2LZ0-F219ADME61t8IhONL3YTgXQrubbCIT5H-3Rlhqz8eO0beJK2d3exZuHcd3-OI",
    text: '"سیستم حسابداری و درصدبندی آرایشگرها توی نارژین عالیه. هر شب گزارش دقیق درآمدم رو توی گوشیم دارم."',
  },
  {
    name: "سارا رضایی",
    role: "مرکز تخصصی ناخن سارا",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBaalxJn4DfMgTCNUTXUdlA0-DzJMR3GN0L9TDTSdLILRrh0bc4Rk3CmTFLKVe5pftelKi1IO-zEfiq1Hl6j6qz2UtbEmTjtZBdU9OpUBWCPxCnPTZvcO20RlDwD4cS8dD8aCAiQzAaXK7NlcQFmYnUp63NsrmZafNBgSTDKZpkx_Hn4Tf30kSNPjXY8Znqxz8DcUUMfIiv2GGke3U3pZ1v7ikdG3TI_dB9e9HusI7uEyy7FxsCJhmjUL8aEx1yF5nll9Yb9zznDaw",
    text: '"ارسال پیامک یادآوری باعث شده کنسلی‌های ما نزدیک به صفر بشه. واقعاً برای هر سالنی واجبه."',
  },
];

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let isDown = false;
    let startX: number;
    let scrollLeft: number;

    const onMouseDown = (e: MouseEvent) => {
      isDown = true;
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const onMouseLeave = () => {
      isDown = false;
    };

    const onMouseUp = () => {
      isDown = false;
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", onMouseDown);
    slider.addEventListener("mouseleave", onMouseLeave);
    slider.addEventListener("mouseup", onMouseUp);
    slider.addEventListener("mousemove", onMouseMove);

    return () => {
      slider.removeEventListener("mousedown", onMouseDown);
      slider.removeEventListener("mouseleave", onMouseLeave);
      slider.removeEventListener("mouseup", onMouseUp);
      slider.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <section className="py-xl bg-background-home">
      <div className="container mx-auto px-margin-mobile">
        <h2 className="font-headline-lg text-headline-lg text-center text-primary-home mb-xl">
          از زبان مدیران سالن‌ها
        </h2>
        <div
          ref={sliderRef}
          className="flex gap-lg overflow-x-auto pb-lg snap-x scroll-smooth"
          id="testimonial-slider"
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-80 md:min-w-[450px] snap-center glass-card p-xl rounded-[28px]"
            >
              <div className="flex items-center gap-md mb-lg">
                <div
                  className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-primary-fixed"
                  style={{ backgroundImage: `url("${testimonial.image}")` }}
                />
                <div>
                  <div className="font-headline-sm text-headline-sm text-primary-home">
                    {testimonial.name}
                  </div>
                  <div className="font-label-sm text-label-sm text-secondary-home">
                    {testimonial.role}
                  </div>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant-home italic mb-lg">
                {testimonial.text}
              </p>
              <div className="flex text-tertiary-home">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: '"FILL" 1' }}
                  >
                    <MdStar />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
