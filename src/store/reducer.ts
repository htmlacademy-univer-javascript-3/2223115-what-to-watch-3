import {createReducer} from '@reduxjs/toolkit';
import { changeGenre, loadFilms, setFilmsDataLoadingStatus, requireAuthorization, loadUserInfo } from './action';
import { Film } from '../types/film';
import { Genre } from '../types/genre';
import { AuthorizationStatus } from '../const';
import { UserData } from '../types/user-data';

const initialState: {genre: Genre; films: Film[]; isFilmsDataLoading: boolean; authorizationStatus: AuthorizationStatus; userInfo: UserData | null} = {
  genre: 'All genres',
  films: [],
  isFilmsDataLoading: false,
  authorizationStatus: AuthorizationStatus.Unknown,
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
    .addCase(loadFilms, (state, action) => {
      state.films = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    })
    .addCase(loadUserInfo, (state, action) => {
      state.userInfo = action.payload;
    });
});
