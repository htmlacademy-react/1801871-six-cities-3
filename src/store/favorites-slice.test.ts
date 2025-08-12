import { Offer } from '../types/offers';
import favoriteSliceReducer from '../store/favorites-slice';

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

    it('should set "pending" to true when action "user/login/pending"',()=>{

      const action = { type: 'user/login/pending' };

      const expectedState:stateType = {
        favorites: null,
        pending:false
      };

      const result = favoriteSliceReducer(undefined,action);

      expect(result).toEqual(expectedState);
    });

    it('should set "pending" to false when action "user/login/fulfilled"',()=>{

      const action = { type: 'user/login/fulfilled' };

      const expectedState:stateType = {
        favorites: null,
        pending:false
      };

      const result = favoriteSliceReducer(undefined,action);

      expect(result).toEqual(expectedState);
    });
});
