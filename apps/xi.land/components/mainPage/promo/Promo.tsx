'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export const Promo = () => (
  <section className="p-4 xs:p-8 md:py-32 lg:py-48 2xl:py-64 xl:px-24 relative">
    <div className="rounded-[32px] sm:rounded-[64px] justify-between bg-gray-100 p-8 h-[477px] xl:p-16 flex max-sm:bg-none bg-[center_top_8rem] md:bg-[right_top_2rem] 2xl:bg-[right_2rem_top_-4rem] bg-auto bg-[url('/assets/mainPage/promo/bg.svg')] bg-no-repeat ">
      <div className="flex flex-col gap-2 justify-center">
        <h3 className="text-gray-0 text-h5 sm:text-h3 lg:text-h1">
          xieffect <span className="text-brand-40">всегда</span> под рукой
        </h3>
        <p className="text-gray-0 text-xl-base lg:text-h5">
          Проводите уроки с телефона или планшета
        </p>
      </div>
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.3 }}
        className="relative md:flex items-center lg:px-4 2xl:px-16 hidden"
      >
        <Image
          alt="promo main image"
          src="/assets/mainPage/promo/mainImage.webp"
          width={430}
          height={862}
          className="object-contain md:w-80 lg:w-[360px] 2xl:w-[430px]"
        />
      </motion.div>
    </div>
  </section>
);
