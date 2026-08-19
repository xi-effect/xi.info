#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'out');
const siteUrl = 'https://sovlium.ru';

const errors = [];
const warn = [];

const htmlFileForPath = (routePath) => {
  if (routePath === '/') {
    return path.join(outDir, 'index.html');
  }

  const noSlash = routePath.replace(/^\//, '');
  const nested = path.join(outDir, noSlash, 'index.html');
  const flat = path.join(outDir, `${noSlash}.html`);

  if (fs.existsSync(nested)) {
    return nested;
  }

  return flat;
};

const attr = (html, name) => {
  const re = new RegExp(`<meta[^>]+name="${name}"[^>]+content="([^"]*)"`, 'i');
  const re2 = new RegExp(`<meta[^>]+content="([^"]*)"[^>]+name="${name}"`, 'i');
  return html.match(re)?.[1] ?? html.match(re2)?.[1] ?? null;
};

const prop = (html, name) => {
  const re = new RegExp(`<meta[^>]+property="${name}"[^>]+content="([^"]*)"`, 'i');
  const re2 = new RegExp(`<meta[^>]+content="([^"]*)"[^>]+property="${name}"`, 'i');
  return html.match(re)?.[1] ?? html.match(re2)?.[1] ?? null;
};

if (!fs.existsSync(outDir)) {
  console.error('seo-check: нет каталога out/. Сначала выполните next build.');
  process.exit(1);
}

const sitemapPath = path.join(outDir, 'sitemap.xml');
if (!fs.existsSync(sitemapPath)) {
  errors.push('нет out/sitemap.xml');
} else {
  const sitemap = fs.readFileSync(sitemapPath, 'utf8');
  const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

  if (locs.length === 0) {
    errors.push('sitemap.xml пустой');
  }

  for (const loc of locs) {
    if (!loc.startsWith(`${siteUrl}/`) && loc !== siteUrl) {
      errors.push(`sitemap: не canonical origin ${loc}`);
    }

    if (loc.includes('?')) {
      errors.push(`sitemap: query URL ${loc}`);
    }

    const route = loc === siteUrl ? '/' : loc.replace(siteUrl, '');
    const file = htmlFileForPath(route);

    if (!fs.existsSync(file)) {
      errors.push(`sitemap: нет HTML для ${loc}`);
      continue;
    }

    const html = fs.readFileSync(file, 'utf8');
    const robots = attr(html, 'robots') ?? '';

    if (/\bnoindex\b/i.test(robots)) {
      errors.push(`sitemap содержит noindex: ${loc}`);
    }
  }
}

const pagesPath = path.join(root, 'lib/seo/pages.ts');
const pagesSrc = fs.readFileSync(pagesPath, 'utf8');
const pageBlocks = [
  ...pagesSrc.matchAll(
    /'(\/[^']*)':\s*\{[\s\S]*?path:\s*'([^']+)'[\s\S]*?title:\s*'((?:\\'|[^'])*)'[\s\S]*?description:\s*'((?:\\'|[^'])*)'[\s\S]*?index:\s*(true|false)/g,
  ),
];

if (pageBlocks.length === 0) {
  errors.push('не удалось прочитать SEO_PAGES');
}

const titles = new Map();
const descriptions = new Map();

for (const match of pageBlocks) {
  const route = match[1];
  const indexed = match[5] === 'true';
  const file = htmlFileForPath(route);

  if (!fs.existsSync(file)) {
    errors.push(`нет HTML для ${route}`);
    continue;
  }

  const html = fs.readFileSync(file, 'utf8');
  const title = html.match(/<title>([^<]*)<\/title>/i)?.[1] ?? '';
  const description = attr(html, 'description') ?? '';
  const canonical = html.match(/rel="canonical" href="([^"]+)"/i)?.[1] ?? '';
  const robots = attr(html, 'robots') ?? '';
  const ogUrl = prop(html, 'og:url') ?? '';
  const ogTitle = prop(html, 'og:title') ?? '';
  const ogImage = prop(html, 'og:image') ?? '';
  const h1s = [...html.matchAll(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi)].map((m) =>
    m[1]
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, ' ')
      .trim(),
  );

  if (!title) {
    errors.push(`${route}: нет title`);
  }

  if (!description) {
    errors.push(`${route}: нет description`);
  }

  const expectedCanonical =
    route === '/docs'
      ? 'https://support.sovlium.ru'
      : route === '/'
        ? siteUrl
        : `${siteUrl}${route}`;

  const canonicalNorm = canonical.replace(/\/$/, '');
  const expectedNorm = expectedCanonical.replace(/\/$/, '');

  if (canonicalNorm !== expectedNorm) {
    errors.push(`${route}: canonical ${canonical} ≠ ${expectedCanonical}`);
  }

  if (indexed && /\bnoindex\b/i.test(robots)) {
    errors.push(`${route}: indexable, но robots noindex`);
  }

  if (!indexed && !/\bnoindex\b/i.test(robots)) {
    errors.push(`${route}: заглушка должна быть noindex`);
  }

  if (ogUrl && ogUrl !== canonical) {
    errors.push(`${route}: og:url ${ogUrl} ≠ ${canonical}`);
  }

  if (!ogTitle) {
    errors.push(`${route}: нет og:title`);
  }

  if (ogImage && !ogImage.startsWith('http')) {
    errors.push(`${route}: og:image не абсолютный`);
  }

  if (h1s.length === 0) {
    errors.push(`${route}: нет H1`);
  }

  if (h1s.length > 1) {
    errors.push(`${route}: несколько H1 (${h1s.join(' | ')})`);
  }

  const jsonBlocks = [...html.matchAll(/type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)];

  for (const block of jsonBlocks) {
    try {
      JSON.parse(block[1]);
    } catch {
      errors.push(`${route}: невалидный JSON-LD`);
    }
  }

  if (indexed) {
    if (titles.has(title)) {
      errors.push(`дубль title: "${title}" (${titles.get(title)} и ${route})`);
    } else {
      titles.set(title, route);
    }

    if (descriptions.has(description)) {
      errors.push(`дубль description: ${descriptions.get(description)} и ${route}`);
    } else {
      descriptions.set(description, route);
    }
  }
}

const robotsTxt = fs.readFileSync(path.join(outDir, 'robots.txt'), 'utf8');

if (!robotsTxt.includes('Sitemap: https://sovlium.ru/sitemap.xml')) {
  errors.push('robots.txt: нет ссылки на sitemap');
}

if (/disallow:\s*\/_next/i.test(robotsTxt) || /disallow:\s*\/assets/i.test(robotsTxt)) {
  errors.push('robots.txt блокирует CSS/JS/assets');
}

if (!/OAI-SearchBot/i.test(robotsTxt) || !/PerplexityBot/i.test(robotsTxt)) {
  errors.push('robots.txt: нет явного Allow для OAI-SearchBot/PerplexityBot');
}

const internalHrefs = new Set();

for (const file of fs.readdirSync(outDir, { recursive: true })) {
  const full = path.join(outDir, file);
  if (!full.endsWith('.html') || !fs.statSync(full).isFile()) {
    continue;
  }

  const html = fs.readFileSync(full, 'utf8');

  for (const match of html.matchAll(/href="(\/[^"#?]*)"/g)) {
    internalHrefs.add(match[1]);
  }
}

for (const href of internalHrefs) {
  if (href.startsWith('/_next') || href.startsWith('/assets') || href.startsWith('/fonts')) {
    continue;
  }

  if (href.includes('.')) {
    const publicFile = path.join(outDir, href.replace(/^\//, ''));
    if (!fs.existsSync(publicFile)) {
      warn.push(`возможная битая ссылка на файл: ${href}`);
    }
    continue;
  }

  const target = htmlFileForPath(href);

  if (!fs.existsSync(target) && href !== '/404') {
    errors.push(`битая внутренняя ссылка: ${href}`);
  }
}

if (errors.length) {
  console.error('seo-check: ошибки\n');
  for (const item of errors) {
    console.error(`- ${item}`);
  }
  process.exit(1);
}

if (warn.length) {
  console.warn('seo-check: предупреждения\n');
  for (const item of warn) {
    console.warn(`- ${item}`);
  }
}

console.log('seo-check: ok');
