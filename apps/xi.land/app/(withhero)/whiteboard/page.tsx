import { Whiteboard } from 'components/whiteboard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'sovlium | доска',
  description: 'Доска для репетиторов и малого бизнеса',
};

export default function WhiteboardPage() {
  return (
    <section className="px-6 py-8 sm:py-12 xl:py-20">
      <Whiteboard />
    </section>
  );
}
