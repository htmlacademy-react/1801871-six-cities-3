import { AuthButtonStatus } from '../../const';

type ButtonStatus= {
  authButtonState: AuthButtonStatus;
}

function AuthButton ({authButtonState}:ButtonStatus):JSX.Element {
  return (
    <li className="header__nav-item">
      <a className="header__nav-link" href="#">
        {authButtonState === AuthButtonStatus.LogIn ? <span className="header__signout">Sign out</span> : <span className="header__login">Sign in</span>}
      </a>
    </li>
  );
}


export default AuthButton;
