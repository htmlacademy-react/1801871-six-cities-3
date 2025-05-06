import { createReducer } from '@reduxjs/toolkit';
import { changeSort, loadQuestions, setActiveCity, setAuthorization, setErrorText, setLoadingStatus, setUserInfo } from './actions';
import { City, Offer } from '../types/offers';
import { CITIES } from '../сities';

import { TSortKey } from '../types/sort';
import { AuthState } from '../const';
import { UserData } from '../types/user';


type stateType = {
  city: City;
  offers: Offer[];
  currentSort: TSortKey;
  isLoading: boolean;
  authStatus: AuthState;
  userInfo: UserData | null;
  errorMessage: string;
}

const initialState:stateType = {
  city: CITIES[0],
  offers: [],
  currentSort: 'Popular',
  isLoading: false,
  authStatus: AuthState.Unknown,
  userInfo: null,
  errorMessage: ''
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
    })
    .addCase(setUserInfo, (state, action)=> {
      state.userInfo = action.payload;
    })
    .addCase(setErrorText, (state, action)=> {
      state.errorMessage = action.payload;
    });
});
