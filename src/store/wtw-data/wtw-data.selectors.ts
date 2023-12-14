import { State } from '../../types/state';
import { NameSpace } from '../../const';
import { Film } from '../../types/film';
import { ReviewData } from '../../types/review';

export const getFilms = (state: State): Film[] => state[NameSpace.Data].films;
export const getFilmsDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isFilmsDataLoading;
export const getFilm = (state: State): Film | undefined => state[NameSpace.Data].film;
export const getFilmDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isFilmDataLoading;
export const getSimilarFilms = (state: State): Film[] => state[NameSpace.Data].similarFilms;
export const getReviews = (state: State): ReviewData[] => state[NameSpace.Data].reviews;
export const getPromoFilm = (state: State): Film | undefined => state[NameSpace.Data].promoFilm;
export const getPromoFilmDataLoadingStatus = (state: State): boolean => state[NameSpace.Data].isPromoFilmDataLoading;
export const getFavoriteFilms = (state: State): Film[] => state[NameSpace.Data].favoriteFilms;
