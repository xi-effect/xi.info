'use client';

import { Button } from '@xipkg/button';
import { motion } from 'framer-motion';
import Image from 'next/image';

const descriptionBlocks = [
  { image: '1.svg', label: '3 типа вопросов' },
  { image: '2.svg', label: 'Автоматическая проверка' },
  { image: '3.svg', label: 'Встроенный редактор' },
  { image: '4.webp', label: 'Отправка файлов' },
];

export const Tasks = () => (
  <div className="py-8 px-4 flex flex-col gap-8 xs:p-8 xl:py-16 xl:px-24">
    <div className="flex flex-col gap-2 text-center">
      <h5 className="text-h5 xs:text-h3 font-medium">Тесты и задания</h5>
      <p className="text-l-base xs:text-h6 text-gray-80">Быстро оценивайте знания</p>
    </div>
    <div className="grid gap-8 lg:grid-cols-2 lg:grid-rows-2 2xl:gap-16">
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.2 }}
        className="row-span-2 rounded-[32px] bg-violet-100 p-8 flex flex-col gap-2 max-xs:bg-none bg-cover bg-[url('/assets/mainPage/tasks/line.svg')] bg-no-repeat bg-right-top"
      >
        <div className="flex">
          <Image
            src="/assets/mainPage/tasks/mainImage.webp"
            alt="text and tasks main img"
            width={768}
            height={679}
            className="hidden xs:block xl:h-[460px] xl:w-[520px] 2xl:h-auto 2xl:w-auto"
          />
          <Image
            src="/assets/mainPage/tasks/mainMobile.webp"
            alt="text and tasks main img"
            width={279}
            height={182}
            className="xs:hidden block"
          />
        </div>
        <div className="flex flex-col gap-1 2xl:gap-2">
          <h3 className="text-xl-base xs:text-h6 xl:text-h5 text-gray-0">Живое общение</h3>
          <p className="text-s-base text-gray-0 xs:text-l-base xl:text-xl-base">
            Обсуждайте задания и тесты
          </p>
        </div>
      </motion.div>
      <div className="row-span-2 grid min-[700px]:grid-cols-2 grid-rows-2 gap-4 xs:gap-8 2xl:gap-16">
        {descriptionBlocks.map((item, index) => (
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: Number(`0.${6 + index}`), duration: 0.3 }}
            key={item.image}
            className="flex flex-col sm:px-2 xs:gap-2 justify-between xs:py-8 xs:bg-violet-20 xs:rounded-[32px] xs:h-[302px] sm:w-auto sm:h-auto 2xl:p-8"
          >
            <div className="hidden flex-1 xs:flex justify-center items-center ">
              <Image
                src={`/assets/mainPage/tasks/${item.image}`}
                width={100}
                height={100}
                priority
                className="xs:block w-auto h-auto max-h-[199px] lg:max-h-[160px] xl:max-h-[184px] 2xl:max-h-[220px]"
                alt="test and tasks"
              />
            </div>
            <p className="text-xl-base 2xl:text-h6 font-medium xs:text-center">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
    <motion.div
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.2 }}
      className="flex flex-col gap-2 xs:flex-wrap xs:flex-row justify-center xs:gap-8"
    >
      <Button
        size="l"
        className="bg-violet-100 h-12 xs:text-xl-base xs:h-[72px] xs:rounded-2xl xs:px-9 rounded-lg hover:bg-violet-60 active:bg-violet-60 focus:bg-violet-60 2xl:h-[84px] xl:rounded-3xl 2xl:text-[30px] 2xl:px-12"
      >
        Начать работать
      </Button>
      <Button
        variant="secondary"
        className="text-l-base xs:text-xl-base xs:h-[72px] xs:rounded-2xl xs:px-9 2xl:h-[84px] xl:rounded-3xl 2xl:text-[30px] 2xl:px-12"
      >
        Узнать больше
      </Button>
    </motion.div>
  </div>
);
