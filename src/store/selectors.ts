import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { sortDict } from '../utils/sort';
import { State } from '../types/state';

export const selectOffers = (state:State) => state.offers.offers;
export const selectCity = (state:State) => state.offers.city;
export const selectCurrentSort = (state:State) => state.offers.currentSort;

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
