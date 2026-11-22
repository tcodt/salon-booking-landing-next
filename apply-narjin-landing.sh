#!/usr/bin/env bash
# اجرا:  ./apply-narjin-landing.sh /مسیر/ریپوی/salon-booking-landing-next
# patch باید کنار همین اسکریپت باشد (narjin-landing-changes.patch)
set -euo pipefail
REPO="${1:-.}"
PATCH="$(cd "$(dirname "$0")" && pwd)/landing-pricing.patch"
cd "$REPO"
git rev-parse --git-dir >/dev/null
git checkout main
git pull --ff-only origin main
git am "$PATCH"
echo "تغییرات اعمال شد. برای ارسال:  git push origin main"
