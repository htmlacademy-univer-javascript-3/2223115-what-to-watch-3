import {createReducer} from '@reduxjs/toolkit';
import { changeGenre, getFilms } from './action';
import { Film } from '../types/film';
import { Genre } from '../types/genre';
import { films } from '../mocks/films';

const initialState: {genre: Genre; films: Film[]} = {
  genre: 'All genres',
  films: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(getFilms, (state) => {
      state.films = films;
    });
});
