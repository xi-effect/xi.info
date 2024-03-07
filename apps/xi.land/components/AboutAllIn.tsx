'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import { Tabs } from '@xipkg/tabs';
import Image from 'next/image';
import { Button } from '@xipkg/button';
import NextLink from 'next/link';

const tabs = [
  {
    label: 'Тесты',
    color: 'bg-brand-0',
    title: 'Задавайте тесты',
    content:
      'Создавайте свои тесты из разных блоков, проверяйте их в ручном или автоматическом режиме, управляйте доступом и оценивайте знания ваших студентов',
    link: '',
    image: '/assets/aboutAllIn/testsTabs.webp',
  },
  {
    label: 'Задания',
    color: 'bg-orange-0',
    title: 'Удобные задания',
    content:
      'Задавайте задания в удобном для вас формате, проверяйте загруженные студентами файлы или прикрепленные ими документы из встроенного редактора',
    link: '',
    image: '/assets/aboutAllIn/tasksTabs.webp',
  },
  {
    label: 'Видеоконференции',
    color: 'bg-green-0',
    title: 'Живое общение',
    content:
      'Начинайте видеоконференцию в удобное для вас время, приглашайте до 100 участников, демонстрируйте ваш экран, общайтесь в чате не выходя из браузера',
    link: '',
    image: '/assets/aboutAllIn/videoconferenceTabs.webp',
  },
  {
    label: 'Чат',
    color: 'bg-yellow-20',
    title: 'Мгновенные сообщения',
    content:
      'Пишите сообщения, прикрепляйте файлы, оставляйте ответы и реакции, не переходя в сторонние мессенджеры',
    link: '',
    image: '/assets/aboutAllIn/chatsTabs.webp',
  },
  {
    label: 'Объявления',
    color: 'bg-violet-20',
    title: 'Быстрые объявления',
    content:
      'Свободно публикуйте любую необходимую информацию в текстовом формате, прикрепляйте фото и видео, вставляйте цитаты и важные заметки. Все для вашей удобной работы',
    link: '',
    image: '/assets/aboutAllIn/announcesTabs.webp',
  },
];

const AboutAllIn = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const handleChange = (value: string) => {
    const index = tabs.findIndex((item) => item.label === value);
    setSelectedTab(tabs[index]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 1 }}
      className="py-8 px-4 2xl:py-16 2xl:px-24 flex justify-center items-center flex-col w-screen"
    >
      <div className="w-full max-w-[1920px]">
        <h2 className="text-[24px] md:text-[32px] 2xl:text-[64px] font-medium ml-4 md:ml-8 2xl:ml-16">
          Пользуйтесь всем необходимым в одном месте
        </h2>
        <Tabs.Root onValueChange={handleChange} defaultValue="Тесты">
          <div className="overflow-y-hidden overflow-x-auto no-scrollbar">
            <Tabs.List
              className="border-0 gap-8 w-min ml-4 md:ml-8 2xl:ml-16 mt-4 md:mt-8"
              classNameShadow="h-[4px] rounded-b-none rounded-t-[2px] bottom-0"
            >
              {tabs.map((el, index) => (
                <Tabs.Trigger
                  className="text-[16px] md:text-[24px] font-medium"
                  key={index}
                  value={el.label}
                >
                  {el.label}
                </Tabs.Trigger>
              ))}
            </Tabs.List>
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedTab ? selectedTab.label : 'empty'}
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -10, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className={`w-full h-full min-h-[470px] md:min-h-[678px] flex flex-col lg:flex-row p-4 md:p-8 2xl:p-16 rounded-[8px] md:rounded-[16px] 2xl:rounded-[64px] ${selectedTab.color}`}
            >
              <div className="w-full flex flex-col">
                <span className="text-[20px] md:text-[32px] 2xl:text-[56px] fomt-medium text-gray-100">
                  {selectedTab.title}
                </span>
                <span className="text-[14px] md:text-[24px] 2xl:text-[32px] text-gray-80">
                  {selectedTab.content}
                </span>
                <Button
                  className="w-[136px] h-[32px] md:w-[168px] md:h-[48px] 2xl:w-[320px] 2xl:h-[84px] mt-4 2xl:mt-auto border md:border-[2px] 2xl:border-[3px] rounded-[6px] md:rounded-[12px] 2xl:rounded-[18px] text-[14px] md:text-[16px] 2xl:text-[30px] text-gray-100 border-gray-100 bg-inherit hover:bg-inherit focus:bg-inherit active:bg-inherit"
                  asChild
                >
                  <NextLink href={selectedTab.link}>Узнать больше</NextLink>
                </Button>
              </div>
              <div className="w-full flex justify-center items-center">
                <Image width={700} height={550} src={selectedTab.image} alt="tabs image" />
              </div>
            </motion.div>
          </AnimatePresence>
        </Tabs.Root>
      </div>
    </motion.div>
  );
};

export default AboutAllIn;
