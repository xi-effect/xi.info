import { cn } from '@xipkg/utils';
import { Check } from '@xipkg/icons';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from 'pkg.accordion';

import { plans, availableFeatures, pricingFaq } from './data';
import { Card } from './Card';
import type { CardProps } from './types';

const titleClass =
  'text-xl-base sm:text-h2 md:text-[64px] leading-[1.2] sm:leading-[1] md:leading-[1.05] font-semibold text-gray-100 text-center whitespace-pre-line';

const subtitleClass = 'display-block text-gray-80 text-xl max-[720px]:text-base max-[720px]:leading-6 max-[376px]:leading-4 max-[376px]:text-xs font-normal';

export default function ProductPage() {
  return (
    <main className="flex flex-col w-full min-h-screen bg-gray-0 overflow-x-hidden">
      <section className="w-full px-4 sm:px-8 lg:px-40 pt-20 sm:pt-24 lg:pt-28 pb-10">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
          <span className="text-brand-80 text-s-base font-semibold tracking-[0.12em] uppercase">
            Тарифы
          </span>

          <div className="flex flex-col md:gap-10 gap-6">
            <h1 className={titleClass}>
              Гибкие тарифы для решения любых задач репетитора
            </h1>

            <div className="flex flex-col gap-4">
              <p className={subtitleClass}>
                Во время бета-тестирования все функции sovlium доступны бесплатно.
              </p>

              <p className={subtitleClass}>
                После релиза появятся базовый и PRO-тарифы.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full px-4 sm:px-8 lg:px-40 pb-16">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 gap-6 lg:gap-8 md:grid-cols-2 items-stretch">
          {plans.map((plan: CardProps) => (
            <Card key={plan.name} {...plan} />
          ))}
        </div>
      </section>

      <section className="w-full px-4 sm:px-8 lg:px-40 pb-20">
        <div className="max-w-[1200px] mx-auto rounded-4xl bg-gray-5 p-6 sm:p-8 lg:p-10 flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-h4 sm:text-h3 text-gray-100">Доступные фичи</h2>

            <p className="text-l-base text-gray-80 max-w-[760px]">
              Мы собираем sovlium вокруг реальных сценариев репетиторов. <br />
              Вот что уже доступно на платформе.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {availableFeatures.map((feature) => (
              <div key={feature} className="flex items-start gap-2">
                <Check className={cn('size-5 shrink-0 text-brand-80')} />
                <span className="text-m-base sm:text-l-base text-gray-80">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden px-4 py-8 sm:px-8 sm:pt-[52px] sm:pb-[52px] lg:px-[160px] lg:pb-[80px] lg:pt-[80px] flex flex-col gap-[52px] lg:gap-[100px] lg:grid lg:grid-cols-[400px_1fr] xl:grid-cols-[488px_1fr]">
        <h2 className="text-2xl font-bold sm:text-[40px] lg:text-h1-line-height leading-[30px] sm:leading-[48px] lg:leading-[64px] lg:min-w-[400px] sm:max-w-[488px] text-gray-100">
          Вопросы о тарифах
        </h2>

        <div className="relative">

          <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
            {pricingFaq.map((item, index) => (
              <AccordionItem key={item.title} value={`item-${index + 1}`}>
                <AccordionTrigger className="text-[20px] sm:text-xl-base-size py-8 text-gray-100 font-semibold sm:font-bold hover:no-underline hover:text-brand-80">
                  {item.title}
                </AccordionTrigger>
                <AccordionContent className="flex flex-col text-balance text-gray-60 text-[14px] sm:text-[16px] gap-4">
                  <p>{item.text}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

        </div>
      </section>
    </main>
  );
}
