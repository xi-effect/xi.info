'use client';

import React from 'react';
import { motion } from 'motion';
import { Button } from '@xipkg/button';
import Link from 'next/link';

export const Title = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0, duration: 1 }}
    className="px-4 md:px-8 xl:px-16 2xl:px-40 flex justify-center items-center flex-col w-screen"
  >
    <div className="w-full max-w-[1920px]">
      <div className="py-8 2xl:py-16">
        <h1 className="font-medium text-h5 md:text-h2 2xl:text-[80px] 2xl:leading-[104px]">
          Обзор функций
        </h1>

        <div className="flex flex-col gap-4 sm:flex-row sm:gap-8 mt-4 md:mt-8">
          <Button
            asChild
            variant="ghost"
            className="2xl:h-14 rounded-2xl bg-gray-5 w-full md:w-auto md:px-8"
          >
            <Link href="/">Последние обновления</Link>
          </Button>
          <Button
            asChild
            variant="ghost"
            className="2xl:h-14 rounded-2xl bg-gray-5 w-full md:w-auto md:px-8"
          >
            <Link href="/">Ближайшие планы</Link>
          </Button>
        </div>
      </div>
      <div className="py-8">
        <div className="flex flex-row gap-4 py-6 px-8 h-fit bg-gray-5 rounded-[24px] w-fit">
          <span className="text-gray-100 text-s-base md:text-l-base 2xl:text-xl-base">🚧</span>
          <span className="text-gray-100 text-s-base md:text-l-base 2xl:text-xl-base">
            Сервис находится в процессе разработки, не все функции сейчас доступны
          </span>
        </div>
      </div>
    </div>
  </motion.div>
);
