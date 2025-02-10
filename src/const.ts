export const Mock = {
  amountOfPlaces: 1000000000
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

export const ValidID: Set<number> = new Set([111, 123]);
