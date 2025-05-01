import { createReducer } from '@reduxjs/toolkit';
import { changeSort, loadQuestions, setActiveCity } from './actions';
import { City, Offer } from '../types/offers';
import { CITIES } from '../сities';

import { TSortKey } from '../types/sort';


type stateType = {
  city: City;
  offers: Offer[];
  currentSort: TSortKey;
}

const initialState:stateType = {
  city: CITIES[0],
  offers: [],
  currentSort: 'Popular'
};

export const updateCity = createReducer(initialState, (builder) => {
  builder
    .addCase(setActiveCity, (state, action) => {
      state.city = action.payload;
    })
    .addCase(changeSort, (state, action) => {
      state.currentSort = action.payload;
    })
    .addCase(loadQuestions, (state, action)=> {
      state.offers = action.payload;
    });
});
