import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { Duration } from 'dayjs/plugin/duration';
import { useActions, useAppSelector } from '@/common/hooks';
import { citiesActions, citiesSelectors } from '@/features/cities';

export const useTimer = () => {
  const [timer, setTimer] = useState(dayjs.duration(2, 'minutes'));
  const [timerId, setTimerId] = useState<ReturnType<typeof setInterval> | undefined>(undefined);
  const isYourAnswer = useAppSelector(citiesSelectors.selectIsYourAnswer);
  const [progressWidth, setProgressWidth] = useState(0);
  const { setIsGameOver } = useActions(citiesActions);

  useEffect(() => {
    stop();
    const newTimerId = setInterval(() => {
      setTimer((prevTimer) => {
        const newTimer = prevTimer?.subtract(1, 'second');
        if (newTimer?.asSeconds() === 0) {
          clearInterval(newTimerId);
          setIsGameOver({ isGameOver: true });
        }
        return newTimer;
      });
      setTimerId(newTimerId);
    }, 1000);
    return () => {
      clearInterval(newTimerId);
    };
  }, [isYourAnswer]);

  useEffect(() => {
    const width = (timer.asSeconds() / (2 * 60)) * 100;
    setProgressWidth(width);
  }, [timer]);
  const stop = () => {
    clearInterval(timerId);
    setTimerId(undefined);
    setTimer(dayjs.duration(2, 'minutes'));
  };

  const formatTime = (time: Duration) => {
    const minutes = time.minutes();
    const seconds = time.seconds();
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return { progressWidth, formatTime, timer };
};
