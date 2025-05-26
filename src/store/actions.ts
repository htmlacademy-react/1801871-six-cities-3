import { createAction } from '@reduxjs/toolkit';
import { State } from '../types/state';


export const Action = {
  UPDATE_CITY: 'UPDATE_CITY',
  CHANGE_SORT: 'CHANGE_SORT',
  LOAD_OFFERS: 'LOAD_OFFERS',
  LOADING_STATUS: 'LOADING_STATUS',
  SET_AUTHORIZATION: 'SET_AUTHORIZATION',
  SET_USER_INFO: 'SET_USER_INFO',
  SET_ERROR: 'SET_ERROR',
  SET_CURRENT_FULL_OFFER: 'SET_CURRENT_FULL_OFFER',
  SET_COMMENTS:'SET_COMMENTS',
  SET_NEARBY_OFFERS:'SET_NEARBY_OFFERS',
  SET_FAVORITES:'SET_FAVORITES'
};


export const setActiveCity = createAction<State['city']>(Action.UPDATE_CITY);
export const changeSort = createAction<State['currentSort']>(Action.CHANGE_SORT);
export const loadOffers = createAction<State['offers']>(Action.LOAD_OFFERS);
export const setLoadingStatus = createAction<State['isLoading']>(Action.LOADING_STATUS);
export const setAuthorization = createAction<State['authStatus']>(Action.SET_AUTHORIZATION);
export const setUserInfo = createAction<State['userInfo']>(Action.SET_USER_INFO);
export const setError = createAction<State['errorData']>(Action.SET_ERROR);
export const setCurrentFullOffer = createAction<State['currentOffer']>(Action.SET_CURRENT_FULL_OFFER);
export const setComments = createAction<State['comments']>(Action.SET_COMMENTS);
export const setNearbyOffers = createAction<State['nearbyOffers']>(Action.SET_NEARBY_OFFERS);
export const setFavorites = createAction<State['favorites']>(Action.SET_FAVORITES);
