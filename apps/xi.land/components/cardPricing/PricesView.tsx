'use client';

import { useState } from 'react';
import { cn, useMediaQuery } from '@xipkg/utils';
import { Check, ChevronSmallBottom } from '@xipkg/icons';
import Link from 'next/link';
import { motion, useReducedMotion } from 'motion/react';
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

const sectionId = (title: string) => `cmp-${title}`;

const ComparisonSoonBadge = () => (
  <span className="inline-flex rounded-full bg-gray-5 px-2 py-0.5 text-[11px] leading-none font-semibold text-gray-70">
    Скоро
  </span>
);

const ComparisonCell = ({ cell }: { cell: ComparisonCellT }) => {
  if (cell.soon) {
    return (
      <span className="inline-flex min-w-0 flex-wrap items-center gap-2">
        {cell.text ? <span className="min-w-0 wrap-break-word">{cell.text}</span> : null}
        <ComparisonSoonBadge />
      </span>
    );
  }

  if (cell.included) {
    return (
      <span className="inline-flex min-w-0 items-start gap-2">
        <Check className="mt-0.5 size-5 shrink-0 fill-brand-80" />
        {cell.text ? (
          <span className="min-w-0 wrap-break-word">{cell.text}</span>
        ) : (
          <span className="sr-only">Есть</span>
        )}
      </span>
    );
  }

  return <span className="wrap-break-word">{cell.text ?? '—'}</span>;
};

const ComparisonRow = ({
  feature,
  hint,
  basicCell,
  proCell,
  basicName,
  proName,
}: {
  feature: string;
  hint?: string;
  basicCell: ComparisonCellT;
  proCell: ComparisonCellT;
  basicName: string;
  proName: string;
}) => (
  <div className="group border-t border-gray-10 px-4 py-3 md:grid md:grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)_minmax(0,1fr)] md:px-0 md:py-0">
    <div className="min-w-0 md:px-6 md:py-3 md:transition-colors md:group-hover:bg-brand-0/50">
      <p className="text-pretty text-s-base leading-6 text-gray-100 sm:text-m-base">{feature}</p>
      {hint ? (
        <p className="mt-0.5 text-pretty text-xs-base leading-5 text-gray-60 sm:text-s-base">
          {hint}
        </p>
      ) : null}
    </div>
    <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2 md:contents">
      <div className="min-w-0 rounded-xl bg-gray-5 px-3 py-2.5 text-s-base leading-5 text-gray-100 md:rounded-none md:bg-transparent md:px-6 md:py-3 md:leading-6 md:transition-colors md:group-hover:bg-brand-0/50 sm:text-m-base">
        <p className="mb-1 text-[11px] font-semibold tracking-wide text-gray-60 uppercase md:hidden">
          {basicName}
        </p>
        <ComparisonCell cell={basicCell} />
      </div>
      <div className="min-w-0 rounded-xl bg-brand-0 px-3 py-2.5 text-s-base leading-5 text-gray-100 md:rounded-none md:px-6 md:py-3 md:leading-6 sm:text-m-base">
        <p className="mb-1 text-[11px] font-semibold tracking-wide text-brand-100 uppercase md:hidden">
          {proName}
        </p>
        <ComparisonCell cell={proCell} />
      </div>
    </div>
  </div>
);

const fadeUp = (reduceMotion: boolean | null, delay = 0) =>
  reduceMotion
    ? { initial: false as const, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0 } }
    : {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        transition: {
          type: 'spring' as const,
          stiffness: 380,
          damping: 28,
          delay,
        },
      };

