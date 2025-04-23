import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/offers';
import { Sort } from '../types/sort';


export const Action = {
  UPDATE_CITY: 'UPDATE_CITY',
  CHANGE_SORT: 'CHANGE_SORT'
};


export const updateCityAction = createAction<City>(Action.UPDATE_CITY);
export const changeSort = createAction<Sort>(Action.CHANGE_SORT);
