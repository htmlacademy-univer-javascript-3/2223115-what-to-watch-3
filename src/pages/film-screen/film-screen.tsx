import { Helmet } from 'react-helmet-async';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FilmScreenProps } from './film-screen-props';
import { Film } from '../../types/films';
import Footer from '../../components/footer/footer';
import Logo from '../../components/logo/logo';
import { AppRoute } from '../../const';

export default function FilmScreen({filmCards}: FilmScreenProps): JSX.Element {
  const {id} = useParams();
  const currentFilm = filmCards.find((film) => film.id === id) as Film;
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>WTW: Описание {currentFilm.name}</title>
      </Helmet>
      <section className="film-card film-card--full" style={{backgroundColor: currentFilm.backgroundColor}}>
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src={currentFilm.backgroundImage}
              alt={currentFilm.name}
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
              <h2 className="film-card__title">{currentFilm.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{currentFilm.genre}</span>
                <span className="film-card__year">{currentFilm.date}</span>
              </p>
              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button" onClick={() => {
                  navigate(`/${AppRoute.Player}/${id}`);
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
                src={currentFilm.posterImage}
                alt={`${currentFilm.name }poster`}
                width={218}
                height={327}
              />
            </div>
            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#" className="film-nav__link">
                            Overview
                    </a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">
                            Details
                    </a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">
                            Reviews
                    </a>
                  </li>
                </ul>
              </nav>
              <div className="film-rating">
                <div className="film-rating__score">{currentFilm.rating}</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">{currentFilm.reviewsCount} ratings</span>
                </p>
              </div>
              <div className="film-card__text">
                <p>{currentFilm.description}</p>
                <p className="film-card__director">
                  <strong>Director: {currentFilm.director}</strong>
                </p>
                <p className="film-card__starring">
                  <strong>
                            Starring: {currentFilm.starring.join(', ')}
                  </strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <div className="catalog__films-list">
            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img
                  src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
                  alt="Fantastic Beasts: The Crimes of Grindelwald"
                  width={280}
                  height={175}
                />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">
                        Fantastic Beasts: The Crimes of Grindelwald
                </a>
              </h3>
            </article>
            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img
                  src="img/bohemian-rhapsody.jpg"
                  alt="Bohemian Rhapsody"
                  width={280}
                  height={175}
                />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">
                        Bohemian Rhapsody
                </a>
              </h3>
            </article>
            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/macbeth.jpg" alt="Macbeth" width={280} height={175} />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">
                        Macbeth
                </a>
              </h3>
            </article>
            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="img/aviator.jpg" alt="Aviator" width={280} height={175} />
              </div>
              <h3 className="small-film-card__title">
                <a className="small-film-card__link" href="film-page.html">
                        Aviator
                </a>
              </h3>
            </article>
          </div>
        </section>
        <Footer/>
      </div>
    </>
  );
}
