'use client';

import { Hero } from 'components/mainPage';
import dynamic from 'next/dynamic';

const AppsCarousel = dynamic(() => import('components/mainPage').then((mod) => mod.AppsCarousel));
const Tasks = dynamic(() => import('components/mainPage').then((mod) => mod.Tasks));
const VideoCalls = dynamic(() => import('components/mainPage').then((mod) => mod.VideoCalls));
const Messages = dynamic(() => import('components/mainPage').then((mod) => mod.Messages));
const Whiteboard = dynamic(() => import('components/mainPage').then((mod) => mod.Whiteboard));
const Promo = dynamic(() => import('components/mainPage').then((mod) => mod.Promo));
const Tariffs = dynamic(() => import('components/mainPage').then((mod) => mod.Tariffs));
const CallToAction = dynamic(() => import('components/mainPage').then((mod) => mod.CallToAction));

export default function MainPage() {
  return (
    <main>
      <Hero />
      <AppsCarousel />
      <Tasks />
      <VideoCalls />
      <Messages />
      <Whiteboard />
      <Promo />
      <Tariffs />
      <CallToAction />
    </main>
  );
}
