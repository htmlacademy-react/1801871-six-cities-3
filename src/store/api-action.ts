
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { loadOffers, setAuthorization, setComments, setCurrentFullOffer, setLoadingStatus, setNearbyOffers, setUserInfo } from './actions';
import { Offer } from '../types/offers';
import { AuthData, UserData } from '../types/user';
import { deleteToken, setToken } from '../api/token';
import { AuthState } from '../const';
import { FullOffer } from '../types/offer';
import { TComment } from '../types/comment';

type CommentPayload = {
  id:string;
  comment: string;
  rating: number;
}

export const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'get/offers',
  async (_arg, {dispatch, extra: api}) => {
    try {
      dispatch(setLoadingStatus(true));
      const {data} = await api.get<Offer[]>('/six-cities/offers');
      dispatch(setLoadingStatus(false));
      dispatch(loadOffers(data));
    } catch {
      dispatch(loadOffers(null));
    }
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


export const fetchFullOffer = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'get/fullOffer',
  async (id, {dispatch, extra: api}) => {
    try {
      dispatch(setLoadingStatus(true));
      const {data} = await api.get<FullOffer>(`/six-cities/offers/${id}`);
      dispatch(setLoadingStatus(false));
      dispatch(setCurrentFullOffer(data));
    } catch {
      dispatch(setCurrentFullOffer(null));
    }
  }
);


export const fetchComments = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'get/fetchComments',
  async (id, {dispatch, extra: api}) => {
    try {
      dispatch(setLoadingStatus(true));
      const {data} = await api.get<TComment[]>(`/six-cities/comments/${id}`);
      dispatch(setComments(data));
      dispatch(setLoadingStatus(false));
    } catch {
      dispatch(setComments(null));
    }
  }
);


export const fetchNearbyOffers = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'get/nearbyOffers',
  async (id, {dispatch, extra: api}) => {
    try {
      dispatch(setLoadingStatus(true));
      const {data} = await api.get<Offer[]>(`/six-cities/offers/${id}/nearby`);
      dispatch(setNearbyOffers(data));
      dispatch(setLoadingStatus(false));
    } catch {
      dispatch(setNearbyOffers(null));
    }
  }
);


export const sendComment = createAsyncThunk<void, CommentPayload, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'post/sendComment',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    // dispatch(setLoadingStatus(true));
    await api.post<TComment>(`/six-cities/comments/${id}`, {
      comment: comment,
      rating: rating,
    });

    // dispatch(setLoadingStatus(false));
    dispatch(fetchComments(id));
  }
);
