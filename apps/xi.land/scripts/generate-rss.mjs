import { writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://sovlium.ru';

const posts = [
  {
    slug: 'online-doska-dlya-uroka',
    title: 'Онлайн-доска для урока: на что смотреть, прежде чем выбирать',
    description:
      'Разбираем, почему репетиторы уходят с Miro, где ломается урок и какие мелочи на доске реально влияют на понимание ученика.',
    publishedAt: '2026-05-28',
  },
  {
    slug: 'videozvonki-dlya-repetitorov',
    title: 'Видеозвонки для репетиторов: чеклист, который я составил после 200+ уроков',
    description:
      'Практичный список проверок перед уроком: звук, свет, запасной план и те ситуации, о которых не пишут в рекламе платформ.',
    publishedAt: '2026-06-02',
  },
];

const escapeXml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

const items = posts
  .map(
    (post) => `    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${SITE_URL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${SITE_URL}/blog/${post.slug}</guid>
      <description>${escapeXml(post.description)}</description>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
    </item>`,
  )
  .join('\n');

const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Блог Sovlium</title>
    <link>${SITE_URL}/blog</link>
    <description>Статьи и советы для репетиторов об онлайн-уроках</description>
    <language>ru</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;

writeFileSync(resolve(__dirname, '../public/rss.xml'), rss, 'utf8');
console.log('Generated public/rss.xml');
