import { createAction } from '@reduxjs/toolkit';
import { Genre } from '../types/genre';
import { Film } from '../types/film';
import { AuthorizationStatus } from '../const';
import { AppRoute } from '../const';
import { UserData } from '../types/user-data';

export const changeGenre = createAction<Genre>('genre/changeGenre');

export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');

export const setFilmDataLoadingStatus = createAction<boolean>('data/setFilmDataLoadingStatus');

export const loadFilms = createAction<Film[]>('data/loadFilms');

export const loadFilm = createAction<Film>('data/loadFilm');

export const requireAuthorization = createAction<AuthorizationStatus>('user/requireAuthorization');

export const redirectToRoure = createAction<AppRoute>('app/redirectToRoute');

export const setUserInfo = createAction<UserData | null>('user/setUserInfo');
