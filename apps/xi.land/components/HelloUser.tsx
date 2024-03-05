'use client';

import NextLink from 'next/link';
import { Button } from '@xipkg/button';
import Image from 'next/image';
import { TypewriterEffect } from 'pkg.animation.typewrite';

import { Caveat } from 'next/font/google';
import { motion } from 'framer-motion';

export const caveat = Caveat({ subsets: ['latin', 'cyrillic', 'cyrillic-ext', 'latin-ext'] });

const words = [
  {
    text: 'Проводите',
  },
  {
    text: ' онлайн ',
    className: `${caveat.className} text-[48px] md:text-[72px] 2xl:text-[120px]`,
  },
  {
    text: 'занятия',
  },
];

const HelloUser = () => {
  return (
    <div className="h-[480px] 2xl:h-[820px] bg-brand-80 flex flex-col w-full justify-center items-center p-4 sm:p-8 xl:py-16 xl:px-[160px]">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="flex flex-col justify-center items-center md:items-baseline md:flex-row text-[32px] md:text-[48px] 2xl:text-[80px] text-gray-0"
      >
        {words.map((item, index) => (
          <span key={index.toString()} className={`leading-[40px] ${item.className}`}>
            {item.text}
          </span>
        ))}
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="mt-2 md:mt-0 text-[20px] md:text-[24px] 2xl:text-[32px] sm:text-[32px] text-center text-gray-10"
      >
        Приложение для репетиторов и малого бизнеса
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="w-full md:w-fit flex flex-col sm:flex-row gap-4 mt-8 "
      >
        <Button
          className="w-full md:w-fit border-0 text-brand-80 bg-gray-0 hover:bg-gray-5 focus:bg-gray-5 active:bg-gray-5"
          size="l"
        >
          <NextLink href="mailto:xieffect@yandex.ru">Записаться на тестирование</NextLink>
        </Button>
        {/* <Button size="l" variant="secondary">
          <NextLink href="https://app.xieffect.ru/signup">Стать пользователем</NextLink>
        </Button> */}
      </motion.div>
    </div>
  );
};

export default HelloUser;
