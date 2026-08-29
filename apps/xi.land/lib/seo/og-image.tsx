import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

import { OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH } from './og';
import { getSeoPage, type SeoPathT } from './pages';
import { DEFAULT_OG_IMAGE } from './site';

export const ogImageAlt = DEFAULT_OG_IMAGE.alt;
export const ogImageSize = {
  width: OG_IMAGE_WIDTH,
  height: OG_IMAGE_HEIGHT,
};
export const ogImageContentType = 'image/png';

const OG_EYEBROW: Record<SeoPathT, string> = {
  '/': 'Платформа для репетиторов',
  '/classrooms': 'Кабинеты',
  '/calendar': 'Расписание',
  '/calls': 'Видеозвонки',
  '/whiteboard': 'Онлайн-доска',
  '/materials': 'Материалы',
  '/payments': 'Оплаты',
  '/prices': 'Тарифы',
  '/roadmap': 'План развития',
  '/about': 'О нас',
  '/blog': 'Блог',
  '/docs': 'Документация',
  '/legal': 'Документы',
  '/legal/terms': 'Документы',
  '/legal/offer': 'Документы',
  '/legal/payment-refund': 'Документы',
  '/legal/requisites': 'Документы',
  '/legal/privacy': 'Документы',
  '/legal/consent': 'Документы',
  '/legal/marketing-consent': 'Документы',
};

const loadFont = async (filename: string) => {
  const candidates = [
    join(process.cwd(), 'public/fonts', filename),
    join(process.cwd(), 'apps/xi.land/public/fonts', filename),
  ];

  for (const candidate of candidates) {
    try {
      return await readFile(candidate);
    } catch {
      continue;
    }
  }

  throw new Error(`OG font not found: ${filename}`);
};

const clampText = (text: string, maxLength: number) => {
  const normalized = text.replace(/\s+/g, ' ').trim();

  if (normalized.length <= maxLength) {
    return normalized;
  }

  return `${normalized.slice(0, maxLength).trim().replace(/\s+\S*$/, '')}…`;
};

const OG_TITLE_OVERRIDE: Partial<Record<SeoPathT, string>> = {
  '/': 'Проводите уроки онлайн',
};

const displayTitle = (path: SeoPathT, title: string) => {
  const override = OG_TITLE_OVERRIDE[path];

  if (override) {
    return override;
  }

  return clampText(
    title
      .replace(/\s*[—|–]\s*sovlium$/i, '')
      .replace(/\s*\|\s*Sovlium$/i, '')
      .trim(),
    72,
  );
};

export const createOpenGraphImage = (path: SeoPathT) =>
  async function OpenGraphImage() {
    const page = getSeoPage(path);
    const [regular, demiBold] = await Promise.all([
      loadFont('NeverMind-Regular.ttf'),
      loadFont('NeverMind-DemiBold.ttf'),
    ]);

    const title = displayTitle(path, page.ogTitle ?? page.title);
    const description = clampText(page.ogDescription ?? page.description, 140);
    const eyebrow = OG_EYEBROW[path] === title ? 'sovlium' : OG_EYEBROW[path];

    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: '#4554C9',
            fontFamily: 'NeverMind',
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: -180,
              right: -120,
              width: 520,
              height: 520,
              borderRadius: 999,
              backgroundColor: 'rgba(255,255,255,0.08)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: -140,
              left: 180,
              width: 320,
              height: 320,
              borderRadius: 999,
              backgroundColor: 'rgba(255,255,255,0.06)',
            }}
          />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              width: '100%',
              height: '100%',
              padding: '64px 72px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  fontSize: 36,
                  fontWeight: 600,
                  color: '#FFFFFF',
                }}
              >
                sovlium
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: 24,
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.72)',
                }}
              >
                sovlium.ru
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div
                style={{
                  display: 'flex',
                  fontSize: 22,
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.72)',
                  marginBottom: 16,
                }}
              >
                {eyebrow}
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: title.length > 42 ? 52 : 64,
                  fontWeight: 600,
                  color: '#FFFFFF',
                  lineHeight: 1.15,
                  letterSpacing: -1.2,
                  maxWidth: 980,
                }}
              >
                {title}
              </div>
              <div
                style={{
                  display: 'flex',
                  fontSize: 26,
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.82)',
                  lineHeight: 1.4,
                  marginTop: 24,
                  maxWidth: 900,
                }}
              >
                {description}
              </div>
            </div>
          </div>
        </div>
      ),
      {
        width: OG_IMAGE_WIDTH,
        height: OG_IMAGE_HEIGHT,
        fonts: [
          { name: 'NeverMind', data: regular, weight: 400, style: 'normal' },
          { name: 'NeverMind', data: demiBold, weight: 600, style: 'normal' },
        ],
      },
    );
  };
