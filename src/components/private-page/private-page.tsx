import { AppRoute, AuthState } from '../../const';
import { Navigate } from 'react-router-dom';
import { LoadingSpinner } from '../loading-spinner/loading-spinner';


type PrivateRouteProps = {
  authorizationStatus:AuthState;
  children:JSX.Element;

};

function PrivateRoute ({authorizationStatus, children}: PrivateRouteProps):JSX.Element {
  if(authorizationStatus === AuthState.Unknown) {
    return <LoadingSpinner />;
  }
  return authorizationStatus === AuthState.Auth ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
