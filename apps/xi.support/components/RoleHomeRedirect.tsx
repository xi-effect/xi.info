'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function RoleHomeRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/tutor');
  }, [router]);

  return <p className="text-sm text-fd-muted-foreground">Открываем базу знаний…</p>;
}
