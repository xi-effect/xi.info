import { Hero } from 'components/main';
import { Metadata } from 'next';
import dynamic from 'next/dynamic';

const Messages = dynamic(() => import('components/main').then((mod) => mod.Messages));

export const metadata: Metadata = {
  title: 'xi.effect | Платформа для учебных сообществ',
  description:
    'Создавайте тесты, управляйте студентами и проводите занятия онлайн и офлайн. Простые и удобные инструменты для образования.',
  openGraph: {
    title: 'xi.effect | Платформа для учебных сообществ',
    description:
      'Создавайте тесты, управляйте студентами и проводите занятия онлайн и офлайн. Простые и удобные инструменты для образования.',
    url: 'https://xieffect.ru',
    siteName: 'xi.effect',
    images: [
      {
        url: 'https://xieffect.ru/opengh.png', // Must be an absolute URL
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
      <Messages />
    </main>
  );
}
