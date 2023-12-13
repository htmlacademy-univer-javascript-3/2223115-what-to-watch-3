import { Helmet } from 'react-helmet-async';
import FilmsList from '../../components/films-list/films-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { useAppSelector } from '../../hooks';
import { getFavoriteFilms } from '../../store/wtw-data/wtw-data.selectors';

export default function MyListScreen(): JSX.Element {
  const favoriteFilms = useAppSelector(getFavoriteFilms);
  return (
    <div className="user-page">
      <Helmet>
        <title>WTW: Мой список фильмов</title>
      </Helmet>
      <Header>
        <h1 className="page-title user-page__title">
          My list <span className="user-page__film-count">{favoriteFilms.length}</span>
        </h1>
      </Header>
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <FilmsList smallFilmCards={favoriteFilms}/>
      </section>
      <Footer/>
    </div>
  );
}
