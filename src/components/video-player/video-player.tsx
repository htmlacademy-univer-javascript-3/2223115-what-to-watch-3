import { VideoPlayerProps } from './video-player-props';

export default function VideoPlayer({previewVideoLink, posterImage}: VideoPlayerProps): JSX.Element {
  return (
    <video
      src={previewVideoLink}
      poster={posterImage}
      muted
      loop
      autoPlay
      width="100%"
      height="100%"
    >
    </video>
  );
}
