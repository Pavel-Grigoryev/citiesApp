import { AppRootState } from '@/common/types';

export const selectIsPlaying = (state: AppRootState) => state.cities.isPlaying;
export const selectIsYourAnswer = (state: AppRootState) => state.cities.isYourAnswer;
export const selectNamedCities = (state: AppRootState) => state.cities.namedCities;
