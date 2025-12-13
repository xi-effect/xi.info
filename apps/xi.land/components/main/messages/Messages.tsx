'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { messages } from './content';
import { cn } from '@xipkg/utils';
import { Text } from '../Text';

gsap.registerPlugin(ScrollTrigger);

export const Messages = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const tailsRef = useRef<HTMLDivElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const textElementsRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeTextIndex, setActiveTextIndex] = useState<number | null>(null);
  const lastIdxRef = useRef(0);

  useGSAP(
    () => {
      if (!sectionRef.current || !tailsRef.current) return;

      const lineEl = tailsRef.current.children[0] as HTMLElement;
      const gap = parseFloat(getComputedStyle(tailsRef.current).gap || '0');
      const lineH = lineEl.clientHeight + gap;
      const total = messages.length;

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'center center',
          end: '+=300%',
          pin: true,
          scrub: true,
          pinSpacing: window.innerWidth >= 640,
          anticipatePin: 1,
          onUpdate: () => {
            if (!tailsRef.current) return;

            const y = gsap.getProperty(tailsRef.current, 'y') as number;
            const index = Math.round(-y / lineH);

            if (index !== lastIdxRef.current && index >= 0 && index < total) {
              lastIdxRef.current = index;
              setActiveIndex(index);
            }
          },
        },
      });

      // for (let i = 1; i < total; i++) {
      //   const at = i / (total - 1);
      //   tl.to(tailsRef.current, { y: -lineH * i, ease: 'none' }, at)
      //     .to(tailsRef.current.children[i], { color: 'var(--color-gray-0)' }, at)
      //     .to(tailsRef.current.children[i - 1], { color: 'var(--color-gray-70)' }, at);
      // }
    },
    { scope: sectionRef },
  );

  useEffect(() => {
    if (!imgWrapRef.current) return;
    const imgs = Array.from(imgWrapRef.current.children) as HTMLElement[];

    gsap.to(imgs, { autoAlpha: 0, duration: 0.35, ease: 'power1.out' });
    gsap.to(imgs[activeIndex], { autoAlpha: 1, duration: 0.35, ease: 'power1.out' });
  }, [activeIndex]);

  // Отдельная анимация смены цветов текста при скролле
  useGSAP(
    () => {
      if (!sectionRef.current || textElementsRef.current.length === 0) return;

      const textElements = textElementsRef.current.filter(Boolean) as HTMLElement[];
      if (textElements.length === 0) return;

      const total = messages.length;
      const scrollStep = 300; // 300px на каждый переход

      // Инициализация: первый текст активен по умолчанию
      setActiveTextIndex(0);

      let lastActiveIndex = 0;

      // Создаем отдельный ScrollTrigger для анимации цветов
      // Используем тот же trigger и start, что и в основной анимации
      const scrollTrigger = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'center center',
        end: `+=${scrollStep * (total - 1)}`,
        scrub: true,
        onUpdate: (self) => {
          // Используем progress из ScrollTrigger
          const progress = Math.max(0, Math.min(1, self.progress));

          // Вычисляем текущий индекс на основе прогресса
          // Для 3 элементов (total = 3) нужно 2 перехода по 300px каждый:
          // - progress 0.0-0.499 -> index 0 (первый текст активен)
          // - progress 0.5-0.999 -> index 1 (второй текст активен)
          // - progress 1.0 -> index 2 (третий текст активен)
          const rawIndex = progress * (total - 1);

          // Используем Math.floor для плавного переключения
          // Добавляем небольшую задержку (0.1) чтобы переход был более заметным
          const currentIndex = Math.floor(rawIndex + 0.1);
          const clampedIndex = Math.max(0, Math.min(currentIndex, total - 1));

          // Переключаем только когда индекс действительно изменился
          if (clampedIndex !== lastActiveIndex) {
            lastActiveIndex = clampedIndex;
            setActiveTextIndex(clampedIndex);
          }
        },
      });

      return () => {
        scrollTrigger.kill();
      };
    },
    { scope: sectionRef, dependencies: [messages.length] },
  );

  const TAILS = messages.map((t) => t.content);

  return (
    <section
      ref={sectionRef}
      className="max-w-400 md:mx-auto relative h-screen w-full bg-gray-0 overflow-hidden"
    >
      <div className="px-6 py-12">
        <h2 className="dark:text-gray-0 text-gray-100 text-center text-xl-base leading-[1.2] sm:leading-[1.1] md:leading-[1] xs:text-[40px] md:text-[48px] font-semibold sm:font-medium md:font-semibold">
          Переход в онлайн изменил всё
        </h2>
      </div>
      <div className="max-w-400 w-full flex flex-col-reverse md:flex-row items-center justify-center gap-8">
        <div className="flex items-center justify-center h-full w-1/2">
          <div ref={tailsRef} className="flex flex-col ml-[12px] gap-8 leading-tight">
            {TAILS.map((txt, idx) => {
              const isActive = activeTextIndex === idx;
              return (
                <p
                  key={idx}
                  ref={(el) => {
                    textElementsRef.current[idx] = el;
                  }}
                  className={cn(
                    'm-0 font-semibold text-[36px] md:text-[32px] lg:text-[40px] 2xl:text-[48px] transition-all duration-500',
                    isActive && activeTextIndex !== null ? messages[idx]?.className : 'text-gray-60',
                  )}
                >
                  {txt}
                </p>
              );
            })}
          </div>
        </div>

        {/* ── справа: картинки ── */}
        <div ref={imgWrapRef} className="relative flex h-full w-full md:w-1/2">
          <div className="relative h-[75vh] my-auto w-full">
            <Image
              src="/assets/main/Messages/background.webp"
              alt=""
              fill
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>
          {/* {IMAGES.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt=""
            fill
            priority={idx === 0}
            className="absolute inset-0 h-full w-full object-contain"
            style={{ opacity: idx === 0 ? 1 : 0 }}
          />
        ))} */}
        </div>
      </div>
    </section>
  );
};
