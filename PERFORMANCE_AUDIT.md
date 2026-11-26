# Narjin Landing — Performance & Accessibility Audit (Phase 1)

> Date: 2026-11-26 · Scope: `salon-booking-landing-next` (Next.js 16.2.10, React 19.2, Tailwind 4) · Mode: **audit only** (no source files were changed in this phase).

## 0. How the evidence was collected

| Item | Detail |
|---|---|
| Build | `next build` (production, Turbopack), served with `next start` on `localhost:3200` |
| Lighthouse | v12, **mobile** preset (Moto G Power emulation, Slow 4G simulated throttling, 4× CPU), 3 runs, median reported |
| Browser probes | Playwright/Chromium: DOM inspection, `document.getAnimations()`, console + network capture on 7 routes |
| Font tooling | `fontTools` to compare the TTF/WOFF2 glyph tables |
| Limits | `narjin.ir` and `api.narjin.ir` are not reachable from the sandbox → the landing rendered its built-in fallback content and `/api/plans`, `/api/articles` returned 502 locally. Those two 502s are an **environment artifact**, not a production finding. Absolute numbers are lab numbers on a loopback server; **only before/after comparisons in the same setup are meaningful.** |

**Local baseline (median of 3 mobile runs)** — close to the baseline you supplied, so the lab is a reasonable proxy:

| Metric | Your baseline | Local lab baseline |
|---|---:|---:|
| Performance | 92 | 91 |
| Accessibility | 93 | 92 |
| Best Practices | 96 | 96 |
| SEO | 100 | 100 |
| FCP | 1.1 s | 1.74 s |
| LCP | 3.3 s | 3.34 s |
| TBT | 10 ms | 82 ms |
| CLS | 0.008 | 0.000 |
| Speed Index | 3.1 s | 1.74 s |

---

## 1. LCP element and its loading chain

**Finding F1 — The LCP element is the hero `<h1>` text, not an image.**
- Element: `h1#hero-title` — `app/components/home/hero.tsx:~126` (`روشی هوشمند برای مدیریت مراجعه کنندگان شما`).
- Evidence: Lighthouse `largest-contentful-paint-element` → `div.relative > div.grid > div.order-2 > h1#hero-title`. Phases (Lighthouse simulated): TTFB 455 ms (14%), load delay 0, load time 0, **render delay 2 806 ms (86%)**. (Unthrottled observation: TTFB 16 ms, render delay 395 ms.)
- Root cause: a text LCP is delayed only by what blocks **text painting**: render-blocking CSS and the **web font** that the heading needs.
- Critical chain (Lighthouse `network-dependency-tree`, longest chain 345 ms observed): `HTML → app CSS (0k857l3l_epcd.css) → IRANSansXFaNum-Medium.ttf`.
  The font is **not preloaded**; the browser discovers it only after it parses the CSS and lays out text, and `@font-face` has **no `font-display`** (= `auto`/block) so the heading is invisible until the 98 KB TTF arrives.
- Image resources are not on the LCP path (no hero image; the hero "phone" is pure CSS). Logo (`logo-main.png`, 2.3 KB through `next/image`) is already `priority`-preloaded.
- Risk of fix: low (font loading only).

## 2. Render-blocking resources

**F2 — Two third-party stylesheets are loaded in `<head>` and are used by nothing.**
- `app/layout.tsx:55-62` — `https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100…900` and `…Material+Symbols+Outlined…`.
- Evidence (Playwright, all 7 routes: `/ /features /pricing /about /blog /terms /privacy`):
  - `.material-symbols-outlined` elements: **0** on every route (the class exists only in legacy, unreferenced component folders: `app/components/{Hero,Features,Comparison,Testimonials,ContactForm,ProductVide}/…`, none of which is imported by any route — grep of imports).
  - Computed `font-family` of **every** rendered element = `mainFont` (e.g. 729/729 elements on `/`). Vazirmatn is never the rendered face.
  - No request to `fonts.gstatic.com` ever happens (the CSS is fetched, the font files never are).
  - Both stylesheets are cross-origin (new DNS+TCP+TLS connection to `fonts.googleapis.com`) and block first paint in a throttled network. Lighthouse `third-parties-insight` lists exactly these two requests (1.7 KB).
