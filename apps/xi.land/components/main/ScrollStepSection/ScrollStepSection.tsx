'use client';

import { useLayoutEffect, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

/* данные */
const LINES = ['в планировании', 'в подаче материала', 'в общении с учениками'];
const IMAGES = [
  '/assets/main/Messages/plans.svg',
  '/assets/main/Messages/materials.svg',
  '/assets/main/Messages/chat.svg',
];

export const ScrollStepSection = () => {
  /* refs */
  const sectionRef = useRef<HTMLDivElement>(null);
  const tailsRef = useRef<HTMLDivElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);

  /* индекс текущего шага */
  const [activeIndex, setActiveIndex] = useState(0);
  const lastIdxRef = useRef(0); /* чтобы не дёргать setState 50× за snap */

  /* === GSAP: один тайм-лайн, вычисляет индекс на защёлке === */
  useLayoutEffect(() => {
    if (!sectionRef.current || !tailsRef.current) return;

    const lineH = tailsRef.current.children[0].getBoundingClientRect().height; // динамично
    const total = LINES.length;
    const step = 1 / (total - 1); // 0, 0.5, 1 …
    const EPS = 0.001;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'center center',
        end: () => `+=${window.innerHeight * (total - 1)}`,
        pin: true,
        scrub: 0.4,
        snap: { snapTo: step, duration: 0.25 },
        anticipatePin: 1,

        onUpdate: ({ progress }) => {
          const idx = Math.round(progress / step);
          const snapPos = idx * step;
          if (Math.abs(progress - snapPos) < EPS && idx !== lastIdxRef.current) {
            lastIdxRef.current = idx;
            setActiveIndex(idx);
          }
        },
      },
    });

    /* движение + перекраска хвостов */
    for (let i = 1; i < total; i += 1) {
      tl.to(tailsRef.current, { y: -lineH * i, ease: 'none' }, i)
        .to(tailsRef.current.children[i], { color: 'var(--color-gray-0)' }, i)
        .to(tailsRef.current.children[i - 1], { color: 'var(--color-gray-70)' }, i);
    }

    // eslint-disable-next-line consistent-return
    return () => {
      tl.scrollTrigger?.kill();
      tl.kill();
    };
  }, []); // ← больше нет зависимости от activeIndex

  /* === fade картинок при смене индекса === */
  useEffect(() => {
    if (!imgWrapRef.current) return;
    const imgs = Array.from(imgWrapRef.current.children) as HTMLElement[];

    gsap.to(imgs, { autoAlpha: 0, duration: 0.35, ease: 'power1.out' });
    gsap.to(imgs[activeIndex], { autoAlpha: 1, duration: 0.35, ease: 'power1.out' });
  }, [activeIndex]);

  /* верстка */
  const TAILS = LINES.map((t) => t.slice(1).trimStart());

  return (
    <>
      <div style={{ height: '120vh' }} />

      <section
        ref={sectionRef}
        className="px-[160px] relative h-screen w-full bg-gray-100 flex items-center overflow-hidden"
      >
        {/* ── слева: буква + хвосты ── */}
        <div className="flex pt-[96px] w-1/2 items-start">
          <span className="font-semibold text-[48px] leading-none text-gray-0 select-none">в</span>

          <div ref={tailsRef} className="flex flex-col mt-[-6px] ml-[12px] gap-8 leading-tight">
            {TAILS.map((txt, idx) => (
              <p
                key={idx}
                className="
                  m-0 font-semibold text-[48px]
                  first:text-gray-0
                  [&:not(:first-child)]:text-gray-70
                "
              >
                {txt}
              </p>
            ))}
          </div>
        </div>

        {/* ── справа: картинки ── */}
        <div ref={imgWrapRef} className="relative flex h-full w-1/2">
          {IMAGES.map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt=""
              fill
              priority={idx === 0}
              className="absolute inset-0 h-full w-full object-contain"
              style={{ opacity: idx === 0 ? 1 : 0 }}
            />
          ))}
        </div>
      </section>

      <div style={{ height: '200vh' }} />
    </>
  );
};
