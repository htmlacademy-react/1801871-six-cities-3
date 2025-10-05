import { Offer, OfferType, TOfferId } from '../../types/offers';
import favoriteSliceReducer from '../favorite-slice/favorites-slice';
import { setFavorites } from './favorites-slice';
import { CITIES } from '../../cities';

describe('favorite-slice', ()=>{

    type stateType = {
      favorites:Offer[] | null;
      pending: boolean;
    }


    it('should return initial state with empty action',()=>{

      const emptyAction = { type: '' };

      const expectedState:stateType = {
        favorites: null,
        pending:false
      };

      const result = favoriteSliceReducer(expectedState, emptyAction);

      expect(result).toEqual(expectedState);
    });

    it('should return  default initial state with empty action',()=>{

      const emptyAction = { type: '' };

      const expectedState:stateType = {
        favorites: null,
        pending:false
      };

      const result = favoriteSliceReducer(undefined, emptyAction);

      expect(result).toEqual(expectedState);
    });

    it('should set "pending" to true when action "get/favorites/pending"',()=>{

      const action = { type: 'get/favorites/pending' };

      const expectedState:stateType = {
        favorites: null,
        pending:true
      };

      const result = favoriteSliceReducer(undefined,action);

      expect(result).toEqual(expectedState);
    });

    it('should set "pending" to false when action "get/favorites/fulfilled"',()=>{

      const action = { type: 'get/favorites/fulfilled' };

      const expectedState:stateType = {
        favorites: null,
        pending:false
      };

      const result = favoriteSliceReducer(undefined,action);

      expect(result).toEqual(expectedState);
    });

    it('should set "pending" to false when action "get/favorites/rejected"',()=>{

      const action = { type: 'get/favorites/rejected' };

      const expectedState:stateType = {
        favorites: null,
        pending:false
      };

      const result = favoriteSliceReducer(undefined,action);

      expect(result).toEqual(expectedState);
    });

    it('should set "pending" to true when action "post/addRemoveFromFavorites/pending"',()=>{

      const action = { type: 'post/addRemoveFromFavorites/pending' };

      const expectedState:stateType = {
        favorites: null,
        pending:true
      };

      const result = favoriteSliceReducer(undefined,action);

      expect(result).toEqual(expectedState);
    });

    it('should set "pending" to false when action "post/addRemoveFromFavorites/fulfilled"',()=>{

      const action = { type: 'post/addRemoveFromFavorites/fulfilled' };

      const expectedState:stateType = {
        favorites: null,
        pending:false
      };

      const result = favoriteSliceReducer(undefined,action);

      expect(result).toEqual(expectedState);
    });

    it('should set "pending" to false when action "post/addRemoveFromFavorites/rejected"',()=>{

      const action = { type: 'post/addRemoveFromFavorites/rejected' };

      const expectedState:stateType = {
        favorites: null,
        pending:false
      };

      const result = favoriteSliceReducer(undefined,action);

      expect(result).toEqual(expectedState);
    });


    it('should set "favorites" from payload when action "setFavorites"',()=>{

      const testOffer:Offer = {
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
      };

      const action = { type: setFavorites, payload:[testOffer] };

      const expectedState:stateType = {
        favorites: [testOffer],
        pending:false
      };

      const result = favoriteSliceReducer(undefined,action);

      expect(result).toEqual(expectedState);
    });
});
