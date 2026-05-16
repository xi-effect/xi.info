import type { SwitcherAnimateTab } from '@xipkg/switcher-animate';

export type DeviceTabId = 'computer' | 'tablet';

/** Стабильный префикс id вкладок (`{layoutId}-tab-{id}`) для `aria-labelledby` у панели */
export const DEVICES_SWITCHER_LAYOUT_ID = 'devices-block-switcher';

export const DEVICES_HEADING_DESKTOP = 'Ваш класс — весь мир';

export const DEVICES_SUB_DESKTOP = 'Платформа sovlium работает на всех устройствах';

export const DEVICES_HEADING_MOBILE = 'Преподавайте там, где удобно';

export const DEVICES_SUB_MOBILE = 'Адаптировали платформу под работу на всех устройствах';

export const DEVICES_CTA_HREF = 'https://app.sovlium.ru/signup';

export const DEVICES_CTA_LABEL = 'Попробовать бесплатно';

export type DeviceVariantT = {
  id: DeviceTabId;
  label: string;
  imageSrc: string;
  imageAlt: string;
  /** Строки заголовка на десктопе (каждая строка — отдельная строка блока) */
  headingLines: readonly string[];
  description: string;
  /** Заголовок и текст под превью на мобилке (по макету могут отличаться от десктопа) */
  headingLinesMobile: readonly string[];
  descriptionMobile: string;
  /** Позиционирование превью на десктопе */
  imageObjectClassName: string;
};

export const DEVICE_VARIANTS: readonly DeviceVariantT[] = [
  {
    id: 'computer',
    label: 'Компьютер',
    imageSrc: '/assets/main/Devices/main-devices-desktop.webp',
    imageAlt: 'Ноутбук с платформой sovlium на экране',
    headingLines: ['Максимум возможностей —', 'на большом экране'],
    description: 'Проводите онлайн-занятия, загружайте материалы и учитывайте доход в два клика',
    headingLinesMobile: ['Максимум возможностей —', 'на большом экране'],
    descriptionMobile:
      'На компьютере доступны все инструменты для уроков и работы с материалами. С телефона и планшета вы всегда на связи с учениками.',
    imageObjectClassName: 'object-cover object-[center_38%]',
  },
  {
    id: 'tablet',
    label: 'Планшет и телефон',
    imageSrc: '/assets/main/Devices/main-devices-tablet.webp',
    imageAlt: 'Планшет и смартфон с приложением sovlium',
    headingLines: ['Есть и мобильная версия'],
    description:
      'Адаптировали платформу, чтобы вы могли учить из любой точки мира. Даже в парке или на пляже',
    headingLinesMobile: ['Всегда под рукой'],
    descriptionMobile:
      'Проверяйте уведомления, переписку и расписание в любой момент — прямо с телефона или планшета.',
    imageObjectClassName: 'object-cover object-center',
  },
];

/** Данные вкладок для `@xipkg/switcher-animate` */
export const DEVICE_SWITCHER_TABS: SwitcherAnimateTab[] = DEVICE_VARIANTS.map((v) => ({
  id: v.id,
  label: v.label,
}));

export const DEVICE_VARIANT_BY_ID: Record<DeviceTabId, DeviceVariantT> = {
  computer: DEVICE_VARIANTS[0],
  tablet: DEVICE_VARIANTS[1],
};
