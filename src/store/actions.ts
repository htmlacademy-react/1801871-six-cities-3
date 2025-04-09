import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/offers';

export const Action = {
  SET_ACTIVE_CITY: 'SET_ACTIVE_CITY'
};


export const setActiveCity = createAction<City>(Action.SET_ACTIVE_CITY);
