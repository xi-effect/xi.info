const Footer = () => (
  <footer>
    <div className="my-8 p-8 md:p-16 md:my-16   xl:pr-[650px] bg-gray-10 rounded-[32px] relative">
      <h4 className="text-[32px] sm:text-[64px] xl:text-7xl 2xl:text-[80px] font-semibold mb-4 md:mb-16">
        Приходи работать вместе
      </h4>

      <p className="mb-4 md:mb-16 text-[16px] sm:text-[40px] 2xl:text-5xl">
        Напиши пару слов о себе и о том, какая вакансия может быть вам интересна
      </p>

      <button
        type="button"
        className="bg-brand-80 text-gray-0 xl:px-16 xl:py-6 xl:rounded-3xl t-l btn-l xl:h-[112px] xl:w-[450px] "
      >
        Отправить резюме
      </button>

      <img
        alt="team working"
        src="/work-together.jpg"
        className="absolute top-0 right-0 object-cover w-[600px] h-full rounded-r-3xl hidden xl:block"
      />
    </div>

    <div className="px-4 py-8 md:p-16 flex flex-wrap flex-col md:flex-row md:items-center justify-between">
      <img
        src="/team.svg"
        alt="logo xi.effect"
        className="w-[165px] h-[24px] sm:w-[219px] sm:h-[32px]"
      />

      <span className="t-xl text-gray-60 mt-4 md:mt-0">
        &copy; xieffect.ru
        {new Date().getFullYear()}
      </span>
    </div>
  </footer>
);

export default Footer;
