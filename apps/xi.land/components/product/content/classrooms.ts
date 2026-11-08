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
  seoTitle: 'Кабинеты для учеников и групп в sovlium',
  seoDescription:
    'Как репетитору проводить онлайн-занятия, вести расписание и хранить историю оплат в кабинетах sovlium',
  title: 'Кабинет для одного ученика или\u00A0целой группы',
  subtitle: 'Храните расписание, учебные материалы и\u00A0историю оплат в\u00A0одном пространстве.',
  heroImageSrc: '/assets/main/Devices/main-devices-desktop.webp',
  heroImageAlt: 'Рабочий стол репетитора в платформе sovlium',
  heroImageNeedsShot: true,
  pills: productPills('calendar', 'materials', 'payments', 'conference'),
  journeyTitle: 'Кабинеты в\u00A0sovlium',
  journeySubtitle: 'Рассказываем о\u00A0полезных функциях',
  steps: [
    {
      id: 'create',
      title: 'Легко создавайте кабинеты',
      description:
        'Отправьте ученику ссылку-приглашение — любым удобным способом. Когда ученик зарегистрируется по\u00A0ссылке, он появится в\u00A0вашем списке.',
      imageSrc: '/assets/main/Devices/main-devices-desktop.webp',
      imageAlt: 'Список кабинетов в sovlium',
      imageNeedsShot: true,
      imageClassName: 'object-cover object-[center_38%]',
    },
    {
      id: 'invite',
      title: 'Управляйте кабинетами в\u00A0пару кликов',
      description:
        'Вы можете менять описание и\u00A0название кабинета, ставить занятия на паузу и\u00A0возобновлять их — все данные в\u00A0кабинете сохранятся.',
      imageSrc: '/assets/main/Hero/main-hero-lesson-card.webp',
      imageAlt: 'Приглашение ученика в кабинет',
      imageNeedsShot: true,
      imageClassName: 'object-contain object-center p-8',
    },
    {
      id: 'tabs',
      title: 'Храните в\u00A0кабинете всё, что угодно',
      description:
        'Расписание, история оплат, онлайн-доски, файлы и\u00A0заметки всегда на\u00A0своём месте.',
      imageSrc: '/assets/main/Messages/messages-dashboard.webp',
      imageAlt: 'Вкладки кабинета: сводка, материалы, расписание, оплаты',
      imageNeedsShot: true,
      imageClassName: 'object-contain object-right',
    },
    {
      id: 'start',
      title: 'Начинайте занятия прямо из\u00A0кабинета',
      description:
        'Нажмите «Начать» в\u00A0карточке занятия — так вы быстро перейдёте к\u00A0видеозвонку. Перед видеозвонком можно будет проверить камеру и\u00A0микрофон.',
      imageSrc: '/assets/main/Hero/main-hero-1-1200w.webp',
      imageAlt: 'Начало занятия из кабинета',
      imageNeedsShot: true,
      imageClassName: 'object-cover object-center',
    },
  ],
  highlightsTitle: 'Особенности кабинетов',
  highlights: [
    {
      id: 'individual',
      title: 'Индивидуальный кабинет — для одного ученика',
      imageSrc: '/assets/main/Hero/main-hero-student.webp',
      imageAlt: 'Индивидуальный кабинет',
      bgClassName: 'bg-violet-20',
      badgeTextClassName: 'text-violet-100',
    },
    {
      id: 'group',
      title: 'А в\u00A0группе может быть до 15\u00A0учеников',
      imageSrc: '/assets/main/Devices/main-devices-tablet.webp',
      imageAlt: 'Групповой кабинет',
      bgClassName: 'bg-brand-80',
      badgeTextClassName: 'text-brand-80',
    },
    {
      id: 'access',
      title: 'Вы управляете доступом к\u00A0материалам в\u00A0кабинете',
      imageSrc: '/assets/main/Features/main-features-pdf.webp',
      imageAlt: 'Настройка доступа к материалам',
      bgClassName: 'bg-cyan-20',
      badgeTextClassName: 'text-cyan-100',
    },
    {
      id: 'invite-limit',
      title: 'Ссылку-приглашение можно использовать много раз',
      imageSrc: '/assets/main/Hero/main-hero-lesson-card.webp',
      imageAlt: 'Ссылка-приглашение',
      bgClassName: 'bg-amber-400',
      badgeTextClassName: 'text-amber-700',
    },
  ],
  relatedTitle: 'В\u00A0связке с\u00A0кабинетом',
  related: [
    {
      title: 'Расписание',
      href: '/calendar',
      description:
        'Назначить новое занятие можно в\u00A0общем расписании или в\u00A0расписании кабинета',
    },
    {
      title: 'Видеозвонки',
      href: '/calls',
      description: 'Занятие проходит в\u00A0sovlium, переходить в\u00A0сторонние сервисы не нужно',
    },
    {
      title: 'Материалы',
      href: '/materials',
      description: 'Ученики видят только те материалы, к\u00A0которым вы открыли доступ',
    },
    {
      title: 'Оплаты',
      href: '/payments',
      description: 'На\u00A0вкладке «Оплаты» можно выставить счёт',
    },
  ],
  faq: [
    {
      title: 'Чем кабинет отличается от чата с учеником?',
      text: 'Кабинет — это общее рабочее пространство, которое включает расписание, доски, файлы и\u00A0историю оплат. В\u00A0отличие от\u00A0чата, в\u00A0кабинете всё упорядочено.',
    },
    {
      title: 'Ученику нужно что-то покупать?',
      text: 'Для учеников sovlium бесплатен. Вы отправляете ссылку, ученик регистрируется и\u00A0заходит в кабинет.',
    },
    {
      title: 'В sovlium можно вести и\u00A0индивидуальные, и\u00A0групповые занятия?',
      text: 'Да. Можно создать индивидуальный кабинет — на одного ученика. Группа вмещает до 15\u00A0учеников, материалы и\u00A0расписание у\u00A0них общие.',
    },
  ],
  supportHref: `${SUPPORT_URL}/classrooms`,
  supportLabel: 'Как пригласить ученика',
  ctaTitle: 'Создайте первый кабинет',
  ctaSubtitle: 'Зарегистрируйтесь, отправьте приглашение ученику — и\u00A0можно назначать занятие.',
};
