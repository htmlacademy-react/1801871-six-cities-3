import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { setActiveCity } from './actions';
import { City } from '../types/offers';
import { CITIES } from '../сities';

type stateType = {
  count: number;
  city: City;
}

const initialState:stateType = {
  count: 0,
  city: CITIES[0]
};

export const updateCity = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action: PayloadAction<City>) => {
      state.city = action.payload;
    });
});
