'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const headings = [
  'Видеозвонки, которые не хочется заканчивать',
  'Расшаренный экран без лагов',
  'Идеальный звук даже в шумном офисе',
  'AI-фоны и затемнение заднего плана',
  'Запись звонка в один клик',
  'Чат прямо в видеозвонке',
  'Гибкое управление доступами',
];

export const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const slidesRef = useRef<HTMLDivElement[]>([]);
  const collect = (el: HTMLDivElement | null) => {
    if (el && !slidesRef.current.includes(el)) slidesRef.current.push(el);
  };

  /** --------------- GSAP --------------- */
  useGSAP(
    () => {
      const total = slidesRef.current.length;

      /* движение заголовка */
      gsap.to(h2Ref.current, {
        y: () => (total - 1) * window.innerHeight, // (N-1)*100vh
        ease: 'none',
        scrollTrigger: {
          trigger: slidesRef.current[0], // первый слайд
          start: 'center center', // его центр ↔ центр вьюпорта
          endTrigger: slidesRef.current[total - 1], // последний слайд
          end: 'center center',
          scrub: true,
        },
      });

      /* смена текста на каждом слайде */
      slidesRef.current.forEach((slide, i) => {
        ScrollTrigger.create({
          trigger: slide,
          start: 'center center',
          onEnter: () => {
            if (i + 1 < headings.length) h2Ref.current!.textContent = headings[i + 1];
          },
          onEnterBack: () => {
            h2Ref.current!.textContent = headings[i];
          },
        });
      });
    },
    { scope: sectionRef },
  );

  /** --------------- JSX --------------- */
  return (
    <section ref={sectionRef} className="relative flex flex-col items-center">
      {/* Левый фиксированный блок с заголовком */}
      <div className="bg-blue-800 h-[100dvh] w-1/2 absolute left-0 top-0 z-10 flex items-center justify-center">
        <h2
          ref={h2Ref}
          className="text-4xl font-semibold text-white text-center leading-tight max-w-[18ch]"
          aria-live="polite"
        >
          {headings[0]}
        </h2>
      </div>

      {/* Слайды — 100 vh каждый */}
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <div
          key={n}
          ref={collect}
          className="bg-amber-700 relative flex justify-end h-[100dvh] w-full"
        >
          <div className="relative bg-green-800 w-1/2 flex items-center justify-center h-full">
            <div className="shadow-2xl absolute right-0 w-full h-[80dvh] overflow-hidden rounded-l-3xl">
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
