import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { logoutAction } from '../../store/api-action';

export default function Logout(): JSX.Element {
  const dispatch = useAppDispatch();
  const avatarUrl = useAppSelector((state) => state.userInfo?.avatarUrl);

  return(
    <ul className="user-block">
      <li className="user-block__item">
        <div className="user-block__avatar">
          <img
            src={avatarUrl}
            alt="User avatar"
            width={63}
            height={63}
          />
        </div>
      </li>
      <li className="user-block__item" onClick={(evt) => {
        evt.preventDefault();
        dispatch(logoutAction());
      }}
      >
        <Link to={AppRoute.SignIn} className="user-block__link">Sign out</Link>
      </li>
    </ul>
  );
}

