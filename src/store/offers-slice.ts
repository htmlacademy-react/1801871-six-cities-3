import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { City, Offer } from '../types/offers';
import { TSortKey } from '../types/sort';
import { CITIES } from '../сities';

type stateType = {
  city: City;
  offers: Offer[] | null;
  currentSort: TSortKey;
}


const InitialState:stateType = {
  city: CITIES[0],
  offers: [],
  currentSort: 'Popular',
};


const OffersSlice = createSlice({
  name:'offers',
  initialState:InitialState,
  reducers: {
    loadOffers(state, action: PayloadAction<Offer[] | null>) {
      state.offers = action.payload;
    },
    changeSort(state, action: PayloadAction<TSortKey>) {
      state.currentSort = action.payload;
    },
    setActiveCity(state, action: PayloadAction<City>) {
      state.city = action.payload;
    }
  },
});

export default OffersSlice.reducer;
export const { loadOffers, changeSort, setActiveCity } = OffersSlice.actions;
