import {createReducer} from '@reduxjs/toolkit';
import { changeGenre, loadFilms, setFilmsDataLoadingStatus, requireAuthorization } from './action';
import { Film } from '../types/film';
import { Genre } from '../types/genre';
import { AuthorizationStatus } from '../const';

const initialState: {genre: Genre; films: Film[]; isFilmsDataLoading: boolean; authorizationStatus: string} = {
  genre: 'All genres',
  films: [],
  isFilmsDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});
