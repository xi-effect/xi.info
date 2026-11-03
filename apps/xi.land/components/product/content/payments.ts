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
  seoTitle: 'Контроль оплат для репетиторов в sovlium',
  seoDescription:
    'Как репетитору вести учёт оплат за онлайн-занятия',
  title: 'Счета и\u00A0контроль оплат',
  subtitle:
    'В sovlium можно создавать счета за\u00A0занятия и\u00A0следить за\u00A0статусом их оплаты. Напоминания об\u00A0оплате приходят ученикам автоматически.',
  heroImageSrc: '/assets/main/Messages/messages-dashboard.webp',
  heroImageAlt: 'Контроль оплат в sovlium',
  heroImageNeedsShot: true,
  pills: productPills('rooms', 'calendar', 'notifications', 'materials'),
  journeyTitle: 'Как проходит оплата',
  journeySubtitle: 'Вы выставляете счёт, получаете деньги переводом или\u00A0наличными и\u00A0подтверждаете оплату',
  steps: [
    {
      id: 'invoice',
      title: 'Создайте счёт на\u00A0оплату в\u00A0кабинете или\u00A0разделе «Оплаты»',
      description:
        'Вы можете создать счёт за\u00A0несколько занятий сразу.',
      imageSrc: '/assets/main/Messages/messages-dashboard.webp',
      imageAlt: 'Создание счёта на оплату',
      imageNeedsShot: true,
      imageClassName: 'object-contain object-right',
    },
    {
      id: 'notify',
      title: 'Ученики получают автоматические уведомления о\u00A0новых счетах',
      description:
        'Напоминать об\u00A0оплате отдельно больше не нужно.',
      imageSrc: '/assets/main/Devices/main-devices-tablet.webp',
      imageAlt: 'Уведомление ученику о счёте',
      imageNeedsShot: true,
      imageClassName: 'object-cover object-center',
    },
    {
      id: 'status',
      title: 'Статусы оплат — в\u00A0журнале у\u00A0репетитора',
      description:
        'Все счета в\u00A0одном разделе — это позволяет легко следить за\u00A0историей оплат.',
      imageSrc: '/assets/main/Devices/main-devices-desktop.webp',
      imageAlt: 'Журнал оплат',
      imageNeedsShot: true,
      imageClassName: 'object-cover object-[center_38%]',
    },
    {
      id: 'remind',
      title: 'Пришлём ученику напоминание, если оплата задержится',
      description:
        'Делать это вручную больше не нужно.',
      imageSrc: '/assets/main/Hero/main-hero-lesson-card.webp',
      imageAlt: 'Напоминание об оплате',
      imageNeedsShot: true,
      imageClassName: 'object-contain object-center p-8',
    },
  ],
  highlightsTitle: 'Что есть в\u00A0оплатах',
  highlights: [
    {
      id: 'journal',
      title: 'Журнал счетов и\u00A0статусы оплаты',
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
      title: 'Возможность создать счёт в\u00A0кабинете',
      imageSrc: '/assets/main/Devices/main-devices-desktop.webp',
      imageAlt: 'Оплаты в кабинете',
      bgClassName: 'bg-violet-20',
      badgeTextClassName: 'text-violet-100',
    },
    {
      id: 'charts',
      title: 'Доход в\u00A0таблицах и\u00A0диаграммах',
      imageSrc: '/assets/main/Messages/messages-dashboard.webp',
      imageAlt: 'Диаграммы дохода',
      bgClassName: 'bg-pink-20',
      badgeTextClassName: 'text-fuchsia-900',
    },
  ],
  relatedTitle: 'В связке с\u00A0оплатами',
  related: [
    {
      title: 'Кабинеты',
      href: '/classrooms',
      description: 'Счёт всегда на кабинет ученика или\u00A0группы — история на\u00A0вкладке «Оплаты»',
    },
    {
      title: 'Расписание',
      href: '/calendar',
      description: 'В\u00A0счёт можно внести занятия, которые уже стоят в\u00A0расписании',
    },
  ],
  faq: [
    {
      title: 'sovlium принимает деньги за\u00A0занятия?',
      text: 'Ученик оплачивает счёт напрямую, платформа лишь фиксирует факт оплаты.',
    },
    {
      title: 'Сколько стоит платформа для ученика?',
      text: 'Для учеников sovlium бесплатен. За\u00A0подписку на платформу платит репетитор.',
    },
    {
      title: 'Что видит ученик в\u00A0оплатах?',
      text: 'Ученик видит только свои счета. Создать счёт может только репетитор.',
    },
  ],
  supportHref: `${SUPPORT_URL}/payments`,
  supportLabel: 'Как выставить счёт',
  ctaTitle: 'Выставите первый счёт',
  ctaSubtitle: 'После регистрации ученик получит уведомление.',
};
