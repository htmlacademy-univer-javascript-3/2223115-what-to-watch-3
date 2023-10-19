import { SmallFilmCardProps } from './small-film-card-props';

export default function SmallFilmCard({posterImage, name}: SmallFilmCardProps): JSX.Element {
  return (
    <>
      <div className="small-film-card__image">
        <img
          src={posterImage}
          alt={name}
          width={280}
          height={175}
        />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{name}</a>
      </h3>
    </>
  );
}
