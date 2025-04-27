import { createReducer } from '@reduxjs/toolkit';
import { changeSort, setActiveCity } from './actions';
import { City, Offer } from '../types/offers';
import { CITES } from '../cities';
import { Offers } from '../mocks/offers';
import { TSortKey } from '../types/sort';

type stateType = {
  city: City;
  offers: Offer[];
  currentSort: TSortKey;
}

const initialState:stateType = {
  city: CITES[0],
  offers: Offers,
  currentSort: 'Popular'
};

export const updateCity = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.currentSort = action.payload;
    });
});
