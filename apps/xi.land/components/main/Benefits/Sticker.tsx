import { cn } from '@xipkg/utils';

const stickerStyles = {
  violetSticker: 'bg-violet-20 shadow-[4px_4px_10px_rgba(131,48,196,0.2)]',
  greenSticker: 'bg-green-0 shadow-[4px_4px_10px_rgba(46,132,46,0.2)]',
  yellowSticker: 'bg-yellow-20 shadow-[4px_4px_10px_rgba(243,201,76,0.2)]',
} as const;

const stickerSizes = {
  violetSticker:
    'xs:w-[320px] xs:h-[278px] sm:w-[378px] sm:h-[366px] lg:w-[453px] lg:h-[491px] xl:w-[490px] xl:h-[491px]',
  greenSticker:
    'xs:w-[313px] xs:h-[292px] sm:w-[378px] sm:h-[406px] lg:w-[453px] lg:h-[528px] xl:w-[490px] xl:h-[507px]',
  yellowSticker:
    'xs:w-[320px] xs:h-[278px] sm:w-[378px] sm:h-[366px] lg:w-[453px] lg:h-[480px] xl:w-[490px] xl:h-[480px]',
} as const;

type StickerType = keyof typeof stickerStyles;

export const Sticker = ({
  className,
  type,
  children,
}: {
  className?: string;
  type?: StickerType;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'w-[258px] h-[218px] overflow-hidden',
        type && stickerSizes[type],
        type && stickerStyles[type],
        className,
      )}
    >
      <div className="w-full h-full box-border p-2 xs:p-4 sm:p-8 lg:p-12">{children}</div>
    </div>
  );
};
