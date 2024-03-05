import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useState } from 'react';

export interface IAnimTextProps {
  delay: number;
}

export interface IRedoAnimTextProps {
  delay: number;
}

export const TypewriterEffect = ({ delay }: IRedoAnimTextProps) => {
  const textIndex = useMotionValue(0);
  const texts = [
    'Проводите онлайн занятия',
    'Делитесь материалами со студентами',
    'Общайстесь  с учениками',
    'Тестируйте учеников',
    'Задавайте задания',
  ];

  const baseText = useTransform(textIndex, (latest) => texts[latest] || '');
  const count = useMotionValue(0);
  const displayText = useTransform(count, (latest) => baseText.get().slice(0, latest));
  const updatedThisRound = useMotionValue(true);

  // console.log('baseText', baseText);
  // console.log('count', count);
  // console.log('displayText', displayText);
  // console.log('updatedThisRound', updatedThisRound);

  useEffect(() => {
    animate(count, 60, {
      type: 'tween',
      delay: delay,
      duration: 3,
      ease: 'easeIn',
      repeat: Infinity,
      repeatType: 'reverse',
      repeatDelay: 2,
      onUpdate(latest) {
        if (updatedThisRound.get() === true && latest > 0) {
          updatedThisRound.set(false);
        } else if (updatedThisRound.get() === false && latest === 0) {
          if (textIndex.get() === texts.length - 1) {
            textIndex.set(0);
          } else {
            textIndex.set(textIndex.get() + 1);
          }
          updatedThisRound.set(true);
        }
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.span className="text-gray-0 inline text-[80px]">
      <motion.span>{displayText}</motion.span>
      {/* <motion.span> text </motion.span> */}
    </motion.span>
  );
};
