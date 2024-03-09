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
        image: '',
      },
      {
        title: 'Выбор модели оценивания',
        content:
          'Выбирайте удобную модель оценивания — 5-бальная шкала, 100-бальная шкала, или любая другая — по вашему желанию',
        image: '',
      },
      {
        title: '3 типа вопросов',
        content:
          'Создавайте вопросы с коротким ответом, развёрнутым ответом или с выбором вариантов ответа',
        image: '',
      },
      {
        title: 'Коментарии',
        content: 'Общайтесь со студентами по поводу заданий в коментариях к заданиям и тестам',
        image: '',
      },
      {
        title: 'Автоматическая проверка',
        content:
          'Настройте возможность автоматической проверки заданий с коротким ответом или выбором вариантов ответа',
        image: '',
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
        image: '',
      },
      {
        title: 'Чат',
        content: 'Используйте чаты не выходя из видеоконференции',
        image: '',
      },
      {
        title: 'Демонстрация экрана',
        content: 'Демонстрируйте свой экран студентам',
        image: '',
      },
      {
        title: 'Реакции',
        content: 'Добавьте возможность поднять руку вашим студентам',
        image: '',
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
        image: '',
      },
      {
        title: 'Закреплённые сообщения',
        content: 'В каждом чате можно закреплять сообщения и посмотреть их в отдельном окне',
        image: '',
      },
      {
        title: 'Реакции на сообщения',
        content:
          'Если сообщение не требует развёрнутого ответа, то достаточно поставить реакцию-эмоджи на него, чтобы дать свою обратную связь',
        image: '',
      },
      {
        title: 'Теги',
        content:
          'Если вы хотите адресовать сообщение конкретному человеку, то вам достаточно написать @ и выбрать пользователя',
        image: '',
      },
      {
        title: 'Форматирование сообщений',
        content: 'Можно сделать текст жирным, курсивом или вставить в него ссылку',
        image: '',
      },
      {
        title: 'Ответы на сообщения',
        content: 'На каждое сообщение можно ответить и процитировать сообщение',
        image: '',
      },
      {
        title: 'Редактирование и удаление сообщений',
        content:
          'Опечатались, ошиблись или изменились вводные? Ничего страшного, сообщения можно редактировать и удалять',
        image: '',
      },
      {
        title: 'Ссылка на сообщение',
        content:
          'У каждого сообщения можно скопировать ссылку и отправить студенту или коллеге. Он сможет посмотреть его только если имееет доступ к чату',
        image: '',
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
        title: 'Форматирование',
        content: 'Можно сделать текст жирным, курсивом или вставить в него ссылку',
        image: '',
      },
      {
        title: 'Файлы',
        content: 'Прикрепите важные файлы к вашей записи',
        image: '',
      },
      {
        title: 'Редактор',
        content: 'Создавайте свой контент в удобном редакторе',
        image: '',
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
        image: '',
      },
      {
        title: 'Права пользователей',
        content: 'Настраивайте права для каждой роли отдельно',
        image: '',
      },
      {
        title: 'Массовое добавление пользователей',
        content: 'Приглашайте студентов и коллег через ссылки, выдавая сразу необходимые роли',
        image: '',
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
        image: '',
      },
      {
        title: 'Приватные категории',
        content: 'Настройте категории с доступом определённым группам',
        image: '',
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
        image: '',
      },
      {
        title: 'Прямой чат с поддержкой в Telegram',
        content: 'Каждый пользователь может быстро связаться с нами в чате поддержки',
        image: '',
      },
      {
        title: 'Журнал обновлений',
        content: 'После каждого обновления мы покажем вам модальное окно с рассказом о нём',
        image: '',
      },
      {
        title: 'Кастомизация сообществ',
        content: 'Настраивайте сообщество по вашему вкусу',
        image: '',
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
          className="py-4 md:py-8 px-4 2xl:py-16 2xl:px-24 flex justify-center items-center flex-col w-screen"
        >
          <div className="w-full max-w-[1920px]">
            <span className="font-medium text-[32px] md:text-[48px] 2xl:text-[80px]">
              Обзор функций
            </span>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="py-8 px-4 2xl:py-16 2xl:px-24 flex justify-center items-center flex-col w-screen"
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
                <div className="mt-12 grid grid-cols-1 xl:grid-cols-3 gap-4 md:gap-12 2xl:gap-8">
                  {group.items.map((item, i) => (
                    <div className="flex flex-col" key={i.toString()}>
                      <div className="flex justify-center items-center bg-gray-10 aspect-[520/250] rounded-[12px] md:rounded-[24px]">
                        <Image alt={item.title} src="" />
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
