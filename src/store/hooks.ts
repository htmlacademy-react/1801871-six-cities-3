import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { store } from './store';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

type State = ReturnType<typeof store.getState>;


type AppDispatch = typeof store.dispatch;


export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;


export const createAppAsyncThunk = createAsyncThunk.withTypes<{
    extra:AxiosInstance;
}>();
