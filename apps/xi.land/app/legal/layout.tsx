'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type LegalLayoutProps = {
  children: any;
};

const LegalLayout = ({ children }: LegalLayoutProps) => {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <div className="min-h-screen bg-gray-0">
      <div className="mt-[96px] max-w-4xl mx-auto px-4 sm:px-8 py-8">
        {/* Навигация между юридическими страницами */}
        <nav className="mb-8">
          <div className="flex flex-wrap gap-4 border-b border-gray-200 pb-4">
            <Link
              href="/legal/terms"
              className={`transition-colors hover:underline ${
                isActive('/legal/terms')
                  ? 'text-gray-900 font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Условия использования
            </Link>
            <Link
              href="/legal/privacy"
              className={`transition-colors hover:underline ${
                isActive('/legal/privacy')
                  ? 'text-gray-900 font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Политика конфиденциальности
            </Link>
            <Link
              href="/legal/consent"
              className={`transition-colors hover:underline ${
                isActive('/legal/consent')
                  ? 'text-gray-900 font-semibold'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Согласие на обработку данных
            </Link>
          </div>
        </nav>

        {/* Контент страницы */}
        <div className="prose prose-lg max-w-none">{children}</div>
      </div>
    </div>
  );
};

export default LegalLayout;
