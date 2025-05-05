import { createAction } from '@reduxjs/toolkit';
import { City, Offer } from '../types/offers';
import { TSortKey } from '../types/sort';
import { AuthState } from '../const';
import { UserData } from '../types/user';


export const Action = {
  UPDATE_CITY: 'UPDATE_CITY',
  CHANGE_SORT: 'CHANGE_SORT',
  LOAD_QUESTION: 'LOAD_QUESTION',
  LOADING_STATUS: 'LOADING_STATUS',
  SET_AUTHORIZATION: 'SET_AUTHORIZATION',
  SET_USER_INFO: 'SET_USER_INFO'
};


export const setActiveCity = createAction<City>(Action.UPDATE_CITY);
export const changeSort = createAction<TSortKey>(Action.CHANGE_SORT);
export const loadQuestions = createAction<Offer[]>(Action.LOAD_QUESTION);
export const setLoadingStatus = createAction<boolean>(Action.LOADING_STATUS);
export const setAuthorization = createAction<AuthState>(Action.SET_AUTHORIZATION);
export const setUserInfo = createAction<UserData>(Action.SET_USER_INFO);
