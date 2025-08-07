import { Payments } from 'components/payments';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Контроль оплат и аналитика для репетиторов от sovlium',
  description:
    'Автоматические напоминания об оплате и прозрачная отчётность. Ваш личный бухгалтер. Попробуйте бесплатно.',
};

export default function PaymentsPage() {
  return (
    <section className="px-6 py-8 sm:py-12 xl:py-20">
      <Payments />
    </section>
  );
}
