'use client';

/* eslint-disable no-plusplus */

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

const LINES = ['в планировании', 'в подаче материала', 'в общении с учениками'];
const IMAGES = [
  '/assets/main/Messages/plans.webp',
  '/assets/main/Messages/materials.webp',
  '/assets/main/Messages/chat.webp',
];

export const ScrollStepSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const tailsRef = useRef<HTMLDivElement>(null);
  const imgWrapRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const lastIdxRef = useRef(0);

  useGSAP(
    () => {
      if (!sectionRef.current || !tailsRef.current) return;

      const lineEl = tailsRef.current.children[0] as HTMLElement;
      const gap = parseFloat(getComputedStyle(tailsRef.current).gap || '0');
      const lineH = lineEl.clientHeight + gap;
      // const EPS = 0.01;
      const total = LINES.length;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'center center',
          end: '+=300%',
          pin: true,
          scrub: true,
          pinSpacing: window.innerWidth >= 640,
          // snap: {
          //   snapTo: 1 / total,
          //   duration: 0.6,
          //   delay: 0.1,
          //   ease: 'power2.out',
          // },
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

      for (let i = 1; i < total; i++) {
        const at = i / (total - 1);
        tl.to(tailsRef.current, { y: -lineH * i, ease: 'none' }, at)
          .to(tailsRef.current.children[i], { color: 'var(--color-gray-0)' }, at)
          .to(tailsRef.current.children[i - 1], { color: 'var(--color-gray-70)' }, at);
      }
    },
    { scope: sectionRef },
  );

  useEffect(() => {
    if (!imgWrapRef.current) return;
    const imgs = Array.from(imgWrapRef.current.children) as HTMLElement[];

    gsap.to(imgs, { autoAlpha: 0, duration: 0.35, ease: 'power1.out' });
    gsap.to(imgs[activeIndex], { autoAlpha: 1, duration: 0.35, ease: 'power1.out' });
  }, [activeIndex]);

  const TAILS = LINES.map((t) => t.slice(1).trimStart());

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full bg-gray-100 overflow-hidden flex flex-col-reverse md:flex-row items-start justify-center gap-8 px-6 py-12 sm:flex-row sm:items-center md:px-8 2xl:px-[160px] sm:py-0"
    >
      {/* ── слева: буква + хвосты ── */}
      <div className="flex pt-[96px] w-1/2 items-baseline">
        <span className="font-semibold text-[36px] md:text-[32px] lg:text-[40px] 2xl:text-[48px] leading-tight text-gray-0 select-none">
          в
        </span>

        <div ref={tailsRef} className="flex flex-col ml-[12px] gap-8 leading-tight">
          {TAILS.map((txt, idx) => (
            <p
              key={idx}
              className="m-0 font-semibold text-[36px] md:text-[32px] lg:text-[40px] 2xl:text-[48px] first:text-gray-0 [&:not(:first-child)]:text-gray-70"
            >
              {txt}
            </p>
          ))}
        </div>
      </div>

      {/* ── справа: картинки ── */}
      <div ref={imgWrapRef} className="relative flex h-full w-full md:w-1/2">
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
  );
};
