import { useState, useEffect } from 'react';

type DatesMapT = { [key: string]: string };
type VacancyT = { id: string };

const MIN_DAYS_DIFF = 2;
const MAX_DAYS_DIFF = 7;
const DAY_IN_MILLISECONDS = 1000 * 3600 * 24;
const HOUR_IN_MILLISECONDS = 1000 * 3600;
const DATE_OPTIONS: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };

const today = new Date();

const getRandomDaysDiff = () =>
  Math.floor(Math.random() * (MAX_DAYS_DIFF - MIN_DAYS_DIFF + 1)) + MIN_DAYS_DIFF;

const getDaysDiff = (today: Date, pastDate: Date) =>
  (today.getTime() - pastDate.getTime() - HOUR_IN_MILLISECONDS) / DAY_IN_MILLISECONDS;

const getPastDate = (daysAgo: number): Date => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date;
};

const useVacancyDates = (vacancyList: VacancyT[]) => {
  const [dates, setDates] = useState<DatesMapT>({});

  useEffect(() => {
    const setVacancyDate = (vacancyId: string): string => {
      let pastDate: Date;
      const storageDate = localStorage.getItem(vacancyId);

      if (storageDate) {
        pastDate = new Date(storageDate);
        const daysDiff = getDaysDiff(today, pastDate);

        if (daysDiff > MAX_DAYS_DIFF) {
          pastDate = getPastDate(getRandomDaysDiff());
        }
      } else {
        pastDate = getPastDate(getRandomDaysDiff());
      }

      localStorage.setItem(`${vacancyId}`, pastDate.toISOString());
      return pastDate.toLocaleDateString('ru-RU', DATE_OPTIONS);
    };

    const newDates: DatesMapT = vacancyList.reduce((acc, vacancy) => {
      acc[vacancy.id] = setVacancyDate(vacancy.id);
      return acc;
    }, {});
    setDates(newDates);
  }, [vacancyList]);

  return dates;
};

export default useVacancyDates;
