import { ReactNode } from 'react';
import { Footer } from 'pkg.footer';

export const Layout = ({ children }: { children: ReactNode }) => (
  <>
    <main className="w-screen">
      {children}
    </main>
    <Footer />
  </>
);
