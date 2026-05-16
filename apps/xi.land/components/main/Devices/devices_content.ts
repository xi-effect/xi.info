import type { SwitcherAnimateTab } from '@xipkg/switcher-animate';

export type DeviceTabId = 'computer' | 'tablet';

/** Стабильный префикс id вкладок (`{layoutId}-tab-{id}`) для `aria-labelledby` у панели */
export const DEVICES_SWITCHER_LAYOUT_ID = 'devices-block-switcher';

export const DEVICES_HEADING_DESKTOP = 'Ваш класс — весь мир';

export const DEVICES_SUB_DESKTOP = 'Платформа sovlium работает на\u00A0всех устройствах';

export const DEVICES_HEADING_MOBILE = 'Преподавайте там, где удобно';

export const DEVICES_SUB_MOBILE = 'Адаптировали платформу под\u00A0работу на\u00A0всех устройствах';

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
    imageAlt: 'Ноутбук с\u00A0платформой sovlium на\u00A0экране',
    headingLines: ['Максимум возможностей —', 'на\u00A0большом экране'],
    description:
      'Проводите онлайн-занятия, загружайте материалы и учитывайте доход в\u00A0два клика',
    headingLinesMobile: ['Максимум возможностей —', 'на\u00A0большом экране'],
    descriptionMobile:
      'На\u00A0компьютере доступны все инструменты для\u00A0уроков и работы с\u00A0материалами. С\u00A0телефона и планшета вы всегда на\u00A0связи с\u00A0учениками.',
    imageObjectClassName: 'object-cover object-[center_38%]',
  },
  {
    id: 'tablet',
    label: 'Планшет и телефон',
    imageSrc: '/assets/main/Devices/main-devices-tablet.webp',
    imageAlt: 'Планшет и смартфон с\u00A0приложением sovlium',
    headingLines: ['Есть и мобильная версия'],
    description:
      'Адаптировали платформу, чтобы вы могли учить из\u00A0любой точки мира. Даже в\u00A0парке или на\u00A0пляже',
    headingLinesMobile: ['Всегда под\u00A0рукой'],
    descriptionMobile:
      'Проверяйте уведомления, переписку и расписание в\u00A0любой момент — прямо с\u00A0телефона или планшета.',
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
