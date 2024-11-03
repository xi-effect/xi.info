import { AppsCarousel, HeroContent, StarShape, Tasks, WaveShape } from 'components/mainPage';
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
            width={1085}
            height={890}
            priority
            className="hidden lg:block lg:pt-16 2xl:pt-5 w-auto h-full top-0 right-0 absolute z-0 pointer-events-none"
          />
          <HeroContent />
        </div>
      </section>
      <AppsCarousel />
      <Tasks />
    </main>
  );
}
