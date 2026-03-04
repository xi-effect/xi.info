'use client';

import { cn } from '@xipkg/utils';
import Image, { ImageProps } from 'next/image';

type ResponsiveImageProps = {
  alt: string;
  srcDesktop?: string;
  srcMobile?: string;
  className?: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
} & Partial<Omit<ImageProps, 'src' | 'alt'>>;

const DESKTOP_SIZES = '(max-width: 767px) 0px, 50vw';
const MOBILE_SIZES = '(min-width: 768px) 0px, 100vw';

export const ResponsiveImage = ({
  alt,
  srcDesktop,
  srcMobile,
  className,
  style,
  width = 660,
  height = 350,
  loading = 'lazy',
  ...rest
}: ResponsiveImageProps) => (
  <>
    {srcDesktop && (
      <Image
        src={srcDesktop}
        alt={alt}
        width={width}
        height={height}
        sizes={DESKTOP_SIZES}
        className={cn('hidden sm:flex', className)}
        style={{ ...style }}
        loading={loading}
        {...rest}
      />
    )}
    {srcMobile && (
      <Image
        src={srcMobile}
        alt={alt}
        width={width}
        height={height}
        sizes={MOBILE_SIZES}
        className={cn('sm:hidden flex', className)}
        style={{ ...style }}
        loading={loading}
        {...rest}
      />
    )}
  </>
);
