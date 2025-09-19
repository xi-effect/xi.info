import { cn } from '@xipkg/utils';

export const Sticker = ({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'min-h-[218px] min-w-[200px]',
        'p-2 xs:p-4 sm:p-12 lg:px-8 lg:py-12',
        className,
      )}
    >
      {children}
    </div>
  );
};
