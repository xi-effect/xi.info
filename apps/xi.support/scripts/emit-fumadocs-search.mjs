/**
 * При `output: 'export'` Next кладёт индекс Orama в `out/api/search` (файл без расширения).
 * Многие nginx отдают по префиксу /api/ 404 (прокси бэкенда) — клиенту нужен путь вне /api.
 * Копируем в `out/fumadocs-search.json` (application/json), чтобы прокси не перехватывал.
 * @see https://nextjs.org/docs/app/building-your-application/deploying/static-exports#route-handlers
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const appRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const from = path.join(appRoot, 'out', 'api', 'search');
const to = path.join(appRoot, 'out', 'fumadocs-search.json');

if (!fs.existsSync(from)) {
  console.warn(
    '[emit-fumadocs-search] out/api/search not found — skip (not a static export build?)',
  );
  process.exit(0);
}

fs.copyFileSync(from, to);
console.log('[emit-fumadocs-search] copied to out/fumadocs-search.json');
