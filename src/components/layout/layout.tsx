import { Outlet, useLocation } from 'react-router-dom';
import React from 'react';

import { AppRoute, AuthState, AuthLayoutState } from '../../const';


import Logo from '../logo/logo';
import UserInfo from '../user-info/user-info';
import AuthButton from '../auth-button/auth-button';

type LayoutState = {
  showUserInfo: boolean;
  AuthButtonState: AuthLayoutState;
}

type LayoutProps = {
  authorizationStatus:AuthState;
};


function getLayoutState (pathname: AppRoute, authorizationStatus: AuthState): LayoutState {

  if (pathname === AppRoute.Login) {
    return {
      'showUserInfo':false,
      'AuthButtonState':AuthLayoutState.Hide
    };
  }
  if (authorizationStatus === AuthState.NoAuth || authorizationStatus === AuthState.Unknown) {
    return {
      'showUserInfo':false,
      'AuthButtonState':AuthLayoutState.LogOut
    };
  }

  return {
    'showUserInfo':true,
    'AuthButtonState':AuthLayoutState.LogIn
  };
}

function Layout ({authorizationStatus}: LayoutProps):JSX.Element {
  const {pathname} = useLocation();
  const {showUserInfo, AuthButtonState} = getLayoutState(pathname as AppRoute, authorizationStatus);

  return (
    <React.Fragment>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo/>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                {showUserInfo ? <UserInfo /> : ''}
                {AuthButtonState !== AuthLayoutState.Hide ? <AuthButton authButtonState={AuthButtonState} /> : ''}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <Outlet />
    </React.Fragment>
  );
}
export default Layout;
