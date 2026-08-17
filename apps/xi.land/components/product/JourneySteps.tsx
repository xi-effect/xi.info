'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'motion/react';

import { ShotPlaceholder } from './ShotPlaceholder';
import type { JourneyStepT } from './types';

type JourneyStepsPropsT = {
  title: string;
  subtitle: string;
  steps: readonly JourneyStepT[];
};

export const JourneySteps = ({ title, subtitle, steps }: JourneyStepsPropsT) => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      data-theme="white"
      className="font-nevermind w-full bg-gray-0 px-4 py-10 md:px-6 md:py-14"
    >
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-10 md:gap-14">
        <header className="flex max-w-[720px] flex-col gap-4">
          <h2 className="text-3xl font-medium leading-9 tracking-tight text-gray-900 md:text-4xl md:leading-10">
            {title}
          </h2>
          <p className="font-manrope text-lg font-medium leading-6 text-gray-900/70">{subtitle}</p>
        </header>

        <div className="flex flex-col gap-16 lg:gap-20">
          {steps.map((step, index) => {
            const imageOnRight = index % 2 === 0;

            return (
              <motion.article
                key={step.id}
                className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-x-24"
                initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28, margin: '0px 0px -48px 0px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: reduceMotion ? 0 : 0.05 }}
              >
                <div className={imageOnRight ? 'lg:order-1' : 'lg:order-2'}>
                  <div className="relative isolate min-h-72 w-full overflow-hidden rounded-3xl bg-gray-5 lg:min-h-[340px]">
                    {step.imageNeedsShot === false ? (
                      <Image
                        src={step.imageSrc}
                        alt={step.imageAlt}
                        fill
                        sizes="(max-width: 1024px) min(100vw - 2rem, 720px), 610px"
                        className={step.imageClassName ?? 'object-cover object-center'}
                      />
                    ) : (
                      <ShotPlaceholder className="min-h-72 rounded-none bg-transparent lg:min-h-[340px]" />
                    )}
                  </div>
                </div>

                <div
                  className={`flex min-w-0 flex-col gap-5 ${imageOnRight ? 'lg:order-2' : 'lg:order-1'}`}
                >
                  <span className="font-manrope text-sm font-semibold tracking-wide text-brand-80 uppercase">
                    Шаг {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-3xl font-medium leading-10 text-neutral-800">{step.title}</h3>
                  <p className="font-manrope max-w-[500px] text-lg font-normal leading-6 text-neutral-800/60">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};
