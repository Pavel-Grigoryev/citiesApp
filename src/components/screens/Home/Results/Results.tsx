import React from 'react';
import cn from 'classnames';
import s from './Results.module.scss';
import { useActions, useAppSelector } from '@/common/hooks';
import { citiesActions, citiesSelectors } from '@/features/cities';
import { Button } from '@/components/common/Button';

export const Results = () => {
  const isYourAnswer = useAppSelector(citiesSelectors.selectIsYourAnswer);
  const namedCities = useAppSelector(citiesSelectors.selectNamedCities);
  const lastEnteredCity = useAppSelector(citiesSelectors.selectLastEnteredCity);
  const { setIsYourAnswer, setIsGameOver, clearNamedCity } = useActions(citiesActions);

  const onclickHandler = () => {
    setIsYourAnswer({ isYourAnswer: true });
    setIsGameOver({ isGameOver: false });
    clearNamedCity();
  };

  return (
    <section className={s.results}>
      {namedCities.length ? (
        <>
          <p className={s.title}>
            {isYourAnswer ? (
              <>
                {' '}
                К сожалению твое время вышло! <br /> Твой противник победил!{' '}
              </>
            ) : (
              <>
                {' '}
                Поздравляем тебя с победой! <br /> Твой противник не вспомнил нужный город!{' '}
              </>
            )}
          </p>
          <p className={cn(s.time, { [s.timeRobot]: isYourAnswer })}>00:00</p>
          <p>
            {' '}
            Всего было перечислено городов: {namedCities.length} <br /> Очень не плохой результат!
          </p>
          <p>
            {' '}
            Последний город названный победителем <br />{' '}
            <span className={s.lastCity}>{lastEnteredCity.name}</span>
          </p>
          <Button name="Начать новую игру" onclickHandler={onclickHandler} />
        </>
      ) : (
        <p>
          {' '}
          Ничья! <br /> Никто не назвал ни одного города.
        </p>
      )}
    </section>
  );
};
