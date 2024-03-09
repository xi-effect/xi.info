import { ReactNode } from 'react';
import { Footer } from 'pkg.footer';

const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <main className="w-screen">
      {children}
    </main>
    <Footer />
  </>
);

export default Layout;
