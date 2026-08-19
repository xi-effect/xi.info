import { createPageMetadata } from 'lib/seo/metadata';

export const metadata = createPageMetadata('/legal/consent');

export default async function ConsentPage() {
  const { default: ConsentContent } = await import('../../../markdown/consent.mdx');

  return <ConsentContent />;
}
