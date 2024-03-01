'use client';
import React from 'react';
import Image from 'next/image';

const AboutEase = () => {
  return (
    <div className="flex flex-col justify-start items-start py-8 px-4 sm:p-8 xl:p-[160px] xl:pb-20 w-full bg-gray-5 z-10">
      <div className="w-full relative sm:space-y-[22px] 2xl:space-y-[68px]">
        <div className="max-w-[1055px]">
          <h3 className="text-[18px] sm:text-[24px] 2xl:text-[32px] leading-[23px] sm:leading-[32px] 2xl:leading-[40px] font-medium ">
            Создано для преподавателей и студентов
          </h3>
          <h2 className="text-[24px] sm:text-[32px] 2xl:text-[64px] leading-[32px] sm:leading-[40px] 2xl:leading-[80px] font-medium ">
            Простая настройка и широкие возможности
          </h2>
        </div>
        <div className="w-full 2xl:py-6 2xl:px-4 flex justify-center items-center">
          <Image
            src="/assets/Block.svg"
            alt="Block"
            width={0}
            height={0}
            className="w-[260px] h-[200px] sm:w-[380px] sm:h-[280px] 2xl:w-[510px] 2xl:h-[410px] block 2xl:absolute 2xl:top-[90px] 2xl:right-0"
          />
        </div>
        <div className="space-y-10 max-w-[1055px]">
          <div className="space-y-2">
            <h4 className="text-[18px] leading-[23px]  sm:text-[24px] sm:leading-[30px] 2xl:text-[32px] 2xl:leading-[40px] font-medium">
              Создавайте и раздавайте роли под ваши задачи
            </h4>
            <p className="text-[14px] leading-[18px] sm:text-[20px]  sm:leading-[26px] 2xl:text-[24px] 2xl:leading-[32px] font-normal">
              Настройте сообщество под свои задачи и потребности, добавьте администраторов
              или родителей
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="text-[18px] leading-[23px]  sm:text-[24px] sm:leading-[30px] 2xl:text-[32px] 2xl:leading-[40px] font-medium">
              Структурируйте свои сообщества
            </h4>
            <p className="text-[14px] leading-[18px] sm:text-[20px]  sm:leading-[26px] 2xl:text-[24px] 2xl:leading-[32px] font-normal">
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
