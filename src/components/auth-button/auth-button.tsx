import { AuthButtonStatus } from '../../const';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';


type ButtonStatus= {
  authButtonState: AuthButtonStatus;
}

type AuthState = {
  class:'header__signout';
  label:'Sign out';
} | {
  class:'header__login';
  label:'Sign in';
} | {
  class:'hide';
  label:'';
}

const authState : Record<AuthButtonStatus, AuthState> = {
  [AuthButtonStatus.LogIn]: {
    class: 'header__signout',
    label: 'Sign out'
  },
  [AuthButtonStatus.LogOut]: {
    class: 'header__login',
    label: 'Sign in'
  },
  [AuthButtonStatus.Hide]: {
    class: 'hide',
    label: ''
  }
};

function AuthButton ({authButtonState}:ButtonStatus):JSX.Element {
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
