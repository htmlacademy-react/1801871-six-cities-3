import { City, Offer, OfferType, TOfferId } from '../types/offers';
import { TSortKey } from '../types/sort';
import fullOfferSliceReducer from '../store/offers-slice';
import { loadOffers, changeSort, setActiveCity } from '../store/offers-slice';
import { CITIES } from '../cities';


describe('full-offer-slice', ()=>{

type stateType = {
  city: City;
  offers: Offer[] | null;
  currentSort: TSortKey;
  pending: boolean;
}

const cloneCity = (city: City): City => structuredClone(city);
it('should return initial state with empty action',()=>{

  const emptyAction = { type: '' };

  const expectedState:stateType = {
    city: cloneCity(CITIES[0]),
    offers: null,
    currentSort: 'Popular',
    pending: false
  };

  const result = fullOfferSliceReducer(undefined, emptyAction);

  expect(result).toEqual(expectedState);
});

it('should return default initial state with empty action',()=>{

  const emptyAction = { type: '' };

  const expectedState:stateType = {
    city: cloneCity(CITIES[0]),
    offers: null,
    currentSort: 'Popular',
    pending: false
  };

  const result = fullOfferSliceReducer(undefined, emptyAction);

  expect(result).toEqual(expectedState);
});


it('should set "pending" to true when action "get/offers/pending"',()=>{

  const action = { type: 'get/offers/pending' };

  const expectedState:stateType = {
    city: cloneCity(CITIES[0]),
    offers: null,
    currentSort: 'Popular',
    pending: true
  };

  const result = fullOfferSliceReducer(undefined,action);

  expect(result).toEqual(expectedState);
});

it('should set "pending" to false when action "get/offers/fulfilled"',()=>{

  const action = { type: 'get/offers/fulfilled' };

  const expectedState:stateType = {
    city: cloneCity(CITIES[0]),
    offers: null,
    currentSort: 'Popular',
    pending: false
  };

  const result = fullOfferSliceReducer(undefined,action);

  expect(result).toEqual(expectedState);
});

it('should set "pending" to false when action "get/offers/rejected"',()=>{

  const action = { type: 'get/offers/rejected' };

  const expectedState:stateType = {
    city: cloneCity(CITIES[0]),
    offers: null,
    currentSort: 'Popular',
    pending: false
  };

  const result = fullOfferSliceReducer(undefined,action);

  expect(result).toEqual(expectedState);
});

it('should set "currentSort" from payload when action "changeSort"',()=>{
  const sort:TSortKey = 'Price: low to high';

  const action = changeSort(sort);


  const expectedState:stateType = {
    city: cloneCity(CITIES[0]),
    offers: null,
    currentSort: sort,
    pending: false
  };

  const result = fullOfferSliceReducer(undefined, action);

  expect(result).toEqual(expectedState);
});

it('should set "offers" from payload when action "loadOffers"',()=>{
  const offers:Offer[] = [
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

  const action = loadOffers(offers);

  const expectedState:stateType = {
    city: cloneCity(CITIES[0]),
    offers: offers,
    currentSort: 'Popular',
    pending: false
  };

  const result = fullOfferSliceReducer(undefined, action);

  expect(result).toEqual(expectedState);
});


it('should set "ActiveCity" from payload when action "setActiveCity"',()=>{
  const city = CITIES[1];

  const action = { type: setActiveCity, payload:city };

  const expectedState:stateType = {
    city: CITIES[1],
    offers: null,
    currentSort: 'Popular',
    pending: false
  };

  const result = fullOfferSliceReducer(undefined,action);

  expect(result).toEqual(expectedState);
});


});
