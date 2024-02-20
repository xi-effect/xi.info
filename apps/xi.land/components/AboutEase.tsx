'use client';
import React from 'react';
import Image from 'next/image';

import { Announce, Task, Chat, Conference, Settings } from '@xipkg/icons';

interface listItemT {
  title: string;
  color?: string;
  icon?: React.FC<any>;
}
const rolesDataView = [
  {
    title: 'Администратор',
    color: 'bg-violet-100',
  },
  {
    title: 'Преподаватель',
    color: 'bg-brand-80',
  },
  {
    title: 'Ученик',
    color: 'bg-green-100',
  },
  {
    title: 'Родитель',
    color: 'bg-red-80',
  },
  {
    title: 'Гость',
    color: 'bg-gray-40',
  },
];
const blockDataView: listItemT[] = [
  {
    title: 'Задания',
    icon: Task,
  },
  {
    title: 'Чат со студентами',
    icon: Chat,
  },
  {
    title: 'Видеоконференция',
    icon: Conference,
  },
];

const RolesList = () => {
  return (
    <div className="absolute bottom-0 right-0">
      <div className="space-y-1 xl:space-y-2">
        {rolesDataView.map((item, index: number) => {
          return (
            <div style={{ paddingLeft: index * 8 }} key={index}>
              <div
                className={`py-2 px-3 w-[150px] xl:w-[200px] bg-gray-0 flex gap-3 rounded-md items-center shadow-[0px_20px_20px_0px] shadow-gray-20`}
              >
                <div className={`size-3 xl:size-4 ${item.color} rounded-full`}></div>
                <p className="text-[9px] xl:text-[14px] text-gray-100">{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const BlockList = () => {
  return (
    <div className="bg-gray-0 sm:p-3 xl:p-4 rounded-md shadow-[0px_20px_20px_0px] shadow-gray-20 ml-10">
      <div className="py-2">
        <p className="sm:text-[12px] xl:text-[16px] font-semibold text-gray-100">B1.2</p>
        <p className="sm:text-[9px] xl:text-[14px] font-normal text-gray-90">Intermediate</p>
      </div>
      <div className="w-[140px] sm:w-[220px] xl:w-[260px] sm:space-y-0.5 xl:space-y-1 ">
        <div className="flex sm:gap-1 xl:gap-2 justify-between p-1 xl:p-2 rounded-lg items-center bg-bkgd-main">
          <Announce className="flex-shrink-0 fill-brand-80 w-2 sm:w-3 xl:w-4" />
          <p className="text-brand-80 text-[6px] sm:text-[9px] xl:text-[14px]">Объявления</p>
          <Settings className="ml-auto fill-brand-60 w-2 sm:w-3 xl:w-4" />
        </div>
        {blockDataView.map((item: listItemT) => (
          <div className="flex gap-2 justify-between p-1 xl:p-2  items-center">
            {item.icon && <item.icon className="flex-shrink-0 fill-gray-100 w-2 sm:w-3 xl:w-4" />}
            <p className="text-gray-90 text-[6px] sm:text-[9px] xl:text-[14px]">{item.title}</p>
            <Settings className="ml-auto fill-gray-100 w-2 sm:w-3 xl:w-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

const AboutEase = () => {
  return (
    <div className="flex flex-col justify-start items-start py-8 px-4 sm:p-8 xl:p-[160px] xl:pb-20 w-full bg-gray-5 z-10">
      {/* <div className="relative pr-[60px] sm:pr-[110px] xl:pr-[160px] pb-[33px] sm:pb-[55px] xl:pb-[75px]">
        <BlockList />
        <RolesList />
      </div> */}
      <div className="w-full relative sm:space-y-[22px] xl:space-y-[68px]">
        <div className="max-w-[1055px]">
          <h3 className="text-[18px] sm:text-[24px] xl:text-[32px] leading-[23px] sm:leading-[32px] xl:leading-[40px] font-medium ">
            Создано для преподавателей и студентов
          </h3>
          <h2 className="text-[24px] sm:text-[32px] xl:text-[64px] leading-[32px] sm:leading-[40px] xl:leading-[80px] font-medium ">
            Простая настройка и широкие возможности
          </h2>
        </div>
        <div className="w-full xl:py-6 xl:px-4 flex justify-center items-center">
          {/* 
            В данный момент это реализованно svg картинкой. 
            Выше есть компонент BlockList и RolesList который являеться альтернативной реализацией
            Компонент не доделан, надо решить как лучше
          */}
          <Image
            src="/assets/Block.svg"
            alt="Block"
            width={0}
            height={0}
            className="w-[260px] h-[200px] sm:w-[380px] sm:h-[280px] xl:w-[510px] xl:h-[410px] block xl:absolute xl:top-[90px] xl:right-0"
          />
        </div>
        <div className="space-y-10 max-w-[1055px]">
          <div className="space-y-2">
            <h4 className="text-[18px] leading-[23px]  sm:text-[24px] sm:leading-[30px] xl:text-[32px] xl:leading-[40px] font-medium">
              Создавайте и раздавайте роли под ваши задачи
            </h4>
            <p className="text-[14px] leading-[18px] sm:text-[20px]  sm:leading-[26px] xl:text-[24px] xl:leading-[32px] font-normal">
              Настройте сообщество под свои задачи и потребности, добавьте администраторов
              или родителей
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-[18px] leading-[23px]  sm:text-[24px] sm:leading-[30px] xl:text-[32px] xl:leading-[40px] font-medium">
              Структурируйте свои сообщества
            </h4>
            <p className="text-[14px] leading-[18px] sm:text-[20px]  sm:leading-[26px] xl:text-[24px] xl:leading-[32px] font-normal">
              Создавайте разделы и наполняйте их, выбирайте последовательность отображения
              и настраивайте их отображение у пользователей
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutEase;
