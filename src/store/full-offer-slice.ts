import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FullOffer } from '../types/offer';
import { TComment } from '../types/comment';
import { Offer } from '../types/offers';
import { fetchComments, fetchFullOffer, fetchNearbyOffers } from './api-action';


type stateType = {
  currentOffer: FullOffer | null;
  comments:TComment[] | null;
  nearbyOffers:Offer[] | null;
  pending: {offer: boolean; comments: boolean; nearbyOffers: boolean};
}


const InitialState:stateType = {
  currentOffer: null,
  comments: null,
  nearbyOffers: null,
  pending: {offer: false, comments: false, nearbyOffers: false},
};

const getPendingCallback = (type: keyof typeof InitialState['pending'], value = false) => (state: stateType) => {
  state.pending[type] = value;
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
  extraReducers(builder) {
    builder.addCase(fetchFullOffer.pending, getPendingCallback('offer', true));
    builder.addCase(fetchFullOffer.fulfilled, getPendingCallback('offer'));
    builder.addCase(fetchFullOffer.rejected, getPendingCallback('offer'));

    builder.addCase(fetchComments.pending, getPendingCallback('comments', true));
    builder.addCase(fetchComments.fulfilled, getPendingCallback('comments'));
    builder.addCase(fetchComments.rejected, getPendingCallback('comments'));

    builder.addCase(fetchNearbyOffers.pending, getPendingCallback('nearbyOffers', true));
    builder.addCase(fetchNearbyOffers.fulfilled, getPendingCallback('nearbyOffers'));
    builder.addCase(fetchNearbyOffers.rejected, getPendingCallback('nearbyOffers'));

  }
});

export default FullOfferSlice.reducer;
export const { setCurrentFullOffer, setComments, setNearbyOffers } = FullOfferSlice.actions;
