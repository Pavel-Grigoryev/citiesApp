import React, { ChangeEvent, useState } from 'react';
import cn from 'classnames';
import { useAppSelector } from '@/common/hooks';
import { citiesSelectors } from '@/features/cities';
import { ButtonIcon } from '@/components/common/ButtonIcon';
import s from './CitiesSender.module.scss';

export const CitiesSender = () => {
  const isYourAnswer = useAppSelector(citiesSelectors.selectIsYourAnswer);
  const selectNamedCities = useAppSelector(citiesSelectors.selectNamedCities);
  const placeholderAnswer = isYourAnswer ? 'Ожидаем ответа соперника...' : 'Знаете город на букву ';
  const placeholderText =
    selectNamedCities.length === 0
      ? 'Напишите любой город, например: Где вы живете?'
      : placeholderAnswer;

  const [textInput, setTextInput] = useState('');

  const onchange = (e: ChangeEvent<HTMLInputElement>) => {
    setTextInput(e.currentTarget.value);
  };

  return (
    <div className={s.sender}>
      <input
        className={cn(s.input, { [s.inputDis]: !isYourAnswer })}
        type="text"
        placeholder={placeholderText}
        value={textInput}
        onChange={onchange}
        disabled={!isYourAnswer}
      />
      <div className={s.butWrapper}>
        <ButtonIcon disabled={!isYourAnswer} icon="paperPlane" onClickHandler={() => {}} />
      </div>
    </div>
  );
};
