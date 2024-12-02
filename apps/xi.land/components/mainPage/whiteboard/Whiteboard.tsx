'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BlockHeader, BlockFooter } from '../shared';

const descriptionBlocks = [
  { image: '1.webp', label: 'Работа в конференциях' },
  { image: '2.svg', label: 'Быстрый экспорт' },
  { image: '3.svg', label: 'Совместная работа' },
];

export const Whiteboard = () => (
  <section className="py-8 px-4 flex flex-col gap-8 xs:p-8 xl:py-16 xl:px-24">
    <BlockHeader title="Онлайн-доска" subTitle="Создавайте интерактивные материалы" />
    <div className="grid gap-8 md:grid-cols-2 md:grid-rows-2 2xl:gap-16">
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.2 }}
        className="row-span-2 md:order-1 rounded-[32px] bg-cyan-100 p-8 flex flex-col gap-2 aspect-square max-xs:bg-none bg-contain sm:bg-cover md:bg-contain bg-[url('/assets/mainPage/whiteboard/bg.svg')] bg-no-repeat bg-bottom"
      >
        <div className="flex grow relative justify-center">
          <Image
            src="/assets/mainPage/whiteboard/mainImage.svg"
            alt="whiteboard main img"
            fill
            className="hidden xs:block object-contain"
          />
          <Image
            src="/assets/mainPage/whiteboard/mainMobile.svg"
            alt="whiteboard main img"
            fill
            className="xs:hidden block object-contain"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h5 className="sm:text-h5 text-xl-base text-gray-0">Множество инструментов</h5>
        </div>
      </motion.div>

      <div className="row-span-2 xs:grid-rows-3 sm:grid-rows-2 grid sm:grid-cols-2 grid-rows-2 gap-4 xs:gap-8 2xl:gap-16 sm:aspect-square">
        {descriptionBlocks.map((item, index) => (
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: Number(`0.${6 + index}`), duration: 0.3 }}
            key={item.image}
            className={`${index === 0 ? 'aspect-auto sm:col-span-2' : 'sm:aspect-square'} flex flex-col sm:px-4 md:px-2 lg:px-4 xs:gap-2 justify-between xs:py-8 xs:bg-cyan-20 xs:rounded-[32px] 2xl:p-8`}
          >
            <div className="hidden px-8 relative flex-1 xs:flex justify-center items-center">
              <Image
                src={`/assets/mainPage/whiteboard/${item.image}`}
                width={100}
                height={100}
                className="xs:block w-auto h-auto max-h-[199px] md:max-h-[72px] lg:max-h-[160px] xl:max-h-[184px] 2xl:max-h-[220px]"
                alt="whiteboard"
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
      primaryBtnText="Начать рисовать"
      secondaryBtnText="Узнать больше"
      blockLink="/product#whiteboard"
      primaryBtnCn="bg-cyan-100 hover:bg-cyan-60 active:bg-cyan-60 focus:bg-cyan-60"
    />
  </section>
);
