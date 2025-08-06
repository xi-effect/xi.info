import { cn } from '@xipkg/utils';
import React from 'react';

export const Text = ({
  theme,
  text,
  className,
}: {
  theme: 'dark' | 'light';
  text: string;
  className?: string;
}) => (
  <section
    data-theme={theme}
    className={cn(
      'py-[32px] px-[16px] xs:py-[48px] xs:px-[32px] md:py-[64px] lg:px-[160px] relative flex flex-col items-center justify-center z-0 bg-gray-0 dark:bg-gray-100 w-full transition-all duration-700 ease-in-out',
      className,
    )}
  >
    <div className="w-full max-w-[1600px] flex flex-col items-center justify-center gap-2">
      <h2 className="dark:text-gray-0 text-gray-100 text-center text-[32px] xs:text-[40px] md:text-[48px] font-medium whitespace-pre-line">
        {text}
      </h2>
    </div>
  </section>
);
