import { Hero } from 'components/main';

export default function HeroLayout({ children }: { children: any }) {
  return (
    <>
      <Hero />
      {children}
    </>
  );
}
