import { useState, useEffect } from 'react';

const useVacancyDates = (vacancyList: { id: string }[]) => {
  const [dates, setDates] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const setVacancyDate = (vacancyId: string): string => {
      const today = new Date();
      const randomDays = Math.floor(Math.random() * (7 - 2 + 1)) + 2;

      let pastDate: Date;
      const storageDate = localStorage.getItem(vacancyId);

      if (storageDate) {
        pastDate = new Date(storageDate);

        const daysDiff = (today.getTime() - pastDate.getTime()) / (1000 * 3600 * 24);

        if (daysDiff > 7) {
          pastDate = new Date(today);
          pastDate.setDate(today.getDate() - randomDays);
        }
      } else {
        pastDate = new Date(today);
        pastDate.setDate(today.getDate() - randomDays);
      }

      const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
      const newDate = pastDate.toLocaleDateString('ru-RU', options);

      localStorage.setItem(`${vacancyId}`, pastDate.toISOString());
      return newDate;
    };

    const newDates: { [key: string]: string } = {};
    vacancyList.forEach((vacancy) => {
      newDates[vacancy.id] = setVacancyDate(vacancy.id);
    });
    setDates(newDates);
  }, [vacancyList]);

  return dates;
};

export default useVacancyDates;
