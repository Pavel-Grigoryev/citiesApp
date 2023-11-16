import React from 'react';
import s from './PlayPanel.module.scss';
import { PanelHeader } from '@/features/cities/PlayPanel/PanelHeader';
import { useAppSelector } from '@/common/hooks';
import { citiesSelectors } from '@/features/cities';
import { CitiesSender } from '@/features/cities/PlayPanel/CitiesSender';

export const PlayPanel = () => {
  const namedCities = useAppSelector(citiesSelectors.selectNamedCities);

  return (
    <div className={s.playPanel}>
      <PanelHeader />
      <div className={s.playDesk}>
        {namedCities.length === 0 && (
          <p className={s.startText}>Первый участник вспоминает города...</p>
        )}
      </div>
      <CitiesSender />
    </div>
  );
};
