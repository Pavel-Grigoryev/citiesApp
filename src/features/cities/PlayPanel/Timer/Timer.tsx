import React from 'react';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import s from './Timer.module.scss';
import { useTimer } from '@/features/cities/PlayPanel/Timer/hooks/useTimer';

dayjs.extend(duration);

export const Timer = () => {
  const { formatTime, progressWidth, timer } = useTimer();

  return (
    <div className={s.timer}>
      <div className={s.timeText}>{formatTime(timer)}</div>
      <div
        className={s.lineProgress}
        style={{
          width: `${progressWidth}%`,
        }}
      />
    </div>
  );
};
