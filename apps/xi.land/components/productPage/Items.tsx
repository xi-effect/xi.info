/* eslint-disable react/jsx-no-useless-fragment */

'use client';

import React from 'react';
import { motion } from 'motion';
import Image from 'next/image';
import { Link } from '@xipkg/link';

const featchersData = [
  {
    title: 'Задания и тесты',
    subtitle: 'Проверяйте знания студентов',
    link: 'tasksAndTests',
    items: [
      {
        title: 'Управление доступом',
        content: 'Автоматически открывайте и закрывайте доступ к тесту',
        image: '/assets/productPage/tasksAndTests/1.webp',
        width: 377,
        height: 200,
      },
      {
        title: 'Выбор модели оценивания',
        content: 'Выбирайте модели оценивания или создавайте свои',
        image: '/assets/productPage/tasksAndTests/2.webp',
        width: 250,
        height: 136,
      },
      {
        title: '3 типа вопросов',
        content: 'Добавляйте в тесты разные типы вопросов',
        image: '/assets/productPage/tasksAndTests/3.webp',
        width: 200,
        height: 156,
      },
      {
        title: 'Комментарии',
        content: 'Общайтесь со студентами в комментариях к занятиям и тестам',
        image: '/assets/productPage/tasksAndTests/4.webp',
        width: 400,
        height: 144,
      },
      {
        title: 'Автоматическая проверка',
        content: 'Избавьтесь от рутины — настройте автоматическую проверку заданий',
        image: '/assets/productPage/tasksAndTests/5.webp',
        width: 264,
        height: 98,
      },
    ],
  },
  {
    title: 'Видеозвонки',
    subtitle: 'Проводите занятия в онлайн-режиме',
    link: 'videocalls',
    items: [
      {
        title: 'Молниеносное начало',
        content: 'Начинайте видеоконференцию в любой момент',
        image: '/assets/productPage/videoconference/1.webp',
        width: 282,
        height: 196,
      },
      {
        title: 'Чат',
        content: 'Используйте встроенные чаты',
        image: '/assets/productPage/videoconference/2.webp',
        width: 382,
        height: 198,
      },
      {
        title: 'Демонстрация экрана',
        content: 'Демонстрируйте свой экран студентам',
        image: '/assets/productPage/videoconference/3.webp',
        width: 72,
        height: 72,
      },
      {
        title: 'Реакции',
        content: 'Добавьте возможность поднять руку',
        image: '/assets/productPage/videoconference/4.webp',
        width: 232,
        height: 194,
      },
    ],
  },
  {
    title: 'Чаты',
    subtitle: 'Используйте все возможности для общения',
    link: 'chats',
    items: [
      {
        title: 'Обмен файлами',
        content: 'Пересылайте файлы в один клик',
        image: '/assets/productPage/chats/1.webp',
        width: 400,
        height: 144,
      },
      {
        title: 'Закреплённые сообщения',
        content: 'Закрепляйте важное и просматривайте в отдельном окне',
        image: '/assets/productPage/chats/2.webp',
        width: 300,
        height: 200,
      },
      {
        title: 'Реакции на сообщения',
        content: 'Ставьте реакции-эмоджи, чтобы быстро дать обратную связь',
        image: '/assets/productPage/chats/3.webp',
        width: 298,
        height: 76,
      },
      {
        title: 'Теги',
        content:
          'Чтобы адресовать сообщение конкретному человеку, введите @ и выберите пользователя',
        image: '/assets/productPage/chats/4.webp',
        width: 400,
        height: 144,
      },
      {
        title: 'Форматирование сообщений',
        content: 'Выделяйте важное, вставляйте ссылки',
        image: '/assets/productPage/chats/5.webp',
        width: 400,
        height: 144,
      },
      {
        title: 'Ответы на сообщения',
        content: 'Цитируйте и отвечайте на сообщения',
        image: '/assets/productPage/chats/6.webp',
        width: 400,
        height: 144,
      },
      {
        title: 'Редактирование и удаление',
        content: 'Что-то изменилось? Отредактируйте или удалите сообщение',
        image: '/assets/productPage/chats/7.webp',
        width: 200,
        height: 56,
      },
      {
        title: 'Ссылка на сообщение',
        content:
          'Скопируйте ссылку на сообщение и отправьте студенту или коллеге. Собеседник сможет просмотреть его, только если имеет доступ к чату',
        image: '/assets/productPage/chats/8.webp',
        width: 190,
        height: 128,
      },
    ],
  },
  {
    title: 'Библиотека',
    subtitle: 'Публикуйте лекции, конспекты и другие тексты',
    link: 'library',
    items: [
      {
        title: 'Форматирование',
        content: 'Выделяйте важное, вставляйте ссылки',
        image: '/assets/productPage/announces/1.webp',
        width: 420,
        height: 72,
      },
      {
        title: 'Файлы',
        content: 'Прикрепите файлы к записи',
        image: '/assets/productPage/announces/2.webp',
        width: 393,
        height: 54,
      },
      {
        title: 'Редактор',
        content: 'Создавайте и храните учебные материалы',
        image: '/assets/productPage/announces/3.webp',
        width: 356,
        height: 210,
      },
    ],
  },
  {
    title: 'Объявления',
    subtitle: 'Сообщайте о новостях',
    link: 'announces',
    items: [
      {
        title: 'Уведомления',
        content: 'Студенты моментально получат сообщение об изменениях',
        image: '/assets/productPage/announces/1.webp',
        width: 420,
        height: 72,
      },
    ],
  },
  {
    title: 'Онлайн-доска',
    subtitle: 'Рисуйте на бесконечной доске',
    link: 'whiteboard',
    items: [
      {
        title: 'Множество инструментов',
        content: 'Добавляйте готовые фигуры, стрелки, стикеры или рисуйте от руки',
        image: '/assets/productPage/whiteboard/1.webp',
        width: 280,
        height: 40,
      },
      {
        title: 'Быстрый экспорт',
        content: 'Сохраняйте доску в формате png',
        image: '/assets/productPage/whiteboard/2.webp',
        width: 64,
        height: 64,
      },
      {
        title: 'Работа внутри видеоконференций',
        content: 'Показывайте материал на доске в реальном времени',
        image: '/assets/productPage/whiteboard/3.webp',
        width: 280,
        height: 200,
      },
    ],
  },
  {
    title: 'Управление',
    subtitle: 'Управляйте любым количеством студентов',
    link: 'control',
    items: [
      {
        title: 'Настройка ролей',
        content: 'Создавайте и настраивайте неограниченное количество ролей',
        image: '/assets/productPage/control/1.webp',
        width: 236,
        height: 172,
      },
      {
        title: 'Права пользователей',
        content: 'Настраивайте права для каждой роли',
        image: '/assets/productPage/control/2.webp',
        width: 354,
        height: 190,
      },
      {
        title: 'Массовое добавление пользователей',
        content: 'Приглашайте студентов и коллег через ссылки, выдавая сразу необходимые роли',
        image: '/assets/productPage/control/3.webp',
        width: 292,
        height: 56,
      },
    ],
  },
  {
    title: 'Навигация',
    subtitle: 'Организуйте работу так, как вам удобно',
    link: 'navigation',
    items: [
      {
        title: 'Всё по категориям',
        content: 'Группируйте каналы по категориям',
        image: '/assets/productPage/navigation/1.webp',
        width: 400,
        height: 200,
      },
      {
        title: 'Закрытые категории',
        content: 'Настройте категории с доступом определённым группам',
        image: '/assets/productPage/navigation/2.webp',
        width: 414,
        height: 90,
      },
    ],
  },
  {
    title: 'Другие возможности',
    subtitle: 'Настройте xi.effect под себя',
    link: 'other',
    items: [
      {
        title: 'Тёмная тема',
        content: 'Для сов, ценителей ночной продуктивности и просто эстетов :)',
        image: '/assets/productPage/other/1.webp',
        width: 381,
        height: 144,
      },
      {
        title: 'Прямой чат с поддержкой в Telegram',
        content: 'Каждый пользователь может быстро связаться с нами в чате поддержки',
        image: '/assets/productPage/other/2.webp',
        width: 295,
        height: 36,
      },
      {
        title: 'Журнал обновлений',
        content: 'Рассказываем о новых функциях',
        image: '/assets/productPage/other/3.webp',
        width: 400,
        height: 160,
      },
      {
        title: 'Настройка сообществ',
        content: 'Управляйте образовательной средой',
        image: '/assets/productPage/other/4.webp',
        width: 300,
        height: 48,
      },
    ],
  },
];

