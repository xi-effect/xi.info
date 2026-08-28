import { createPageMetadata } from 'lib/seo/metadata';

export const metadata = createPageMetadata('/legal/privacy');

export default async function PrivacyPage() {
  const { default: PrivacyContent } = await import('../../../markdown/privacy.mdx');

  return <PrivacyContent />;
}