- Impact: removes a cross-origin render-blocking round trip. In your baseline Lighthouse this is the "render-blocking requests 710 ms" estimate; in my loopback lab it is much smaller because the connection to Google is fast, so I will measure but **not promise** the 710 ms.
- Why it was misattributed: `app/globals.css:10` (`body{font-family:"mainFont"}`, unlayered) beats `@layer base { body{font-family:"Vazirmatn"} }` (`globals.css:~101`), because unlayered CSS always wins over layered CSS. So Vazirmatn is dead code.
- Risk: low, **provided no glyph is missing from `mainFont`** (verified next, see F4).

**F3 — Remaining render-blocking resource is the app stylesheet** (`0k857l3l_epcd.css`, 75 KB raw / 14.1 KB transfer, 155 ms Lighthouse estimate). It is required for first paint, produced by Tailwind (`app/globals.css` + utilities). No safe reduction without changing the design system → **left as is**.

## 3. Fonts

| # | Finding | Evidence | Location |
|---|---|---|---|
| F4 | Effective body font is **IRANSansX FaNum Medium, one weight**, loaded as a **TTF**, no `font-display`, no `format()`, no preload | `@font-face { font-family:"mainFont"; src:url(…Medium.ttf) }` | `app/globals.css:2-5` |
| F5 | Bold/extra-bold text is **synthesized** from the Medium face (no real weights exist in the CSS) | only one `@font-face`, no `font-weight` range | `app/globals.css:2-5` — **kept as is** (changing to real weights would change the look) |
| F6 | **Geist and Geist Mono are downloaded and `preload`-ed on every page but never used** | `<link rel=preload as=font>` for 2 woff2 files (22.9 KB + 28.9 KB, high priority, start at 40 ms before the app CSS); computed font family is never Geist | `app/layout.tsx:2,8-16,65` |
| F7 | A WOFF2 of the same face is possible (≈31 KB vs 98 KB TTF / 43 KB gzip). **Correction after Phase 2 testing:** the vendor's pre-built WOFF2 (`Farsi numerals/Webfonts/Woff2/…`) has the same cmap/advances but **one fewer GPOS kerning lookup (14 vs 15)** and produced a visible 0.4–1.2 % pixel difference / different line breaks vs. the TTF. It was therefore **not used**; instead the *same TTF* was losslessly repacked to WOFF2 (cmap, hmtx, all 602 glyph outlines, 15 GPOS and 45 GSUB lookups identical) which renders pixel-identical (0 differing pixels on `/about`, `/pricing`, desktop `/features`). | `fontTools` table comparison + pixel diff | `app/fonts/IRANSansXFaNum-Medium.woff2` (new) |
| F8 | `public/fonts/` is **21 MB** (all weights/formats/old versions/PDFs/PNGs/HTML demos) inside `public/` | `du -sh` | `public/fonts/IranSansX(Pro)` — static files, **not** downloaded by visitors, but they inflate the Docker image and repo; flagged as cleanup (not changed) |

Glyph coverage check (needed to prove Vazirmatn can be removed): every character in the rendered text of all 7 routes must be present in `IRANSansXFaNum-Medium.ttf`'s cmap → verified in Phase 2 before removal.

## 4. Images above the fold

