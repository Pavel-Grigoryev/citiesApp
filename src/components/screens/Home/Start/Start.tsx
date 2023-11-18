'use client';

import React from 'react';
import s from './Start.module.scss';
import { Button } from '@/components/common/Button';
import { useActions } from '@/common/hooks';
import { citiesActions } from '@/features/cities';

const rulesData: RuleData[] = [
  {
    id: 1,
    desc: 'Запрещается повторение городов.',
  },
  {
    id: 2,
    desc: 'Названий городов на твердый “ъ” и мягкий “ъ” знак нет. Из-за этого мы пропускаем эту букву и игрок должен назвать город на букву стоящую перед ъ или ь знаком.',
  },
  {
    id: 3,
    desc: 'Каждому игроку дается 2 минуты на размышления, если спустя это время игрок не вводит слово он считается проигравшим.',
  },
];

export const Start = () => {
  const { fetchCities } = useActions(citiesActions);
  const rules = rulesData.map((rule) => (
    <li key={rule.id} className={s.listItem}>
      {rule.desc}
    </li>
  ));

  const onclickHandler = () => {
    fetchCities();
  };

  return (
    <section className={s.startBlock}>
      <header className={s.header}>
        <h1>Игра в города на время</h1>
      </header>
      <div className={s.textBlock}>
        <p className={s.title}>Цель: Назвать как можно больше реальных городов.</p>
        <ul className={s.list}>{rules}</ul>
        <div className={s.butWrapper}>
          <Button name="Начать игру" onclickHandler={onclickHandler} />
        </div>
      </div>
    </section>
  );
};

// Types

type RuleData = {
  id: number;
  desc: string;
};
