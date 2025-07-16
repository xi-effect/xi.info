import { cn } from '@xipkg/utils';
import { FC } from 'react';

type TextPropsT = {
  children: React.ReactNode;
  className?: string;
  theme?: 'dark' | 'light';
};

export const Text: FC<TextPropsT> = ({ children, className, theme = 'dark' }) => {
  const textClassName = cn(
    'sticky top-0 w-full left-0 right-0 z-10',
    'flex items-center justify-center text-center',
    'px-4 py-8 md:px-8 md:py-12 lg:py-16',
    'text-4xl md:text-5xl font-medium',
    theme === 'dark' ? 'text-gray-0 bg-gray-100' : 'text-gray-100 bg-gray-0',
    className,
  );

  return <div className={textClassName}>{children}</div>;
};
