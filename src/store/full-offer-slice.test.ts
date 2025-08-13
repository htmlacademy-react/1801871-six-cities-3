import fullOfferSliceReducer from '../store/full-offer-slice';

import { FullOffer } from '../types/offer';
import { TComment } from '../types/comment';
import { Offer } from '../types/offers';

describe('full-offer-slice', ()=>{

type stateType = {
  offer: FullOffer | null;
  comments:TComment[] | null;
  nearbyOffers:Offer[] | null;
  pending: {offer: boolean; comments: boolean; nearbyOffers: boolean};
}

it('should return initial state with empty action',()=>{

  const emptyAction = { type: '' };

  const expectedState:stateType = {
    offer: null,
    comments: null,
    nearbyOffers: null,
    pending: {offer: false, comments: false, nearbyOffers: false},
  };

  const result = fullOfferSliceReducer(expectedState, emptyAction);

  expect(result).toEqual(expectedState);
});

it('should return default initial state with empty action',()=>{

  const emptyAction = { type: '' };

  const expectedState:stateType = {
    offer: null,
    comments: null,
    nearbyOffers: null,
    pending: {offer: false, comments: false, nearbyOffers: false},
  };

  const result = fullOfferSliceReducer(expectedState, emptyAction);

  expect(result).toEqual(expectedState);
});

it('should set "pending" to true when action "get/fullOffer/pending"',()=>{

  const action = { type: 'get/fullOffer/pending' };

  const expectedState:stateType = {
    offer: null,
    comments: null,
    nearbyOffers: null,
    pending: {offer: true, comments: false, nearbyOffers: false},
  };

  const result = fullOfferSliceReducer(undefined,action);

  expect(result).toEqual(expectedState);
});

it('should set "pending" to false when action "get/fullOffer/fulfilled"',()=>{

  const action = { type: 'get/fullOffer/fulfilled' };

  const expectedState:stateType = {
    offer: null,
    comments: null,
    nearbyOffers: null,
    pending: {offer: false, comments: false, nearbyOffers: false},
  };

  const result = fullOfferSliceReducer(undefined,action);

  expect(result).toEqual(expectedState);
});

it('should set "pending" to false when action "get/fullOffer/rejected"',()=>{

  const action = { type: 'get/fullOffer/rejected' };

  const expectedState:stateType = {
    offer: null,
    comments: null,
    nearbyOffers: null,
    pending: {offer: false, comments: false, nearbyOffers: false},
  };

  const result = fullOfferSliceReducer(undefined,action);

  expect(result).toEqual(expectedState);
});

it('should set "pending" to true when action "get/fetchComments/pending"',()=>{

  const action = { type: 'get/fetchComments/pending' };

  const expectedState:stateType = {
    offer: null,
    comments: null,
    nearbyOffers: null,
    pending: {offer: false, comments: true, nearbyOffers: false},
  };

  const result = fullOfferSliceReducer(undefined,action);

  expect(result).toEqual(expectedState);
});

it('should set "pending" to false when action "get/fetchComments/fulfilled"',()=>{

  const action = { type: 'get/fetchComments/fulfilled' };

  const expectedState:stateType = {
    offer: null,
    comments: null,
    nearbyOffers: null,
    pending: {offer: false, comments: false, nearbyOffers: false},
  };

  const result = fullOfferSliceReducer(undefined,action);

  expect(result).toEqual(expectedState);
});

it('should set "pending" to false when action "get/fetchComments/rejected"',()=>{

  const action = { type: 'get/fetchComments/rejected' };

  const expectedState:stateType = {
    offer: null,
    comments: null,
    nearbyOffers: null,
    pending: {offer: false, comments: false, nearbyOffers: false},
  };

  const result = fullOfferSliceReducer(undefined,action);

  expect(result).toEqual(expectedState);
});

it('should set "pending" to true when action "get/nearbyOffers/pending"',()=>{

  const action = { type: 'get/nearbyOffers/pending' };

  const expectedState:stateType = {
    offer: null,
    comments: null,
    nearbyOffers: null,
    pending: {offer: false, comments: false, nearbyOffers: true},
  };

  const result = fullOfferSliceReducer(undefined,action);

  expect(result).toEqual(expectedState);
});

it('should set "pending" to false when action "get/nearbyOffers/fulfilled"',()=>{

  const action = { type: 'get/nearbyOffers/fulfilled' };

  const expectedState:stateType = {
    offer: null,
    comments: null,
    nearbyOffers: null,
    pending: {offer: false, comments: false, nearbyOffers: false},
  };

  const result = fullOfferSliceReducer(undefined,action);

  expect(result).toEqual(expectedState);
});

it('should set "pending" to false when action "get/nearbyOffers/rejected"',()=>{

  const action = { type: 'get/nearbyOffers/rejected' };

  const expectedState:stateType = {
    offer: null,
    comments: null,
    nearbyOffers: null,
    pending: {offer: false, comments: false, nearbyOffers: false},
  };

  const result = fullOfferSliceReducer(undefined,action);

  expect(result).toEqual(expectedState);
});

});
