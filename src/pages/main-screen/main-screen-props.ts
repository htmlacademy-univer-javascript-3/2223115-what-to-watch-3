import { FilmCardProps } from "../../components/film-card/film-card-props";
import { SmallFilmCardProps } from "../../components/small-film-card/small-film-card-props";

export type MainScreenProps = {
    filmCard: FilmCardProps;
    smallFilmCards: SmallFilmCardProps[];
}