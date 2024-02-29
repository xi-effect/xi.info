import { ReactNode } from 'react';
import Header from './Header';
import { Footer } from 'pkg.footer';

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <Header />
    <main className="w-screen">
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;
