import { Payments } from 'components/payments';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'sovlium | оплаты',
  description: 'Оплаты для репетиторов и малого бизнеса',
};

export default function PaymentsPage() {
  return (
    <section className="px-6 py-8 sm:py-12 xl:py-20">
      <Payments />
    </section>
  );
}
