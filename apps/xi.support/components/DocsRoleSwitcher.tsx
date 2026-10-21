'use client';

import { SwitcherAnimate } from '@xipkg/switcher-animate';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { DOCS_ROLE_STORAGE_KEY, pathForRole, roleFromPath, type DocsRole } from '@/lib/docs-role';

const switcherTabClass =
  'data-[state=inactive]:text-gray-90! data-[state=inactive]:hover:text-gray-90! data-[state=active]:text-gray-0! data-[state=active]:hover:text-gray-0!';

const tabs = [
  { id: 'tutor', label: 'Репетитор' },
  { id: 'student', label: 'Ученик' },
];

export function DocsRoleSwitcher() {
  const pathname = usePathname() || '/';
  const router = useRouter();
  const role = roleFromPath(pathname);

  useEffect(() => {
    if (
      pathname === '/tutor' ||
      pathname.startsWith('/tutor/') ||
      pathname === '/student' ||
      pathname.startsWith('/student/')
    ) {
      localStorage.setItem(DOCS_ROLE_STORAGE_KEY, role);
    }
  }, [pathname, role]);

  return (
    <SwitcherAnimate
      tabs={tabs}
      activeTab={role}
      onChange={(next) => {
        const value: DocsRole = next === 'student' ? 'student' : 'tutor';
        localStorage.setItem(DOCS_ROLE_STORAGE_KEY, value);
        const href = pathForRole(pathname, value);
        if (href !== pathname) router.push(href);
      }}
      className="docs-role-switcher bg-gray-5! flex h-9 w-full min-w-0 flex-row rounded-lg p-1"
      tabClassName={`${switcherTabClass} text-m-base w-full font-medium`}
      indicatorClassName="w-full rounded-md bg-brand-100!"
    />
  );
}
