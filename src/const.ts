export const Mock = {
  amountOfPlaces: 12
};

export enum AppRoute {
  Login = '/login',
  Offer = '/offer/:id',
  Favorite = '/favorite',
  Root = '/',
}

export enum AuthState {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum AuthLayoutState {
  LogIn = 'LOGIN',
  LogOut = 'LOGOUT',
  Hide = 'HIDE'
}

export type NotFoundPageType = 'offer' | 'route';


export const URL_MARKER_DEFAULT =
  'img/pin/default-pin.svg';

export const URL_MARKER_CURRENT =
  'img/pin/active-pin.svg';

export const LAYER_PNG =
 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';


export const LAYER_ATTRIBUTE =
'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';


export const URL_DATA = 'https://15.design.htmlacademy.pro';

export const TIME_CONNECTION = 5000;
