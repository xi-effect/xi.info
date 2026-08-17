import { SUPPORT_URL } from 'lib/app_urls';

import { productPills } from '../product_pills';
import type { ProductPageContentT } from '../types';

/**
 * Нужные кадры:
 * — журнал оплат
 * — форма создания счёта
 * — вкладка «Оплаты» в кабинете
 * — графики дохода
 */
export const paymentsContent: ProductPageContentT = {
  slug: 'payments',
  seoTitle: 'Контроль оплат для репетиторов — sovlium',
  seoDescription:
    'Выставляйте счета из кабинета, ученик получает уведомление, статусы видны в журнале. Деньги идут напрямую, платформа фиксирует оплату.',
  title: 'Счета и контроль оплат',
  subtitle:
    'Счёт можно выставить из кабинета или из раздела оплат. Ученик получит уведомление. Перевод идёт напрямую, вне платформы. sovlium запоминает, кто и за что уже заплатил.',
  heroImageSrc: '/assets/main/Messages/messages-dashboard.webp',
  heroImageAlt: 'Контроль оплат в sovlium',
  heroImageNeedsShot: true,
  pills: productPills('rooms', 'calendar', 'notifications', 'materials'),
  journeyTitle: 'Как проходит оплата',
  journeySubtitle: 'Вы выставляете счёт — система напоминает, вы подтверждаете факт оплаты.',
  steps: [
    {
      id: 'invoice',
      title: 'Создайте счёт там, где уже есть ученик',
      description:
        'Кнопка «Создать счёт на оплату» — на странице «Контроль оплат» и во вкладке кабинета. Выберите кабинет, добавьте строки занятий, стоимость и количество. Сумма посчитается сама. Можно взять шаблон.',
      imageSrc: '/assets/main/Messages/messages-dashboard.webp',
      imageAlt: 'Создание счёта на оплату',
      imageNeedsShot: true,
      imageClassName: 'object-contain object-right',
    },
    {
      id: 'notify',
      title: 'Ученик получает уведомление',
      description:
        'После создания счёт появляется в журнале, ученик видит его в своём кабинете. Сумму в конце урока произносить не нужно.',
      imageSrc: '/assets/main/Devices/main-devices-tablet.webp',
      imageAlt: 'Уведомление ученику о счёте',
      imageNeedsShot: true,
      imageClassName: 'object-cover object-center',
    },
    {
      id: 'status',
      title: 'Статусы в одном журнале',
      description:
        'Имя, дата, сумма, статус. Репетитор видит журнал и шаблоны счетов. Ученик — только свои счета. Открыть счёт можно из списка или по ссылке из письма.',
      imageSrc: '/assets/main/Devices/main-devices-desktop.webp',
      imageAlt: 'Журнал оплат',
      imageNeedsShot: true,
      imageClassName: 'object-cover object-[center_38%]',
    },
    {
      id: 'remind',
      title: 'Напоминание, если оплата задерживается',
      description:
        'Напоминание отправит система. Когда деньги пришли напрямую, подтвердите получение. История остаётся в кабинете.',
      imageSrc: '/assets/main/Hero/main-hero-lesson-card.webp',
      imageAlt: 'Напоминание об оплате',
      imageNeedsShot: true,
      imageClassName: 'object-contain object-center p-8',
    },
  ],
  highlightsTitle: 'Что есть в оплатах',
  highlights: [
    {
      id: 'journal',
      title: 'Журнал счетов и статусов',
      imageSrc: '/assets/main/Messages/messages-dashboard.webp',
      imageAlt: 'Журнал оплат',
      bgClassName: 'bg-red-0',
      badgeTextClassName: 'text-red-80',
    },
    {
      id: 'templates',
      title: 'Шаблоны счетов',
      imageSrc: '/assets/main/Hero/main-hero-lesson-card.webp',
      imageAlt: 'Шаблоны счетов',
      bgClassName: 'bg-orange-0',
      badgeTextClassName: 'text-orange-80',
    },
    {
      id: 'from-room',
      title: 'Счёт из кабинета',
      imageSrc: '/assets/main/Devices/main-devices-desktop.webp',
      imageAlt: 'Оплаты во вкладке кабинета',
      bgClassName: 'bg-violet-20',
      badgeTextClassName: 'text-violet-100',
    },
    {
      id: 'charts',
      title: 'Доход в таблицах и диаграммах',
      imageSrc: '/assets/main/Messages/messages-dashboard.webp',
      imageAlt: 'Диаграммы дохода',
      bgClassName: 'bg-pink-20',
      badgeTextClassName: 'text-fuchsia-900',
    },
  ],
  relatedTitle: 'Рядом с оплатами',
  related: [
    {
      title: 'Кабинеты',
      href: '/classrooms',
      description: 'Счёт всегда на кабинет: ученика или группу. История лежит во вкладке «Оплаты».',
    },
    {
      title: 'Расписание',
      href: '/calendar',
      description: 'В счёт можно внести занятия, которые уже стоят в календаре.',
    },
  ],
  faq: [
    {
      title: 'sovlium принимает деньги за уроки?',
      text: 'Нет. Перевод идёт напрямую от ученика вам, вне сервиса. Платформа фиксирует выставление счёта и факт оплаты.',
    },
    {
      title: 'Сколько стоит платформа для ученика?',
      text: 'Для учеников sovlium бесплатен. За сервис платит репетитор.',
    },
    {
      title: 'Что видит ученик в оплатах?',
      text: 'Журнал своих счетов. Шаблоны и создание счетов — только у репетитора.',
    },
  ],
  supportHref: `${SUPPORT_URL}/payments`,
  supportLabel: 'Как выставить счёт',
  ctaTitle: 'Выставите первый счёт',
  ctaSubtitle: 'После регистрации ученик получит уведомление сам.',
};
