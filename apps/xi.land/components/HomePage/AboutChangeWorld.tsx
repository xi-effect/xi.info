'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const cardsStyles =
  'p-4 md:p-8 2xl:p-16 flex rounded-[8px] md:rounded-[16px] 2xl:rounded-[32px] bg-gray-5';

const AboutChangeWorld = () => (
  <div className="py-8 px-4 2xl:py-16 2xl:px-24 flex justify-center items-center flex-col w-screen">
    <div className="w-full max-w-[1920px]">
      <h2 className="text-[24px] md:text-[32px] 2xl:text-[64px] font-medium ml-4 md:ml-8 2xl:ml-16">
        Меняйте мир — мы поможем
      </h2>
      <div className="flex flex-col xl:flex-row gap-4 md:gap-8 mt-4 md:mt-8">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className={`${cardsStyles} flex-col  md:flex-row xl:flex-col 2xl:flex-row w-full xl:w-[55%] min-h-[442px] md:min-h-[592px] 2xl:min-h-[546px]`}
        >
          <div className="w-full flex flex-col">
            <span className="text-[20px] md:text-[32px] 2xl:text-[56px] font-medium text-gray-100">
              Главное — сообщество
            </span>
            <span className="text-[14px] md:text-[24px] 2xl:text-[32px] text-gray-80">
              В основе сервиса — сообщества, позволяющие работать вместе, общаться, учиться и расти
            </span>
          </div>
          <div className="p-8 w-full flex justify-center items-center">
            <Image
              width={400}
              height={400}
              quality={100}
              src="/assets/aboutChangeWorld/community.webp"
              alt="community image"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: true }}
          className={`${cardsStyles} flex-col md:flex-row xl:flex-col w-full xl:w-[45%] min-h-[368px] md:min-h-[468px] 2xl:min-h-[546px]`}
        >
          <div className="w-full flex flex-col">
            <span className="text-[20px] md:text-[32px] 2xl:text-[56px] font-medium text-gray-100">
              Гибкая настройка под ваши задачи
            </span>
            <span className="text-[14px] md:text-[24px] 2xl:text-[32px] text-gray-80">
              Используйте только необходимые инструменты в своей работе
            </span>
          </div>
          <div className="p-8 w-full flex justify-center items-center">
            <Image
              width={350}
              height={275}
              quality={100}
              src="/assets/aboutChangeWorld/settings.webp"
              alt="settings image"
            />
          </div>
        </motion.div>
      </div>
      <div className="flex flex-col xl:flex-row gap-4 md:gap-8 mt-4 md:mt-8">
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
          className={`${cardsStyles} flex-col md:flex-row xl:flex-col w-full xl:w-[45%] min-h-[246px] md:min-h-[422px] 2xl:min-h-[500px]`}
        >
          <div className="w-full flex flex-col">
            <span className="text-[20px] md:text-[32px] 2xl:text-[56px] font-medium text-gray-100">
              Решим любой вопрос
            </span>
            <span className="text-[14px] md:text-[24px] 2xl:text-[32px] text-gray-80">
              В чате, без долгого ожидания
            </span>
          </div>
          <div className="p-8 w-full flex justify-center items-center">
            <Image
              width={550}
              height={260}
              quality={100}
              src="/assets/aboutChangeWorld/support.webp"
              alt="chat image"
            />
          </div>
        </motion.div>
        <motion.div
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          viewport={{ once: true }}
          className={`${cardsStyles} flex-col md:flex-row xl:flex-col w-full xl:w-[55%] min-h-[216px] md:min-h-[376px] 2xl:min-h-[500px]`}
        >
          <div className="w-full flex flex-col">
            <span className="text-[20px] md:text-[32px] 2xl:text-[56px] font-medium text-gray-100">
              Будем держать в курсе
            </span>
            <span className="text-[14px] md:text-[24px] 2xl:text-[32px] text-gray-80">
              Новых законов, правил и регламентов
            </span>
          </div>
          <div className="p-8 w-full flex justify-center items-center">
            <Image
              width={479}
              height={214}
              quality={100}
              src="/assets/aboutChangeWorld/docs.webp"
              alt="docs image"
            />
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

export default AboutChangeWorld;
