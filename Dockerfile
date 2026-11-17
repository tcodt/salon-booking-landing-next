# syntax=docker/dockerfile:1.7
# لندینگ نارژین (Next.js 16) — تصویر production با خروجی standalone

# ---------- ۱) نصب وابستگی‌ها ----------
FROM node:22-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json ./
# رجیستری npm؛ روی سرورهایی که npmjs در دسترس نیست مثلاً: --build-arg NPM_REGISTRY=https://registry.npmmirror.com
ARG NPM_REGISTRY=https://registry.npmjs.org
# secret اختیاری cacert فقط برای شبکه‌هایی است که پروکسی TLS با CA شخصی دارند
RUN --mount=type=secret,id=cacert,required=false \
    if [ -f /run/secrets/cacert ]; then export NODE_EXTRA_CA_CERTS=/run/secrets/cacert NPM_CONFIG_CAFILE=/run/secrets/cacert; fi; \
    sed -i 's#https://registry.npmmirror.com#https://registry.npmjs.org#g' package-lock.json; \
    npm ci --no-audit --no-fund --registry "$NPM_REGISTRY"

# ---------- ۲) ساخت ----------
FROM node:22-alpine AS builder
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED=1 \
    NODE_USE_ENV_PROXY=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# نکته: فونت Geist هنگام build از Google Fonts گرفته می‌شود؛ سرور build باید به آن دسترسی داشته باشد
# (در غیر این صورت تصویر را جای دیگر بسازید: README ← «ساخت تصویر روی سیستم دیگر»).
RUN --mount=type=secret,id=cacert,required=false \
    if [ -f /run/secrets/cacert ]; then export NODE_EXTRA_CA_CERTS=/run/secrets/cacert; fi; \
    npm run build

# ---------- ۳) اجرا ----------
FROM node:22-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME=0.0.0.0 \
    INTERNAL_SITE_URL=http://127.0.0.1:3000

RUN addgroup -S -g 1001 nodejs && adduser -S -u 1001 -G nodejs nextjs

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nodejs /app/public ./public

USER nextjs
EXPOSE 3000
HEALTHCHECK --interval=30s --timeout=5s --start-period=30s --retries=3 \
    CMD wget -q -O /dev/null http://127.0.0.1:3000/ || exit 1
CMD ["node", "server.js"]
