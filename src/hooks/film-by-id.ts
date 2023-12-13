import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '.';
import { fetchFilmAction, fetchSimilarFilmsAction, fetchReviewsAction } from '../store/api-action';
import { Film } from '../types/film';
import { ReviewData } from '../types/review';
import { getFilm, getSimilarFilms, getReviews } from '../store/wtw-data/wtw-data.selectors';

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

  const film = useAppSelector(getFilm) as Film;
  const similarFilms = useAppSelector(getSimilarFilms);
  const reviews = useAppSelector(getReviews);

  const result: [Film, Film[], ReviewData[]] = [film, similarFilms, reviews];

  return result;
}
