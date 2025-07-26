import { Calendar } from 'components/calendar';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'sovlium | календарь',
  description: 'Календарь для репетиторов и малого бизнеса',
};

export default function CalendarPage() {
  return (
    <section className="px-6 py-8 sm:py-12 xl:py-20">
      <Calendar />
    </section>
  );
}
