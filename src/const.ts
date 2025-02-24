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

export type CardType = 'cities' | 'favorites';


export const ValidID: Set<string | undefined> = new Set(['111', '123']);
