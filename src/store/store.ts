import { configureStore } from '@reduxjs/toolkit';

import createAPI from '../api/api';
import offersReducer from './offers-slice/offers-slice';
import errorReducer from './error-slice/error-slice';
import authReducer from './auth-slice/auth-slice';
import fullOfferReducer from './full-offer-slice/full-offer-slice';
import favoritesSlice from './favorite-slice/favorites-slice';


export const api = createAPI();

export const store = configureStore({

  reducer: {
    offers:offersReducer,
    error:errorReducer,
    auth:authReducer,
    fullOffer: fullOfferReducer,
    favorites: favoritesSlice,
  },


  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    })
});

