import React, { FC } from 'react';
import cn from 'classnames';
import { IconName, iconsData } from '@/common/data/iconsData';
import s from './ButtonIcon.module.scss';

type Props = {
  icon: IconName;
  onClickHandler: () => void;
  disabled: boolean;
};

export const ButtonIcon: FC<Props> = ({ onClickHandler, icon, disabled }) => {
  const Icon = iconsData[icon];
  return (
    <button
      aria-label="sent name of the city"
      type="button"
      onClick={() => {
        onClickHandler();
      }}
      className={cn(s.button, { [s.butDis]: disabled })}
      disabled={disabled}
    >
      <Icon className={s.icon} />
    </button>
  );
};
