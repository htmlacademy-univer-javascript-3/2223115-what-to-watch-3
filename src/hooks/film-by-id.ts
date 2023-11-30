import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '.';
import { fetchFilmAction, fetchSimilarFilmsAction, fetchReviewsAction } from '../store/api-action';
import { Film } from '../types/film';
import { ReviewData } from '../types/review';

export default function useFilmInfoById() {
  const {id} = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmAction({id: id}));
      dispatch(fetchSimilarFilmsAction({id: id}));
      dispatch(fetchReviewsAction({id: id}));
    }
  }, [dispatch, id]);

  const film = useAppSelector((state) => state.film) as Film;
  const similarFilms = useAppSelector((state) => state.similarFilms);
  const reviews = useAppSelector((state) => state.reviews);

  const result: [Film, Film[], ReviewData[]] = [film, similarFilms, reviews];

  return result;
}