export const Items = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.2, duration: 1 }}
    className="px-4 md:px-8 2xl:py-0 xl:px-16 2xl:px-40 flex justify-center items-center flex-col w-screen"
  >
    <div className="flex flex-col w-full max-w-[1920px]">
      {featchersData.map((group, index) => (
        <section
          id={group.link}
          className="flex flex-col py-8 lg:py-12 xl:py-24 scroll-my-16 sm:scroll-my-20 md:scroll-my-24 2xl:py-32 xl:first:pt-16"
          key={index.toString()}
        >
          <Link
            variant="hover"
            href={`#${group.link}`}
            className="mt-6 font-medium text-xl-base md:text-h2 2xl:text-[64px]"
          >
            {group.title}
          </Link>
          <span className="text-m-base md:text-xl-base 2xl:text-h5 mt-2 text-gray-80">
            {group.subtitle}
          </span>
          <div className="mt-8 md:mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-y-12 sm:gap-x-8">
            {group.items.map((item, i) => (
              <div className="flex flex-col" key={i.toString()}>
                <div className="flex justify-center items-center bg-gray-10 aspect-[520/250] rounded-2xl md:rounded-[32px]">
                  <Image
                    alt={item.title}
                    src={item.image}
                    width={item.width}
                    height={item.height}
                  />
                </div>
                <span className="mt-4 font-medium text-m-base sm:text-h6 2xl:text-h5">
                  {item.title}
                </span>
                <span className="text-m-base md:text-l-base text-gray-70 mt-2">{item.content}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  </motion.div>
);
