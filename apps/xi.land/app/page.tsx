import {
  AppsCarousel,
  Tasks,
  Hero,
  VideoCalls,
  Messages,
  Whiteboard,
  Promo,
} from 'components/mainPage';

export const metadata = {
  title: 'xi.effect',
  description: 'Приложение для репетиторов и малого бизнеса',
};

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
    </main>
  );
}
