import { SUPPORT_URL } from 'lib/app_urls';

import { productPills } from '../product_pills';
import type { ProductPageContentT } from '../types';

/**
 * Нужные кадры:
 * — раздел «Материалы», вкладки Доски / Заметки
 * — вкладка материалов в кабинете
 * — меню «Поменять доступ»
 */
export const materialsContent: ProductPageContentT = {
  slug: 'materials',
  seoTitle: 'Учебные материалы для репетиторов в sovlium',
  seoDescription: 'Где репетитору хранить онлайн-доски, заметки, учебники и файлы',
  title: 'Учебные материалы',
  subtitle:
    'В sovlium вы можете собрать собственную библиотеку материалов и\u00A0легко управлять доступом к\u00A0ней.',
  heroImageSrc: '/assets/main/Messages/messages-dashboard.webp',
  heroImageAlt: 'Библиотека материалов в sovlium',
  heroImageNeedsShot: true,
  pills: productPills('whiteboard', 'rooms', 'conference', 'calendar'),
  journeyTitle: 'Как хранить материалы в\u00A0sovlium',
  journeySubtitle: 'И\u00A0делиться ими с\u00A0учениками',
  steps: [
    {
      id: 'library',
      title: 'Все ваши доски, файлы и\u00A0заметки — в\u00A0одном разделе',
      description:
        'Вы можете управлять материалами: создавать копии для\u00A0разных кабинетов, добавлять теги для\u00A0удобной сортировки.',
      imageSrc: '/assets/main/Devices/main-devices-desktop.webp',
      imageAlt: 'Раздел «Материалы»',
      imageNeedsShot: true,
      imageClassName: 'object-cover object-[center_38%]',
    },
    {
      id: 'classroom',
      title: 'Ученик видит только те материалы, к\u00A0которым ему открыли доступ',
      description:
        'Вы можете создавать в\u00A0кабинете черновики материалов и\u00A0открывать доступ к\u00A0ним, когда захотите.',
      imageSrc: '/assets/main/Messages/messages-dashboard.webp',
      imageAlt: 'Материалы внутри кабинета',
      imageNeedsShot: true,
      imageClassName: 'object-contain object-right',
    },
    {
      id: 'access',
      title: 'Несколько уровней доступа',
      description:
        'Разрешите ученику редактировать материал или\u00A0оставьте материал в\u00A0статусе «Только чтение».',
      imageSrc: '/assets/main/Features/main-features-pdf.webp',
      imageAlt: 'Настройка доступа к материалу',
      imageNeedsShot: true,
      imageClassName: 'object-contain object-bottom',
    },
    {
      id: 'reuse',
      title: 'Ничто не\u00A0теряется',
      description:
        'Доски, заметки и\u00A0файлы остаются в\u00A0библиотеке. Вы можете использовать их заново в\u00A0других кабинетах.',
      imageSrc: '/assets/main/Features/main-features-frames.webp',
      imageAlt: 'Повторное использование материалов',
      imageClassName: 'object-contain object-bottom',
    },
  ],
  highlightsTitle: 'Что есть в\u00A0Материалах',
  highlights: [
    {
      id: 'boards',
      title: 'Доски',
      imageSrc: '/assets/main/Features/main-features-frames.webp',
      imageAlt: 'Онлайн-доски',
      bgClassName: 'bg-green-0',
      badgeTextClassName: 'text-green-80',
    },
    {
      id: 'notes',
      title: 'Заметки с\u00A0картинками',
      imageSrc: '/assets/main/Features/main-features-pdf.webp',
      imageAlt: 'Заметки',
      bgClassName: 'bg-cyan-20',
      badgeTextClassName: 'text-cyan-100',
    },
    {
      id: 'files',
      title: 'PDF, изображения, аудио',
      imageSrc: '/assets/main/Features/main-features-audio.webp',
      imageAlt: 'Файлы на доске',
      bgClassName: 'bg-brand-80',
      badgeTextClassName: 'text-brand-80',
    },
    {
      id: 'drafts',
      title: 'Презентации',
      imageSrc: '/assets/main/Hero/main-hero-lesson-card.webp',
      imageAlt: 'Черновик материала',
      bgClassName: 'bg-violet-20',
      badgeTextClassName: 'text-violet-100',
    },
  ],
  relatedTitle: 'В\u00A0связке с\u00A0материалами',
  related: [
    {
      title: 'Онлайн-доска',
      href: '/whiteboard',
      description: 'Можно рисовать, добавлять элементы и\u00A0открывать доску в\u00A0звонке',
    },
    {
      title: 'Кабинеты',
      href: '/classrooms',
      description: 'Ученик видит только то, что вы откроете для\u00A0него',
    },
    {
      title: 'Видеозвонки',
      href: '/calls',
      description: 'Во\u00A0время занятия доска встраивается в\u00A0видеозвонок',
    },
    {
      title: 'Расписание',
      href: '/calendar',
      description: 'К\u00A0занятию можно заранее привязать подготовленные материалы',
    },
  ],
  faq: [
    {
      title: 'Ученик видит все мои материалы?',
      text: 'Нет. Ученик видит материалы только внутри своего кабинета. Ученики также не\u00A0видят черновики материалов в\u00A0своём кабинете.',
    },
    {
      title: 'Чем доска отличается от\u00A0заметки?',
      text: 'Доска — интерактивный холст: рисунок, файлы, фреймы. Заметка — конспект с\u00A0текстом и\u00A0картинками.',
    },
    {
      title: 'Можно подготовить материал и\u00A0не показывать его сразу?',
      text: 'Да. Переведите его в\u00A0статус «Черновик», а\u00A0перед занятием откройте к\u00A0нему доступ.',
    },
  ],
  supportHref: `${SUPPORT_URL}/board-and-notes/where-are-boards`,
  supportLabel: 'Где лежат доски и\u00A0заметки',
  ctaTitle: 'Добавьте первый материал',
  ctaSubtitle: 'Зарегистрируйтесь и\u00A0загрузите материал. Доступ ученику можно выдать позже.',
};
