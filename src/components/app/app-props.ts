import { FilmCardProps } from "../film-card/film-card-props";
import { SmallFilmCardProps } from "../small-film-card/small-film-card-props";

export type AppProps = {
    filmCard: FilmCardProps;
    smallFilmCards: SmallFilmCardProps[];
}