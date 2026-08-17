import { cn } from '@xipkg/utils';

type ShotPlaceholderPropsT = {
  className?: string;
};

/** Нейтральная заглушка, пока нет кадра из продукта */
export const ShotPlaceholder = ({ className }: ShotPlaceholderPropsT) => (
  <div
    aria-hidden
    className={cn('size-full min-h-72 rounded-3xl bg-gray-5 lg:min-h-[340px]', className)}
  />
);
