
import { Offer } from '../../types/offers';
import { AuthData, UserData } from '../../types/user';
import { deleteToken, setToken } from '../../api/token';
import { AuthState } from '../../const';
import { FullOffer } from '../../types/offer';
import { TComment } from '../../types/comment';
import { ENDPOINTS } from '../../types/endpoint';
import { createAppAsyncThunk } from '../hooks';
import { loadOffers } from '../offers-slice/offers-slice';
import { setAuthorization, setUserInfo } from '../auth-slice/auth-slice';
import { setComments, setCurrentFullOffer, setNearbyOffers } from '../full-offer-slice/full-offer-slice';
import { setFavorites } from '../favorite-slice/favorites-slice';
import { setErrorHandler } from '../../api/error-handler';
import { ErrorData } from '../../api/error-type';


type CommentPayload = {
  id:string;
  comment: string;
  rating: number;
}

type FavoritePayload = {
  id:string;
  isFavorite: boolean;
}


export const fetchOffers = createAppAsyncThunk<void, undefined>(
  'get/offers',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer[]>(ENDPOINTS.offers);
      dispatch(loadOffers(data));
    } catch(error) {
      setErrorHandler(error as ErrorData, dispatch);
      dispatch(loadOffers(null));
    }
  }

);


export const loginAction = createAppAsyncThunk<void, AuthData>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    try {
      const { data } = await api.post<UserData>(ENDPOINTS.login, {email, password});
      setToken(data.token);
      dispatch(setAuthorization(AuthState.Auth));
      dispatch(setUserInfo(data));
    } catch(error) {
      setErrorHandler(error as ErrorData, dispatch);
    }
  },
);

export const logoutAction = createAppAsyncThunk<void, undefined>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.delete(ENDPOINTS.logout);
      deleteToken();
      dispatch(setAuthorization(AuthState.NoAuth));
      dispatch(fetchOffers());
    } catch(error) {
      setErrorHandler(error as ErrorData, dispatch);
    }
  },
);


export const fetchFullOffer = createAppAsyncThunk<void, string>(
  'get/fullOffer',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<FullOffer>(`${ENDPOINTS.offers}/${id}`);
      dispatch(setCurrentFullOffer(data));
    } catch(error) {
      setErrorHandler(error as ErrorData, dispatch);
      dispatch(setCurrentFullOffer(null));
    }
  }
);


export const fetchComments = createAppAsyncThunk<void, string>(
  'get/fetchComments',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<TComment[]>(`${ENDPOINTS.comments}/${id}`);
      dispatch(setComments(data));
    } catch(error) {
      setErrorHandler(error as ErrorData, dispatch);
      dispatch(setComments(null));
    }
  }
);


export const fetchNearbyOffers = createAppAsyncThunk<void, string>(
  'get/nearbyOffers',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer[]>(`${ENDPOINTS.offers}/${id}/nearby`);
      dispatch(setNearbyOffers(data));
    } catch(error) {
      setErrorHandler(error as ErrorData, dispatch);
      dispatch(setNearbyOffers(null));
    }
  }
);


export const sendComment = createAppAsyncThunk<void, CommentPayload>(
  'post/sendComment',
  async ({id, comment, rating}, {dispatch, extra: api}) => {
    try {
      await api.post<TComment>(`${ENDPOINTS.comments}/${id}`, {
        comment: comment,
        rating: rating,
      });
      dispatch(fetchComments(id));
    } catch(error) {
      setErrorHandler(error as ErrorData, dispatch);
    }
  }
);


export const fetchFavorites = createAppAsyncThunk<void, undefined>(
  'get/favorites',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Offer[]>(`${ENDPOINTS.favorites}`);
      dispatch(setFavorites(data));
    } catch(error) {
      setErrorHandler(error as ErrorData, dispatch);
      dispatch(setFavorites(null));
    }
  }
);


export const fetchAddRemoveFromFavorites = createAppAsyncThunk<void, FavoritePayload>(
  'post/addRemoveFromFavorites',
  async ({id, isFavorite}, {dispatch, extra: api}) => {
    try {
      await api.post<Offer>(`${ENDPOINTS.favorites}/${id}/${Number(!isFavorite)}`);
      dispatch(fetchFavorites());
      dispatch(fetchOffers());
      dispatch(fetchFullOffer(id));
    } catch(error) {
      setErrorHandler(error as ErrorData, dispatch);
    }
  }
);


export const checkAuthAction = createAppAsyncThunk<void, undefined>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const { data } = await api.get<UserData>(ENDPOINTS.login);
      dispatch(setAuthorization(AuthState.Auth));
      dispatch(setUserInfo(data));
    } catch(error) {
      // setErrorHandler(error as ErrorData, dispatch);
      dispatch(setAuthorization(AuthState.NoAuth));
    }
  },
);
