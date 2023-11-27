import {createReducer} from '@reduxjs/toolkit';
import { changeGenre, loadFilms, setFilmsDataLoadingStatus } from './action';
import { Film } from '../types/film';
import { Genre } from '../types/genre';

const initialState: {genre: Genre; films: Film[]; isFilmsDataLoading: boolean} = {
  genre: 'All genres',
  films: [],
  isFilmsDataLoading: false,
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
    });
});
