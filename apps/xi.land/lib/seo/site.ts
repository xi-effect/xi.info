export const SITE_URL = 'https://sovlium.ru';
export const SITE_NAME = 'Sovlium';
export const SITE_LOCALE = 'ru_RU';
export const SUPPORT_EMAIL = 'support@sovlium.ru';

export const SOCIAL_PROFILES = ['https://vk.com/sovlium', 'https://t.me/sovlium'] as const;

export const DEFAULT_OG_IMAGE = {
  url: '/assets/main/Hero/main-hero-1-1200w.webp',
  width: 1200,
  height: 1240,
  alt: 'Sovlium — платформа для репетиторов: видеозвонок и онлайн-доска',
} as const;

export const absoluteUrl = (path: string): string => {
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }

  if (path === '/') {
    return SITE_URL;
  }

  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
};
