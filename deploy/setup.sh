#!/usr/bin/env bash
# ساخت .env لندینگ:  ./deploy/setup.sh narjin.ir [http|https]
set -euo pipefail
cd "$(dirname "$0")/.."
DOMAIN="${1:-}"; MODE="${2:-http}"
[ -n "$DOMAIN" ] || { echo "استفاده: $0 <دامنه> [http|https]" >&2; exit 1; }
[ ! -f .env ] || { echo ".env از قبل وجود دارد." >&2; exit 1; }
sed -e "s|^DOMAIN=.*|DOMAIN=${DOMAIN}|" -e "s|^NGINX_MODE=.*|NGINX_MODE=${MODE}|" .env.example > .env
echo "✔ .env ساخته شد (دامنه: ${DOMAIN}، حالت: ${MODE})."
echo "  اجرا:  docker compose --profile proxy up -d --build   (nginx داخلی)"
echo "  یا:    docker compose up -d --build                    (پشت nginx موجود)"
