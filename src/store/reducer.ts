import { createReducer } from '@reduxjs/toolkit';
import { changeSort, loadQuestions, setActiveCity, setLoadingStatus } from './actions';
import { City, Offer } from '../types/offers';
import { CITIES } from '../сities';

import { TSortKey } from '../types/sort';


type stateType = {
  city: City;
  offers: Offer[];
  currentSort: TSortKey;
  isLoading: boolean;
}

const initialState:stateType = {
  city: CITIES[0],
  offers: [],
  currentSort: 'Popular',
  isLoading: false
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
    })
    .addCase(setLoadingStatus, (state, action)=> {
      state.isLoading = action.payload;
    });
});
