import { createAction } from '@reduxjs/toolkit';
import { City } from '../types/offers';
import { TSortDictItem } from '../types/sort';


export const Action = {
  UPDATE_CITY: 'UPDATE_CITY',
  CHANGE_SORT: 'CHANGE_SORT'
};


export const setActiveCity = createAction<City>(Action.UPDATE_CITY);
export const changeSort = createAction<TSortDictItem>(Action.CHANGE_SORT);
