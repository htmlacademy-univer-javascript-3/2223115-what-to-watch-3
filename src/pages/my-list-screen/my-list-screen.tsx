import { Helmet } from 'react-helmet-async';
import { MyListProps } from './my-list-screen-props';
import FilmsList from '../../components/films-list/films-list';
import Logo from '../../components/logo/logo';
import Footer from '../../components/footer/footer';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

export default function MyListScreen({filmCards}: MyListProps): JSX.Element {
  const myFilmCards = filmCards.filter((film) => film.isFavorite === true);
  return (
    <div className="user-page">
      <Helmet>
        <title>WTW: Мой список фильмов</title>
      </Helmet>
      <header className="page-header user-page__head">
        <Logo/>
        <h1 className="page-title user-page__title">
                My list <span className="user-page__film-count">9</span>
        </h1>
        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width={63} height={63} />
            </div>
          </li>
          <li className="user-block__item">
            <Link to={`/${AppRoute.SignIn}`} className="user-block__link">Sign out</Link>
          </li>
        </ul>
      </header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList smallFilmCards={myFilmCards}/>
      </section>
      <Footer/>
    </div>
  );
}
