'use client';

import { Fragment } from 'react';
import { cn } from '@xipkg/utils';
import { Check } from '@xipkg/icons';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from 'pkg.accordion';

import { CardPricing } from './CardPricing';
import {
  plansPricing,
  availableFeatures,
  pricingFaq,
  comparisonSections,
  type ComparisonCellT,
} from './dataForPricing';

const basicPlan = plansPricing.find((plan) => plan.id === 'basic');
const proPlan = plansPricing.find((plan) => plan.id === 'pro');

const sectionClass = 'w-full px-4 sm:px-8 md:px-6';
const containerClass = 'mx-auto w-full max-w-[1320px]';

const ComparisonSoonBadge = () => (
  <span className="inline-flex rounded-full bg-gray-5 px-2 py-0.5 text-[11px] leading-none font-semibold text-gray-70">
    Скоро
  </span>
);

const ComparisonCell = ({ cell }: { cell: ComparisonCellT }) => {
  if (cell.soon) {
    return (
      <span className="inline-flex flex-wrap items-center gap-2">
        {cell.text ? <span>{cell.text}</span> : null}
        <ComparisonSoonBadge />
      </span>
    );
  }

  if (cell.included) {
    return (
      <span className="inline-flex items-center gap-2">
        <Check className="size-5 shrink-0 fill-brand-80" />
        {cell.text ? <span>{cell.text}</span> : <span className="sr-only">Есть</span>}
      </span>
    );
  }

  return <span>{cell.text ?? '—'}</span>;
};

