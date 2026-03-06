'use client';
import React from 'react';
import Snowfall from 'react-snowfall';
import { useMediaQuery } from '@xipkg/utils';

export const SnowAnimation = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [showSnow, setShowSnow] = React.useState(false);

  // Проверка, находится ли текущая дата в периоде показа снега (10 декабря - 10 февраля)
  const isSnowPeriod = React.useMemo(() => {
    const now = new Date();
    const month = now.getMonth() + 1; // getMonth() возвращает 0-11, поэтому +1
    const day = now.getDate();

    // Декабрь (12): с 10 числа
    if (month === 12 && day >= 10) {
      return true;
    }
    // Январь (1): весь месяц
    if (month === 1) {
      return true;
    }
    // Февраль (2): до 10 числа включительно
    if (month === 2 && day <= 10) {
      return true;
    }

    return false;
  }, []);

  // Задержка начала анимации снега на 20 секунд (только в период показа)
  React.useEffect(() => {
    if (!isSnowPeriod) {
      return;
    }

    const timer = setTimeout(() => {
      setShowSnow(true);
    }, 20000);

    return () => clearTimeout(timer);
  }, [isSnowPeriod]);

  if (!showSnow || isMobile || !isSnowPeriod) {
    return null;
  }

  return (
    <Snowfall
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: -11,
      }}
      snowflakeCount={350}
      wind={[-1, 3]}
      speed={[0.2, 1]}
    />
  );
};
