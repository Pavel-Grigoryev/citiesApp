import React from 'react';
import s from './PlayPanel.module.scss';
import { PanelHeader } from '@/features/cities/PlayPanel/PanelHeader';
import { useAppSelector } from '@/common/hooks';
import { citiesSelectors } from '@/features/cities';
import { CitiesSender } from '@/features/cities/PlayPanel/CitiesSender';
import { Timer } from '@/features/cities/PlayPanel/Timer';

export const PlayPanel = () => {
  const namedCities = useAppSelector(citiesSelectors.selectNamedCities);
  const citiesArr = namedCities.map((city) => {
    const style = city.id.startsWith('user') ? s.userStyle : s.robotStyle;
    return (
      <div className={style} key={city.id}>
        {city.name}
      </div>
    );
  });
  return (
    <div className={s.playPanel}>
      <div className={s.panelHeaderCont}>
        <PanelHeader />
        <div className={s.timerWrapper}>
          <Timer />
        </div>
      </div>
      <div className={s.playDeskCont}>
        <div className={s.playDesk}>
          {namedCities.length === 0 ? (
            <p className={s.startText}>Первый участник вспоминает города...</p>
          ) : (
            citiesArr
          )}
        </div>
        {!!namedCities.length && (
          <p className={s.citiesQuantText}>Всего перечислено городов: {namedCities.length}</p>
        )}
      </div>

      <CitiesSender />
    </div>
  );
};
