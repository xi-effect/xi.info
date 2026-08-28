'use client';

import { cn } from '@xipkg/utils';
import { Check } from '@xipkg/icons';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from 'pkg.accordion';

import { CardPricing } from './CardPricing';
import { plansPricing, availableFeatures, pricingFaq, comparisonRows } from './dataForPricing';

const titleClass =
  'text-[28px] leading-[1.2] sm:text-h3 sm:leading-[1] md:leading-[1.05] text-gray-100 font-semibold text-center whitespace-pre-line';

const subtitleClass =
  'display-block text-gray-80 text-base leading-6 sm:text-l-base sm:leading-7 font-normal text-center';

const basicPlan = plansPricing.find((plan) => plan.id === 'basic');
const proPlan = plansPricing.find((plan) => plan.id === 'pro');

export const PricesView = () => {
  if (!basicPlan || !proPlan) {
    throw new Error('Ошибка в тарифных планы для сравнения');
  }

  // TODO: перед включением ограничений подготовить in-app уведомление для текущих пользователей и grace period.

  return (
    <main className="flex min-h-screen w-full flex-col overflow-x-hidden bg-gray-0">
      <div className="mt-6 flex w-full flex-col items-start justify-start sm:mt-10">
        <section className="w-full px-4 pt-24 pb-16 sm:px-8 lg:pt-28">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-6">
            <div className="flex flex-col gap-6 md:gap-10">
              <h1 className={cn(titleClass, 'md:text-h1-line-height font-bold')}>
                Тарифы для репетиторов
              </h1>

              <div className="flex flex-col gap-4">
                <p className={subtitleClass}>
                  Бесплатный тариф Базовый и платный тариф Профи — выберите формат работы с sovlium.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full px-4 pb-10 sm:px-8">
          <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:gap-8">
            {plansPricing.map((plan) => (
              <CardPricing key={plan.id} {...plan} />
            ))}
          </div>
        </section>

        <section className="w-full px-4 pb-16 sm:px-8">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-4 text-center text-s-base leading-6 text-gray-60 sm:text-m-base sm:leading-7">
            <p>
              Цены указаны в рублях РФ. Услуги оказывает ИП Букшев Игорь Владимирович. НДС не
              облагается в связи с применением УСН.
            </p>
            <p>
              Оплачивая тариф, пользователь принимает{' '}
              <Link href="/legal/offer" className="text-brand-80 underline underline-offset-4">
                Оферту
              </Link>{' '}
              и{' '}
              <Link
                href="/legal/payment-refund"
                className="text-brand-80 underline underline-offset-4"
              >
                условия оплаты подписки
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="w-full px-4 pb-16 sm:px-8">
          <div className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-3 rounded-4xl bg-gray-5 p-6 sm:p-8">
              <h2 className="text-xl-base-size font-semibold text-gray-100">Что вы оплачиваете</h2>
              <p className="text-m-base leading-7 text-gray-80 sm:text-l-base">
                Вы оплачиваете доступ к функциональности сервиса sovlium на выбранный период.
                sovlium не оказывает образовательные услуги, не является стороной отношений между
                репетитором и учеником и не отвечает за результат обучения.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-4xl bg-gray-5 p-6 sm:p-8">
              <h2 className="text-xl-base-size font-semibold text-gray-100">Способы оплаты</h2>
              <p className="text-m-base leading-7 text-gray-80 sm:text-l-base">
                К оплате принимаются банковские карты платёжных систем МИР, Visa и Mastercard,
                выпущенные российскими банками, а также СБП, если такой способ доступен на странице
                оплаты.
              </p>
              <p className="text-m-base leading-7 text-gray-80 sm:text-l-base">
                Оплата проходит через защищённую платёжную страницу банка или платёжного партнёра.
                Данные банковской карты не передаются и не хранятся в sovlium.
              </p>
            </div>
          </div>
        </section>

        <section className="w-full px-4 pb-16 sm:px-8">
          <div className="mx-auto max-w-[1200px] rounded-4xl border border-gray-10 bg-gray-0 p-6 sm:p-8">
            <h2 className="mb-3 text-xl-base-size font-semibold text-gray-100">
              Если вы уже пользуетесь sovlium
            </h2>
            <p className="text-m-base leading-7 text-gray-80 sm:text-l-base">
              Если вы уже пользуетесь sovlium, мы заранее предупредим об изменениях в тарифах и
              ограничениях. Данные и кабинеты не будут удалены внезапно: перед применением новых
              лимитов мы дадим время подготовиться или перейти на подходящий тариф.
            </p>
          </div>
        </section>

        <section className="w-full px-4 pb-16 sm:px-8">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-6 rounded-4xl bg-gray-5 p-4 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-4">
              <h2 className={titleClass}>Сравнение тарифов</h2>

              <p className={subtitleClass}>
                Базовый — основные возможности с лимитами. Профи — больше кабинетов и хранилища,
                меньше ограничений.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-separate border-spacing-y-2">
                <thead>
                  <tr className="text-s-base text-gray-60">
                    <th className="w-[42%] px-3 py-3 text-left font-normal sm:px-4 sm:py-3">
                      Особенности
                    </th>

                    <th className="w-[29%] px-3 py-3 text-left font-semibold text-gray-100 sm:px-4 sm:py-3">
                      {basicPlan.name}
                    </th>

                    <th className="w-[29%] px-3 py-3 text-left font-semibold text-gray-100 sm:px-4 sm:py-3">
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
                      <td className="wrap-break-word px-3 py-3 text-s-base leading-5 whitespace-normal text-gray-80 sm:px-4 sm:py-4 sm:text-m-base sm:leading-6">
                        {row.feature}
                      </td>

                      <td className="wrap-break-word px-3 py-3 text-s-base leading-5 whitespace-normal text-gray-100 sm:px-4 sm:py-4 sm:text-m-base sm:leading-6">
                        {row.valuesByPlanId[basicPlan.id]}
                      </td>

                      <td className="wrap-break-word px-3 py-3 text-s-base leading-5 whitespace-normal text-gray-100 sm:px-4 sm:py-4 sm:text-m-base sm:leading-6">
                        {row.valuesByPlanId[proPlan.id]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section className="w-full px-4 pb-16 sm:px-8">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-6 rounded-4xl bg-gray-5 p-6 sm:p-8 lg:p-10">
            <div className="flex flex-col gap-4">
              <h2 className={titleClass}>Возможности сервиса</h2>

              <p className={subtitleClass}>
                sovlium собирается вокруг реальных сценариев репетиторов. Вот что уже доступно на
                платформе.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {availableFeatures.map((feature) => (
                <div key={feature} className="flex items-start gap-2">
                  <Check className={cn('size-5 shrink-0 text-brand-80')} />
                  <span className="text-m-base text-gray-80 sm:text-l-base">{feature}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-m-base text-gray-80 sm:text-l-base">
              Как это выглядит в работе — можно посмотреть в разделах про{' '}
              <Link href="/classrooms" className="text-brand-80 underline underline-offset-4">
                кабинеты
              </Link>
              ,{' '}
              <Link href="/calendar" className="text-brand-80 underline underline-offset-4">
                расписание
              </Link>
              ,{' '}
              <Link href="/calls" className="text-brand-80 underline underline-offset-4">
                видеозвонки
              </Link>
              ,{' '}
              <Link href="/whiteboard" className="text-brand-80 underline underline-offset-4">
                онлайн-доску
              </Link>
              ,{' '}
              <Link href="/materials" className="text-brand-80 underline underline-offset-4">
                материалы
              </Link>{' '}
              и{' '}
              <Link href="/payments" className="text-brand-80 underline underline-offset-4">
                оплаты
              </Link>
              .
            </p>
          </div>
        </section>

        <section className="w-full px-4 pb-16 sm:px-8">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-6">
            <h2 className={titleClass}>Вопросы о тарифах</h2>

            <div className="relative">
              <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
                {pricingFaq.map((item, index) => (
                  <AccordionItem key={item.title} value={`item-${index + 1}`}>
                    <AccordionTrigger className="text-l-base sm:text-xl-base-size py-6 font-semibold text-gray-100 hover:text-brand-80 hover:no-underline sm:py-8">
                      {item.title}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-[14px] text-balance text-gray-60 sm:text-[16px]">
                      <p>{item.text}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