- Above the fold: only the logo (`next/image`, 48/96 px, preloaded, 2.3 KB) — fine.
- **F9 — Broken poster image causes a console error and a wasted request.** `app/components/home/product-video.tsx:44-50` renders `<Image src="/images/video-poster.jpg" …>`, but **the file does not exist** (`public/images/` has no `video-poster.jpg`; `git log` for the path is empty). Result: `/_next/image?url=%2Fimages%2Fvideo-poster.jpg → 400`, visible in the console and in Lighthouse `errors-in-console`. Visual impact today: none (the image never displays). Fix: do not request a non-existent file.
- F10 — `/features` renders a decorative/marketing image from a third-party AI host: `app/features/page.tsx:303-306` (`lh3.googleusercontent.com/aida-public/…`). It works in production but is an external dependency on a long-lived URL; locally the optimizer returned 500 because the sandbox blocks the host. Recommendation only (self-host the image).
- Remaining images use `next/image`/`<img>` with sizes appropriate for their use; avatars are 0.6 KB SVGs.

## 5. JavaScript

**F11 — Legacy JavaScript (13.7 KB) is Next.js's own polyfill module, not app code.**
- Lighthouse `legacy-javascript`: `_next/static/chunks/0iec5q4ack_04.js` — signals: `Array.prototype.at/flat/flatMap`, `Object.fromEntries`, `Object.hasOwn`, `String.prototype.trimEnd/trimStart`, `URL.canParse`.
- Evidence: the code is guarded polyfills (`Array.prototype.at||(Array.prototype.at=function…)`) inside the framework chunk. No app dependency contributes it (`undici` is not imported by any app/lib file).
- Fix options: a modern `browserslist`. **Tested in Phase 2** (`chrome>=120, safari>=17.4, firefox>=121`): the chunk stayed byte-identical (227 315 B) and still contained the polyfills → **no effect, not applied** (the polyfill module is injected by Next itself, independent of `browserslist`).

**F12 — "Unused JavaScript" (26 KB of 71 KB) is mostly the React/Next runtime** in the same chunk; app code is in other chunks. Not reducible without changing framework behaviour.

**F13 — Client components that do not need to be client components** (they have no state/effects/browser APIs, yet `"use client"` forces their code, their icon imports and their serialized props into the client bundle and hydration):
- `app/components/home/features.tsx:1` — pure render
- `app/components/home/comparison.tsx:1` — pure render
- `app/components/home/hero.tsx:1` — pure render (+ one `<style>` tag); its only interactive child (`PhoneMockup`) is already its own client component
- `app/components/Footer/Footer.tsx:1` — pure render (uses `Intl` at render time)
- (`hero-shader.tsx` is dead code, not imported.)
Components that **do** need to stay client: `Navbar` (state/scroll), `Faq`, `Testimonials`, `PricingTeaser`, `ContactForm`, `ProductVideo`, `PhoneMockup`.
- Impact: less hydration work and less JS/serialized RSC payload (the HTML is 116 KB mostly because of the inlined Flight payload). Measured effect to be recorded after the change; I will not claim a number in advance.
- Risk: low (props are plain serializable data).

## 6. Animations

**F14 — Two non-composited animations = the hero phone's pagination dots.**
- `app/components/home/phone-mockup.tsx:81` — `className="h-1.5 rounded-full transition-all …"` toggling `w-5`/`w-1.5` and a background color every 2.6 s.
- Evidence (`document.getAnimations()` polled for 8 s on `/`): `width @ SPAN.h-1.5…` ×2 and `background-color @ SPAN.h-1.5…` ×2 — `width` and `background-color` cannot run on the compositor. All other animations are compositor-friendly (`narjin-marquee` = `transform`; slide cross-fades = `opacity` + `translate`; skeleton `pulse` = `opacity`).
- The same `transition-all` + width pattern exists on the testimonial dots (`testimonials.tsx:132-133`) but only runs on user interaction.
- Fix: animate `transform: scaleX()` / `opacity` instead of `width`/`background-color` while keeping the look. Risk: low (tiny dots).
- Note: the audit did not list these in my three lab runs (timing of the 2.6 s tick relative to the trace window) — it did in yours; the probe above is the proof that the elements exist.

