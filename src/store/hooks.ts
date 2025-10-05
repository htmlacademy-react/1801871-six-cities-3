import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { store } from './store';

export type State = ReturnType<typeof store.getState>;


type AppDispatch = typeof store.dispatch;


export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;


export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    dispatch: AppDispatch;
    extra:AxiosInstance;
}>();
