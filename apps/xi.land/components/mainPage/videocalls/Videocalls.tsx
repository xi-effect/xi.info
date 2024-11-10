'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { BlockHeader } from '../shared/BlockHeader';
import { BlockFooter } from '../shared/BlockFooter';

const descriptionBlocks = [
  { image: '1.svg', label: 'Демонстрация экрана' },
  { image: '2.svg', label: 'Реакции' },
  { image: '3.webp', label: 'Встроенный чат' },
];

export const VideoCalls = () => (
  <section className="py-8 px-4 flex flex-col gap-8 xs:p-8 xl:py-16 xl:px-24">
    <BlockHeader title="Видеозвонки" subTitle="Проводите уроки" />
    <div className="grid gap-8 md:grid-cols-2 md:grid-rows-2 2xl:gap-16">
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.2 }}
        className="row-span-2 md:order-1 rounded-[32px] bg-green-80 p-8 flex flex-col gap-2 aspect-square"
      >
        <div className="flex grow relative justify-center">
          <Image
            src="/assets/mainPage/videocalls/mainImage.webp"
            alt="videocalls main img"
            fill
            priority
            className="hidden xs:block object-contain"
          />
          <Image
            src="/assets/mainPage/videocalls/mainMobile.webp"
            alt="videocalls main img"
            fill
            priority
            className="xs:hidden block object-contain"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-h5 xs:text-[64px] xs:leading-[82px] md:text-h2 md:leading-[82px] lg:text-[64px] text-gray-0">
            100
          </h3>
          <p className="text-s-base text-gray-0 xs:text-l-base xl:text-xl-base">
            максимальное количество участников
          </p>
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
            className={`${index === 2 ? 'aspect-auto sm:col-span-2' : 'sm:aspect-square'} flex flex-col sm:px-4 md:px-2 lg:px-4 xs:gap-2 justify-between xs:py-8 xs:bg-green-0 xs:rounded-[32px] 2xl:p-8`}
          >
            <div className="hidden relative flex-1 xs:flex justify-center items-center">
              <Image
                src={`/assets/mainPage/videocalls/${item.image}`}
                width={100}
                height={100}
                priority
                className="xs:block w-auto h-auto max-h-[199px] md:max-h-[72px] lg:max-h-[160px] xl:max-h-[184px] 2xl:max-h-[220px]"
                alt="videocalls"
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
      primaryBtnCn="bg-green-100 hover:bg-green-60 active:bg-green-60 focus:bg-green-60"
    />
  </section>
);