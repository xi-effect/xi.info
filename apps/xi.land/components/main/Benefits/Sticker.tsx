import { cn } from '@xipkg/utils';

export const Sticker = ({
  className,
  bgColor,
  children,
}: {
  className: string;
  bgColor?: 'violet' | 'green' | 'yellow';
  children: React.ReactNode;
}) => {
  const violetBgColor = 'bg-violet-20 shadow-[4px_4px_10px_0px_rgba(131,48,196,0.2)]';
  const greenBgColor = 'bg-green-0 shadow-[4px_4px_10px_0px_rgba(46,132,46,0.2)]';
  const yellowBgColor = 'bg-yellow-20 shadow-[4px_4px_10px_0px_rgba(243,201,76,0.2)]';

  return (
    <div
      className={cn(
        'min-h-[218px] min-w-[200px]',
        'p-2 xs:p-4 sm:p-12 lg:px-8 lg:py-12',
        bgColor === 'violet' && violetBgColor,
        bgColor === 'green' && greenBgColor,
        bgColor === 'yellow' && yellowBgColor,
        className,
      )}
    >
      {children}
    </div>
  );
};
