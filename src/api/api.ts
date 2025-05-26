import axios, { AxiosError, AxiosInstance } from 'axios';
import { URL_DATA, TIME_CONNECTION } from '../const';
import { getToken } from './token';
import SetError from './error-handler';

type APIErrorResponse = {
  details: {
    messages: string[];
    property: string;
  }[];

  message:string;

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

      const path = error.config?.url;
      if(error.response?.status === 401 && path === '/six-cities/login') {
        throw error;
      }

      if(!error.response?.data.details.length) {
        SetError({
          path:path as string,
          message:error.response?.data.message,
          type: 'major'
        });
        throw error;
      }

      SetError({
        path:path as string,
        data:error.response?.data.details.map((err)=> ({
          field:err.property,
          messages:err.messages
        })
        ),
        type:'minor'
      });

      throw error;
    }

  );


  return api;
};

export default createAPI;

