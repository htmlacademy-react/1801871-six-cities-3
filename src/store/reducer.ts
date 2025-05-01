import { createReducer } from '@reduxjs/toolkit';
import { changeSort, loadQuestions, setActiveCity, setAuthorization, setLoadingStatus } from './actions';
import { City, Offer } from '../types/offers';
import { CITIES } from '../сities';

import { TSortKey } from '../types/sort';
import { AuthState } from '../const';


type stateType = {
  city: City;
  offers: Offer[];
  currentSort: TSortKey;
  isLoading: boolean;
  authStatus: AuthState;
}

const initialState:stateType = {
  city: CITIES[0],
  offers: [],
  currentSort: 'Popular',
  isLoading: false,
  authStatus: AuthState.Unknown
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
    })
    .addCase(setAuthorization, (state, action)=> {
      state.authStatus = action.payload;
    });
});
