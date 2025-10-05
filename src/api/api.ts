import axios, { AxiosError, AxiosInstance } from 'axios';

import { URL_DATA, TIME_CONNECTION } from '../const';
import { getToken } from './token';
import { ErrorData } from './error-type';

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: URL_DATA,
    timeout: TIME_CONNECTION,
  });

  api.interceptors.request.use(
    (config) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    }
  );

  api.interceptors.response.use(

    (res) => res,
    (e: AxiosError<ErrorData>) => Promise.reject(e.response?.data)
  );

  return api;
};

export default createAPI;

