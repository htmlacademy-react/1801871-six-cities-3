import fullOfferSliceReducer from './full-offer-slice';


import { setCurrentFullOffer, setComments, setNearbyOffers } from './full-offer-slice';
import { FullOffer } from '../../types/offer';
import { TComment } from '../../types/comment';
import { Offer, OfferType, TOfferId } from '../../types/offers';
import { CITIES } from '../../cities';

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

  const result = fullOfferSliceReducer(undefined, emptyAction);

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

it('should set "offer" from payload when action "setCurrentFullOffer"',()=>{

  const fullOffer:FullOffer = {
    id: 'id' as TOfferId,
    title: 'string',
    type: OfferType.Apartment,
    price: 5,
    previewImage: 'string',
    city: CITIES[0],
    location:  {
      latitude: 4,
      longitude: 3,
      zoom: 1
    },
    isFavorite: true,
    isPremium: true,
    rating: 5,
    description: 'fsf',
    bedrooms:5,
    goods:['saf'],
    host:{
      name: 'efw',
      avatarUrl: 'gwg',
      isPro: true
    },
    images:['asf'],
    maxAdults:5
  };

  const action = { type: setCurrentFullOffer, payload: fullOffer };

  const expectedState:stateType = {
    offer: fullOffer,
    comments: null,
    nearbyOffers: null,
    pending: {offer: false, comments: false, nearbyOffers: false},
  };

  const result = fullOfferSliceReducer(undefined,action);

  expect(result).toEqual(expectedState);
});

it('should set "comments" from payload when action "setComments"',()=>{

  const comment:TComment[] = [
    {
      id: 'id',
      date: 'data',
      user: {
        name: 'test',
        avatarUrl: 'rest',
        isPro: true
      },
      comment: 'cool comment',
      rating: 5
    }
  ];

  const action = { type: setComments, payload: comment };

  const expectedState:stateType = {
    offer: null,
    comments: comment,
    nearbyOffers: null,
    pending: {offer: false, comments: false, nearbyOffers: false},
  };

  const result = fullOfferSliceReducer(undefined,action);

  expect(result).toEqual(expectedState);
});

it('should set "offers" from payload when action "setNearbyOffers"',()=>{

  const nearbyOffers:Offer[] = [
    {
      id: 'id' as TOfferId,
      title: 'string',
      type: OfferType.Apartment,
      price: 5,
      previewImage: 'string',
      city: CITIES[0],
      location:  {
        latitude: 4,
        longitude: 3,
        zoom: 1
      },
      isFavorite: true,
      isPremium: true,
      rating: 5
    }
  ];

  const action = { type: setNearbyOffers, payload: nearbyOffers };

  const expectedState:stateType = {
    offer: null,
    comments: null,
    nearbyOffers: nearbyOffers,
    pending: {offer: false, comments: false, nearbyOffers: false},
  };

  const result = fullOfferSliceReducer(undefined,action);

  expect(result).toEqual(expectedState);
});

});
