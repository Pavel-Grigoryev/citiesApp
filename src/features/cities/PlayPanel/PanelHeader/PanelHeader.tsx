import React from 'react';
import { useAppSelector } from '@/common/hooks';
import { citiesSelectors } from '@/features/cities';
import s from './PanelHeader.module.scss';

export const PanelHeader = () => {
  const isYourAnswer = useAppSelector(citiesSelectors.selectIsYourAnswer);

  return (
    <div className={s.panelHeader}>
      {isYourAnswer ? 'Сейчас ваша очередь' : 'Сейчас очередь соперника'}
    </div>
  );
};
