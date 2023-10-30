import { PromoFilmCardProps } from '../../components/promo-film-card/promo-film-card-props';
import { SmallFilmCardProps } from '../../components/small-film-card/small-film-card-props';

export type MainScreenProps = {
    promoFilmCard: PromoFilmCardProps;
    smallFilmCards: SmallFilmCardProps[];
}
