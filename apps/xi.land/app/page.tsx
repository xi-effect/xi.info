import { AppsCarousel } from 'components/mainPage/appsCarousel/AppsCarousel';
import { HeroContent } from 'components/mainPage/firstScreen/HeroContent';
import { StarShape } from 'components/mainPage/firstScreen/StarShape';
import { WaveShape } from 'components/mainPage/firstScreen/WaveShape';
import Image from 'next/image';

export const metadata = {
  title: 'xi.effect',
  description: 'Приложение для репетиторов и малого бизнеса',
};

export default function MainPage() {
  return (
    <main>
      <section className="rounded-b-[64px] bg-brand-80 relative lg:h-[calc(100dvh-1.5rem)] lg:flex">
        <StarShape />
        <WaveShape />
        <div className="pt-28 lg:px-24 xs:pt-36 px-8 lg:flex relative overflow-hidden w-full">
          <Image
            src="/assets/mainPage/hero/main.webp"
            alt="main screen image"
            width={1}
            height={1}
            priority
            className="hidden lg:block lg:pt-16 2xl:pt-5 w-auto h-full top-0 right-0 absolute z-0 pointer-events-none"
          />
          <HeroContent />
        </div>
      </section>
      <AppsCarousel />
    </main>
  );
}
