import { Helmet } from 'react-helmet-async';
import FilmCard from '../../components/film-card/film-card';
import SmallFilmCard from '../../components/small-film-card/small-film-card';
import { SmallFilmCardProps } from '../../components/small-film-card/small-film-card-props';
import { MainScreenProps } from './main-screen-props';

export default function MainScreen({filmCard, smallFilmCards}: MainScreenProps): JSX.Element {
  return (
    <>
      <Helmet>
        <title>WTW: Главная страница</title>
      </Helmet>
      <FilmCard
        title={filmCard.title}
        genre={filmCard.genre}
        date={filmCard.date}
      />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <ul className="catalog__genres-list">
            <li className="catalog__genres-item catalog__genres-item--active">
              <a href="#" className="catalog__genres-link">
                        All genres
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                        Comedies
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                        Crime
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                        Documentary
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                        Dramas
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                        Horror
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                        Kids &amp; Family
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                        Romance
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                        Sci-Fi
              </a>
            </li>
            <li className="catalog__genres-item">
              <a href="#" className="catalog__genres-link">
                        Thrillers
              </a>
            </li>
          </ul>
          <div className="catalog__films-list">
            {smallFilmCards.map((smallFilmCard: SmallFilmCardProps) =>
              (
                <SmallFilmCard
                  key={smallFilmCard.id}
                  imgSrc={smallFilmCard.imgSrc}
                  title={smallFilmCard.title}
                />
              )
            )}
          </div>
          <div className="catalog__more">
            <button className="catalog__button" type="button">
                    Show more
            </button>
          </div>
        </section>
        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>
          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
