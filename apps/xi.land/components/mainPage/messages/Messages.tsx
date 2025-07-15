'use client';

import { cn } from '@xipkg/utils';
import { Text } from '../shared';

export const Messages = () => {
  const sectionClass = cn(
    'relative z-0 bg-gray-100 h-100vh w-full',
    'flex flex-col items-center justify-center',
    'pt-80 xs:pt-40 px-6 md:px-8 lg:px-12 2xl:px-40 pb-12',
  );

  return (
    <>
      <Text>Переход в онлайн принёс репетиторам новые вызовы</Text>
      <section className={sectionClass}>csdcsc</section>
    </>
  );
};
