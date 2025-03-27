import { configureStore } from '@reduxjs/toolkit';
import { updateCity } from './reducer';

export const store = configureStore({
  reducer: updateCity
});
