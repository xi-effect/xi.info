import Image from 'next/image';

const Footer = () => (
  <footer>
    <div className="my-16 p-16 bg-gray-10 rounded-[32px] relative">
      <h4 className="text-[80px] font-semibold mb-16">Приходи работать вместе</h4>

      <p className="mb-16 text-5xl max-w-4xl">
        Напиши пару слов о себе и о том, какая вакансия может быть вам интересна
      </p>

      <button
        type="button"
        className="bg-brand-80 text-gray-0 px-16 py-6 rounded-3xl t-l h-[112px] w-[507px]"
      >
        Отправить резюме
      </button>

      <img
        alt="team working"
        src="/work-together.jpg"
        className="absolute top-0 right-0 object-cover w-[600px] h-full rounded-r-3xl"
      />
    </div>

    <div className="p-16 flex items-center justify-between">
      <Image src="/team.svg" width={219} height={32} alt="logo xi.effect" />

      <span className="t-xl text-gray-60">
        &copy; xieffect.ru
        {new Date().getFullYear()}
      </span>
    </div>
  </footer>
);

export default Footer;
