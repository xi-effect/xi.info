'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

export const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const button = buttonRef.current;
    const path = pathRef.current;

    if (section && button && path) {
      gsap.to(button, {
        motionPath: {
          path,
          align: path,
          autoRotate: false,
          alignOrigin: [0.5, 0.5],
        },
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: 'center top',
          scrub: 0.5,
        },
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="bg-zinc-900 relative lg:h-[calc(120dvh)] w-[100dvw] flex">
      <div
        ref={contentRef}
        className="relative flex flex-col gap-4 items-center justify-center px-4 w-[100dvw] h-full"
      >
        <h1 className="text-[80px] font-medium text-gray-0 text-center">
          Все инструменты
          <br />
          репетитора
          <br />в одном сервисе
        </h1>
        <h2 className="text-[32px] text-gray-20 text-center">
          Видеозвонки, онлайн-доски и заметки, контроль оплат и<br />
          автоматические напоминания для учеников.
          <br />
          Ваши знания бесценны. Делитесь ими
          <br />с комфортом!
        </h2>
      </div>
      <button
        ref={buttonRef}
        type="button"
        className="absolute top-[100px] right-[100px] bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors duration-300"
      >
        Начать сейчас
      </button>
      <div
        ref={targetRef}
        className="absolute bottom-[100px] left-[100px] w-4 h-4 bg-red-500 rounded-full"
      />
      <svg
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.3 }}
      >
        <path
          ref={pathRef}
          d="M 100 100 C 800 100, 400 400, 100 1500"
          fill="none"
          stroke="white"
          strokeWidth="2"
        />
      </svg>
    </section>
  );
};
