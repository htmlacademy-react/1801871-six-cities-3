type TEndPoint = '/six-cities/login' | '/six-cities/offers' | '/six-cities/comments' | '/six-cities/logout' | '/six-cities/favorite';

type EndpointKey = 'login' | 'offers' | 'comments' | 'logout' | 'favorites';

export const ENDPOINTS: Record<EndpointKey, TEndPoint> = {
  login: '/six-cities/login',
  offers: '/six-cities/offers',
  comments: '/six-cities/comments',
  logout:'/six-cities/logout',
  favorites:'/six-cities/favorite'
};
