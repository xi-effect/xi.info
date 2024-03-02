import AboutAnnounce from 'components/AboutAnnounce';
import AboutChat from 'components/AboutChat';
import AboutCommunity from 'components/AboutCommunity';
import AboutTasks from 'components/AboutTasks';
import AboutVideo from 'components/AboutVideo';
import { Footer } from 'pkg.footer';
import Header from 'components/Header';
import HelloUser from 'components/HelloUser';
import AboutEase from 'components/AboutEase';
// import AboutTrust from 'components/AboutTrust';
import { AboutDemoRegistration } from 'components/AboutDemoRegistration';

export default function MainPage() {
  return (
    <main className="flex flex-row h-full w-full min-h-[100vh] justify-center items-start bg-gray-0 overflow-x-hidden">
      <div className="flex flex-col w-full justify-start items-start max-w-[1920px]">
        <Header />
        <HelloUser />
        <AboutTasks />
        <AboutVideo />
        <AboutChat />
        <AboutAnnounce />
        <AboutCommunity />
        <AboutEase />
        {/* <AboutTrust /> */}
        <AboutDemoRegistration />
        <Footer />
      </div>
    </main>
  );
}
