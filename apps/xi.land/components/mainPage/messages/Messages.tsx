'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { cn } from '@xipkg/utils';
import { AspectRatio } from '@xipkg/aspect-ratio';
import { Button } from '@xipkg/button';
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
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  const handleManualClick = (index: number) => {
    if (index === currentSlide) return;
    setCurrentSlide(index);
    startAutoSlide();
  };

  return (
    <>
      <Text>Переход в онлайн принёс репетиторам новые вызовы</Text>

      <section className="relative z-0 bg-gray-100 h-screen w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="w-full h-screen"
          >
            <div className="w-full h-full flex items-center gap-12 px-[160px] py-[120px]">
              <div className="flex flex-col items-end gap-8 max-w-[768px]">
                {slides.map((slide, index) => (
                  <Button
                    asChild
                    variant="ghost"
                    key={slide.id}
                    className={cn(
                      'transition-all duration-500 font-medium text-lg-base bg-transparent hover:bg-transparent relative',
                      currentSlide === index
                        ? 'text-gray-0 translate-x-[-32px]'
                        : 'text-gray-70 hover:text-gray-0 text-right',
                    )}
                    onClick={() => handleManualClick(index)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleManualClick(index);
                      }
                    }}
                  >
                    <div className="flex items-center gap-1">
                      {currentSlide === index && <span className="block">в</span>}
                      <span className="block">{slide.title}</span>
                    </div>
                  </Button>
                ))}
              </div>

              <div className="h-full flex-1 flex items-center justify-center">
                <AspectRatio ratio={768 / 664} className="w-full max-w-[768px] h-auto">
                  <Image
                    src={`${urlImages}${slides[currentSlide].messages}`}
                    alt={slides[currentSlide].title}
                    fill
                    priority
                    className="object-contain"
                  />
                </AspectRatio>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </>
  );
};
