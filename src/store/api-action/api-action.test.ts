import createAPI from '../../api/api';
import MockAdapter from 'axios-mock-adapter';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import { api, store } from '../store';
import { ENDPOINTS } from '../../types/endpoint';

import { checkAuthAction, fetchOffers, loginAction } from './api-action';
import { AuthState } from '../../const';
import { setAuthorization, setUserInfo } from '../auth-slice/auth-slice';
import { Offer, OfferType, TOfferId } from '../../types/offers';
import { CITIES } from '../../cities';
import { loadOffers } from '../offers-slice/offers-slice';
import { AuthData } from '../../types/user';

type State = ReturnType<typeof store.getState>;
type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>

const extractActionTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

describe('api-action', () => {
  const axios = api;
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let mockStore: ReturnType<typeof mockStoreCreator>;

  const mockOffer:Offer[] = [
    {
      id: 'id' as TOfferId,
      title: 'string',
      type: OfferType.Apartment,
      price: 5,
      previewImage: 'string',
      city: CITIES[0],
      location:  {
        latitude: 4,
        longitude: 3,
        zoom: 1
      },
      isFavorite: true,
      isPremium: true,
      rating: 5
    }
  ];

  beforeEach(() => {
    mockStore = mockStoreCreator({
      auth: { authStatus: AuthState.Unknown, userInfo: null, pending: false }
    });
  });

  describe('checkAuthStatus', () => {
    it('should set checkAuthAction.pending, setAuthorization, setUserInfo and checkAuthAction.fulfilled', async () => {
      mockAxiosAdapter.onGet(ENDPOINTS.login).reply(200, []);

      await mockStore.dispatch(checkAuthAction());

      const actions = extractActionTypes(mockStore.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        setAuthorization.type,
        setUserInfo.type,
        checkAuthAction.fulfilled.type,
      ]);
    });

    it('should set checkAuthAction.pending and setAuthorization, checkAuthAction.fulfilled', async () => {

      mockAxiosAdapter.onGet(ENDPOINTS.login).reply(400, []);

      await mockStore.dispatch(checkAuthAction());

      const actions = extractActionTypes(mockStore.getActions());

      expect(actions).toEqual([
        checkAuthAction.pending.type,
        setAuthorization.type,
        checkAuthAction.fulfilled.type,
      ]);

    });
  });

  describe('fetchOffers', ()=> {
    it('should return offers, and type same fetchOffers, loadOffers, fetchOffers', async () => {
      mockAxiosAdapter.onGet(ENDPOINTS.offers).reply(200, mockOffer);

      await mockStore.dispatch(fetchOffers());

      const emittedActions = mockStore.getActions();
      const extractedActionTypes = extractActionTypes(emittedActions);

      const fetchOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOffers.fulfilled>;

      expect(extractedActionTypes).toEqual([
        fetchOffers.pending.type,
        loadOffers.type,
        fetchOffers.fulfilled.type,
      ]);

      expect(fetchOffersActionFulfilled.payload).toEqual(mockOffer);
    });

    it('should return null, and type same fetchOffers.pending, loadOffers, fetchOffers.fulfilled', async () => {
      mockAxiosAdapter.onGet(ENDPOINTS.offers).reply(400, []);

      await mockStore.dispatch(fetchOffers());

      const emittedActions = mockStore.getActions();
      const extractedActionTypes = extractActionTypes(emittedActions);

      const fetchOffersActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchOffers.fulfilled>;

      expect(extractedActionTypes).toEqual([
        fetchOffers.pending.type,
        loadOffers.type,
        fetchOffers.fulfilled.type,
      ]);

      expect(fetchOffersActionFulfilled.payload).toEqual(null);
    });
  });

  describe('loginAction', ()=> {
    it('should return AUTH and fakeServer reply, and type same loginAction.pending, setAuthorization, setUserInfo, loginAction.fulfilled',async()=>{
      const fakeUser: AuthData = { login: '111@111.ru', password: '111' };
      const fakeServerReplay = {
        name: 'test',
        avatarUrl: '/test',
        isPro: true,
        email: '111@111.ru',
        token: 'collToken'
      };

      mockAxiosAdapter.onPost(ENDPOINTS.login).reply(200, fakeServerReplay);

      await mockStore.dispatch(loginAction(fakeUser));
      const actions = extractActionTypes(mockStore.getActions());
      const emittedActions = mockStore.getActions();

      const loginActionFulfilled = emittedActions.at(1) as ReturnType<typeof loginAction.fulfilled>;

      const loginActionFulfilledSecond = emittedActions.at(2) as ReturnType<typeof loginAction.fulfilled>;

      expect(actions).toEqual([
        loginAction.pending.type,
        setAuthorization.type,
        setUserInfo.type,
        loginAction.fulfilled.type,
      ]);

      expect(loginActionFulfilled.payload).toEqual('AUTH');
      expect(loginActionFulfilledSecond.payload).toEqual(fakeServerReplay);
    });

    it('should return AUTH and fakeServer reply, and type same loginAction.pending, setAuthorization, setUserInfo, loginAction.fulfilled',async()=>{
      const fakeUser: AuthData = { login: '111@111.ru', password: '111' };
      const fakeServerReplay = {
        name: 'test',
        avatarUrl: '/test',
        isPro: true,
        email: '111@111.ru',
        token: 'collToken'
      };

      mockAxiosAdapter.onPost(ENDPOINTS.login).reply(200, fakeServerReplay);

      await mockStore.dispatch(loginAction(fakeUser));
      const actions = extractActionTypes(mockStore.getActions());
      const emittedActions = mockStore.getActions();

      const loginActionFulfilled = emittedActions.at(1) as ReturnType<typeof loginAction.fulfilled>;

      const loginActionFulfilledSecond = emittedActions.at(2) as ReturnType<typeof loginAction.fulfilled>;

      expect(actions).toEqual([
        loginAction.pending.type,
        setAuthorization.type,
        setUserInfo.type,
        loginAction.fulfilled.type,
      ]);

      expect(loginActionFulfilled.payload).toEqual('AUTH');
      expect(loginActionFulfilledSecond.payload).toEqual(fakeServerReplay);
    });
  });
});

