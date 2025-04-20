import { createReducer } from '@reduxjs/toolkit';
import { updateCityAction } from './actions';
import { City } from '../types/offers';
import { CITES } from '../cities';

type stateType = {
  city: City;
}

const initialState:stateType = {
  city: CITES[0]
};

export const updateCity = createReducer(initialState, (builder) => {
  builder
    .addCase(updateCityAction, (state, action) => {
      state.city = action.payload;
    });
});
