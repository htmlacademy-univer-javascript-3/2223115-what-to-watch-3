import SmallFilmCard from '../small-film-card/small-film-card';
import { FilmsListProps } from './films-list-props';
import { SmallFilmCardProps } from '../small-film-card/small-film-card-props';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';

export default function FilmsList({smallFilmCards}: FilmsListProps): JSX.Element {
  const [idActiveFilm, setIdActiveFilm] = useState('');
  const [idActiveVideo, setIdActiveVideo] = useState('');
  const navigate = useNavigate();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleFilmMouseOver = (id: string) => {
    setIdActiveFilm(id);
    timeoutRef.current = setTimeout(() => {
      setIdActiveVideo(id);
    }, 1000);
  };

  const handleFilmMouseLeave = () => {
    setIdActiveFilm('')
    setIdActiveVideo('');
    clearTimeout(timeoutRef.current as NodeJS.Timeout);
  };

  return (
    <div className="catalog__films-list">
      {smallFilmCards.map((smallFilmCard: SmallFilmCardProps) => (
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
      )
      )}
    </div>
  );
}
