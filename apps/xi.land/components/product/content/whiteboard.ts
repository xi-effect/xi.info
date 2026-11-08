import { SUPPORT_URL } from 'lib/app_urls';

import { productPills } from '../product_pills';
import type { ProductPageContentT } from '../types';

/**
 * Нужные кадры:
 * — пустая доска с тулбаром
 * — PDF на доске
 * — аудиоплеер на доске
 * — выбор доски из звонка
 */
export const whiteboardContent: ProductPageContentT = {
  slug: 'whiteboard',
  seoTitle: 'Онлайн-доска для репетиторов в sovlium',
  seoDescription:
    'Онлайн-доска для репетитора в sovlium поддерживает аудио, PDF, изображения, формулы, презентации и многое другое.',
  title: 'Онлайн-доска в sovlium — ваш холст для\u00A0занятий',
  subtitle:
    'Доска создана специально для\u00A0репетиторов. Она поддерживает аудио, PDF, изображения, формулы, презентации, задания из\u00A0банка заданий и\u00A0интерактивные упражнения.',
  heroImageSrc: '/assets/main/Features/main-features-pdf.webp',
  heroImageAlt: 'Работа с PDF на онлайн-доске sovlium',
  pills: productPills('conference', 'materials', 'rooms', 'calendar'),
  journeyTitle: 'Как пользоваться онлайн-доской',
  journeySubtitle: 'До и\u00A0во\u00A0время видеозвонка',
  steps: [
    {
      id: 'prepare',
      title: 'Доски хранятся в\u00A0разделе «Материалы»',
      description: 'Вы можете подготовить доску заранее или\u00A0создать новую.',
      imageSrc: '/assets/main/Features/main-features-frames.webp',
      imageAlt: 'Подготовка доски до занятия',
      imageNeedsShot: true,
      imageClassName: 'object-contain object-bottom',
    },
    {
      id: 'files',
      title: 'Добавляйте на\u00A0онлайн-доску любые учебные материалы',
      description:
        'Вы можете настроить подходящий фон для\u00A0онлайн-доски и\u00A0добавить на\u00A0неё аудио, PDF, изображения, формулы, фигуры, презентации и\u00A0многое другое.',
      imageSrc: '/assets/main/Features/main-features-pdf.webp',
      imageAlt: 'PDF и файлы на доске',
      imageClassName: 'object-contain object-bottom',
    },
    {
      id: 'draw',
      title: 'Рисуйте, пишите, выделяйте',
      description:
        'Используйте кисти, перо, текст и\u00A0лазерную указку. Легко подчёркивайте важное.',
      imageSrc: '/assets/main/Features/main-features-frames.webp',
      imageAlt: 'Инструменты рисования и\u00A0фреймы',
      imageClassName: 'object-contain object-bottom',
    },
    {
      id: 'call',
      title: 'Работайте на\u00A0доске во\u00A0время видеозвонка',
      description:
        'Переключайтесь между видеозвонком и\u00A0доской. При переключении ученики окажутся на\u00A0доске автоматически.',
      imageSrc: '/assets/main/Hero/main-hero-1-1200w.webp',
      imageAlt: 'Доска во время видеозвонка',
      imageNeedsShot: true,
      imageClassName: 'object-cover object-center',
    },
  ],
  highlightsTitle: 'Что можно добавить на\u00A0доску',
  highlights: [
    {
      id: 'pdf',
      title: 'PDF и\u00A0презентации',
      imageSrc: '/assets/main/Features/main-features-pdf.webp',
      imageAlt: 'PDF на онлайн-доске',
      bgClassName: 'bg-red-600',
      badgeTextClassName: 'text-red-800',
    },
    {
      id: 'audio',
      title: 'Аудио, формулы, интерактивные упражнения',
      imageSrc: '/assets/main/Features/main-features-audio.webp',
      imageAlt: 'Аудио на доске',
      bgClassName: 'bg-brand-80',
      badgeTextClassName: 'text-brand-80',
    },
    {
      id: 'frames',
      title: 'Фреймы',
      imageSrc: '/assets/main/Features/main-features-frames.webp',
      imageAlt: 'Фреймы на доске',
      bgClassName: 'bg-lime-400',
      badgeTextClassName: 'text-lime-700',
    },
    {
      id: 'timer',
      title: 'Таймер',
      imageSrc: '/assets/main/Features/main-features-timer.webp',
      imageAlt: 'Таймер на доске',
      bgClassName: 'bg-fuchsia-500',
      badgeTextClassName: 'text-purple-800',
    },
  ],
  relatedTitle: 'Рядом с доской',
  related: [
    {
      title: 'Материалы',
      href: '/materials',
      description: 'Все доски, файлы и\u00A0заметки — на\u00A0вкладке «Материалы»',
    },
    {
      title: 'Видеозвонки',
      href: '/calls',
      description: 'Видеозвонок и\u00A0доска могут работать параллельно',
    },
    {
      title: 'Кабинеты',
      href: '/classrooms',
      description: 'Если к\u00A0доске открыт доступ, ученик сможет открыть её и\u00A0после занятия',
    },
    {
      title: 'Расписание',
      href: '/calendar',
      description: 'Доску можно подготовить заранее и\u00A0добавить в\u00A0материалы занятия',
    },
  ],
  faq: [
    {
      title: 'Где хранятся доски?',
      text: 'В разделе «Материалы» репетитор видит все доски, а ученик — только те, к\u00A0которым у\u00A0него есть доступ.',
    },
    {
      title: 'Можно прикрепить учебник в\u00A0PDF?',
      text: 'Да. PDF, картинку, презентацию или\u00A0аудиофайл можно добавить на доску как отдельный объект. Поверх страницы учебника можно рисовать.',
    },
    {
      title: 'Во время звонка автоматически создаётся новая доска?',
      text: 'Нет. Вы выбираете доску кабинета из\u00A0списка или вручную создаёте новую доску. Доска остаётся в\u00A0разделе «Материалы».',
    },
  ],
  supportHref: `${SUPPORT_URL}/board-and-notes`,
  supportLabel: 'Как работать с доской',
  ctaTitle: 'Соберите первую доску',
  ctaSubtitle: 'Загрузите PDF, разметьте фреймы и\u00A0откройте доску уже в\u00A0видеозвонке.',
};
