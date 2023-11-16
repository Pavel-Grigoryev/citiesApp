import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { citiesActions } from '@/features/cities/index';

// Thunks

const fetchCities = createAsyncThunk('cities/fetchCities', (_, thunkAPI) => {
  const { dispatch } = thunkAPI;
  dispatch(citiesActions.setIsPlaying({ isPlaying: true }));
});

export const slice = createSlice({
  name: 'cities',
  initialState: {
    isPlaying: false,
    isYourAnswer: true,
    cities: [],
    namedCities: [],
  },
  reducers: {
    setIsPlaying(state, action: PayloadAction<{ isPlaying: boolean }>) {
      state.isPlaying = action.payload.isPlaying;
    },
    setIsYourAnswer(state, action: PayloadAction<{ isYourAnswer: boolean }>) {
      state.isYourAnswer = action.payload.isYourAnswer;
    },
  },
});

export const asyncCitiesActions = { fetchCities };
