# SEO / AI Search аудит — sovlium.ru (`apps/xi.land`)

Стек: Next.js 16 App Router, `output: 'export'` (SSG в `out/`). **Прод `sovlium.ru` — свой nginx.** Vercel только для стейджа лендинга: `vercel.json` (301 `/docs`, `noindex` на `*.vercel.app`) на прод не действует.

## Найдено

- `/prices` и `/roadmap` наследули title/description/canonical/OG главной: `app/prices/page.tsx` был `'use client'` без metadata; у `/roadmap` metadata не было. Production это подтвердил.
- Feature-страницы имели свой title, но `og:url`/`og:title` оставались от layout (`https://sovlium.ru`) из-за merge Open Graph в Next.js.
- Юридические страницы без `alternates.canonical` → canonical главной.
- `/blog` — заглушка, при этом `index,follow` и запись в `public/sitemap.xml`.
- `/docs` на production отдавал 200 с контентом блога-заглушки (не 301 на базу знаний).
- Sitemap без `/classrooms`, `/about`, `/roadmap`, `/legal*`; с `/blog`; `lastmod` 2025-08-12 не соответствовал контенту.
- `vercel.json` ставил `x-robots-tag: noindex` на все URL. На проде (свой nginx) это не работало; на стейдже Vercel могло закрыть индексацию превью — теперь `noindex` только для `*.vercel.app`.
- `app/layout.tsx`: meta keywords; JSON-LD через `next/script` (не в раннем HTML); `app/head.tsx` в App Router не работает.
- Главная: скрытый блок `sr-only` с дублями смыслов (скрытый SEO-текст). FAQ утверждал, что «в этой версии нет расписания», хотя `/calendar` и карточки возможностей уже есть.
- Capabilities: один и тот же набор карточек дважды в DOM (desktop grid + mobile carousel).
- OG-картинка 512×512 (`web-app-manifest-512x512.png`), файл в репозитории отсутствует.
- IndexNow не был внедрён. Playwright в репозитории нет.

Bots (Googlebot, Bingbot, YandexBot, OAI-SearchBot, PerplexityBot, ClaudeBot, GPTBot): production `https://sovlium.ru/` → **200 HTML**, CSS `/_next/static/...` не закрыт. Challenge/WAF по UA не обнаружен. GPTBot в `robots.txt` не трогали.

## Исправлено

- Единый typed registry: `lib/seo/pages.ts` + `createPageMetadata()` (`lib/seo/metadata.ts`). Новая публичная страница без записи в registry не получит корректный SEO-контракт.
- Уникальные title/description, абсолютные canonical и полный OG/Twitter на всех публичных маршрутах, включая `/prices` и `/roadmap`.
- `/blog`, `/docs`: `noindex,follow`; исключены из sitemap. `/docs` ведёт на базу знаний, canonical → `https://support.sovlium.ru/`. 301 `/docs` в `vercel.json` — только стейдж; на проде нужен nginx (см. вручную).
- `app/sitemap.ts` (`dynamic = 'force-static'`): только indexable canonical URL + lastmod `2026-08-19`.
- `public/robots.txt`: Allow для Googlebot/Bingbot/Yandex/OAI-SearchBot/PerplexityBot/Claude-SearchBot; Sitemap; Host; Clean-param. CSS/JS не закрыты.
- JSON-LD Organization + WebSite (layout), SoftwareApplication (главная, без rating/review), WebPage + BreadcrumbList на product/about/prices/roadmap/legal. Без FAQPage schema.
- OG fallback: `https://sovlium.ru/assets/main/Hero/main-hero-1-1200w.webp`.
- Контент: H1/лид главной и about; FAQ без противоречия про расписание; внутренние ссылки на тарифах и в FAQ; CTA тарифов — `<a href>` на signup; logo alt; cookie-баннер без лишнего H2; capabilities — один набор карточек в DOM.
- 404: HTTP 404 на production nginx уже был; metadata `noindex`.
- Шрифт MarkerHand и NeverMind: `preload: false` (меньше render-blocking TTF).
- `scripts/seo-check.mjs` после `next build`; IndexNow: `scripts/indexnow.mjs` + ключ `public/sovlium-indexnow-8f2c4a1d9b76.txt`.
- Удалены meta keywords и неработающий `app/head.tsx`.

