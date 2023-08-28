import Image from 'next/image';

const EducationalPlatform = () => (
  <section className="my-[16px] p-[16px] sm:px-8 sm:py-[48px] 2xl:p-[48px] sm:my-0 sm:mb-[64px] bg-gray-10 rounded-[16px] sm:rounded-[24px] 2xl:rounded-[32px]">
    <Image
      width={200}
      height={24}
      quality={100}
      alt="full logo xi.effect"
      src="/iconssite/full.svg"
      className="mb-[32px]"
    />

    <h3 className="mb-[64px] leading-[110%] font-semibold text-[24px] sm:text-[40px] 2xl:text-[40px]">
      Цифровая образовательная платформа
    </h3>

    <p className="leading-[130%] text-[16px] sm:text-[28px] w-[95%]">
      Она позволяет создавать образовательные сообщества и использовать их в обучении: онлайн,
      смешанного или офлайн. Мы ставим перед собой задачу сделать образование качественнее
      и доступнее с помощью технологий.
    </p>
  </section>
);

export default EducationalPlatform;
