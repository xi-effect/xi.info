import type { ComponentType } from 'react';
import {
  Calendar,
  Conference,
  Notification,
  Payments,
  Section,
  Task,
  Users,
  WhiteBoard,
} from '@xipkg/icons';

export type CapabilityIconT = ComponentType<{ className?: string }>;

export type CapabilityCardT = {
  id: string;
  Icon: CapabilityIconT;
  text: string;
  badge?: 'new' | 'soon';
};

export const CAPABILITIES_HEADING = {
  line1: 'Максимум возможностей',
  line2: 'вместе с\u00A0sovlium',
} as const;

/** Полная строка для SEO / aria */
export const CAPABILITIES_TITLE_FULL = `${CAPABILITIES_HEADING.line1} ${CAPABILITIES_HEADING.line2}`;

export const CAPABILITY_CARDS: readonly CapabilityCardT[] = [
  {
    id: 'schedule',
    Icon: Calendar,
    badge: 'new',
    text: 'Назначайте и переносите занятия в\u00A0расписании. Ученики получат уведомления',
  },
  {
    id: 'materials',
    Icon: WhiteBoard,
    text: 'Собирайте материалы для\u00A0занятий на\u00A0онлайн-доске: картинки, аудио, PDF и другие файлы',
  },
  {
    id: 'calls',
    Icon: Conference,
    text: 'Проводите видеозвонки со\u00A0встроенной онлайн-доской и демонстрацией экрана',
  },
  {
    id: 'rooms',
    Icon: Users,
    text: 'Создавайте кабинеты для\u00A0отдельных учеников и целых групп',
  },
  {
    id: 'knowledge',
    Icon: Section,
    text: 'Создайте свою базу знаний и делитесь ей с\u00A0учениками',
  },
  {
    id: 'reminders',
    Icon: Notification,
    text: 'Настраивайте автоматические уведомления о\u00A0занятиях и оплатах',
  },
  {
    id: 'payments',
    Icon: Payments,
    text: 'Ведите учёт дохода в\u00A0sovlium с\u00A0помощью счетов, таблиц и диаграмм',
  },
  {
    id: 'homework',
    Icon: Task,
    badge: 'soon',
    text: 'Задавайте интересные домашние задания — создать их можно с\u00A0помощью конструктора',
  },
];
