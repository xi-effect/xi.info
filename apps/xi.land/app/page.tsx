import { Hero } from 'components/main';
// import { ScrollSection } from 'components/main/ScrollSection';
import { ScrollStepSection } from 'components/main/ScrollStepSection';
// import { StickyGsap } from 'components/main/StickyGSAP';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'sovlium | приложение для репетиторов',
  description: 'Приложение для репетиторов и малого бизнеса',
  openGraph: {
    title: 'sovlium',
    description: 'Приложение для репетиторов и малого бизнеса',
    url: 'https://sovlium.ru',
    siteName: 'sovlium',
    images: [
      {
        url: 'https://sovlium.ru/web-app-manifest-512x512.png', // Must be an absolute URL
        width: 512,
        height: 512,
      },
    ],
    type: 'website',
  },
};

export default function MainPage() {
  return (
    <main>
      <Hero />
      {/* <div className="h-screen w-full bg-red-500">1</div>
      <ScrollSection />
      <div className="h-screen w-full bg-red-500">2</div>
      <StickyGsap /> */}
      <div className="h-screen w-full bg-red-500">2</div>
      <ScrollStepSection />
    </main>
  );
}
