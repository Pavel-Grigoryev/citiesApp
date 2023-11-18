import { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { useActions, useAppSelector } from '@/common/hooks';
import { citiesActions, citiesSelectors } from '@/features/cities';
import { getLastLetter } from '@/common/utilites';
import { NamedCity } from '@/features/cities/cities-slice';

export const useCitiesSender = () => {
  const isYourAnswer = useAppSelector(citiesSelectors.selectIsYourAnswer);
  const namedCities = useAppSelector(citiesSelectors.selectNamedCities);
  const { setNamedCity, setIsYourAnswer } = useActions(citiesActions);
  const existCities = useAppSelector(citiesSelectors.selectExistCities);
  const lastEnteredCity = useAppSelector(citiesSelectors.selectLastEnteredCity);
  let lastLetter = '';
  if (lastEnteredCity?.name) {
    lastLetter = getLastLetter(lastEnteredCity.name);
  }
  const placeholderAnswer = isYourAnswer
    ? `Знаете город на букву "${lastLetter.toUpperCase()}"?`
    : 'Ожидаем ответа соперника...';
  const placeholderText =
    namedCities.length === 0 ? 'Напишите любой город, например: Где вы живете?' : placeholderAnswer;

  const [textInput, setTextInput] = useState('');
  const [error, setError] = useState<null | string>(null);

  const onchange = (e: ChangeEvent<HTMLInputElement>) => {
    setError(null);
    setTextInput(e.currentTarget.value);
  };
  const checkError = (city: string) => {
    let result = true;
    if (namedCities.length) {
      if (city[0].toUpperCase() !== lastLetter.toUpperCase()) {
        setError(`Введите город на букву "${lastLetter.toUpperCase()}"`);
        result = false;
        return result;
      }
    }
    if (existCities.findIndex((exCity) => exCity === city) < 0) {
      setError('Такого города не существует');
      result = false;
      return result;
    }
    if (namedCities.findIndex((namedCity) => namedCity.name === city) > -1) {
      setError('Такой город уже называли');
      result = false;
      return result;
    }
    return result;
  };

  const onclickHandler = () => {
    const inputCity = textInput.trim();
    const result = checkError(inputCity);
    if (result) {
      const namedCity: NamedCity = { id: `user${nanoid()}`, name: inputCity };
      setNamedCity({ city: namedCity });
      setTextInput('');
      setIsYourAnswer({ isYourAnswer: false });
      setError(null);
    }
  };

  const onKeyHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onclickHandler();
    }
  };

  useEffect(() => {
    if (!isYourAnswer) {
      const interval = Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000;
      const timeoutId = setTimeout(() => {
        for (let i = 0; i < existCities.length; i++) {
          const result = checkError(existCities[i]);
          if (result) {
            const namedCity: NamedCity = { id: `robot${nanoid()}`, name: existCities[i] };
            setNamedCity({ city: namedCity });
            setTextInput('');
            setIsYourAnswer({ isYourAnswer: true });
            setError(null);
            break;
          }
        }
      }, interval);

      return () => {
        clearInterval(timeoutId);
      };
    }
    return undefined;
  }, [namedCities]);

  return {
    onKeyHandler,
    onclickHandler,
    onchange,
    isYourAnswer,
    placeholderText,
    textInput,
    error,
  };
};
