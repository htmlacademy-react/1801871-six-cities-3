import { AuthButtonStatus } from '../../const';
import { Link } from 'react-router-dom';


type ButtonStatus= {
  authButtonState: AuthButtonStatus;
}

function AuthButton ({authButtonState}:ButtonStatus):JSX.Element {
  return (
    <li className="header__nav-item">
      <Link className="header__nav-link" to="/login">
        {authButtonState === AuthButtonStatus.LogOut ? <span className="header__signout">Sign out</span> : <span className="header__login">Sign in</span>}
      </Link>
    </li>
  );
}


export default AuthButton;
