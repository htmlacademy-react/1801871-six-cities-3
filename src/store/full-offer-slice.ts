import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FullOffer } from '../types/offer';
import { TComment } from '../types/comment';
import { Offer } from '../types/offers';


type stateType = {
  currentOffer: FullOffer | null;
  comments:TComment[] | null;
  nearbyOffers:Offer[] | null;
}


const InitialState:stateType = {
  currentOffer: null,
  comments: null,
  nearbyOffers: null,
};


const FullOfferSlice = createSlice({
  name:'fullOffer',
  initialState:InitialState,
  reducers: {
    setCurrentFullOffer(state, action: PayloadAction<FullOffer | null>) {
      state.currentOffer = action.payload;
    },
    setComments(state, action: PayloadAction<TComment[] | null>) {
      state.comments = action.payload;
    },
    setNearbyOffers(state, action: PayloadAction<Offer[] | null>) {
      state.nearbyOffers = action.payload;
    }
  },
});

export default FullOfferSlice.reducer;
export const { setCurrentFullOffer, setComments, setNearbyOffers } = FullOfferSlice.actions;
