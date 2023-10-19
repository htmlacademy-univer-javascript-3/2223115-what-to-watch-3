import { FilmCardProps } from '../film-card/film-card-props';
import { Film } from '../../types/films';

export type AppProps = {
    promoFilmCard: FilmCardProps;
    filmCards: Film[];
}
