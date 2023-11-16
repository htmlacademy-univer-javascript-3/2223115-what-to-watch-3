import SmallFilmCard from '../small-film-card/small-film-card';
import { FilmsListProps } from './films-list-props';
import { SmallFilmCardProps } from '../small-film-card/small-film-card-props';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';

const DEFAULT_COUNT_FILM = 8;

export default function FilmsList({smallFilmCards, id, genre}: FilmsListProps): JSX.Element {
  const [idActiveFilm, setIdActiveFilm] = useState('');
  const [idActiveVideo, setIdActiveVideo] = useState('');
  const navigate = useNavigate();
  const [countShownFilms, setCountShownFilm] = useState(DEFAULT_COUNT_FILM);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const similarFilms = genre !== 'All genres'
    ? smallFilmCards.filter((film) => film.id !== id && film.genre === genre)
    : smallFilmCards;

  const handleFilmMouseOver = (filmId: string) => {
    setIdActiveFilm(filmId);
    timeoutRef.current = setTimeout(() => {
      setIdActiveVideo(filmId);
    }, 1000);
  };

  const handleFilmMouseLeave = () => {
    setIdActiveFilm('');
    setIdActiveVideo('');
    clearTimeout(timeoutRef.current as NodeJS.Timeout);
  };

  return (
    <div className="catalog__films-list">
      {similarFilms
        .slice(0, countShownFilms)
        .map((smallFilmCard: SmallFilmCardProps) => (
          <article className="small-film-card catalog__films-card"
            key={smallFilmCard.id}
            onMouseOver={() => handleFilmMouseOver(smallFilmCard.id)}
            onMouseLeave={handleFilmMouseLeave}
            onClick={() => navigate(`/${AppRoute.Film}/${idActiveFilm}`)}
          >
            <SmallFilmCard
              id={smallFilmCard.id}
              previewImage={smallFilmCard.previewImage}
              previewVideoLink={smallFilmCard.previewVideoLink}
              name={smallFilmCard.name}
              isActiveVideo={idActiveVideo === smallFilmCard.id}
            />
          </article>
      ))}
    </div>
  );
}
