import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ErrorData } from '../api/error-type';


type stateType = {
  errorData: ErrorData | null;
}


const InitialState:stateType = {
  errorData: null,
};


const ErrorSlice = createSlice({
  name:'error',
  initialState:InitialState,
  reducers: {
    setError(state, action: PayloadAction<ErrorData | null>) {
      state.errorData = action.payload;
    },
  },
});

export default ErrorSlice.reducer;
export const { setError } = ErrorSlice.actions;
