import { createReducer } from '@reduxjs/toolkit';
import { changeSort, updateCityAction } from './actions';
import { City, Offer } from '../types/offers';
import { CITES } from '../cities';
import { Offers } from '../mocks/offers';
import { Sort } from '../types/sort';

type stateType = {
  city: City;
  offers: Offer[];
  currentSort: Sort;
}

const initialState:stateType = {
  city: CITES[0],
  offers: Offers,
  currentSort: 'Popular'
};

export const updateCity = createReducer(initialState, (builder) => {
  builder
    .addCase(updateCityAction, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.currentSort = action.payload;
    });
});
