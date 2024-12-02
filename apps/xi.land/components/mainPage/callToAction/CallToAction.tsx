'use client';

import { motion } from 'framer-motion';
import { CallToActionForm } from './CallToActionForm';

export const CallToAction = () => (
  <section className="px-4 pt-8 xl:px-24 3xl:px-40 bg-[url('/assets/mainPage/callToAction/mainBg.svg')] bg-no-repeat bg-cover 3xl:pt-32 3xl:pb-48 md:pt-24 md:pb-32 sm:pt-12 xl:pt-24 xl:pb-40 sm:px-8 lg:px-12 sm:pb-20 pb-16 mb-[-32px] xl:mb-[-64px] bg-brand-80 rounded-t-2xl sm:rounded-t-[32px] xl:rounded-t-[64px]">
    <div className="flex flex-col gap-y-8 md:gap-x-8 lg:gap-x-0 3xl:gap-16 justify-between md:flex-row md:items-center">
      <h1 className="3xl:-tracking-[.01em] md:whitespace-nowrap 3xl:leading-tight font-medium text-h6 sm:text-h3 md:text-h5 lg:text-h4 xl:text-h3 text-gray-0 2xl:text-h2 3xl:text-[64px] ">
        Остались вопросы?
        <br />
        Запишитесь на демонстрацию
      </h1>
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <CallToActionForm
          className="rounded-2xl sm:rounded-[32px] bg-gray-0 sm:p-12 md:p-6 lg:p-12"
          titleClassName="text-xl-base sm:text-h5 md:text-xl-base lg:text-h5"
          title="Запись на демонстрацию"
        />
      </motion.div>
    </div>
  </section>
);
