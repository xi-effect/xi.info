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
  seoTitle: 'Расписание занятий для репетиторов в sovlium',
  seoDescription:
    'Как онлайн-репетитору назначать, отменять и переносить занятия',
  title: 'Расписание занятий',
  subtitle:
    'В\u00A0sovlium легко назначить, перенести или\u00A0отменить занятие, если нужно. Все участники получают напоминания о\u00A0занятиях.',
  heroImageSrc: '/assets/main/Devices/main-devices-desktop.webp',
  heroImageAlt: 'Расписание и карточка занятия в sovlium',
  heroImageNeedsShot: true,
  pills: productPills('rooms', 'conference', 'notifications', 'payments'),
  journeyTitle: 'Как назначить занятие',
  journeySubtitle: 'В\u00A0общем расписании или\u00A0расписании конкретного кабинета',
  steps: [
    {
      id: 'open',
      title: 'Откройте общее расписание или\u00A0расписание кабинета',
      description:
        'Общее расписание показывает ваши занятия у\u00A0всех учеников. Вкладка «Расписание» в\u00A0кабинете — только занятия с\u00A0этим учеником или\u00A0группой.',
      imageSrc: '/assets/main/Devices/main-devices-desktop.webp',
      imageAlt: 'Расписание репетитора',
      imageNeedsShot: true,
      imageClassName: 'object-cover object-[center_38%]',
    },
    {
      id: 'create',
      title: 'Создайте занятие',
      description:
        'Добавьте пару слов о\u00A0занятии, настройте время и\u00A0режим повторов.',
      imageSrc: '/assets/main/Hero/main-hero-timer.webp',
      imageAlt: 'Создание занятия',
      imageNeedsShot: true,
      imageClassName: 'object-contain object-center p-6',
    },
    {
      id: 'remind',
      title: 'Ученик получит напоминание',
      description:
        'Платформа sovlium сама уведомляет учеников о\u00A0новых занятиях или\u00A0переменах в\u00A0расписании. Отдельно писать каждому больше не\u00A0нужно.',
      imageSrc: '/assets/main/Devices/main-devices-tablet.webp',
      imageAlt: 'Напоминание о занятии',
      imageNeedsShot: true,
      imageClassName: 'object-cover object-center',
    },
    {
      id: 'card',
      title: 'Начать видеозвонок можно прямо из\u00A0карточки занятия',
      description:
        'Не\u00A0нужно копировать отдельные ссылки на\u00A0видеозвонок, материалы и доску — всё уже под\u00A0рукой.',
      imageSrc: '/assets/main/Hero/main-hero-lesson-card.webp',
      imageAlt: 'Карточка занятия с кнопкой начать',
      imageNeedsShot: true,
      imageClassName: 'object-contain object-center p-8',
    },
  ],
  highlightsTitle: 'Что ещё можно настроить в\u00A0расписании',
  highlights: [
    {
      id: 'repeat',
      title: 'Повтор занятий по\u00A0дням недели',
      imageSrc: '/assets/main/Hero/main-hero-timer.webp',
      imageAlt: 'Повторяющееся занятие',
      bgClassName: 'bg-pink-20',
      badgeTextClassName: 'text-fuchsia-900',
    },
    {
      id: 'move',
      title: 'Перенос одного занятия или\u00A0всей серии',
      imageSrc: '/assets/main/Hero/main-hero-lesson-card.webp',
      imageAlt: 'Перенос занятия',
      bgClassName: 'bg-orange-0',
      badgeTextClassName: 'text-orange-80',
    },
    {
      id: 'notify',
      title: 'Напоминания для\u00A0ученика или\u00A0группы',
      imageSrc: '/assets/main/Devices/main-devices-tablet.webp',
      imageAlt: 'Уведомление о занятии',
      bgClassName: 'bg-amber-400',
      badgeTextClassName: 'text-amber-700',
    },
    {
      id: 'home',
      title: 'Ближайший урок на\u00A0главной',
      imageSrc: '/assets/main/Messages/messages-dashboard.webp',
      imageAlt: 'Ближайшее занятие на главной',
      bgClassName: 'bg-violet-20',
      badgeTextClassName: 'text-violet-100',
    },
  ],
  relatedTitle: 'В\u00A0связке с\u00A0расписанием',
  related: [
    {
      title: 'Кабинеты',
      href: '/classrooms',
      description: 'Занятие всегда привязано к\u00A0кабинету — индивидуальному или групповому',
    },
    {
      title: 'Видеозвонки',
      href: '/calls',
      description: 'Из карточки занятия можно попасть сразу в\u00A0видеозвонок с\u00A0доской и\u00A0чатом',
    },
    {
      title: 'Доска',
      href: '/whiteboard',
      description: 'Доску можно подготовить заранее или\u00A0создать во время видеозвонка',
    },
    {
      title: 'История оплат',
      href: '/payments',
      description: 'Можно легко выставить счёт за\u00A0занятия, которые уже есть в\u00A0расписании',
    },
  ],
  faq: [
    {
      title: 'Ученик может сам назначать занятие?',
      text: 'Нет. Создавать и переносить занятия может только репетитор. Ученик видит расписание своего кабинета и\u00A0получает напоминания о занятиях.',
    },
    {
      title: 'Как перенести повторяющиееся занятие?',
      text: 'Откройте занятие и выберите, что перенести: только это занятие или всю серию. Для серии можно сразу задать новые дни недели и\u00A0время.',
    },
    {
      title: 'Где смотреть занятия на сегодня?',
      text: 'На\u00A0главной странице видно ближайшее занятие. Полный список — на\u00A0странице «Расписание» и\u00A0в\u00A0кабинете.',
    },
  ],
  supportHref: `${SUPPORT_URL}/lessons-and-schedule/create-move-lesson`,
  supportLabel: 'Как назначить или перенести занятие',
  ctaTitle: 'Назначьте первое занятие',
  ctaSubtitle: 'После регистрации ученик увидит его в\u00A0расписании.',
};
