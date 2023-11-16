import { Helmet } from 'react-helmet-async';
import PromoFilmCard from '../../components/promo-film-card/promo-film-card';
import FilmsList from '../../components/films-list/films-list';
import { MainScreenProps } from './main-screen-props';
import Footer from '../../components/footer/footer';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { Genre } from '../../types/genre';
import { useEffect } from 'react';
import { getFilms } from '../../store/action';
import GenreList from '../../components/genre-list/genre-list';

export default function MainScreen({promoFilmCard}: MainScreenProps): JSX.Element {
  const dispatch = useAppDispatch();
  const genres: Genre[] = useAppSelector((state) => ['All genres', ...new Set(state.films.map((film) => film.genre))] as Genre[]);
  const activeGenre = useAppSelector((state) => state.genre);
  const films = useAppSelector((state) => state.films);

  useEffect(() => {
    dispatch(getFilms());
  }, [dispatch]);

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
