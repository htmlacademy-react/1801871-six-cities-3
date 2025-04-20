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


export const ValidID: Set<string | undefined> = new Set(['8b3693d9-e512-4377-bf3f-fba0d7c26984', '4da58b5e-1a67-40f0-b998-2af668bbdfc8', '9a374ac2-2af3-4c70-9f8d-a7ccbaa4de1c', '28c808ba-edd8-4934-b095-2cf8ca59905a']);


export const URL_MARKER_DEFAULT =
  'img/pin/default-pin.svg';

export const URL_MARKER_CURRENT =
  'img/pin/active-pin.svg';

export const LAYER_PNG =
 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png';


export const LAYER_ATTRIBUTE =
'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>';
