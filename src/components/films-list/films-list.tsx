import SmallFilmCard from '../small-film-card/small-film-card';
import { FilmsListProps } from './films-list-props';
import { SmallFilmCardProps } from '../small-film-card/small-film-card-props';

export default function FilmsList({smallFilmCards}: FilmsListProps): JSX.Element {
  return (
    <div className="catalog__films-list">
      {smallFilmCards.map((smallFilmCard: SmallFilmCardProps) =>
        (
          <SmallFilmCard
            key={smallFilmCard.id}
            posterImage={smallFilmCard.posterImage}
            name={smallFilmCard.name}
          />
        )
      )}
    </div>
  );
}
