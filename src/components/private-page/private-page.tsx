import { AppRoute, AuthorizationsStatus } from '../../const';
import { Navigate } from 'react-router-dom';


type PrivateRouteProps = {
  authorizationStatus:AuthorizationsStatus;
  children:JSX.Element;

};

function PrivateRoute (props: PrivateRouteProps) {
  const {authorizationStatus, children} = props;

  return authorizationStatus === AuthorizationsStatus.Auth ? children : <Navigate to={AppRoute.Login} />;
}

export default PrivateRoute;
