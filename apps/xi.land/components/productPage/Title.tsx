'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Title = () => (
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
);
