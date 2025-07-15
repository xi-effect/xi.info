'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@xipkg/utils';
import { AspectRatio } from '@xipkg/aspect-ratio';
import { Text } from '../shared';

const urlImages = '/assets/mainPage/messages/';

const slides = [
  {
    id: 1,
    title: 'планировании',
    messages: 'planning.png',
  },
  {
    id: 2,
    title: 'подаче материала',
    messages: 'material.png',
  },
  {
    id: 3,
    title: 'общении с учениками',
    messages: 'chat.png',
  },
];

export const Messages = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const sectionClass = cn('relative z-0 bg-gray-100 h-screen w-full');

  return (
    <>
      <Text>Переход в онлайн принёс репетиторам новые вызовы</Text>

      <section className={sectionClass}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-3xl mx-auto"
          >
            <AspectRatio ratio={768 / 664} className="relative">
              <Image
                src={`${urlImages}${slides[currentSlide].messages}`}
                alt={slides[currentSlide].title}
                width={768}
                height={664}
                priority
                className="object-cover"
              />
            </AspectRatio>
          </motion.div>
        </AnimatePresence>
      </section>
    </>
  );
};
