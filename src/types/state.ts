import { store } from '../store';
import { AuthorizationStatus } from '../const';
import { Film } from './film';
import { ReviewData } from './review';
import { UserData } from './user-data';

export type UserProcess = {
  authorizationStatus: AuthorizationStatus;
  userInfo: UserData | undefined;
}

export type WtwData = {
  films: Film[];
  isFilmsDataLoading: boolean;
  isFilmDataLoading: boolean;
  film: Film | undefined;
  similarFilms: Film[];
  reviews: ReviewData[];
}

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
