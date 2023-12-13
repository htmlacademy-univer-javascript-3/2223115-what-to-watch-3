import { Helmet } from 'react-helmet-async';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

export default function MyListScreen(): JSX.Element {
  const myFilmCards = filmCards.filter((film) => film.isFavorite === true);
  return (
    <div className="user-page">
      <Helmet>
        <title>WTW: Мой список фильмов</title>
      </Helmet>
      <Header>
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">9</span>
        </h1>
      </Header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList smallFilmCards={myFilmCards}/>
      </section>
      <Footer/>
    </div>
  );
}
