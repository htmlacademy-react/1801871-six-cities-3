import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/offers';

export const Action = {
  UPDATE_CITY: 'UPDATE_CITY',
};


export const updateCityAction = createAction<City>(Action.UPDATE_CITY);
