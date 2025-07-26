import { Materials } from 'components/materials';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'sovlium | материалы',
  description: 'Материалы для репетиторов и малого бизнеса',
};

export default function MaterialsPage() {
  return (
    <section className="px-6 py-8 sm:py-12 xl:py-20">
      <Materials />
    </section>
  );
}
