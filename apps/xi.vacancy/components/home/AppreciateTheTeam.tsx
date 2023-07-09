const AppreciateTheTeam = () => (
  <section className="my-8 p-8 md:p-16 sm:my-16 bg-gray-10 rounded-[32px]">
    <h2 className="font-semibold mb-16 text-[32px] sm:text-[64px] xl:text-[80px]">
      <span className="block">Xi.effect делают люди</span>
      Мы ценим коллег и свою команду
    </h2>

    <div className="flex flex-col xl:flex-row mb-16">
      <img
        className="w-full object-cover rounded-[24px] mb-8 xl:mb-0 h-[250px] sm:h-[520px] xl:mr-[32px] xl:basis-[60%]"
        src="/home/appreciate-the-team-1.jpg"
        alt="appreciate the team"
      />

      <div className="xl:basis-[40%]">
        <h3 className="font-semibold mb-8 text-[24px] sm:text-[40px] min-[1700px]:text-[48px]">
          Ассинхронное взаимодействие
        </h3>

        <p className="text-[16px] sm:text-[32px] min-[1700px]:text-[40px]">
          Можешь уделять столько времени, сколько у тебя есть и когда оно есть, неважно из какого ты
          города и в каком часовом поясе живёшь.
        </p>
      </div>
    </div>

    <div className="flex flex-col xl:flex-row mb-16">
      <img
        className="w-full object-cover rounded-[24px] mb-8 xl:mb-0 h-[250px] sm:h-[520px] xl:basis-[60%] xl:order-2"
        src="/home/appreciate-the-team-2.jpg"
        alt="appreciate the team"
      />

      <div className="xl:basis-[40%] xl:mr-[32px] xl:order-1">
        <h3 className="font-semibold mb-8 text-[24px] sm:text-[40px] min-[1700px]:text-[48px]">
          Открытый исходный код
        </h3>

        <p className="text-[16px] sm:text-[32px] min-[1700px]:text-[40px]">
          Возможность добавить строчку в резюме, присоединиться к сообществу OpenSource и создать
          классный продукт.
        </p>
      </div>
    </div>

    <div className="flex flex-col xl:flex-row">
      <img
        className="w-full object-cover rounded-[24px] mb-8 xl:mb-0 h-[250px] sm:h-[520px] xl:mr-[32px] xl:basis-[60%]"
        src="/home/appreciate-the-team-3.jpg"
        alt="appreciate the team"
      />

      <div className="xl:basis-[40%]">
        <h3 className="font-semibold mb-8 text-[24px] sm:text-[40px] min-[1700px]:text-[48px]">
          Ценим за дело, а не за должность
        </h3>
        <p className="text-[16px] sm:text-[32px] min-[1700px]:text-[40px]">
          В Xi.effect можно расти вертикально, как руководитель, или горизонтально, как эксперт.
        </p>
      </div>
    </div>
  </section>
);

export default AppreciateTheTeam;
