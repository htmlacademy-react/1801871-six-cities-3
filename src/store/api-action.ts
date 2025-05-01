import api from '../api/api';
import createAPI from '../api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { AxiosInstance } from 'axios';
import { loadQuestions } from './actions';
import { Offer } from '../types/offers';

const fetchOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'get/offers',
  async (_arg, {dispatch}) => {
    const {data} = await api().get('/six-cities/offers');
    dispatch(loadQuestions(data));
  }
);

export default fetchOffers;
