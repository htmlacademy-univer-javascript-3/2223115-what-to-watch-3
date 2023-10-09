import { AppProps } from './app-props';
import MainScreen from '../../pages/main-screen/main-screen';

export default function App ({filmCard, smallFilmCards}: AppProps): JSX.Element {
  return (
    <MainScreen
      filmCard={filmCard}
      smallFilmCards={smallFilmCards}
    />
  );
}
