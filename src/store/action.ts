import { createAction } from '@reduxjs/toolkit';
import { Genre } from '../types/genre';
import { Film } from '../types/film';

export const changeGenre = createAction<Genre>('genre/changeGenre');

export const setFilmsDataLoadingStatus = createAction<boolean>('data/setFilmsDataLoadingStatus');

export const loadFilms = createAction<Film[]>('data/loadFilms');

export const requireAuthorization = createAction<string>('user/requireAuthorization');
