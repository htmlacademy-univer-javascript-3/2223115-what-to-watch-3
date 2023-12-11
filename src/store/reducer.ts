import {createReducer} from '@reduxjs/toolkit';
import {
  changeGenre,
  loadFilms,
  setFilmsDataLoadingStatus,
  setFilmDataLoadingStatus,
  setUserInfo,
  loadFilm,
  loadSimilarFilms,
  loadReviews,
} from './action';
import { Film } from '../types/film';
import { Genre } from '../types/genre';
import { UserData } from '../types/user-data';
import { ReviewData } from '../types/review';

type InitialState = {
  genre: Genre;
  films: Film[];
  film: Film | undefined;
  similarFilms: Film[];
  reviews: ReviewData[];
  isFilmsDataLoading: boolean;
  isFilmDataLoading:boolean;
  userInfo: UserData | null;
};

const initialState: InitialState = {
  genre: 'All genres',
  films: [],
  film: undefined,
  similarFilms: [],
  reviews: [],
  isFilmsDataLoading: false,
  isFilmDataLoading: false,
  userInfo: null,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeGenre, (state, action) => {
      state.genre = action.payload;
    })
    .addCase(setFilmsDataLoadingStatus, (state, action) => {
      state.isFilmsDataLoading = action.payload;
    })
    .addCase(setFilmDataLoadingStatus, (state, action) => {
      state.isFilmDataLoading = action.payload;
    })
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(setUserInfo, (state, action) => {
      state.userInfo = action.payload;
    })
    .addCase(loadFilm, (state, action) => {
      state.film = action.payload;
    })
    .addCase(loadSimilarFilms, (state, action) => {
      state.similarFilms = action.payload;
    })
    .addCase(loadReviews, (state, action) =>{
      state.reviews = action.payload;
    });
});
