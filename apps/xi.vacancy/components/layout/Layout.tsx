import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <main className="w-screen container max-w-[1920px] mx-auto px-4 sm:px-8 2xl:px-[112px]">
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;
