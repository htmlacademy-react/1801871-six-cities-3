import { useAppSelector } from '../../store/hooks';

function UserInfo ():JSX.Element {
  const userInfo = useAppSelector((state)=> state.userInfo);
  return (
    <li className="header__nav-item user">
      <a
        className="header__nav-link header__nav-link--profile"
        href="#"
      >
        <div className="header__avatar-wrapper user__avatar-wrapper"
          style={{
            backgroundImage: `url(${userInfo?.avatarUrl})`}}
        >

        </div>
        <span className="header__user-name user__name">
          {userInfo?.email}
        </span>
        <span className="header__favorite-count">3</span>
      </a>
    </li>
  );
}

export default UserInfo;
