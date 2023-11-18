import { createSelector } from '@reduxjs/toolkit';
import { AppRootState } from '@/common/types';

export const selectIsPlaying = (state: AppRootState) => state.cities.isPlaying;
export const selectIsYourAnswer = (state: AppRootState) => state.cities.isYourAnswer;
export const selectNamedCities = (state: AppRootState) => state.cities.namedCities;
export const selectExistCities = (state: AppRootState) => state.cities.existCities;
export const selectLastEnteredCity = createSelector(
  selectNamedCities,
  (cities) => cities[cities.length - 1]
);
export const selectIsGameOver = (state: AppRootState) => state.cities.isGameOver;
