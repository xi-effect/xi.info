import { ReactNode } from 'react';

import { LegalDocumentsNav } from 'components/legal/LegalDocumentsNav';

type LegalLayoutProps = {
  children: ReactNode;
};

const LegalLayout = ({ children }: LegalLayoutProps) => (
  <div className="font-nevermind min-h-screen bg-gray-0">
    <div className="mx-auto mt-[96px] max-w-4xl px-4 py-8 sm:px-8">
      <LegalDocumentsNav />
      <main className="prose prose-lg max-w-none">{children}</main>
    </div>
  </div>
);

export default LegalLayout;
