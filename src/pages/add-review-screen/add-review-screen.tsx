import { Helmet } from 'react-helmet-async';
import { AddReviewScreenProps } from './add-review-screen-props';
import ReviewsForm from '../../components/review-form/review-form';
import { useParams, Link } from 'react-router-dom';
import { Film } from '../../types/film';
import { AppRoute } from '../../const';

export default function AddReviewScreen({filmCards}: AddReviewScreenProps): JSX.Element {
  const {id} = useParams();
  const currentFilm = filmCards.find((film) => film.id === id) as Film;

  return (
    <section className="film-card film-card--full" style={{backgroundColor: currentFilm.backgroundColor}}>
      <Helmet>
        <title>WTW: Оценка {currentFilm.name}</title>
      </Helmet>
      <div className="film-card__header">
        <div className="film-card__bg">
          <img
            src={currentFilm.backgroundImage}
            alt={currentFilm.name}
          />
        </div>
        <h1 className="visually-hidden">WTW</h1>
        <header className="page-header">
          <div className="logo">
            <Link to={AppRoute.Main} className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </Link>
          </div>
          <nav className="breadcrumbs">
            <ul className="breadcrumbs__list">
              <li className="breadcrumbs__item">
                <Link to={`/${AppRoute.Film}/${currentFilm.id}`} className="breadcrumbs__link">{currentFilm.name}</Link>
              </li>
              <li className="breadcrumbs__item">
                <a className="breadcrumbs__link">Add review</a>
              </li>
            </ul>
          </nav>
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
        <div className="film-card__poster film-card__poster--small">
          <img
            src={currentFilm.posterImage}
            alt={`${currentFilm.name }poster`}
            width={218}
            height={327}
          />
        </div>
      </div>
      <div className="add-review">
        <ReviewsForm/>
      </div>
    </section>
  );
}
