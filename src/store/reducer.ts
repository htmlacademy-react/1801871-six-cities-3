import { createReducer } from '@reduxjs/toolkit';
import { changeSort, setActiveCity } from './actions';
import { City, Offer } from '../types/offers';
import { CITES } from '../cities';
import { Offers } from '../mocks/offers';
import { TSortDictItem } from '../types/sort';

type stateType = {
  city: City;
  offers: Offer[];
  currentSort: TSortDictItem;
}

const initialState:stateType = {
  city: CITES[0],
  offers: Offers,
  currentSort: {
    label: 'Popular',
    handler: () => 0
  }
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
