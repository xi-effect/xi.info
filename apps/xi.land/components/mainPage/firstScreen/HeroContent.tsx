'use client';

import { Button } from '@xipkg/button';
import { motion, MotionValue } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { LightningShape } from './LightningShape';
import { TextOutline } from './TextOutline';
import { CallToActionModal } from '../callToAction';

type HeroContentPropsT = {
  layer3X: MotionValue<number>;
  layer3Y: MotionValue<number>;
  isHovering: boolean;
};

export const HeroContent = ({ isHovering, layer3X, layer3Y }: HeroContentPropsT) => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="flex items-end xs:items-center xs:justify-center xl:px-16 md:justify-start mt-12 xs:mt-4 relative">
      {counter < 5 && (
        <motion.div
          onClick={() => setCounter((prev) => prev + 1)}
          style={{
            x: layer3X,
            y: layer3Y,
          }}
          animate={{ scale: isHovering ? 0.9 : 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="cursor-pointer stroke-[16] w-[170px] h-[210px] absolute -top-[70px] -right-[110px] xs:-top-[90px] xs:-right-[40px] xl:-top-[80px] 2xl:stroke-[36] xl:stroke-[32] 2xl:-right-[35%] lg:-right-[30%] 2xl:w-[350px] 2xl:h-[400px] xl:w-[250px] xl:h-[300px]"
        >
          <LightningShape />
        </motion.div>
      )}
      <div className="flex flex-col gap-4 py-8 relative xs:py-32 md:py-28 lg:py-0 w-full md:w-auto">
        <h1 className="text-h2 2xl:text-[80px] font-medium text-gray-0 flex flex-wrap -tracking-[.01em] md:flex-col xs:gap-x-4 leading-none">
          Проводите занятия
          <div className="mt-2 sm:mt-0 md:mt-4 2xl:mt-6 2xl:mb-4">
            <TextOutline text="онлайн" />
          </div>
        </h1>
        <p className="text-xl-base text-gray-10 2xl:text-h5 leading-[31px] 2xl:leading-[41px] -tracking-[.01em]">
          Приложение для репетиторов и малого бизнеса
        </p>
        <div className="flex gap-2 xs:gap-8 mt-6 xl:mt-4 flex-col xs:flex-row">
          <CallToActionModal>
            <Button
              variant="ghost"
              className="2xl:h-14 text-brand-80 w-full rounded-xl xl:rounded-2xl xl:px-8 xl:w-auto 2xl:text-l-base"
            >
              Записаться на демонстрацию
            </Button>
          </CallToActionModal>
          <Button
            asChild
            variant="secondary"
            className="2xl:h-14 w-full hover:border-gray-0 hover:bg-transparent active:bg-transparent focus:bg-transparent bg-transparent text-gray-0 rounded-xl xl:rounded-2xl xl:px-8 xl:w-auto 2xl:text-l-base"
          >
            <Link href="https://app.xieffect.ru/signup/">Стать пользователем</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
