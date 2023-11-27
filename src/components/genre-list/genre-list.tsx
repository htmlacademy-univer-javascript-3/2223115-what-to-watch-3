import { GenreListProps } from './genre-list-props';
import cn from 'classnames';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { Link } from 'react-router-dom';
import { Genre } from '../../types/genre';
import { changeGenre } from '../../store/action';

export default function GenreList({genres}: GenreListProps): JSX.Element {
  const activeGenre: Genre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();

  const handleGenreClick = (newGenre: Genre) => {
    dispatch(changeGenre(newGenre));
  };

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li key={genre} className={cn('catalog__genres-item', {'catalog__genres-item--active': genre === activeGenre})}>
          <Link to="#" className="catalog__genres-link" onClick={() => handleGenreClick(genre)}>
            {genre}
          </Link>
        </li>
      ))}
    </ul>);
}