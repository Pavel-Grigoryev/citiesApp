import React from 'react';
import cn from 'classnames';
import { ButtonIcon } from '@/components/common/ButtonIcon';
import s from './CitiesSender.module.scss';
import { useCitiesSender } from '@/features/cities/PlayPanel/CitiesSender/hooks/useCitiesSender';

export const CitiesSender = () => {
  const {
    onKeyHandler,
    onclickHandler,
    onchange,
    placeholderText,
    textInput,
    error,
    isYourAnswer,
  } = useCitiesSender();

  return (
    <div className={s.sender}>
      <input
        className={cn(s.input, { [s.inputDis]: !isYourAnswer })}
        type="text"
        placeholder={placeholderText}
        value={textInput}
        onChange={onchange}
        disabled={!isYourAnswer}
        onKeyDown={onKeyHandler}
      />
      <div className={s.butWrapper}>
        <ButtonIcon disabled={!isYourAnswer} icon="paperPlane" onClickHandler={onclickHandler} />
      </div>
      {!!error && isYourAnswer && <div className={s.error}>{error}</div>}
    </div>
  );
};