## 7. The long main-thread task

**F15 — Two long tasks, both framework/hydration-related.**
- Lighthouse `long-tasks`: (a) the document itself, 237 ms (HTML + 116 KB inline Flight payload parse + style/layout of 734 elements), (b) `chunks/0iec5q4ack_04.js` evaluation, 187 ms (React + Next runtime). `mainthread-work-breakdown` (4× CPU): Other 831 ms, Script evaluation 755 ms, Style & Layout 664 ms.
- Not a single app function: `bootup-time` shows the framework chunk (482 ms scripting) dominating; app chunk `1mfjqidm5qp0a.js` 122 ms.
- Mitigation within scope: F13 (fewer client components → less hydration and smaller payload). TBT is already 70–130 ms (score 0.99), so this is a low-return area.

## 8. Browser console errors

| # | Error | Origin | Real or env artifact |
|---|---|---|---|
| F9 | `400` `/_next/image?url=/images/video-poster.jpg` | missing file, `product-video.tsx:45` | **Real** (reproducible in production) |
| E2 | `502` `/api/plans`, `/api/articles` | upstream `api.narjin.ir` blocked in this sandbox | Environment artifact |
| E3 | `500` `/_next/image?url=https://lh3.googleusercontent.com/…` on `/features` | host blocked in this sandbox | Environment artifact (see F10 for the dependency risk) |

No hydration warnings, no CSP errors, no React errors in any route.

## 9. Accessibility (axe via Lighthouse, mobile)

| # | Issue | Evidence | Location | Fix |
|---|---|---|---|---|
| A1 | **Insufficient contrast 1.98:1** (white text on `#25D366`, 16 px bold) | Lighthouse `color-contrast` | `app/components/home/contact-form.tsx:119` (`bg-[#25D366] … text-white`) | Use a darker WhatsApp green with white text (≥ 4.5:1), keeping the green identity |
| A2 | **Redundant alt** — logo image has `alt="نارژین"` next to the visible text "نارژین" (3 instances) | `image-redundant-alt` on every route | `Navbar.tsx:81`, `Navbar.tsx:164`, `Footer.tsx:35` | `alt=""` (decorative; the adjacent text names the link) |
| A3 | **Touch targets 20×8 px / 8×8 px** (needs ≥ 24×24 or spacing) — testimonial pagination dots | `target-size` | `app/components/home/testimonials.tsx:129-137` | Make the button 24×24 with the visible dot centred inside (no visual change) |
| A4 | Heading order skips (`h1 → h3`) on `/pricing`, `/features`, `/blog` | `heading-order` | pricing cards (`plan-card.tsx` uses `h3`), `features/page.tsx:283` | Informational; changing heading levels alters semantics/styling → verify case by case |

`/about`, `/terms`, `/privacy` only show A2. Home page: A1, A2, A3.

## 10. Security headers (actual state)

Headers actually returned by `next start` (and therefore by the container): `X-Powered-By: Next.js`, `Cache-Control`, `ETag`, `Vary` — **no** `X-Content-Type-Options`, `X-Frame-Options`, `Strict-Transport-Security`, `Cross-Origin-Opener-Policy`, `Content-Security-Policy`, `Permissions-Policy`, `Referrer-Policy`.

The repo's reverse-proxy templates (`deploy/nginx/*.template`, and the API repo's `landing-*.conf.template`) set **only** `X-Content-Type-Options: nosniff` and `Referrer-Policy: strict-origin-when-cross-origin`. So, with those templates, the missing ones are exactly what Lighthouse "Best Practices → security headers" asks for: CSP, HSTS, COOP (origin isolation), XFO/frame-ancestors (clickjacking), Trusted Types.

