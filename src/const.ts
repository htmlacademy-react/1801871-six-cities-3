export const Mock = {
  amountOfPlaces: 1000000000
};

export enum AppRoute {
  Login = '/login',
  Offer = '/offer/:id',
  Favorite = '/favorite',
  Root = '/',
}

export enum AuthorizationsStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}
