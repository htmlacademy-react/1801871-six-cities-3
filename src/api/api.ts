import axios, { AxiosError, AxiosInstance } from 'axios';
import { URL_DATA, TIME_CONNECTION } from '../const';
import { getToken } from './token';
import SetError from './error-handler';

type APIErrorResponse = {
  details: {
    messages: string[];
  }[];
};

export const createAPI = (): AxiosInstance => {
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
    (response) => response,
    (error: AxiosError<APIErrorResponse>) => {

      if(error.code !== 'ERR_BAD_REQUEST') {
        SetError(`Ошибка ${error.code}`);
        return;
      }

      if (error.response?.data?.details?.[0]?.messages) {
        SetError(error.response.data.details[0].messages.join(' '));
      }
      throw error;
    }

  );


  return api;
};

export default createAPI;

