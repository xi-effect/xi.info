const teamAvatar = [
  { src: '' },
  { src: '' },
  { src: '' },
  { src: '' },
  { src: '' },
  { src: '' },
  { src: '' },
];

const FindYourCase = () => (
  <section className="px-4 py-16 xl:pt-32 xl:pb-16 xl:px-16">
    <h1 className="uppercase font-marker mb-[46px] text-[40px] sm:text-[80px] xl:text-[160px] 2xl:text-[180px] leading-[120%] table-caption">
      найди любимое дело
    </h1>

    <button
      type="button"
      className="bg-brand-80 text-[22px] xl:text-[44px]  text-gray-0 xl:px-16 xl:py-6 xl:rounded-3xl t-l btn-l xl:h-[112px] mb-12"
    >
      Смотреть вакансии
    </button>

    <div className="mx-[-16px] flex flex-wrap justify-center overflow-hidden h-[54px] sm:h-[80px] 2xl:h-[110px]">
      {teamAvatar.map((e, i) => (
        <span
          key={i}
          className="mx-4 bg-brand-80 rounded-full w-[54px] h-[54px] sm:w-[80px] sm:h-[80px] 2xl:w-[110px] 2xl:h-[110px]"
        />
      ))}
    </div>
  </section>
);

export default FindYourCase;
