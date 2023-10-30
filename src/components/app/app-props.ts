import { PromoFilmCardProps } from '../promo-film-card/promo-film-card-props';
import { Film } from '../../types/films';

export type AppProps = {
    promoFilmCard: PromoFilmCardProps;
    filmCards: Film[];
}
