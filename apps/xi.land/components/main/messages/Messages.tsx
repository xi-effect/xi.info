'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import { messages } from './content';
import { cn } from '@xipkg/utils';

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

      const scrollStep = 1500; // 1500px на каждый переход
      const totalScrollDistance = scrollStep * total; // Для 3 элементов: 4500px

      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'center center',
          end: `+=${totalScrollDistance}`, // Используем тот же end, что и для анимации цветов
          pin: true,
          scrub: true,
          pinSpacing: window.innerWidth >= 640,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (!tailsRef.current) return;

            const y = gsap.getProperty(tailsRef.current, 'y') as number;
            const index = Math.round(-y / lineH);

            if (index !== lastIdxRef.current && index >= 0 && index < total) {
              lastIdxRef.current = index;
              setActiveIndex(index);
            }

            // Логика переключения цветов текста
            const progress = Math.max(0, Math.min(1, self.progress));
            const scrollDistance = progress * totalScrollDistance;
            let currentIndex = Math.floor(scrollDistance / scrollStep);

            if (currentIndex >= total) {
              currentIndex = total - 1;
            }

            if (currentIndex !== activeTextIndex) {
              setActiveTextIndex(currentIndex);
            }
          },
        },
      });
    },
    { scope: sectionRef },
  );

  useEffect(() => {
    if (!imgWrapRef.current) return;
    const imgs = Array.from(imgWrapRef.current.children) as HTMLElement[];

    gsap.to(imgs, { autoAlpha: 0, duration: 0.35, ease: 'power1.out' });
    gsap.to(imgs[activeIndex], { autoAlpha: 1, duration: 0.35, ease: 'power1.out' });
  }, [activeIndex]);

  // Инициализация: первый текст активен по умолчанию
  useEffect(() => {
    setActiveTextIndex(0);
  }, []);

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
                    'animate-gradient-text m-0 text-gray-60 font-semibold text-[36px] md:text-[32px] lg:text-[40px] 2xl:text-[48px] transition-all duration-500',
                    isActive && activeTextIndex !== null
                      ? messages[idx]?.className
                      : '',
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
            <div className="relative flex flex-col h-[75vh] px-6 w-full gap-4 justify-center items-center overflow-y-auto">
              {messages[0]?.images?.map((image, imgIdx) => (
                <div key={imgIdx} className="relative w-full flex-shrink-0 flex justify-center">
                  <Image
                    src={image.src}
                    alt="message image"
                    width={650}
                    height={400}
                    className="max-w-full h-auto object-contain"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
