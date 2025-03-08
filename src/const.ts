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


export const ValidID: Set<string | undefined> = new Set(['cefbdb9e-af28-4166-90ed-273428016b25', '4da58b5e-1a67-40f0-b998-2af668bbdfc8', '9a374ac2-2af3-4c70-9f8d-a7ccbaa4de1c', '28c808ba-edd8-4934-b095-2cf8ca59905a']);
