import { AppProps } from './app-props';
import { AppRoute, AuthorizationStatus } from '../../const';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import MainScreen from '../../pages/main-screen/main-screen';
import SignInScreen from '../../pages/sign-in-screen/sign-in-screen';
import MyListScreen from '../../pages/my-list-screen/my-list-screen';
import FilmScreen from '../../pages/film-screen/film-screen';
import AddReviewScreen from '../../pages/add-review-screen/add-review-screen';
import PlayerScreen from '../../pages/player-screen/player-screen';
import NotFoundScreen from '../../pages/not-found-screen/not-found-screen';

export default function App({promoFilmCard, filmCards}: AppProps): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainScreen promoFilmCard={promoFilmCard} smallFilmCards={filmCards}/>}
          />
          <Route
            path={AppRoute.SignIn}
            element={<SignInScreen/>}
          />
          <Route
            path={AppRoute.MyList}
            element={
              <PrivateRoute authorizationStatus={AuthorizationStatus.Auth}>
                <MyListScreen filmCards={filmCards}/>
              </PrivateRoute>
            }
          />
          <Route
            path={AppRoute.Film}
            element={<FilmScreen/>}
          />
          <Route
            path={AppRoute.AddReview}
            element={<AddReviewScreen/>}
          />
          <Route path={AppRoute.Player}>
            <Route index element={<NotFoundScreen/>}/>
            <Route path=':id' element={<PlayerScreen filmCards={filmCards}/>}/>
          </Route>
          <Route
            path={AppRoute.NotFound}
            element={<NotFoundScreen/>}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
