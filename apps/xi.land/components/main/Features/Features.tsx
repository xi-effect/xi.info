'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Button } from '@xipkg/button';
import { cn } from '@xipkg/utils';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* ---------- контент всех состояний ---------- */
const steps = [
  {
    title: 'Расписание всегда под контролем',
    desc: 'Планируйте работу на день, неделю, месяц и год вперёд вместе с sovlium',
    href: '/call',
    cta: 'Узнать больше',
  },
  {
    title: 'Видеозвонки, которые не хочется заканчивать',
    desc: 'Ваш идеальный цифровой класс. Слушайте. Показывайте. Объясняйте. Просто и быстро',
    href: '/screen-share',
    cta: 'Узнать больше',
  },
  {
    title: 'Бесконечный холст для ваших идей',
    desc: 'Готовьте уроки заранее или рисуйте на доске прямо во время видеозвонка',
    href: '/noise-cancellation',
    cta: 'Узнать больше',
  },
  {
    title: 'Собственная цифровая библиотека',
    desc: 'Одна платформа вместо десяти сервисов: храните все материалы в sovlium',
    href: '/backgrounds',
    cta: 'Узнать больше',
  },
  {
    title: 'Наглядная статистика заработка',
    desc: 'Больше не нужно записывать каждую оплату отдельно. Sovlium подсчитает всё за вас',
    href: '/record',
    cta: 'Узнать больше',
  },
  {
    title: 'Работа с компьютера, телефона и планшета',
    desc: 'Дома, в парке или на пляже — проводите уроки там, где удобно именно вам',
    href: null, // <-- последняя: без кнопки
    cta: null,
  },
];

export const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);

  const slidesRef = useRef<HTMLDivElement[]>([]);
  const collect = (el: HTMLDivElement | null) => {
    if (el && !slidesRef.current.includes(el)) slidesRef.current.push(el);
  };

  /* ------------ util: смена контента + видимость кнопки ------------ */
  function setStep(idx: number) {
    const { title, desc, href } = steps[idx] ?? steps.at(-1)!;

    titleRef.current!.textContent = title;
    descRef.current!.textContent = desc;

    if (href) {
      btnRef.current!.setAttribute('href', href);
      gsap.to(btnRef.current, { autoAlpha: 1, duration: 0.3, overwrite: 'auto' });
    } else {
      gsap.to(btnRef.current, { autoAlpha: 0, duration: 0.3, overwrite: 'auto' });
    }
  }

  /* ----------------------------- GSAP ----------------------------- */
  useGSAP(
    () => {
      const total = slidesRef.current.length; // 6

      /* движение блока с текстом */
      gsap.to([titleRef.current, descRef.current, btnRef.current], {
        y: () => (total - 1) * window.innerHeight,
        ease: 'none',
        scrollTrigger: {
          trigger: slidesRef.current[0],
          start: 'center center',
          endTrigger: slidesRef.current[total - 1],
          end: 'center center',
          scrub: true,
        },
      });

      /* смена контента */
      slidesRef.current.forEach((slide, i) => {
        ScrollTrigger.create({
          trigger: slide,
          start: 'center center',
          onEnter: () => setStep(i), // следующее состояние
          onEnterBack: () => setStep(i), // предыдущее состояние
        });
      });
    },
    { scope: sectionRef },
  );

  /* ------------------------------ JSX ------------------------------ */
  return (
    <section ref={sectionRef} className="relative flex flex-col items-center">
      {/* Левый фиксированный блок с контентом -------------------------------- */}
      <div className="h-[100dvh] w-1/2 absolute left-0 top-0 z-10 flex flex-col gap-16 items-start justify-center">
        <div className="flex flex-col pl-[160px] pr-[64px] gap-4">
          <h2
            ref={titleRef}
            className="text-[32px] md:text-[48px] font-semibold text-gray-100 text-left leading-tight max-w-[18ch]"
            aria-live="polite"
          >
            {steps[0].title}
          </h2>

          <p ref={descRef} className="text-lg text-gray-80 text-left text-[32px]">
            {steps[0].desc}
          </p>

          {/* кнопка: скрывается через autoAlpha, а не display → плавный fade */}
          <Link ref={btnRef} href={steps[0].href!} className="mt-4">
            <Button variant="default" size="l" className="h-[56px]">
              {steps[0].cta}
            </Button>
          </Link>
        </div>
      </div>

      {/* Слайды с картинками -------------------------------------------------- */}
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <div key={n} ref={collect} className="relative flex justify-end h-[100dvh] w-full">
          <div className="relative w-1/2 flex items-center justify-center h-full">
            <div
              className={cn(
                'absolute right-0 w-full h-[80dvh] overflow-hidden rounded-l-3xl',
                n !== 6 && 'shadow-2xl',
              )}
            >
              <Image
                src={`/assets/main/Features/${n}.svg`}
                alt={`feature-${n}`}
                fill
                className="object-cover object-left"
                priority={n === 1}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
