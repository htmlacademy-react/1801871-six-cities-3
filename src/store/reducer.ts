import { createReducer } from '@reduxjs/toolkit';
import { updateCityAction } from './actions';
import { City, Offer } from '../types/offers';
import { CITES } from '../cities';
import { Offers } from '../mocks/offers';

type stateType = {
  city: City;
  offers: Offer[];
}

const initialState:stateType = {
  city: CITES[0],
  offers: Offers
};

export const updateCity = createReducer(initialState, (builder) => {
  builder
    .addCase(updateCityAction, (state, action) => {
      state.city = action.payload;
    });
});
