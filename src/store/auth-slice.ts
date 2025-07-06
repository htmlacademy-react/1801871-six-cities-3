import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../const';
import { UserData } from '../types/user';
import { checkAuthAction, loginAction, logoutAction } from './api-action';


type stateType = {
  authStatus: AuthState;
  userInfo: UserData | null;
  pending: boolean;
}


const InitialState:stateType = {
  authStatus: AuthState.Unknown,
  userInfo: null,
  pending: false
};


const AuthSlice = createSlice({
  name:'auth',
  initialState:InitialState,
  reducers: {
    setAuthorization(state, action: PayloadAction<AuthState>) {
      state.authStatus = action.payload;
    },
    setUserInfo(state, action: PayloadAction<UserData | null>) {
      state.userInfo = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(loginAction.pending,(state) => {
      state.pending = true;
    });
    builder.addCase(loginAction.fulfilled,(state) => {
      state.pending = false;
    });
    builder.addCase(loginAction.rejected,(state) => {
      state.pending = false;
    });

    builder.addCase(logoutAction.pending,(state) => {
      state.pending = true;
    });
    builder.addCase(logoutAction.fulfilled,(state) => {
      state.pending = false;
    });
    builder.addCase(logoutAction.rejected,(state) => {
      state.pending = false;
    });

    builder.addCase(checkAuthAction.pending,(state) => {
      state.pending = true;
    });
    builder.addCase(checkAuthAction.fulfilled,(state) => {
      state.pending = false;
    });
    builder.addCase(checkAuthAction.rejected,(state) => {
      state.pending = false;
    });
  }
});

export default AuthSlice.reducer;
export const { setAuthorization, setUserInfo } = AuthSlice.actions;
