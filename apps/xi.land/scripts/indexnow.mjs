#!/usr/bin/env node
/**
 * IndexNow: отправляет только URL, у которых lastmod в sitemap изменился
 * относительно scripts/indexnow-state.json.
 *
 * Запуск после успешного build:
 *   INDEXNOW_ENABLED=1 node ./scripts/indexnow.mjs
 *
 * Ключ: public/sovlium-indexnow-8f2c4a1d9b76.txt
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const key = 'sovlium-indexnow-8f2c4a1d9b76';
const host = 'sovlium.ru';
const sitemapPath = path.join(root, 'out', 'sitemap.xml');
const statePath = path.join(root, 'scripts', 'indexnow-state.json');

if (process.env.INDEXNOW_ENABLED !== '1') {
  console.log('indexnow: пропуск (INDEXNOW_ENABLED≠1)');
  process.exit(0);
}

if (!fs.existsSync(sitemapPath)) {
  console.error('indexnow: нет out/sitemap.xml');
  process.exit(1);
}

const sitemap = fs.readFileSync(sitemapPath, 'utf8');
const entries = [
  ...sitemap.matchAll(/<url>\s*<loc>([^<]+)<\/loc>\s*(?:<lastmod>([^<]+)<\/lastmod>)?/g),
].map((match) => ({ url: match[1], lastmod: match[2] ?? '' }));

let previous = {};

if (fs.existsSync(statePath)) {
  previous = JSON.parse(fs.readFileSync(statePath, 'utf8'));
}

const changed = entries
  .filter((entry) => previous[entry.url] !== entry.lastmod)
  .map((entry) => entry.url);
const removed = Object.keys(previous).filter((url) => !entries.some((entry) => entry.url === url));
const toSubmit = [...changed, ...removed];

if (toSubmit.length === 0) {
  console.log('indexnow: нет изменений lastmod, отправка не нужна');
  process.exit(0);
}

const body = {
  host,
  key,
  keyLocation: `https://${host}/${key}.txt`,
  urlList: toSubmit,
};

const response = await fetch('https://api.indexnow.org/indexnow', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  body: JSON.stringify(body),
});

if (!response.ok && response.status !== 202) {
  console.error(`indexnow: HTTP ${response.status}`);
  process.exit(1);
}

const nextState = Object.fromEntries(entries.map((entry) => [entry.url, entry.lastmod]));
fs.writeFileSync(statePath, `${JSON.stringify(nextState, null, 2)}\n`);
console.log(`indexnow: отправлено ${toSubmit.length} URL`);
