
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { loadOffers, setAuthorization, setComments, setCurrentFullOffer, setFavorites, setLoadingStatus, setNearbyOffers, setUserInfo } from './actions';
import { Offer } from '../types/offers';
import { AuthData, UserData } from '../types/user';
import { deleteToken, setToken } from '../api/token';
import { AuthState } from '../const';
import { FullOffer } from '../types/offer';
import { TComment } from '../types/comment';
import { ENDPOINTS } from '../types/endpoint';


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
      const {data} = await api.get<Offer[]>(ENDPOINTS.offers);
      dispatch(setLoadingStatus(false));
      dispatch(loadOffers(data));
    } catch {
      dispatch(loadOffers(null));
      dispatch(setLoadingStatus(false));
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

    const { data } = await api.post<UserData>(ENDPOINTS.login, {email, password});
    setToken(data.token);
    dispatch(setAuthorization(AuthState.Auth));
    dispatch(setUserInfo(data));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(ENDPOINTS.logout);
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
      const {data} = await api.get<FullOffer>(`${ENDPOINTS.offers}/${id}`);
      dispatch(setLoadingStatus(false));
      dispatch(setCurrentFullOffer(data));
    } catch {
      dispatch(setCurrentFullOffer(null));
      dispatch(setLoadingStatus(false));
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
      const {data} = await api.get<TComment[]>(`${ENDPOINTS.comments}/${id}`);
      dispatch(setComments(data));
      dispatch(setLoadingStatus(false));
    } catch {
      dispatch(setComments(null));
      dispatch(setLoadingStatus(false));
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
      const {data} = await api.get<Offer[]>(`${ENDPOINTS.offers}/${id}/nearby`);
      dispatch(setNearbyOffers(data));
      dispatch(setLoadingStatus(false));
    } catch {
      dispatch(setNearbyOffers(null));
      dispatch(setLoadingStatus(false));
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
    try {
      dispatch(setLoadingStatus(true));
      await api.post<TComment>(`${ENDPOINTS.comments}/${id}`, {
        comment: comment,
        rating: rating,
      });
      dispatch(setLoadingStatus(false));
      dispatch(fetchComments(id));
    } catch {
      dispatch(setLoadingStatus(false));
      dispatch(setLoadingStatus(false));
    }
  }
);


export const fetchFavorites = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'get/favorites',
  async (_arg, {dispatch, extra: api}) => {
    try {
      dispatch(setLoadingStatus(true));
      const {data} = await api.get<Offer[]>(`${ENDPOINTS.favorites}`);
      dispatch(setFavorites(data));
      dispatch(setLoadingStatus(false));
    } catch {
      dispatch(setFavorites(null));
      dispatch(setLoadingStatus(false));
    }
  }
);


export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<UserData>(ENDPOINTS.login);
      dispatch(setAuthorization(AuthState.Auth));
      dispatch(setUserInfo(data));
      dispatch(fetchFavorites());
    } catch {
      dispatch(setAuthorization(AuthState.NoAuth));
    }
  },
);
