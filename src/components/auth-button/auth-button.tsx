import { AuthLayoutState } from '../../const';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppDispatch } from '../../store/hooks';
import { logoutAction } from '../../store/api-action';
import React from 'react';


type authButtonState = Exclude<AuthLayoutState, AuthLayoutState.Hide>;

type ButtonStatusProps= {
  authButtonState: authButtonState;
}

type AuthState = {
  class:'header__signout';
  label:'Sign out';
} | {
  class:'header__login';
  label:'Sign in';
}

const authState : Record<authButtonState, AuthState> = {
  [AuthLayoutState.LogIn]: {
    class: 'header__signout',
    label: 'Sign out'
  },
  [AuthLayoutState.LogOut]: {
    class: 'header__login',
    label: 'Sign in'
  }
};


function AuthButtonComponent ({authButtonState}:ButtonStatusProps):JSX.Element {
  const state = authState[authButtonState];
  const dispatch = useAppDispatch();

  const handleSignOutClick = () => {

    if(state.class === 'header__signout') {
      dispatch(logoutAction());
    }

  };
  return (
    <li className="header__nav-item">
      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login} onClick={handleSignOutClick}>
        <span className={state.class}>{state.label}</span>
      </Link>
    </li>
  );
}

const AuthButton = React.memo(AuthButtonComponent);


export default AuthButton;
