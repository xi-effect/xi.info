'use client';

import { HorizontalFeatureCard, VerticalFeatureCard } from 'components/main/shared';

export const Calendar = () => (
  <div className="w-full max-w-[1600px] mx-auto bg-gray-0 grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 lg:gap-x-16">
    <VerticalFeatureCard
      title="Время для работы"
      description="В пару кликов создавайте будущее занятие"
      imageSrcDesktop="/assets/calendar/timeToWork.svg"
      imageSrcMobile="/assets/calendar/timeToWork_m.svg"
      imageClassName="left-4 sm:left-8 top-4 sm:top-8 w-full absolute"
    />

    <VerticalFeatureCard
      title="Время для отдыха"
      description="Соблюдайте баланс и планируйте перерывы"
      imageSrcDesktop="/assets/calendar/timeToRest.svg"
      imageSrcMobile="/assets/calendar/timeToRest.svg"
      imageClassName="w-[240px] sm:w-[480px] relative"
    />

    <HorizontalFeatureCard
      title="Всё взаимосвязано"
      description="Легко переходите в карточку занятия, где хранятся все материалы и настройки. Остаётся только нажать «Начать»"
      imageSrcDesktop="/assets/calendar/lessonCard.svg"
      imageSrcMobile="/assets/calendar/lessonCard.svg"
      imageClassName="absolute w-[310px] sm:w-[320px] lg:w-[280px] xl:w-[320px] md:top-0 top-4 sm:top-4 sm:right-0 md:h-full md:relative"
      descrClassname="sm:flex-1/2"
      imgBlockClassName="sm:flex-1/2"
      reverse
      className="sm:flex-row-reverse"
    />

    <HorizontalFeatureCard
      title="Автоматические напоминания"
      description="Больше не нужно проверять, помнит ли ученик о занятии"
      imageSrcDesktop="/assets/calendar/autoNotification.svg"
      imageSrcMobile="/assets/calendar/autoNotification.svg"
      imageClassName="w-[290px] sm:w-[480px] absolute md:p-8 xl:w-full"
    />

    <HorizontalFeatureCard
      title="Ваш виртуальный секретарь"
      description="Учите и развивайтесь, а рутину оставьте sovlium"
      imageSrcDesktop="/assets/calendar/secretary.webp"
      imageSrcMobile="/assets/calendar/secretary_m.webp"
      imageClassName="absolute left-4 top-4 sm:left-8 sm:top-8 w-full md:object-cover md:h-full md:object-left"
      reverse
      bg="bg-brand-80"
      descrClassname="text-brand-0"
      imgBlockClassName="sm:h-[450px]"
      buttonText="Попробовать бесплатно"
      buttonVariant="secondary"
      className="gap-y-0"
    />
  </div>
);
