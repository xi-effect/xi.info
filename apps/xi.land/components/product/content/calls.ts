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
  seoTitle: 'Видеозвонки для репетиторов — sovlium',
  seoDescription:
    'Урок из кабинета: проверка устройств, чат, рука, демонстрация экрана. Доску можно открыть, не завершая звонок.',
  title: 'Видеозвонок внутри платформы',
  subtitle:
    'Занятие начинается из кабинета. Перед входом можно проверить камеру и микрофон. Доска открывается в том же уроке: звонок уходит в компактное окно и не прерывается.',
  heroImageSrc: '/assets/main/Hero/main-hero-1-1200w.webp',
  heroImageAlt: 'Видеозвонок и онлайн-доска в sovlium',
  heroImageNeedsShot: true,
  pills: productPills('whiteboard', 'rooms', 'calendar', 'materials'),
  journeyTitle: 'Как проходит занятие',
  journeySubtitle: 'От кнопки в кабинете до доски — без ссылки на другой сервис.',
  steps: [
    {
      id: 'start',
      title: 'Начните занятие из кабинета',
      description:
        'Репетитор нажимает «Начать занятие» в шапке. Ученик — «Присоединиться», когда вы уже в уроке. Ссылку на сторонний сервис копировать не нужно.',
      imageSrc: '/assets/main/Hero/main-hero-tutor.webp',
      imageAlt: 'Кнопка начать занятие',
      imageNeedsShot: true,
      imageClassName: 'object-contain object-center p-10',
    },
    {
      id: 'prejoin',
      title: 'Проверьте камеру и звук до входа',
      description:
        'На экране ожидания видно превью, можно выбрать камеру, микрофон и динамики. Размытие фона — если браузер его поддерживает. Затем нажмите «Присоединиться».',
      imageSrc: '/assets/main/Hero/main-hero-student.webp',
      imageAlt: 'Экран ожидания перед уроком',
      imageNeedsShot: true,
      imageClassName: 'object-contain object-center p-10',
    },
    {
      id: 'live',
      title: 'Во время урока',
      description:
        'Сетка участников, демонстрация экрана, чат и кнопка «Поднять руку». Микрофон и камера — слева на нижней панели, завершение урока — справа.',
      imageSrc: '/assets/main/Features/main-features-chat.webp',
      imageAlt: 'Чат и панель управления в видеозвонке',
      imageClassName: 'object-contain object-bottom',
    },
    {
      id: 'board',
      title: 'Доска открывается, звонок продолжается',
      description:
        'Репетитор выбирает доску кабинета из панели звонка. Если включена совместная работа, ученики переходят вместе. Звонок сворачивается в компактное окно, камера и микрофон работают дальше.',
      imageSrc: '/assets/main/Hero/main-hero-1-1200w.webp',
      imageAlt: 'Доска во время видеоурока',
      imageNeedsShot: true,
      imageClassName: 'object-cover object-center',
    },
  ],
  highlightsTitle: 'Что есть на уроке',
  highlights: [
    {
      id: 'chat',
      title: 'Чат на всех участников',
      imageSrc: '/assets/main/Features/main-features-chat.webp',
      imageAlt: 'Чат в видеозвонке',
      bgClassName: 'bg-amber-400',
      badgeTextClassName: 'text-amber-700',
    },
    {
      id: 'hand',
      title: 'Кнопка «Поднять руку»',
      imageSrc: '/assets/main/Features/main-features-raise-hand.webp',
      imageAlt: 'Поднять руку на уроке',
      bgClassName: 'bg-sky-300',
      badgeTextClassName: 'text-slate-600',
    },
    {
      id: 'compact',
      title: 'Урок в маленьком окне',
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
  relatedTitle: 'Рядом со звонком',
  related: [
    {
      title: 'Кабинеты',
      href: '/classrooms',
      description: 'Вход в урок — из кабинета ученика или группы.',
    },
    {
      title: 'Онлайн-доска',
      href: '/whiteboard',
      description: 'Подготовьте доску заранее и откройте её во время звонка.',
    },
    {
      title: 'Расписание',
      href: '/calendar',
      description: 'К занятию уже привязаны время, кабинет и материалы.',
    },
    {
      title: 'Материалы',
      href: '/materials',
      description: 'Файлы и доски кабинета доступны, пока идёт звонок.',
    },
  ],
  faq: [
    {
      title: 'Нужен отдельный сервис для видео?',
      text: 'Нет. Видеоурок встроен в платформу. Отдельный аккаунт в сервисе конференций не нужен.',
    },
    {
      title: 'Что будет со звонком, если открыть доску?',
      text: 'Звонок не завершится. Он свернётся в компактное окно, камера и микрофон продолжат работать. Вернуться к видео можно кнопкой «К видео».',
    },
    {
      title: 'Ученик может открыть доску сам?',
      text: 'Кнопка выбора доски в звонке есть только у репетитора. Ученик переходит на доску вместе с вами, если включён режим совместной работы.',
    },
  ],
  supportHref: `${SUPPORT_URL}/video-lesson`,
  supportLabel: 'Как провести видеоурок',
  ctaTitle: 'Проведите пробный урок',
  ctaSubtitle: 'Зарегистрируйтесь, пригласите ученика и нажмите «Начать занятие».',
};
