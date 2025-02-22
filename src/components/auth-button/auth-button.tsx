import { AuthLayoutState } from '../../const';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';


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

function AuthButton ({authButtonState}:ButtonStatusProps):JSX.Element {
  const state = authState[authButtonState];
  return (
    <li className="header__nav-item">
      <Link className="header__nav-link" to={AppRoute.Login}>
        <span className={state.class}>{state.label}</span>
      </Link>
    </li>
  );
}


export default AuthButton;
