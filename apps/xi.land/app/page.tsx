import { Footer } from 'pkg.footer';
import HeaderWhite from 'components/HeaderWhite';
import HelloUser from 'components/HelloUser';
import { AboutDemoRegistration } from 'components/AboutDemoRegistration';
import AboutAllIn from 'components/AboutAllIn';
import AboutChangeWorld from 'components/AboutChangeWorld';

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
