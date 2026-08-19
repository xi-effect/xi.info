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
  seoTitle: 'Онлайн-доска для репетиторов — sovlium',
  seoDescription:
    'Готовьте доску заранее: PDF, картинки, аудио, фреймы и таймер. Откройте её в видеоуроке — звонок не прервётся.',
  title: 'Доска, которую можно подготовить заранее',
  subtitle:
    'Рисунок, текст, фигуры, PDF, картинки и звук на одном холсте. На уроке открываете ту же доску — ученики видят её вместе с вами.',
  heroImageSrc: '/assets/main/Features/main-features-pdf.webp',
  heroImageAlt: 'Работа с PDF на онлайн-доске sovlium',
  pills: productPills('conference', 'materials', 'rooms', 'calendar'),
  journeyTitle: 'Как пользоваться доской',
  journeySubtitle: 'Сначала заготовка в материалах, потом та же доска в звонке.',
  steps: [
    {
      id: 'prepare',
      title: 'Соберите доску в материалах',
      description:
        'Доски лежат в разделе «Материалы» и во вкладке кабинета. Создайте холст заранее: схема, задача, страница учебника. В звонке останется открыть готовую доску.',
      imageSrc: '/assets/main/Features/main-features-frames.webp',
      imageAlt: 'Заготовка доски до урока',
      imageNeedsShot: true,
      imageClassName: 'object-contain object-bottom',
    },
    {
      id: 'files',
      title: 'Добавьте на холст то, чем объясняете',
      description:
        'PDF, картинку и аудио можно положить прямо на доску. Страница учебника и ваш рисунок оказываются рядом, без демонстрации другой вкладки.',
      imageSrc: '/assets/main/Features/main-features-pdf.webp',
      imageAlt: 'PDF и файлы на доске',
      imageClassName: 'object-contain object-bottom',
    },
    {
      id: 'draw',
      title: 'Рисуйте, пишите, выделяйте',
      description:
        'Перо, текст, фигуры, отмена и повтор. Фреймы помогают разложить этапы урока по зонам холста.',
      imageSrc: '/assets/main/Features/main-features-frames.webp',
      imageAlt: 'Инструменты рисования и фреймы',
      imageClassName: 'object-contain object-bottom',
    },
    {
      id: 'call',
      title: 'Откройте ту же доску в звонке',
      description:
        'Из нижней панели урока выберите доску кабинета или создайте новую. Совместная работа включена по умолчанию: ученик видит холст, звонок уходит в компактный режим.',
      imageSrc: '/assets/main/Hero/main-hero-1-1200w.webp',
      imageAlt: 'Доска во время видеозвонка',
      imageNeedsShot: true,
      imageClassName: 'object-cover object-center',
    },
  ],
  highlightsTitle: 'Что можно добавить на доску',
  highlights: [
    {
      id: 'pdf',
      title: 'PDF на доске',
      imageSrc: '/assets/main/Features/main-features-pdf.webp',
      imageAlt: 'PDF на онлайн-доске',
      bgClassName: 'bg-red-600',
      badgeTextClassName: 'text-red-800',
    },
    {
      id: 'audio',
      title: 'Аудиофайлы на доске',
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
      title: 'Таймер урока',
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
      description: 'Все доски и заметки — в библиотеке репетитора и в кабинете ученика',
    },
    {
      title: 'Видеозвонки',
      href: '/calls',
      description: 'Доску можно открыть из панели звонка, не завершая урок',
    },
    {
      title: 'Кабинеты',
      href: '/classrooms',
      description: 'Ученик видит доску, если вы открыли к ней доступ',
    },
    {
      title: 'Расписание',
      href: '/calendar',
      description: 'Подготовьте холст к конкретному занятию заранее',
    },
  ],
  faq: [
    {
      title: 'Где хранятся доски?',
      text: 'В разделе «Материалы» у репетитора — все сразу. В кабинете — только привязанные к этому ученику или группе. Ученик видит материалы внутри кабинета. После урока доска никуда не пропадает.',
    },
    {
      title: 'Можно прикрепить учебник в PDF?',
      text: 'Да. PDF, картинку и аудио добавляют на доску как объекты холста. Поверх страницы учебника можно рисовать.',
    },
    {
      title: 'Доска во время звонка — это другая доска?',
      text: 'Нет. Вы выбираете доску кабинета из списка или создаёте новую. Это те же материалы, что лежат в библиотеке.',
    },
  ],
  supportHref: `${SUPPORT_URL}/board-and-notes`,
  supportLabel: 'Как работать с доской',
  ctaTitle: 'Соберите первую доску',
  ctaSubtitle: 'Загрузите PDF, разметьте фреймы и откройте холст уже в звонке.',
};
