import { Materials } from 'components/materials';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Удобное хранение учебных материалов в sovlium',
  description:
    'Храните учебники, онлайн-доски, файлы и заметки в единой системе. Настройте собственную цифровую библиотеку.',
};

export default function MaterialsPage() {
  return (
    <section className="px-6 py-8 sm:py-12 xl:py-20">
      <Materials />
    </section>
  );
}
