'use client';

import { cn } from '@xipkg/utils';
import { Check } from '@xipkg/icons';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from 'pkg.accordion';

import { plansPricing, availableFeatures, pricingFaq, comparisonRows } from './data';
import { Card } from './Card';

const handleCardBtnClick = (id: string) => {
  // Заглушка
  void id;
};

const titleClass =
  'text-xl-base sm:text-h3 leading-[1.2] sm:leading-[1] md:leading-[1.05] text-gray-100 font-semibold text-center whitespace-pre-line';

const subtitleClass =
  'display-block text-gray-80 text-xl max-[720px]:text-base max-[720px]:leading-6 max-[376px]:leading-4 max-[376px]:text-xs font-normal text-center';

const basicPlan = plansPricing.find((plan) => plan.id === 'basic');
const proPlan = plansPricing.find((plan) => plan.id === 'pro');

export default function ProductPage() {
  if (!basicPlan || !proPlan) {
    throw new Error('Ошибка в тарифных планы для сравнения');
  }

  return (
    <main className="flex flex-col w-full min-h-screen bg-gray-0 overflow-x-hidden">
      <div className="flex flex-col w-full justify-start items-start mt-10">
        <section className="w-full px-4 sm:px-8 pt-20 sm:pt-24 lg:pt-28 pb-10">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
            <div className="flex flex-col md:gap-10 gap-6">
              <h1 className={cn(titleClass, 'md:text-h1-line-height font-bold')}>
                Гибкие тарифы для решения любых задач репетитора
              </h1>

              <div className="flex flex-col gap-4">
                <p className={subtitleClass}>
                  Во время бета-тестирования все функции Sovlium доступны бесплатно.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-4 sm:px-8 pb-16">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 gap-6 lg:gap-8 md:grid-cols-2 items-stretch">
            {plansPricing.map((plan) => (
              <Card key={plan.id} {...plan} onClickBtn={() => handleCardBtnClick(plan.id)} />
            ))}
          </div>
        </section>

        <section className="w-full px-4 sm:px-8 pb-16">
          <div className="max-w-[1200px] mx-auto rounded-4xl bg-gray-5 p-6 sm:p-8 lg:p-10 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2 className={titleClass}>Сравнение тарифов</h2>

              <p className={subtitleClass}>
                Сравните, чем отличаются базовый и PRO-тарифы, чтобы выбрать подходящий формат
                работы.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-separate border-spacing-y-2 min-w-[320px]">
                <thead>
                  <tr className="text-xs-base sm:text-s-base text-gray-60">
                    <th className="w-2/5 text-left font-normal px-2 sm:px-4 py-2 sm:py-3">
                      Особенности
                    </th>

                    <th className="w-3/10 text-left font-semibold px-2 sm:px-4 py-2 sm:py-3 text-gray-100">
                      {basicPlan.name}
                    </th>

                    <th className="w-3/10 text-left font-semibold px-2 sm:px-4 py-2 sm:py-3 text-gray-100">
                      {proPlan.name}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {comparisonRows.map((row) => (
                    <tr
                      key={row.feature}
                      className="align-top rounded-2xl bg-gray-0 [&>td:first-child]:rounded-l-2xl [&>td:last-child]:rounded-r-2xl"
                    >
                      <td className="px-2 sm:px-4 py-3 sm:py-4 text-xs-base sm:text-m-base text-gray-80">
                        {row.feature}
                      </td>

                      <td className="px-2 sm:px-4 py-3 sm:py-4 text-xs-base sm:text-m-base text-gray-100">
                        {row.valuesByPlanId[basicPlan.id]}
                      </td>

                      <td className="px-2 sm:px-4 py-3 sm:py-4 text-xs-base sm:text-m-base text-gray-100">
                        {row.valuesByPlanId[proPlan.id]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="w-full px-4 sm:px-8">
          <div className="max-w-[1200px] mx-auto rounded-4xl bg-gray-5 p-6 sm:p-8 lg:p-10 flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2 className={titleClass}>Доступные фичи</h2>

              <p className={subtitleClass}>
                Мы собираем Sovlium вокруг реальных сценариев репетиторов. <br />
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

        <section className="relative w-full overflow-hidden px-4 py-6 sm:px-8 sm:pt-[52px] sm:pb-[52px] lg:pb-[80px] lg:pt-[80px] flex flex-col gap-6 lg:gap-8 lg:grid lg:grid-cols-[400px_1fr] xl:grid-cols-[488px_1fr]">
          <h2 className={titleClass}>Вопросы о тарифах</h2>

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
      </div>
    </main>
  );
}
