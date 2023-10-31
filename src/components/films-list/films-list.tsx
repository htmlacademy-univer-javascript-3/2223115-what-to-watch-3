import SmallFilmCard from '../small-film-card/small-film-card';
import { FilmsListProps } from './films-list-props';
import { SmallFilmCardProps } from '../small-film-card/small-film-card-props';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoute } from '../../const';

export default function FilmsList({smallFilmCards}: FilmsListProps): JSX.Element {
  const [idActiveFilm, setIdActiveFilm] = useState('');
  const navigate = useNavigate();

  return (
    <div className="catalog__films-list">
      {smallFilmCards.map((smallFilmCard: SmallFilmCardProps) => (
        <article className="small-film-card catalog__films-card"
          key={smallFilmCard.id}
          onMouseOver={() => {
            setIdActiveFilm(smallFilmCard.id);
            return idActiveFilm;
          }}
          onClick={() => navigate(`/${AppRoute.Film}/${idActiveFilm}`)}
        >
          <SmallFilmCard
            id={smallFilmCard.id}
            previewImage={smallFilmCard.previewImage}
            name={smallFilmCard.name}
          />
        </article>
      )
      )}
    </div>
  );
}
