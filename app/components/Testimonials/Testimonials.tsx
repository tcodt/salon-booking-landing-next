/* eslint-disable react/no-unescaped-entities */
"use client";

import { useEffect, useRef } from "react";
import { MdStar } from "react-icons/md";

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrame: number;
    let paused = false;

    const speed = 0.6; // px/frame

    const animate = () => {
      if (!paused) {
        slider.scrollLeft += speed;

        if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth - 1) {
          slider.scrollLeft = 0;
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    const pause = () => {
      paused = true;
    };

    const resume = () => {
      paused = false;
    };

    slider.addEventListener("mouseenter", pause);
    slider.addEventListener("mouseleave", resume);

    return () => {
      cancelAnimationFrame(animationFrame);
      slider.removeEventListener("mouseenter", pause);
      slider.removeEventListener("mouseleave", resume);
    };
  }, []);

  return (
    <section className="py-xl bg-background">
      <div className="container mx-auto px-margin-mobile">
        <h2 className="font-headline-lg text-headline-lg text-center text-primary mb-xl">
          از زبان مدیران سالن‌ها
        </h2>
        <div
          ref={sliderRef}
          className="
      flex
      gap-6
      overflow-x-auto
      scroll-smooth
      snap-x
      snap-mandatory
      scrollbar-hide
      pb-6"
          id="testimonial-slider"
        >
          <div
            className="
flex-shrink-0
w-[90%]
sm:w-[80%]
md:w-[500px]
lg:w-[550px]
snap-center
glass-card
rounded-[28px]
p-6
"
          >
            <div className="flex items-center gap-md mb-lg">
              <div
                className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-primary-fixed"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB_IssQQixJH5pjI_zpUCxgkI3jyIQ9KbxcDwJW2mSA0s2YSEV07vJSueSofQQc92DyxdRdn9x_sGijQ0xmWUacpep7PIW1g7oISd_u66vmUnYZA2QNJHcIcBfSyf19YkLlENkZv0anv20D2YgzXMcd5yW9ESNOclXS0UpTTjHCEFdO7LYv9gCS6MEMetaHU3IXl98z5trmxXMl3PulTEFhSmhyL6fwHbdOICmhr3suUfa8XVNUdOYSLeEZZnfem38PjTXd2Cdzq-s")',
                }}
              />
              <div>
                <div className="font-headline-sm text-headline-sm text-primary">
                  مریم سعادتی
                </div>
                <div className="font-label-sm text-label-sm text-secondary">
                  مدیر سالن زیبایی ماهور
                </div>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant italic mb-lg">
              "از وقتی نارژین رو فعال کردم، دیگه دغدغه تداخل نوبت‌ها رو ندارم.
              مشتری‌ها خیلی راحت از بایو اینستاگرام نوبتشون رو رزرو می‌کنن."
            </p>
            <div className="flex text-tertiary">
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

          <div
            className="
flex-shrink-0
w-[90%]
sm:w-[80%]
md:w-[500px]
lg:w-[550px]
snap-center
glass-card
rounded-[28px]
p-6
"
          >
            <div className="flex items-center gap-md mb-lg">
              <div
                className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-primary-fixed"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCeD_1evrhI849glnsGzexA4P0eBomnvKphKibun9uTasNrtekRf0ZnS4Vhm3xzFlrhcNcDjE7TpoLW2ggZAez3jl7PFz9ZFb_-wOuucbN66o65KsaPJR1YN2S7XqEwCk0DyOgmq2D1mgxa-CZX0sZLi7bwqGrpxwBWnYfdTZ_eRVVokwEUbodZshZnuIT34PSeNzvRHMxiD2LZ0-F219ADME61t8IhONL3YTgXQrubbCIT5H-3Rlhqz8eO0beJK2d3exZuHcd3-OI")',
                }}
              />
              <div>
                <div className="font-headline-sm text-headline-sm text-primary">
                  رضا علوی
                </div>
                <div className="font-label-sm text-label-sm text-secondary">
                  مدیریت پیرایش مدرن
                </div>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant italic mb-lg">
              "سیستم حسابداری و درصدبندی آرایشگرها توی نارژین عالیه. هر شب گزارش
              دقیق درآمدم رو توی گوشیم دارم."
            </p>
            <div className="flex text-tertiary">
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

          <div
            className="
flex-shrink-0
w-[90%]
sm:w-[80%]
md:w-[500px]
lg:w-[550px]
snap-center
glass-card
rounded-[28px]
p-6
"
          >
            <div className="flex items-center gap-md mb-lg">
              <div
                className="w-16 h-16 rounded-full bg-cover bg-center border-2 border-primary-fixed"
                style={{
                  backgroundImage:
                    'url("https://lh3.googleusercontent.com/aida-public/AB6AXuBaalxJn4DfMgTCNUTXUdlA0-DzJMR3GN0L9TDTSdLILRrh0bc4Rk3CmTFLKVe5pftelKi1IO-zEfiq1Hl6j6qz2UtbEmTjtZBdU9OpUBWCPxCnPTZvcO20RlDwD4cS8dD8aCAiQzAaXK7NlcQFmYnUp63NsrmZafNBgSTDKZpkx_Hn4Tf30kSNPjXY8Znqxz8DcUUMfIiv2GGke3U3pZ1v7ikdG3TI_dB9e9HusI7uEyy7FxsCJhmjUL8aEx1yF5nll9Yb9zznDaw")',
                }}
              />
              <div>
                <div className="font-headline-sm text-headline-sm text-primary">
                  سارا رضایی
                </div>
                <div className="font-label-sm text-label-sm text-secondary">
                  مرکز تخصصی ناخن سارا
                </div>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant italic mb-lg">
              "ارسال پیامک یادآوری باعث شده کنسلی‌های ما نزدیک به صفر بشه.
              واقعاً برای هر سالنی واجبه."
            </p>
            <div className="flex text-tertiary">
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
        </div>
      </div>
    </section>
  );
}
