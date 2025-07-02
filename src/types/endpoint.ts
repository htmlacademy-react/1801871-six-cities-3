// import { Offer } from './offers';

import { Offer } from './offers';

type TEndpoint = '/six-cities/login' | '/six-cities/offers' | '/six-cities/comments' | '/six-cities/logout' | '/six-cities/favorite' | '/offer';

type EndpointKey = 'login' | 'offers' | 'comments' | 'logout' | 'favorites' | 'offer';

export const ENDPOINTS: Record<EndpointKey, TEndpoint> = {
  login: '/six-cities/login',
  offers: '/six-cities/offers',
  comments: '/six-cities/comments',
  logout:'/six-cities/logout',
  favorites:'/six-cities/favorite',
  offer:'/offer'
};


export type TRoute = Exclude<TEndpoint, '/offer'> | `${Extract<TEndpoint, '/offer'>}/${Offer['id']}`

