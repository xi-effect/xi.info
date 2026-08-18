import { SUPPORT_URL } from 'lib/app_urls';

import { productPills } from '../product_pills';
import type { ProductPageContentT } from '../types';

/**
 * Нужные кадры из продукта (когда будут):
 * — список кабинетов
 * — окно «Индивидуальные приглашения»
 * — шапка кабинета с вкладками
 * — создание группы
 */
export const classroomsContent: ProductPageContentT = {
  slug: 'classrooms',
  seoTitle: 'Учебные кабинеты для репетиторов — sovlium',
  seoDescription:
    'Кабинет на ученика или группу: материалы, расписание, оплаты и кнопка «Начать занятие». Пригласите ученика по ссылке.',
  title: 'Кабинет на ученика или группу',
  subtitle:
    'Уроки, доски и счета лежат в одном пространстве. Индивидуальный кабинет — для одного ученика, групповой — до 15 человек.',
  heroImageSrc: '/assets/main/Devices/main-devices-desktop.webp',
  heroImageAlt: 'Рабочий стол репетитора в платформе sovlium',
  heroImageNeedsShot: true,
  pills: productPills('calendar', 'materials', 'payments', 'conference'),
  journeyTitle: 'От регистрации до первого урока',
  journeySubtitle: 'Так репетитор начинает работу в\u00A0sovlium.',
  steps: [
    {
      id: 'create',
      title: 'Создайте кабинет',
      description:
        'Индивидуальный — на одного ученика. Групповой — до 15 человек, с общим расписанием, материалами и оплатами. Название индивидуального кабинета видит только репетитор.',
      imageSrc: '/assets/main/Devices/main-devices-desktop.webp',
      imageAlt: 'Список кабинетов в sovlium',
      imageNeedsShot: true,
      imageClassName: 'object-cover object-[center_38%]',
    },
    {
      id: 'invite',
      title: 'Отправьте ссылку-приглашение',
      description:
        'Скопируйте ссылку и отправьте ученику. Он регистрируется, принимает приглашение — и кабинет появляется у вас обоих. Одну ссылку можно отправить нескольким ученикам.',
      imageSrc: '/assets/main/Hero/main-hero-lesson-card.webp',
      imageAlt: 'Приглашение ученика в кабинет',
      imageNeedsShot: true,
      imageClassName: 'object-contain object-center p-8',
    },
    {
      id: 'tabs',
      title: 'Вкладки кабинета',
      description:
        'Сводка — ближайшие уроки и оплаты. Материалы — доски и заметки. Расписание — занятия с этим учеником или группой. Оплаты — счета по кабинету. У репетитора есть ещё вкладка «Информация».',
      imageSrc: '/assets/main/Messages/messages-dashboard.webp',
      imageAlt: 'Вкладки кабинета: сводка, материалы, расписание, оплаты',
      imageNeedsShot: true,
      imageClassName: 'object-contain object-right',
    },
    {
      id: 'start',
      title: 'Нажмите «Начать занятие»',
      description:
        'Кнопка в шапке кабинета. Ученик видит «Присоединиться», когда вы уже в уроке. Дальше — видеозвонок, доска и материалы в той же платформе.',
      imageSrc: '/assets/main/Hero/main-hero-1-1200w.webp',
      imageAlt: 'Начало занятия из кабинета',
      imageNeedsShot: true,
      imageClassName: 'object-cover object-center',
    },
  ],
  highlightsTitle: 'Как устроен кабинет',
  highlights: [
    {
      id: 'individual',
      title: 'Один ученик — один кабинет',
      imageSrc: '/assets/main/Hero/main-hero-student.webp',
      imageAlt: 'Индивидуальный кабинет',
      bgClassName: 'bg-violet-20',
      badgeTextClassName: 'text-violet-100',
    },
    {
      id: 'group',
      title: 'Группа до 15 учеников',
      imageSrc: '/assets/main/Devices/main-devices-tablet.webp',
      imageAlt: 'Групповой кабинет',
      bgClassName: 'bg-brand-80',
      badgeTextClassName: 'text-brand-80',
    },
    {
      id: 'access',
      title: 'Доступ к материалам задаёте вы',
      imageSrc: '/assets/main/Features/main-features-pdf.webp',
      imageAlt: 'Настройка доступа к материалам',
      bgClassName: 'bg-cyan-20',
      badgeTextClassName: 'text-cyan-100',
    },
    {
      id: 'invite-limit',
      title: 'Приглашение по ссылке',
      imageSrc: '/assets/main/Hero/main-hero-lesson-card.webp',
      imageAlt: 'Ссылка-приглашение',
      bgClassName: 'bg-amber-400',
      badgeTextClassName: 'text-amber-700',
    },
  ],
  relatedTitle: 'Рядом с кабинетом',
  related: [
    {
      title: 'Расписание',
      href: '/calendar',
      description: 'Поставить урок можно из кабинета или из общего календаря — форма одна',
    },
    {
      title: 'Видеозвонки',
      href: '/calls',
      description: 'Занятие начинается из шапки кабинета, без ссылки на другой сервис',
    },
    {
      title: 'Материалы',
      href: '/materials',
      description: 'Ученик видит только то, к чему вы открыли доступ',
    },
    {
      title: 'Оплаты',
      href: '/payments',
      description: 'Счёт можно выставить со вкладки «Оплаты» в кабинете',
    },
  ],
  faq: [
    {
      title: 'Чем кабинет отличается от чата с учеником?',
      text: 'Это общее рабочее пространство: уроки, доски, файлы и история оплат лежат вместе. Не нужно искать материалы в переписке.',
    },
    {
      title: 'Ученику нужно что-то покупать?',
      text: 'Нет. Для учеников sovlium бесплатен. Вы отправляете ссылку, ученик регистрируется и заходит в кабинет.',
    },
    {
      title: 'Можно вести и индивидуальные, и групповые занятия?',
      text: 'Да. Индивидуальный кабинет — на одного ученика. Группа вмещает до 15 участников, материалы и расписание у них общие.',
    },
  ],
  supportHref: `${SUPPORT_URL}/classrooms`,
  supportLabel: 'Как пригласить ученика',
  ctaTitle: 'Создайте первый кабинет',
  ctaSubtitle: 'Зарегистрируйтесь, отправьте ссылку ученику — и можно ставить занятие.',
};
