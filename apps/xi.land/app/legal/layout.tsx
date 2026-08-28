'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { ReactNode } from 'react';

import { LEGAL_DOCUMENTS } from 'lib/legal/documents';

type LegalLayoutProps = {
  children: ReactNode;
};

const LegalLayout = ({ children }: LegalLayoutProps) => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="min-h-screen bg-gray-0">
      <div className="mt-[96px] max-w-4xl mx-auto px-4 sm:px-8 py-8">
        <nav className="mb-8">
          <div className="flex flex-wrap gap-x-4 gap-y-3 border-b border-gray-200 pb-4">
            {LEGAL_DOCUMENTS.map((document) => (
              <Link
                key={document.href}
                href={document.href}
                className={`transition-colors hover:underline ${
                  isActive(document.href)
                    ? 'text-gray-900 font-semibold'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {document.title}
              </Link>
            ))}
          </div>
        </nav>

        <main className="prose prose-lg max-w-none">{children}</main>
      </div>
    </div>
  );
};

export default LegalLayout;
