'use client';

import React, { useRef, useLayoutEffect, forwardRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image, { ImageProps } from 'next/image';

gsap.registerPlugin(ScrollTrigger);

/*
 * ===== SVG‑файлы из public =====
 * Путь «/assets/main/messages/...». Без импортов, Next раздаёт их как статику.
 */
const steps = [
  { id: 0, title: 'в планировании', src: '/assets/main/messages/plans.svg' },
  { id: 1, title: 'подаче материала', src: '/assets/main/messages/materials.svg' },
  { id: 2, title: 'общении с учениками', src: '/assets/main/messages/chat.svg' },
];

/*
 * Next.js <Image> не передаёт ref до самого <img>, поэтому GSAP не может менять opacity.
 * Вместо того чтобы отказываться от <Image>, оборачиваем его в forwardRef и
 * цепляемся к обёртке‑div: анимируем весь контейнер, SVG внутри остаётся оптимизированным.
 */
const ImgWrapper = forwardRef<HTMLDivElement, ImageProps>(({ className, ...imgProps }, ref) => (
  <div ref={ref as React.Ref<HTMLDivElement>} className={className}>
    {/* fill & sizes обеспечивает адаптивность */}
    <Image {...imgProps} alt={imgProps.alt || ''} fill priority sizes="100vw" />
  </div>
));
ImgWrapper.displayName = 'ImgWrapper';

export function Messages() {
  // ---------- refs ----------
  const introRef = useRef<HTMLElement>(null);
  const sliderRef = useRef<HTMLElement>(null);
  const textRefs = useRef<HTMLElement[]>([]);
  const imgRefs = useRef<HTMLDivElement[]>([]); // теперь дивы‑контейнеры

  // — dev‑Strict mode: избавляемся от дублей
  const addTextRef = (el: HTMLElement | null) => {
    if (el) textRefs.current = [...new Set([...textRefs.current, el])];
  };
  const addImgRef = (el: HTMLDivElement | null) => {
    if (el) imgRefs.current = [...new Set([...imgRefs.current, el])];
  };

  /* ---------- GSAP ---------- */
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // 1️⃣ pin интро
      ScrollTrigger.create({
        trigger: sliderRef.current,
        start: 'top top',
        end: 'bottom bottom',
        pin: introRef.current,
        pinSpacing: false,
      });

      // 2️⃣ timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sliderRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
        },
      });

      // стартовые стейты
      gsap.set(imgRefs.current, { autoAlpha: 0 });
      gsap.set(imgRefs.current[0], { autoAlpha: 1 });
      gsap.set(textRefs.current.slice(1), { autoAlpha: 0.25 });

      steps.forEach((_, idx) => {
        const nextIdx = idx + 1;
        if (nextIdx < steps.length) {
          tl.to(textRefs.current, { yPercent: -100 * nextIdx, ease: 'none' }, idx);
        }

        tl.to(imgRefs.current[idx], { autoAlpha: 1, duration: 0.3 }, idx);
        if (idx > 0) tl.to(imgRefs.current[idx - 1], { autoAlpha: 0, duration: 0.3 }, idx);

        tl.to(textRefs.current[idx], { autoAlpha: 1, duration: 0.2 }, idx);
        if (idx > 0) tl.to(textRefs.current[idx - 1], { autoAlpha: 0.25, duration: 0.2 }, idx);
      });

      // refresh после загрузки последнего SVG
      imgRefs.current
        .at(-1)
        ?.querySelector('img')
        ?.addEventListener('load', () => ScrollTrigger.refresh());
    }, sliderRef);

    return () => ctx.revert();
  }, []);

  /* ---------- JSX ---------- */
  return (
    <>
      {/* 1. Intro */}
      <section ref={introRef} className="min-h-screen flex items-center justify-center bg-white">
        <h1 className="text-6xl md:text-8xl font-bold text-center">Добро&nbsp;пожаловать</h1>
      </section>

      {/* 2. Slider — высота по числу шагов */}
      <section
        ref={sliderRef}
        style={{ height: `${steps.length * 100}vh` }}
        className="relative flex"
      >
        {/* Левый столбец */}
        <div className="sticky top-0 flex w-1/2 items-center justify-center h-screen">
          <div className="flex flex-col items-center will-change-transform">
            {steps.map(({ id, title }) => (
              <h2
                key={id}
                ref={addTextRef}
                className="text-4xl md:text-6xl font-bold leading-tight h-[1em] flex items-center justify-center mb-10"
              >
                {title}
              </h2>
            ))}
          </div>
        </div>

        {/* Правый столбец — обёртки с Image */}
        <div className="sticky top-0 w-1/2 h-screen flex items-center justify-center">
          <div className="relative w-full h-full">
            {steps.map(({ id, src }) => (
              <ImgWrapper
                key={id}
                ref={addImgRef}
                src={src}
                alt="step graphic"
                className="absolute inset-0 w-full h-full will-change-opacity"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
