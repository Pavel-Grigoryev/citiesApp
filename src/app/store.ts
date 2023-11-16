import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { citiesReducer } from '@/features/cities';

export const rootReducer = combineReducers({
  cities: citiesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
