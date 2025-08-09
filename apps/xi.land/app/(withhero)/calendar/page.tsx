import { Calendar } from 'components/calendar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Расписание для репетиторов от sovlium',
  description:
    'Гибкая настройка и автоматические напоминания для учеников. Больше никаких пропущенных занятий! Эффективно управляйте своим временем.',
};

export default function CalendarPage() {
  return (
    <section className="px-6 py-8 sm:py-12 xl:py-20">
      <Calendar />
    </section>
  );
}
