'use client';

import { Carousel, CarouselContent, CarouselItem } from 'pkg.carousel';
import { Link } from '@xipkg/link';
import { ArrowRight, Check } from '@xipkg/icons';
import { motion } from 'framer-motion';
import { TariffsItem } from './TariffsItem';
import { tariffs } from './consts';

export const Tariffs = () => (
  <section className="py-8 sm:py-16 md:px-8 xl:px-24">
    <div className="flex flex-col gap-8 overflow-hidden">
      <div className="flex-col flex md:flex-row gap-8 px-8 md:px-0 lg:px-8 3xl:px-16 justify-between">
        <div className="flex flex-col gap-2 items-start">
          <h2 className="text-h6 sm:text-h5 lg:text-h3 3xl:text-h2">
            Месяц бесплатно на любом тарифе
          </h2>
          <Link
            href="#"
            variant="none"
            size="l"
            className="group text-brand-80 hover:text-brand-60 sm:text-l-base md:text-m-base lg:text-l-base 3xl:text-[30px] flex items-center 3xl:gap-4 gap-2"
          >
            Сравнить тарифы
            <ArrowRight className="group-hover:fill-brand-60 fill-brand-80 sm:w-8 sm:h-8 md:w-6 md:h-6 lg:w-7 lg:h-7 3xl:w-12 3xl:h-12" />
          </Link>
        </div>
        <ul className="flex md:basis-1/3 flex-col gap-2 xl:pl-4">
          <li className="flex gap-2 items-center text-gray-90 sm:text-l-base lg:text-m-base md:text-s-base 3xl:text-l-base">
            <Check size="m" className="sm:w-5 sm:h-5 fill-gray-60" /> Надежная система для работы
          </li>
          <li className="flex gap-2 items-center text-gray-90 sm:text-l-base lg:text-m-base md:text-s-base 3xl:text-l-base">
            <Check size="m" className="sm:w-5 sm:h-5 fill-gray-60" /> Ежемесячные обновления
          </li>
          <li className="flex gap-2 items-center text-gray-90 sm:text-l-base lg:text-m-base md:text-s-base 3xl:text-l-base">
            <Check size="m" className="sm:w-5 sm:h-5 fill-gray-60" /> Круглосуточная поддержка
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
