import { PromoFilmCardProps } from './promo-film-card-props';
import Logo from '../logo/logo';
import { AppRoute } from '../../const';
import { Link, useNavigate } from 'react-router-dom';

export default function PromoFilmCard({name, genre, released}: PromoFilmCardProps): JSX.Element{
  const navigate = useNavigate();
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img
          src="img/bg-the-grand-budapest-hotel.jpg"
          alt="The Grand Budapest Hotel"
        />
      </div>
      <h1 className="visually-hidden">WTW</h1>
      <header className="page-header film-card__head">
        <Logo/>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img
                src="img/avatar.jpg"
                alt="User avatar"
                width={63}
                height={63}
              />
            </div>
          </li>
          <li className="user-block__item">
            <Link to={AppRoute.SignIn}className="user-block__link">Sign out</Link>
          </li>
        </ul>
      </header>
      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img
              src="img/the-grand-budapest-hotel-poster.jpg"
              alt={`${name} poster`}
              width={218}
              height={327}
            />
          </div>
          <div className="film-card__desc">
            <h2 className="film-card__title">{name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{genre}</span>
              <span className="film-card__year">{released}</span>
            </p>
            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button" onClick={() => {
                navigate(`${AppRoute.Player}/0`);
              }}
              >
                <svg viewBox="0 0 19 19" width={19} height={19}>
                  <use xlinkHref="#play-s" />
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list film-card__button" type="button">
                <svg viewBox="0 0 19 20" width={19} height={20}>
                  <use xlinkHref="#add" />
                </svg>
                <span>My list</span>
                <span className="film-card__count">9</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}