| Header | Status | Recommendation | Risk |
|---|---|---|---|
| HSTS | missing | `max-age=31536000` (**no** `includeSubDomains`, no `preload`: subdomains `panel.`/`api.` are separate apps) | Low |
| COOP | missing | `same-origin` — external links already use `target=_blank rel=noopener noreferrer` | Low |
| Clickjacking | missing | `X-Frame-Options: SAMEORIGIN` + CSP `frame-ancestors 'self'` (nobody legitimately frames the site; the site frames Aparat, which is unaffected) | Low |
| Permissions-Policy | missing | deny camera/microphone/geolocation/etc. | Low |
| CSP | missing | **Only a non-breaking subset now** (`base-uri 'self'; object-src 'none'; frame-ancestors 'self'; form-action 'self'`). A real `script-src` is **not** safe to add blind: Next injects inline bootstrap/Flight scripts and the hero uses an inline `<style>`; a nonce-based policy requires dynamic rendering (it would disable the current static/ISR pages). | Subset low; full CSP = needs design |
| Trusted Types (`require-trusted-types-for 'script'`) | missing | **Do not enable**: React/Next use string sinks; would break the app | High if enabled |
| `X-Powered-By` | exposed | `poweredByHeader: false` | None |

Duplicate-header caution: `X-Content-Type-Options` and `Referrer-Policy` are already added by the nginx templates; adding them again in Next would send two copies, so they are intentionally **not** duplicated.

## 11. Next.js configuration

- `next.config.ts`: `output: "standalone"`, `images.remotePatterns` includes stale/over-broad hosts (`queuingprojectapi.pythonanywhere.com`, `api.narjin.ir/**`, `narjin.ir/**`) — informational, not performance-relevant. No `headers()`, no `poweredByHeader:false`, no custom `images.formats` (Next 16 defaults to WebP/AVIF negotiation already).
- `rewrites()` proxies `/landing/*` to the API; the same endpoints are also proxied by `app/api/*` routes. Duplicate mechanisms, not a perf issue.
- ISR is on (`revalidate = 60`) for `/` and `/pricing`; the pages are statically rendered — good.
- Prefetch: Next `<Link>` in the Navbar/Footer triggers ~20 `?_rsc=` prefetch requests right after load (447–600 ms observed). They are after FCP/LCP, so not on the critical path; left as is (changing prefetch behaviour is a speculative optimization).

## 12. Summary table

| ID | Finding | Verified by | Expected impact | Risk | Phase 2 action |
|---|---|---|---|---|---|
| F1 | LCP = hero H1 text; waits for TTF + blocking CSS | Lighthouse + dependency tree | High | Low | Fix F2/F4/F6/F7 |
| F2 | 2 unused cross-origin render-blocking Google CSS | DOM/network probes on 7 routes | Medium–High on real mobile | Low | Remove |
| F4/F7 | TTF, no `font-display`, no preload | CSS + Lighthouse | High (LCP) | Low | Official WOFF2 via `next/font/local`, `swap`, preload |
| F6 | Geist ×2 preloaded, unused | HTML head + probes | Medium | Low | Remove |
| F9 | Missing poster → console error + request | console + FS check | Best Practices | Low | Remove the broken request |
| F11 | Next polyfill module 13.7 KB | chunk inspection | Low–Medium | Low–Med | Test `browserslist`; keep only if it shrinks |
| F13 | 4 needless client components | code + RSC payload | Low–Medium | Low | Convert to server components |
| F14 | width/background-color dot animations | `getAnimations()` | Low (compositing) | Low | Transform/opacity |
| A1–A3 | contrast, alt, touch target | axe/Lighthouse | Accessibility +4–5 pts | Low | Fix |
| §10 | Missing headers | live headers | Best Practices | Low (subset) | Add safe subset in `next.config.ts` |

Items intentionally **not** touched: app stylesheet size (F3), framework runtime (F12), synthetic-bold look (F5), prefetch behaviour, full CSP / Trusted Types, third-party image host (F10), `public/fonts` clean-up (F8), heading levels (A4).
