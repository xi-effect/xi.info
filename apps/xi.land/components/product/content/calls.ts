import { SUPPORT_URL } from 'lib/app_urls';

import { productPills } from '../product_pills';
import type { ProductPageContentT } from '../types';

/**
 * Нужные кадры / запись экрана:
 * — prejoin (камера, микрофон)
 * — сетка видео + нижняя панель
 * — чат и «поднять руку»
 * — доска в звонке + compact-режим
 */
export const callsContent: ProductPageContentT = {
  slug: 'calls',
  seoTitle: 'Видеозвонки для репетиторов в sovlium',
  seoDescription: 'Видеозвонки для репетиторов со встроенной онлайн-доской и демонстрацией экрана.',
  title: 'Как проводить онлайн-занятия в\u00A0sovlium',
  subtitle:
    'Видеозвонок — часть рабочей среды в\u00A0sovlium. Он настроен специально для\u00A0репетиторов.',
  heroImageSrc: '/assets/main/Hero/main-hero-1-1200w.webp',
  heroImageAlt: 'Видеозвонок и онлайн-доска в sovlium',
  heroImageNeedsShot: true,
  pills: productPills('whiteboard', 'rooms', 'calendar', 'materials'),
  journeyTitle: 'Как начать и\u00A0провести занятие',
  journeySubtitle: 'От кнопки в\u00A0кабинете до\u00A0онлайн-доски — всё на\u00A0одной платформе',
  steps: [
    {
      id: 'start',
      title: 'Начните занятие из\u00A0кабинета',
      description:
        'Репетитор нажимает «Начать занятие» в карточке, и\u00A0ученики могут присоединиться к\u00A0видеозвонку.',
      imageSrc: '/assets/main/Hero/main-hero-tutor.webp',
      imageAlt: 'Кнопка Начать занятие',
      imageNeedsShot: true,
      imageClassName: 'object-contain object-center p-10',
    },
    {
      id: 'prejoin',
      title: 'Настройте камеру и\u00A0звук',
      description:
        'В\u00A0sovlium можно размыть фон, отразить изображение и\u00A0улучшить микрофон, чтобы вас было лучше слышно.',
      imageSrc: '/assets/main/Hero/main-hero-student.webp',
      imageAlt: 'Экран ожидания перед занятием',
      imageNeedsShot: true,
      imageClassName: 'object-contain object-center p-10',
    },
    {
      id: 'live',
      title: 'Управляйте видеозвонком',
      description:
        'Вы можете подключать онлайн-доски, демонстрировать экран, общаться в\u00A0чате и\u00A0ставить реакции.',
      imageSrc: '/assets/main/Features/main-features-chat.webp',
      imageAlt: 'Чат и панель управления в видеозвонке',
      imageClassName: 'object-contain object-bottom',
    },
    {
      id: 'board',
      title: 'Объясняйте материал на\u00A0доске',
      description:
        'Переходите на\u00A0онлайн-доску в\u00A0один клик — ученики последуют за вами автоматически. Пока вы демонстрируете доску, видеозвонок продолжается в\u00A0компактном режиме.',
      imageSrc: '/assets/main/Hero/main-hero-1-1200w.webp',
      imageAlt: 'Доска во время видеозвонка',
      imageNeedsShot: true,
      imageClassName: 'object-cover object-center',
    },
  ],
  highlightsTitle: 'Что есть в\u00A0видеозвонке',
  highlights: [
    {
      id: 'chat',
      title: 'Чат на\u00A0всех участников',
      imageSrc: '/assets/main/Features/main-features-chat.webp',
      imageAlt: 'Чат в видеозвонке',
      bgClassName: 'bg-amber-400',
      badgeTextClassName: 'text-amber-700',
    },
    {
      id: 'hand',
      title: 'Кнопка «Поднять руку»',
      imageSrc: '/assets/main/Features/main-features-raise-hand.webp',
      imageAlt: 'Поднять руку на занятии',
      bgClassName: 'bg-sky-300',
      badgeTextClassName: 'text-slate-600',
    },
    {
      id: 'compact',
      title: 'Компактный режим',
      imageSrc: '/assets/main/Hero/main-hero-tutor.webp',
      imageAlt: 'Компактный режим звонка',
      bgClassName: 'bg-yellow-20',
      badgeTextClassName: 'text-amber-900',
    },
    {
      id: 'blur',
      title: 'Размытие фона',
      imageSrc: '/assets/main/Hero/main-hero-student.webp',
      imageAlt: 'Размытие фона в звонке',
      bgClassName: 'bg-violet-20',
      badgeTextClassName: 'text-violet-100',
    },
  ],
  relatedTitle: 'Что связано с\u00A0видеозвонком',
  related: [
    {
      title: 'Кабинеты',
      href: '/classrooms',
      description: 'Начать видеозвонок можно из\u00A0кабинета ученика или группы',
    },
    {
      title: 'Онлайн-доска',
      href: '/whiteboard',
      description: 'Подготовьте доску заранее и\u00A0откройте её во\u00A0время звонка',
    },
    {
      title: 'Расписание',
      href: '/calendar',
      description: 'К занятию уже привязаны время, кабинет и\u00A0материалы',
    },
    {
      title: 'Материалы',
      href: '/materials',
      description: 'Файлы и\u00A0доски кабинета доступны во\u00A0время видеозвонка и\u00A0после',
    },
  ],
  faq: [
    {
      title: 'Нужен ли отдельный сервис для видеозвонков?',
      text: 'Видеозвонок проходит в\u00A0sovlium. Отдельный аккаунт в\u00A0других сервисах не\u00A0нужен.',
    },
    {
      title: 'Что будет со звонком, если открыть доску?',
      text: 'Видеозвонок не завершится. Он свернётся в компактное окно, камера и микрофон продолжат работать. Вернуться к\u00A0видео можно будет по кнопке «К видео».',
    },
    {
      title: 'Ученик может открыть доску сам?',
      text: 'Кнопка для выбора доски есть только у\u00A0репетитора. Ученик переходит на\u00A0доску вместе с\u00A0вами, если включён режим совместной работы.',
    },
  ],
  supportHref: `${SUPPORT_URL}/video-lesson`,
  supportLabel: 'Как провести занятие',
  ctaTitle: 'Проведите пробное занятие',
  ctaSubtitle: 'Зарегистрируйтесь, пригласите ученика и\u00A0нажмите «Начать занятие».',
};
