
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { loadQuestions, setAuthorization, setLoadingStatus, setUserInfo } from './actions';
import { Offer } from '../types/offers';
import { AuthData, UserData } from '../types/user';
import { deleteToken, setToken } from '../api/token';
import { AuthState } from '../const';

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'get/offers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoadingStatus(true));
    const {data} = await api.get<Offer[]>('/six-cities/offers');
    dispatch(setLoadingStatus(false));
    dispatch(loadQuestions(data));
  }
);


export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {

    const { data } = await api.post<UserData>('/six-cities/login', {email, password});
    setToken(data.token);
    dispatch(setAuthorization(AuthState.Auth));
    dispatch(setUserInfo(data));
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<UserData>('/six-cities/login');
      dispatch(setAuthorization(AuthState.Auth));
      dispatch(setUserInfo(data));


    } catch {
      dispatch(setAuthorization(AuthState.NoAuth));
    }
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete('/six-cities/logout');
    deleteToken();
    dispatch(setAuthorization(AuthState.NoAuth));
  },
);

