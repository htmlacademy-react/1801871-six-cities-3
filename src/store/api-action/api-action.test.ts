import createAPI from '../../api/api';
import MockAdapter from 'axios-mock-adapter';
import { Action, ThunkDispatch } from '@reduxjs/toolkit';
import { configureMockStore } from '@jedmao/redux-mock-store';
import thunk from 'redux-thunk';
import { api, store } from '../store';
import { ENDPOINTS } from '../../types/endpoint';

import { checkAuthAction } from './api-action';
import { AuthState } from '../../const';
import { setAuthorization, setUserInfo } from '../auth-slice/auth-slice';

type State = ReturnType<typeof store.getState>;
type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createAPI>, Action>

const extractActionTypes = (actions: Action<string>[]) => actions.map(({ type }) => type);

describe('api-action', () => {
  const axios = api;
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let mockStore: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    mockStore = mockStoreCreator({
      auth: { authStatus: AuthState.Unknown, userInfo: null, pending: false }
    });
  });

  describe('checkAuthStatus', () => {
    it('should set checkAuthAction.pending and checkAuthAction.fulfilled', async () => {
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
  });
});

