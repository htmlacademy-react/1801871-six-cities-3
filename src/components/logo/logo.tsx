import {Link} from 'react-router-dom';
import { AppRoute } from '../../const';
import React from 'react';

function LogoComponent ():JSX.Element {
  return(
    <Link className="header__logo-link" to={AppRoute.Root}>
      <img
        className="header__logo"
        src="img/logo.svg"
        alt="6 cities logo"
        width={81}
        height={41}
      />
    </Link>
  );
}


const Logo = React.memo(LogoComponent);

export default Logo;