export const PricesView = () => {
  if (!basicPlan || !proPlan) {
    throw new Error('Ошибка в тарифных планы для сравнения');
  }

  // TODO: перед включением ограничений подготовить in-app уведомление для текущих пользователей и grace period.

  return (
    <main className="font-nevermind flex min-h-screen w-full flex-col overflow-x-hidden bg-gray-0">
      <section className={cn(sectionClass, 'pt-28 pb-12 sm:pt-32 lg:pt-36 lg:pb-16')}>
        <div className={containerClass}>
          <div className="mx-auto mb-10 flex max-w-[720px] flex-col items-center gap-4 text-center lg:mb-14">
            <p className="text-s-base font-semibold tracking-[0.08em] text-brand-80 uppercase">
              Тарифы
            </p>
            <h1 className="text-[32px] leading-[1.1] font-semibold tracking-tight text-gray-100 sm:text-[40px] lg:text-[48px]">
              Выберите формат работы с sovlium
            </h1>
            <p className="text-m-base leading-7 text-gray-80 sm:text-l-base">
              Бесплатный Базовый — чтобы начать. Профи — больше кабинетов и хранилища для регулярной
              работы.
            </p>
          </div>

          <div className="mx-auto flex max-w-[1080px] flex-col gap-5 md:grid md:grid-cols-2 md:grid-rows-[auto_auto_auto_auto_auto_auto_1fr] md:gap-x-6 md:gap-y-0 lg:gap-x-6">
            {plansPricing.map((plan) => (
              <CardPricing key={plan.id} {...plan} />
            ))}
          </div>
        </div>
      </section>

      <section className={cn(sectionClass, 'pb-16 lg:pb-20')}>
        <div className={containerClass}>
          <div className="mb-8 flex max-w-[640px] flex-col gap-3">
            <h2 className="text-[28px] leading-8 font-medium tracking-tight text-gray-100 sm:text-[32px] sm:leading-10 lg:text-[40px] lg:leading-10">
              Сравнение тарифов
            </h2>
            <p className="text-m-base leading-7 text-gray-80">
              Все возможности платформы — по разделам. На тарифах отличаются лимиты кабинетов и
              хранилища; остальные функции доступны и на Базовом, и на Профи.
            </p>
          </div>

          <div className="overflow-hidden overflow-x-auto rounded-3xl border border-gray-10">
            <table className="w-full min-w-[720px] border-collapse">
              <thead>
                <tr className="text-left">
                  <th className="sticky left-0 z-20 w-[42%] bg-gray-0 px-5 py-4 text-s-base font-normal text-gray-60 sm:px-6">
                    Возможность
                  </th>
                  <th className="w-[29%] px-5 py-4 text-m-base font-semibold text-gray-100 sm:px-6">
                    {basicPlan.name}
                  </th>
                  <th className="w-[29%] bg-brand-0 px-5 py-4 text-m-base font-semibold text-brand-100 sm:px-6">
                    {proPlan.name}
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonSections.map((section) => (
                  <Fragment key={section.title}>
                    <tr>
                      <th
                        colSpan={3}
                        scope="colgroup"
                        className="border-t border-gray-10 bg-gray-5 px-5 py-2.5 text-left text-xs-base font-semibold tracking-[0.08em] text-gray-70 uppercase sm:px-6"
                      >
                        {section.title}
                      </th>
                    </tr>
                    {section.rows.map((row) => (
                      <tr key={row.feature} className="border-t border-gray-10 align-top">
                        <th
                          scope="row"
                          className="sticky left-0 z-10 bg-gray-0 px-5 py-3 text-left text-s-base leading-6 font-normal text-gray-80 sm:px-6 sm:text-m-base"
                        >
                          <span className="block text-gray-100">{row.feature}</span>
                          {row.hint ? (
                            <span className="mt-0.5 block text-xs-base leading-5 font-normal text-gray-60 sm:text-s-base">
                              {row.hint}
                            </span>
                          ) : null}
                        </th>
                        <td className="px-5 py-3 text-s-base leading-6 text-gray-100 sm:px-6 sm:text-m-base">
                          <ComparisonCell cell={row.valuesByPlanId[basicPlan.id]} />
                        </td>
                        <td className="bg-brand-0 px-5 py-3 text-s-base leading-6 text-gray-100 sm:px-6 sm:text-m-base">
                          <ComparisonCell cell={row.valuesByPlanId[proPlan.id]} />
                        </td>
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className={cn(sectionClass, 'pb-16 lg:pb-20')}>
        <div className={containerClass}>
          <div className="mb-8 flex max-w-[640px] flex-col gap-3">
            <h2 className="text-[28px] leading-8 font-medium tracking-tight text-gray-100 sm:text-[32px] sm:leading-10 lg:text-[40px] lg:leading-10">
              Возможности сервиса
            </h2>
            <p className="text-m-base leading-7 text-gray-80">
              Вот что уже доступно репетитору в sovlium — на любом тарифе, в пределах его лимитов.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {availableFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-start gap-3 rounded-[20px] bg-gray-5 px-4 py-4"
              >
                <Check className="mt-0.5 size-5 shrink-0 fill-brand-80" />
                <span className="text-m-base leading-6 text-gray-80 sm:text-l-base">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              { href: '/classrooms', label: 'Кабинеты' },
              { href: '/calendar', label: 'Расписание' },
              { href: '/calls', label: 'Видеозвонки' },
              { href: '/whiteboard', label: 'Онлайн-доска' },
              { href: '/materials', label: 'Материалы' },
              { href: '/payments', label: 'Оплаты' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full bg-gray-5 px-4 py-2 text-s-base text-gray-80 transition-colors hover:bg-brand-0 hover:text-brand-100"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={cn(sectionClass, 'pb-12 sm:pb-16 lg:pt-4 lg:pb-16')}>
        <div
          className={cn(
            containerClass,
            'flex flex-col gap-[52px] lg:grid lg:grid-cols-[1fr_2fr] lg:gap-x-[100px]',
          )}
        >
          <h2 className="text-2xl leading-[29px] font-medium text-gray-100 sm:max-w-[488px] sm:text-[32px] sm:leading-[48px] lg:max-w-none lg:self-start lg:text-[40px] lg:leading-[40px]">
            Вопросы о тарифах
          </h2>
          <div className="relative w-full min-w-0">
            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
              {pricingFaq.map((item, index) => (
                <AccordionItem key={item.title} value={`item-${index + 1}`}>
                  <AccordionTrigger className="py-8 font-manrope text-[20px] font-semibold text-gray-100 hover:text-brand-80 hover:no-underline sm:text-[24px] sm:font-bold">
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

      <section
        className={cn(sectionClass, 'border-t border-gray-10 pt-10 pb-16 lg:pt-12 lg:pb-20')}
      >
        <div className={containerClass}>
          <div className="grid gap-4 md:grid-cols-2">
            <article className="flex flex-col gap-3 rounded-3xl bg-gray-5 p-6">
              <h2 className="text-l-base font-semibold text-gray-100 sm:text-xl-base-size">
                Что вы оплачиваете
              </h2>
              <p className="text-s-base leading-6 text-gray-80 sm:text-m-base sm:leading-7">
                Вы оплачиваете доступ к функциональности сервиса sovlium на выбранный период.
                sovlium не оказывает образовательные услуги, не является стороной отношений между
                репетитором и учеником и не отвечает за результат обучения.
              </p>
            </article>
            <article className="flex flex-col gap-3 rounded-3xl bg-gray-5 p-6">
              <h2 className="text-l-base font-semibold text-gray-100 sm:text-xl-base-size">
                Оплата
              </h2>
              <p className="text-s-base leading-6 text-gray-80 sm:text-m-base sm:leading-7">
                К оплате принимаются банковские карты платёжных систем МИР, Visa и Mastercard,
                выпущенные российскими банками, а также СБП, если такой способ доступен на странице
                оплаты.
              </p>
              <p className="text-s-base leading-6 text-gray-80 sm:text-m-base sm:leading-7">
                Оплата проходит через защищённую платёжную страницу банка или платёжного партнёра.
                Данные банковской карты не передаются и не хранятся в sovlium.
              </p>
            </article>
            <article className="flex flex-col gap-3 rounded-3xl bg-gray-5 p-6">
              <h2 className="text-l-base font-semibold text-gray-100 sm:text-xl-base-size">
                Отмена подписки
              </h2>
              <p className="text-s-base leading-6 text-gray-80 sm:text-m-base sm:leading-7">
                Подписку можно отменить в любой момент в приложении или через поддержку. После
                отмены доступ к тарифу Профи сохранится до конца оплаченного периода.
              </p>
            </article>
            <article className="flex flex-col gap-3 rounded-3xl bg-brand-0 p-6">
              <h2 className="text-l-base font-semibold text-gray-100 sm:text-xl-base-size">
                Уже пользуетесь sovlium?
              </h2>
              <p className="text-s-base leading-6 text-gray-80 sm:text-m-base sm:leading-7">
                Если вы уже пользуетесь sovlium, мы заранее предупредим об изменениях в тарифах и
                ограничениях. Данные и кабинеты не будут удалены внезапно: перед применением новых
                лимитов мы дадим время подготовиться или перейти на подходящий тариф.
              </p>
            </article>
          </div>

          <div className="mx-auto mt-8 max-w-[720px] text-center text-s-base leading-6 text-gray-60">
            <p>
              Цены указаны в рублях РФ. Услуги оказывает ИП Букшев Игорь Владимирович. НДС не
              облагается в связи с применением УСН.
            </p>
            <p className="mt-2">
              Оформляя подписку, пользователь принимает{' '}
              <Link href="/legal/offer" className="text-brand-80 underline underline-offset-4">
                Оферту
              </Link>{' '}
              и{' '}
              <Link
                href="/legal/payment-refund"
                className="text-brand-80 underline underline-offset-4"
              >
                условия оплаты и возврата
              </Link>
              .
            </p>
            <p className="mt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
              <Link href="/legal/requisites" className="text-brand-80 underline underline-offset-4">
                Реквизиты
              </Link>
              <Link href="/legal/privacy" className="text-brand-80 underline underline-offset-4">
                Политика конфиденциальности
              </Link>
              <Link href="/legal/consent" className="text-brand-80 underline underline-offset-4">
                Согласие на обработку персональных данных
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};
