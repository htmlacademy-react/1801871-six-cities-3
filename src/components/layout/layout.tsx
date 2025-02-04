import { Outlet, useLocation } from 'react-router-dom';
import React from 'react';

import { AppRoute, AuthorizationsStatus, AuthButtonStatus } from '../../const';

type LayoutState = {
  'showUserInfo': boolean;
  'AuthButtonState': AuthButtonStatus;
}

type LayoutProps = {
  authorizationStatus:AuthorizationsStatus;
};


import Logo from '../logo/logo';
import UserInfo from '../user-info/user-info';
import AuthButton from '../auth-button/auth-button';

function getLayoutState (pathname: AppRoute, authorizationStatus: AuthorizationsStatus): LayoutState {

  if (pathname === AppRoute.Login) {
    return {
      'showUserInfo':false,
      'AuthButtonState':AuthButtonStatus.Hide
    };
  }
  if (authorizationStatus === AuthorizationsStatus.NoAuth) {
    return {
      'showUserInfo':false,
      'AuthButtonState':AuthButtonStatus.LogIn
    };
  }

  return {
    'showUserInfo':true,
    'AuthButtonState':AuthButtonStatus.LogOut
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
                {AuthButtonState !== AuthButtonStatus.Hide ? <AuthButton authButtonState={AuthButtonState} /> : ''}
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
