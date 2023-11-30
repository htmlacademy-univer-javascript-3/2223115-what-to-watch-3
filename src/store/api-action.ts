import {AxiosInstance} from 'axios';
import { State, AppDispatch } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadFilms, requireAuthorization, setFilmsDataLoadingStatus, setFilmDataLoadingStatus, redirectToRoute, setUserInfo, loadFilm, loadSimilarFilms, loadReviews } from './action';
import { APIRoute, AuthorizationStatus, AppRoute } from '../const';
import { Film } from '../types/film';
import { AuthData } from '../types/auth-data';
import { UserData } from '../types/user-data';
import { ReviewData } from '../types/review';
import { saveToken, dropToken } from '../services/token';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setFilmsDataLoadingStatus(true));
    const {data} = await api.get<Film[]>(APIRoute.Films);
    dispatch(setFilmsDataLoadingStatus(false));
    dispatch(loadFilms(data));
  }
);

export const fetchFilmAction = createAsyncThunk<void, {id: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilm',
  async ({id}, {dispatch, extra: api}) => {
    try {
      dispatch(setFilmDataLoadingStatus(true));
      const {data} = await api.get<Film>(`${APIRoute.Films}/${id}`);
      dispatch(setFilmDataLoadingStatus(false));
      dispatch(loadFilm(data));
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
    }
  }
);

export const fetchSimilarFilmsAction = createAsyncThunk<void, {id: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchSimilarFilms',
  async ({id}, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>(`${APIRoute.Films}/${id}/similar`);
    dispatch(loadSimilarFilms(data));
  }
);

export const fetchReviewsAction = createAsyncThunk<void, {id: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchReviews',
  async ({id}, {dispatch, extra: api}) => {
    const {data} = await api.get<ReviewData[]>(`${APIRoute.Comments}/${id}`);
    dispatch(loadReviews(data));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  }
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({login: email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(AppRoute.Main));
    dispatch(setUserInfo(data));
  }
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    dispatch(setUserInfo(null));
  },
);
