import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { sortDict } from '../utils/sort';
import { State } from '../types/state';

const selectOffers = (state:State) => state.offers.offers;
const selectCity = (state:State) => state.offers.city;
const selectCurrentSort = (state:State) => state.offers.currentSort;

const isOffersLoading = (state:State) => state.offers.pending;
const isAuthLoading = (state:State) => state.auth.pending;
const isFavoritesLoading = (state:State) => state.favorites.pending;

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
