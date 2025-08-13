'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Button } from '@xipkg/button';
import { cn } from '@xipkg/utils';
import { steps } from './content';

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* ---------- контент всех состояний ---------- */

export const Features = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const lastStepRef = useRef(0);
  const featuresTextWrapper = useRef<HTMLDivElement>(null);
  const [currentStep, setCurrentStep] = useState(0);

  const slidesRef = useRef<HTMLDivElement[]>([]);
  const collect = (el: HTMLDivElement | null) => {
    if (el && !slidesRef.current.includes(el)) slidesRef.current.push(el);
  };

  /* ------------ util: смена контента + видимость кнопки ------------ */
  function setStep(idx: number) {
    const { title, desc, href, cta } = steps[idx] ?? steps.at(-1)!;

    // Создаем массив элементов для анимации, исключая null
    const elementsToAnimate: (HTMLElement | null)[] = [titleRef.current, descRef.current];
    if (btnRef.current) {
      elementsToAnimate.push(btnRef.current);
    }
    const validElements = elementsToAnimate.filter(Boolean) as HTMLElement[];

    const tl = gsap.timeline({ defaults: { duration: 0.3, ease: 'power2.out' } });

    tl.to(validElements, {
      autoAlpha: 0,
      y: 20,
      onComplete: () => {
        if (titleRef.current) {
          titleRef.current.textContent = title;
        }
        if (descRef.current) {
          descRef.current.textContent = desc;
        }

        // Обновляем состояние для корректного обновления href в Link
        setCurrentStep(idx);
      },
    });

    tl.to(validElements, {
      autoAlpha: 1,
      y: 0,
      delay: 0.05,
      stagger: 0.05,
    });
  }

  /* ----------------------------- GSAP ----------------------------- */
  useGSAP(
    () => {
      const total = slidesRef.current.length;
      const triggerEnd = slidesRef.current[total - 1];

      // Фиксация текста на протяжении всех слайдов
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: 'top top',
        endTrigger: triggerEnd,
        end: 'center center',
        scrub: true,
        pin: featuresTextWrapper.current,
        pinSpacing: false,
      });

      // Точное переключение текста — при попадании каждого слайда в центр экрана
      slidesRef.current.forEach((slide, i) => {
        ScrollTrigger.create({
          trigger: slide,
          start: 'center-=50% center',
          end: 'center+=25% center',
          onEnter: () => {
            if (lastStepRef.current !== i) {
              lastStepRef.current = i;
              setStep(i);
            }
          },
          onEnterBack: () => {
            if (lastStepRef.current !== i) {
              lastStepRef.current = i;
              setStep(i);
            }
          },
          onLeaveBack: () => {
            if (i > 0 && lastStepRef.current !== i - 1) {
              lastStepRef.current = i - 1;
              setStep(i - 1);
            }
          },
        });
      });
    },
    { scope: sectionRef },
  );

  /* ------------------------------ JSX ------------------------------ */
  return (
    <section ref={sectionRef} className="relative flex flex-col items-center">
      {/* Левый фиксированный блок с контентом -------------------------------- */}
      <div
        ref={featuresTextWrapper}
        className="h-[100dvh] w-1/2 absolute left-0 top-0 z-10 flex flex-col gap-16 items-start justify-center"
      >
        <div className="flex flex-col md:pl-16 xl:pl-24 2xl:pl-[160px] pr-[64px] gap-4">
          <h2
            ref={titleRef}
            className="text-[32px] xl:text-[48px] font-semibold text-gray-100 text-left leading-tight max-w-[18ch]"
            aria-live="polite"
          >
            {steps[0].title}
          </h2>

          <p ref={descRef} className="text-gray-80 text-left text-xl-base xl:text-h5">
            {steps[0].desc}
          </p>

          {/* кнопка: скрывается через autoAlpha, а не display → плавный fade */}
          <div className="mt-4" style={{ minHeight: '56px' }}>
            {steps[currentStep].href && (
              <Link ref={btnRef} href={steps[currentStep].href!}>
                <Button variant="default" size="l" className="h-[56px]">
                  {steps[currentStep].cta}
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Слайды с картинками -------------------------------------------------- */}
      {[1, 2, 3, 4, 5, 6].map((n) => (
        <div key={n} ref={collect} className="relative flex justify-end h-[100dvh] w-full">
          <div className="relative w-1/2 flex items-center justify-center h-full">
            <div
              className={cn(
                'absolute right-0 w-full max-h-[80dvh] h-full overflow-hidden rounded-l-3xl',
                n !== 6 && 'shadow-2xl',
              )}
            >
              <Image
                src={`/assets/main/Features/${n}.webp`}
                alt={`feature-${n}`}
                fill
                className="object-left object-cover"
                priority={n === 1}
              />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
