type OverviewCardT = {
  value: string;
  label: string;
  note: string;
};

export function OverviewCard({ value, label, note }: OverviewCardT) {
  return (
    <article className="rounded-4xl bg-gray-5 p-5 sm:p-8">
      <div className="flex flex-col gap-1.5 sm:gap-2">
        <span className="text-[34px] font-semibold leading-none text-gray-100 sm:text-[40px]">
          {value}
        </span>

        <span className="text-m-base font-semibold text-gray-100 sm:text-l-base">{label}</span>

        <span className="text-s-base leading-5 text-gray-70">{note}</span>
      </div>
    </article>
  );
}