Архитектура блога: `lib/blog/posts.ts`. Маршрут `/blog/[slug]` не добавлен: Next `output: 'export'` не принимает пустой `generateStaticParams`. Когда появится первая статья — страница + generateStaticParams из `blogPosts`.

## Осталось сделать вручную

**После deploy**

1. Google Search Console: sitemap `https://sovlium.ru/sitemap.xml`; инспекция URL (canonical, `/prices`, `/roadmap`, `/blog` noindex, `/docs`); Core Web Vitals; AI Overviews/AI Mode — только наблюдение в Search Console / видимость, кодом не заменить.
2. Яндекс Вебмастер: sitemap, robots, переобход, диагностика URL, микроразметка.
3. Bing Webmaster Tools: sitemap, IndexNow (ключ `sovlium-indexnow-8f2c4a1d9b76`, файл `https://sovlium.ru/sovlium-indexnow-8f2c4a1d9b76.txt`), AI Performance.
4. nginx на проде (Vercel тут ни при чём):
   - `location = /docs { return 301 https://support.sovlium.ru/; }`
   - `location /docs/ { return 301 https://support.sovlium.ru/; }`
   - неизвестные URL → `404.html` с кодом 404 (сейчас уже 404).
   - стейдж на Vercel: редирект `/docs` и `noindex` для `*.vercel.app` уже в `vercel.json`.
5. IndexNow в CI: `INDEXNOW_ENABLED=1 npm run indexnow` только после изменения `lastmod` в `lib/seo/pages.ts`. Закоммитить обновлённый `scripts/indexnow-state.json` после первой успешной отправки. Не слать на каждый deploy без смены lastmod.
6. Яндекс Метрика `103653512`: в отчётах выделить referrer ChatGPT / Perplexity / Copilot / Bing (не отрезать referrer). UTM из `Clean-param` схлопываются только для индексации Яндекса, на визиты Метрики не влияют.
7. Google Rich Results / [validator.schema.org](https://validator.schema.org/) на `/` и `/calendar`.
8. PageSpeed / CrUX: LCP hero (desktop collage `fetchpriority=high`; mobile — текст H1, коллаж скрыт). При необходимости — woff2 для NeverMind.

**Сущность / продукт**

- Roadmap Q1 2026 всё ещё формулирует «выпустить расписание», при этом `/calendar` уже продаётся как существующий модуль. Сверить формулировки с продактом.
- `manifest.webmanifest`: «приложение для репетиторов и малого бизнеса» — шире, чем сайт. Поправить копирайт манифеста отдельно.

## P0

- Прописать 301 `/docs` на **продовом nginx**.
- Загрузить sitemap в GSC / Вебмастер / Bing.

## P1

- Реальный OG 1200×630 (сейчас hero 1200×1240).
- Скриншоты продукта вместо `ShotPlaceholder` на feature pages (`heroImageNeedsShot`).
- Первая first-party статья в блоге, затем `/blog/[slug]`.
- Согласовать статус расписания: сайт vs roadmap vs FAQ support.
- Подключить IndexNow в pipeline деплоя.

## P2

- Подмножество NeverMind woff2 вместо 4×TTF.
- `images.unoptimized` из-за static export — srcset вручную, как у hero.
- Дубли логотипа desktop/mobile в header (разный DOM из-за `useMediaQuery`).
- Content clusters (не генерировать статьи в этой задаче):
  - платформа для репетиторов
  - сервисы для репетиторов
  - онлайн-доска для репетитора
  - расписание репетитора
  - организация онлайн-занятий
  - учёт оплат
  - работа с учениками
  - учебные материалы
  - групповые занятия  
    Приоритет: сценарии, кейсы, продуктовые решения, данные команды. Не массовый AI-контент.

## Регрессии

`npm run build` в `apps/xi.land` = `next build` + `scripts/seo-check.mjs` (title/description/canonical/H1/JSON-LD/sitemap/noindex/битые внутренние `/path`).

Проверено локальным production build: `/`, feature pages, `/prices`, `/roadmap`, `/about`, `/blog`, `/legal`, `/docs`, `robots.txt`, `sitemap.xml`. 404 URL на production уже HTTP 404.
