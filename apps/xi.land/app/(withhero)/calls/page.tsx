import { Calls } from 'components/calls';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'sovlium | звонки',
  description: 'Звонки для репетиторов и малого бизнеса',
};

export default function CallsPage() {
  return (
    <section className="px-6 py-8 sm:py-12 xl:py-20">
      <Calls />
    </section>
  );
}
