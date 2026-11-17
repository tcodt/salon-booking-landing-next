<div dir="rtl">

# نارژین — لندینگ (narjin.ir)

وب‌سایت معرفی و فروش **نارژین** (نرم‌افزار نوبت‌دهی و مدیریت سالن زیبایی): صفحهٔ اصلی، ویژگی‌ها، تعرفه‌ها، وبلاگ، دربارهٔ ما، قوانین/حریم خصوصی و فرم تماس. ساخته‌شده با **Next.js 16** (App Router)، **React 19**، **TypeScript** و **Tailwind CSS 4**.

لندینگ داده‌ها (تعرفه‌ها، مقالات، فرم تماس، اشتراک) را از **`https://api.narjin.ir`** می‌گیرد: مسیرهای `/api/*` همین پروژه به‌عنوان پروکسی سمت سرور به API نارژین وصل می‌شوند و مرورگر مستقیم با API حرف نمی‌زند.

## فهرست

1. [اجرا با Docker](#اجرا-با-docker)
2. [لندینگ و API روی یک سرور](#لندینگ-و-api-روی-یک-سرور)
3. [HTTPS](#https)
4. [به‌روزرسانی و عملیات](#به‌روزرسانی-و-عملیات)
5. [ساخت تصویر روی سیستم دیگر](#ساخت-تصویر-روی-سیستم-دیگر)
6. [توسعهٔ محلی](#توسعهٔ-محلی)
7. [ساختار پروژه](#ساختار-پروژه)
8. [تنظیمات](#تنظیمات)
9. [عیب‌یابی](#عیب‌یابی)

---

## اجرا با Docker

پیش‌نیاز: **Docker Engine + Compose v2** (برای ساخت تصویر حدود ۲ گیگابایت RAM لازم است).

```bash
git clone https://github.com/tcodt/salon-booking-landing-next.git /opt/narjin-landing
cd /opt/narjin-landing
```

سه حالت اجرا، بسته به سرور شما:

| حالت | دستور | نتیجه |
|---|---|---|
| **A.** پشت nginx یا Cloudflare موجود | `docker compose up -d --build` | لندینگ روی `127.0.0.1:3000`؛ شما nginx را به آن وصل می‌کنید |
| **B.** سرور مستقل با nginx و TLS داخلی | `./deploy/setup.sh narjin.ir https` سپس `docker compose --profile proxy up -d --build` | nginx روی پورت ۸۰/۴۴۳ با دامنه و گواهی |
| **C.** همان سروری که API (Docker) دارد | بخش [لندینگ و API روی یک سرور](#لندینگ-و-api-روی-یک-سرور) | nginx پروژهٔ API هر دو دامنه را سرو می‌کند |

بررسی:

```bash
docker compose ps                 # web باید healthy باشد
curl -I http://127.0.0.1:3000/    # ۲۰۰
```

> دستورهای کوتاه: `make help` (`make up`، `make up-proxy`، `make up-edge`، `make logs`).

---

## لندینگ و API روی یک سرور

پروژهٔ API (`Narjin.ir`) خودش nginx دارد و پورت ۸۰/۴۴۳ را می‌گیرد؛ دو nginx نمی‌توانند هم‌زمان آن پورت‌ها را داشته باشند. راه‌حل: **nginx پروژهٔ API هر دو دامنه را سرو می‌کند** و لندینگ فقط یک کانتینر داخل همان شبکهٔ Docker است.

۱) ابتدا پروژهٔ API را بالا بیاورید (راهنما در README آن پروژه).

۲) لندینگ را با override شبکه اجرا کنید:

```bash
cd /opt/narjin-landing
docker compose -f docker-compose.yml -f docker-compose.edge.yml up -d --build web
# یا: make up-edge
```

این کار کانتینر لندینگ را با نام `landing` به شبکهٔ `narjin_default` وصل می‌کند.

۳) در `.env` **پروژهٔ API** (نه این پروژه) دامنهٔ لندینگ را فعال کنید و nginx آن را دوباره بسازید:

```bash
# /opt/narjin/.env
LANDING_DOMAIN=narjin.ir
LANDING_NGINX_TEMPLATE=./deploy/nginx/landing-http.conf.template     # یا landing-https.conf.template
cd /opt/narjin && docker compose up -d nginx
```

۴) DNS: رکورد `narjin.ir` و `www.narjin.ir` هم به IP همین سرور اشاره کند. برای HTTPS گواهی `narjin.ir` را هم با certbot بگیرید (دستور در README پروژهٔ API).

اگر لندینگ خاموش باشد، فقط `narjin.ir` خطا می‌دهد و `api.narjin.ir` بدون تغییر کار می‌کند؛ با روشن‌شدن لندینگ خودکار برمی‌گردد.

---

## HTTPS

در حالت **B** (nginx داخلی لندینگ):

```bash
sudo apt install -y certbot
./deploy/setup.sh narjin.ir http && docker compose --profile proxy up -d --build   # ابتدا http برای تأیید دامنه
sudo certbot certonly --webroot -w /opt/narjin-landing/deploy/certbot-webroot -d narjin.ir -d www.narjin.ir
# در .env:  NGINX_MODE=https  و  LETSENCRYPT_DIR=/etc/letsencrypt
docker compose --profile proxy up -d nginx
```

پشت Cloudflare یا بالانسر که TLS را خودش مدیریت می‌کند، همان `NGINX_MODE=http` کافی است.

---

## به‌روزرسانی و عملیات

```bash
cd /opt/narjin-landing
git pull
docker compose up -d --build        # یا make update
docker compose logs -f web          # لاگ
docker compose restart web          # ری‌استارت
docker image prune -f               # پاک‌کردن تصاویر قدیمی
```

لاگ کانتینرها خودکار می‌چرخد. لندینگ داده‌ای ذخیره نمی‌کند، پس بکاپ لازم نیست؛ فقط کد و `.env`.

صفحه‌های ثابت هنگام build ساخته می‌شوند؛ تغییر متن/تصویر پس از `git pull` فقط با `up -d --build` اعمال می‌شود. نقشهٔ سایت (`/sitemap.xml`) و مقالات هر ساعت از API تازه می‌شوند.

---

## ساخت تصویر روی سیستم دیگر

هنگام build، فونت Geist از Google Fonts و بسته‌ها از npm گرفته می‌شود. اگر سرور شما به این‌ها دسترسی ندارد، تصویر را روی سیستم دیگری (لپ‌تاپ/CI) بسازید و منتقل کنید:

```bash
# روی سیستم دارای اینترنت
docker build -t narjin-landing:latest .
make save                                  # → landing-image.tgz
scp landing-image.tgz docker-compose.yml user@server:/opt/narjin-landing/

# روی سرور
cd /opt/narjin-landing && make load && docker compose up -d --no-build
```

برای رجیستری دیگر npm: `NPM_REGISTRY=https://registry.npmmirror.com docker compose build`.

---

## توسعهٔ محلی

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
npm run lint
```

Node.js نسخهٔ ۲۰٫۹ یا بالاتر.

---

## ساختار پروژه

```
app/                      صفحه‌ها (App Router)
  page.tsx                صفحهٔ اصلی
  features/ pricing/ blog/ about/ terms/ privacy/
  api/                    پروکسی سمت سرور به api.narjin.ir (plans، articles، contact، subscription)
  components/             بخش‌های صفحه (Hero، Features، Pricing، FAQ، ContactForm، ...)
  sitemap.ts              نقشهٔ سایت (مقالات از API)
lib/api.ts                نوع‌های TypeScript پاسخ‌های API
public/                   تصاویر، ویدیو، فونت‌ها
Dockerfile  docker-compose.yml  docker-compose.edge.yml  Makefile  deploy/
```

---

## تنظیمات

آدرس API (`https://api.narjin.ir`) در کد مسیرهای `app/api/*` و `next.config.ts` ثابت است. متغیرهای Docker (در `.env.example`):

| متغیر | پیش‌فرض | توضیح |
|---|---|---|
| `LANDING_BIND` / `LANDING_PORT` | `127.0.0.1` / `3000` | آدرس و پورت لندینگ روی میزبان |
| `DOMAIN` | `narjin.ir` | دامنه برای nginx داخلی (`--profile proxy`) |
| `NGINX_MODE` | `http` | `http` یا `https` |
| `HTTP_PORT` / `HTTPS_PORT` | `80` / `443` | پورت‌های nginx داخلی |
| `LETSENCRYPT_DIR` | `./deploy/letsencrypt` | مسیر گواهی‌ها (با certbot: `/etc/letsencrypt`) |
| `EDGE_NETWORK` | `narjin_default` | شبکهٔ Docker پروژهٔ API (حالت C) |
| `NPM_REGISTRY` | `https://registry.npmjs.org` | رجیستری npm برای build |
| `INTERNAL_SITE_URL` | `http://127.0.0.1:3000` | آدرس داخلی برای sitemap و متادیتای مقالات (معمولاً تغییر نمی‌کند) |

---

## عیب‌یابی

| مشکل | راه‌حل |
|---|---|
| build در `npm ci` یا دریافت فونت شکست می‌خورد | [ساخت تصویر روی سیستم دیگر](#ساخت-تصویر-روی-سیستم-دیگر) یا `NPM_REGISTRY` |
| build با کمبود حافظه کشته می‌شود | حداقل ۲ گیگابایت RAM یا swap؛ یا تصویر را جای دیگر بسازید |
| `/api/plans/` پاسخ ۳۰۸ می‌دهد | رفتار عادی Next (حذف اسلش آخر)؛ مرورگر دنبال می‌کند |
| تعرفه‌ها/مقالات خالی است | دسترسی کانتینر به `https://api.narjin.ir` را بررسی کنید: `docker compose exec web wget -qO- https://api.narjin.ir/landing/plans/` |
| `narjin.ir` در حالت C خطای ۵۰۴/۵۰۲ می‌دهد | `docker compose ps` (web باید بالا باشد) و اینکه با `docker-compose.edge.yml` اجرا شده؛ سپس `docker compose up -d nginx` در پروژهٔ API |
| پورت ۳۰۰۰ اشغال است | `LANDING_PORT=3001` در `.env` |

</div>
