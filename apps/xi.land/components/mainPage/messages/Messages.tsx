'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BlockHeader, BlockFooter } from '../shared';

const descriptionBlocks = [
  { image: '1.webp', label: 'Отправка файлов' },
  { image: '2.webp', label: 'Реакции' },
  { image: '3.svg', label: 'Тэги' },
  { image: '4.svg', label: 'Редактирование' },
];

export const Messages = () => (
  <section className="py-8 px-4 flex flex-col gap-8 xs:p-8 xl:py-16 xl:px-24">
    <BlockHeader title="Сообщения" subTitle="Оставайтесь на связи" />
    <div className="grid gap-8 md:grid-cols-2 md:grid-rows-2 2xl:gap-16">
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.2 }}
        className="aspect-square row-span-2 rounded-[32px] bg-orange-80 p-8 flex flex-col gap-2"
      >
        <div className="flex grow relative justify-center">
          <Image
            src="/assets/mainPage/messages/mainImage.webp"
            alt="messages main img"
            fill
            className="hidden xs:block object-contain"
          />
          <Image
            src="/assets/mainPage/messages/mainImageMobile.webp"
            alt="messages main img"
            fill
            className="xs:hidden block object-contain"
          />
        </div>
        <div className="flex flex-col gap-1 2xl:gap-2">
          <h3 className="text-xl-base xs:text-h6 xl:text-h5 text-gray-0">Живое общение</h3>
          <p className="text-s-base text-gray-0 xs:text-l-base xl:text-xl-base">
            Общайтесь со студентами, не переходя в другие приложения
          </p>
        </div>
      </motion.div>
      <div className="row-span-2 xs:grid-rows-4 sm:grid-rows-2 grid sm:grid-cols-2 grid-rows-2 gap-4 xs:gap-8 2xl:gap-16">
        {descriptionBlocks.map((item, index) => (
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: Number(`0.${6 + index}`), duration: 0.3 }}
            key={item.image}
            className="flex flex-col sm:px-4 md:px-2 lg:px-4 xs:gap-2 sm:aspect-square justify-between xs:py-8 xs:bg-orange-0 xs:rounded-[32px] sm:w-auto sm:h-auto 2xl:p-8"
          >
            <div className="hidden flex-1 xs:flex justify-center items-center ">
              <Image
                src={`/assets/mainPage/messages/${item.image}`}
                width={100}
                height={100}
                className="xs:block xs:px-8 sm:px-4 w-auto h-auto max-h-[199px] md:max-h-[100px] lg:max-h-[160px] xl:max-h-[184px] 2xl:max-h-[220px]"
                alt="messages"
              />
            </div>
            <p className="xs:px-8 md:px-0 text-xl-base md:text-l-base lg:text-xl-base 2xl:text-h6 font-medium xs:text-center">
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
    <BlockFooter
      primaryBtnText="Начать общаться"
      secondaryBtnText="Узнать больше"
      blockLink="/product#chats"
      primaryBtnCn="bg-orange-80 hover:bg-orange-60 active:bg-orange-60 focus:bg-orange-60"
    />
  </section>
);
