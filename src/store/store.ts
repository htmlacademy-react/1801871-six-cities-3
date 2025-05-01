import { configureStore } from '@reduxjs/toolkit';
import { updateCity } from './reducer';
import createAPI from '../api/api';

const api = createAPI();

export const store = configureStore({

  reducer: updateCity,

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    })
});
