'use client';

import { Hero } from 'components/main';
import { HorizontalFeatureCard } from 'components/main/shared/HorizontalFeatureCard';
import { VerticalFeatureCard } from 'components/main/shared/VerticalFeatureCard';

export default function CalendarPage() {
  return (
    <>
      <Hero />
      <section className="px-4 py-8 sm:px-8 sm:py-12 xl:px-40 xl:py-20">
        <div className="bg-gray-0 grid grid-cols-1 md:grid-cols-2 gap-y-16 gap-x-8 lg:gap-x-16">
          <VerticalFeatureCard
            title="Время для работы"
            description="В пару кликов создавайте будущее занятие"
            imageSrc="/assets/calendar/timeToWork_m.svg"
            imageClassName="left-4 top-4"
          />

          <VerticalFeatureCard
            title="Время для отдыха"
            description="Соблюдайте баланс и планируйте перерывы"
            imageSrc="/assets/calendar/timeToRest.svg"
            imageStyle={{ position: 'relative', width: '240px' }}
          />

          <HorizontalFeatureCard
            title="Всё взаимосвязано"
            description="Легко переходите в карточку занятия, где хранятся все материалы и настройки. Остаётся только нажать «Начать»"
            imageSrc="/assets/calendar/lessonCard.svg"
            imageStyle={{ width: '310px', position: 'absolute' }}
            reverse
          />

          <HorizontalFeatureCard
            title="Ваш виртуальный секретарь"
            description="Учите и развивайтесь, а рутину оставьте sovlium"
            imageSrc="/assets/calendar/secretary.webp"
            reverse
            bg="bg-brand-80"
            textColor="text-brand-0"
            buttonText="Попробовать бесплатно"
            onButtonClick={() => console.log('Click')}
          />
        </div>
      </section>
    </>
  );
}
