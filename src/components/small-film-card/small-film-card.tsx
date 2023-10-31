import { SmallFilmCardProps } from './small-film-card-props';
import VideoPlayer from '../video-player/video-player';

export default function SmallFilmCard({previewImage, previewVideoLink, isActiveVideo, name}: SmallFilmCardProps): JSX.Element {
  return (
    <>
      <div className="small-film-card__image">
        {isActiveVideo
          ? <VideoPlayer previewVideoLink={previewVideoLink} previewImage={previewImage}/>
          : <img src={previewImage} alt={name} width={280} height={175}/>}
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{name}</a>
      </h3>
    </>
  );
}
