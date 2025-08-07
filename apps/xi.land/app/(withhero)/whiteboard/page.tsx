import { Whiteboard } from 'components/whiteboard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Интерактивная онлайн-доска для репетитора от sovlium',
  description:
    'Легко визуализируйте формулы, связи и диаграммы. Рисуйте, пишите и объясняйте — как в классе. Протестируйте онлайн-доску бесплатно.',
};

export default function WhiteboardPage() {
  return (
    <section className="px-6 py-8 sm:py-12 xl:py-20">
      <Whiteboard />
    </section>
  );
}
