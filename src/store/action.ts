import { createAction } from '@reduxjs/toolkit';
import { Genre } from '../types/genre';
import { Film } from '../types/film';
import { UserData } from '../types/user-data';
import { ReviewData } from '../types/review';

export const changeGenre = createAction<Genre>('wtw/changeGenre');

export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');

export const setFilmDataLoadingStatus = createAction<boolean>('data/setFilmDataLoadingStatus');

export const loadFilms = createAction<Film[]>('data/loadFilms');

export const loadFilm = createAction<Film>('data/loadFilm');

export const loadSimilarFilms = createAction<Film[]>('data/loadSimilarFilms');

export const loadReviews = createAction<ReviewData[]>('data/loadReviews');

export const redirectToRoute = createAction<string>('wtw/redirectToRoute');

export const setUserInfo = createAction<UserData | null>('user/setUserInfo');
