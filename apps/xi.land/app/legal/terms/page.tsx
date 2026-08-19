import { createPageMetadata } from 'lib/seo/metadata';

export const metadata = createPageMetadata('/legal/terms');

export default async function TermsPage() {
  const { default: TermsContent } = await import('../../../markdown/terms.mdx');

  return <TermsContent />;
}
