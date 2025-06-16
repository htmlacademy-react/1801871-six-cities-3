import { configureStore } from '@reduxjs/toolkit';
import createAPI from '../api/api';

import offersReducer from './offers-slice';
import errorReducer from './error-slice';
import authReducer from './auth-slice';
import fullOfferReducer from './full-offer-slice';
import favoritesSlice from './favorites-slice';

const api = createAPI();

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
