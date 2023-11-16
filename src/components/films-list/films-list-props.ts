import { SmallFilmCardProps } from '../small-film-card/small-film-card-props';

export type FilmsListProps = {
  smallFilmCards: SmallFilmCardProps[];
  id?: string;
  genre?: string;
}
