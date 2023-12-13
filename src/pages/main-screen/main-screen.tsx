import { Helmet } from 'react-helmet-async';
import PromoFilmCard from '../../components/promo-film-card/promo-film-card';
import FilmsList from '../../components/films-list/films-list';
import { MainScreenProps } from './main-screen-props';
import Footer from '../../components/footer/footer';
import { useAppSelector } from '../../hooks';
import { Genre } from '../../types/genre';
import GenreList from '../../components/genre-list/genre-list';
import { getGenre } from '../../store/wtw-process/wtw-process.selectors';
import { getFilms } from '../../store/wtw-data/wtw-data.selectors';

export default function MainScreen({promoFilmCard}: MainScreenProps): JSX.Element {
  const films = useAppSelector(getFilms);
  const genres: Genre[] = ['All genres', ...new Set(films.map((film) => film.genre))] as Genre[];
  const activeGenre = useAppSelector(getGenre);

  return (
    <>
      <Helmet>
        <title>WTW: Главная страница</title>
      </Helmet>
      <PromoFilmCard
        name={promoFilmCard.name}
        genre={promoFilmCard.genre}
        released={promoFilmCard.released}
      />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenreList genres={genres}/>
          <FilmsList smallFilmCards={films} genre={activeGenre}/>
        </section>
        <Footer/>
      </div>
    </>
  );
}
