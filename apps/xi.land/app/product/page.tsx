/* eslint-disable react/jsx-no-useless-fragment */

'use client';

import { Footer } from 'pkg.footer';
import Header from 'components/Header';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Link } from '@xipkg/link';

const featchersData = [
  {
    title: 'Задания и тесты',
    image: '/assets/productPage/icons/tasksAndTests.webp',
    subtitle: 'Проверяйте знания ваших студентов',
    link: 'tasksAndTests',
    items: [
      {
        title: 'Управление доступом',
        content: 'Доступ к тесту можно открывать и закрывать в определённое время автоматически',
        image: '/assets/productPage/tasksAndTests/1.webp',
        width: 377,
        height: 200,
      },
      {
        title: 'Выбор модели оценивания',
        content:
          'Выбирайте удобную модель оценивания — 5-бальная шкала, 100-бальная шкала, или любая другая — по вашему желанию',
        image: '/assets/productPage/tasksAndTests/2.webp',
        width: 200,
        height: 190,
      },
      {
        title: '3 типа вопросов',
        content:
          'Создавайте вопросы с коротким ответом, развёрнутым ответом или с выбором вариантов ответа',
        image: '/assets/productPage/tasksAndTests/3.webp',
        width: 200,
        height: 156,
      },
      {
        title: 'Коментарии',
        content: 'Общайтесь со студентами по поводу заданий в коментариях к заданиям и тестам',
        image: '/assets/productPage/tasksAndTests/4.webp',
        width: 444,
        height: 168,
      },
      {
        title: 'Автоматическая проверка',
        content:
          'Настройте возможность автоматической проверки заданий с коротким ответом или выбором вариантов ответа',
        image: '/assets/productPage/tasksAndTests/5.webp',
        width: 264,
        height: 98,
      },
    ],
  },
  {
    title: 'Видеозвонки',
    image: '/assets/productPage/icons/video.webp',
    subtitle: 'Проводите занятия в онлайн режиме прямо в сервисе',
    link: 'videocalls',
    items: [
      {
        title: 'Молниеносное начало',
        content: 'Начинайте видеоконференцию в любой момент по вашему желанию',
        image: '/assets/productPage/videoconference/1.webp',
        width: 300,
        height: 204,
      },
      {
        title: 'Чат',
        content: 'Используйте чаты не выходя из видеоконференции',
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
        content: 'Добавьте возможность поднять руку вашим студентам',
        image: '/assets/productPage/videoconference/4.webp',
        width: 232,
        height: 194,
      },
    ],
  },
  {
    title: 'Чаты',
    image: '/assets/productPage/icons/chat.webp',
    subtitle: 'Используйте все возможности для общения со студентами',
    link: 'chats',
    items: [
      {
        title: 'Отправка файлов',
        content:
          'У нас можно загрузить сразу несколько файлов и быстро выгрузить их по одному клику',
        image: '/assets/productPage/chats/1.webp',
        width: 442,
        height: 114,
      },
      {
        title: 'Закреплённые сообщения',
        content: 'В каждом чате можно закреплять сообщения и посмотреть их в отдельном окне',
        image: '/assets/productPage/chats/2.webp',
        width: 300,
        height: 200,
      },
      {
        title: 'Реакции на сообщения',
        content:
          'Если сообщение не требует развёрнутого ответа, то достаточно поставить реакцию-эмоджи на него, чтобы дать свою обратную связь',
        image: '/assets/productPage/chats/3.webp',
        width: 298,
        height: 76,
      },
      {
        title: 'Теги',
        content:
          'Если вы хотите адресовать сообщение конкретному человеку, то вам достаточно написать @ и выбрать пользователя',
        image: '/assets/productPage/chats/4.webp',
        width: 437,
        height: 144,
      },
      {
        title: 'Форматирование сообщений',
        content: 'Можно сделать текст жирным, курсивом или вставить в него ссылку',
        image: '/assets/productPage/chats/5.webp',
        width: 382,
        height: 144,
      },
      {
        title: 'Ответы на сообщения',
        content: 'На каждое сообщение можно ответить и процитировать сообщение',
        image: '/assets/productPage/chats/6.webp',
        width: 404,
        height: 86,
      },
      {
        title: 'Редактирование и удаление сообщений',
        content:
          'Опечатались, ошиблись или изменились вводные? Ничего страшного, сообщения можно редактировать и удалять',
        image: '/assets/productPage/chats/7.webp',
        width: 200,
        height: 56,
      },
      {
        title: 'Ссылка на сообщение',
        content:
          'У каждого сообщения можно скопировать ссылку и отправить студенту или коллеге. Он сможет посмотреть его только если имеет доступ к чату',
        image: '/assets/productPage/chats/8.webp',
        width: 190,
        height: 128,
      },
    ],
  },
  {
    title: 'Библиотека',
    image: '/assets/productPage/icons/announces.webp',
    subtitle:
      'Создавайте учебные материалы и структурируйте их, позволяя вашим студентам легко получить к ним доступ',
    link: 'library',
    items: [
      {
        title: 'Форматирование',
        content: 'Можно сделать текст жирным, курсивом или вставить в него ссылку',
        image: '/assets/productPage/announces/1.webp',
        width: 420,
        height: 72,
      },
      {
        title: 'Файлы',
        content: 'Прикрепите важные файлы к вашей записи',
        image: '/assets/productPage/announces/2.webp',
        width: 393,
        height: 54,
      },
      {
        title: 'Редактор',
        content: 'Создавайте свой контент в удобном редакторе',
        image: '/assets/productPage/announces/3.webp',
        width: 399,
        height: 210,
      },
    ],
  },
  {
    title: 'Объявления',
    image: '/assets/productPage/icons/announces.webp',
    subtitle: 'Информируйте своих студентов о новостях',
    link: 'announces',
    items: [
      {
        title: 'Уведомления',
        content: 'Студенты моментально получат сообщение об изменениях',
        image: '/assets/productPage/announces/1.webp',
        width: 420,
        height: 72,
      },
    ],
  },
  {
    title: 'Интерактивная доска',
    image: '/assets/productPage/icons/whiteboard.webp',
    subtitle:
      'Создавайте учебные материалы и структурируйте их, позволяя вашим студентам легко получить к ним доступ',
    link: 'whiteboard',
    items: [
      {
        title: 'Множество инструментов',
        content:
          'Рисуйте от руки или используйте готовые фигуры, пишите, делайте стикеры и указывайте стрелками',
        image: '/assets/productPage/whiteboard/1.webp',
        width: 280,
        height: 40,
      },
      {
        title: 'Быстрый экспорт',
        content: 'Вы можете сохранить вашу доску в формате png на ваше устройство',
        image: '/assets/productPage/whiteboard/2.webp',
        width: 64,
        height: 64,
      },
      {
        title: 'Работа внутри видеоконференций',
        content: 'Показывайте свою доску прямо в конференции',
        image: '/assets/productPage/whiteboard/3.webp',
        width: 340,
        height: 234,
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
        content:
          'Вы можете создать неограниченное количество ролей и настроить по своим потребностям',
        image: '/assets/productPage/control/1.webp',
        width: 236,
        height: 172,
      },
      {
        title: 'Права пользователей',
        content: 'Настраивайте права для каждой роли отдельно',
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
        title: 'Все по категориям',
        content: 'Группируйте каналы по категориям',
        image: '/assets/productPage/navigation/1.webp',
        width: 400,
        height: 200,
      },
      {
        title: 'Приватные категории',
        content: 'Настройте категории с доступом определённым группам',
        image: '/assets/productPage/navigation/2.webp',
        width: 414,
        height: 90,
      },
    ],
  },
  {
    title: 'Другие возможности',
    subtitle: 'Настройте xi.effect специально под себя',
    link: 'other',
    items: [
      {
        title: 'Тёмная тема',
        content: 'Для сов, ценителей ночной продуктивности и просто эстетов:)',
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
        content: 'После каждого обновления мы покажем вам модальное окно с рассказом о нём',
        image: '/assets/productPage/other/3.webp',
        width: 400,
        height: 160,
      },
      {
        title: 'Кастомизация сообществ',
        content: 'Настраивайте сообщество по вашему вкусу',
        image: '/assets/productPage/other/4.webp',
        width: 300,
        height: 48,
      },
    ],
  },
];

