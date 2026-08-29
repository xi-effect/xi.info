import {
  createOpenGraphImage,
  ogImageAlt,
  ogImageContentType,
  ogImageSize,
} from 'lib/seo/og-image';

export const dynamic = 'force-static';
export const alt = ogImageAlt;
export const size = ogImageSize;
export const contentType = ogImageContentType;

export default createOpenGraphImage('/payments');
