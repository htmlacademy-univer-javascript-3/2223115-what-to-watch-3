import SmallFilmCard from '../small-film-card/small-film-card';
import { FilmsListProps } from './films-list-props';
import { SmallFilmCardProps } from '../small-film-card/small-film-card-props';
import { useState } from 'react';

export default function FilmsList({smallFilmCards}: FilmsListProps): JSX.Element {
  const [idActiveFilm, setIdActiveFilm] = useState('');

  return (
    <div className="catalog__films-list">
      {smallFilmCards.map((smallFilmCard: SmallFilmCardProps) => (
        <article className="small-film-card catalog__films-card"
          key={smallFilmCard.id}
          onMouseOver={() => {
            setIdActiveFilm(smallFilmCard.id);
            return idActiveFilm;
          }}
        >
          <SmallFilmCard
            id={smallFilmCard.id}
            promoImage={smallFilmCard.promoImage}
            name={smallFilmCard.name}
          />
        </article>
      )
      )}
    </div>
  );
}
