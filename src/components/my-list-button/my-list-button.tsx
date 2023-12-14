import { useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/user-process.selectors';
import { getFavoriteFilms, getFilm } from '../../store/wtw-data/wtw-data.selectors';
import { AuthorizationStatus } from '../../const';

export default function MyListButton() {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  const film = useAppSelector(getFilm);

  return (
    <button className="btn btn--list film-card__button" type="button">
      {film?.isFavorite && authorizationStatus === AuthorizationStatus.Auth ?
        <svg viewBox="0 0 18 14" width={18} height={14}>
          <use xlinkHref="#in-list" />
        </svg> :
        <svg viewBox="0 0 19 20" width={19} height={20}>
          <use xlinkHref="#add" />
        </svg>}
      <span>My list</span>
      <span className="film-card__count">{favoriteFilms.length}</span>
    </button>
  );
}
