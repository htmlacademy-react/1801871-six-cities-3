import { createReducer } from '@reduxjs/toolkit';
import { incCountAction } from './actions';
import { City } from '../types/offers';
import { CITES } from '../cities';

type stateType = {
  count: number;
  city: City;
}

const initialState:stateType = {
  count: 0,
  city: CITES[0]
};

export const updateCity = createReducer(initialState, (builder) => {
  builder
    .addCase(incCountAction, (state:stateType) => {
      state.count += 1;
    });
});
