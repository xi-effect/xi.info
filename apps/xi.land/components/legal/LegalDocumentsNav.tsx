'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronSmallBottom } from '@xipkg/icons';
import { cn } from '@xipkg/utils';

import { LEGAL_DOCUMENTS } from 'lib/legal/documents';

export const LegalDocumentsNav = () => {
  const pathname = usePathname();
  const listId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const isIndex = pathname === '/legal';
  const current = LEGAL_DOCUMENTS.find((document) => document.href === pathname);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('pointerdown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  if (isIndex) return null;

  return (
    <nav aria-label="Юридические документы" className="mb-8">
      <div ref={rootRef} className="relative md:hidden">
        <button
          type="button"
          aria-expanded={open}
          aria-controls={listId}
          onClick={() => setOpen((value) => !value)}
          className="flex w-full items-center justify-between gap-3 rounded-[20px] bg-gray-5 px-4 py-3 text-left text-s-base leading-5 font-medium text-gray-100"
        >
          <span className="min-w-0 wrap-break-word">{current?.title ?? 'Выберите документ'}</span>
          <ChevronSmallBottom
            className={cn(
              'size-5 shrink-0 fill-gray-80 transition-transform duration-200',
              open && 'rotate-180',
            )}
          />
        </button>

        {open ? (
          <ul
            id={listId}
            className="absolute z-20 mt-2 flex w-full flex-col gap-1 rounded-[20px] border border-gray-10 bg-gray-0 p-1.5 shadow-[0_12px_32px_rgba(17,24,39,0.12)]"
          >
            {LEGAL_DOCUMENTS.map((document) => {
              const active = pathname === document.href;

              return (
                <li key={document.href}>
                  <Link
                    href={document.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'flex rounded-2xl px-3.5 py-2.5 text-s-base leading-5 wrap-break-word transition-colors',
                      active
                        ? 'bg-brand-80 font-medium text-brand-0'
                        : 'text-gray-80 hover:bg-brand-0 hover:text-brand-100',
                    )}
                  >
                    {document.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>

      <div className="hidden rounded-[20px] bg-gray-5 p-1.5 md:block">
        <ul className="flex flex-wrap gap-1">
          {LEGAL_DOCUMENTS.map((document) => {
            const active = pathname === document.href;

            return (
              <li key={document.href}>
                <Link
                  href={document.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'inline-flex rounded-full px-3.5 py-2 text-s-base leading-5 transition-colors',
                    active
                      ? 'bg-brand-80 font-medium text-brand-0'
                      : 'text-gray-80 hover:bg-gray-0 hover:text-gray-100',
                  )}
                >
                  {document.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
