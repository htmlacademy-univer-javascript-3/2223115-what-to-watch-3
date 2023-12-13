import { Helmet } from 'react-helmet-async';
import ReviewsForm from '../../components/review-form/review-form';
import { Link } from 'react-router-dom';
import { Film } from '../../types/film';
import { AppRoute } from '../../const';
import { useAppSelector } from '../../hooks';
import Logo from '../../components/logo/logo';
import Logout from '../../components/logout/logout';
import { getFilm } from '../../store/wtw-data/wtw-data.selectors';

export default function AddReviewScreen(): JSX.Element {
  const currentFilm = useAppSelector(getFilm) as Film;

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
          <Logo/>
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
          <Logout/>
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
        <ReviewsForm id={currentFilm.id}/>
      </div>
    </section>
  );
}
