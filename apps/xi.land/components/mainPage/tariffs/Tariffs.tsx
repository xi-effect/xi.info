'use client';

import { Link } from '@xipkg/link';
import { ArrowRight, Check } from '@xipkg/icons';
import { motion } from 'framer-motion';
import { Carousel, CarouselContent, CarouselItem } from './Carousel';
import { TariffsItem } from './TariffsItem';

const tariffs = [
  {
    id: 1,
    title: 'Лайт',
    description: 'Идеален для старта',
    features: ['До 5 студентов', '1 преподаватель'],
    price: { amount: 'Бесплатно' },
    buttonLabel: 'Начать пользоваться',
    backgroundColor: 'bg-violet-20',
    titleColor: 'text-violet-100',
    buttonClassName: 'bg-violet-100 hover:bg-violet-60 active:bg-violet-60 focus:bg-violet-60',
  },
  {
    id: 2,
    title: 'Репетитор',
    description: 'Идеален для работы репетитора',
    features: ['До 20 студентов', '1 преподаватель'],
    price: { amount: '2990', unit: '₽/мес' },
    buttonLabel: 'Попробовать бесплатно',
    backgroundColor: 'bg-green-0',
    titleColor: 'text-green-80',
    buttonClassName: 'bg-green-80 hover:bg-green-60 active:bg-green-60 focus:bg-green-60',
  },
  {
    id: 3,
    title: 'Про',
    description: 'Подходит для курсов и кружков',
    features: ['До 50 студентов', '3 преподавателя'],
    price: { amount: '7990', unit: '₽/мес' },
    buttonLabel: 'Попробовать бесплатно',
    backgroundColor: 'bg-orange-0',
    titleColor: 'text-orange-80',
    buttonClassName: 'bg-orange-80 hover:bg-orange-60 active:bg-orange-60 focus:bg-orange-60',
  },
];

export const Tariffs = () => (
  <section className="py-8 sm:py-16 md:px-8 xl:px-24">
    <div className="flex flex-col gap-8 overflow-hidden">
      <div className="flex-col flex md:flex-row gap-8 px-8 md:px-0 lg:px-8 3xl:px-16 justify-between">
        <div className="flex flex-col gap-2 items-start">
          <h2 className="text-h6 sm:text-h5 lg:text-h3 3xl:text-h2">
            Месяц бесплатно на любом тарифе
          </h2>
          <Link
            href="#"
            variant="none"
            size="l"
            className="group text-brand-80 sm:text-l-base md:text-m-base lg:text-l-base 3xl:text-[30px] flex items-center 3xl:gap-4 gap-2"
          >
            Сравнить тарифы
            <ArrowRight className="group-hover:fill-gray-100 fill-brand-80 sm:w-8 sm:h-8 md:w-6 md:h-6 lg:w-8 lg:h-8 3xl:w-12 3xl:h-12" />
          </Link>
        </div>
        <ul className="flex md:basis-1/3 flex-col gap-2 xl:pl-4">
          <li className="flex gap-2 items-center text-gray-90 sm:text-l-base lg:text-m-base md:text-s-base 3xl:text-l-base">
            <Check className="sm:w-5 sm:h-5 fill-gray-60" /> Надежная система для работы
          </li>
          <li className="flex gap-2 items-center text-gray-90 sm:text-l-base lg:text-m-base md:text-s-base 3xl:text-l-base">
            <Check className="sm:w-5 sm:h-5 fill-gray-60" /> Ежемесячные обновления
          </li>
          <li className="flex gap-2 items-center text-gray-90 sm:text-l-base lg:text-m-base md:text-s-base 3xl:text-l-base">
            <Check className="sm:w-5 sm:h-5 fill-gray-60" /> Круглосуточная поддержка
          </li>
        </ul>
      </div>
      <Carousel>
        <CarouselContent className="px-8 xs:pr-24 md:px-0 md:hidden" overflow="overflow-visible">
          {tariffs.map((tariff) => (
            <CarouselItem key={tariff.id} className="w-full pr-8">
              <TariffsItem
                title={tariff.title}
                description={tariff.description}
                features={tariff.features}
                price={tariff.price}
                buttonLabel={tariff.buttonLabel}
                buttonClassName={tariff.buttonClassName}
                containerClassName={tariff.backgroundColor}
                titleClassName={tariff.titleColor}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="hidden md:grid md:grid-cols-3 gap-8">
        {tariffs.map((tariff, index) => (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: Number(`0.${6 + index}`), duration: 0.4 }}
            key={tariff.id}
          >
            <TariffsItem
              title={tariff.title}
              description={tariff.description}
              features={tariff.features}
              price={tariff.price}
              buttonLabel={tariff.buttonLabel}
              buttonClassName={tariff.buttonClassName}
              containerClassName={tariff.backgroundColor}
              titleClassName={tariff.titleColor}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
