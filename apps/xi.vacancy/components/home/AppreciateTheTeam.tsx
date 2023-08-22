import Image from 'next/image';

const AppreciateTheTeam = () => (
  <section className="mb-4 p-4 sm:p-8 sm:mb-16 bg-gray-10 rounded-[16px] sm:rounded-[24px] 2xl:rounded-[32px] 2xl:p-[48px]">
    <h2 className="leading-[110%] font-semibold mb-[32px] sm:mb-[32px] 2xl:mb-[48px] text-[24px] sm:text-[48px] 2xl:text-[64px]">
      <span className="block mb-[16px]">Xi.effect делают люди</span>
      Мы ценим коллег и свою команду
    </h2>

    <div className="flex flex-col xl:flex-row mb-[32px] 2xl:mb-[48px]">
      <Image
        width={1916}
        height={1078}
        quality={100}
        alt="appreciate the team"
        src="/home/appreciate-the-team-1.jpg"
        className="w-full object-cover rounded-[16px] mb-4 xl:mb-0 h-[200px] sm:h-[300px] 2xl:h-[400px] xl:mr-[32px] xl:basis-[49%]"
      />

      <div className="xl:basis-[49%] xl:my-auto">
        <h3 className="leading-[110%] font-semibold mb-2 sm:mb-4 text-[20px] sm:text-[32px] 2xl:text-[32px]">
          Ассинхронное взаимодействие
        </h3>

        <p className="w-[90%] leading-[130%] text-[16px] sm:text-[24px] 2xl:text-[28px] 2xl:w-full">
          Можешь уделять столько времени, сколько у тебя есть и когда оно есть, неважно из какого
          ты города и в каком часовом поясе живёшь.
        </p>
      </div>
    </div>

    <div className="flex flex-col xl:flex-row mb-[32px] 2xl:mb-[48px]">
      <Image
        width={1916}
        height={1270}
        quality={100}
        className="xl:order-2 w-full object-cover rounded-[16px] sm:rounded-[24px] mb-4 xl:mb-0 h-[200px] sm:h-[300px] 2xl:h-[400px] xl:basis-[49%]"
        src="/home/appreciate-the-team-2.jpg"
        alt="appreciate the team"
      />

      <div className="xl:basis-[49%] xl:my-auto xl:mr-[32px] xl:order-1">
        <h3 className="leading-[110%] font-semibold mb-2 sm:mb-4 text-[20px] sm:text-[32px] 2xl:text-[32px]">
          Открытый исходный код
        </h3>

        <p className="leading-[130%] text-[16px] sm:text-[24px] 2xl:text-[28px] 2xl:w-[90%]">
          Возможность добавить строчку в резюме, присоединиться к сообществу OpenSource и создать
          классный продукт.
        </p>
      </div>
    </div>

    <div className="flex flex-col xl:flex-row">
      <Image
        width={1916}
        height={1278}
        quality={100}
        className="w-full object-cover rounded-[16px] sm:rounded-[24px] mb-4 xl:mb-0 h-[200px] sm:h-[300px] 2xl:h-[400px] xl:mr-[32px] xl:basis-[49%]"
        src="/home/appreciate-the-team-3.jpg"
        alt="appreciate the team"
      />

      <div className="xl:basis-[49%] xl:my-auto">
        <h3 className="leading-[110%] font-semibold mb-2 sm:mb-4 text-[20px] sm:text-[32px] 2xl:text-[32px]">
          Ценим за дело, а не за должность
        </h3>

        <p className="leading-[130%] text-[16px] sm:text-[24px] 2xl:text-[28px]">
          В Xi.effect можно расти вертикально, как руководитель, или горизонтально, как эксперт.
        </p>
      </div>
    </div>
  </section>
);

export default AppreciateTheTeam;
