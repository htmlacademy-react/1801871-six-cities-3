import { createSlice, PayloadAction } from '@reduxjs/toolkit';


type stateType = {
  isLoading: boolean;
}


const InitialState:stateType = {
  isLoading: false,
};


const LoadingSlice = createSlice({
  name:'loading',
  initialState:InitialState,
  reducers: {
    setLoadingStatus(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
  },
});

export default LoadingSlice.reducer;
export const { setLoadingStatus } = LoadingSlice.actions;
