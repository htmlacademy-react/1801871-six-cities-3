import { createAction } from '@reduxjs/toolkit';
import { City, Offer } from '../types/offers';
import { TSortKey } from '../types/sort';
import { AuthState } from '../const';
import { UserData } from '../types/user';
import { FullOffer } from '../types/offer';
import { TComment } from '../types/comment';


export const Action = {
  UPDATE_CITY: 'UPDATE_CITY',
  CHANGE_SORT: 'CHANGE_SORT',
  LOAD_QUESTION: 'LOAD_QUESTION',
  LOADING_STATUS: 'LOADING_STATUS',
  SET_AUTHORIZATION: 'SET_AUTHORIZATION',
  SET_USER_INFO: 'SET_USER_INFO',
  SET_ERROR_TEXT: 'SET_ERROR_TEXT',
  SET_CURRENT_FULL_OFFER: 'SET_CURRENT_FULL_OFFER',
  SET_COMMENTS:'SET_COMMENTS'
};


export const setActiveCity = createAction<City>(Action.UPDATE_CITY);
export const changeSort = createAction<TSortKey>(Action.CHANGE_SORT);
export const loadQuestions = createAction<Offer[]>(Action.LOAD_QUESTION);
export const setLoadingStatus = createAction<boolean>(Action.LOADING_STATUS);
export const setAuthorization = createAction<AuthState>(Action.SET_AUTHORIZATION);
export const setUserInfo = createAction<UserData>(Action.SET_USER_INFO);
export const setErrorText = createAction<string>(Action.SET_ERROR_TEXT);
export const setCurrentFullOffer = createAction<FullOffer>(Action.SET_CURRENT_FULL_OFFER);
export const setComments = createAction<TComment[]>(Action.SET_COMMENTS);
