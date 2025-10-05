import { AuthState } from '../../const';
import authSliceReducer from './auth-slice';
import { setAuthorization, setUserInfo } from './auth-slice';
import { UserData } from '../../types/user';

type stateType = {
  authStatus: AuthState;
  userInfo: UserData | null;
  pending: boolean;
}

describe('auth-slice', ()=>{
  it('should return initial state with empty action',()=>{

    const emptyAction = { type: '' };

    const expectedState:stateType = {
      authStatus: AuthState.Unknown,
      userInfo: null,
      pending: false
    };

    const result = authSliceReducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return  default initial state with empty action',()=>{

    const emptyAction = { type: '' };

    const expectedState:stateType = {
      authStatus: AuthState.Unknown,
      userInfo: null,
      pending: false
    };

    const result = authSliceReducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should set "pending" to true when action "user/login/pending"',()=>{

    const action = { type: 'user/login/pending' };

    const expectedState:stateType = {
      authStatus: AuthState.Unknown,
      userInfo: null,
      pending: true
    };

    const result = authSliceReducer(undefined,action);

    expect(result).toEqual(expectedState);
  });

  it('should set "pending" to false when action "user/login/fulfilled"',()=>{

    const action = { type: 'user/login/fulfilled' };

    const expectedState:stateType = {
      authStatus: AuthState.Unknown,
      userInfo: null,
      pending: false
    };

    const result = authSliceReducer(undefined,action);

    expect(result).toEqual(expectedState);
  });

  it('should set "pending" to false when action "user/login/rejected"',()=>{

    const action = { type: 'user/login/rejected' };

    const expectedState:stateType = {
      authStatus: AuthState.Unknown,
      userInfo: null,
      pending: false
    };

    const result = authSliceReducer(undefined,action);

    expect(result).toEqual(expectedState);
  });

  it('should set "pending" to true when action "user/checkAuth/pending"',()=>{

    const action = { type: 'user/checkAuth/pending' };

    const expectedState:stateType = {
      authStatus: AuthState.Unknown,
      userInfo: null,
      pending: true
    };

    const result = authSliceReducer(undefined,action);

    expect(result).toEqual(expectedState);
  });

  it('should set "pending" to false when action "user/checkAuth/fulfilled"',()=>{

    const action = { type: 'user/checkAuth/fulfilled' };

    const expectedState:stateType = {
      authStatus: AuthState.Unknown,
      userInfo: null,
      pending: false
    };

    const result = authSliceReducer(undefined,action);

    expect(result).toEqual(expectedState);
  });

  it('should set "pending" to false when action "user/checkAuth/rejected"',()=>{

    const action = { type: 'user/checkAuth/rejected' };

    const expectedState:stateType = {
      authStatus: AuthState.Unknown,
      userInfo: null,
      pending: false
    };

    const result = authSliceReducer(undefined,action);

    expect(result).toEqual(expectedState);
  });

  it('should set "pending" to true when action "user/logout/pending"',()=>{

    const action = { type: 'user/logout/pending' };

    const expectedState:stateType = {
      authStatus: AuthState.Unknown,
      userInfo: null,
      pending: true
    };

    const result = authSliceReducer(undefined,action);

    expect(result).toEqual(expectedState);
  });

  it('should set "pending" to false when action "user/logout/fulfilled"',()=>{

    const action = { type: 'user/logout/fulfilled' };

    const expectedState:stateType = {
      authStatus: AuthState.Unknown,
      userInfo: null,
      pending: false
    };

    const result = authSliceReducer(undefined,action);

    expect(result).toEqual(expectedState);
  });

  it('should set "pending" to false when action "user/logout/rejected"',()=>{

    const action = { type: 'user/logout/rejected' };

    const expectedState:stateType = {
      authStatus: AuthState.Unknown,
      userInfo: null,
      pending: false
    };

    const result = authSliceReducer(undefined,action);

    expect(result).toEqual(expectedState);
  });

  it('should set Auth status from payload when action "setAuthorization"',()=>{

    const action = { type: setAuthorization, payload: AuthState.Auth };

    const expectedState:stateType = {
      authStatus: AuthState.Auth,
      userInfo: null,
      pending: false
    };

    const result = authSliceReducer(undefined,action);

    expect(result).toEqual(expectedState);
  });

  it('should set setUserInfo from payload when action "setUserInfo"',()=>{

    const userInfo:UserData = {
      name:'test',
      avatarUrl:'./../',
      isPro: true,
      email: '111@111',
      token: 'x-token'
    };

    const action = { type: setUserInfo, payload: userInfo };

    const expectedState:stateType = {
      authStatus: AuthState.Unknown,
      userInfo: userInfo,
      pending: false
    };

    const result = authSliceReducer(undefined,action);

    expect(result).toEqual(expectedState);
  });


});
