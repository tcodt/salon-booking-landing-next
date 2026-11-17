# دستورهای کوتاه لندینگ.  راهنما: make help
COMPOSE ?= docker compose

.PHONY: help build up up-proxy up-edge down logs ps save load dev update

help:        ## فهرست دستورها
	@grep -E '^[a-z-]+:.*##' $(MAKEFILE_LIST) | awk -F':.*## ' '{printf "  make %-9s %s\n", $$1, $$2}'

build:       ## ساخت تصویر
	$(COMPOSE) build

up:          ## اجرا (فقط web روی 127.0.0.1:3000)
	$(COMPOSE) up -d --build

up-proxy:    ## اجرا با nginx داخلی (TLS/دامنه)
	$(COMPOSE) --profile proxy up -d --build

up-edge:     ## اجرا کنار پروژهٔ API روی همین سرور
	$(COMPOSE) -f docker-compose.yml -f docker-compose.edge.yml up -d --build web

down:        ## خاموش کردن
	$(COMPOSE) down

logs:        ## لاگ زنده
	$(COMPOSE) logs -f --tail=100

ps:          ## وضعیت
	$(COMPOSE) ps

save:        ## خروجی تصویر ساخته‌شده (برای سروری که build ندارد): landing-image.tgz
	docker save narjin-landing:latest | gzip > landing-image.tgz

load:        ## بارگذاری landing-image.tgz روی سرور
	gunzip -c landing-image.tgz | docker load

dev:         ## توسعهٔ محلی بدون Docker
	npm install && npm run dev

update:      ## git pull + ساخت + اجرا
	git pull
	$(COMPOSE) up -d --build
