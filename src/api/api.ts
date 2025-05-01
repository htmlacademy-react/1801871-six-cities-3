import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { URL_DATA, TIME_CONNECTION } from '../const';
import { getToken } from './token';


export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: URL_DATA,
    timeout: TIME_CONNECTION,
  });

  // api.interceptors.request.use(
  //   (config: AxiosRequestConfig) => {
  //     const token = getToken();

  //     if (token && config.headers) {
  //       config.headers['x-token'] = token;
  //     }

  //     return config;
  //   },
  // );

  return api;
};

export default createAPI;

