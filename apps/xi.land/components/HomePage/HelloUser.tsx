'use client';

import { Button } from '@xipkg/button';

import React, { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Caveat } from 'next/font/google';
import { motion, useInView, useAnimation } from 'framer-motion';
import dynamic from 'next/dynamic';

const ContactUsModal = dynamic(() => import('./ContactUsModal'), { ssr: false });

export const caveat = Caveat({ subsets: ['latin', 'cyrillic', 'cyrillic-ext', 'latin-ext'] });

const defaultAnimations = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.1,
    },
  },
};

const repeatDelay = 5000;

const caveatClassName = `${caveat.className} text-[48px] md:text-[72px] 2xl:text-[120px] leading-[28px] md:leading-[72px] 2xl:leading-[80px]`;

const text = [
  [
    {
      text: 'Проводите',
      className: caveatClassName,
    },
    { text: 'онлайн' },
    { text: 'занятия' },
  ],
  [
    {
      text: 'Делитесь',
      className: caveatClassName,
    },
    { text: 'материалами' },
    { text: 'со студентами' },
  ],
  [
    {
      text: 'Проверяйте',
      className: caveatClassName,
    },
    { text: 'знания' },
    { text: 'студентов' },
  ],
  [
    {
      text: 'Общайтесь',
      className: caveatClassName,
    },
    { text: 'в чате' },
    { text: 'с учениками' },
  ],
];

const HelloUser = () => {
  const controls = useAnimation();
  const textArray = Array.isArray(text) ? text : [text];
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, once: true });

  const [index, setIndex] = React.useState(0);

  useEffect(() => {
    let timeout;
    const show = () => {
      controls.start('visible');
      if (repeatDelay) {
        timeout = setTimeout(async () => {
          await controls.start('hidden');
          controls.start('visible');

          if (index === text.length - 1) setIndex(0);
          else setIndex((prev) => prev + 1);
        }, repeatDelay);
      }
    };

    if (isInView) {
      show();
    } else {
      controls.start('hidden');
    }

    return () => clearTimeout(timeout);
  }, [isInView, index]);

  // Чтение параметров из url и открытие/закрытие модалки
  const searchParams = useSearchParams();
  const [modalOpen, setModalOpen] = useState(searchParams.get('contact-us') === 'true');

  return (
    <div className="h-[400px] md:h-[480px] 2xl:h-[720px] bg-brand-80 flex flex-col w-full justify-center items-center p-4 sm:p-8 xl:py-16 xl:px-[96px]">
      <div className="w-full max-w-[1920px] flex flex-col justify-center items-center">
        <h1 className="sr-only">Приложение для репетиторов и малого бизнеса</h1>
        <motion.h1
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}
          aria-hidden
          className="flex flex-col md:flex-row text-[32px] md:text-[48px] 2xl:text-[80px] text-gray-0 items-center md:items-baseline"
        >
          {textArray[index].map((line, lineIndex) => (
            <span className="" key={`${line}-${lineIndex}`}>
              {line.text.split(' ').map((word, wordIndex) => (
                <span className={line.className} key={`${word}-${wordIndex}`}>
                  {word.split('').map((char, charIndex) => (
                    <motion.span
                      key={`${char}-${charIndex}`}
                      className=""
                      variants={defaultAnimations}
                    >
                      {char}
                    </motion.span>
                  ))}
                  <span className="inline-block">&nbsp;</span>
                </span>
              ))}
            </span>
          ))}
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-2 md:mt-4 text-[20px] md:text-[24px] 2xl:text-[32px] sm:text-[32px] text-center text-gray-10"
        >
          Приложение для репетиторов и малого бизнеса
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="w-full md:w-fit flex flex-col sm:flex-row gap-4 mt-8 "
        >
          <ContactUsModal open={modalOpen} setModalOpen={setModalOpen} onOpenChange={setModalOpen}>
            <Button
              className="w-full md:w-fit border-0 text-brand-80 bg-gray-0 shadow-2xl hover:bg-gray-5 focus:bg-gray-5 active:bg-gray-5"
              size="l"
            >
              Записаться на тестирование
            </Button>
          </ContactUsModal>
          {/* <Button size="l" variant="secondary">
          <NextLink href="https://app.xieffect.ru/signup">Стать пользователем</NextLink>
        </Button> */}
        </motion.div>
      </div>
    </div>
  );
};

export default HelloUser;
