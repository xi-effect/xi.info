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
  seoTitle: 'Учебные материалы для репетиторов — sovlium',
  seoDescription:
    'Библиотека досок и заметок репетитора и то, что видит ученик в кабинете. Доступ: совместная работа, только репетитор или черновик.',
  title: 'Материалы репетитора и то, что видит ученик',
  subtitle:
    'У вас — общая библиотека досок и заметок. У ученика — только материалы его кабинета и только с тем доступом, который вы выбрали.',
  heroImageSrc: '/assets/main/Messages/messages-dashboard.webp',
  heroImageAlt: 'Библиотека материалов в sovlium',
  heroImageNeedsShot: true,
  pills: productPills('whiteboard', 'rooms', 'conference', 'calendar'),
  journeyTitle: 'Как устроена библиотека',
  journeySubtitle: 'Сначала ваши материалы, потом — то, что видит ученик.',
  steps: [
    {
      id: 'library',
      title: 'Все доски и заметки в одном разделе',
      description:
        'В боковом меню — «Материалы». Вверху переключатель «Доски | Заметки». Здесь лежит всё ваше, не только то, что уже выдано ученику.',
      imageSrc: '/assets/main/Devices/main-devices-desktop.webp',
      imageAlt: 'Раздел материалы',
      imageNeedsShot: true,
      imageClassName: 'object-cover object-[center_38%]',
    },
    {
      id: 'classroom',
      title: 'В кабинете — только нужное этому ученику',
      description:
        'Вкладка «Материалы» в кабинете показывает доски и заметки, привязанные к этому ученику или группе. Для ученика это основной способ увидеть файлы.',
      imageSrc: '/assets/main/Messages/messages-dashboard.webp',
      imageAlt: 'Материалы внутри кабинета',
      imageNeedsShot: true,
      imageClassName: 'object-contain object-right',
    },
    {
      id: 'access',
      title: 'Три уровня доступа',
      description:
        'Совместная работа — ученик видит материал и может его править. «Только репетитор» и «черновик» — ученик материал не видит. Доступ меняется из меню карточки в любой момент.',
      imageSrc: '/assets/main/Features/main-features-pdf.webp',
      imageAlt: 'Настройка доступа к материалу',
      imageNeedsShot: true,
      imageClassName: 'object-contain object-bottom',
    },
    {
      id: 'reuse',
      title: 'Подготовили раз — используете снова',
      description:
        'Доска или заметка остаётся в библиотеке. Её можно открыть из материалов или из кабинета и вынести в урок, не копируя файлы по ученикам вручную.',
      imageSrc: '/assets/main/Features/main-features-frames.webp',
      imageAlt: 'Повторное использование материалов',
      imageClassName: 'object-contain object-bottom',
    },
  ],
  highlightsTitle: 'Что лежит в материалах',
  highlights: [
    {
      id: 'boards',
      title: 'Доски',
      imageSrc: '/assets/main/Features/main-features-frames.webp',
      imageAlt: 'Доски в материалах',
      bgClassName: 'bg-green-0',
      badgeTextClassName: 'text-green-80',
    },
    {
      id: 'notes',
      title: 'Заметки и конспекты',
      imageSrc: '/assets/main/Features/main-features-pdf.webp',
      imageAlt: 'Заметки',
      bgClassName: 'bg-cyan-20',
      badgeTextClassName: 'text-cyan-100',
    },
    {
      id: 'files',
      title: 'PDF, картинки, аудио',
      imageSrc: '/assets/main/Features/main-features-audio.webp',
      imageAlt: 'Файлы на доске',
      bgClassName: 'bg-brand-80',
      badgeTextClassName: 'text-brand-80',
    },
    {
      id: 'drafts',
      title: 'Черновики, которые ученик не видит',
      imageSrc: '/assets/main/Hero/main-hero-lesson-card.webp',
      imageAlt: 'Черновик материала',
      bgClassName: 'bg-violet-20',
      badgeTextClassName: 'text-violet-100',
    },
  ],
  relatedTitle: 'Рядом с материалами',
  related: [
    {
      title: 'Онлайн-доска',
      href: '/whiteboard',
      description: 'Как рисовать, крепить PDF и открывать холст в звонке.',
    },
    {
      title: 'Кабинеты',
      href: '/classrooms',
      description: 'Ученик видит только то, что лежит в его кабинете с нужным доступом.',
    },
    {
      title: 'Видеозвонки',
      href: '/calls',
      description: 'Во время урока доска кабинета открывается из панели звонка.',
    },
    {
      title: 'Расписание',
      href: '/calendar',
      description: 'К занятию можно заранее привязать подготовленные материалы.',
    },
  ],
  faq: [
    {
      title: 'Ученик видит всю мою библиотеку?',
      text: 'Нет. Ученик видит материалы только внутри своего кабинета и только с доступом «совместная работа». Черновики и «только репетитор» ему недоступны.',
    },
    {
      title: 'Чем доска отличается от заметки?',
      text: 'Доска — интерактивный холст: рисунок, файлы, фреймы. Заметка — текстовый конспект. Оба типа живут в материалах и могут быть привязаны к кабинету.',
    },
    {
      title: 'Можно подготовить материал и не показывать его сразу?',
      text: 'Да. Поставьте доступ «черновик» или «только репетитор», а перед уроком переключите на совместную работу.',
    },
  ],
  supportHref: `${SUPPORT_URL}/board-and-notes/where-are-boards`,
  supportLabel: 'Где лежат доски и конспекты',
  ctaTitle: 'Добавьте первый материал',
  ctaSubtitle: 'Зарегистрируйтесь и загрузите файл. Доступ ученику можно выдать позже.',
};
