import { Footer } from 'pkg.footer';
import HeaderWhite from 'components/HeaderWhite';
// import HelloUser from 'components/HomePage/HelloUser';
import { AboutDemoRegistration } from 'components/HomePage/AboutDemoRegistration';
import AboutAllIn from 'components/HomePage/AboutAllIn';
import AboutChangeWorld from 'components/HomePage/AboutChangeWorld';
import dynamic from 'next/dynamic';

const HelloUser = dynamic(() => import('components/HomePage/HelloUser'), { ssr: false });

export const metadata = {
  title: 'xi.effect',
  description: 'Приложение для репетиторов и малого бизнеса',
};

export default function MainPage() {
  return (
    <main className="flex flex-row h-full w-full min-h-[100vh] justify-center items-start bg-gray-0 overflow-x-hidden">
      <div className="flex flex-col w-full justify-start items-start">
        <HeaderWhite />
        <HelloUser />
        <AboutAllIn />
        <AboutChangeWorld />
        <AboutDemoRegistration />
        <Footer />
      </div>
    </main>
  );
}
