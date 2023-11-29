import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '.';
import { fetchFilmAction } from '../store/api-action';

export default function useFilmById() {
  const urlParams = useParams();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (urlParams.id) {
      dispatch(fetchFilmAction({id: urlParams.id}));
    }
  }, [dispatch, urlParams.id]);

  return useAppSelector((state) => state.film);
}
