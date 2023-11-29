import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import { AppRoute } from '../../const';
import Tabs from '../../components/tabs/tabs';
import { reviewsData } from '../../mocks/reviews';
import FilmsList from '../../components/films-list/films-list';
import { useAppSelector } from '../../hooks';
import useFilmById from '../../hooks/film-by-id';
import Spinner from '../../components/spinner/spinner';

export default function FilmScreen(): JSX.Element {
  const film = useFilmById();
  const navigate = useNavigate();
  const isFilmDataLoading = useAppSelector((state) => state.isFilmDataLoading);

  return (
    <div>
      {film && !isFilmDataLoading ?
        <>
          <Helmet>
            <title>WTW: Описание {film.name}</title>
          </Helmet>
          <section className="film-card film-card--full" style={{backgroundColor: film.backgroundColor}}>
            <div className="film-card__hero">
              <div className="film-card__bg">
                <img
                  src={film.backgroundImage}
                  alt={film.name}
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
                    <Link to={`/${AppRoute.SignIn}`} className="user-block__link">Sign out</Link>
                  </li>
                </ul>
              </header>
              <div className="film-card__wrap">
                <div className="film-card__desc">
                  <h2 className="film-card__title">{film.name}</h2>
                  <p className="film-card__meta">
                    <span className="film-card__genre">{film.genre}</span>
                    <span className="film-card__year">{film.released}</span>
                  </p>
                  <div className="film-card__buttons">
                    <button className="btn btn--play film-card__button" type="button" onClick={() => {
                      navigate(`/${AppRoute.Player}/${film.id}`);
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
                    <Link to={`${AppRoute.AddReview}`} className="btn film-card__button">
                         Add review
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="film-card__wrap film-card__translate-top">
              <div className="film-card__info">
                <div className="film-card__poster film-card__poster--big">
                  <img
                    src={film.posterImage}
                    alt={`${film.name }poster`}
                    width={218}
                    height={327}
                  />
                </div>
                <Tabs film={film} reviews={reviewsData}/>
              </div>
            </div>
          </section>
          <div className="page-content">
            <section className="catalog catalog--like-this">
              <h2 className="catalog__title">More like this</h2>
              <FilmsList smallFilmCards={[]} id={film.id} genre={film.genre}/>
            </section>
            <Footer/>
          </div>
        </> : <Spinner />}
    </div>
  );
}
