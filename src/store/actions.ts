import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/offers';
import { TSortKey } from '../types/sort';


export const Action = {
  UPDATE_CITY: 'UPDATE_CITY',
  CHANGE_SORT: 'CHANGE_SORT'
};


export const setActiveCity = createAction<City>(Action.UPDATE_CITY);
export const changeSort = createAction<TSortKey>(Action.CHANGE_SORT);
