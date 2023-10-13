import { AppProps } from './app-props';
import { AppRoute } from '../../const/const';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainScreen from '../../pages/main-screen/main-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';

export default function App({filmCard, smallFilmCards}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen filmCard={filmCard} smallFilmCards={smallFilmCards}/>}
        />
        <Route
          path={AppRoute.SignIn}
          element={<SignInScreen/>}
        />
        <Route
          path={AppRoute.MyList}
          element={<MyListScreen/>}
        />
        <Route
          path={AppRoute.Film}
          element={<FilmScreen/>}
        />
        <Route
          path={AppRoute.AddReview}
          element={<AddReviewScreen/>}
        />
        <Route
          path={AppRoute.Player}
          element={<PlayerScreen/>}
        />
      </Routes>
    </BrowserRouter>
  );
}
