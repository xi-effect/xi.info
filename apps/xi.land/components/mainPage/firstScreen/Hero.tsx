'use client';

import { AuroraBackground } from 'common.ui';
import { motion } from 'framer-motion';

export const Hero = () => {
  console.log('Hero');

  return (
    <section className="bg-gray-100 relative lg:h-[calc(120dvh)] w-[100dvw] flex">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 w-[100dvw]"
        >
          <h1 className="text-[80px] font-medium text-gray-0 text-center">
            Все инструменты
            <br />
            репетитора
            <br />в одном сервисе
          </h1>
          <h2 className="text-[32px] text-gray-20 text-center">
            Видеозвонки, онлайн-доски и заметки, контроль оплат и<br />
            автоматические напоминания для учеников.
            <br />
            Ваши знания бесценны. Делитесь ими
            <br />с комфортом!
          </h2>
        </motion.div>
      </AuroraBackground>
    </section>
  );
};
