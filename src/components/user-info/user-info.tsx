import { Link } from 'react-router-dom';
import { useAppSelector } from '../../store/hooks';
import { AppRoute } from '../../const';

function UserInfo ():JSX.Element {
  const userInfo = useAppSelector((state)=> state.auth.userInfo);
  const favorites = useAppSelector((state)=> state.favorites.favorites);
  return (
    <li className="header__nav-item user">
      <span
        className="header__nav-link header__nav-link--profile"

      >
        <div className="header__avatar-wrapper user__avatar-wrapper"
          style={{
            backgroundImage: `url(${userInfo?.avatarUrl})`}}
        >

        </div>
        <span className="header__user-name user__name">
          {userInfo?.email}
        </span>
        <Link to={AppRoute.Favorite}>
          <span className="header__favorite-count">{favorites?.length}</span>
        </Link>
      </span>
    </li>
  );
}

export default UserInfo;
