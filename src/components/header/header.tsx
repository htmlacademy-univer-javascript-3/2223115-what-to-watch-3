import Login from '../login/login';
import Logout from '../logout/logout';
import Logo from '../logo/logo';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';
import cn from 'classnames';

type HeaderProps = {
  children?: JSX.Element;
}

export default function Header({children}: HeaderProps): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  const headerClass = cn('page-header', {
    'user-page__head': children,
    'film-card__head': !children,
  });

  return (
    <header className={headerClass} >
      <Logo/>
      {children}
      {authorizationStatus === AuthorizationStatus.Auth
        ? <Logout />
        : <Login />}
    </header>
  );
}