export const PricesView = () => {
  const reduceMotion = useReducedMotion();
  const canHover = useMediaQuery('(hover: hover) and (pointer: fine)');
  const [openSections, setOpenSections] = useState<Set<string>>(
    () => new Set(comparisonSections.map((section) => section.title)),
  );
  const [activeSection, setActiveSection] = useState(comparisonSections[0]?.title ?? '');

  if (!basicPlan || !proPlan) {
    throw new Error('Ошибка в тарифных планы для сравнения');
  }

  // TODO: перед включением ограничений подготовить in-app уведомление для текущих пользователей и grace period.

  const allOpen = openSections.size === comparisonSections.length;

  const toggleSection = (title: string) => {
    setOpenSections((current) => {
      const next = new Set(current);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
    setActiveSection(title);
  };

  const toggleAllSections = () => {
    setOpenSections(
      allOpen ? new Set() : new Set(comparisonSections.map((section) => section.title)),
    );
  };

  const jumpToSection = (title: string) => {
    setOpenSections((current) => new Set(current).add(title));
    setActiveSection(title);
    requestAnimationFrame(() => {
      document.getElementById(sectionId(title))?.scrollIntoView({
        behavior: reduceMotion ? 'auto' : 'smooth',
        block: 'start',
      });
    });
  };

  return (
    <main className="font-nevermind flex min-h-screen w-full flex-col overflow-x-hidden bg-gray-0">
      <section className={cn(sectionClass, 'pt-28 pb-12 sm:pt-32 lg:pt-36 lg:pb-16')}>
        <div className={containerClass}>
          <motion.div
            className="mx-auto mb-10 flex max-w-[720px] flex-col items-center gap-4 text-center lg:mb-14"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease: 'easeOut' }}
          >
            <p className="text-s-base font-semibold tracking-[0.08em] text-brand-80 uppercase">
              Тарифы
            </p>
            <h1 className="text-pretty text-[28px] leading-[1.15] font-semibold tracking-tight text-gray-100 sm:text-[40px] lg:text-[48px]">
              Выберите формат работы с sovlium
            </h1>
            <p className="text-pretty text-m-base leading-7 text-gray-80 sm:text-l-base">
              Бесплатный Базовый — чтобы начать. Профи — больше кабинетов и хранилища для регулярной
              работы.
            </p>
          </motion.div>

          <div className="mx-auto flex max-w-[1080px] flex-col gap-5 md:grid md:grid-cols-2 md:grid-rows-[auto_auto_auto_auto_auto_auto_1fr] md:gap-x-6 md:gap-y-0 lg:gap-x-6">
            {plansPricing.map((plan, index) => (
              <CardPricing key={plan.id} appearIndex={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      <section className={cn(sectionClass, 'pb-16 lg:pb-20')}>
        <div className={containerClass}>
          <motion.div
            className="mb-8 flex max-w-[640px] flex-col gap-3"
            {...fadeUp(reduceMotion)}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h2 className="text-[24px] leading-8 font-medium tracking-tight text-gray-100 sm:text-[32px] sm:leading-10 lg:text-[40px] lg:leading-10">
              Сравнение тарифов
            </h2>
            <p className="text-pretty text-m-base leading-7 text-gray-80">
              Все возможности платформы — по разделам. На тарифах отличаются лимиты кабинетов и
              хранилища; остальные функции доступны и на Базовом, и на Профи.
            </p>
          </motion.div>

          <div className="mb-4 flex flex-wrap items-center gap-2">
            {comparisonSections.map((section) => (
              <button
                key={section.title}
                type="button"
                onClick={() => jumpToSection(section.title)}
                className={cn(
                  'shrink-0 rounded-full px-2.5 py-1 text-xs-base transition-colors sm:px-3 sm:py-1.5 sm:text-s-base',
                  activeSection === section.title
                    ? 'bg-brand-80 text-brand-0'
                    : 'bg-gray-5 text-gray-80 hover:bg-brand-0 hover:text-brand-100',
                )}
              >
                {section.title}
              </button>
            ))}
            <button
              type="button"
              onClick={toggleAllSections}
              className="group inline-flex shrink-0 items-center gap-1.5 rounded-full border border-brand-80 px-2.5 py-1 text-xs-base font-medium text-brand-80 transition-colors hover:bg-brand-80 hover:text-brand-0 sm:px-3 sm:py-1.5 sm:text-s-base"
            >
              <ChevronSmallBottom
                className={cn(
                  'size-4 fill-brand-80 transition-transform duration-200 group-hover:fill-brand-0',
                  allOpen && 'rotate-180',
                )}
              />
              {allOpen ? 'Свернуть все' : 'Раскрыть все'}
            </button>
          </div>

          <div className="flex min-w-0 flex-col gap-2">
            <div className="hidden min-w-0 grid-cols-[minmax(0,1.45fr)_minmax(0,1fr)_minmax(0,1fr)] px-1 md:grid sm:px-2">
              <span className="px-4 py-3 text-s-base text-gray-60 sm:px-5">Возможность</span>
              <span className="px-4 py-3 text-m-base font-semibold text-gray-100 sm:px-5">
                {basicPlan.name}
              </span>
              <span className="rounded-2xl bg-brand-0 px-4 py-3 text-m-base font-semibold text-brand-100 sm:px-5">
                {proPlan.name}
              </span>
            </div>

            {comparisonSections.map((section) => {
              const isOpen = openSections.has(section.title);

              return (
                <div
                  key={section.title}
                  className="min-w-0 overflow-hidden rounded-2xl border border-gray-10 bg-gray-0"
                >
                  <button
                    type="button"
                    id={sectionId(section.title)}
                    aria-expanded={isOpen}
                    onClick={() => toggleSection(section.title)}
                    className={cn(
                      'flex w-full min-w-0 scroll-mt-28 items-center justify-between gap-3 px-4 py-3.5 text-left text-s-base font-semibold text-gray-100 transition-colors sm:px-6',
                      isOpen ? 'bg-brand-0' : 'hover:bg-brand-0',
                    )}
                  >
                    <span className="min-w-0 wrap-break-word">{section.title}</span>
                    <ChevronSmallBottom
                      className={cn(
                        'size-4 shrink-0 fill-brand-80 transition-transform duration-200',
                        isOpen && 'rotate-180',
                      )}
                    />
                  </button>

                  {isOpen
                    ? section.rows.map((row) => (
                        <ComparisonRow
                          key={row.feature}
                          feature={row.feature}
                          hint={row.hint}
                          basicCell={row.valuesByPlanId[basicPlan.id]}
                          proCell={row.valuesByPlanId[proPlan.id]}
                          basicName={basicPlan.name}
                          proName={proPlan.name}
                        />
                      ))
                    : null}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={cn(sectionClass, 'pb-16 lg:pb-20')}>
        <div className={containerClass}>
          <motion.div
            className="mb-8 flex max-w-[640px] flex-col gap-3"
            {...fadeUp(reduceMotion)}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h2 className="text-[24px] leading-8 font-medium tracking-tight text-gray-100 sm:text-[32px] sm:leading-10 lg:text-[40px] lg:leading-10">
              Возможности сервиса
            </h2>
            <p className="text-pretty text-m-base leading-7 text-gray-80">
              Вот что уже доступно репетитору в sovlium — на любом тарифе, в пределах его лимитов.
            </p>
          </motion.div>

          <div className="grid gap-3 sm:grid-cols-2">
            {availableFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                className="flex items-start gap-3 rounded-[20px] bg-gray-5 px-4 py-4 transition-colors hover:bg-gray-10"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={reduceMotion || !canHover ? undefined : { y: -3 }}
                transition={{
                  type: 'spring',
                  stiffness: 400,
                  damping: 28,
                  delay: reduceMotion ? 0 : 0.04 * index,
                }}
              >
                <Check className="mt-0.5 size-5 shrink-0 fill-brand-80" />
                <span className="min-w-0 text-pretty text-m-base leading-6 wrap-break-word text-gray-80 sm:text-l-base">{feature}</span>
              </motion.div>
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
                className="rounded-full bg-gray-5 px-4 py-2 text-s-base text-gray-80 transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-0 hover:text-brand-100"
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
            'flex flex-col gap-8 lg:grid lg:grid-cols-[1fr_2fr] lg:gap-x-[100px]',
          )}
        >
          <h2 className="text-2xl leading-[29px] font-medium text-pretty text-gray-100 sm:max-w-[488px] sm:text-[32px] sm:leading-[48px] lg:max-w-none lg:self-start lg:text-[40px] lg:leading-[40px]">
            Вопросы о тарифах
          </h2>
          <div className="relative w-full min-w-0">
            <Accordion type="single" collapsible className="w-full" defaultValue="item-1">
              {pricingFaq.map((item, index) => (
                <AccordionItem key={item.title} value={`item-${index + 1}`}>
                  <AccordionTrigger className="min-w-0 py-5 font-manrope text-[18px] leading-7 font-semibold text-gray-100 hover:text-brand-80 hover:no-underline sm:py-8 sm:text-[24px] sm:leading-8 sm:font-bold">
                    <span className="min-w-0 flex-1 text-left text-pretty wrap-break-word">
                      {item.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-[14px] leading-6 text-pretty text-gray-60 sm:text-[16px]">
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
            {[
              {
                title: 'Что вы оплачиваете',
                highlight: false,
                body: (
                  <p className="text-s-base leading-6 text-gray-80 sm:text-m-base sm:leading-7">
                    Вы оплачиваете доступ к функциональности сервиса sovlium на выбранный период.
                    sovlium не оказывает образовательные услуги, не является стороной отношений
                    между репетитором и учеником и не отвечает за результат обучения.
                  </p>
                ),
              },
              {
                title: 'Оплата',
                highlight: false,
                body: (
                  <>
                    <p className="text-s-base leading-6 text-gray-80 sm:text-m-base sm:leading-7">
                      К оплате принимаются банковские карты платёжных систем МИР, Visa и Mastercard,
                      выпущенные российскими банками, а также СБП, если такой способ доступен на
                      странице оплаты.
                    </p>
                    <p className="text-s-base leading-6 text-gray-80 sm:text-m-base sm:leading-7">
                      Оплата проходит через защищённую платёжную страницу банка или платёжного
                      партнёра. Данные банковской карты не передаются и не хранятся в sovlium.
                    </p>
                  </>
                ),
              },
              {
                title: 'Отмена подписки',
                highlight: false,
                body: (
                  <p className="text-s-base leading-6 text-gray-80 sm:text-m-base sm:leading-7">
                    Подписку можно отменить в любой момент в приложении или через поддержку. После
                    отмены доступ к тарифу Профи сохранится до конца оплаченного периода.
                  </p>
                ),
              },
              {
                title: 'Уже пользуетесь sovlium?',
                highlight: true,
                body: (
                  <p className="text-s-base leading-6 text-gray-80 sm:text-m-base sm:leading-7">
                    Если вы уже пользуетесь sovlium, мы заранее предупредим об изменениях в тарифах
                    и ограничениях. Данные и кабинеты не будут удалены внезапно: перед применением
                    новых лимитов мы дадим время подготовиться или перейти на подходящий тариф.
                  </p>
                ),
              },
            ].map((card, index) => (
              <motion.article
                key={card.title}
                className={cn(
                  'flex min-w-0 flex-col gap-3 rounded-3xl p-5 sm:p-6',
                  card.highlight ? 'bg-brand-0' : 'bg-gray-5',
                )}
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                whileHover={reduceMotion || !canHover ? undefined : { y: -4 }}
                transition={{
                  type: 'spring',
                  stiffness: 380,
                  damping: 28,
                  delay: reduceMotion ? 0 : 0.06 * index,
                }}
              >
                <h2 className="text-l-base font-semibold text-gray-100 sm:text-xl-base-size">
                  {card.title}
                </h2>
                {card.body}
              </motion.article>
            ))}
          </div>

          <div className="mx-auto mt-8 max-w-[720px] text-pretty text-s-base leading-6 text-gray-60 sm:text-center">
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
            <p className="mt-2 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-4 sm:gap-y-2">
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
