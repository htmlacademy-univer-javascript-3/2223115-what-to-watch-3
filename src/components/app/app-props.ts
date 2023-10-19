import { FilmCardProps } from '../film-card/film-card-props';
import { SmallFilmCardProps } from '../small-film-card/small-film-card-props';

export type AppProps = {
    promoFilmCard: FilmCardProps;
    smallFilmCards: SmallFilmCardProps[];
}
