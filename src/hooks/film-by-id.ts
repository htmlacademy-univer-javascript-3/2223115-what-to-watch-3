import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '.';
import { fetchFilmAction, fetchSimilarFilmsAction } from '../store/api-action';
import { Film } from '../types/film';

export default function useFilmById() {
  const urlParams = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (urlParams.id) {
      dispatch(fetchFilmAction({id: urlParams.id}));
      dispatch(fetchSimilarFilmsAction({id: urlParams.id}));
    }
  }, [dispatch, urlParams.id]);

  const film = useAppSelector((state) => state.film) as Film;
  const similarFilms = useAppSelector((state) => state.similarFilms);

  const result: [Film, Film[]] = [film, similarFilms];

  return result;
}
