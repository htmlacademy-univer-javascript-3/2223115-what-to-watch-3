import Login from '../login/login';
import Logout from '../logout/logout';
import Logo from '../logo/logo';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../const';

export default function Header(): JSX.Element {
  const authorizationStatus = useAppSelector((state) => state.authorizationStatus);

  return (
    <header className="page-header film-card__head">
      <Logo/>
      {authorizationStatus === AuthorizationStatus.Auth
        ? <Logout />
        : <Login />}
    </header>
  );
}
