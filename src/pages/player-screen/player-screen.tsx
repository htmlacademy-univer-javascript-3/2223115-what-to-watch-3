import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { AppRoute } from '../../const';
import useFilmById from '../../hooks/film-by-id';
import { useAppSelector } from '../../hooks';
import Spinner from '../../components/spinner/spinner';
import { getFilmDataLoadingStatus } from '../../store/wtw-data/wtw-data.selectors';

function getRunTime(runTime: number): string {
  const hours = Math.trunc(runTime / 60);
  const minutes = runTime % 60;
  return `${hours}:${minutes}`;
}

export default function PlayerScreen(): JSX.Element {
  const film = useFilmById();
  const isFilmDataLoading = useAppSelector(getFilmDataLoadingStatus);
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlay, setIsPlay] = useState<boolean>(false);

  const handleVideoPlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlay(true);
    }
  };

  const handleVideoPause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlay(false);
    }
  };

  const handleVideoFullScreen = () => {
    if (videoRef.current) {
      videoRef.current.requestFullscreen().then();
    }
  };

  return (
    <div>
      {isFilmDataLoading
        ? <Spinner /> :
        <div className="player">
          <Helmet>
            <title>WTW: Плеер {film.name}</title>
          </Helmet>
          <video ref={videoRef} src={film.videoLink} className="player__video" poster={film.posterImage}/>
          <button type="button" className="player__exit" onClick={() => navigate(`/${AppRoute.Film}/${film.id}`)}>
            Exit
          </button>
          <div className="player__controls">
            <div className="player__controls-row">
              <div className="player__time">
                <progress className="player__progress" value={30} max={100} />
                <div className="player__toggler" style={{ left: '30%' }}>
                  Toggler
                </div>
              </div>
              <div className="player__time-value">{getRunTime(film.runTime)}</div>
            </div>
            <div className="player__controls-row">
              {isPlay ?
                <button type="button" className="player__play" onClick={handleVideoPause}>
                  <svg viewBox="0 0 14 21" width="14" height="21">
                    <use xlinkHref="#pause"></use>
                  </svg>
                  <span>Pause</span>
                </button> :
                <button type="button" className="player__play" onClick={handleVideoPlay}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>}
              <div className="player__name">Transpotting</div>
              <button type="button" className="player__full-screen" onClick={handleVideoFullScreen}>
                <svg viewBox="0 0 27 27" width={27} height={27}>
                  <use xlinkHref="#full-screen" />
                </svg>
                <span>Full screen</span>
              </button>
            </div>
          </div>
        </div>}
    </div>
  );
}
