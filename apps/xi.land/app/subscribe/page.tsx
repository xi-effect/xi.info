import { SubscribeView } from 'components/subscribe/SubscribeView';
import { createPageMetadata } from 'lib/seo/metadata';

export const metadata = createPageMetadata('/subscribe');

export default function SubscribePage() {
  return <SubscribeView />;
}
