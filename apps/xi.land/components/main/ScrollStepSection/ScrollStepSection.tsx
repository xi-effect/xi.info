'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LINES = ['в планировании', 'в подаче материала', 'в общении с учениками'];

export const ScrollStepSection = () => {
  /* refs */
  const sectionRef = useRef<HTMLDivElement>(null); // вся “пин-секция”
  const sliderRef = useRef<HTMLDivElement>(null); // обёртка с хвостами строк

  /* GSAP + ScrollTrigger */
  useLayoutEffect(() => {
    if (!sectionRef.current || !sliderRef.current) return;

    const lineH = 92;
    const total = LINES.length;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'center center',
        end: () => `+=${window.innerHeight * (total - 1)}`, // 1 экран на каждый шаг
        pin: true,
        scrub: 0.4, // плавное «перелистывание»
        snap: { snapTo: 1 / (total - 1), duration: 0.25 },
        anticipatePin: 1,
      },
    });

    /* смещаем хвосты строк по одной высоте и перекрашиваем активную */
    for (let i = 1; i < total; i += 1) {
      tl.to(sliderRef.current, { y: -lineH * i, ease: 'none' }, i);
      tl.to(sliderRef.current.children[i], { color: 'var(--color-gray-0)' }, i);
      tl.to(sliderRef.current.children[i - 1], { color: 'var(--color-gray-70)' }, i);
    }

    // eslint-disable-next-line consistent-return
    return () => tl.scrollTrigger?.kill();
  }, []);

  /* убираем первую букву “в” из каждой строки — она будет фиксированной */
  const TAILS = LINES.map((t) => t.slice(1).trimStart());

  return (
    <>
      {/* проскролл до секции */}
      <div style={{ height: '120vh' }} />

      {/* 🔹 pinned-секция */}
      <section ref={sectionRef} className="relative h-screen bg-neutral-900 overflow-hidden">
        {/* центрируем по экрану общий «бутерброд» из буквы и хвостов */}
        <div className="absolute left-[10vw] top-1/2 -translate-y-1/2 flex items-center">
          {/* статичная буква */}
          <span className="font-semibold text-[48px] leading-none text-gray-0 select-none">в</span>

          {/* “ездящие” хвосты; даём отступ вправо, чтобы не наезжали на букву */}
          <div ref={sliderRef} className="flex flex-col mt-[182px] ml-[12px] leading-tight gap-8">
            {TAILS.map((text, idx) => (
              <p
                key={idx}
                className="
                  m-0 font-semibold text-[48px]
                  first:text-gray-0                   /* первая строка сразу белая */
                  [&:not(:first-child)]:text-gray-70
                "
              >
                {text}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* остальной контент сайта */}
      <div style={{ height: '200vh' }} />
    </>
  );
};
