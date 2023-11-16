import React, { FC } from 'react';
import s from './Button.module.scss';

type Props = {
  name: string;
  onclickHandler: () => void;
};
export const Button: FC<Props> = ({ onclickHandler, name }) => {
  return (
    <button
      className={s.button}
      type="button"
      onClick={() => {
        onclickHandler();
      }}
    >
      {name}
    </button>
  );
};
