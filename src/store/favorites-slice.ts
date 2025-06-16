import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Offer } from '../types/offers';
import { fetchFavorites } from './api-action';


type stateType = {
  favorites:Offer[] | null;
  pending: boolean;
}


const InitialState:stateType = {
  favorites: null,
  pending:false
};


const favoritesSlice = createSlice({
  name:'favorites',
  initialState:InitialState,
  reducers: {
    setFavorites(state, action: PayloadAction<Offer[] | null>) {
      state.favorites = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(fetchFavorites.pending, (state)=>{
      state.pending = true;
    });
    builder.addCase(fetchFavorites.fulfilled, (state)=>{
      state.pending = false;
    });
    builder.addCase(fetchFavorites.rejected, (state)=>{
      state.pending = false;
    });
  }
});

export default favoritesSlice.reducer;
export const { setFavorites } = favoritesSlice.actions;
