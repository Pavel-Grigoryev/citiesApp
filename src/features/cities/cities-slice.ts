import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { citiesActions } from '@/features/cities/index';
import { AppRootState } from '@/common/types';
import { citiesData } from '@/common/data/citiesData';

// Thunks

const fetchCities = createAsyncThunk('cities/fetchCities', (_, thunkAPI) => {
  const { dispatch, getState } = thunkAPI;
  const state = getState() as AppRootState;
  const { existCities } = state.cities;
  if (existCities.length === 0) {
    dispatch(citiesActions.setCities({ cities: citiesData }));
  }
  dispatch(citiesActions.setIsPlaying({ isPlaying: true }));
});
export const slice = createSlice({
  name: 'cities',
  initialState: {
    isPlaying: false,
    isYourAnswer: true,
    isGameOver: false,
    existCities: [] as string[],
    namedCities: [] as NamedCity[],
  },
  reducers: {
    setIsPlaying(state, action: PayloadAction<{ isPlaying: boolean }>) {
      state.isPlaying = action.payload.isPlaying;
    },
    setIsYourAnswer(state, action: PayloadAction<{ isYourAnswer: boolean }>) {
      state.isYourAnswer = action.payload.isYourAnswer;
    },
    setCities(state, action: PayloadAction<{ cities: string[] }>) {
      state.existCities = action.payload.cities;
    },
    setNamedCity(state, action: PayloadAction<{ city: NamedCity }>) {
      state.namedCities.push(action.payload.city);
    },
    setIsGameOver(state, action: PayloadAction<{ isGameOver: boolean }>) {
      state.isGameOver = action.payload.isGameOver;
    },
  },
});

// Actions
export const asyncCitiesActions = { fetchCities };

// Types

export type NamedCity = {
  id: string;
  name: string;
};
