import { createDraftSafeSelector } from '@reduxjs/toolkit';

import { sortDict } from '../utils/sort';
import { State } from '../types/state';


export const getSelector = <
  T extends keyof State,
  K extends keyof State[T]
>(
    slice: T,
    field: K
  ): ((state: State) => State[T][K]) => (state: State) => state[slice][field];

// state Pick<State, offer> для типизации селектора

const selectOffers = getSelector('offers','offers');
const selectCity = getSelector('offers', 'city');
const selectCurrentSort = getSelector('offers', 'currentSort');

const isOffersLoading = getSelector('offers', 'pending');
const isAuthLoading = getSelector('auth', 'pending');
const isFavoritesLoading = getSelector('favorites','pending');

export const selectFilteredSortedOffers = createDraftSafeSelector(
  [selectOffers, selectCity, selectCurrentSort],
  (offers, city, sortType) => {
    if (!offers) {
      return null;
    }
    const filtered = offers.filter((offer) => offer.city.name === city.name);
    return [...filtered].sort(sortDict[sortType].handler);
  }
);


export const selectMainScreenIsLoading = createDraftSafeSelector(
  [isOffersLoading, isAuthLoading, isFavoritesLoading],
  (offers, auth, favorites) => offers || auth || favorites
);
