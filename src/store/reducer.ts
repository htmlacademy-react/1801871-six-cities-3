import { createReducer } from '@reduxjs/toolkit';
import { incCountAction } from './actions';
import { City } from '../types/offers';
import { CITY } from '../сities';

type stateType = {
  count: number;
  city: City;
}

const initialState:stateType = {
  count: 0,
  city: CITY
};

export const updateCity = createReducer(initialState, (builder) => {
  builder
    .addCase(incCountAction, (state:stateType) => {
      state.count += 1;
    });
});
