"use client";

import PhoneMockup from "./phone-mockup";

import { MdPlayArrow } from "react-icons/md";
import { siteIcon } from "@/lib/site-icons";
import type { SiteContent } from "@/lib/site";

function FeatureChipsMarquee({ chips }: { chips: SiteContent["chips"] }) {
  if (chips.length === 0) return null;
  const row = (prefix: string) =>
    chips.map(({ icon, title: label }) => {
      const Icon = siteIcon(icon);
      return (
      <span
        key={`${prefix}-${label}`}
        className="inline-flex shrink-0 items-center gap-2 rounded-full border border-[#003527]/25 bg-white px-3.5 py-2 text-sm font-semibold text-[#1f3a2e] shadow-sm"
        style={{ marginInlineEnd: 12 }}
      >
        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#003527]/10 text-[#003527]">
          <Icon size={16} aria-hidden />
        </span>
        {label}
      </span>
      );
    });

  return (
    <>
      <style>{`
        @keyframes narjin-marquee {
          from { transform: translate3d(0, 0, 0); }
          to   { transform: translate3d(-33.333333%, 0, 0); }
        }
        .narjin-mq {
          overflow: hidden;
          width: 100%;
          margin-top: 2rem;
          direction: ltr;
        }
        .narjin-mq-track {
          display: flex;
          width: max-content;
          animation: narjin-marquee 50s linear infinite;
        }
        .narjin-mq-set {
          display: flex;
          flex-shrink: 0;
        }
        .narjin-mq:hover .narjin-mq-track {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .narjin-mq-track { animation: none !important; flex-wrap: wrap; width: 100%; }
          .narjin-mq-set:nth-child(n+2) { display: none; }
        }
      `}</style>
      <div className="narjin-mq" aria-label="امکانات نارژین">
        <div className="narjin-mq-track">
          <div className="narjin-mq-set">{row("a")}</div>
          <div className="narjin-mq-set" aria-hidden="true">{row("b")}</div>
          <div className="narjin-mq-set" aria-hidden="true">{row("c")}</div>
        </div>
      </div>
    </>
  );
}

export default function Hero({ site }: { site: SiteContent }) {
  const st = site.settings;
  return (
    <section className="relative overflow-hidden bg-background-home pt-[5.5rem] pb-12 sm:pt-28 sm:pb-16 md:pb-20">
      <div className="pointer-events-none absolute inset-x-0 top-[4.5rem] bottom-0 bg-[radial-gradient(ellipse_at_top,_rgba(0,53,39,0.06),_transparent_50%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
          <div className="order-2 min-w-0 text-center lg:order-1 lg:text-right">
            <p className="mb-3 inline-flex items-center rounded-full border border-primary-home/20 bg-primary-home/5 px-3.5 py-1.5 text-sm font-semibold text-primary-home sm:text-base">
              {st.hero_badge}
            </p>

            <h1
              id="hero-title"
              className="mb-4 font-extrabold leading-[1.35] text-primary-home sm:mb-5"
              style={{ fontSize: "clamp(1.5rem, 2.6vw + 0.85rem, 2.5rem)" }}
            >
              {st.hero_title}
            </h1>

            <p className="narjin-prose mx-auto mb-7 max-w-[36rem] text-[0.95rem] leading-[1.85] text-[#3d5a4c] sm:mb-8 sm:text-base lg:mx-0 lg:max-w-none">
              {st.hero_subtitle}
            </p>

            <div
              id="hero-ctas"
              className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center lg:justify-start"
            >
              <a
                href={st.hero_cta_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center rounded-full bg-primary-container-home px-8 py-3.5 text-base font-bold text-on-primary shadow-md transition hover:opacity-95 hover:shadow-lg"
              >
                {st.hero_cta_text}
              </a>
              <a
                href="#product-demo"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full border-2 border-primary-home/30 px-5 py-3 text-base font-bold text-primary-home transition hover:border-primary-home hover:bg-primary-home/5"
              >
                <MdPlayArrow className="text-xl" />
                {st.hero_secondary_text}
              </a>
            </div>
          </div>

          <div className="order-1 min-w-0 lg:order-2">
            <PhoneMockup />
          </div>
        </div>

        <FeatureChipsMarquee chips={site.chips} />
      </div>
    </section>
  );
}
