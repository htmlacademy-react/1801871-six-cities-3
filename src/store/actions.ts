import { createAction } from '@reduxjs/toolkit';
import { StateField } from './hooks';


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


export const setActiveCity = createAction<StateField<'city'>>(Action.UPDATE_CITY);
export const changeSort = createAction<StateField<'currentSort'>>(Action.CHANGE_SORT);
export const loadOffers = createAction<StateField<'offers'>>(Action.LOAD_OFFERS);
export const setLoadingStatus = createAction<StateField<'isLoading'>>(Action.LOADING_STATUS);
export const setAuthorization = createAction<StateField<'authStatus'>>(Action.SET_AUTHORIZATION);
export const setUserInfo = createAction<StateField<'userInfo'>>(Action.SET_USER_INFO);
export const setError = createAction<StateField<'errorData'>>(Action.SET_ERROR);
export const setCurrentFullOffer = createAction<StateField<'currentOffer'>>(Action.SET_CURRENT_FULL_OFFER);
export const setComments = createAction<StateField<'comments'>>(Action.SET_COMMENTS);
export const setNearbyOffers = createAction<StateField<'nearbyOffers'>>(Action.SET_NEARBY_OFFERS);
export const setFavorites = createAction<StateField<'favorites'>>(Action.SET_FAVORITES);
