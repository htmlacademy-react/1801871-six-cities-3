import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from '../const';
import { UserData } from '../types/user';


type stateType = {
  authStatus: AuthState;
  userInfo: UserData | null;
}


const InitialState:stateType = {
  authStatus: AuthState.Unknown,
  userInfo: null,
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
});

export default AuthSlice.reducer;
export const { setAuthorization, setUserInfo } = AuthSlice.actions;
