import { SUPPORT_URL } from 'lib/app_urls';

import { productPills } from '../product_pills';
import type { ProductPageContentT } from '../types';

/**
 * Нужные кадры:
 * — страница «Расписание»
 * — форма «Добавить занятие»
 * — карточка урока
 * — окно переноса
 */
export const calendarContent: ProductPageContentT = {
  slug: 'calendar',
  seoTitle: 'Расписание занятий для репетиторов — sovlium',
  seoDescription:
    'Создавайте и переносите уроки из календаря или из кабинета. Ученик получит напоминание. В карточке занятия — материалы и кнопка «Начать».',
  title: 'Расписание занятий',
  subtitle:
    'Одну и ту же форму открываете из общего календаря и из кабинета. Можно повторять уроки по дням недели, переносить одно занятие или всю серию. Ученик получит напоминание.',
  heroImageSrc: '/assets/main/Devices/main-devices-desktop.webp',
  heroImageAlt: 'Расписание и карточка занятия в sovlium',
  heroImageNeedsShot: true,
  pills: productPills('rooms', 'conference', 'notifications', 'payments'),
  journeyTitle: 'Как поставить занятие',
  journeySubtitle: 'Со страницы «Расписание» и из кабинета — одни и те же шаги.',
  steps: [
    {
      id: 'open',
      title: 'Откройте календарь или кабинет',
      description:
        'Общее расписание показывает всех учеников. Вкладка «Расписание» в кабинете — только уроки с этим учеником или группой. Кнопка «+» в обоих местах открывает одну форму.',
      imageSrc: '/assets/main/Devices/main-devices-desktop.webp',
      imageAlt: 'Расписание репетитора',
      imageNeedsShot: true,
      imageClassName: 'object-cover object-[center_38%]',
    },
    {
      id: 'create',
      title: 'Заполните занятие',
      description:
        'Название, кабинет, дата, время начала и длительность — время окончания посчитается само. Если урок повторяется, включите повторение и отметьте дни недели.',
      imageSrc: '/assets/main/Hero/main-hero-timer.webp',
      imageAlt: 'Создание занятия',
      imageNeedsShot: true,
      imageClassName: 'object-contain object-center p-6',
    },
    {
      id: 'remind',
      title: 'Ученик получит напоминание',
      description:
        'О новом занятии и о переносе система уведомляет сама. Отдельно писать в мессенджер не нужно.',
      imageSrc: '/assets/main/Devices/main-devices-tablet.webp',
      imageAlt: 'Напоминание о занятии',
      imageNeedsShot: true,
      imageClassName: 'object-cover object-center',
    },
    {
      id: 'card',
      title: 'В карточке занятия — старт урока',
      description:
        'Материалы, настройки и кнопка «Начать». Ссылку на другой звонок копировать не нужно: вы уже в кабинете.',
      imageSrc: '/assets/main/Hero/main-hero-lesson-card.webp',
      imageAlt: 'Карточка занятия с кнопкой начать',
      imageNeedsShot: true,
      imageClassName: 'object-contain object-center p-8',
    },
  ],
  highlightsTitle: 'Что ещё умеет расписание',
  highlights: [
    {
      id: 'repeat',
      title: 'Повтор по дням недели',
      imageSrc: '/assets/main/Hero/main-hero-timer.webp',
      imageAlt: 'Повторяющееся занятие',
      bgClassName: 'bg-pink-20',
      badgeTextClassName: 'text-fuchsia-900',
    },
    {
      id: 'move',
      title: 'Перенос одного урока или всей серии',
      imageSrc: '/assets/main/Hero/main-hero-lesson-card.webp',
      imageAlt: 'Перенос занятия',
      bgClassName: 'bg-orange-0',
      badgeTextClassName: 'text-orange-80',
    },
    {
      id: 'notify',
      title: 'Напоминания ученику',
      imageSrc: '/assets/main/Devices/main-devices-tablet.webp',
      imageAlt: 'Уведомление о занятии',
      bgClassName: 'bg-amber-400',
      badgeTextClassName: 'text-amber-700',
    },
    {
      id: 'home',
      title: 'Ближайший урок на главной',
      imageSrc: '/assets/main/Messages/messages-dashboard.webp',
      imageAlt: 'Ближайшее занятие на главной',
      bgClassName: 'bg-violet-20',
      badgeTextClassName: 'text-violet-100',
    },
  ],
  relatedTitle: 'Рядом с расписанием',
  related: [
    {
      title: 'Кабинеты',
      href: '/classrooms',
      description: 'Занятие всегда привязано к кабинету — индивидуальному или группе.',
    },
    {
      title: 'Видеозвонки',
      href: '/calls',
      description: 'Из карточки занятия сразу в урок: камера, доска, чат.',
    },
    {
      title: 'Доска',
      href: '/whiteboard',
      description: 'Подготовьте доску заранее и откройте её во время звонка.',
    },
    {
      title: 'Оплаты',
      href: '/payments',
      description: 'Выставите счёт за занятия, которые уже стоят в расписании.',
    },
  ],
  faq: [
    {
      title: 'Ученик может сам ставить уроки?',
      text: 'Нет. Создавать и переносить занятия может только репетитор. Ученик видит расписание своего кабинета и получает напоминания.',
    },
    {
      title: 'Как перенести повторяющийся урок?',
      text: 'Откройте занятие и выберите: только этот урок или это и следующие. Для серии можно задать новые дни недели.',
    },
    {
      title: 'Где смотреть, что сегодня?',
      text: 'После входа на главной видно ближайшее занятие. Полный список — на странице «Расписание» и во вкладке кабинета.',
    },
  ],
  supportHref: `${SUPPORT_URL}/lessons-and-schedule/create-move-lesson`,
  supportLabel: 'Как поставить или перенести урок',
  ctaTitle: 'Поставьте первое занятие',
  ctaSubtitle: 'После регистрации ученик получит напоминание сам.',
};
