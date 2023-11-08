import cn from 'classnames';
import FilmOverview from './tab-film-overview';
import FilmDetails from './tab-film-details';
import FilmReviews from './tab-film-reviews';
import { useState } from 'react';
import { Film } from '../../types/film';
import { ReviewData } from '../../types/review';

type TabsProps = {
  film: Film;
  reviews: ReviewData[];
}

export default function Tabs({film, reviews}: TabsProps): JSX.Element{
  const [activeTab, setActiveTab] = useState(
    <FilmOverview
      rating={film.rating}
      scoresCount={film.scoresCount}
      description={film.description}
      director={film.director}
      starring={film.starring}
    />);
  const [disabledLink, setDisabledLink] = useState('Overview');

  const handleOverviewLinkClick = () => {
    setActiveTab(
      <FilmOverview
        rating={film.rating}
        scoresCount={film.scoresCount}
        description={film.description}
        director={film.director}
        starring={film.starring}
      />);
    setDisabledLink('Overview');
  };

  const handleDetailsLinkClick = () => {
    setActiveTab(
      <FilmDetails
        director={film.director}
        starring={film.starring}
        runTime={film.runTime}
        genre={film.genre}
        released={film.released}
      />
    );
    setDisabledLink('Detils');
  };

  const handleReviewsLinkClick = () => {
    setActiveTab(
      <FilmReviews
        reviews={reviews}
      />
    );
    setDisabledLink('Reviews');
  };

  return(
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={cn('film-nav__item', {'film-nav__item--active': disabledLink === 'Overview'})}>
            <a className="film-nav__link" onClick={handleOverviewLinkClick}>
                    Overview
            </a>
          </li>
          <li className={cn('film-nav__item', {'film-nav__item--active': disabledLink === 'Details'})}>
            <a className="film-nav__link" onClick={handleDetailsLinkClick}>
                    Details
            </a>
          </li>
          <li className={cn('film-nav__item', {'film-nav__item--active': disabledLink === 'Reviews'})}>
            <a className="film-nav__link" onClick={handleReviewsLinkClick}>
                    Reviews
            </a>
          </li>
        </ul>
      </nav>
      {activeTab}
    </div>
  );
}

