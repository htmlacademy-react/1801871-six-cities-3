import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offers';


type stateType = {
  favorites:Offer[] | null;
}


const InitialState:stateType = {
  favorites: null
};


const favoritesSlice = createSlice({
  name:'favorites',
  initialState:InitialState,
  reducers: {
    setFavorites(state, action: PayloadAction<Offer[] | null>) {
      state.favorites = action.payload;
    },
  },
});

export default favoritesSlice.reducer;
export const { setFavorites } = favoritesSlice.actions;