export default function ProductPage() {
  return (
    <main className="flex flex-row h-full w-full min-h-[100vh] justify-center items-start bg-gray-0 overflow-x-hidden">
      <div className="flex flex-col w-full justify-start items-start">
        <Header />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0, duration: 1 }}
          className="py-4 px-4 md:py-8 md:px-8 2xl:py-16 2xl:px-24 flex justify-center items-center flex-col w-screen"
        >
          <div className="w-full max-w-[1920px]">
            <span className="font-medium text-[32px] md:text-[48px] 2xl:text-[80px]">
              Возможности продукта
            </span>
            <div className="flex flex-row gap-4 py-6 px-8 mt-16 h-fit bg-gray-5 rounded-[24px] w-fit">
              <span className="text-gray-100 text-[14px] md:text-[20px] 2xl:text-[24px]">🚧</span>
              <span className="text-gray-100 text-[14px] md:text-[20px] 2xl:text-[24px]">
                Сервис находится в процессе разработки, не все функции сейчас доступны
              </span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="p-4 md:p-8 2xl:py-16 2xl:px-24 flex justify-center items-center flex-col w-screen"
        >
          <div className="flex flex-col w-full max-w-[1920px] mt-0 2xl:mt-[64px] gap-[64px] 2xl:gap-[256px]">
            {featchersData.map((group, index) => (
              <section id={group.link} className="flex flex-col" key={index.toString()}>
                {!!group.image && (
                  <>
                    {group.image === '/assets/productPage/icons/tasksAndTests.webp' ? (
                      <div className="relative h-[32px] md:h-[48px] 2xl:h-[64px] w-[92px] md:w-[144px] 2xl:w-[188px]">
                        <Image alt={group.title} src={group.image} fill />
                      </div>
                    ) : (
                      <div className="relative h-[32px] md:h-[48px] 2xl:h-[64px] w-[32px] md:w-[48px] 2xl:w-[64px]">
                        <Image alt={group.title} src={group.image} fill />
                      </div>
                    )}
                  </>
                )}
                <Link
                  variant="hover"
                  href={`#${group.link}`}
                  className="mt-6 font-medium text-[24px] md:text-[48px] 2xl:text-[64px]"
                >
                  {group.title}
                </Link>
                <span className="text-[16px] md:text-[24px] 2xl:text-[32px] mt-2">
                  {group.subtitle}
                </span>
                <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-12 2xl:gap-8">
                  {group.items.map((item, i) => (
                    <div className="flex flex-col" key={i.toString()}>
                      <div className="flex justify-center items-center bg-gray-10 aspect-[520/250] rounded-[12px] md:rounded-[24px] p-1">
                        <Image
                          alt={item.title}
                          src={item.image}
                          width={item.width}
                          height={item.height}
                        />
                      </div>
                      <span className="mt-4 font-medium text-[16px] md:text-[24px] 2xl:text-[32px]">
                        {item.title}
                      </span>
                      <span className="text-[16px] md:text-[24px] 2xl:text-[24px] text-gray-70">
                        {item.content}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </motion.div>

        <Footer />
      </div>
    </main>
  );
}
