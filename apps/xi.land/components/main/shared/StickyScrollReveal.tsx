'use client';

import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);

/* данные */
const steps = [
  { id: 0, tail: 'планировании', src: '/assets/main/Messages/plans.svg' },
  { id: 1, tail: 'подаче материала', src: '/assets/main/Messages/materials.svg' },
  { id: 2, tail: 'общении с учениками', src: '/assets/main/Messages/chat.svg' },
];

export default function Messages() {
  const wrapRef = useRef<HTMLElement>(null); // длинный контейнер
  const tailsRef = useRef<HTMLDivElement>(null);
  const imgsRef = useRef<HTMLDivElement>(null);

  // нужно использовать useGSAP из gsap/react
  useLayoutEffect(() => {
    if (!wrapRef.current || !tailsRef.current || !imgsRef.current) return;

    /* реальная высота строки (учитывает margin / gap) */
    const children = Array.from(tailsRef.current.children) as HTMLElement[];
    const offsetsPx = children.map((el) => el.offsetTop - children[0].offsetTop);

    /* стартовые стейты */
    gsap.set(imgsRef.current.children, { autoAlpha: 0 });
    gsap.set(imgsRef.current.children[0], { autoAlpha: 1 });
    gsap.set(children.slice(1), { autoAlpha: 0.25 });

    /* тайм-лайн ― один на все шаги */
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wrapRef.current,
        start: 'top top',
        end: `+=${window.innerHeight * (steps.length - 1)}`,
        pin: true,
        scrub: 0.5,
        snap: { snapTo: 1 / (steps.length - 1), duration: 0.3 },
        anticipatePin: 1,
      },
    });

    for (let i = 1; i < steps.length; i += 1) {
      tl.to(tailsRef.current, { y: -offsetsPx[i], ease: 'none' }, i)
        .to(imgsRef.current.children[i], { autoAlpha: 1, duration: 0.35 }, i)
        .to(imgsRef.current.children[i - 1], { autoAlpha: 0, duration: 0.35 }, i)
        .to(children[i], { autoAlpha: 1, duration: 0.2 }, i)
        .to(children[i - 1], { autoAlpha: 0.25, duration: 0.2 }, i);
    }

    /* refresh, когда последняя SVG загрузится */
    imgsRef.current.lastElementChild
      ?.querySelector('img')
      ?.addEventListener('load', () => ScrollTrigger.refresh());

    // eslint-disable-next-line consistent-return
    return () => tl.scrollTrigger?.kill();
  }, []);

  /* JSX */
  return (
    <section ref={wrapRef} style={{ height: `${steps.length * 100}vh` }} className="relative flex">
      {/* левый столбец */}
      <div className="sticky top-0 flex w-1/2 h-screen items-center justify-center">
        <div className="flex items-start">
          <span className="mr-3 text-5xl font-semibold select-none">в</span>

          <div ref={tailsRef} className="flex flex-col will-change-transform">
            {steps.map(({ id, tail }) => (
              <h2 key={id} className="text-4xl font-bold leading-tight mb-8 whitespace-nowrap">
                {tail}
              </h2>
            ))}
          </div>
        </div>
      </div>

      {/* правый столбец */}
      <div className="sticky top-0 w-1/2 h-screen flex items-center justify-center">
        <div ref={imgsRef} className="relative w-full h-full">
          {steps.map(({ id, src }) => (
            <div key={id} className="absolute inset-0">
              <Image fill src={src} alt="" sizes="100vw" priority />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
