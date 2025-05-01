
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { loadQuestions, setLoadingStatus } from './actions';
import { Offer } from '../types/offers';

const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'get/offers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoadingStatus(true));
    const {data} = await api.get<Offer[]>('/six-cities/offers');
    dispatch(setLoadingStatus(false));
    dispatch(loadQuestions(data));
  }
);

export default fetchOffers;
