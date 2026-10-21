/**
 * Static export ignores next.config redirects. Write HTML redirects into out/
 * so old support.sovlium.ru URLs keep working on any static host.
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const appRoot = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(appRoot, 'out');
const redirects = JSON.parse(fs.readFileSync(path.join(appRoot, 'legacy-redirects.json'), 'utf8'));

if (!fs.existsSync(outDir)) {
  console.warn('[emit-legacy-redirects] out/ not found — skip');
  process.exit(0);
}

function pageHtml(destination) {
  const safe = JSON.stringify(destination);
  return `<!doctype html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta http-equiv="refresh" content="0; url=${destination}">
  <link rel="canonical" href="${destination}">
  <title>Переадресация</title>
  <script>location.replace(${safe})</script>
</head>
<body></body>
</html>
`;
}

const homeRedirect = { source: '/', destination: '/tutor' };
if (!redirects.some((item) => item.source === '/')) redirects.unshift(homeRedirect);

let written = 0;
for (const item of redirects) {
  const rel = item.source.replace(/^\//, '');
  const file = rel ? path.join(outDir, `${rel}.html`) : path.join(outDir, 'index.html');
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, pageHtml(item.destination));
  written += 1;
}

console.log(`[emit-legacy-redirects] wrote ${written} html redirects`);
