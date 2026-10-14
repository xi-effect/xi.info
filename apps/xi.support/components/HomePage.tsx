import { sectionsForRole } from '@/config/sectionsConfig';
import { CallToAction } from './CallToAction';
import { Card } from './Card';

const MaintenanceNotice = () => (
  <div
    className="w-full rounded-xl border border-amber-200/90 bg-amber-50/90 px-4 py-3 text-sm leading-snug text-amber-950 dark:border-amber-800/50 dark:bg-amber-950/30 dark:text-amber-100"
    role="status"
  >
    Статьи в процессе обновления.
  </div>
);

export const HomePage = ({ role }: { role: 'tutor' | 'student' }) => {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-10 md:gap-20">
      <div className="w-full flex flex-col gap-4 md:gap-5">
        <MaintenanceNotice />
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 justify-center items-center gap-5">
          {sectionsForRole(role).map(({ title, description, href }) => (
            <Card key={href} title={title} href={href} description={description} />
          ))}
        </div>
      </div>
      <CallToAction />
    </div>
  );
};
