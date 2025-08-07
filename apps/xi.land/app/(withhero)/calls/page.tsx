import { Calls } from 'components/calls';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Стабильная видеосвязь для репетиторов от sovlium',
  description:
    'Встроенная онлайн-доска, быстрый доступ и высокое качество. Протестируйте видеозвонки бесплатно.',
};

export default function CallsPage() {
  return (
    <section className="px-6 py-8 sm:py-12 xl:py-20">
      <Calls />
    </section>
  );
}
