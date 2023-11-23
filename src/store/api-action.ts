import {AxiosInstance} from 'axios';
import { State, AppDispatch } from '../types/state';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loadFilms } from './action';
import { APIRoute } from '../const';
import { Film } from '../types/film';

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Film[]>(APIRoute.Films);
    dispatch(loadFilms(data));
  }
)